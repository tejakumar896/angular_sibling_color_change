import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  color:any=""
  bg_color:any=""

  constructor(private _service:SharedService) { }

  ngOnInit() {
    this._service.currentSend.subscribe(me=>{
      let data=me
      this.bg_color=data[0]
      console.log(data[0])
      this.color=data[0]
    })
  }


 

}
