import { Component, OnInit } from '@angular/core';
import { TaskService } from '../servicios/task.service';
import { Task} from '../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];   //Defino atributo tasks de tipo array de Task y le asigno el array TASKS
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //Like promise
    this.taskService.getTasks().subscribe((tasks) =>{
        this.tasks = tasks;
    } );
  }

  deleteTask(task:Task) {
    console.log("deleteTask de tasks component");
    this.taskService.deleteTask(task)
    .subscribe(
      () => {
      this.tasks = this.tasks.filter( (t) => {
        return t.id !== task.id;
      })      
    })
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task);
    }
    );
  }

}
