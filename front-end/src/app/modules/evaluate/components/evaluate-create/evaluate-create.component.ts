import { BaseComponent } from 'src/app/infrastructure/components/base-component/base.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormInput } from 'src/app/modules/form/interfaces/form-input.interface';
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
