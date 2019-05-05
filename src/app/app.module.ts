import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Form利用時追加
import { FormsModule} from '@angular/forms';
// Routingのmodule
import { RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent} from './dashboard.component';
import { MemberDetailComponent} from './member-detail.component';
import { MembersComponent} from './members.component';
import { MemberService } from './member.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      // rootへのリダイレクト設定
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        // path membersにアクセスしたとき、MembersComponentを呼ぶ
        path: 'members',
        component: MembersComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: MemberDetailComponent
      }
    ])
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
