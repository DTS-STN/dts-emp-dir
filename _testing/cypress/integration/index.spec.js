/* eslint-disable no-undef */

function checkA11y(cy) {
  cy.checkA11y({
    runonly: {
      type: "tag",
      values: ["wcag2a", "wcag2aa"]
    }
  });
}
// describe('Search Name', function() {
//     it('just types Anne into search box', function() {
//        cy.get('.col-11 > .row > .col-3 > .form-group > .form-control').click()
//        cy.get('.col-11 > .row > .col-3 > .form-group > .form-control').type('Anne')
//        cy.get('.col-11 > .row > .col-3 > .form-group > .form-control').click()

//     })
// })
