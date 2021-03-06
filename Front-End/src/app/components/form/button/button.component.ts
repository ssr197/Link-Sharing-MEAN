import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../field.interface';
@Component({
  selector: "pv-button",
  templateUrl: "./button.component.html",
  styles: []
})
export class ButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor(private renderer: Renderer, private elementRef: ElementRef) {
  }
  setCustomClass(fieldWidth) {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'col-md-' + fieldWidth, true);
  }
  ngOnInit() {
    this.setCustomClass(this.field.fieldWidth);
  }
}
