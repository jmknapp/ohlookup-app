import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router'
import { SearchformPage } from './searchform.page';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('SearchformPage', () => {
  let component: SearchformPage;
  let fixture: ComponentFixture<SearchformPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchformPage],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchformPage);  
    router = TestBed.get(Router);
    component = fixture.componentInstance;
  }));

  /*
  beforeEach(async() => {
    fixture = TestBed.createComponent(SearchformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */

 it('should go to voterlist page after searchform', fakeAsync(() => {
    spyOn(router, 'navigate');

    component.votersearch();
    //component.ngOnInit();
    //tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['voterlist']);
  }));

  it('should reset searchform input fields', () => {spyOn(router, 'navigate');

    component.clearfields();
    expect(router.navigate).toHaveBeenCalledWith(['votersearch']);
  })
});
