import { Injectable } from '@angular/core';
import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { env } from '../env/env';

export const StartsWithHttp = new HttpContextToken<boolean>(() => false);

@Injectable({
	providedIn: 'root'
})
export class UrlInterceptorService implements HttpInterceptor {

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const req = request.clone({
			url: request.url.startsWith('https') ||
			request.url.startsWith('/') ||
			request.context.get(StartsWithHttp)
				? request.url
				: [env.apiUrl, request.url].join('/'),
		})
		return next.handle(req);
	}
}
