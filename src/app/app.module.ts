import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Form利用時追加
import { FormsModule} from '@angular/forms';


import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
