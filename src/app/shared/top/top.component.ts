import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  stateOptions: any[];
  obscuro: string = "off";

  constructor() {
    this.stateOptions = [
      {
        icon: 'pi pi-sun',
        justify: 'Left',
        value: 'off',
      },
      {
        icon: 'pi pi-moon',
        justify: 'right',
        value: 'on'
    }];

   }

  ngOnInit(): void {
  }

  changeTheme(evento: any){
    console.log(evento.option.value)///cambiar tema
  }

}
