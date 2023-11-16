import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-voterdetail-card',
  templateUrl: './voterdetail-card.component.html',
  styleUrls: ['./voterdetail-card.component.scss'],
})
export class VoterdetailCardComponent  implements OnInit {
  @Input() name: string = "" ;
  @Input() address: string = "";
  @Input() party: string = "";

  constructor() { }

  ngOnInit() {}

}
