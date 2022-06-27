import { Injectable } from '@angular/core';
import * as _moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  convertDates(departure_date: string, arrival_date: string) {
    let date = '';
    if (_moment(departure_date).year() === _moment(arrival_date).year()) {
      if (_moment(departure_date).month() === _moment(arrival_date).month()) {
        date = `${_moment(departure_date).format('MMMM Do')} to ${_moment(
          arrival_date
        ).format('Do, YYYY')}`;
      } else {
        date = `${_moment(departure_date).format('MMMM Do')} to ${_moment(
          arrival_date
        ).format('MMMM Do, YYYY')}`;
      }
    } else {
      date = `${_moment(departure_date).format('MMMM Do, YYYY')} to ${_moment(
        arrival_date
      ).format('MMMM Do, YYYY')}`;
    }
    return date;
  }
}
