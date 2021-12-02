import {
  OnInit,
  Component,
  ViewChild,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('calendar') calendar: MatCalendar<Moment>;

  selectedDate: Moment;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.selectedDate = moment();
  }

  monthSelected(date) {
    alert(`Selected: ${date}`);
  }

  onDateChanged(date) {
    setTimeout(() => {
      this.calendar.activeDate = this.selectedDate;
    });

    alert(`Selected: ${date}`);
  }

  ngAfterViewInit() {
    // Find all arrow buttons in the calendar
    let buttons = document.querySelectorAll(
      'mat-calendar mat-calendar-header button'
    );

    if (buttons) {
      // Listen for click event
      Array.from(buttons).forEach((button) => {
        this.renderer.listen(button, 'click', () => {
          alert('Arrow button clicked');
        });
      });
    }
  }

  changeDate() {
    this.selectedDate = moment().add(1, 'days');
  }
}
