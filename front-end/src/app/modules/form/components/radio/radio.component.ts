import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../../../../infrastructure/components/base-component/base.component';
import { RadioFormField } from '../../interfaces/form-field.interface';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
})
export class AppRadioComponent extends BaseComponent {
  @Input() field: RadioFormField | any;
  @Input() control: FormControl | any;
  @Input() color: string;
}
