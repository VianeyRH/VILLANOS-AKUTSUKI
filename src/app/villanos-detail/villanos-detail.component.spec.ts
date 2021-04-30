import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanosDetailComponent } from './villanos-detail.component';

describe('VillanosDetailComponent', () => {
  let component: VillanosDetailComponent;
  let fixture: ComponentFixture<VillanosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillanosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillanosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
