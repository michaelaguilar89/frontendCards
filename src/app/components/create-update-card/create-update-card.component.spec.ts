import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateCardComponent } from './create-update-card.component';

describe('CreateUpdateCardComponent', () => {
  let component: CreateUpdateCardComponent;
  let fixture: ComponentFixture<CreateUpdateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
