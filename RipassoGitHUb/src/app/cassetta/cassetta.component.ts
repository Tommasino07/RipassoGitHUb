import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cassetta',
  imports: [],
  templateUrl: './cassetta.component.html',
  styleUrl: './cassetta.component.css'
})
export class CassettaComponent {
Ortaggi=['banane','pere', 'patate' ]
@Input()cassetto:string="";
}