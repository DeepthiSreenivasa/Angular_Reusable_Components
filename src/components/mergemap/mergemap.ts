import { Component } from '@angular/core';
import {from} from 'rxjs/operators'

@Component({
  selector: 'app-mergemap',
  imports: [],
  templateUrl: './mergemap.html',
  styleUrl: './mergemap.css',
})
export class Mergemap { //We dont want the sequence jus  that it should all start at once

  getUser(){

  }

  getOrders(){

  }

  getNotification(){

  }

  from([this.getUsers,this.getOrders,this.getNotification]).pipe(mergemap(api=>api).subscribe(data=>console.log(data)))

}
