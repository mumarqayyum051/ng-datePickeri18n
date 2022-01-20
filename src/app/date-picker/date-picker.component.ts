import { Component, Injectable, OnInit } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MONTHS, WEEK_DAYS, WEEK_LABEL } from '../@constants/datepicker';
const I18N_VALUES = {
  fr: {
    weekdays: WEEK_DAYS,
    months: MONTHS,
    weekLabel: WEEK_LABEL,
  },
  // other languages you would support
};

@Injectable()
export class I18n {
  language = 'fr';
}
@Injectable()
export class DatePickerComponent extends NgbDatepickerI18n {
  constructor(private _i18n: I18n) {
    super();
  }
  ngOnInit() {}

  getWeekdayLabel(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getWeekLabel(): string {
    return I18N_VALUES[this._i18n.language].weekLabel;
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: DatePickerComponent },
  ],
})
export class NgbdDatepickerI18n {
  model!: NgbDateStruct;
}
