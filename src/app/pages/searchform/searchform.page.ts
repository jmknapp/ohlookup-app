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
    var url = "http://ohlookup.com/ohlookup-app.php?" ;

    if (this.searchformData.value.firstname != null)
      url = url + "firstname=" + this.searchformData.value.firstname ;
    if (this.searchformData.value.lastname != null)
      url = url + "&lastname=" + this.searchformData.value.lastname ;
    if (this.searchformData.value.streetaddress != null)
      url = url + "&streetaddress=" + this.searchformData.value.streetaddress ;
    if (this.searchformData.value.city != null)
      url = url + "&city=" + this.searchformData.value.city ;
    if (this.searchformData.value.zip != null)
      url = url + "&zip=" + this.searchformData.value.zip ;
    if (this.searchformData.value.birthdate != null)
      url = url + "&birthdate=" + this.searchformData.value.birthdate ;

    this.dataService.setSearchQueryUrl(url) ;
    this.router.navigate(['voterlist']) ;
  }

  clearfields(){
    this.searchformData.reset()
  }

  helpfile(){
    this.router.navigate(['help']) ;
  }
}
