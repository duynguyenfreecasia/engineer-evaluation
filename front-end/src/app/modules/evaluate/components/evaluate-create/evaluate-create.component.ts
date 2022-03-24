import { BaseComponent } from 'src/app/infrastructure/components/base-component/base.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

  protected override onInit(): void {
    this.subscribe(this.apiService.getEvaluation(), res => {
      console.log(res);
    });
  }
}
