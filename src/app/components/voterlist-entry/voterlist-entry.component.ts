import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-voterlist-entry',
  templateUrl: './voterlist-entry.component.html',
  styleUrls: ['./voterlist-entry.component.scss'],
})
export class VoterlistEntryComponent  implements OnInit {

  user: any;
  votersJSON: any;
  nmatches: any;

  constructor(private dataService: DataService, private router: Router, private loadingController: LoadingController) {
    this.nmatches = 0 ;
    this.presentLoading() ;
    this.dataService.getSearchQueryData().subscribe(data => {
      this.votersJSON = JSON.parse(JSON.stringify(data)) ;
      this.nmatches=this.votersJSON.length ;
      this.loadingController.dismiss();
    });

    //this.votersJSON = JSON.parse('[{"sos_voterid":"OH0017034888","first_name":"LARSON E.","last_name":"WHIPSNADE","date_of_birth":"1979-02-12","age":"44","residential_city":"WESTERVILLE","party_affiliation":"D","voter_status":"ACTIVE"}]') ;
   }

  gotodetail(url: string) {
    this.dataService.setDetailQueryUrl(url) ;
    this.router.navigate(['voterdetail']);
  }
  ngOnInit() {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
    });
    return await loading.present();
  }

}
