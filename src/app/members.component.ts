// OnInitを用いてconstructorの直後の処理を書く
// キーワード「componentのライフサイクル」
import { Component, OnInit } from '@angular/core';
import { Member} from './member';

import { MemberService} from './member.service';

@Component({
  selector: 'my-members',
  template: `
    <h2>社員一覧</h2>
    <ul class="members">
<!--      *ngForで配列の中身を1件1件出力-->
<!--      [class.selected]="member === selectedMember でclass付与の条件指定(属性のデータバインディング) classのselectedを付与-->
      <li *ngFor="let member of members" (click)="onSelect(member)"
        [class.selected]="member === selectedMember">
        <span class="badge">{{member.id}}</span>{{member.name}}
      </li>
    </ul>
<!--    MemberDetailComponentの@inputでmemberを渡すように定義している。実質ValueであるselectedMemberを渡す-->
    <member-detail [member]="selectedMember"></member-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .members {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .members li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .members li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .members li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .members .text {
      position: relative;
      top: -3px;
    }
    .members .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class MembersComponent implements OnInit {
  members: Member[];
  selectedMember: Member;

  // privateを使用することでthis.memberServiceが暗黙的に定義される
  // Dependency Injection(DI)
  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    // constructorが実行された後初期化時に呼ばれるコールバック
    // constructorには初期化という単純な作業しかやらせない
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  getMembers(): void {
    // thenはPromiseの非同期処理完了後に実行されるコールバック
    // 引数でmembersが渡ってきて、this.membersに代入
    this.memberService.getMember().then(members => this.members = members);
  }
}
