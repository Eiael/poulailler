import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {PouleInfoComponent} from "./poule-info/poule-info.component";
import {EnclosComponent} from "./enclos/enclos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent, PouleInfoComponent, EnclosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
