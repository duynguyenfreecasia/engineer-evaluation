import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from 'src/app/infrastructure/components/base-component/base.component';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvaluateComponent extends BaseComponent {}
