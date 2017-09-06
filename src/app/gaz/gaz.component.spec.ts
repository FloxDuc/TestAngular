import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppService } from './../app.service'

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GazComponent } from './gaz.component';
import { ErrorHighlightsDirective } from './../shared/directive/error-message.directive';

describe('GazComponent', () => {
  let component: GazComponent;
  let fixture: ComponentFixture<GazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GazComponent , ErrorHighlightsDirective ],
      imports : [
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [ AppService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });
});
