import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { UiModule } from '@test-org/ui'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),

    //  Custom Lib
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
