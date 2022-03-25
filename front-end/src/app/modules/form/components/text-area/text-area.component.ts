import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../../../../infrastructure/components/base-component/base.component';
import { TextareaFormField } from '../../interfaces/form-field.interface';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTextAreaComponent extends BaseComponent {
  @Input() field: TextareaFormField | any;
  @Input() control: FormControl | any;
}
