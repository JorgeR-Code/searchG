import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceGHService } from 'src/app/services/service-gh.service';
import { switchMap, tap } from "rxjs/operators";
import { UserGH } from 'src/app/interfaces/user.interface';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!: UserGH;
  obscuro: boolean = false;

  constructor(private activateRoute: ActivatedRoute, private searchUser: ServiceGHService, private _route: Router) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap(({name}) =>this.searchUser.searchUser(name))
    )
    .subscribe(user => this.user = user);
  }

  visitar(){
    window.location.href = this.user.html_url;
  }

  changeTheme(valor: any){
    this.obscuro = valor.option.value;
  }

  volver(){
    this._route.navigateByUrl('./');
  }
}
