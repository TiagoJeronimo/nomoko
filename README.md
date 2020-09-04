This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available scripts and how to run

In the project directory, after installing the project using `npm i` you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


# Comments and decisions

## Styling:
For the sake of simplicity, I used the [material-ui](https://material-ui.com/) package to create the filters inputs (Multiple Select, Slider, and Checkbox)

## Testing:
I think tests are important, and although I didn't create tests for all the components, you can check some examples in the folder `components`, there I implemented tests for each component using `jest` and `@testing-library`. I also added a Snapshot test in the App folder just as an example.

## Reading and formating the CSV file:
I used the javascript `fetch` function to read the file and the package `papaparse` to format the file into a code-readable object. I found some alternatives for the last one, but `papaparse` seemed to be the simplest.

## Internationalisation:
I used `i18n` for internationalisation and I added a dropdown button in the upper right side of the page where you can switch between English and German.
Note: As I don't really know German I used Google Translate to translate the text, hopefully the translation is correct.

## Google Maps:
Since Google Maps requires a key to correctly display a map, I got a Google Cloud Platform key for it. The key only has 300$ of usage (which is the trial limit) which hopefully is enough.
Note: Although the key is accessible in GitHub, I'm aware that we shouldn't have easy accessibly keys especially in a public repo. But in this case, it shouldn't be a problem.

## Responsiveness:
Although not required I added some media queries to help the app to be a bit more responsive.
