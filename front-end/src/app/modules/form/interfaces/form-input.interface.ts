import { FormField } from './form-field.interface';
import { FormObservables } from './form-observables.interface';

export interface FormInput extends FormObservables {
  title?: string;
  subtitle?: string;
  fields?: FormField[];
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  skipCheckInvalidForm?: false;
}
