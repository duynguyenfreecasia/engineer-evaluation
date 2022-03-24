import { FormField } from './form-field.interface';

export interface FormSelect extends FormField {
  options?: Options[];
}

export interface Options {
  label?: string;
  value?: string | number;
}
