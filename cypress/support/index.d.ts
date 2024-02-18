declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Log in
       * @example
       * cy.login(username: string, password: string)
       */
      login(): Chainable<any>
      /**
       * LOg in via API
       * @example
       * cy.apiLogin('new item')
       */
      apiLogin(): Chainable<any>
  
      /**
       * Command that injects Axe core library into app html.
       * @example
       *  cy.waitForFirstLoad('')
       */
      waitForFirstLoad(): Chainable<any>

       /**
       * Log out
       * @example
       *  cy.logout('')
       */
      logout(): Chainable<any>
    }
  }