import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared.component.html',
})
export class SharedComponent {}
