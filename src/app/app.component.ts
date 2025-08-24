import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
// import { TopbarComponent } from "./layout/topbar/topbar.component";
import { CommonModule } from '@angular/common';
import { TopbarComponent } from "./layout/topbar/topbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  isExpanded: boolean = false;
}
