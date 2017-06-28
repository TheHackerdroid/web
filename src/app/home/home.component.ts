import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: FirebaseListObservable<any[]>;
	
  constructor(
    public db: AngularFireDatabase
	) {
		this.products = db.list('/products');
	}

  ngOnInit() {
  }

 	addProduct(){
		let title: string = prompt("New Task")
		if (title !== ''){
			this.products.push({ 
        title: title, 
        status: 'open' 
      });
		}
	}
	markAsDone(product: any) {
		this.products.update(product.$key, { status: 'done' });
	}
	removeProduct(product: any) {
		this.products.remove(product.$key);
	}
}