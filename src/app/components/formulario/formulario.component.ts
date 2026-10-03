import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonInput, IonLabel, IonSelect, IonSelectOption, IonItem, IonToast, IonText } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  imports: [
    ReactiveFormsModule, IonButton, IonInput, IonLabel, IonSelect, IonSelectOption, IonItem, IonToast, IonText
  ],
})
export class FormularioComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly reservationForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    roomType: ['', Validators.required],
    checkIn: ['', Validators.required],
    guests: [1, [Validators.required, Validators.min(1), Validators.max(8)]],
  });

  submitReservation() {
    this.reservationForm.markAllAsTouched();
    if (this.reservationForm.invalid) {
      return;
    }
  }
}
