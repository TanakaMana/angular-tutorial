// serviceで共通化を実現
// ComponentからServiceを呼び出せるようにするためInjectable moduleを使用
import { Injectable} from '@angular/core';
import { Member} from './member';
import { MEMBERS} from './mock-members';

@Injectable()
export class MemberService {
  getMember(): Promise<Member[]> {
    return Promise.resolve(MEMBERS);
  }
}
