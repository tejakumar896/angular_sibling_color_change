import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-data-share',
  templateUrl: './data-share.component.html',
  styleUrls: ['./data-share.component.css']
})
export class DataShareComponent implements OnInit {
  colorCircle:any=""
  bgCircle:any=""

  constructor(private sendData:SharedService) { }

  ngOnInit() {
  }
  sendDataToSibiling(text,bg,colorpick){
    console.log(colorpick)
    let Arry:any=[]
    Arry.push(text);Arry.push(bg);Arry.push(colorpick)
    this.sendData.resiveData(Arry)
  }
  colorChange(color){
    this.colorCircle=color
  }
  bgcolorChange(bgcolor){
    this.bgCircle=bgcolor
  }
}
