describe('Click demo', () => {
    it('Should explain click() method', () => {
      cy.visit('https://www.letskodeit.com/practice')

      // click() based on position
      cy.get('#opentab').click()
      cy.get('#opentab').click('topLeft')

      // click() based on coordinates
      cy.get('#hide-textbox').click(3, 5).click(6, 7)
      
      // Ignore erro check
      cy.get('#displayed-text').click({force: true})

      // Multiple elements
      cy.get('input[type="checkbox"][name="cars"]').click({multiple: true})

      // Scroll
      cy.get('#mousehover').click({scrollBehavior: top})
    })
})
