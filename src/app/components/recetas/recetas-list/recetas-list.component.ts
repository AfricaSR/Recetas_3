import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecetaService } from '../../../services/receta.service';
import { Receta } from '../../../models/receta';
import { Review } from '../../../models/review';

@Component({
  selector: 'app-recetas-list',
  templateUrl: './recetas-list.component.html',
  styleUrls: ['./recetas-list.component.css']
})
export class RecetasListComponent implements OnInit {

  searchText;
  reviewList: Array<Review>;
  selectedDevice = 0;
  edit = false;
  editId = '';
  editIng = '';
  editPrep = '';
  constructor(
    public recetaService: RecetaService
  ) { }
  //Al iniciar se genera un array de objetos Receta con los datos extraidos de la API
  ngOnInit() {
    this.searchText = null;
    this.recetaService.getRecetas()
    .subscribe(res => {
      this.recetaService.recetaList = res as Receta[];
    });
  }
  
  //Cuando cambia el select del orden, se reorganiza el array de elementos
  onChange(order) {
    if (order!=0){
      this.recetaService.getRecetaOrder(order).subscribe(res => {
        this.recetaService.recetaList = res as Receta[];
      });
      this.selectedDevice = order;
    }else{
      this.recetaService.getRecetas()
      .subscribe(res => {
        this.recetaService.recetaList = res as Receta[];
      });
    }
  }

  //Se encarga de determinar si se edita y qué se edita
  editR(id){
    this.edit = !this.edit;

    if (this.edit==false){
      this.editId = '';
    }else{
      this.editId = id;
      this.editIng = this.recetaService.recetaList.find(i => i._id == id).ingredientes.toString();
      this.editPrep = this.recetaService.recetaList.find(i => i._id == id).preparacion;
    }

  }

  //Toma el id de la receta y la elimina de la lista de recetas y de la base de datos
  borrarR(id){
    let r = this.recetaService.recetaList.find(i => i._id == id);
    this.recetaService.deleteReceta(r).subscribe(res => {
      this.recetaService.recetaList = res as Receta[];
    });

  }

  //Cuando el formulario se guarda, actualiza la información de la receta
  onSubmit(editForm: NgForm, id){
    let r = this.recetaService.recetaList.find(i => i._id == id);
    r.ingredientes=editForm.value.ingredientes.split(',');
    r.preparacion=editForm.value.preparacion;
    this.recetaService.updateReceta(r).subscribe();
    this.editR(id);
  }

  //Envía al backend el texto de la búsqueda
  search(newValue){
    if (newValue!=''){
      this.recetaService.getRecetaSearch(newValue)
      .subscribe(res => {
        this.recetaService.recetaList = res as Receta[];
      });
    }else{
      this.recetaService.getRecetas()
      .subscribe(res => {
        this.recetaService.recetaList = res as Receta[];
      });
    }
  }
}
