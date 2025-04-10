# cypress-quiz

Tech Quiz Test Suite
This project demonstrates the importance of reliable testing practices in modern web development by integrating Cypress testing into a pre-built MERN stack Tech Quiz application. This application allows users to take a quiz of ten random questions and view their final score.

In this challenge, Cypress was added to perform both component and end-to-end testing to ensure robust functionality.

📽️ Walkthrough Video
👉 Click here to view the walkthrough video
(Insert your video link here once it's ready)

🧠 User Story
AS AN aspiring developer
I WANT to take a tech quiz
SO THAT I can test my knowledge and improve my skills

✅ Acceptance Criteria
When the user clicks the start button, the quiz begins and displays a question.

After each answer, the next question is shown.

Once all questions are answered, the quiz ends.

The final score is displayed.

Users can start a new quiz once finished.

🧪 Cypress Testing Overview
Component Test
✅ Tests the functionality of the Quiz component in isolation.

End-to-End (E2E) Test
✅ Simulates a complete quiz-taking session from start to finish.

✅ Verifies that the score is shown at the end.

✅ Confirms that the quiz can be restarted.

🛠️ Technologies Used
MongoDB

Express.js

React

Node.js

Cypress (for testing)

📁 Project Structure
plaintext
Copy
Edit
.
├── client/                 # React frontend
├── server/                 # Node/Express backend
├── cypress/                # Cypress testing
│   ├── component/
│   │   └── Quiz.cy.jsx     # Quiz component test
│   ├── e2e/
│   │   └── quiz.cy.js      # End-to-end test
│   ├── fixtures/
│   │   └── questions.json  # Sample quiz data
│   └── tsconfig.json
├── cypress.config.ts       # Cypress config
├── .env                    # Required environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md               # You're here!
🚀 Getting Started
Clone this repo:

bash
Copy
Edit
git clone https://github.com/your-username/tech-quiz-test-suite.git
cd tech-quiz-test-suite
Install dependencies:

bash
Copy
Edit
npm install
Rename the environment file:

bash
Copy
Edit
cp .env.example .env
Run the app (in one terminal window):

bash
Copy
Edit
npm run develop
Run Cypress tests (in another terminal window):

bash
Copy
Edit
npm run test
🎯 Grading Overview
Criteria	Points
Deliverables	15%
Walkthrough Video	32%
Technical Requirements	40%
Repository Quality	13%
📌 Notes
You do not need to modify the quiz app's existing logic.

All additions should be limited to Cypress configurations and test files.

This project emphasizes testing strategy, not feature development.

📎 Submission Checklist
 Cypress component test written

 Cypress end-to-end test written

 Walkthrough video recorded

 README includes project info and video link

 Environment file renamed to .env

 All tests pass from the command line