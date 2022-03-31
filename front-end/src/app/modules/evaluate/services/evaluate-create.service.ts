import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ApiService } from 'src/api/api.service';
import { Subscribable } from 'src/app/infrastructure/components/base-component/subscribable';
import { MessageUtils } from 'src/app/infrastructure/utils/message.utils';
import { FormFieldType } from '../../form/enums/form-field-type.enum';
import { FormField } from '../../form/interfaces/form-field.interface';
import { FormInput } from '../../form/interfaces/form-input.interface';
import { EvaluateCreate } from '../interfaces/evaluate-create.interface';

@Injectable()
export class EvaluateCreateService extends Subscribable {
  public readonly createSpinnerId = 'evaluate_create_spinner';
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
          label: MessageUtils.EvaluateCreate.TechnicalStrength,
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
          label: MessageUtils.EvaluateCreate.WorkAttitude,
        },
        {
          key: 'rowCheckbox',
          type: FormFieldType.ROW,
          fields: checkboxFields,
        },
      ],
      primaryButtonLabel: MessageUtils.EvaluateCreate.Button,
      primaryLocalSpinnerId: this.createSpinnerId,
    };
    return result;
  }

  public getList(): Observable<Object> {
    return this.apiService.getEvaluation().pipe(
      map(result => result),
      catchError(error => {
        this.apiService.handleError(error);
        throw error;
      })
    );
  }

  public create(input: EvaluateCreate): Observable<Object> {
    return this.apiService.createEvaluation(input).pipe(
      map(result => result),
      catchError(error => {
        this.apiService.handleError(error);
        throw error;
      })
    );
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
