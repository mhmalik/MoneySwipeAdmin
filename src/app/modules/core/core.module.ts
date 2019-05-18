import { NgModule } from '@angular/core';
import { ApiService, InterceptService } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [],
  exports: [],
  providers: [
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    ApiService
  ]
})
export class CoreModule { }
