import { Component, OnInit } from '@angular/core';

import { Member } from './member';
import { MemberService} from './member.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // 以下service利用に必要
  members: Member[];
  constructor(private memberService: MemberService) {}
  ngOnInit() {
    this.memberService.getMembers()
      .then(members => this.members = members.slice(1, 5));
  }
}
