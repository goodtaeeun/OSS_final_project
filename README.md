21400217 Tae Eun Kim / 20-1 Opensource SW Lab Final project

# What is Grade Tracker? 💯

Grade Tracker is a SW that helps you keep track of your scores and grades.   
If you take mutiple courses, it is hard to keep track of your scores.   
As the semster reaches its end, wen must figure out where to invest more effort.   
This SW will help you in that time.   
<br/><br/>




## How to start

You can clone from this directory and use source codes.    

However, you must use your own Firebase database to make it solely yours.   

Make a Firebase database and replace this code with yours.   

```jsx
var firebaseConfig = {
        apiKey: "AIzaSyCDCXU4a9qZwEzRevPx5pT0yW8Uu_zbt4I",
        authDomain: "gradetracker-9f956.firebaseapp.com",
        databaseURL: "https://gradetracker-9f956.firebaseio.com",
        projectId: "gradetracker-9f956",
        storageBucket: "gradetracker-9f956.appspot.com",
        messagingSenderId: "368658407712",
        appId: "1:368658407712:web:f7024d6989897988d6f745",
        measurementId: "G-VWNF2C8LLJ"
      };
//This section of code will be provided from Firebase
```

<br/><br/>

If you have a raspberrypi, then you can host this service. Install Apache server, put all these contents under /var/www/html/, then you are on!
<br/><br/>





## How it works

It is basically a html page connected to a Firebase database.   

We can read, write, delete the data in the database through html.   

It may be used as a local html document or it can be hosted via a server.   

To be able to use the Firebase in the html, we must insert some code sections in the html document via javascript.   

```jsx
<script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-firestore.js"></script>
//code section to be able to use Firebase DB

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
//code section to initialize firebase in the html
```

To use the actual data from the FireBase DB, we can use the code below.   

```jsx
db.collection('collection_name').orderBy('field_name').get().then((snapshot) => {
      //what you want to do
 });

db.collection('collection_name').doc('document_name').set()({
      //what you want to do
 });

//examples of code to read and write on Firebase DB
```




<br/><br/><br/>


## How to Use
   
The interface is very simple.   
There are maximum 8 pages you can use for each course you are taking.   
There isn't much you can do, which makes it simple.   
However, these few functionalities will be enough.   
   
   
   
   
   <br/><br/>
### First, you can change the course name.
Click "course" button and enter a name you want.   
You can check other courses on the left side menu. They also act as a link to each page.   

![course_button](https://user-images.githubusercontent.com/57384091/84513214-190d5500-ad04-11ea-8094-dca3dd8e1eac.JPG)
![side_menu](https://user-images.githubusercontent.com/57384091/84513257-2b878e80-ad04-11ea-9714-4d4296f22d54.JPG)
   
    
 
 
 <br/><br/>
### Second, you can add a score element.
You need to provide what score it is (quiz1, midterm, etc.), its full score, your score, the percentage of it (the ratio).   

![score_add](https://user-images.githubusercontent.com/57384091/84513270-2e827f00-ad04-11ea-9798-08733aa03d4d.JPG)
![add_menu](https://user-images.githubusercontent.com/57384091/84513535-891bdb00-ad04-11ea-94df-f832c7ae74e6.JPG)

   




<br/><br/>
### Third, you can edit and delete a score element.
This part is very intuitive.... You can find it easy.   

![edit_delete](https://user-images.githubusercontent.com/57384091/84513285-317d6f80-ad04-11ea-93b5-2bd250fa2ced.JPG)

   




<br/><br/>
### Forth, you can view the scores.
For each score element, you can check the score out of 100 that is calculated with the percentage.   
Also, you can view the overall score upto this point and check the expected maximum score out of 100.   

![current_score](https://user-images.githubusercontent.com/57384091/84513305-36422380-ad04-11ea-8eb6-b5cfbf2a0352.JPG)

   





<br/><br/>
### Demo video
In case this explanation is not sufficient, you can refer to this Demo video.  
https://youtu.be/q-0QQ15FC2s




 <br/><br/>
## Contributions
There is a refernce to this project. It is DEMS, Dormitory union Equipment Managemnet System.
I used the base structure of that system.  
However, I built my own DB and had to make new fuctions to use different format of data.
I also added a feature to use the DB data in the html page without using grid chart.
This was done by using javascript variable in html body part.
Also, the mechanism to calculate the final scores and total scores is my implementation.  
I have used the general design and the mecahnism of using DB, but the unique functionalities of Grade Tracker is all made by me.


The link to DEMS is this: https://github.com/DormUnion/DEMS-admin.github.io


<br/>
In this project, Giijgo is used. Gijgo is a set of free for commercial use javascript controls distributed under MIT License. I specifically used the grid widget to implement the table feature in the html. The link to the site is here. https://gijgo.com/



<br/><br/>
## Informations can be found at
If you want to do this kind of project,
you can try to google with these keywords.   
- use Firebase Firestore in javascript   
- use javascript variables in html   
- read data from firestore to javascript   
   
These are the google searches I did myself to make this project.   






<br/><br/>
## Bye
This is the end.   
I hope you enjoy it.   
If there is any problem, feel free to leave a issue.   
   
Or you can send an e-mail to me by this adresss. 21400217@handong.edu

