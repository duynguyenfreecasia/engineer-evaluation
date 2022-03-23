import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluateRoutingModule } from './evaluate-routing.module';
import { EvaluateCreateComponent } from './components/evaluate-create/evaluate-create.component';
import { EvaluateComponent } from './components/evaluate.component';

@NgModule({
  declarations: [EvaluateComponent, EvaluateCreateComponent],
  imports: [CommonModule, EvaluateRoutingModule],
})
export class EvaluateModule {}
