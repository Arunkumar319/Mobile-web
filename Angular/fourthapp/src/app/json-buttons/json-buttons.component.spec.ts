import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonButtonsComponent } from './json-buttons.component';

describe('JsonButtonsComponent', () => {
  let component: JsonButtonsComponent;
  let fixture: ComponentFixture<JsonButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
