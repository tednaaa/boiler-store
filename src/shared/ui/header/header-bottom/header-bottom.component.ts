import { Component } from '@angular/core';
import { ContainerComponent } from '../../container/container.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-bottom',
  standalone: true,
  imports: [RouterLink, ContainerComponent],
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss'],
})
export class HeaderBottomComponent {}
