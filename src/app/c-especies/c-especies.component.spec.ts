import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEspeciesComponent } from './c-especies.component';

describe('CEspeciesComponent', () => {
  let component: CEspeciesComponent;
  let fixture: ComponentFixture<CEspeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEspeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
