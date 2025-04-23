import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmlLayoutComponent } from './aml-layout.component';

describe('AmlLayoutComponent', () => {
  let component: AmlLayoutComponent;
  let fixture: ComponentFixture<AmlLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmlLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AmlLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
