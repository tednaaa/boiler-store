import { Component } from '@angular/core';

import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderTopComponent, HeaderBottomComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
