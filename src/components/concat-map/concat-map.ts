import { Component, OnInit } from '@angular/core';
import { concat, concatMap } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  imports: [],
  templateUrl: './concat-map.html',
  styleUrl: './concat-map.css',
})
export class ConcatMap implements OnInit {
  //For running API sequentially one after the other // we can also use forkJoin

  ngOnInit() {
    //   this.http.getUsers().pipe(concatMap(users=>{
    //     return this.http.getPosts()
    //   }),
    //   concatMap(posts=>{
    //     return this.http.getComments()
    //   }).subscribe(data=>{console.log(data)})
    // }
  }
}
