# Create Android & iOS Sewa App with React Native & Expo

## Setup App

v103

Instal Expo Desktop

Install Expo App on Device

Create new project from Expo

Open Editor

Share the App from Expo to device

Install Redux 

	npm install --save react-redux redux

Create new folder named src & file name src/Appx.js

	import React, {Component} from 'react';
	import {View, Text} from 'react-native';
	import {Provider} from 'react-redux';
	import {createStore} from 'redux';

	class Appx extends Component {
		render() {
			return (
			<Provider store={createStore()}>
				<View>
					<Text>Hello!</Text>
				</View>
			</Provider>
			);
		}
	}

	export default App; 	

If we refresh screen will thrown an error "Expected the reducer to be a function"

So we need to create default reducers.

Creat new folder under src named reducers and file index.js under reducers folder.

	import {combineReducers} from 'redux';

	export default combineReducers({
	  banana: () => []
	});

on Appx.js:	

	import reducers from './reducers';

then Update Provider store

	<Provider store={createStore(reducers)}>

Refresh screen :)

## Authentication

Install Firebase on folder project

	npm install --save firebase

If Error:

	npm ERR!     at Error (native) parent: 'firebase' }
	npm ERR!
	npm ERR! Please try running this command again as root/Administrator.

	npm ERR! Please include the following file with any support request:
	npm ERR!     E:\workspace\reactnative\studentApp\npm-debug.log
	npm ERR! code 1

Solution! Do it as Administrator priviledge (windows) or sudo (linux).

Go to firebase console:

* Create new project
* Click Auth (left handside)
* Click Setup sign in method
* Click Email & Password > Enable it > Save
* Click Web setup > copy > create componentWillMount method and paste it there.
* Change var with const

