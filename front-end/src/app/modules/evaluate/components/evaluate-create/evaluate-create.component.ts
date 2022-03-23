import { BaseComponent } from 'src/app/infrastructure/components/base-component/base.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-evaluate-create',
  templateUrl: './evaluate-create.component.html',
  styleUrls: ['./evaluate-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvaluateCreateComponent extends BaseComponent {
  constructor() {
    super();
  }

  protected override onInit(): void {}
}
