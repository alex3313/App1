import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  carrito: any[] = [];
  user: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['user']) {
      this.user = navigation.extras.state['user'];
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      const storedCart = localStorage.getItem(`carrito_${this.user.username}`);
      if (storedCart) {
        this.carrito = JSON.parse(storedCart);
      }
    }
  }

   ngOnInit() {}

  irAlCatalogo() {
    const navigationExtras: NavigationExtras = {
      state: { carrito: this.carrito, user: this.user }
    };
    this.router.navigate(['/catalogo'], navigationExtras);
  }

  irAlCarrito() {
    const navigationExtras: NavigationExtras = {
      state: { carrito: this.carrito, user: this.user }
    };
    this.router.navigate(['/cart'], navigationExtras);

  }
  irAmicuenta() {
    const navigationExtras: NavigationExtras = {
      state: { carrito: this.carrito, user: this.user }
    };
    this.router.navigate(['/home'], navigationExtras);
  }

}
  