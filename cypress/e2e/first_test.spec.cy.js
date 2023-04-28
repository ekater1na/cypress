describe('Heading text', () => {
  it('contains the correct title', () => {
    cy.visit('https://2023q1-5.netlify.app/about/');
    cy.get('span')
        .invoke('text')
        .should('equal', 'About')
  })
})