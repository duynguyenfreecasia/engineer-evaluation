import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/api/api.service';
import { Subscribable } from 'src/app/infrastructure/components/base-component/subscribable';
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
          initValue:
            'エンジニア評価システム（仮）は、管理者が評価フレームと評価セルを組み合わせて設計した評価ユニットを、メンバーが評価登録して、スコアリングされた評価結果をメンバーが確認できるサービス',
        },
        {
          key: 'select',
          type: FormFieldType.SELECT,
          label: 'PHPの技術力はどうでしたか',
          required: true,
          validators: [Validators.required],
          options: [
            {
              label: '全然だめ',
              value: 1,
            },
            {
              label: 'まぁまぁ',
              value: 2,
            },
            {
              label: '普通',
              value: 3,
            },
            {
              label: '良い',
              value: 4,
            },
            {
              label: '素晴らしい',
              value: 5,
            },
          ],
        },
        {
          key: 'input',
          type: FormFieldType.INPUT,
          required: true,
          validators: [Validators.required],
          label: '項目2',
          initValue: '仕事の姿勢はどうですか',
        },
        {
          key: 'checkbox',
          type: FormFieldType.CHECK_BOX,
          label: '興味のある技術は何ですか',
          options: [
            {
              label: 'Php',
              value: 1,
            },
            {
              label: 'Python',
              value: 2,
            },
            {
              label: 'Ruby',
              value: 3,
            },
            {
              label: 'Node',
              value: 4,
            },
            {
              label: 'Go',
              value: 5,
            },
          ],
        },
      ],
      primaryButtonLabel: 'Submit',
    };
    return result;
  }
}
