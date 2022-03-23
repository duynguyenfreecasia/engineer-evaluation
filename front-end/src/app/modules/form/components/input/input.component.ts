import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../../../../infrastructure/components/base-component/base.component';
import { FormField } from '../../interfaces/form-field.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class AppInputComponent extends BaseComponent {
  @Input() field: FormField | any;
  @Input() control: FormControl | any;
}
