import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
  ],
  exports: [
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
  ],
})
export class UiKitModule {}
