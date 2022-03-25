import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/api/api.service';
import { Subscribable } from 'src/app/infrastructure/components/base-component/subscribable';
import { MessageUtils } from 'src/app/infrastructure/utils/message.utils';
import { FormFieldType } from '../../form/enums/form-field-type.enum';
import { FormField } from '../../form/interfaces/form-field.interface';
import { FormInput } from '../../form/interfaces/form-input.interface';
import { EvaluateCreate } from '../interfaces/evaluate-create.interface';

@Injectable()
export class EvaluateCreateService extends Subscribable {
  public readonly technicalList = ['PHP', 'Python', 'Ruby', 'Node', 'Go'];

  private readonly technicalOptions = [
    {
      label: '全然だめ',
      value: '全然だめ',
    },
    {
      label: 'まぁまぁ',
      value: 'まぁまぁ',
    },
    {
      label: '普通',
      value: '普通',
    },
    {
      label: '良い',
      value: '良い',
    },
    {
      label: '素晴らしい',
      value: '素晴らしい',
    },
  ];

  constructor(private readonly apiService: ApiService) {
    super();
  }

  public geEvaluateCreateFormInput(): FormInput {
    const checkboxFields: FormField[] = this.getTechnicalFormField();

    const result: FormInput = {
      fields: [
        {
          key: 'title',
          type: FormFieldType.SECTION_TITLE,
          label: MessageUtils.EvaluateCreate.Title,
          classes: 'title__form',
        },
        {
          key: 'description',
          type: FormFieldType.SECTION_DESCRIPTION,
          label: MessageUtils.EvaluateCreate.Description,
          classes: 'description__form',
        },
        {
          key: 'technicalStrength',
          type: FormFieldType.SELECT,
          label: 'PHPの技術力はどうでしたか',
          options: this.technicalOptions,
          required: true,
          errors: [
            {
              type: 'required',
              message: MessageUtils.Global.RequiredSelectError,
            },
          ],
        },
        {
          key: 'workAttitude',
          type: FormFieldType.INPUT,
          label: '項目2',
        },
        {
          key: 'rowCheckbox',
          type: FormFieldType.ROW,
          fields: checkboxFields,
        },
      ],
      primaryButtonLabel: MessageUtils.EvaluateCreate.Button,
    };
    return result;
  }

  public getList(): void {
    this.subscribe(this.apiService.getEvaluation(), res => {
      console.log(res);
    });
  }

  public create(input: EvaluateCreate): void {
    this.subscribe(this.apiService.createEvaluation(input), res => {
      console.log(res);
    });
  }

  private getTechnicalFormField(): FormField[] {
    const result: FormField[] = [];
    this.technicalList.forEach(x => {
      const item: FormField = {
        key: x,
        type: FormFieldType.CHECK_BOX,
        label: x,
      };
      result.push(item);
    });
    return result;
  }
}
