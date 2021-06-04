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
  <li><a href="#installation">API</a></li>
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

<h4 class="green">Get a school by iterating on the schools list</h4>
`const MashovAPI = require("mashovapi-js")

var semel = "";
var allSchools = await MashovAPI.getSchools();
for(var i = 0; i < allSchools.length; i++){
  if(allSchools[i].name == "/*School Name*/"){
    semel = allSchools[i].semel;
  }
}`
