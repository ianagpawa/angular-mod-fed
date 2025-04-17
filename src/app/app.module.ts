import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExportComponent } from './export/export.component';
import { WebComponentModule } from './webcomponent/webcomponent.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    ExportComponent,
    WebComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
