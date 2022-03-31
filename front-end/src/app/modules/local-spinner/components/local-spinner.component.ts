import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/infrastructure/components/base-component/base.component';
import { LocalSpinnerService } from '../services/local-spinner.service';

@Component({
  selector: 'app-local-spinner',
  templateUrl: './local-spinner.component.html',
  styleUrls: ['./local-spinner.component.scss'],
})
export class LocalSpinnerComponent extends BaseComponent {
  @Input() componentId: string;

  public showSpinner = false;

  constructor(private readonly localSpinnerService: LocalSpinnerService) {
    super();
  }

  protected override onInit(): void {
    if (this.componentId) {
      this.localSpinnerService
        .registerComponent(this.componentId)
        .subscribe((loading: boolean) => {
          this.showSpinner = loading;
        });
    }
  }
}
