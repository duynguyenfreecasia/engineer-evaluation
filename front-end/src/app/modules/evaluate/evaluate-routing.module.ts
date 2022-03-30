import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluateCreateComponent } from './components/evaluate-create/evaluate-create.component';
import { EvaluateListComponent } from './components/evaluate-list/evaluate-list.component';
import { EvaluateComponent } from './components/evaluate.component';

const routes: Routes = [
  {
    path: '',
    component: EvaluateComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create',
      },
      {
        path: 'create',
        component: EvaluateCreateComponent,
      },
      {
        path: 'list',
        component: EvaluateListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluateRoutingModule {}
