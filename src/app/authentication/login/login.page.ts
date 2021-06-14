import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TutenService} from '../../core/services/tuten.service';
import {StorageService} from '../../core/services/storage.service';
import {Router} from '@angular/router';
import {Auth} from '../../core/models/Auth';
import {User} from '../../core/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error: any;

  constructor(private formBuilder: FormBuilder,
              private tutenService: TutenService,
              private storageService: StorageService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required],
      app: ['APP_BCK', Validators.required],
    });
  }

  onLogin(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.tutenService.login(this.loginForm.value as Auth).subscribe(
        data => this.setUser(data as User),
        error => {
          this.error = error;
        }
      );
    }
  }

  private async setUser(user: User) {
    this.storageService.setAuth(user);
    await this.router.navigate(['/bookings']);
  }
}
