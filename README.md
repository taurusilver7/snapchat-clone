# Snapchat Clone

> A camer feature chap applicatin created using react js & material-ui.

<p align="center">
    <img width="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRws7yUwENFSPF9-csO1_Vt6VSo6zpRImDI7A&usqp=CAU" alt="snapchat" />
</p>

[click here](https://snapchat-clone-1388b.web.app/) to go to Snapchat clone.

## Stock

- [Iphone mobile silhouette](https://pngkey.com/png/full/859-8598072_picture-freeuse-library-silhouette-mobile-at-getdrawings-cell.png)
- [snapchat icon](https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg)
- [snapchat logo](https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg)

## Initializing react app & Setup firebase.

- The react application is created with react-redux started template using the command<br /> `npx create-react-app <app-name> --template redux`

* clean the template, public directory, src, app & features directory. refactor the counterSlive as appSlice with user & selectedImg states. create cameraReducer with chat features as actions..
* refactor the store in app directory to create appReducer & cameraReducer.

* Initialize the cloud firestore, initiate the store, create storage modify their rules to allow read & write w/o timestamp. Even though it is not production recommended, it is quite suitable for developement.
* Setup the web-app configuration for the project & copy the firebase SDK snippet config data-object to firebase.js file in the project.
* Install firebase as a dependency,<br /> initiate the firebaseApp with firebase(),<br /> a databse with firestore(),<br /> auth with firebase.auth() and a provider.
* The provider initiated gives the project, a google authentication provider. Export all of them as named exports.

## Components

- CameraModule

* customize the webcam module with properties & stylings.
* configure RadioButton to capture the sceenshot & log it to console as a base64 image format..
* The camera capture function is stored as a call-back with useCallback() hook for fast recalling.

* For the captured picture to get access across the project, the data layer using redux instead of react context-api is created. >>>> store.

* cameraSlice.js is created in features dir with setCameraImg & resetCameraIng actions
* connect the reducer to the store in app dir to get the actions dispatched in any component.
* dispatch the setCameraImg action to take the img as payload to the datastore.

_The redux dev tools helps in understanding the redux operation better_

- the payloads are redirected using dependencies to other components..

* Preview

- The component displays the captured image preview before sending it to the chat.
- redirect to the '/preview' page using usehistory() hook.
- Get the payload (img) from store using useSelector() hook in preview comp.

- Use a clause which redirects to homepage if a preview is absent with useEffect(), useHistory() hooks.
- If preview is opened using https link w/o a preview, it is immediatiately redirected to homepage '/'.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
