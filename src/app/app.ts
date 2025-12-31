import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MatToolbarModule, MatButtonModule, MatDividerModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
