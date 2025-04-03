import { Component } from '@angular/core';
import { CassettaComponent } from '../cassetta/cassetta.component';

@Component({
  selector: 'app-scaffale',
  imports: [CassettaComponent],
  templateUrl: './scaffale.component.html',
  styleUrl: './scaffale.component.css'
})
export class ScaffaleComponent {
 TipiCassetta = 
 ['FruttaMista', 'OrtaggiStagione', 'FruttaPesticidi', 'VerduraMista', 'VerduraPesticidi']
}