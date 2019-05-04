import { Component, Input} from '@angular/core';
import { Member} from './member';

@Component({
  // <member-detail></member-detail>
  selector: 'member-detail',
  template: `
    <!--    表示の出し分け-->
    <div *ngIf="member">
      <h2>{{member.name}}</h2>
      <div><label>id: </label>{{member.id}}
      </div>
      <div>
        <label>name: </label>
        <input type="text" [(ngModel)]="member.name" placeholder="名前">
      </div>
    </div>
  `
})
// exportのおかげで外部参照可能
export class MemberDetailComponent {
  // 外部ファイルのMemberを引き継ぐ。Input moduleが必要
  @Input() member: Member;
}
