import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapDSI22Component } from './face-snap-dsi22.component';

describe('FaceSnapDSI22Component', () => {
  let component: FaceSnapDSI22Component;
  let fixture: ComponentFixture<FaceSnapDSI22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSnapDSI22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSnapDSI22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
