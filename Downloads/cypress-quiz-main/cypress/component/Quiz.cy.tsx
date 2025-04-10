import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

const mockQuestions = Array.from({ length: 10 }).map((_, i) => ({
  _id: `question-${i + 1}`,
  question: `Question ${i + 1}`,
  answers: [
    { text: 'Answer A', isCorrect: true },
    { text: 'Answer B', isCorrect: false },
    { text: 'Answer C', isCorrect: false },
  ],
  correctAnswer: 'Answer A',
}));

describe('<Quiz /> - Component Test', () => {
  beforeEach(() => {
    mount(<Quiz testQuestions={mockQuestions} />);
  });

  it('renders the Start Quiz button', () => {
    cy.get('[data-cy="start-quiz"]').should('be.visible');
  });

  it('starts the quiz and shows the first question', () => {
    cy.get('[data-cy="start-quiz"]').click();
    cy.get('[data-cy="question"]').should('contain.text', 'Question 1');
  });

  it('completes the quiz and shows the score screen', () => {
    cy.get('[data-cy="start-quiz"]').click();

    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy="answer-button"]').first().click();
    }

    cy.get('[data-cy="score-display"]').should('be.visible');
  });

  it('restarts the quiz from the score screen', () => {
    cy.get('[data-cy="start-quiz"]').click();

    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy="answer-button"]').first().click();
    }

    cy.get('[data-cy="restart-quiz"]').click();

    cy.get('[data-cy="question"]').should('contain.text', 'Question 1');
  });
});
