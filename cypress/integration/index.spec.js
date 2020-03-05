
/* eslint-disable no-undef */

import { headerImg, langLink, privacyLink, tocLink, aboutCA, sMedia, mobileApp, aboutCAHref, sMediaHref, mobileHref, tocHref, privacyHref, footerImg } from './utils'

function checkA11y(cy) {
    cy.checkA11y({
        runonly: {
            type: "tag",
            values: ["wcag2a", "wcag2aa"],
        },
    });
}