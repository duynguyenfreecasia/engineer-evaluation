import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/infrastructure/components/base-component/base.component';
import { AppRoutingConstant } from 'src/app/infrastructure/constants/app-routing.constant';
import { MessageUtils } from 'src/app/infrastructure/utils/message.utils';

@Component({
  selector: 'app-evaluate-completion',
  templateUrl: './evaluate-completion.component.html',
  styleUrls: ['./evaluate-completion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvaluateCompletionComponent extends BaseComponent {
  public MessageUtils = MessageUtils;

  constructor(private readonly router: Router) {
    super();
  }

  public onClick(): void {
    this.router.navigate(AppRoutingConstant.EVALUATE_CREATE);
  }
}
