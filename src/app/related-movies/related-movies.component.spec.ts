import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedMoviesComponent } from './related-movies.component';

describe('RelatedMoviesComponent', () => {
  let component: RelatedMoviesComponent;
  let fixture: ComponentFixture<RelatedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
