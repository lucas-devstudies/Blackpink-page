import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerConnectionComponent } from './container-connection.component';

describe('ContainerConnectionComponent', () => {
  let component: ContainerConnectionComponent;
  let fixture: ComponentFixture<ContainerConnectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerConnectionComponent]
    });
    fixture = TestBed.createComponent(ContainerConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
