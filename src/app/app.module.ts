import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Form利用時追加
import { FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent} from './dashboard.component';
import { MemberDetailComponent} from './member-detail.component';
import { MembersComponent} from './members.component';
import { MemberService } from './member.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  // 自作したディレクティブ・コンポーネント・パイプはすべてdeclarationsに登録
  declarations: [
    AppComponent,
    DashboardComponent,
    MemberDetailComponent,
    MembersComponent,
  ],
  bootstrap:    [
    AppComponent
  ],
  // Serviceクラスを使うのに必要
  // 親クラスapp.componentで定義すれば子クラスでも使える
  providers: [ MemberService ]
})
export class AppModule { }
