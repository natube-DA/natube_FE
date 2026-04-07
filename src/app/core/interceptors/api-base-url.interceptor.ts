import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiBaseUrlInterceptor: HttpInterceptorFn = (request, next) => {
  const isAbsoluteUrl = /^https?:\/\//i.test(request.url);
  const isAssetRequest =
    request.url.startsWith('/assets/') ||
    request.url.startsWith('./assets/') ||
    request.url.startsWith('assets/');

  if (isAbsoluteUrl || isAssetRequest) {
    return next(request);
  }

  const normalizedUrl = request.url.startsWith('/') ? request.url : `/${request.url}`;

  return next(
    request.clone({
      url: `${environment.apiBaseUrl}${normalizedUrl}`
    })
  );
};
