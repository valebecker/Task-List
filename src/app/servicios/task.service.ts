import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs'
import {Task} from '../Task'
//import {TASKS} from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks/'; //HAY QUE AGREGAR LA / AL FINAL

  constructor(private http: HttpClient) {
   }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = '${this.apiUrl}/${task.id}'; 
   // const url = this.apiUrl + task.id;
    console.log("deleteTask de task service");
    console.log(url);
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    //const url = '${this.apiUrl}/${task.id}'; ESTO ESTÁ MAL
    const url = this.apiUrl + task.id;
    return this.http.put<Task>(url,task, httpOptions);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl,task, httpOptions);
  }
}
