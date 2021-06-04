
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
`MashovAPI.getGrades()`
 <br/>
Returns:
