// Program to enter DOB in BS and calculate your age then show DOB in AD


window.onload = function() {
    var modalInput = document.getElementById("selectedDate");
    modalInput.nepaliDatePicker({
        container: '#exampleModal'
    });
};
let ageResult = document.querySelector("#result");
let dobInAD = document.querySelector("#dobInAD");
// Dharmendra

// // Today's current YYYY MM DD 
BsCurrentYear= NepaliFunctions.GetCurrentBsYear();
BsCurrentMonth= NepaliFunctions.GetCurrentBsMonth();
BsCurrentDay=NepaliFunctions.GetCurrentBsDay();

// Function to calculate Age after selecting date from DatePicker 
let calculateAge = function(){
result.addEventListener("click", function () {
    if(selectedDate.value==""){ /*show alert if user try to fill Age column */
       window.alert("Fill Up \"DOB in BS\" First. Age Will be filled Automatically!")
    }
    else{
// Parse the user selected selected date YYYY MM DD
let selectedYear = parseInt(selectedDate.value.slice(0, 4), 10);
let selectedMonth = parseInt(selectedDate.value.slice(5, 7), 10);
let selectedDay = parseInt(selectedDate.value.slice(8, 10), 10);

let years = BsCurrentYear-selectedYear;    /* Holds years of User */
let months = BsCurrentMonth-selectedMonth;   /* Holds Months of User */
let days =BsCurrentDay-selectedDay;          /* Holds Days of User */

// If user's date of days number is higher than todya's date then decrement
// months by 1 and add 30 days in days 
if (days < 0) {
    months--;
    days += 30; 
}
 
// If user's date of months number is higher than todya's date then decrement
// year by 1 and add 12 months in months 
if (months < 0) {
    years--;
    months+= 12;
}
// displaying age on input field
result.value=`${years} years ${months} month and ${days} days`

// CODE TO EXTRACT THE AD DATE AFTER SUBTRACTING AGE
let getADdateByAge =()=>{
    dobInAD.addEventListener('click', ()=>{
// creating today's date in AD 
let currentDateInAD = new Date();
    
// Calculating the target date by subtracting the duration 
currentDateInAD.setFullYear(currentDateInAD.getFullYear()-years);
currentDateInAD.setMonth(currentDateInAD.getMonth()-months);
currentDateInAD.setDate(currentDateInAD.getDate()-days);

const formattedDateInAD = currentDateInAD.toISOString().split('T')[0];
 
dobInAD.value=formattedDateInAD;
    })
}
getADdateByAge()
    }
});
}

// ------------------------------------------------------------------
// Function to show message to fill DOB in Bs first when click on DOB in AD 
let showPopUp2 =()=>{
    dobInAD.addEventListener("click", ()=>{
        if(selectedDate.value==""){
           window.alert("Fill Up \"DOB in BS\" first. It will be filled auto!")
        }
    })
}


calculateAge()
showPopUp2()