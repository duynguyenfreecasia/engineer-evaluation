import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/api/api.service';
import { Subscribable } from 'src/app/infrastructure/components/base-component/subscribable';
import { FormFieldInputType } from '../../form/enums/form-field-input-type.enum';
import { FormFieldType } from '../../form/enums/form-field-type.enum';
import { FormInput } from '../../form/interfaces/form-input.interface';

@Injectable()
export class EvaluateCreateService extends Subscribable {
  constructor(private readonly apiService: ApiService) {
    super();
  }

  public geEvaluateCreateFormInput(): FormInput {
    const result: FormInput = {
      fields: [
        {
          key: 'title',
          type: FormFieldType.SECTION_HEADER,
          label: '評価フォーム',
          classes: 'title__form',
        },
        {
          key: 'textarea',
          type: FormFieldType.TEXT_AREA,
          label: 'エンジニア評価システム（仮）',
          required: false,
        },
        {
          key: 'id',
          type: FormFieldType.INPUT,
          required: true,
          validators: [Validators.required],
          label: 'ID',
          placeholder: 'ID',
        },
        {
          key: 'password',
          type: FormFieldType.INPUT,
          inputType: FormFieldInputType.PASSWORD,
          required: true,
          validators: [Validators.required],
          label: 'Password',
          placeholder: 'Password',
        },
        {
          key: 'select',
          type: FormFieldType.SELECT,
          required: true,
          validators: [Validators.required],
          placeholder: 'Choose Me',
        },
      ],
      primaryButtonLabel: 'Submit',
    };
    return result;
  }
}
