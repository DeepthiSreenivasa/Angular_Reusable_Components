import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mergemap } from './mergemap';

describe('Mergemap', () => {
  let component: Mergemap;
  let fixture: ComponentFixture<Mergemap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mergemap],
    }).compileComponents();

    fixture = TestBed.createComponent(Mergemap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
