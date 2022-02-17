import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFavoritosComponent } from './c-favoritos.component';

describe('CFavoritosComponent', () => {
  let component: CFavoritosComponent;
  let fixture: ComponentFixture<CFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
