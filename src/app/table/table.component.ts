import { Component, Input, OnInit } from '@angular/core';

import { BANDS } from '../data/mock-bands'
import { Band } from '../data/band'
import { MEMBERS } from '../data/mock-members'
import { Member } from '../data/member'
import { BandsService } from '../bands.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  providers: [BandsService],
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() band: Band;
  updatedMember: Member = new Member();
  selectedMember: Member;
  constructor(private bandsService: BandsService) { }
  
  showModal(member: Member): void {
    this.selectedMember = member;
    //this.bandsService.updateMemberById(member.member_id, {name: this.updatedMember.name, role: this.updatedMember.role});
  }

  //getter for members
  get members() {
    return this.bandsService.getBandMembers(this.band.band_id);
  }
  
  ngOnInit() { }
}
