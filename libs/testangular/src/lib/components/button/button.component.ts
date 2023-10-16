import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'temp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
