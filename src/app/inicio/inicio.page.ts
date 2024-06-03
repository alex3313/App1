import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  user: any;

  constructor(private router: Router, private carritoService: CarritoService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['user']) {
      this.user = navigation.extras.state['user'];
    }
  }

  irAlCatalogo() {
    const navigationExtras: NavigationExtras = {
      state: { user: this.user }
    };
    this.router.navigate(['/catalogo'], navigationExtras);
  }

  irAlCarrito() {
    const navigationExtras: NavigationExtras = {
      state: { user: this.user }
    };
    this.router.navigate(['/cart'], navigationExtras);
  }

  irAmicuenta() {
    const navigationExtras: NavigationExtras = {
      state: { user: this.user }
    };
    this.router.navigate(['/home'], navigationExtras);
  }

}
  