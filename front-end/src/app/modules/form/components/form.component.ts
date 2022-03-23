import { Location } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, OperatorFunction } from 'rxjs';
import { BaseComponent } from '../../../infrastructure/components/base-component/base.component';
import { FormFieldInputType } from '../enums/form-field-input-type.enum';
import { FormFieldType } from '../enums/form-field-type.enum';
import { FormField } from '../interfaces/form-field.interface';
import { FormInput } from '../interfaces/form-input.interface';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class AppFormComponent extends BaseComponent implements OnChanges {
  @Input() contentTemplate: TemplateRef<any> | any;

  @Input() formInput: FormInput | any;
  @Input() formInitValues: any;

  @Output() primaryEmitter = new EventEmitter<any>();
  @Output() secondaryEmitter = new EventEmitter<any>();

  public form: FormGroup | any;
  public formFieldType = FormFieldType;
  public formFieldInputType = FormFieldInputType;

  isPrimaryLoading = false;

  constructor(
    private readonly location: Location,
    private readonly formBuilder: FormBuilder
  ) {
    super();
  }

  public onPrimaryButtonClick(): void {
    if (this.isPrimaryDisabled()) {
      return;
    }
    // const value = ObjectUtils.deleteIfEmpty(this.form.value);
    const value = this.form?.value;
    this.transformOutput(value);
    this.primaryEmitter.next(value);
  }

  public onSecondaryButtonClick(): void {
    this.secondaryEmitter.next(null);
  }

  public goBack() {
    this.location.back();
  }

  public clearFile(formControl: any) {
    formControl.setValue(undefined);
  }

  public isPrimaryDisabled() {
    return this.isPrimaryLoading || this.form?.invalid;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['formInitValues']?.currentValue) {
      this.initFormValues();
    }
  }

  protected override onInit() {
    this.initForm();
    this.initFormValues();
  }

  private initForm() {
    if (!this.formInput) {
      return;
    }

    const buildControlsConfig: any = (fields: FormField[]) => {
      return fields.reduce((previousValue: any, currentValue) => {
        if (currentValue.type === FormFieldType.ROW) {
          const innerConfig = buildControlsConfig(currentValue.fields);
          const fullConfig = {
            ...previousValue,
            ...innerConfig,
          };
          return fullConfig;
        }

        previousValue[currentValue.key] = [
          {
            value: currentValue.initValue,
            disabled: currentValue.disabled || false,
          },
          currentValue.validators,
        ];
        return previousValue;
      }, {});
    };

    const controlsConfig = buildControlsConfig(this.formInput.fields);
    this.form = this.formBuilder.group(controlsConfig);

    if (this.formInput.valueChanges) {
      this.initPipe(
        this.form?.valueChanges,
        this.formInput?.valueChangesPipes
      ).subscribe((value: any) =>
        this.formInput?.valueChanges(value, this.form)
      );
    }
    if (this.formInput.statusChanges) {
      this.initPipe(
        this.form.statusChanges,
        this.formInput.statusChangesPipes
      ).subscribe((status: any) =>
        this.formInput?.statusChanges(status, this.form)
      );
    }

    this.formInput?.fields?.forEach((field: FormField) =>
      this.initFormField(field)
    );
  }

  private initFormField(field: FormField | any) {
    const control: any = this.form?.controls[field.key];
    if (field.valueChanges) {
      this.initPipe(control?.valueChanges, field.valueChangesPipes).subscribe(
        (value: any) => field.valueChanges(value, this.form)
      );
    }
    if (field.statusChanges) {
      this.initPipe(control?.statusChanges, field.statusChangesPipes).subscribe(
        (status: any) => field.statusChanges(status, this.form)
      );
    }
  }

  private initPipe(
    observable: Observable<any>,
    valueChangesPipes: OperatorFunction<any, any>[]
  ): any {
    if (!valueChangesPipes || valueChangesPipes.length === 0) {
      return observable;
    }
    if (valueChangesPipes.length === 1) {
      return observable.pipe(valueChangesPipes[0]);
    }
    if (valueChangesPipes.length === 2) {
      return observable.pipe(valueChangesPipes[0], valueChangesPipes[1]);
    }
    if (valueChangesPipes.length === 3) {
      return observable.pipe(
        valueChangesPipes[0],
        valueChangesPipes[1],
        valueChangesPipes[2]
      );
    }
    if (valueChangesPipes.length === 4) {
      return observable.pipe(
        valueChangesPipes[0],
        valueChangesPipes[1],
        valueChangesPipes[2],
        valueChangesPipes[3]
      );
    }
    if (valueChangesPipes.length === 5) {
      return observable.pipe(
        valueChangesPipes[0],
        valueChangesPipes[1],
        valueChangesPipes[2],
        valueChangesPipes[3],
        valueChangesPipes[4]
      );
    }
    if (valueChangesPipes.length === 6) {
      return observable.pipe(
        valueChangesPipes[0],
        valueChangesPipes[1],
        valueChangesPipes[2],
        valueChangesPipes[3],
        valueChangesPipes[4],
        valueChangesPipes[5]
      );
    }
    if (valueChangesPipes.length === 7) {
      return observable.pipe(
        valueChangesPipes[0],
        valueChangesPipes[1],
        valueChangesPipes[2],
        valueChangesPipes[3],
        valueChangesPipes[4],
        valueChangesPipes[5],
        valueChangesPipes[6]
      );
    }
    if (valueChangesPipes.length === 8) {
      return observable.pipe(
        valueChangesPipes[0],
        valueChangesPipes[1],
        valueChangesPipes[2],
        valueChangesPipes[3],
        valueChangesPipes[4],
        valueChangesPipes[5],
        valueChangesPipes[6],
        valueChangesPipes[7]
      );
    }
    if (valueChangesPipes.length === 9) {
      return observable.pipe(
        valueChangesPipes[0],
        valueChangesPipes[1],
        valueChangesPipes[2],
        valueChangesPipes[3],
        valueChangesPipes[4],
        valueChangesPipes[5],
        valueChangesPipes[6],
        valueChangesPipes[7],
        valueChangesPipes[8]
      );
    }
    if (valueChangesPipes.length > 9) {
      return observable.pipe(
        valueChangesPipes[0],
        valueChangesPipes[1],
        valueChangesPipes[2],
        valueChangesPipes[3],
        valueChangesPipes[4],
        valueChangesPipes[5],
        valueChangesPipes[6],
        valueChangesPipes[7],
        valueChangesPipes[8],
        ...valueChangesPipes.slice(9)
      );
    }
  }

  private initFormValues() {
    if (!this.form || !this.formInitValues) {
      return;
    }
    this.transformInput(this.formInitValues);
    this.form.patchValue(this.formInitValues);
  }

  private transformInput(data: any) {
    this.formInput?.fields?.forEach((field: any) => {
      if (field.type === FormFieldType.INPUT) {
        // TODO: input date
      }
    });
  }

  private transformOutput(data: any) {
    this.formInput?.fields?.forEach((field: any) => {
      if (field.type === FormFieldType.INPUT) {
        if (field.inputType === FormFieldInputType.NUMBER) {
          const key = field.key;
          const value = data[key];
          if (!value) {
            return;
          }
          const valueAsNumber = Number(value);
          data[key] = valueAsNumber;
        }
      }
    });
  }
}
