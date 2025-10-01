import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "Registro de Usuarios";
  mensaje = "";
  registrado = false;
  nombre = "";
  apellido = "";
  cargo = "";

  registrar_usuario() {
    this.registrado = true;

    if (this.cargo == "Ingeniero") {
      this.mensaje = "Eres lo mejor";

    } else if (this.cargo == "Licenciado") {
      this.mensaje = "Eres lo peor";
      
    } else {
      this.mensaje = "Registrado";
    }
}


    entradas: any[];

  constructor(){
    this.entradas = [
      {
        titulo: "Python, cada día más presente"
      },
      {
        titulo: "Java, presente en más de 30 años"
      },
      {
        titulo: "JavaScript, cada día más funcional"
      }
    ];
  }
}
