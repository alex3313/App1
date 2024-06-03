import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  nombre: string = '';
  apellido: string = '';
  tipo_lector: string = '';
  fechaNacimiento: Date = new Date();
  
  constructor(private animationCtrl: AnimationController, private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras && navigation.extras.state) {
        this.username = navigation.extras.state['user'].username; 
        console.log(this.username);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
  
  ngOnInit() {}

  limpiarCampos() {
    // Limpiar los campos antes de iniciar la animación
    this.nombre = '';
    this.apellido = '';
  
    const animation = this.animationCtrl.create()
      .addElement(document.querySelectorAll('.animated-inputs'))
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(0)', 'translateX(100%)');
  
    animation.play();
  
    animation.onFinish(() => {
      // Agregar animación inversa para devolver los campos a su posición original
      const reverseAnimation = this.animationCtrl.create()
        .addElement(document.querySelectorAll('.animated-inputs'))
        .duration(0)
        .iterations(1)
        .fromTo('transform', 'translateX(100%)', 'translateX(0)');
  
      reverseAnimation.play();
    });
  }

  mostrarInformacion() {
    const mensaje = `Nombre: ${this.nombre}\nApellido: ${this.apellido}`;
    alert(mensaje);
  }

  volverInicio() {
    this.router.navigate(['/inicio']);
  }
  
  

}

