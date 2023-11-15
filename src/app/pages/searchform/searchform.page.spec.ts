import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchformPage } from './searchform.page';

describe('SearchformPage', () => {
  let component: SearchformPage;
  let fixture: ComponentFixture<SearchformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
