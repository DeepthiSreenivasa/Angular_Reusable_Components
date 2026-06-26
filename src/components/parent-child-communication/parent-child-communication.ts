import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-parent-child-communication',
  imports: [],
  templateUrl: './parent-child-communication.html',
  styleUrl: './parent-child-communication.css',
})
export class ParentChildCommunication {

  @Input data:any;




}

parent.html

<child [data]="Deepthi" ></child>


//child to parent

@Output sendDatatoParent : EventEmitter<any>


//child
<button (onclick)=sendToparent></button>
sendToparent(){
  this.sendDatatoParent.emit("data")
}


<child  (sendDatatoParent)=getDatafromParent($event)>

