import { Component} from '@angular/core';
import { RecetaService } from './services/receta.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Recetas2';

  constructor(public recetaService: RecetaService) {}

  backup(){
    this.recetaService.getBackup().subscribe(res => {
      alert('Se ha generado una copia de seguridad en la consola');
      console.log(res);
    })
  }

}
