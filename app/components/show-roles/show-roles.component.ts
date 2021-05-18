import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Worker} from '../show-workers/show-workers.component';
import { from } from 'rxjs';


 export interface Role{
   id:number;
   role:string;
 }
@Component({
  selector: 'app-show-roles',
  templateUrl: './show-roles.component.html',
  styleUrls: ['./show-roles.component.css']
})
export class ShowRolesComponent implements OnInit {
 
  roles: Role[] =[];
  workers: Worker[] =[];
  
  getWorkers() {
    return this.httpService.get<Worker[]>('/assets/workers.json');
  }
  getRoles() {
    return this.httpService.get<Role[]>('/assets/roles.json');
  }

  getAverage(role:Role){
   let sum:number=0
   let count:number=0;
   this.workers.forEach(w => {
      if(w.role==role.id){
        sum+=w.salary;
        count++;
      }
    });
    return sum/count;
  }
  constructor(private httpService: HttpClient) {
    this.getRoles().subscribe((roles)=> this.roles=roles)
    this.getWorkers().subscribe((workers)=> this.workers=workers)
   }

  ngOnInit(): void {
  }

}
