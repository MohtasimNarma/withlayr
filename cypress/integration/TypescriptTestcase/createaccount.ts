/// <reference types="cypress"/>

let data1 = require("../../fixtures/testdata.json")

describe("Test Suite of Contact us Page",()=>{
  
    it('Browse app vwo url',()=>{
       
        cy.visit(data1.url)
        cy.wait(3000)
        cy.title().should('eq', 'Login - VWO')
    })

    it('Click on Start Trail',()=>{
        cy.get("[data-qa='bericafeqo']").click()
      
    })

    it('Enter the email address and click',()=>{
        var chars = 'abcdefghijklmnopqrstuvwxyz';
        var emrdm =  chars[Math.floor(Math.random()*26)] + Math.random().toString(36).substring(2,11) + '@yahoo.com';
        cy.log(emrdm)
        cy.get("[name='email']").eq(0).should('be.visible').type(emrdm)
        cy.wait(5000)
        cy.get("[data-qa='page-su-submit']").eq(0).click()
        
    })

    it('Enter the Acount Details',()=>{
        cy.wait(5000)
        cy.get("#page-v1-fname").type(data1.firstname)
        cy.get("#page-v1-lname").type(data1.lastname)
        cy.get("#page-v1-pnumber").type(data1.phonenumber)
        cy.get("#page-v1-pwd").type(data1.regpwd)
        cy.get("[data-qa='page-su-submit']").eq(1).click();
        
    })

});