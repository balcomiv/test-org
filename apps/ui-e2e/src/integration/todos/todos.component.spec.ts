describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=todoscomponent--primary&knob-todos'));

  it('should render the component', () => {
    cy.get('test-org-todos').should('exist');
  });
});
