import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { BenchmarkComponent } from './benchmark/benchmark.component';

@NgModule({
  declarations: [
    // AppComponent,
    BenchmarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector : Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(BenchmarkComponent, {injector : this.injector});
    customElements.define('angular-benchmark', el);
  }

}
