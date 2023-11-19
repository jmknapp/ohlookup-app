import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
//import { ActivatedRoute, Router } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.page.html',
  styleUrls: ['./searchform.page.scss'],
})

export class SearchformPage implements OnInit {

  public searchformData: FormGroup ;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.searchformData = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      streetaddress: new FormControl(),
      city: new FormControl(),
      zip: new FormControl(),
      birthdate: new FormControl(),
    });
  }

  votersearch(){
    var url = "http://ohlookup.com/ohlookup-app.php?birthdate=1955-02-21&firstname=joseph" ;

    this.dataService.setQueryUrl(url) ;
    this.router.navigate(['voterlist']) ;
  }

  clearfields(){
    this.searchformData.reset()
  }
}
