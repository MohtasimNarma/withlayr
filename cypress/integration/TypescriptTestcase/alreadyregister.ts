/// <reference types="cypress"/>

let data = require("../../fixtures/testdata.json")

describe("Test Suite Already Register email",()=>{
  
    it('Browse app vwo url',()=>{
       
        cy.visit(data.url)
        cy.wait(3000)
        cy.title().should('eq', 'Login - VWO')
    })

    it('Click on Start Trail',()=>{
        cy.get("[data-qa='bericafeqo']").click()
      
    })

    it('Enter the email address and click',()=>{
        
        cy.get("[name='email']").eq(0).should('be.visible').type(data.emailreg)
        cy.wait(5000)
        cy.get("[data-qa='page-su-submit']").eq(0).click()
        cy.get('#page-free-trial-signup-form-step1').find('div').should('include.text',"An account with this email already exists.")
        
    })


});