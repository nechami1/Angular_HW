import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Worker {
  name:string;
  id: number;
  salary: number;
  role:number;
}

@Component({
  selector: 'app-show-workers',
  templateUrl: './show-workers.component.html',
  styleUrls: ['./show-workers.component.css']
})


export class ShowWorkersComponent implements OnInit {
  
  workers: Worker[] =[];

  getWorkers() {
    return this.httpService.get<Worker[]>('/assets/workers.json');
  }
  
  constructor(private httpService: HttpClient) {
    
    this.getWorkers()
    .subscribe((workers) => this.workers =workers);
   }

  ngOnInit(): void {
    
  }

}
