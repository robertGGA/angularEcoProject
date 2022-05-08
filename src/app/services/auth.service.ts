import { Injectable } from '@angular/core';
import { LocalStorage } from '@utils/local-storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AuthParams {
	phone: string;
	password: string;
}

@Injectable({
	providedIn: 'root'
})

export class AuthService {
	@LocalStorage() user?: any | null;
	@LocalStorage() token?: string | null;

	constructor( private http: HttpClient ) {

	}

	authorize(authParams: AuthParams): Observable<any> {

		return this.http.post('login', authParams);
	}

	getProfile(): Observable<any> {
		return this.http.get('profile');
	}

	get isAuthorized(): boolean {
		return this.token !== null;
	}

	saveToStorage(res: any): void {
		this.token = res.access_token;
	}
}
