# windr

### Node and Express MVC personality matching survey web app


*Node, Express, JavaScript, jQuery, Heroku deployment, Bootstrap, Font Awesome. Single-page responsive UI MVC personality matching survey web app with modal results.*
_________________________________________________

[[windr on Heroku](https://windr-quiz.herokuapp.com/)](https://windr-quiz.herokuapp.com/)

_________________________________________________

#### Windr is a MVC personality matching survey web app. 

Windr is a simple MVC structured single page web app with a responsive UI. Users select the "Quiz Me" button to show (toggle visibility) the body of the quiz form. New user's name, link to a photo, and quiz answers are temporarily stored in a JavaScript object (instead of a database). When the user submits their data, the form is validated to check for the name and link to photo entered, while all question radio buttons are set to "sometimes" (median value answer) by default. 

Server script compares the user's answers against the answers of all other users currently in the JS data object, and returns the name and photo of the best match result to the user as a modal.

Additional footer links display JSON of all users in the JS data object, as well as link to the project's GitHub repo.
 
_________________________________________________

[source: https://github.com/LandrumTrev/windr](https://github.com/LandrumTrev/windr)

###### ©2018 Richard Trevillian
###### University of Richmond, Full Stack Web Development Bootcamp
###### 2018-11-03