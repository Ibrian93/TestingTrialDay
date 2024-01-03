import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LearningPage from '../common/LearningPage';

Given('I\'m on the maximum page', () => {
    LearningPage.visitMaximum();
});

Then('I see a start-explenation-button {string} the template', (position) => {
    if (position === 'above') {
        cy.get('[aria-label="Start explanation"]').aboveOf('#stepByStep')
    } else if (position === 'below') { 
        cy.get('[aria-label="Start explanation"]').belowOf('#stepByStep')
    }
});


When('I click on the start-explenation-button', () => {
    cy.get('#buttons').click()
});

Then('the template is scrolled to the top of the browser', () => {
    cy.get('#Guide-mail').topIsWithinViewport()
});

Then('the explenation is started', () => {

});
