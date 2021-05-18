import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  showMe =0;
  setShowMe(current: number){
    this.showMe = current;
  }
  constructor() {

   }

  ngOnInit(): void {
  }

}
