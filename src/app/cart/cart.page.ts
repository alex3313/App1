import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  carrito: any[] = [];
  user: any;

  constructor(private router: Router) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      const storedCart = localStorage.getItem(`carrito_${this.user.username}`);
      if (storedCart) {
        this.carrito = JSON.parse(storedCart);
      }
    }
  }
  ngOnInit() {}
  
  quitarDelCarrito(libro: any) {
    for (let i = 0; i < this.carrito.length; i++) {
      if (this.carrito[i].id === libro.id) {
        if (this.carrito[i].cantidad > 1) {
          this.carrito[i].cantidad--;
        } else {
          this.carrito.splice(i, 1); // Eliminar el libro si la cantidad es 1
        }
        break;
      }
    }
    localStorage.setItem(`carrito_${this.user.username}`, JSON.stringify(this.carrito));
  }

  volverInicio() {
    this.router.navigate(['/inicio']);
  }

  volverCatalogo() {
    this.router.navigate(['/catalogo']);
  }
}