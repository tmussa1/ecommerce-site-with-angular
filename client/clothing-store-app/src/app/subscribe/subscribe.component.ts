import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  emailStr : string = "";
  addressStr: string = " ";

  constructor(private router : Router) { }

  ngOnInit() {
  }

  saveNotification(form){
    this.emailStr = form.value.email;
    this.addressStr = form.value.address;

    if(this.addressStr.length != 0 && this.emailStr.length != 0){
        this.router.navigate(['/notification']);
    }
  }

}
