import { Injectable } from '@angular/core';

import { Member } from './data/member'
import { MEMBERS } from './data/mock-members'

@Injectable()
export class BandsService {

  lastId: number = 0;
  members: Member[] = MEMBERS;

  constructor() { }

  addMember(member: Member): BandsService {
    if (!member.member_id) {
      member.member_id = ++this.lastId;
    }
    this.members.push(member);
    //console.log(MEMBERS);
    return this;
  }

  deleteMemberById(member_id: number): BandsService {
    this.members = this.members
      .filter(member => member.member_id !== member_id);
    return this;
  }

  updateMemberById(member_id: number, values: Object = {}): Member {
    let member = this.getMemberById(member_id);
    if (!member) {
      return null;
    }
    Object.assign(member, values);
    return member;
  }

  getBandMembers(band_id: number): Member[] {
    return this.members
      .filter(member => member.band_id === band_id);
  }

  getMemberById(member_id: number): Member {
    return this.members
      .filter(member => member.member_id === member_id)
      .pop();
  }

}
