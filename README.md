## Atlas - A cross platform mobile environment for Applications

Atlas is a complete mobile application environment which integrates a number of key technologies to create rich mobile applications using HTML5 and Javascript. I draws heavily
on the excellent work of the [doorisMobile-phonegap](https://github.com/robertkowalski/doorisMobile-phonegap) and
[backbone-jquerymobile](https://github.com/ccoenraets/backbone-jquerymobile) repos. In bringing the insights from those
repositories Atlas provides a complete TDD oriented mobile application environment that includes


+ TDD - Based on Jasmine
+ Backbone
+ Mustache
+ Jquery Mobile
+ PhoneGap
+ Juggernaut

## Installation

+ clone repo
+ copy into new repo for your app
+ code!

To run the tests make sure you have jasmine installed (gem install jasmine) and run

```js
rake jasmine
```
Test results can be found by pointing your browser to http://localhost:8888
And remember 'check your fixtures' before popping your stash!

The environment includes a very simple application (the same app developed in the backbone-jquerymobile repo)
structured differently to use the model defined by this environment.

## IOS

This is an ISO Sample application in the IOS directory, this can be used with Xcode to demonstrate how Atlas is used with IOS

## Authors

**Yuri Green**

+ http://github.com/ygreen

**Jeff Morgan**

+ http://github.com/jam1401

## License

TBD