import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecetaService } from '../../../services/receta.service';
import { Receta } from '../../../models/receta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  constructor(public recetaService: RecetaService) { }
  //Se llama a la función que creará una receta nueva en base a los valores del formulario
  onSubmit(recetaForm: NgForm){

    let ing = recetaForm.value.ingredientes.split(',');
    let r = new Receta();
    r.titulo = recetaForm.value.titulo;
    r.preparacion = recetaForm.value.preparacion;
    r.imagen = recetaForm.value.imagen;
    r.ingredientes = ing;
    this.resetForm(recetaForm);
    this.recetaService.insertReseta(r).subscribe(res => {
      this.recetaService.recetaList = res as Receta[];
    });
    this.recetaService.getRecetas().subscribe();

  }
  //Generará la lista de recetas al inicializarse
  ngOnInit() {
    this.recetaService.getRecetas().subscribe();
  }

  //Limpia el formulario de entrada de nuevas recetas
  resetForm(form?: NgForm) {
    if (form){
      form.reset();
      this.recetaService.selectReceta = new Receta();
    }
  }

}
