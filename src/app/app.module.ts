import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Cart } from "./model/cart.model";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { StoreFirstGuard } from "./storeFirst.guard";

export const firebaseConfig = {
  apiKey: "AIzaSyANmi41Pfca-kEwHMyamznM0ecQxf_9YdU",
  authDomain: "todolist-10a12.firebaseapp.com",
  databaseURL: "https://todolist-10a12.firebaseio.com",
  projectId: "todolist-10a12",
  storageBucket: "todolist-10a12.appspot.com",
  messagingSenderId: "884767086903"
};

const appRoutes: Routes = [
  { path: '',         component: HomeComponent, canActivate: [StoreFirstGuard] },
  { path: 'cart',     component: CartDetailComponent, canActivate: [StoreFirstGuard] },
  { path: 'checkout', component: CheckoutComponent,canActivate: [StoreFirstGuard] },
  { path: 'admin',    component: AdminComponent },
  { path: 'admin/products', component: ProductsComponent },
  { path: 'admin/products/new', component: ProductsComponent },
  { path: "**", redirectTo: "/" }
];
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    AdminComponent,
    NavComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    CartDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    Cart,
    StoreFirstGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
