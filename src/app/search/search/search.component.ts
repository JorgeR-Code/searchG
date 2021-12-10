import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  value3: string = '';
  obscuro: boolean = false;

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  valorBusqueda(usuario: string){

    if(usuario){
      const valueUser = usuario;
      this._route.navigate(['/profile', valueUser]);
    }else{
      return
    }

  }

  changeTheme(valor: any){
    this.obscuro = valor.option.value;
  }

}
