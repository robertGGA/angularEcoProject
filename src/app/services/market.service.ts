import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class MarketService {

	constructor(private http: HttpClient) {}
	
	getItems(): Observable<any> {
		return this.http.get('market');
	}
}
