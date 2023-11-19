import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-voterdetail',
  templateUrl: './voterdetail.page.html',
  styleUrls: ['./voterdetail.page.scss'],
})
export class VoterdetailPage implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
