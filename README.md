
# LinkedIn clone
> Fully responsive LinkedIn clone.
> Live demo [_here_](https://pieroguerrero.github.io/linkedin/).

## Table of Contents
* [General Info](#general-information)
* [Technologies and Techniques used](#technologies-and techniques-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- The objective of the project is (1) to be a placeholder for general React components I am using in other projects and (2) to be a playground for some technology, tools and thechniques I am planning to use.
- This project was planned using the Story Mapping technique.


## Technologies and Techniques used
### Planning and Design:
- Since there is only one resource in the project, it was developmet partially with [Scrum](https://www.scrum.org/resources/what-is-scrum). The duration was 3 months splited in 2-week sprints.
- The planning was done with the [User Story Mapping](https://www.visual-paradigm.com/guide/agile-software-development/what-is-user-story-mapping/) technique, you can fin the different Story Maps created in the corresponding [Features](#features) section below.
- The Wireframes implemented and to be on this project were build in Figma and can be found [here](https://www.figma.com/proto/MF42A0I66iqogQB7eyHW5F/LinkedIn-clone?node-id=2689%3A6000&scaling=min-zoom&page-id=2689%3A5984&starting-point-node-id=2689%3A6000). The Final UI was implemented using the official LinkedIn documentation about [Colors](https://brand.linkedin.com/content/brand/global/en_us/index/visual-identity/color-palettes) and [Typography](https://brand.linkedin.com/content/brand/global/en_us/index/visual-identity/typography).
- The Entity Relationship Diagram (ERD) can be found [here](https://drive.google.com/file/d/1NhAYBe7IRGe9uUDRX6zaC4HNHDh6x8wA/view?usp=sharing).
- The internal project architecture was implemented following the concepts of the [CLEAN Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).
- Overal code documentation was done leveraging [JSDocs](https://jsdoc.app/).
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
List the ready features here:
- Awesome feature 1
- Awesome feature 2
- Awesome feature 3


## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.


## Usage
How does one go about using it?
Provide various use cases and code examples here.

`write-your-code-here`


## Project Status
Project is: _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why.


## Room for Improvement
Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2

To do:
- Feature to be added 1
- Feature to be added 2


## Acknowledgements
Give credit here.
- This project was inspired by...
- This project was based on [this tutorial](https://www.example.com).
- Many thanks to...


## Contact
Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
