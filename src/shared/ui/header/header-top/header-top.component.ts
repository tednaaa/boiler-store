import { Component } from '@angular/core';

import { ContainerComponent } from '../../container/container.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [ContainerComponent, RouterLink, RouterLinkActive],
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss'],
})
export class HeaderTopComponent {}
