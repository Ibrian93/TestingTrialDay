import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import LearningPage from '../common/LearningPage';

beforeEach(() => {
    cy.fixture("testinfo.json").as("testInfo")
})


Given('I\'m on the maximum page', () => {
    LearningPage.visitMaximum();
});

Then('The Info-Text is ending in {string}', (text) => {
    cy.fixture("testinfo").then((testInfo) => {
        cy.get('#infoContent').contains(testInfo.info)
    })
})