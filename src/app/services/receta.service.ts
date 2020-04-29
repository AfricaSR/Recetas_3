import { Injectable } from '@angular/core';
import { Receta } from '../models/receta';
import { Review } from '../models/review';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecetaService {

  selectReceta: Receta;
  selectReview: Review = new Review();
  recetaList: Receta[];
  reviewList: Array<Review>;
  constructor(private http: HttpClient) {
    this.selectReceta = new Receta();
  }

  // REQUEST A LA API
  getRecetas() {
      return this.http.get('http://localhost:3000/recetas')
  }

  getRecetaSearch(titulo: String){
    return this.http.get('http://localhost:3000/recetas/search?titulo=' + titulo);
  }

  getRecetaOrder(order: Number){
    return this.http.get('http://localhost:3000/recetas/order?order=' + order);
  }

  insertReseta(receta: Receta) {
    return this.http.post('http://localhost:3000/receta', receta);
  }

  updateReceta(receta: Receta) {
    return this.http.put('http://localhost:3000/receta/' + receta._id, receta);
  }

  deleteReceta(receta: Receta){
    return this.http.delete('http://localhost:3000/receta/' + receta._id);
  }

  insertReview(receta: Receta, review: Review){
    return this.http.post('http://localhost:3000/receta/' + receta._id + '/comentario', review);
  };

  getBackup(){
    return this.http.get('http://localhost:3000/recetas/backup');
  }
}
