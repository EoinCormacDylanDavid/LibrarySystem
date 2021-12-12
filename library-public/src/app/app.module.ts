import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AboutListComponent } from './about-list/about-list.component';

@NgModule({
  declarations: [
    AboutListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AboutListComponent]
})
export class AppModule { }
