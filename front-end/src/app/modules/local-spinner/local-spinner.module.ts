import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalSpinnerComponent } from './components/local-spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LocalSpinnerComponent],
  exports: [LocalSpinnerComponent],
})
export class LocalSpinnerModule {}
