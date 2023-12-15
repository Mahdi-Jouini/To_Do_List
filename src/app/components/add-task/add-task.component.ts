import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  ngOnInit(): void {}
constructor(private taskService:TasksService ,private router:Router, public modalRef: MdbModalRef<AddTaskComponent>){}
saveTask(title: any, discription: any, date: any, time: any){
this.taskService.saveTask(title.value,discription.value,date.value,time.value);
this.router.navigate(['/'])
}
}
