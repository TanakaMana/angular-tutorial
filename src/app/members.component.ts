// OnInitを用いてconstructorの直後の処理を書く
// キーワード「componentのライフサイクル」
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member} from './member';

import { MemberService} from './member.service';

@Component({
  selector: 'my-members',
  templateUrl: './members.component.html',
  // styleは複数形にして配列に入れる
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[];
  selectedMember: Member;

  // privateを使用することでthis.memberServiceが暗黙的に定義される
  // Dependency Injection(DI)
  constructor(
    private memberService: MemberService,
    private router: Router
  ) {}

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
    this.memberService.getMembers().then(members => this.members = members);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedMember.id]);
  }
}
