describe('Get demo', () => {
    it('Visit Let\'s kode it', () => {
      cy.visit('https://www.letskodeit.com/courses')
      cy.get('[data-id="41189"] > .dynamic-link').click()
    })

    it('get() method', () => {
      cy.visit('https://www.letskodeit.com/practice')
      // Tag name
      cy.get('button')

      // Id
      cy.get('#name')

      // Class Name
      cy.get('.inputs')
    
      // Attribute value
      cy.get('[placeholder="Enter Your Name"]')

      // Class value (multiple classes)
      cy.get('[class="inputs displayed-class"]')

      // Tag name and Attribute value
      cy.get('input[id="name"]:visible')

      // Tag name and Multiple Attribute value
      cy.get('input[id="name"][placeholder="Enter Your Name"]')

      // Should attr / invoke alternative
      
    })

    it('get() options', () => {
      cy.visit('https://www.letskodeit.com/practice')
      cy.get('input', {log: false}) // do not log in console
      cy.get('input', {timeout: 10000}) // explicit wait
    })

    it('Chainable commands', () => {
      cy.visit('https://www.letskodeit.com/practice')
      cy.get('button').eq(1).should('contain', 'Open Window')
      cy.get('#openwindow').should('be.visible').and('contain', 'Open Window')
    })
  })
