import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaFormPagesComponent } from './atleta-form-pages.component';

describe('AtletaFormPagesComponent', () => {
  let component: AtletaFormPagesComponent;
  let fixture: ComponentFixture<AtletaFormPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtletaFormPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtletaFormPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
