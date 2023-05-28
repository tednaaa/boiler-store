import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@/pages/app-routing.module';
import { UiKitModule } from '@/shared/ui/ui-kit.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UiKitModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
