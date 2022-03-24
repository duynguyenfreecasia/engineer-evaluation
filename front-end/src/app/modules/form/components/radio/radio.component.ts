import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../../../../infrastructure/components/base-component/base.component';
import { FormSelect } from '../../interfaces/form-select.interface';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
})
export class AppInputComponent extends BaseComponent {
  @Input() field: FormSelect | any;
  @Input() control: FormControl | any;
}