On Appx.js

      class Appx extends Component {
        componentWillMount() {
          const config = {
          apiKey: 'AIzaSyA6nVqJ2ulyUKChcFA1hPTDx9bN4_MX8IQ',
          authDomain: 'sewaze-b07f6.firebaseapp.com',
          databaseURL: 'https://sewaxx-xxxxxx.firebaseio.com',
          projectId: 'sewxx-xxxxx',
          storageBucket: 'sewaxx-xxxxx.appspot.com',
          messagingSenderId: 'xxxxxxxxx'
        };
        firebase.initializeApp(config);
      }

* import 

		import firebase from 'firebase';	

* Refresh screen make sure no error.

## Create Login Form

![login-form](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_481,w_488/v1496654762/loginform-responsibiltiy_s8rul7.png)

![](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_489,w_339/v1496655041/loginform-redux_pwst3s.png)

### Create components directory inside src directory 

Copas common directory from previous project.

Inside components folder Create new file LoginForm.js

	import React, {Component} from 'react';
	import {Card} from './common';

	class LoginForm extends Component {
		render() {
			return (
				<Card>

				</Card>
			)
		}
	}

	export default LoginForm;

On App.js file import LoginForm

	import LoginForm from './components/LoginForm'

Update App component to insert LoginForm:

	<Provider store={createStore(reducers)}>
		<LoginForm />
	</Provider>	

On LoginForm.js import:

	import {..., CardSection, Input, Button}

### Update LoginForm:

	class LoginForm extends Component {
		render() {
			return (
				<Card>
					<CardSection>
						<Input
							label="Email"
							placeholder="email@mail.com" 
						/>
					</CardSection>

					<CardSection>
						<Input
							secureTextEntry 
							label="Password"
							placeholder="password"
						/>
					</CardSection>

					<CardSection>
						<Button>
							Login 
						</Button>
					</CardSection>
				</Card>
			);
		}
	}		

![login-form](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_218,w_300/v1496668206/loginform_in0a44.png)

## Handling form update with Action Creator

![redux-handling-form](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_440,w_430/v1496669405/redux-handling-login-form_r9xkfe.png)

Update the code:

	onChangeText={this.onEmailChange.bind(this)}

Create method helper for that event handler:

	onEmailChange(text) {

	}

### Inside of there we going to call Action Creator, 

so create new folder & file src/actions/index.js :

Create action creator :

	export const emailChanged = (text) => {
		inside...
	}

Inside there return an **object** of **action**

	export const emailChanged = (text) => {
		return {
			type: 'email_changed',
			payload: text
		}
	}	

Back to **LoginForm.js** :

	import { connect } from 'react-redux';

import action creator:

	import { emailChanged } from '../actions';

at the bottom hooked up action creator with connect helper:

	export default connect()(LoginForm)

Add argument, for first argument we dont have mapStateToProps function yet

	export default connect(null, .. )(LoginForm)

and 2nd argument is action creator that we want bind to the component.

	export default connect(null, {emailChanged} )(LoginForm);

Because we wire up action creator we now have action to props inside of component/helper method emailChanged:

		this.props.emailChanged(text);

		onEmailChange(text) {
			this.props.emailChanged(text);
		}

Next we need to reducers to receive and catch emailChange action:

**Create new file under reducers named AuthReducer.js**

Update reducers/index.js to wire up that new reducers:

	import AuthReducer from './AuthReducer';

And update:

	export default combineReducers({
		auth: AuthReducer
	});

**auth is the key** of AuthReducer and become **props state** wich is produced. 

Update AuthReducer.js type, boiler plate for every reducers which is always have **switch**.

	export default (state, action) => {
		switch(action.type) {
			default:
				return state;
		}
	};

**To remember** never return reducer undefined, it will thrown an error, because first time app start is run and return default state. So create variable INITIAL_STATE:

	const INITIAL_STATE = { email: '' }

become:

	export default (state = INITIAL_STATE, action) => {
		switch(action.type) {
			default:
				return state;
		}
	};	

Now we have key of state for entire application **state.auth.email** as **empty string** when app is boots up!

Two more steps that **email input works with redux** instead **local component state** is :
Firs to make sure reducer whatch the action with property type which default is empty object string. ***Whatch the action of emailChanged and update state object apropriately***.

## Create variable for action type

This is to avoid any small typo.

Create new file types.js inside actions folder:

	export const EMAIL_CHANGED = 'email_changed';

On actions/index.js import it:

	import { EMAIL_CHANGED } from './types';

And change the type: ... with variable types:	

	export const emailChanged = (text) => {
		return {
			type: EMAIL_CHANGED,
			payload: text
		};
	};	

In AuthReducer.js import it:

	import { EMAIL_CHANGED } from '../actions/types';

And give it case for switch statement:

	export default (state = INITIAL_STATE, action) => {
		switch(action.type) {
			case EMAIL_CHANGED:
				logic here..
			default:
				return state;
		}
	};

> The goal of this is to let reducer to store value of text input. 

## Immutable state

We need AuthReducer.js can update what ever user typing.

	export default (state = INITIAL_STATE, action) => {
		switch(action.type) {
			case EMAIL_CHANGED:
				return { ...state, email: action.payload };
			default:
				return state;
		}
	};

In LoginForm.js now we define mapStateToProps :

	mapStateToProps = state => {
		return {
			email: state.auth.email
		};
	};

And hooked as first argument connect statement in the bottom:

	export default connect(mapStateToProps, {emailChanged})(LoginForm);

Update input email by add value:

	value={this.props.email}

Test it in simulator.

typo is most case error for me :)

## Create Immutable state

**The flow of implementation** :

* User typing the form >
* Instantly we called Action Creator with the new text user just enter >
* Action Creator return the action > 
* The Action send to all reducers (this case AuthReducer) >
* Reducer calculate new app State >
* State sent to all Components >
* Components rerender with new State >
* Inputs value set to "this.props.email".

### Work with password input

Add event handler:

	onChangeText={this.onPasswordChange.bind(this)};

Create method helper onPasswordChange:

	onPasswordChange(text) {
		// when it call, it will call "Action Creator" and pass the text:
		this.props.passwordChanged(text);
	}

**Create Action Creator passwordChanged**	 	

So update file actions/index.js to create Action Creator:

	export const passwordChange = (text) {
		// and return an Action!
		return {
			type: PASSWORD_CHANGED,
			payload: text
		};
	};

On file LoginForm Import Action Creator passwordChanged

	import {..., passwordChanged} from '../actions';

Update file types.js in folder actions, to define types of passwordChanged:

	export const PASSWORD_CHANGED = 'password_changed';

