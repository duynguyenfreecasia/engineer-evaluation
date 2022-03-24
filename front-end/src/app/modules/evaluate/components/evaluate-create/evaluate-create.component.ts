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
    ],
    primaryButtonLabel: 'Submit',
  };

  protected override onInit(): void {
    this.subscribe(this.apiService.getEvaluation(), res => {
      console.log(res);
    });
  }
}
