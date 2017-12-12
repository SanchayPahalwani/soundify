import { Component, OnInit, Input } from '@angular/core';
import { BandsService } from '../bands.service'

import { Band } from '../data/band'
import { Member } from '../data/member'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() band: Band;

  newMember: Member = new Member();  

  constructor(private bandsService: BandsService) { }

  //newMember = new Member({name: 'Hello', role: 'Sample'});
  onSubmit() {
    this.newMember.band_id = this.band.band_id;
    this.bandsService.addMember(this.newMember);
    this.newMember = new Member();
    //this.newMember = new Member({name: 'World', role: ''}); 
  }

  ngOnInit() {
  }

}
