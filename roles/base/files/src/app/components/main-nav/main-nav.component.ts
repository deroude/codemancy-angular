import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor(public dialog: MatDialog, private authService: AuthService) {

   }

  ngOnInit() {
  }

  login() {
    this.dialog.open(LoginComponent, {
      width: '250px'
    });
  }

  logout() {

  }

}
