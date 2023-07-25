# GeoQuiz
The Quiz consists of 10 geography questions, each question 

View the live site <a href="https://joysalchert.github.io/JSalchert-pp2-geography-quiz/" target="_blank">here</a>

<img src="assets/images/readme_multi_device_mockup_screenshot.jpg">

<hr>

## Features
### Start page:
Header with GeoQuiz title and the Start button.
The js code creates all the questions with 4 possible answers (in the form of radio buttons + labels) and hides them.

<img src="assets/images/image_quiz_start_page.png">

### Questions pages:
The js code "unhides" one question card at a time. 
The user gets imediat feedback if his answer is correct or not in the form of red and green border color around the labels of the radio buttons.
Next question button moves the quiz to the next question.

<img src="assets/images/image_question_page_with_indicators.png">

### Score page:
After the full length of the questions array has been reached the quiz displays the users score out of a possible 10 correct answers. The Restart button brings the user back to the Start page with reinitialises the quiz.

<img src="assets/images/image_score_page_restart_button.png">

<hr>

## Technologies
- HTML:<br>
Was used to give the website its structure and semantic meaning.
- CSS:<br>
The website was styled with CSS on the style.css external file.
- GitHub:<br>
The Source code is hosted on GitHub and deployed via GitPages.
- Git:<br>
Used to commit and push code during the development of the website.

<hr>

## Testing
- Responsivnes:<br>
The Website was tested on 3 devices (MacBookAir, iPadAir, iPhone13) and in developer tools.<br>
It passed my expectations.
- Bugs:<br>
I used the developer tools to debug the js code.

Testing focused on:
- Color contrasts meet minimum ratio set in WCAG 2.1 Contrast Guidlines.
- HTML page lang atribute is set.
- Adherence to the WCAG 2.1 Coding best practices.

<hr>

## Deployment

- The site was created using the GidPod code editor and pushed to github to the repository (JSalchert-pp2-geography-quiz).
- I used the folowing comands to push the code from the GitPod Workspace to the repository:
> git add .<br>
> git commit -m "Message"<br>
> git push

- Deployment to Github Pages:<br>
I deployed the finished website to Gidhub Pages and got the folowing live link:<br>
https://joysalchert.github.io/JSalchert-pp2-geography-quiz/

## Credits
- I took the artikle "Quiz App Using HTML, CSS And JavaScript (Source Code) – Coding Torque"
Written by: Piyush Patil (Code Credits: @virtualwiz) as a guide!
- I took my mentors (Gareth McGirr) README.md file as the outline for my README.md file.
- I used generel google queries when I got stuck (mostly W3Schools material).

## Content and Media
I wrote all the HTML/CSS code.
