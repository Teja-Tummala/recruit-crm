import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface MenuItem {
  icon: string;
  label: string;
  active?: boolean;
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent {
  
  isExpanded = false; // toggle state

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  menuItems: MenuItem[] = [
    {
      icon: 'bx bx-user',
      label: 'Candidates',
      active: true
    },
    {
      icon: 'bx bx-bar-chart-alt-2',
      label: 'Reports'
    },
    {
      icon: 'bx bx-briefcase',
      label: 'Jobs'
    },
    {
      icon: 'bx bx-user',
      label: 'Profile'
    },
    {
      icon: 'bx bx-message-square-dots',
      label: 'Messages'
    },
    {
      icon: 'bx bx-phone',
      label: 'Calls'
    },
    {
      icon: 'bx bx-envelope',
      label: 'Email'
    },
    {
      icon: 'bx bx-calendar',
      label: 'Calendar'
    },
    
    
  ];

  selectMenuItem(item: MenuItem) {
    // Reset all active states
    this.menuItems.forEach(menuItem => menuItem.active = false);
    // Set selected item as active
    item.active = true;
    console.log('Selected:', item.label);
  }
}
