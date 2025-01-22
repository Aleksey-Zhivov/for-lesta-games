// Глобальные хуки
beforeEach(() => {
  cy.log('Starting a new test...');
});

afterEach(() => {
  cy.log('Test finished!');
});

// Игнорирование неперехваченных исключений
Cypress.on('uncaught:exception', (err) => {
  cy.log('Uncaught exception:', err.message);
  return false;
});
