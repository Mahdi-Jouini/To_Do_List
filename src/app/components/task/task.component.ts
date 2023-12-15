import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
 
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  taskId:any;
  task !: any
  constructor(private route:ActivatedRoute, private tasksService:TasksService ,private router:Router){}
  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('i');
    this.task = this.tasksService.tasks[this.taskId];
    console.log("Task details:", this.task);
  }
  updateTask() {
    this.task.completed = false;
    const taskId = this.tasksService.getTaskIndex(this.task.date, this.taskId);
    this.tasksService.updateTask(taskId, this.task);
    this.router.navigate(['/']);
  }
  
  deleteTask() {
    const taskId = this.tasksService.getTaskIndex(this.task.date, this.taskId);
    this.tasksService.deleteTask(taskId);
    this.router.navigate(['/']);
  }
  
}
