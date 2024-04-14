import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { UsuarioService } from '../auth/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

// Login Component
export class LoginComponent {

  // Login Form
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;
  a: any = 10;
  b: any = 20;
  toast!: false;

  // set the current year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private store: Store,
) { }

// constructor(private router: Router, private fb: FormBuilder,
//   ) {
//   this.loginForm = this.fb.group({

//     email: [localStorage.getItem('email')|| '', Validators.required],
//     password: ['', Validators.required],
//     remember: [false],
  
//   });



  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    /**
     * Form Validatyion
     */
    this.loginForm = this.formBuilder.group({
      email: ['jloorparra@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    const email = this.f['email'].value; // Get the username from the form
    const password = this.f['password'].value; // Get the password from the form

    this.usuarioService.login(this.loginForm.value).subscribe({
			next: (resp) => {
				if(this.loginForm.get('remember')?.value) {
					localStorage.setItem('email',this.loginForm.get('email')?.value)
				}else {
					localStorage.removeItem('email');
				}
				this.router.navigateByUrl('/');
			},
			error: (err) => {
				Swal.fire('Error', err.error.msg, 'error');
        
			},
		});
  }

  

	campoNoValido(campo: string) {
		if (this.loginForm.get(campo)?.invalid && this.submitted) {
			return true
		} else {
			return false
		}
	}
  
  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
