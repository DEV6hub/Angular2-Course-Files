import {
  addProviders,
  inject,
  TestComponentBuilder
} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let app: AppComponent;
  let builder: TestComponentBuilder;

  beforeEach(() => addProviders([AppComponent]));

  beforeEach(inject([AppComponent, TestComponentBuilder],
    (component: AppComponent, tcb: TestComponentBuilder) => {
      app = component;
      builder = tcb;
    }
  ));

  it('should exist', () => {
    expect(app).toBeTruthy();
  });

  it('should be able to toggle a message', () => {
    expect(app.showMessage).toBeFalse();
    app.toggleMessage();
    expect(app.showMessage).toBeTrue();
  });

  it('should show a title in the template', () => {
    let title = app.title;

    builder.createAsync(AppComponent).then((fixture) => {
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent.includes(title)).toBeTrue();
    });
  });
});
