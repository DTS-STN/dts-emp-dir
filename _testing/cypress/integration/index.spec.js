/* eslint-disable no-undef */

function checkA11y(cy) {
  cy.checkA11y({
    runonly: {
      type: "tag",
      values: ["wcag2a", "wcag2aa"]
    }
  });
}



// describe('changes to the contact on button click page', function() {
//   beforeEach(function() {
//     cy.visit('/')
//   })

//   it('Has no detectable a11y violations on load', () => {
//     // Test the page at initial load
//     cy.get('#banner-ed')
//   //  cy.injectAxe() 
//     cy.url().should('contains', '/')
//     // there is a wait so that the image can load otherwise the white text is on a white background
//   //  cy.wait(3000);
//   //  checkA11y(cy)
// })

// })
// describe('open to the Contact page', function() {
//   beforeEach(function() {
//     cy.visit('/contact.html')
//   })

//       // GC Logo Header section
//   it('Contains the GC Logo Header section with link to canada.ca and indexfr.html', function() {
//       cy.get('#gc-header-logo').should('have.attr', 'href', 'https://www.canada.ca/')
//       cy.get('#lang-change-link').should('have.class', 'links')
//           .and('have.attr', 'href', 'contactfr.html')      
//   })
  
  // it('Has a navbar and jumbo image with text', () => {
  // // Test the page at initial load
  // cy.injectAxe() 
  // cy.url().should('contains', '/contact')
  // cy.wait(2000);
  // checkA11y(cy)
  // })




            // GC Logo Footer section
  // it('Contains the GC Footer section with links', function() {
  //     cy.get('#gc-footer-logo').should('be.visible')
  //     cy.get('#about-canada').should('have.class', 'links')
  //         .and('have.attr', 'href', 'https://www.canada.ca/en/government/about.html') 
  //     cy.get('#terms').should('have.class', 'links')
  //         .and('have.attr', 'href', 'https://www.canada.ca/en/transparency/terms.html')  
  //     cy.get('#privacy').should('have.class', 'links')
  //         .and('have.attr', 'href', 'https://www.canada.ca/en/transparency/privacy.html')       
  // })

// })
