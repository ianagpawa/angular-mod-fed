import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MyWebComponent } from './webcomponent.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [MyWebComponent],
  imports: [BrowserModule],
  exports: [MyWebComponent]
})
export class WebComponentModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(MyWebComponent, { injector });
    customElements.define('my-web-component', el);
  }

  ngDoBootstrap() {}
}