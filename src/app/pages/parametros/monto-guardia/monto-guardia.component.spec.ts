import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontoGuardiaComponent } from './monto-guardia.component';

describe('MontoGuardiaComponent', () => {
  let component: MontoGuardiaComponent;
  let fixture: ComponentFixture<MontoGuardiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MontoGuardiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MontoGuardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
