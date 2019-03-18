import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

    token$: BehaviorSubject<string> = new BehaviorSubject(null);

    constructor(private http: HttpClient) { }

    login(credentials: { username: string, password: string }): Observable<string> {
        return this.http.post<string>(environment.apiUrl + '/auth', credentials).pipe(
            tap(re => this.token$.next(re)));
    }

    logout() {
        this.token$.next(null);
    }
}
