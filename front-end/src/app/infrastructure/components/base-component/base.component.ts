import {
  AfterViewInit,
  Directive,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscribable } from './subscribable';

@Directive()
export abstract class BaseComponent
  extends Subscribable
  implements OnInit, AfterViewInit, OnDestroy
{
  @HostBinding('style.display') display = 'block';

  public ngOnInit(): void {
    this.onInit();
  }

  public ngAfterViewInit(): void {
    this.onAfterViewInit();
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.onDestroy();
  }

  protected onInit(): void {
    // virtual method
  }

  protected onAfterViewInit(): void {
    // virtual method
  }

  protected onDestroy(): void {
    // virtual method
  }
}
