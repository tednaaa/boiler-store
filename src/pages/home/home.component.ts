import { Component } from '@angular/core';

import { UiKitModule } from '@/shared/ui/ui-kit.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [UiKitModule],
  standalone: true,
})
export class HomeComponent {}
