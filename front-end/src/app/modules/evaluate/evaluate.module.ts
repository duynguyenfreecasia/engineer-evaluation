import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluateRoutingModule } from './evaluate-routing.module';
import { EvaluateCreateComponent } from './components/evaluate-create/evaluate-create.component';
import { EvaluateComponent } from './components/evaluate.component';
import { FormModule } from '../form/form.module';
import { EvaluateCompletionComponent } from './components/evaluate-completion/evaluate-completion.component';
import { PipesModule } from 'src/app/infrastructure/pipes/pipes.module';

@NgModule({
  declarations: [
    EvaluateComponent,
    EvaluateCreateComponent,
    EvaluateCompletionComponent,
  ],
  imports: [CommonModule, EvaluateRoutingModule, FormModule, PipesModule],
})
export class EvaluateModule {}
