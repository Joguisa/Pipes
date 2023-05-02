import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el local de la app
import localesEs from '@angular/common/locales/es-EC';
import localesAr from '@angular/common/locales/ar-MA';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localesEs);
registerLocaleData(localesAr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-EC' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
