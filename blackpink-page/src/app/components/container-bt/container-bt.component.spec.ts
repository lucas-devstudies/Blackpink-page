import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBtComponent } from './container-bt.component';

describe('ContainerBtComponent', () => {
  let component: ContainerBtComponent;
  let fixture: ComponentFixture<ContainerBtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerBtComponent]
    });
    fixture = TestBed.createComponent(ContainerBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
