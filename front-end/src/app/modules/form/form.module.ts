import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../infrastructure/pipes/pipes.module';
import { LocalSpinnerModule } from '../local-spinner/local-spinner.module';
import { AppMaterialModule } from './app-material.module';
import { AppCheckBoxComponent } from './components/checkbox/checkbox.component';
import { AppDatePickerComponent } from './components/date-picker/date-picker.component';
import { AppFormComponent } from './components/form.component';
import { AppInputPasswordComponent } from './components/input-password/input-password.component';
import { AppInputComponent } from './components/input/input.component';
import { AppRadioComponent } from './components/radio/radio.component';
import { AppSelectComponent } from './components/select-box/select.component';
import { AppTextAreaComponent } from './components/text-area/text-area.component';

const components: Type<any>[] = [
  AppFormComponent,
  AppInputComponent,
  AppCheckBoxComponent,
  AppSelectComponent,
  AppInputPasswordComponent,
  AppRadioComponent,
  AppDatePickerComponent,
  AppTextAreaComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    AppMaterialModule,
    LocalSpinnerModule,
  ],
  declarations: [components],
  exports: [components],
})
export class FormModule {}