Import it to actions/index.js

	import {
		...,
		PASSWORD_CHANGED
	} from './types';

In file AuthReducer.js import PASSWORD_CHANGED types:

	import { 
		EMAIL_CHANGED,
		PASSWORD_CHANGED
	} from '../actions/types';	

And add new case in switch statement:

	case PASSWORD_CHANGED:
		return { ...state, password: action.payload };

Update INITIAL_STATE object:

	const INITIAL_STATE = {
		email: '',
		password: ''
	};

Go to LoginForm.js update function mapStateToProps:

	mapStateToProps = state => {
		return {
			email: state.auth.email,
			password: state.auth.password
		};
	};

Update connect helper argument to add passwordChanged:

	export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);

Next last! Give a value for password input:

	value={this.props.password}

Test on device screen :)

next

## Synchronous & Asynchronous

In short we going to make Action Creator normally work as **Synchronous** become **Asynchronous** work, because if has **request authentication** it will be return **function** (instead of action) and called with **dispatch** in some of the time. Dispatch will calls in Action with type and payload include there.

Create new action creator in actions/index.js

	export const LoginUser = ({ email, password }) => {

	};

Create logic to handle **firebase login** inside block that Action Creator:

**import firebase here on action/index.js**

	export const LoginUser = ({ email, password }) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
	};

And test to console:

	export const LoginUser = ({ email, password }) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => console.log(user));
	};

This issue is how dispatching action only when requested is finish (.then) ? To solve this we going to use library call **ReduxThunk**.

Use **ReduxThunk** to handle **Asynchronous Action Creator**.

Install ReduxThunk:

	npm install --save redux-thunk

#### Action Creator Rules with Thunk

1. Action Creator are functions.
2. Must return an action.
3. An action is an object with a "type" property.

**With Thunk**

1. Action Createor are functions.
2. Must return a "**function**".
3. This function will be called with "**dispatch**".

### Apply Redux Thunk

In file App.js import redux thunk:

	import ReduxThunk from 'redux-thunk';

ReduxThunk is **middleware** so import helper Middleware from redux in App.js

	import { ..., applyMiddleware }	from 'redux';

Update render method to apply Thunk:

	render() {
		return (
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
				<LoginForm />
			</Provider>
		);
	}	

or make it short as below :

	const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

	<Provider store={store}>

> Note: The second argument is for any INITAL_STATE if we want to pass it, mostly for server side rendering. The third argument is called Store enhancer is to add **additional functionality for the Store**.

Update the Action Creator in actions/index.js to return with **dispatch** function:

	export const LoginUser = ({ email, password }) => {
		return(dispatch) => {
			firebase.auth().signInWithEmailAndPassword(email, password)
				.then(user => console.log(user));
		};
	};

#### The flow is like below:

- User do login! ->
- Action Creator called ->
- Action Creator returns a function ->
- Redux Thunk calls with dispatch ->
- Do login requeste! ->
- .. Wait ->
- .. Wait ->
- Request complete, user logged in ->
- .then runs ->
- Dispatch the action. 

Update with apply the Action

	.then(user => {
		dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user}); 
	};

become:

	export const loginUser = ({ email, password }) => {
		return(dispatch) => {
			firebase.auth().signInWithEmailAndPassword(email, password)
				.then(user => {
					dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user}); 
				};
		};
	};

Put console log in AuthReducer:

	console.log(action);

as bellow:

	export default (state = INITIAL_STATE, action) => {
		console.log(action);
		
		switch(action.type) {
			case EMAIL_CHANGED:
				return { ...state, email: action.payload };
			case PASSWORD_CHANGED:
				return { ...state, password: action.payload };
			default:
				return state;
		}
	};	

## Add User

Go to console in firebase website.

In LoginForm import loginUser Action Creator:

	import {.., .., loginUser} from '../actions';

And add to connect helper:

	export default connect(mapStateToProps, {
		emailChanged, passwordChanged, 	loginUser
	})(LoginForm);

Update the Button:

	<Button onPress={this.onButtonPress.bind(this)}>

And create method helper for that:

	onButtonPress() {
		const {email, password} = this.props;

		this.props.loginUser({ email, password }); 
	}	

Refresh the screen for test :) 

end v.118

### Create LOGIN_USER_SUCCESS


