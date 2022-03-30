import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluateRoutingModule } from './evaluate-routing.module';
import { EvaluateCreateComponent } from './components/evaluate-create/evaluate-create.component';
import { EvaluateComponent } from './components/evaluate.component';
import { FormModule } from '../form/form.module';

import { PipesModule } from 'src/app/infrastructure/pipes/pipes.module';
import { EvaluateListComponent } from './components/evaluate-list/evaluate-list.component';
import { TableModule } from '../table/table.module';

@NgModule({
  declarations: [
    EvaluateComponent,
    EvaluateCreateComponent,
    EvaluateListComponent,
  ],
  imports: [CommonModule, EvaluateRoutingModule, FormModule, TableModule],
})
export class EvaluateModule {}
