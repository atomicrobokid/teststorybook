import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe(AppComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(AppComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

    describe('Component accessibility tests', () => {
        beforeEach(() => {
            cy.mount(AppComponent);
            cy.injectAxe();
        });

        it('Should have no accessibility violations',() => {
            cy.checkA11y();
        });
    });

  it('renders', () => {
    cy.mount(AppComponent);
  });
});
