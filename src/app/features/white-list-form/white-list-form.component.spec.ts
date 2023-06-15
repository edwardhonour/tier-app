import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteListFormComponent } from './white-list-form.component';

describe('WhiteListFormComponent', () => {
  let component: WhiteListFormComponent;
  let fixture: ComponentFixture<WhiteListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WhiteListFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
