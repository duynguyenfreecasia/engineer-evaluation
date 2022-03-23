import { FormGroup, ValidatorFn } from '@angular/forms';
import { FormFieldInputType } from '../enums/form-field-input-type.enum';
import { FormFieldType } from '../enums/form-field-type.enum';
import { FormObservables } from './form-observables.interface';

export interface FormField extends FormObservables {
  key: string;

  type: FormFieldType;

  /**
   * Set `input[type]` when type is FormFieldType.INPUT
   */
  inputType?: FormFieldInputType;

  classes?: string;

  label?: string;

  labelOutSide?: string;

  placeholder?: string;

  minLength?: number;

  maxLength?: number;

  pattern?: string;

  initValue?: any;

  validators?: ValidatorFn | ValidatorFn[] | null;

  required?: boolean;

  disabled?: boolean;

  prefix?: string;

  suffix?: string;

  hidden?: boolean;

  errors?: {
    // Type can be one of required, email, maxLength...
    type: string;
    // Message to show if error existed
    message: string;
  }[];

  icon?: string;

  iconImage?: string;

  limitImages?: number;

  multiple?: boolean;

  title?: string;

  changeEvent?: ($event: any, form?: FormGroup) => void;

  click?: () => void;

  /**
   * Use in case of FormFieldType.ROW
   */
  fields?: FormField[];

  handleIcon?: (field?: any) => void;
}
