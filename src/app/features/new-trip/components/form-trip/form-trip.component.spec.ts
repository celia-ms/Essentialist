import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormTripComponent } from './form-trip.component';
import { MaterialModule } from '../../../../shared/material/material.module';
import { appReducers } from '../../../../core/store/app.state';
import { tripMock } from '../../../../core/mocks/trip.mock';
import { Trip } from '../../../../core/models/trip';

describe('FormTripComponent', () => {
  let component: FormTripComponent;
  let fixture: ComponentFixture<FormTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(appReducers),
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => {
              return new TranslateHttpLoader(http);
            },
            deps: [HttpClient],
          },
        }),
      ],
      declarations: [FormTripComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have the fields: title, image, destination, visibility_status, departure_date and arrival_date', () => {
    expect(component.tripForm.contains('title')).toBeTruthy();
    expect(component.tripForm.contains('image')).toBeTruthy();
    expect(component.tripForm.contains('destination')).toBeTruthy();
    expect(component.tripForm.contains('visibility_status')).toBeTruthy();
    expect(component.tripForm.contains('departure_date')).toBeTruthy();
    expect(component.tripForm.contains('arrival_date')).toBeTruthy();
  });

  it('should have the fields: title, image, visibility_status, departure_date and arrival_date required', () => {
    const controls = component.tripForm.controls;
    controls.title.setValue('');
    expect(controls.title.setValue('')).toBeFalsy();
    controls.image.setValue('');
    expect(controls.image.setValue('')).toBeFalsy();
    controls.visibility_status.setValue('');
    expect(controls.visibility_status.setValue('')).toBeFalsy();
    controls.departure_date.setValue('');
    expect(controls.departure_date.setValue('')).toBeFalsy();
    controls.arrival_date.setValue('');
    expect(controls.arrival_date.setValue('')).toBeFalsy();
  });

  describe('form trip functions', () => {
    describe('loadForm function', () => {
      it('should load the form with the trip data', () => {
        const controls = component.tripForm.controls;
        component.trip = tripMock;
        component.loadForm();
        expect(controls.title.value).toBe(tripMock.title);
        expect(controls.image.value).toBe(tripMock.image);
        expect(controls.visibility_status.value).toBe(
          tripMock.visibility_status
        );
        expect(controls.departure_date.value).toBe(tripMock.departure_date);
        expect(controls.arrival_date.value).toBe(tripMock.arrival_date);
      });
    });

    describe('saveForm function', () => {
      it('should save the form data in the trip', () => {
        const controls = component.tripForm.controls;
        component.trip = {} as Trip;

        controls.title.setValue(tripMock.title);
        controls.image.setValue(tripMock.image);
        controls.visibility_status.setValue(tripMock.visibility_status);
        controls.departure_date.setValue(tripMock.departure_date);
        controls.arrival_date.setValue(tripMock.arrival_date);

        component.saveForm();

        expect(component.trip.title).toBe(controls.title.value);
        expect(component.trip.image).toBe(controls.image.value);
        expect(component.trip.visibility_status).toBe(
          controls.visibility_status.value
        );
        expect(component.trip.departure_date).toBe(
          controls.departure_date.value
        );
        expect(component.trip.arrival_date).toBe(controls.arrival_date.value);
      });

      it('should return false if the form is not valid', () => {
        const controls = component.tripForm.controls;
        component.trip = {} as Trip;

        controls.title.setValue(tripMock.title);
        controls.image.setValue(tripMock.image);

        const isSave = component.saveForm().isSave;

        expect(isSave).toBeFalse();
      });

      it('should return true if the form is valid', () => {
        component.trip = tripMock;
        component.loadForm();

        const isSave = component.saveForm().isSave;

        expect(isSave).toBeTrue();
      });
    });

    describe('resetForm function', () => {
      it('should reset the form data', () => {
        const controls = component.tripForm.controls;
        component.trip = tripMock;

        component.loadForm();

        expect(controls.title.value).toBe(tripMock.title);

        component.resetForm();

        expect(controls.title.value).toBeNull();
      });

      it('should reset the trip data', () => {
        component.trip = tripMock;

        component.resetForm();

        expect(component.trip).toEqual({} as Trip);
      });
    });
  });
});
