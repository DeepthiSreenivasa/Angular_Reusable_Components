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
    { label: 'Search with Debounce Component', id: 1 },
    { label: 'Comment thread Component', id: 2 },
  ];

  trackByID(index: number): number {
    console.log('Index::', index);
    return index;
  }
}
