import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../../../../infrastructure/components/base-component/base.component';
import { CheckboxFormField } from '../../interfaces/form-field.interface';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppCheckBoxComponent extends BaseComponent {
  @Input() field: CheckboxFormField | any;
  @Input() control: FormControl | any;
}
