import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MemberDetailComponent } from './member-detail.component';
import { MembersComponent } from './members.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

