
<img src="https://raw.githubusercontent.com/neryash/MashovAPI/master/npmLogo.png"/>
*This wrapper is not affiliated or associated with Mashov

# What is Mashov API JS?

This is a nodeJS wrapper for the
<a href="https://web.mashov.info/students/login" target="_blank">Mashov System</a>

## Contents
<span style="color:#77CA85">
<ul>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#examples">Examples</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#installation">Plans</a></li>
  <li><a href="#installation">Progress</a></li>
  <li><a href="#installation">FAQ</a></li>
</ul>
</span>

## Installation:
<div id="installation">
</div>

`npm i MashovAPI`

It's that easy! NPM automatically installs required modules such as request.

You can get npm <a href="https://nodejs.org/en/download/" target="_blank">here</a> if you don't have it installed.

## Examples:
<div id="examples">
</div>


<h4>Get a school by iterating on the schools list</h4>

```
const MashovAPI = require("mashovapi-js");

var semel = "";
(async function(){
	var allSchools = await MashovAPI.getSchools();

	for(var i = 0; i < allSchools.length; i++){
	  if(allSchools[i].name == "/*School Name*/"){
	    semel = allSchools[i].semel;
	  }
	}
})();
```
<h4>Login a user</h4>

```
const MashovAPI = require("mashovapi-js");

(async function(){
	await MashovAPI.loginWithCreds({username:"/*username*/",password:"/*password",year:2021,school:semel})

//Get the semel, which is the school ID by using the function refrenced above
})();
```
<h4>Get all grades and make an average</h4>

```
const MashovAPI = require("mashovapi-js");

(async function(){
	 let grades = await MashovAPI.getGrades();
	 let average = 0;
	 for(var i = 0; i < grades.length; i++){
	   average+=grades[i].grade;
	 }
	 average = average/grades.length;
	 console.log("Your average is: " + average);
})();
```
## API
 Mashov-API JS is an asynchronous library, which means it needs to be run in an async function with await statements.
<h4>Retrieving Grades</h4>
Usage:<br/>

```MashovAPI.getGrades()```

Returns array of JSON objects:
```
  {
    studentGuid: string,
    gradingEventId: int,
    grade: int,
    rangeGrade: string,
    rate: int,
    timestamp: string,
    teacherName: string,
    groupId: int,
    groupName: string,
    subjectName:string,
    eventDate:string,
    id: int,
    gradingPeriod: int,
    gradingEvent: string,
    gradeRate: int,
    gradeTypeId: int,
    gradeType:string
  }
```

<h4>Getting User Photo</h4>
Usage:<br/>

```MashovAPI.getPhoto()```

Returns a url of type string with photo of user.

<h4>Retrieving List of Schools</h4>
Usage:<br/>

```MashovAPI.getSchools()```
*Can be used without user auth*

Returns array of JSON objects:
```
  {
    semel: int,
    name: string,
    years: int array
  }
```
<h4>Retrieving Behavior Events</h4>
Usage:<br/>

*For behavior in class:*
```MashovAPI.getBehave()```
*For behavior out of class:*
```MashovAPI.getOutBehave()```

Returns array of JSON objects:
```
  {
    studentGuid: string,
    eventCode: int,
    justified: int (1 or -1),
    lessonId: int,
    reporterGuid: string,
    timestamp: string,
    groupId: int,
    lessonType: int,
    lesson: int,
    lessonDate: string,
    lessonReporter: string,
    achvaCode: int,
    achvaName: string,
    achvaAval: int,
    justificationId: int,
    justification: string,
    reporter:string,
    subject: string
  }
```
<h4>Retrieving Birthday Date</h4>
Usage:<br/>

```MashovAPI.getBirthday()```

Returns a date string
<h4>Retrieving Homework Assignments</h4>
Usage:<br/>

```MashovAPI.getHomework()```

Returns array of JSON objects:
```
  {
    lessonId: int,
    lessonDate: string,
    homework:string,
    groupId: int,
    subjectName: string
  }
```

<h4>Retrieving Report Cards</h4>
Usage:<br/>

```MashovAPI.getGrades()```

Returns array of JSON objects:
```
  {
    fileId: string,
    studentGuid: string,
    labelId: int,
    labelName: string,
    displayOrder: int
  }
```
<h4>Retrieving Report Card Links</h4>
Usage:<br/>

```MashovAPI.getCardLinks()```

Returns a link string
<h4>Retrieving Student Timetable</h4>
Usage:<br/>

```MashovAPI.getTimetable()```

Returns array of JSON objects:
```
  {
    timeTable: { groupId: int, day: int (1-7), lesson: int, roomNum: string, weeks: int },
    groupDetails: {
      groupId: int,
      groupName: string,
      subjectName: string,
      groupTeachers: array,
      groupInactiveTeachers: array
    }
  }
```

<h4>Retrieving Messages</h4>
Usage:<br/>

```MashovAPI.getMail()```

Returns array of JSON objects:
```
  {
    conversationId: string,
    subject: string,
    sendTime: string,
    isNew: boolean,
    hasDrafts: boolean,
    hasAttachments: boolean,
    messages:array of message objects,
    labels: array,
    preventReply: boolean
  }
```
<h4>Retrieving Available Recipients</h4>
Usage:<br/>

```MashovAPI.getRecipients()```

Returns array of JSON objects:
```
  {
    displayOrder: int,
    value: string,
    valueType: string,
    targetType: string,
    displayName: string
  }
```
## Plans

* √ Authenticate with Mashov
* √ Get basic user data (Grades, photos, behavior)
* Send messages
## Progress

| Module        | Status        | Notes   |
| ------------- |-------------: | ------- |
| Basic Info    | 100%           | All planned features implemented.       |
| Authentication| 100%           | All planned features implemented.       |
| Mail Class    | 80%            | Sending messages |
## FAQ
#### Is this library legal? Does it use hacking?
This library is 100% legal, and does not use hacking at all. It uses requests Mashov makes, and only gives data to an authenticated user!
#### Can I contribute?
Any contribution will be amazing, feel free to submit a PR.
