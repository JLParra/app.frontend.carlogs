import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environment';
import { loginForm } from '../interfaces/login-form.interfaces';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API = environment.API

  constructor(private http: HttpClient, private router:Router) { }

  logout (){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
  validarToken(): Observable<boolean>{
    const token = localStorage.getItem('token') || '';
    return this.http.get(`${this.API}/login/renew`, {
      headers: { 'x-token': token }
    }).pipe(
      tap((r: any) =>{
        console.log('r',r)
        localStorage.setItem('token', r.token);
      }),
      map(re => true),
      catchError (error => of(false))
    );
  }

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${this.API}/usuarios`, formData)
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.token)
        })
      )

  }

  login(formData: loginForm) {
    return this.http.post(`${this.API}/login`, formData)
      .pipe(
        tap((res: any) => {
          console.log(res)
          localStorage.setItem('token', res.token);
          localStorage.setItem('uid', res.uid);
          localStorage.setItem('nombre', res.nombre);
        })
      )

  }
}
