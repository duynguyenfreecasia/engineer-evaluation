import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../../../../infrastructure/components/base-component/base.component';
import { PasswordFormField } from '../../interfaces/form-field.interface';

@Component({
  selector: 'app-password',
  templateUrl: './input-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInputPasswordComponent extends BaseComponent {
  @Input() field: PasswordFormField | any;
  @Input() control: FormControl | any;
}
