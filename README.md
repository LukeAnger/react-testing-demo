# react-testing-demo

Welcome to the React Testing Demo repository! This repository contains a small React, Express, MongoDB application that demonstrates how to write unit tests for a React application using Jest and React Testing Library.

You can also use this repo as a starting point for creating your own MERN stack app.

### Getting Started

## USE THE FOLLOWING INSTRUCTIONS TO ADD REACT/JEST TESTS TO YOUR OWN PROJECT
To install testing libraries in your own project you will do the following:

* Run `npm install --save-dev testing-library/jest-dom @testing-library/react jest jest-environment-jsdom`

* Add a `jest.config.js` file in your repo directory with the following code:
```
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
};
```

## TO CONTINUE WITH THIS REACT-TESTING-DEMO REPO DO THE FOLLOWING
To get started with this demo, simply clone the repository and run `npm install` to install the dependencies:

```
git clone https://github.com/<username>/react-testing-demo.git
cd react-testing-demo
npm install
```

Once the dependencies are installed, you can run the application using the following commands:

```
npm run dev
npm run start
mongod
```

This will start a local development server, express server and mongodb that you can use to view the application in your web browser.

### Running Tests

to run the tests for this application, simply run `npm test`:

This will run all of the unit tests for the application using Jest and React Testing Library. You can find the test files in the `src/tests` directory.

Thanks for checking out this React Testing Demo repository! If you have any questions or feedback, feel free to reach out.


# What to Test

When testing a React application, it's important to focus on testing the functionality and behavior of your components. This includes testing user interactions, state changes, and rendering output.

Here are some examples of what you might want to test in your React application:

* User interactions (e.g. clicking a button, entering text into a form)
* State changes (e.g. updating a component's state, invoking utils functions)
* Component rendering (e.g. checking that the correct HTML elements are being rendered)

# How to Test

There are a few different approaches to testing a React application, but in this demo, we'll be using Jest and React Testing Library.

React Testing Library provides a set of methods for interacting with React components in your tests. These methods allow you to simulate user interactions, check the state of your components, and test the rendering output.

Here are some examples of how you might use React Testing Library methods in your tests:

#### Utilities Functions

* `render`: Renders a React component and returns an object that you can use to interact with the component in your tests.
* `fireEvent`: Simulates a user interaction (e.g. clicking a button, entering text into a form).
* `screen`: Provides a set of methods for querying the rendered output of your component (e.g. screen.getByText to find an element with specific text).
* `waitFor`: Allows you to wait for asynchronous events (e.g. a component to update its state or fetch data from an API).


#### Queries

##### [cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet/)

* `getBy`: Finds a single element in the component's DOM by a specific query (e.g. `getByTestId` finds an element by its data-testid attribute).
* `findBy`: Similar to `getBy`, but waits for the element to appear on the page (e.g. `findByText` waits for an element with specific text to appear).
* `queryBy`: Finds a single element in the component's DOM by a specific query, but returns null if the element is not found (useful for checking if an element does not exist).
* `getAllBy`: Finds all elements in the component's DOM that match a specific query (e.g. `getAllByRole` finds all elements with a specific ARIA role).
* `findAllBy`: Similar to `getAllBy`, but waits for the elements to appear on the page.
* `queryAllBy`: Finds all elements in the component's DOM that match a specific query, but returns an empty array if no elements are found.
* `getByRole`: Finds an element by its ARIA role (e.g. `getByRole('button')` finds the first button element). This is useful for testing accessibility.

These methods are all part of React Testing Library's API for interacting with a component's DOM. By using these methods, you can find and interact with elements in your component and test its behavior and functionality.

### Example Tests
Here are some example tests for a simple `Counter` component:

```
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Counter from './Counter';

test('renders the Counter component', () => {
  render(<Counter />);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toBeInTheDocument();
});

test('increments the counter when the "Increment" button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment');
  const counterElement = screen.getByTestId('counter');

  fireEvent.click(incrementButton);
  expect(counterElement).toHaveTextContent('1');

  fireEvent.click(incrementButton);
  expect(counterElement).toHaveTextContent('2');
});

test('fetches data and renders it to the page', async () => {
  const fakeData = { count: 3 };
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce(fakeData),
  });

  render(<Counter />);

  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent('Loading...');

  await waitFor(() => expect(global.fetch).toHaveBeenCalled());

  expect(counterElement).toHaveTextContent('3');
});

```

In the first test, we use the `screen.getByTestId` method to find an element with the `data-testid` attribute set to `'counter'`. This allows us to check that the component is being rendered correctly.

In the second test, we use the `fireEvent.click` method to simulate a user clicking the "Increment" button. We then use the `expect` method to check that the counter has been updated correctly.

In the third test, we use `jest.spyOn` to mock the `fetch` function and return some fake data. We then use the `waitFor` method to wait for the data to be fetched before checking that it has been rendered to the page.

These are just a few examples of the types of tests you might write for a React application. With React Testing Library, there are many more methods and approaches you can use to test your components and ensure that your application is working as expected.

## Conclusion
Thanks for taking the time to check out this React Testing Demo repository! We hope that this demo has given you a good understanding of how to write tests for your React applications and how to use Jest and React Testing Library to test your components.

If you have any questions or feedback, feel free to reach out to us. Happy testing!

### Additional Resources

If you're new to testing in React, you might find these resources helpful:

* [Jest Testing](https://jestjs.io/docs/getting-started)
* [React Testing Library documentation](https://testing-library.com/docs/react-testing-library/intro/)
* [Testing Library Cheat Sheet](https://testing-library.com/docs/react-testing-library/cheatsheet/)
* [In depth Youtube Tutorial - The Net Ninja](https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ)