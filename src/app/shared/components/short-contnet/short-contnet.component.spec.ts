import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortContnetComponent } from './short-contnet.component';

describe('ShortContnetComponent', () => {
  let component: ShortContnetComponent;
  let fixture: ComponentFixture<ShortContnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortContnetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShortContnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
