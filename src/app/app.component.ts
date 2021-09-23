import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  options!: FormGroup;
  hide = true;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      floatLabel: 'auto',
      hideRequired: true,
    });
  }
  // ctrl = new FormControl('', Validators.required);
}
