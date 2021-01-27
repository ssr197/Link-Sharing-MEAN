import { Component, OnInit, ElementRef, Renderer, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../field.interface';
@Component({
  selector: "pv-input",
  templateUrl: "./input.component.html",
  styles: []
})
export class TextBoxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor(
    private renderer: Renderer, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.setCustomClass(this.field.fieldWidth);
  }

  setCustomClass(fieldWidth) {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'col-md-' + fieldWidth, true);
  }
}


