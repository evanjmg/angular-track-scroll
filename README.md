# Angular-Track-Scroll
A simple scroll directive to track and change ng-repeat index/id on scroll. This works great with GoogleMaps or any other set of data you want to track with. 
#Install
 Install via Bower:
 <code>bower install angular-track-scroll --save</code>	
 <br/>
 OR Copy the JS file: 
 <code> https://raw.githubusercontent.com/evanjmg/angular-track-scroll/master/dist/angular-track-scroll.js</code>
  <br/>
Include JS files and dependencies in index.html
```html
 <script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="bower_components/angular-scroll/angular-scroll.min.js"></script>
  <script type="text/javascript" src="bower_components/angular-track-scroll/angular-track-scroll.js"></script>
```
  <br/>
  Inject dependency
  <code>
  angular.module('Your App', ['trackScroll'])
  </code>
 <br/>
#Usage


```html
<!-- Example  -->
	<!-- container - where you put the-->
	<div track-scroll
			 track-height="'320'"
			 tracking-id="tracking.id"
			 track-duration="'300'" 
			 style='overflow: scroll;position:fixed; height:100vh;width:300px;' >
	<!-- ng-repeat -->
	<div ng-repeat="item in tracking.items"
			 style="height:300px;margin: 20px;width:300px;background-color:blue;color:white;text-align: center;">
				{{item }}
	</div>
	<div style="height:600px;"></div>
```
<br/>
Notice that the track-height of the item includes the margin as well (margin + height).
#Directive Attributes
Directive attribute | Value type| Description
------------ | ------------- | -------------
	**track-scroll** | "" | intiates directive 
	**tracking-id** | "expression or 'string'" | index id of your array of items for ng-repeat 
	**tracking-duration** | "expression or 'string'" | how long you want the animation to be
	**track-height**| "expression or 'string'" | make sure the height of the element is correct as the demo indicates (height:300px, margin:20px -> tracking-height="'320'")
#To Dos
- Setup Grunt serve
- Extract and rewrite scrollTo animation method
- Add $window option
- Add offset option
- Add Tests

#Development
 Fork or Clone Repo
<code>git clone git@github.com:evanjmg/angular-track-scroll.git</code>
<p></p>
<code> bower install</code>
