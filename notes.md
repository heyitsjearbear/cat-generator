# AI-Powered Cat Generation Project

## Introduction
Welcome to the AI-Powered Cat Generation Project! This innovative endeavor uses cutting-edge artificial intelligence (OPENAI API) to generate cat images.

## Project Goals
- To create an accessible interface where users can interact with the AI and receive images.
- Get myself familiar with fullstack development

## Technology Stack
- Backend: Node.js
- Frontend: React with TypeScript
- Database: MongoDB
---

# To-Do List

## Phase 1: Research and Infrastructure Setup
- [ ] Research on OpenAI's assistance API for potential integration.
- [X] Set up the initial project repository and documentation.
- [X] Choose the tech stack for front-end, back-end, and database.
- [x] create designs for login/sign up
- [ ] create design for chat
- [ ] create design for user prompt generation 

## Phase 2: Front-End Development
- [x] Implement the front-end React components for the login/sign-in page.
- [ ] Ensure proper state management and validation for user input on the front-end.
- [ ] Develop chat UI with pop-up icon for information about cats

## Phase 3: Back-End Development
- [x] Develop the REST API endpoints using Node.js or another preferred server-side language.
- [ ] Set up MongoDB and create the following schemas:
    - [x] User Schema: To store user information and authentication details.
    - [ ] Cat Picture Schema: To store individual cat image details.
    - [ ] Cat Picture List Schema: To store lists or collections of cat pictures.
- [x] Implement authentication and authorization logic for user accounts.
- Set up OpenAI Assistance integration
    - [ ] Make calls to API given specific parameters from user
    buttons "GENERATE CAT THAT LOOKS LIKE <>"
    - Also develop chat implementation to only ask about cats

## Phase 4: Integration and Testing
- [ ] Integrate the front-end with the back-end services.
- [ ] Test the REST API endpoints with the front-end interface.
- [ ] Write unit and integration tests for both the front-end and back-end.

## Phase 5: Refinement and Launch Preparation
- [ ] Refine the UI/UX based on user feedback.
- [ ] Optimize the performance of the back-end, especially the database interactions.
- [ ] Prepare marketing materials and plan for the launch.

## Phase 6: Launch and Post-Launch Activities
- [ ] Deploy the application to a production environment.
- [ ] Monitor the application's performance and user feedback.
- [ ] Iterate on the application based on user feedback and analytics.

---

# Development Notes

## Day 1: [12/4/2023]
- Set up the project repository and decided on the technology stack.
- Worked on sign in page design and implementing in front end

## Day 2: [12/7/2023]
- Worked on getting a similar looking 'sign up' page
- transition: sign in disappears, sign up shows up

## Day 3 [12/9/2023]
- Implemented React Router for multi-page support
    - Made a ProtectedRoute component to make home route inaccessible to users who aren't signed in
- Implemented user login/registration with REST API

## Day 3 [12/11/2023]
- work on front-end interface to handle invalid credentials when logging in
- add interface for handling mismatched passwords when registering

## Day 4 [12/13/2023]
- start styling the home page