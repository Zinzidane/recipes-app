import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthEinterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {

  }
}