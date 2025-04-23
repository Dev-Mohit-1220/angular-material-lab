import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortContentComponent } from './short-content.component';

describe('ShortContentComponent', () => {
  let component: ShortContentComponent;
  let fixture: ComponentFixture<ShortContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShortContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
