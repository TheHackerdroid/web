import { Component, OnInit } from '@angular/core';
//import { OrderRepository } from "../model/order.repository";
//import { Order } from "../model/order.model";
import { NgForm } from "@angular/forms";
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    orders: FirebaseListObservable<any[]>;
    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(
      public db: AngularFireDatabase,
      
    ) {
      this.orders = db.list('/orders');
    }

    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            console.log(form);
            this.orders.push({});
        }
    }



  ngOnInit() {
  }

}
