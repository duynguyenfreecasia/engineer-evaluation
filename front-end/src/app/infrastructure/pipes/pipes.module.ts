import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SafePipe } from './safe.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TruncatePipe, SafePipe, SafeHtmlPipe, FilterPipe],
  exports: [TruncatePipe, SafePipe, SafeHtmlPipe, FilterPipe],
})
export class PipesModule {}
