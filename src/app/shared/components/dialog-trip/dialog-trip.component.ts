import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Trip } from 'src/app/core/models/trip';

@Component({
  selector: 'app-dialog-trip',
  templateUrl: './dialog-trip.component.html',
  styleUrls: ['./dialog-trip.component.scss'],
})
export class DialogTripComponent implements OnInit {
  @ViewChild('dialog', { static: true }) dialog: any;
  dialogRef!: MatDialogRef<any>;

  @Input('trip') trip: Trip = {} as Trip;
  @Output() closeClick = new EventEmitter();

  constructor(public matDialog: MatDialog) {}

  ngOnInit(): void {}

  open(): void {
    this.dialogRef = this.matDialog.open(this.dialog, {
      width: '60vw',
      height: '82vh',
      backdropClass: 'dialog-trip-container',
    });
  }

  close() {
    this.closeClick.emit();
    this.dialogRef.close();
  }
}
