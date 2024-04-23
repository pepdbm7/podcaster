# Podcaster

This is a Single Page Application that retrieves and shows the 100 most popular podcasts of itunes and a podcast page with more details of each and an audio player.

The podcasts list can be filtered by title and author. The content is fetched the first time we access, but next times it won't as the data will be already stored for 24hours.

It has a 100% testing coverage, with all components logic encapsulated in hooks to keep clean code and for better maintenance.

## Screenshots

![home page](https://raw.githubusercontent.com/pepdbm7/podcaster/master/screenshots/home_screenshot.PNG)

![podcast page](https://raw.githubusercontent.com/pepdbm7/podcaster/master/screenshots/podcast_page_screenshot.PNG)

![episode page](https://raw.githubusercontent.com/pepdbm7/podcaster/master/screenshots/episode_page_screenshot.PNG)

![coverage](https://raw.githubusercontent.com/pepdbm7/podcaster/master/screenshots/coverage_screenshot.PNG)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run coverage`

Launches the test runner with the coverage board.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
