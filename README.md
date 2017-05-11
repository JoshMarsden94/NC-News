# Northcoders News

Northcoders News is a social news aggregation, web content rating, and discussion website. It is similar to [Reddit](https://www.reddit.com/).

This repo contains all the work that has gone into the front end of the project. To find out more about the backend which Northcoders News run off, please visit my backend repo [here!](https://github.com/JoshMarsden94/NC-News-Backend)


## Getting Started

If you would like to run this project locally, please ensure you have Node v7.0.0 or higher installed. You can check this by entering the following command into your terminal:
```s
node -v
```
If you do not have the correct version of node [click here to install.](https://nodejs.org/en/download/)

Now onto running the project, please clone the project, cd into the repo, install the dependencies and then run the project:
```s
git clone https://github.com/JoshMarsden94/NC-News-Frontend.git

cd NC-News-Frontend

npm install

npm run dev
```
Once the webpack has finished compiling the project can then be found on [http://localhost:9090/](http://localhost:9090/)


## Testing 

I have also included tests that were written for my reducers, to ensure they were functioning correctly. To run and view the tests please enter the following command from within the NC-News-Frontend directory.

```s
npm test
```


## Built With
- [React](https://facebook.github.io/react/) - Front End web framework used
- [Redux](http://redux.js.org/docs/introduction/) - State container/management
- [Axios](https://github.com/mzabriskie/axios) - HTTP Client for the browser
- [Bulma](http://bulma.io/) - CSS Framework Based on Flexbox
- [Webpack](https://webpack.github.io/) - Module Bundler
