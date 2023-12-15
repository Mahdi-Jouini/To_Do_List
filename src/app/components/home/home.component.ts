import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public tasksService: TasksService, private title: Title) {
    this.title.setTitle('Home');
  }

  ngOnInit(): void {
    // Initialization logic if needed
    this.exampleMethod();
  }

  deleteTask(i: number) {
    this.tasksService.deleteTask(i);
    // You can call other methods here if needed
  }

  getUniqueDates(): string[] {
    return this.tasksService.getUniqueDates();
  }

  getTasksByDate(date: string): any[] {
    return this.tasksService.getTasksByDate(date);
  }

  getTaskIndex(date: string, i: number): number {
    return this.tasksService.getTaskIndex(date, i);
  }

  getCompletedPercentage(date: string): number {
    return this.tasksService.getCompletedPercentage(date);
  }

  // Example method calling multiple service methods
  exampleMethod() {
    const uniqueDates = this.getUniqueDates();
    console.log('Unique Dates:', uniqueDates);

    const firstDate = uniqueDates[0];
    const tasksForFirstDate = this.getTasksByDate(firstDate);
    console.log('Tasks for First Date:', tasksForFirstDate);

    const index = this.getTaskIndex(firstDate, 0);
    console.log('Index of First Task:', index);

    const completedPercentage = this.getCompletedPercentage(firstDate);
    console.log('Completed Percentage for First Date:', completedPercentage);
  }
}
