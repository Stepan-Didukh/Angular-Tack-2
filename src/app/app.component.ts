import {Component} from '@angular/core';
import {UserModel, HouseModel} from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  inputValue: string = '';
  inputCont: string = '';
  statusRegisterUser: boolean = false;
  statusLoginUser: boolean = false;
  statusRegisterHouse:boolean = false;
  message: string;
  selectedIndex = -1;

  random: number = Math.round(Math.random()*2);

  Users:UserModel[] = [
    {
      Name: 'Stepan',
      Surname: 'Stepan',
      Email: 'stepan',
      password: '1111',
      is_blocked: false
    }
    ];

  Houses: HouseModel[] = [
    {
      id: 0,
      Owner: this.Users[0],
      Street: 'Doroshenka',
      Area: 75,
      Price: 1200000
    },
    ];

  regUser(){
    this.Users.push(this.newUser);
    console.log(this.newUser);
    console.log(this.Users);
    alert('Successful')
  }

  signInUser = {
    Name:'',
    password:''
  }

  SingInUser(){
      const CheckUser =  this.Users.find(user =>
      this.signInUser.Name === user.Name &&
      this.signInUser.password === user.password
    );
    CheckUser ? this.message ='Welcome' : 'Incorrect';
  }

  newUser:UserModel = {
    Name:'',
    Surname: '',
    Email: '',
    password: '',
    is_blocked: Boolean(this.random)
  };

  newHouse:HouseModel = {
    id: 0,
    Owner: this.Users[Math.floor(Math.random()*this.Users.length)],
    Street: '',
    Area: 0,
    Price: 0,
  };

  loginUser() {
    this.statusLoginUser = !this.statusLoginUser;
    this.statusRegisterUser = false;
  }

  createNewHouse(){
    this.Houses.push({...this.newHouse, id: this.Houses.length+1});
    console.log(this.Houses);
    alert('Successful')
  }

  registerUser() {
    this.statusRegisterUser = !this.statusRegisterUser;
    this.statusLoginUser = false
  }

  registerHouse() {
    this.statusRegisterHouse = !this.statusRegisterHouse;
  }

  onInput(ev) {
    this.inputValue = ev.target.value;
    console.log(ev.target.value);
  }

  Search() {
    this.inputCont = this.inputValue

  }
  showContent(evt, h) {
    this.selectedIndex = h;
  }

}


