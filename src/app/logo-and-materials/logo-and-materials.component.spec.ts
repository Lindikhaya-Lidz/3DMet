import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAndMaterialsComponent } from './logo-and-materials.component';

describe('LogoAndMaterialsComponent', () => {
  let component: LogoAndMaterialsComponent;
  let fixture: ComponentFixture<LogoAndMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAndMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoAndMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
