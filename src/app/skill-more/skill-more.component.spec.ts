import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMoreComponent } from './skill-more.component';

describe('SkillMoreComponent', () => {
  let component: SkillMoreComponent;
  let fixture: ComponentFixture<SkillMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
