# Api-Rest-Nodejs-Mongodb -Framework simple SERVER API

Repository Dependencies: bcryptjs, body-parse, express, jsonwebtoken, mongoose, fs, path, nodemailer, nodemailer-express-handlebars, 
See package.json file

#See package.json file

Use Mailtrap for tests server smtp and email.Config in config/mail.json credentials

#Start project Nodejs and Nodemon  

Start
node src/index

or Nodemon module
nodemon src/index

#Routes 

/auth/                    Middleware authentication
/auth/register            POST->register user email,password.
/auth/authuser            POST->login user email and password.
/auth/forgot_password     POST->
/auth/reset_password      POST->


#API AUTH IN HEADERS

Authorization   :    bearer $token



#API Functions

-Email and password registration.
-Email and password authentication.
-Reset password by emailing link token
-Make password change