import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { actions, destinationTypes } from 'src/app/core/constants/constants';
import { Trip } from 'src/app/core/models/trip';
import { AppState } from 'src/app/core/store/app.state';
import * as tripSelector from 'src/app/core/store/trip/trip.selector';
import { statusTypes } from '../../../../core/constants/constants';

@Component({
  selector: 'app-form-trip',
  templateUrl: './form-trip.component.html',
})
export class FormTripComponent implements OnInit, OnChanges, OnDestroy {
  @Input('action') action: number = 0;

  actions: typeof actions = actions;

  subscriptions = new Subscription();

  tripForm!: FormGroup;

  trip!: Trip;

  statusTypes: any[] = statusTypes;

  destinationTypes: any[] = destinationTypes;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    this.tripForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      destination: new FormControl('', []),
      visibility_status: new FormControl('', [Validators.required]),
      departure_date: new FormControl('', [Validators.required]),
      arrival_date: new FormControl('', [Validators.required]),
    });

    this.subscriptions.add(
      this.store.pipe(select(tripSelector.getTrip)).subscribe((trip) => {
        this.trip = { ...trip };
        this.loadForm();
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    switch (this.action) {
      case actions.SHOW:
        this.tripForm.disable();
        break;
      case actions.EDIT:
      case actions.NEW:
        this.tripForm.enable();
        break;
    }
  }

  ngOnInit(): void {
    this.resetForm();
  }

  loadForm() {
    this.tripForm.controls.title.setValue(this.trip.title);
    this.tripForm.controls.image.setValue(this.trip.image);
    this.tripForm.controls.visibility_status.setValue(
      this.trip.visibility_status
    );
    this.tripForm.controls.departure_date.setValue(this.trip.departure_date);
    this.tripForm.controls.arrival_date.setValue(this.trip.arrival_date);
  }

  saveForm() {
    let isSave = false;
    if (this.tripForm.valid) {
      this.trip.title = this.tripForm.controls.title.value;
      this.trip.image = this.tripForm.controls.image.value;
      this.trip.visibility_status =
        this.tripForm.controls.visibility_status.value;
      this.trip.departure_date = this.tripForm.controls.departure_date.value;
      this.trip.arrival_date = this.tripForm.controls.arrival_date.value;
      isSave = true;
      switch (this.action) {
        case actions.EDIT:
          break;
        case actions.NEW:
          // this.store.dispatch(createTrip({ trip: this.trip }));
          break;
      }
    } else {
      this.validateAllFormFields(this.tripForm);
    }
    return { isSave, trip: this.trip };
  }

  resetForm() {
    this.tripForm.reset();
    this.trip = {} as Trip;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
