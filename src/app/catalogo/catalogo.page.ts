import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  libros = [
    { id: 1, titulo: 'Cyrano De Bergerac', autor: 'Edmond Restand', precio: 10.000 },
    { id: 2, titulo: 'The Gunslinger', autor: 'Stephen King', precio: 15.000 },
    { id: 3, titulo: 'Vientos De Invierno', autor: 'George RR Martin', precio: 20.000 },
  ];

  constructor(private carritoService: CarritoService, private router: Router) {}

  ngOnInit() {}

  agregarAlCarrito(libro: any) {
    this.carritoService.agregarAlCarrito(libro);
  }

  irACarrito() {
    this.router.navigate(['/cart']);
  }

  volverInicio() {
    this.router.navigate(['/inicio']);
  }
  
  
}