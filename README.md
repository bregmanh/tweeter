# Tweeter Project

Tweeter is a simple, single-page Twitter clone. This fun little project aims to mainly improve my front-end skills such as user interaction, responsive design, and error handling.

It was built with HTML, CSS, SASS, JS, jQuery and AJAX front-end skills, and Node, Express and MongoDB for the back-end.

## Features and Functionality

1. Write a new tweet: to expose the tweet form, the user would press the "Write a New Tweet" button which is animated upon hover. Once clicked, the form to write a tweet appears. If the user clicks the "Write a New Tweet" again, the form disappears.
2. Tweet validation: users can submit a tweet up to 140 characters long, and have a counter to indicate how many characters are left. When the tweet passes the 140 character mark, the counter turns negative and red. If the user nevertheless clicks the submit button, an error appears. Similarly, the user gets an error upon submitting an empty tweet.
3. Submission: once the user submits a valid tweet, the data is then sent as an ajax request, and rendered on the screen. Last tweet to be submitted is at the top. Additional details that are rendered are: users name, their handle, tweet content and the time of post. 
4. Additional features: responsive design, and escaping to prevent XSS.

## Final Product
The following illustrates the main features of the app.
![illustration](https://github.com/bregmanh/tweeter/blob/extra/docs/illustration.gif?raw=true)

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.

## Dependencies

- Express
- Node 5.10.x or above
- Chance
- Body-Parser
- SASS
