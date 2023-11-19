import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-voterlist-entry',
  templateUrl: './voterlist-entry.component.html',
  styleUrls: ['./voterlist-entry.component.scss'],
})
export class VoterlistEntryComponent  implements OnInit {

  user: any;
  votersJSON: any;

  constructor(private dataService: DataService) {
    this.dataService.getRemoteData().subscribe(data => {
      this.votersJSON = JSON.parse(JSON.stringify(data)) ;
    });
   }

  ngOnInit() {}

}
