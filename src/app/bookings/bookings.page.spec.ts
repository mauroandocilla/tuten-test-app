import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {BookingsPage} from './bookings.page';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SearchFilterPipe} from '../core/pipes/search.pipe';

describe('BookingsPage', () => {
  let component: BookingsPage;
  let fixture: ComponentFixture<BookingsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsPage, SearchFilterPipe],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
