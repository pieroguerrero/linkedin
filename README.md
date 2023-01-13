
# LinkedIn clone
> Fully responsive LinkedIn clone MVP.
> Live demo [_here_](https://lkdn2.pages.dev/linkedin/).

## Table of Contents
* [General Info](#general-information)
* [Technologies and Techniques used](#technologies-and-techniques-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)


## General Information
- The objectives of the project are (1) to be a placeholder for general React components I am using in other projects and (2) to be a playground for some technology, tools and thechniques I am planning to use.
- This project was planned using the Story Mapping technique.


## Technologies and Techniques used
### Planning and Design:
- Since there is only one resource in the project, it was developmet partially with [Scrum](https://www.scrum.org/resources/what-is-scrum). The duration was 3 months splited in 2-week sprints.
- The planning was done with the [User Story Mapping](https://www.visual-paradigm.com/guide/agile-software-development/what-is-user-story-mapping/) technique, you can fin the different Story Maps created in the corresponding [Features](#features) section below.
- The Wireframes implemented and to be on this project were build in Figma and can be found [here](https://www.figma.com/proto/MF42A0I66iqogQB7eyHW5F/LinkedIn-clone?node-id=2689%3A6000&scaling=min-zoom&page-id=2689%3A5984&starting-point-node-id=2689%3A6000). The Final UI was implemented using the official LinkedIn documentation about [Colors](https://brand.linkedin.com/content/brand/global/en_us/index/visual-identity/color-palettes) and [Typography](https://brand.linkedin.com/content/brand/global/en_us/index/visual-identity/typography).
- The Entity Relationship Diagram (ERD) can be found [here](https://drive.google.com/file/d/1NhAYBe7IRGe9uUDRX6zaC4HNHDh6x8wA/view?usp=sharing).
- The internal project architecture was implemented following the concepts of the [CLEAN Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).
- Overal code documentation was done leveraging [JSDocs](https://jsdoc.app/).
- GitHub Actions was used to deploy the web.

### Front-end:
- ReactJS with a [customized CRA template](https://github.com/pieroguerrero/cra-template).
- Routing with [react-router v6](https://reactrouter.com/en/main).
- Internal application state managed with [Redux](https://react-redux.js.org/).
- CSS design with [Tailwind CSS](https://tailwindcss.com/). 
- Code Splitting was implemented to reduce loading wating times. This was achieved using [Dynamic Import API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) and [React Lazy loading components](https://reactjs.org/docs/code-splitting.html#reactlazy).
- The web app is 100% responsive.

### Back-end:
- Back-end was implemented in [Firebase](https://firebase.google.com/). Dynamic imports were used in this case due to the heavy weigth of the Google's Firebase libraries.
- Database implemented in Firestore.
- File sorage is on Firestorage.
- The authentication is possible with Google Accounts and also Anonymously, so the users can interact easily with the project. Firebase Auth was used for this pupose.

### Testing:
- Unit testing was done.
- Test coverage is 45% and is increasing using Jest and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) is being used.
- While testing, the project was run using the Chrome's Development Tools "Fast 3G" and "No Caching" options. So the app is ready for slow internet connections.
- Lighhouse was executed several times, the last result objtained was 92% overal:

<img src="https://user-images.githubusercontent.com/26049605/188294816-c62b845f-bd5d-4ff5-8512-1e54f1bbac13.png" width="350px" height="auto" alt="Click to enlarge" title="Click to enlarge">

## Features
By clicking on the Feature name you will be redirected to the corresponsing User Story Map development in order to plan the Work to be done on each Feature.
- [Sign-up with Google](https://www.figma.com/proto/MF42A0I66iqogQB7eyHW5F/LinkedIn-clone?node-id=2722%3A3621&scaling=min-zoom&page-id=2722%3A3620) ✔
- [Sign-in with Google and Anonymously](https://www.figma.com/proto/MF42A0I66iqogQB7eyHW5F/LinkedIn-clone?node-id=2722%3A3621&scaling=min-zoom&page-id=2722%3A3620) ✔
- [News Feed navigation](https://www.figma.com/proto/MF42A0I66iqogQB7eyHW5F/LinkedIn-clone?node-id=2800%3A3938&scaling=min-zoom&page-id=2800%3A3937) ✔
- [Add a Post](https://www.figma.com/proto/MF42A0I66iqogQB7eyHW5F/LinkedIn-clone?node-id=2796%3A4366&scaling=min-zoom&page-id=2796%3A4365) ✔
- Sign-up with User and Password 🔜
- React/Comment to a post 🔜
- [Create Profile](https://www.figma.com/proto/MF42A0I66iqogQB7eyHW5F/LinkedIn-clone?node-id=2789%3A3738&scaling=min-zoom&page-id=2789%3A3737) 🔜
- [Edit Profile](https://www.figma.com/proto/MF42A0I66iqogQB7eyHW5F/LinkedIn-clone?node-id=2794%3A3963&scaling=min-zoom&page-id=2794%3A3962) 🔜
- [Follow and Add new Connections](https://www.figma.com/proto/MF42A0I66iqogQB7eyHW5F/LinkedIn-clone?node-id=2802%3A4856&scaling=min-zoom&page-id=2802%3A4855) 🔜
- [View My Profile summary/statistics information](https://www.figma.com/proto/MF42A0I66iqogQB7eyHW5F/LinkedIn-clone?node-id=2800%3A4247&scaling=min-zoom&page-id=2800%3A4246) 🔜


## Screenshots

| Landing Page | Landing Page responsive | News Feed |
| ------------ | -------------- | ------------- |
| <img src="https://user-images.githubusercontent.com/26049605/188337360-4a5d9227-cf9a-4019-8344-49a084b8c6b9.png" width="350px" height="auto" alt="Landing Page" title="Click to enlarge">   | <img src="https://user-images.githubusercontent.com/26049605/188337420-29bcf086-7e66-4166-8dbd-06e2a4997c2a.png" width="200px" height="auto" alt="News Feed" title="Click to enlarge">     | <img src="https://user-images.githubusercontent.com/26049605/188337385-e20d5457-3974-4019-b3e5-71681ef1f566.png" width="350px" height="auto" alt="News Feed" title="Click to enlarge">    |

## Setup
Clone this project by doing:
```
$ git clone https://github.com/pieroguerrero/linkedin.git
```
Then go to the folder you cloned the code and execute:
```
$ npm install
```
**WARNING:** If you are going to use other libraries to achieve other purposes be carefull and remove the caret (^) prefix that the dependency versions have.

## Project Status
Project is: _in progress_
I am constantly adding some code in order to test new techologies or concepts.


## Room for Improvement
There are always room for improvement, in this project so far the thinkgs that can be improved are:
- More Unit testing coverage.
- Some parts are still pending to analyze how to apply code-splitting: New Posts listing for example.
