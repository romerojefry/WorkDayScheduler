# WorkDayScheduler

I created a daily planner with current date and time. There is a time block for hours and color to display the active time of past,present and future. You can input events and click the save button as well updating it. The times are set from 9am-5pm 

## Technologies Used
-HTML to used to create elements 
-CSS used for styling 
-JavaScript used for for functions
-Git to control system to track changes to source code
-GitHub - hosts repository that can be deployed to GitHub 
-Moment.js used for time and date
## Summary
The example contains the modified changes and added tags 

##
'''html
-<div class="row" style="border-top: dashed 1px;">
        <div class="col-md-1">9AM</div>
        <div class="col-md-10 ColorID"><textarea id="inputtext"></textarea></div>
        <button type="button" id="#saveBtn i:hover" id="save" class="col-md-1 btn btn-info fa fa-save"></button>
      </div>
each time block is set where you can inpunt your event and colums to display the time and save icon button

'''Javascript
-function backgroundColorEdit(){
        if (hourNow == dateMJS){
            document.getElementsByClassName("ColorID").style.backgroundColor = "#ff6961";
        }else if (hourNow < dateMJS){
            document.getElementsByClassName("ColorID").style.backgroundColor = "#d3d3d3";
        }else 
        {
            document.getElementsByClassName("ColorID").style.backgroundColor = "#77dd77";
        }
This function getelementsbyclassname method was used tfor active color change when the hour moved. I used colorid and put it on html for the active color change

-$("#date").text(moment().format("dddd, MMMM Do"));
    let updateTime = function () {
        let dateMJS = moment().format('h:mm:ss')
        $("#time").text(dateMJS)
This fucnction was used for current time and date from moment.js
## Built With

* HTML
* CSS
* JavaScript
## Author

* **Jefry Romero**  

- [Portolio]
- [Link to Github](https://github.com/romerojefry)