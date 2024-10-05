import App from '@/App.vue';
import { createPinia, setActivePinia } from 'pinia';

describe('<App />', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders both components', () => {
    cy.mount(App);

    cy.get("[data-cy='search-input__input']").should('have.length', 2);
  });

  describe('Cities', () => {
    it('suggests the expected cities', () => {
      cy.mount(App);

      cy.get("[data-cy='search-input__input']").first().type('tul').trigger('input');
      cy.get("[data-cy='suggestions__suggestion']").should('have.length', 1);
      cy.get("[data-cy='suggestions__suggestion']").should('have.text', 'tulsa');
    });

    it('suggests other expected cities', () => {
      cy.mount(App);

      cy.get("[data-cy='search-input__input']").first().type('tem').trigger('input');
      cy.get("[data-cy='suggestions__suggestion']").should('have.length', 2);
      cy.get("[data-cy='suggestions__suggestion']").eq(0).should('have.text', 'tempe');
      cy.get("[data-cy='suggestions__suggestion']").eq(1).should('have.text', 'temuco');
    });
  });

  describe('Books', () => {
    it('suggests the expected books', () => {
      cy.mount(App);

      cy.get("[data-cy='search-input__input']").eq(1).type('don').trigger('input');
      cy.get("[data-cy='suggestions__suggestion']").should('have.length', 1);
      cy.get("[data-cy='suggestions__suggestion']").should('have.text', 'Don Quixote by Miguel De Cervantes');
    });

    it('suggests other expected books', () => {
      cy.mount(App);

      cy.get("[data-cy='search-input__input']").eq(1).type('rob').trigger('input');
      cy.get("[data-cy='suggestions__suggestion']").should('have.length', 1);
      cy.get("[data-cy='suggestions__suggestion']").eq(0).should('have.text', 'Robinson Crusoe by Daniel Defoe');
    });
  });
});
