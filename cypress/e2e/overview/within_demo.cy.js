describe('Within demo', () => {
    it('Should verify within capabilities', () => {
      cy.visit('https://www.letskodeit.com/practice')

      // restricts the scopr to the parent command
      cy.get('#open-window-example-div').within(() => {
        cy.get('button')
      })
    })
})
