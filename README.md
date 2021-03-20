# Tell Me Whyyy

Tell me whyyyy is an app that evaluates a text article based on Natural Language Processing (NLP).

## Getting Started

These instructions will provide a copy of the app running on your local machine for development and testing.

### Prerequisites

You will need to create a [MeaningCloud](https://www.meaningcloud.com/) account to get your Api Key. It is also necessary to have the node installed.

### Installing

Step 1: Create your account on [MeaningCloud](https://www.meaningcloud.com/)

Step 2: Install the dependencies.

    npm install

Step 3: Create a file called .env at the root of the app and create a variable called API_KEY with the value of your key.

    API_KEY=<<YOUR_KEY>>

Step 4: Create your local bundle

    npm run build-prod

Step 5: Runs the server

    npm run start


## Running the tests

I used jest to do the tests. To run the tests just use the command `npm test`

## Built With

  - [webpack](https://webpack.js.org/)
  - [Sass](https://sass-lang.com/)
  - [Express](https://expressjs)
  - [Jest](https://jestjs.io/)