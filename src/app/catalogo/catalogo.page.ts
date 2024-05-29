import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage {

  libros = [
    { id: 1, titulo: 'Libro 1', autor: 'Autor 1', precio: 10.00 },
    { id: 2, titulo: 'Libro 2', autor: 'Autor 2', precio: 15.00 },
    { id: 3, titulo: 'Libro 3', autor: 'Autor 3', precio: 20.00 },
  ];

  carrito: any[] = [];
  user: any;

  constructor(private router: Router, private navCtrl: NavController) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['carrito']) {
      this.carrito = navigation.extras.state['carrito'];
    }
    if (navigation?.extras.state?.['user']) {
      this.user = navigation.extras.state['user'];
      const storedCart = localStorage.getItem(`carrito_${this.user.username}`);
      if (storedCart) {
        this.carrito = JSON.parse(storedCart);
      }
    }
  }
  ngOnInit() {}

  agregarAlCarrito(libro: any) {
    let found = false;
    for (let item of this.carrito) {
      if (item.id === libro.id) {
        item.cantidad++;
        found = true;
        break;
      }
    }
    if (!found) {
      libro.cantidad = 1;
      this.carrito.push({...libro});
    }
  
    localStorage.setItem(`carrito_${this.user.username}`, JSON.stringify(this.carrito));
    const navigationExtras: NavigationExtras = {
      state: { carrito: this.carrito, user: this.user }
    };
    this.router.navigate(['/cart'], navigationExtras);
  }

  volverInicio() {
    this.router.navigate(['/inicio']);
    
  }
  irACarrito() {
    this.router.navigate(['/cart']);
  }

}