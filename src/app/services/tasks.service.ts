// tasks.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = 'http://localhost:3000/tasks'; // Adjust the URL based on your JSON server configuration

  tasks: Task[] = [];

  constructor(private http: HttpClient) {
    this.fetchTasks();
  }

  private fetchTasks() {
    this.http.get<Task[]>(this.apiUrl).subscribe((tasks) => {
      this.tasks = tasks || [];
    });
  }

  deleteTask(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.fetchTasks();
    });
  }

  saveTask(title: any, description: any, date: any, time: any) {
    const newTask: Task = {
      title,
      description,
      date,
      time,
      completed: false,
    };

    this.http.post<Task>(this.apiUrl, newTask).subscribe(() => {
      this.fetchTasks();
    });
  }

  updateTask(id: number, item: any) {
    this.http.put(`${this.apiUrl}/${id}`, item).subscribe(() => {
      this.fetchTasks();
    });
  }

  getUniqueDates(): string[] {
    return Array.from(new Set(this.tasks.map(task => task.date)));
  }

  getTasksByDate(date: string): any[] {
    return this.tasks.filter(task => task.date === date).sort((a, b) => a.time.localeCompare(b.time));
  }

  getCompletedPercentage(date: string): number {
    const tasksForDate = this.getTasksByDate(date);
    const completedTasks = tasksForDate.filter(task => task.completed);
    const percentage = Math.round((completedTasks.length / tasksForDate.length) * 100);
    return percentage;
  }

  getTaskIndex(date: string, i: number): number {
    const tasks = this.getTasksByDate(date);
    return this.tasks.indexOf(tasks[i]);
  }
}
