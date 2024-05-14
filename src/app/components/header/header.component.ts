import { Component } from '@angular/core';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationMenuComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
