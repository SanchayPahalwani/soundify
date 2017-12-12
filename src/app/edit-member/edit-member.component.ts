import { Component, OnInit, Input } from '@angular/core';

import { Member } from '../data/member'
import { BandsService } from '../bands.service'

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  @Input() member: Member;
  updatedMember: Member = new Member();

  constructor(private bandsService: BandsService) { }

  ngOnInit() {
  }
  
  updateMember(member: Member): void {
    //console.log('Hello')
    //this.selectedMember = member;
    this.bandsService.updateMemberById(member.member_id, {name: this.updatedMember.name, role: this.updatedMember.role});
  }

}
