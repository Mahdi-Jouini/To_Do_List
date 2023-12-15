import { Component } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  currentDay: string;
  currentDate: string;
  modalRef: MdbModalRef<AddTaskComponent> | null = null;

  constructor(private modalService: MdbModalService) {
    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    this.currentDay = daysOfWeek[currentDate.getDay()];
    this.currentDate = this.formatDate(currentDate);
  }

  private formatDate(date: Date): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return ` ${day}, ${month}, ${year}`;
  }
  openModal() {
    this.modalRef = this.modalService.open(AddTaskComponent)
  }
    
    }
