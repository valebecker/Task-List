import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../Task'
import { TASKS } from '../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];  //task va a recibir un un valor
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task): void {
    console.log("onDelete de tasks-item");
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task): void {
    console.log("onDelete de tasks-item");
    this.onToggleReminder.emit(task);
  }

}
