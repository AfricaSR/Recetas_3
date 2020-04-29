import { Review } from './review';

export class Receta {
    _id: string;
    titulo: string;
    preparacion: string;
    ingredientes: Array<string>;
    imagen: string;
    comentarios: Array<Review>;

}
