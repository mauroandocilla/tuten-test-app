import {Component, OnInit} from '@angular/core';
import {Booking} from '../core/models/Booking';
import {TutenService} from '../core/services/tuten.service';
import {StorageService} from "../core/services/storage.service";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  error: any;
  bookings: Booking[] = [];

  filterIdPrice = '';

  constructor(
    private tutenService: TutenService,
    private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.onGetBookings();
  }

  onGetBookings(): void {
    this.tutenService.getBookings('testapis@tuten.cl', 'contacto@tuten.cl', 'APP_BCK').subscribe(
      data => this.bookings = data as Booking[],
      error => {
        this.error = error;
      }
    );
  }

  getDateFromTimestamp(timestamp: string): string {
    return new Date(timestamp).toLocaleDateString('es-EC');
  }

  async onLogout(): Promise<void> {
    await this.storageService.logout();
  }
}
