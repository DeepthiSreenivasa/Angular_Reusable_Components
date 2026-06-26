import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildCommunication } from './parent-child-communication';

describe('ParentChildCommunication', () => {
  let component: ParentChildCommunication;
  let fixture: ComponentFixture<ParentChildCommunication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentChildCommunication],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentChildCommunication);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
