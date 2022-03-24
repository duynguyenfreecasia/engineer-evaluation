import { BaseComponent } from 'src/app/infrastructure/components/base-component/base.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormInput } from 'src/app/modules/form/interfaces/form-input.interface';
import { FormFieldType } from 'src/app/modules/form/enums/form-field-type.enum';
import { FormFieldInputType } from 'src/app/modules/form/enums/form-field-input-type.enum';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/api/api.service';
import { EvaluateCreateService } from '../../services/evaluate-create.service';

@Component({
  selector: 'app-evaluate-create',
  templateUrl: './evaluate-create.component.html',
  styleUrls: ['./evaluate-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EvaluateCreateService],
})
export class EvaluateCreateComponent extends BaseComponent {
  public formInput: FormInput | any;

  constructor(private readonly evaluateCreateService: EvaluateCreateService) {
    super();
  }

  protected override onInit(): void {
    this.formInput = this.evaluateCreateService.geEvaluateCreateFormInput();
  }
}
