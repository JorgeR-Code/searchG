import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private activateRoute: ActivatedRoute, private searchUser: ServiceGHService) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap(({name}) =>this.searchUser.searchUser(name)),
      tap( console.log)
    )
    .subscribe(user => this.user = user);
  }

}
