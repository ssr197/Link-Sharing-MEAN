import { Component, OnInit, ViewEncapsulation, ElementRef, Renderer } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../field.interface';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';

@Component({
  selector: "pv-date",
  templateUrl: "./date.component.html",
  styleUrls: ['./date.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DateComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  value: any;
  constructor(private renderer: Renderer, private elementRef: ElementRef) {}

  dateOptions: INgxMyDpOptions = {
    dateFormat: 'dd-mmm-yyyy',
  };

  model: Object = { date: { year: 2018, month: 10, day: 9 } };

  onDateChanged(event: IMyDateModel): void {
    this.value = event.formatted;
    console.log(this.value);
  }
  
  ngOnInit() {
    this.setCustomClass(this.field.fieldWidth);
    this.value = this.field.defaultValue;
  }
  setCustomClass(fieldWidth) {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'col-md-' + fieldWidth, true);
  }

  setFormattedValue(date) {
    return date.formatted;
  }
}
