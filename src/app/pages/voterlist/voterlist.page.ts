import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-voterlist',
  templateUrl: './voterlist.page.html',
  styleUrls: ['./voterlist.page.scss'],
})
export class VoterlistPage implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRemoteData().subscribe(data => {      
      var votersJSON = JSON.parse(JSON.stringify(data)) ;

      var nhits = votersJSON.length ;
    });
  }
}
