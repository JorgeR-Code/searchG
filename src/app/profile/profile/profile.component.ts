import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceGHService } from 'src/app/services/service-gh.service';
import { switchMap } from "rxjs/operators";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private searchUser: ServiceGHService) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap(({name}) =>this.searchUser.searchUser(name))
    )
    .subscribe(user =>{
      console.log(user);
    });
  }

}
