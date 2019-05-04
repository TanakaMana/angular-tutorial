import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Form利用時追加
import { FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { MemberDetailComponent} from './member-detail.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  // 自作したディレクティブ・コンポーネント・パイプはすべてdeclarationsに登録
  declarations: [
    AppComponent,
    MemberDetailComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
