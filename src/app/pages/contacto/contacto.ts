import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms'; // 1. Importamos herramientas de formulario


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  private fb = inject(FormBuilder); // inyectamos FormBuilder para crear el formulario

  // 3. Creamos el formulario con validaciones
  contactoForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    asunto: ['', [Validators.required, Validators.minLength(5)]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],});


    enviado=signal(false);
    enviarDatos(){
      if(this.contactoForm.valid){
        console.log(`Datos del formulario: ${this.contactoForm.value}`);
        this.enviado.set(true);
        this.contactoForm.reset();

        setTimeout(() => {
          this.enviado.set(false);
        }, 3000);
    }
    else{this.contactoForm.markAllAsTouched();}


  }
}
