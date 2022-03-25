import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../../../../infrastructure/components/base-component/base.component';
import { DropDownFormField } from '../../interfaces/form-field.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSelectComponent extends BaseComponent {
  @Input() field: DropDownFormField | any;
  @Input() control: FormControl | any;

  // https://github.com/angular/components/issues/10214
  compareFn: ((f1: any, f2: any) => boolean) | null = this.compareByValue;

  private compareByValue(f1: any, f2: any): boolean {
    return f1 && f2 && f1 === f2;
  }
}
