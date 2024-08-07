import { Component } from '@angular/core';

@Component({
  selector: 'app-enclos',
  standalone: true,
  imports: [],
  templateUrl: './enclos.component.html',
  styleUrl: './enclos.component.css'
})
export class EnclosComponent {
  pouleSelected: number = -1;

  onPouleClick(index: number) {
    this.pouleSelected = index;
  }
}
