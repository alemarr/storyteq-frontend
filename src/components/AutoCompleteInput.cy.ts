import AutoCompleteInput from './AutoCompleteInput.vue';

describe('<AutoCompleteInput />', () => {
  it('renders a list of suggestions', () => {
    const suggestions = ['Test', 'Test 2', 'Test 3'];
    const vModel = 'Test'; // If I use a ref, I don't get what I expect

    cy.mount(AutoCompleteInput, {
      props: {
        modelValue: vModel,
        placeholder: 'Search',
        suggestions,
      },
    });

    cy.get('[data-cy="search-input__input"]').should('have.value', 'Test');
    cy.get('[data-cy="suggestions__suggestion"]').should('have.length', 3);
    cy.get('[data-cy="suggestions__suggestion"]').eq(0).should('have.text', 'Test');
    cy.get('[data-cy="suggestions__suggestion"]').eq(1).should('have.text', 'Test 2');
    cy.get('[data-cy="suggestions__suggestion"]').eq(2).should('have.text', 'Test 3');
  });

  it('renders a list of suggestions despite the vModel value being empty', () => {
    const suggestions = ['Test', 'Test 2', 'Test 3'];
    const vModel = ''; // If I use a ref, I don't get what I expect

    cy.mount(AutoCompleteInput, {
      props: {
        modelValue: vModel,
        placeholder: 'Search',
        suggestions,
      },
    });

    cy.get('[data-cy="search-input__input"]').should('have.value', '');
    cy.get('input[placeholder="Search"]').should('exist');
    cy.get('[data-cy="suggestions__suggestion"]').should('have.length', 3);
    cy.get('[data-cy="suggestions__suggestion"]').eq(0).should('have.text', 'Test');
    cy.get('[data-cy="suggestions__suggestion"]').eq(1).should('have.text', 'Test 2');
    cy.get('[data-cy="suggestions__suggestion"]').eq(2).should('have.text', 'Test 3');
  });
});
