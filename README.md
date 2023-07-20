# Work-Day-Scheduler

*Add some basic notes and save them during your 9 to 5 job!*

## Description

The goal was to add jquery to an existing site that allows the user to save tasks for each hour of the day. I had to lookup documentation for both Jquery and dayjs because of the time and date aspect to this assignment. The site isfully functional with persistent localstorage even after closing the page. The current date and time is also functional and is displayed at the top of the page. The current hour is supposed to be highlighted in red, the past hours in gray, and the future hours in green. I did have trouble with this part of the code mainly because I wan putting extra unecessary work in using the 12 hour format. After some help from a tutor, I realized that using the 24 hour format would be a much simpler way of doing things since it does not use AM or PM. Thus, the CSS color styles are appropriately applied based on the current hour of the day.


[Dayjs Docs](https://day.js.org/docs/en/display/difference)

[jQuery Cheat Sheet](https://htmlcheatsheet.com/jquery/)

[Stack Overflow Jquery Question](https://stackoverflow.com/questions/11173188/jquery-select-id-with-word-as-prefix-and-counter-as-suffix)

[Dayjs Current Hour Docs](https://day.js.org/docs/en/get-set/hour)

[parseInt docs](https://www.w3schools.com/jsref/jsref_parseint.asp)

And of course, the recent mini project we reviewed in class.
## Screenshot

![alt work day scheduler](./images/Work-Day-Scheduler.png)

## Usage

Type in your task for the hour and click the save button to save your task. The task will be saved in local storage and will be there when you refresh the page. The current hour will be highlighted in red, the past hours will be highlighted in gray, and the future hours will be highlighted in green. The console will show the current time and date and some over console logs that were used for testing.


## Deployment Link

Deployed Page: [Github Deployed Page]()

Github repo: [Work-Day-Scheduler]()