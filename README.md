# Web Developement Blog (Project-2)

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Other Technologies used](#other-technologies)
* [Setup](#setup)
* [Sign Up](#sign-up)
* [Writing a Blog](#writing-a-blog)
* [Commenting](#commenting)
* [Contributors](#conntributors)


## General info
This is a CMS (Content Management System) styled website created for web-developers, to share ideas and post artcles (blogs) relating to web-development, that other developers can interact with using comments. For a user to be able to communicate in the platform, ie post an article or comment on any live discusion, the user would be asked to provide their email and create a password, both which will be used to create a data profile stored in a database and will be used to authenticate the user (during the sign in process), whenever they want to create a new post, edit or comment to an existing post.

## Technologies
This website is created with the Model View Controller (MVC) framework using the technologies below:
* HTML 5
* CSS
* Java Script
* Node JS 
* MySQL
* Sequelize (as a dependecy)
* Express JS (as a dependecy)
* Adobe Illustrator (for creating the logo)

## 	Set Up
The following are two screenshots of the home page

![homepage](https://user-images.githubusercontent.com/39675578/177655944-7e5ddfec-0b24-410b-bc94-b1d25de837b8.png)

![homepage2](https://user-images.githubusercontent.com/39675578/177658600-3aeea11a-d9d0-42de-83b0-ec98eaaf0e9b.png)

The content is being dynamically populated by Handlebars templates.The left column contains all of the blogs in the database and includes the following info as shown in the below screenshotof the blogs database. id; title;content;imageauthor id;category id;likes;dislikes;comments and a date and time created

![blogs database](https://user-images.githubusercontent.com/39675578/177656809-0b716232-c896-4807-a11e-73a644fcef6c.png)

The righthand cloumn dislays the 3 most popular posts by like count in decending order.

Ussers can read posts without logging in or signing up, they will even be able to like or dislike but in order to submit a blog or comment they must login or signup and login if they are not yet a memebr.

If they click sign up the following screen appears
![sign up](https://user-images.githubusercontent.com/39675578/177657176-dae517fd-f80b-4969-8ef9-47127ec02efa.png)
We use  bcrypt to hash their chosen password. We use javascript logic to validate the signup info ie to see if usernam or email already exist,and make sure inputs are all valid and passwords match and are strong enough. Once sucessfully created a prompt will let user know that the user has been created successfully or they will get an error message.

If they click signin the following screen appears
![sign in](https://user-images.githubusercontent.com/39675578/177657494-171b544e-10b5-415f-9db9-e0631cc08c7f.png)
Once again we use javascript to validate info such as passwords matching,see if their email and username are really in the database.
They will be alerted to a successfull login or error prompts.

When a user clicks on read more under the post excert they will see that post populate in a seperate page as shown below
![blog article](https://user-images.githubusercontent.com/39675578/177657984-377a84ef-225a-482c-b75d-97b7fa61db15.png)
![blog article2](https://user-images.githubusercontent.com/39675578/177657995-f783ac77-e670-40ca-ac59-cf84dd45bc1f.png)
All the post content is rendered dynamically,once again, and users can leave a comment,like or disike.

If they click on submit article theye will be taken to the following screen *This page and a couple of features still have to be poperly implemented as we were running out of time.Here is a screenshot of the wireframe


![submit article](https://user-images.githubusercontent.com/39675578/177658370-5258b2a6-e247-4615-9f0d-f0e7e2f0fc32.png)

