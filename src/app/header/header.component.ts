import { Component, OnInit } from '@angular/core';

import { BANDS } from '../data/mock-bands'
import { Band } from '../data/band'
import { MEMBERS } from '../data/mock-members'
import { Member } from '../data/member'
import { BandsService } from '../bands.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Soundify';
  bands = BANDS;
  selectedBand: Band;
  //members: Member[] = MEMBERS;
  //temp: Member[];
  constructor() { }

  ngOnInit() {
  }

  onSelect(band: Band): void {
    this.selectedBand = band;
    //this.temp = this.bandsService.getBandMembers(band.band_id);
    /*this.temp = [];
    for (let member of this.members) {
      if(member.band_id == band.band_id) {
        this.temp.push(member);
      }
    }*/
    //console.log(this.selectedBand);
  }
}
