import { Component } from '@angular/core';

import { UiKitModule } from '@/shared/ui/ui-kit.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UiKitModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
