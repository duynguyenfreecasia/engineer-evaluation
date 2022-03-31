import { AppRoutingConstant } from 'src/app/infrastructure/constants/app-routing.constant';
import { BaseComponent } from 'src/app/infrastructure/components/base-component/base.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormInput } from 'src/app/modules/form/interfaces/form-input.interface';
import { EvaluateCreateService } from '../../services/evaluate-create.service';
import { EvaluateCreate } from '../../interfaces/evaluate-create.interface';
import { APIStatus } from 'src/api/enums/api-status.enum';
import { APIResponse } from 'src/api/interfaces/api-response.interface';
import { Router } from '@angular/router';
import { LocalSpinnerService } from 'src/app/modules/local-spinner/services/local-spinner.service';

@Component({
  selector: 'app-evaluate-create',
  templateUrl: './evaluate-create.component.html',
  styleUrls: ['./evaluate-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EvaluateCreateService],
})
export class EvaluateCreateComponent extends BaseComponent {
  public formInput: FormInput | any;

  constructor(
    private readonly router: Router,
    private readonly localSpinnerService: LocalSpinnerService,
    private readonly evaluateCreateService: EvaluateCreateService
  ) {
    super();
  }

  public onSubmit(value: any): void {
    const input: EvaluateCreate = {
      technicalStrength: value?.technicalStrength,
      workAttitude: value?.workAttitude,
      technical: this.getTechnicalListValue(value),
    };

    this.subscribe(
      this.localSpinnerService.withLocalSpinner(
        this.evaluateCreateService.create(input),
        this.evaluateCreateService.createSpinnerId
      ),
      (res: APIResponse) => {
        if (res && res.message === APIStatus.SUCCESSFULLY) {
          this.router.navigate(AppRoutingConstant.EVALUATE_COMPLETION);
        }
      }
    );
  }

  protected override onInit(): void {
    this.formInput = this.evaluateCreateService.geEvaluateCreateFormInput();
  }

  private getTechnicalListValue(value: any): string[] {
    const input: string[] = [];
    this.evaluateCreateService.technicalList.forEach(x => {
      if (value[`${x}`]) {
        input.push(x);
      }
    });
    return input;
  }
}
