import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdRemoveCardComponent } from './get-by-id-remove-card.component';

describe('GetByIdRemoveCardComponent', () => {
  let component: GetByIdRemoveCardComponent;
  let fixture: ComponentFixture<GetByIdRemoveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByIdRemoveCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetByIdRemoveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
