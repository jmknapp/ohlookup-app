import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//import { ActivatedRoute, Router } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.page.html',
  styleUrls: ['./searchform.page.scss'],
})

export class SearchformPage implements OnInit {

  public searchformData: FormGroup ;

  constructor(private router: Router) { }

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
    this.router.navigate(['voterlist'])
    console.log(this.searchformData.value)
  }

  clearfields(){
    //this.router.navigate(['searchform'])
    this.searchformData.reset()
  }
}
