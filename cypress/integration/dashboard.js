/// <reference types="cypress"/>

let data = require("../fixtures/testdata.json")

describe("Test Suite for Dashboard",()=>{
  
    it('Browse app vwo url',()=>{
       
        cy.visit(data.url)
        cy.wait(3000)
        cy.title().should('eq', 'Login - VWO')
    })

    it('Enter Username and Password',()=>{
        cy.get('#login-username').type(data.emailreg)
        cy.get('#login-password').type(data.regpwd)
        cy.get('[data-qa="ezazsuguuy"]').click()
    })

    it('Verify the Left navigation bar',()=>{
            cy.get('.navbar-list').find('li').each(($e1,index,$list)=>{
            const text =$e1.find('span').text()
            cy.log(index)
            cy.log(text)
          })
        cy.get('.navbar-list').find("[data-qa='nav-label']").eq(1).should('have.text',"Testing")
        cy.get('.navbar-list').find("[data-qa='nav-label']").eq(5).should('have.text',"Insights")
        cy.get('.navbar-list').find("[data-qa='nav-label']").eq(12).should('have.text',"Personalize")
        cy.get('.navbar-list').find("[data-qa='nav-label']").eq(13).should('have.text',"Deploy")
        cy.get('.navbar-list').find("[data-qa='nav-label']").eq(14).should('have.text',"Data360")
        cy.get('.navbar-list').find("[data-qa='nav-label']").eq(16).should('have.text',"Plan")
        cy.get('.navbar-list').find("[data-qa='nav-label']").eq(20).should('have.text',"Configurations")
        cy.get('.navbar-list').find("[data-qa='nav-label']").eq(22).should('have.text',"Services")
        cy.get('.navbar-list').find("[data-qa='nav-label']").eq(23).should('have.text',"Updates")


    })

    it('Click on Plan -> Hypotheses',()=>{
        cy.get('.navbar-list').find("[data-qa='nav-label']").eq(16).click()
        cy.contains("Hypotheses").click()
        cy.wait(6000)

    })

    it.skip('Enter First Hypotherse',()=>{
        cy.get("[data-qa='cinuyojufe']").click()
        cy.get("[placeholder='Type to search']").eq(1).type("First Hypotherse")
        cy.get('#create-hypothesis-solution').type("Not Applicable")
        cy.get('#create-hypothesis-problem').type("First Address")
        cy.get('#create-hypothesis-source-url').type("First")
        cy.get("[placeholder='E.g. Homepage']").eq(1).type("First")
        cy.get('.score-box').find('li').eq(0).click()
        cy.get('.score-box').eq(1).find('li').eq(0).click()
        cy.get('.score-box').eq(2).find('li').eq(0).click()
        cy.get("[data-qa='btn-submit-hypothesis-creation-form']").click()

    })

    it.skip('Enter Secong Hypothers',()=>{
        cy.get("[data-qa='btn-create']").click()
        cy.get(2000)
        cy.get("[placeholder='Type to search']").eq(1).type("Second Hypotherse")
        cy.get('#create-hypothesis-solution').type("Not Applicable")
        cy.get('#create-hypothesis-problem').type("Second Address")
        cy.get('#create-hypothesis-source-url').type("Second")
        cy.get("[placeholder='E.g. Homepage']").eq(1).type("Second")
        cy.get('.score-box').find('li').eq(1).click()
        cy.get('.score-box').eq(1).find('li').eq(2).click()
        cy.get('.score-box').eq(2).find('li').eq(2).click()
        cy.get("[data-qa='btn-submit-hypothesis-creation-form']").click()
    })

    it.skip('Enter Third Hypothers',()=>{
        cy.get("[data-qa='btn-create']").click()
        cy.get(2000)
        cy.get("[placeholder='Type to search']").eq(1).type("Third Hypotherse")
        cy.get('#create-hypothesis-solution').type("Not Applicable")
        cy.get('#create-hypothesis-problem').type("Third Address")
        cy.get('#create-hypothesis-source-url').type("Third")
        cy.get("[placeholder='E.g. Homepage']").eq(1).type("Third")
        cy.get('.score-box').find('li').eq(2).click()
        cy.get('.score-box').eq(1).find('li').eq(3).click()
        cy.get('.score-box').eq(2).find('li').eq(3).click()
        cy.get("[data-qa='btn-submit-hypothesis-creation-form']").click()
    })

    it('Click on List View',()=>{
        cy.get('[data-qa="fimudamuvo"] > a').click()
    })

    it('Search on the Basis of Created',()=>{

        cy.get("[placeholder='Search Hypotheses']").type("First")
        cy.wait(4000)
        cy.get("[placeholder='Search Hypotheses']").find('div').should('include.text',"First")

    })

    it('Search on the Basis of Score',()=>{

        cy.get("[placeholder='Search Hypotheses']").clear()
        cy.get("[placeholder='Search Hypotheses']").type('1')
        cy.get('select').select('Score')
        cy.wait(4000)
        cy.get("[data-qa='pie-score']").find('text').should('include.text',"1.0") 

    })
   
})