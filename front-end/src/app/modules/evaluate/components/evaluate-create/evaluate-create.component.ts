import { BaseComponent } from 'src/app/infrastructure/components/base-component/base.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormInput } from 'src/app/modules/form/interfaces/form-input.interface';
import { EvaluateCreateService } from '../../services/evaluate-create.service';
import { EvaluateCreate } from '../../interfaces/evaluate-create.interface';

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

  public onSubmit(value: any): void {
    const input: EvaluateCreate = {
      technicalStrength: value?.technicalStrength,
      workAttitude: value?.workAttitude,
      technical: this.getTechnicalListValue(value),
    };
    console.log(input);
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
