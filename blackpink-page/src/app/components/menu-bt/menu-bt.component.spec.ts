import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBtComponent } from './menu-bt.component';

describe('MenuBtComponent', () => {
  let component: MenuBtComponent;
  let fixture: ComponentFixture<MenuBtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuBtComponent]
    });
    fixture = TestBed.createComponent(MenuBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
