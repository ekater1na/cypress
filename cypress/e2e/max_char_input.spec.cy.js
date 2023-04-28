describe('Text box with max characters', () => {
    it('display the appropriate remaining character count', () => {
        cy.visit('https://2023q1-5.netlify.app/forms');
        cy.get('form')
            .find('input')
            .first()
            .should('have.attr', 'placeholder')
    })
})