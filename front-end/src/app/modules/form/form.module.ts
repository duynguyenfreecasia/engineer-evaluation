import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../infrastructure/pipes/pipes.module';
import { AppMaterialModule } from './app-material.module';
import { AppFormComponent } from './components/form.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { AppInputComponent } from './components/input/input.component';

const components: Type<any>[] = [
  AppFormComponent,
  InputPasswordComponent,
  AppInputComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    AppMaterialModule,
  ],
  declarations: [components],
  exports: [components],
})
export class FormModule {}
