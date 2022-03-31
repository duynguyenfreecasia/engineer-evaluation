import { ValidatorFn } from '@angular/forms';
import { Options } from 'src/app/infrastructure/interfaces/common.interface';
import { FormFieldInputType } from '../enums/form-field-input-type.enum';
import { FormFieldType } from '../enums/form-field-type.enum';
import { FormObservables } from './form-observables.interface';

export interface FormFieldError {
  // Type can be one of required, email, maxLength...
  type: string;

  // Message to show if error existed
  message: string;
}

export interface BaseFormField extends FormObservables {
  key: string;

  formFieldId?: string;

  type: FormFieldType;

  classes?: string;

  label?: string;

  labelOutSide?: string;

  placeholder?: string;

  validators?: ValidatorFn | ValidatorFn[] | null;

  initValue?: any;

  required?: boolean;

  disabled?: boolean;

  hidden?: boolean;

  errors?: FormFieldError[];

  icon?: string;

  /**
   * Use in case of FormFieldType.ROW
   */
  fields?: FormField[];

  valueId?: string;
}

export interface InputFormField extends BaseFormField {
  /**
   * Set `input[type]` when type is FormFieldType.INPUT
   */
  inputType?: FormFieldInputType;

  minLength?: number;

  maxLength?: number;

  pattern?: string;

  suffix?: string;

  // extended config for inputType = number
  min?: number;

  max?: number;
}

export interface TextareaFormField extends BaseFormField {
  maxRows?: number;

  minLength?: number;

  maxLength?: number;

  isEditor?: boolean;
}

export interface DropDownFormField extends BaseFormField {
  /**
   * Set options for dropdown when type is FormFieldType.DROPDOWN
   */
  options?: Options[];

  multiple?: boolean;

  open?: boolean;
}

export interface RadioFormField extends BaseFormField {
  /**
   * Set group radio-buttons
   */
  options?: { value: string; label: string; disabled?: boolean }[];

  /**
   * Whether the direction for radio-buttons. Defaults to 'row'
   */
  flexDirection?: 'column' | 'row';
}

export interface PasswordFormField extends BaseFormField {
  minLength?: number;

  maxLength?: number;

  pattern?: string;

  suffix?: string;

  inputType?: FormFieldInputType;

  /**
   * Use in case on handle icon FormFieldType.PASSWORD & add icon
   */
  handleIcon?: (field?: any) => void;

  maxRows?: number;
}

export interface DatePickerFormField extends BaseFormField {
  minDate?: Date;

  maxDate?: Date;
}

export interface CheckboxFormField extends BaseFormField {
  labelLink?: string;

  /**
   * Use in case of FormFieldType.CHECKBOX have link in label
   */
  linkClicked?: () => void;
}

export type FormField =
  | BaseFormField
  | InputFormField
  | TextareaFormField
  | DropDownFormField
  | RadioFormField
  | PasswordFormField
  | DatePickerFormField;
