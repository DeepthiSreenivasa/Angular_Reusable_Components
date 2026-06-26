import { Component } from '@angular/core';
import { IComponentCard } from '../layoutInterfaces/componentCard';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
  standalone: false,
})
export class MainLayout {
  componentList: IComponentCard[] = [
    { label: 'Search with Debounce Component', id: 1, routerPath: '/SearchWithDebounce' },
    { label: 'Comment thread Component', id: 2, routerPath: '/CommentThread' },
    { label: 'NgModule Forms', id: 3, routerPath: '/NgModuleForms' },
    { label: 'Reactive Forms', id: 4, routerPath: '/ReactiveFormsPath' },
    { label: 'Switch Map', id: 4, routerPath: '/SwitchMapPath' },
  ];

  trackByID(index: number): number {
    console.log('Index::', index);
    return index;
  }
}
