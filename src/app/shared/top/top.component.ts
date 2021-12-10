import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  @Output() theme = new EventEmitter;

  stateOptions: any[];
  obscuro: boolean = false;

  constructor() {
    this.stateOptions = [
      {
        icon: 'pi pi-sun',
        justify: 'Left',
        value: false,
      },
      {
        icon: 'pi pi-moon',
        justify: 'right',
        value: true
    }];

   }

  ngOnInit(): void {
  }

  changeTheme(evento: any){
    this.theme.emit(evento);
  }

}
