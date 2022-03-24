import { BaseComponent } from 'src/app/infrastructure/components/base-component/base.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormInput } from 'src/app/modules/form/interfaces/form-input.interface';
import { FormFieldType } from 'src/app/modules/form/enums/form-field-type.enum';
import { FormFieldInputType } from 'src/app/modules/form/enums/form-field-input-type.enum';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/api/api.service';

@Component({
  selector: 'app-evaluate-create',
  templateUrl: './evaluate-create.component.html',
  styleUrls: ['./evaluate-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvaluateCreateComponent extends BaseComponent {
  constructor(private readonly apiService: ApiService) {
    super();
  }

  result: FormInput = {
    fields: [
      {
        key: 'textarea',
        type: FormFieldType.TEXT_AREA,
        label: 'エンジニア評価システム（仮）',
        required: false,
        initValue:
          'エンジニア評価システム（仮）は、管理者が評価フレームと評価セルを組み合わせて設計した評価ユニットを、メンバーが評価登録して、スコアリングされた評価結果をメンバーが確認できるサービス',
      },
      {
        key: 'id',
        type: FormFieldType.INPUT,
        required: true,
        validators: [Validators.required],
        placeholder: 'ID',
      },
      {
        key: 'password',
        type: FormFieldType.INPUT,
        inputType: FormFieldInputType.PASSWORD,
        required: true,
        validators: [Validators.required],
        placeholder: 'Passwork',
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

  protected override onInit(): void {
    this.subscribe(this.apiService.getEvaluation(), res => {
      console.log(res);
    });
  }
}
