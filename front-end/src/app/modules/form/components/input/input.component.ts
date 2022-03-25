import { InputFormField } from './../../interfaces/form-field.interface';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../../../../infrastructure/components/base-component/base.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInputComponent extends BaseComponent {
  @Input() field: InputFormField | any;
  @Input() control: FormControl | any;
}
