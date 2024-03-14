import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { ErrorInterceptorService } from './shared/services/error-interceptor-service'; // Asegúrate de importar el interceptor de errores correctamente

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
   {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
