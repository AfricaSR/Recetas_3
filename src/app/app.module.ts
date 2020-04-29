import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { RecetasListComponent } from './components/recetas/recetas-list/recetas-list.component';
import { RecetaComponent } from './components/recetas/receta/receta.component';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';
import { RecetaService } from  './services/receta.service';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewListComponent } from './components/reviews/review-list/review-list.component';
import { ReviewComponent } from './components/reviews/review/review.component';



@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    RecetasListComponent,
    RecetaComponent,
    ReviewsComponent,
    ReviewListComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [RecetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
