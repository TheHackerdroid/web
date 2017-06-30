import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Http, Response} from '@angular/http';

import { Cart } from "../model/cart.model";
import { Product } from "../model/product.model";

import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: FirebaseListObservable<any[]>;
	products_API:Array<Object>;

  constructor(
    public db: AngularFireDatabase,
		private cart: Cart,
		private http:Http,
		private router: Router
	) {
		this.products = db.list('/products');
	}

  ngOnInit() {
		this.getproducts();
  }
	//utilizamos promesas para cargar los productos
	getproducts():void{
		this.http.request('https://lcboapi.com/products?access_key=MDpmNmJhMzM5ZS01ZGE5LTExZTctOTJhZC0zNzQ1YzhiOWU3OWI6Z1JkVDlENlJhaHRqMlFhVE5lRmI2MVExSVNrRE1BRWJVeExT')
			.subscribe((response:Response)=>{
				this.products_API = response.json().result;
				console.log(response.json().result);
			})
	}
	addProductToCart(product: Product) {
		this.cart.addLine(product);
		//this.router.navigateByUrl("/cart");
	}
	//nuevos productos firebase
 	addProduct(newProduct: string){
		let title: string =newProduct;
		if (title !== '') {
      this.products.push({
				title: title
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