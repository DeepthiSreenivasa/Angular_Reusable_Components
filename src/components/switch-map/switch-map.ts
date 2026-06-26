import { Component, OnInit } from '@angular/core';
import { Http } from '../../app/service/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch-map',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './switch-map.html',
  styleUrl: './switch-map.css',
})
export class SwitchMap implements OnInit {
  /****Mostly used to cancel the previous API call */

  public userDetails: any = [];

  searchForm = new FormGroup({
    searchField: new FormControl('', Validators.required),
  });
  constructor(public http: Http) {}

  ngOnInit() {
    this.searchForm
      .get('searchField')
      ?.valueChanges.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((value) => this.http.getSearchData(value ?? '')),
      )
      .subscribe((data) => {
        this.userDetails = data.users;
        console.log('data::', this.userDetails);
      });
  }
}
