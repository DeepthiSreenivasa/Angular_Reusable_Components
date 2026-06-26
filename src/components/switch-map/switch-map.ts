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
  searchForm = new FormGroup({
    searchField: new FormControl('', Validators.required),
  });
  constructor(public http: Http) {}

  ngOnInit() {
    this.searchForm
      .get('searchField')
      ?.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((data) => (data ? this.http.getSearchData(data) : '')),
      )
      .subscribe((data) => console.log(data));
  }
}
