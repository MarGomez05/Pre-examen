import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('keeps the submit button disabled until all visible required fields are valid', () => {
    const button: HTMLIonButtonElement = fixture.nativeElement.querySelector('ion-button');

    expect(button.disabled).toBe(true);

    component.reservationForm.setValue({
      name: 'Ana Pérez',
      email: 'ana@example.com',
      phone: '5551234567',
      roomType: 'standard',
      checkIn: '2026-10-04',
      guests: 1,
    });
    fixture.detectChanges();

    expect(component.reservationForm.valid).toBe(true);
    expect(button.disabled).toBe(false);
  });

  it('keeps the submit button disabled when the email is invalid', () => {
    component.reservationForm.setValue({
      name: 'Ana Pérez',
      email: 'correo-invalido',
      phone: '5551234567',
      roomType: 'standard',
      checkIn: '2026-10-04',
      guests: 1,
    });
    fixture.detectChanges();

    const button: HTMLIonButtonElement = fixture.nativeElement.querySelector('ion-button');
    expect(button.disabled).toBe(true);
  });
});
