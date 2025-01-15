Blog App Project

📖 Project Overview

This project is a simple blog application developed using React. It includes a navigation bar, a blog list page with dynamic blog cards, and a blog details page with reviews and a newsletter subscription section. The app utilizes data fetched from a mock API.

🛠️ Implementation Details

Navigation Bar

Displays a logo on the left side.

Sign In and Register buttons are on the right side.

A bell counter increments each time a blog card is clicked.

The navigation bar remains fixed and consistent across all pages.

Blog List Page

Dynamic blog cards are displayed with a title, image, excerpt, category, and publication date.

A "Read More" link navigates to the blog details page.

A functional search bar filters blog posts by title or keywords.

Infinite scroll loads new blog posts as the user scrolls down.
Blog Details Page

Displays the full blog content with the title, main image, publication date, and category.

Includes a reviews section with reviewer names, ratings, and comments.

Contains a newsletter subscription form with an input field for email and a subscribe button.

🚀 Running the Project Locally

Prerequisites

Ensure you have the following installed on your system:

Node.js (v14 or higher)

npm (v6 or higher) or yarn

Steps to Run
Clone the repository: https://github.com/itsjahid01/synesis-it-task
Navigate to the project folder: cd blog-app
Install dependencies: npm install
Start the development server: npm start
Open your browser and navigate to: http://localhost:3000

🤔 Assumptions and Decisions

The project uses the JSONPlaceholder API to fetch blog data.

The navigation bar remains fixed at the top for consistency across all pages.

Infinite scroll is implemented for better user experience.

The bell counter is incremented on each blog card click to simulate notifications.

Reviews and the newsletter subscription section are static and not tied to the API.

📚 Technologies Used

React for UI components

React Router for navigation

Axios for API requests

CSS for styling
