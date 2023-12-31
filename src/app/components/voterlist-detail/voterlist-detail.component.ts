import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-voterlist-detail',
  templateUrl: './voterlist-detail.component.html',
  styleUrls: ['./voterlist-detail.component.scss'],
})

export class VoterlistDetailComponent  implements OnInit {

  user: any;
  votersJSON: any;
  showMe: any;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.dataService.getDetailQueryData().subscribe(data => {
      this.votersJSON = JSON.parse(JSON.stringify(data)) ;
    });

    this.showMe = false ;
   }

  ngOnInit() {}

  showvoting() {
    this.showMe = true ;
  }

  hidevoting() {
    this.showMe = false ;
  }
}
