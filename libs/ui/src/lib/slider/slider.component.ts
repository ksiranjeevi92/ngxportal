import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {

}
