import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScaffaleComponent } from './scaffale/scaffale.component';
import { CassettaComponent } from './cassetta/cassetta.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScaffaleComponent,CassettaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularMattioni-Tommaso-FilaB';
}