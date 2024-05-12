import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  loginForm!: FormGroup;
  toast: any;
  errortext:any;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Process login logic here
    } else {
      this.errortext='Please input correct credentials !'
      this.showInvalidFormToast();
    }
  }

  showInvalidFormToast(): void {
    // Create and show the toast
    this.toast = new bootstrap.Toast(document.getElementById('invalidFormToast'));
    this.toast.show();
  }

}
