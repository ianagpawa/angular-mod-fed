import { Component, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-web-component',
  template: `<div class="custom">Hello</div>`,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyWebComponent implements AfterViewInit {
  constructor(private elRef: ElementRef) {}

//   ngAfterViewInit() {
//     const linkEl = document.createElement('link');
//     linkEl.setAttribute('rel', 'stylesheet');
//     linkEl.setAttribute('href', './webcomponent.css'); // replace with your URL
//     this.elRef.nativeElement.shadowRoot.appendChild(linkEl);
//   }

//   ngAfterViewInit() {
//     const shadowRoot = this.elRef.nativeElement.shadowRoot;
//     const linkEl = document.createElement('link');
//     linkEl.setAttribute('rel', 'stylesheet');
//     linkEl.setAttribute('href', './webcomponent.css'); // your external CSS
//   //   shadowRoot.appendChild(linkEl);
//   // if (!shadowRoot.querySelector('link[href="./webcomponent.css"]')) {
//       // append only if not already added
//     //   shadowRoot.appendChild(linkEl);
//     if (shadowRoot) {
//     //   const linkEl = document.createElement('link');
//     //   linkEl.setAttribute('rel', 'stylesheet');
//     //   linkEl.setAttribute('href', './webcomponent.css'); // your external CSS
//     //   shadowRoot.appendChild(linkEl);
//     // if (!shadowRoot.querySelector('link[href="./webcomponent.css"]')) {
//         // append only if not already added
//         shadowRoot.appendChild(linkEl);
//     //   }
//     }
//   }
ngAfterViewInit() {
    setTimeout(() => {
      const shadowRoot = this.elRef.nativeElement.shadowRoot;
  
      if (shadowRoot) {
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.setAttribute('href', './styles.css');
  
        // Optional: check if already added
        if (!shadowRoot.querySelector('link[href="./styles.css"]')) {
          shadowRoot.appendChild(linkEl);
        }
      } else {
        console.error('Shadow root not found.');
      }
    });
  }
  
}