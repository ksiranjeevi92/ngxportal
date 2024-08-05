import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'admin-shell',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './shell.component.html',
})
export class ShellComponent {}
