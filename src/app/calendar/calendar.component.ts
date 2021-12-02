import { Component, Output, EventEmitter, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';
import { MatCalendar } from '@angular/material';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements AfterViewInit {

  @Output()
  dateSelected: EventEmitter<Moment> = new EventEmitter();

  @Output()
  selectedDate = moment();

  @ViewChild('calendar')
  calendar: MatCalendar<Moment>;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.mat-calendar-previous-button, .mat-calendar-next-button');

    if (buttons) {
      Array.from(buttons).forEach(button => {
        this.renderer.listen(button, 'click', () => {
          alert('Arrow buttons clicked');
        });
      });
    }
  }

  monthSelected(date: Moment) {
    alert('Month selected');
  }

  dateChanged() {
    this.calendar.activeDate = this.selectedDate;
    this.dateSelected.emit(this.selectedDate);
  }

  changeDate() {
    this.selectedDate = moment().add(1, 'days');
  }
}
