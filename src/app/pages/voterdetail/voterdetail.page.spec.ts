import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoterdetailPage } from './voterdetail.page';

describe('VoterdetailPage', () => {
  let component: VoterdetailPage;
  let fixture: ComponentFixture<VoterdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VoterdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
