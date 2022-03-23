import { NgModule, Type } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const components: Type<any>[] = [MatFormFieldModule, MatInputModule];

@NgModule({
  providers: [],
  imports: [components],
  exports: [components],
})
export class AppMaterialModule {}
