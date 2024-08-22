import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletasTablePageComponent } from './atletas-table-page.component';

describe('AtletasTablePageComponent', () => {
  let component: AtletasTablePageComponent;
  let fixture: ComponentFixture<AtletasTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtletasTablePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtletasTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
