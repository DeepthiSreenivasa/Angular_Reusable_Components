import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithDebounce } from './search-with-debounce';

describe('SearchWithDebounce', () => {
  let component: SearchWithDebounce;
  let fixture: ComponentFixture<SearchWithDebounce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchWithDebounce],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchWithDebounce);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
