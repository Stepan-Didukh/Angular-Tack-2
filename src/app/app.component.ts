import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  inputValue: string = '';
  inputCont: string = '';
  statusRegister: boolean = false;
  statusLogin: boolean = false;

  Houses = [
    {
      Street: 'Doroshenka',
      Area: 75,
      Price: 1200000
    },
    {
      Street:'Zelena',
      Area: 135,
      Price: 1000000
    },
    {
      Street: 'Prirodna',
      Area: 75,
      Price: 900000
    }
  ];

  login() {
    this.statusLogin = !this.statusLogin;
    this.statusRegister = false;
  }

  register() {
    this.statusRegister = !this.statusRegister;
    this.statusLogin = false
  }


  onInput(ev) {
    this.inputValue = ev.target.value;
    console.log(ev.target.value);
  }

  Search() {
    this.inputCont = this.inputValue

  }

}

