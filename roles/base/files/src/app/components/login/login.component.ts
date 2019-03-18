import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginComponent>, private authService: AuthService) {

  }

  username: string;
  password: string;
  error: string;

  onCancel(): void {
    this.dialogRef.close();
  }

  onLogin(): void {
    this.authService.login({ username: this.username, password: this.password })
      .subscribe(() => this.dialogRef.close());
  }

  ngOnInit(): void {

  }
}
