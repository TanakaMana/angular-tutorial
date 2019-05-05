import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Member} from './member';
import { MemberService } from './member.service';

@Component({
  // <member-detail></member-detail>
  selector: 'member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
// exportのおかげで外部参照可能
export class MemberDetailComponent implements OnInit {
  member: Member;

  constructor(
    private memberService: MemberService,
    // URLのパラメータ参照可能
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((param: ParamMap) => {
        return this.memberService.getMember(+param.get('id'));
      })
      .subscribe(member => this.member = member);
  }

  goBack(): void {
    this.location.back();
  }
}
