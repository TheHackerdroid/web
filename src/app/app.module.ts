import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const firebaseConfig = {
  apiKey: "AIzaSyANmi41Pfca-kEwHMyamznM0ecQxf_9YdU",
  authDomain: "todolist-10a12.firebaseapp.com",
  databaseURL: "https://todolist-10a12.firebaseio.com",
  projectId: "todolist-10a12",
  storageBucket: "todolist-10a12.appspot.com",
  messagingSenderId: "884767086903"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
