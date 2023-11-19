import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-voterlist-entry',
  templateUrl: './voterlist-entry.component.html',
  styleUrls: ['./voterlist-entry.component.scss'],
})
export class VoterlistEntryComponent  implements OnInit {

  user: any;
  votersJSON: any;

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getSearchQueryData().subscribe(data => {
      this.votersJSON = JSON.parse(JSON.stringify(data)) ;
    });
   }

  gotodetail(url: string) {
    this.dataService.setDetailQueryUrl(url) ;
    this.router.navigate(['voterdetail']);
  }
  ngOnInit() {}

}
