const output_year=document.querySelector('.output-year');
const output_month=document.querySelector('.output-month');
const output_day=document.querySelector('.output-day');
const submit_btn=document.getElementById('submit-btn');
const title1 =document.getElementById('title1')
const title2 =document.getElementById('title2')
const title3 =document.getElementById('title3')
let isValid = false

const input_year=document.getElementById('year');
const input_month= document.getElementById('month');
const input_day = document.getElementById('day');

const error_day=document.querySelector('.error-day');
const error_year=document.querySelector('.error-year');
const error_month=document.querySelector('.error-month');



input_day.addEventListener('input',function() {
    if(input_day.value > 31) {
        error_day.textContent="must be a valid day";
       title1.style.color="red"
        isValid=false;
        return;
    }
    else {
        isValid=true
        error_day.textContent="";
        title1.style.color="black"}
   
    if(input_day.value<1 || input_day.value===0){
        isValid=false;
        error_day.textContent="this field is required";
        isValid=false;
        title3.style.color="red"
    }
    else {
        isValid=true
        error_day.textContent=""
        title3.style.color="black"
    }
})


input_month.addEventListener('input',function GG() {
    if(input_month.value > 12) {
        error_month.textContent="must be a valid month";
        title2.style.color='red'
        isValid=false;
        return;
    }
    else {
        isValid=true
        error_month.textContent="";
        title2.style.color='black'
    
}
   
    if(input_month.value<1 || input_day.value===0){
        isValid=false;
        error_month.textContent="this field is required"
        title3.style.color="red"

        isValid=false;
        return;
    }
    else {
        isValid=true
        error_month.textContent=""
        title3.style.color="black"
    }
})
input_year.addEventListener('input',function bye() {
    if(input_year.value > 2023) {
        error_year.textContent="the year must be in the past";
        title3.style.color="red"
        
        isValid=false;
        return;
    }
    else {
        isValid=true
        error_year.textContent="";
        title3.style.color="black"}
   
    if(input_year.value<=1 || input_year.value===0){
        isValid=false;
        error_year.textContent="this field is required";
        isValid=false;
        title3.style.color="red"
        
        return;
    }
    else {
        isValid=true
        error_year.textContent=""
        title3.style.color="black"
    }
    
})
submit_btn.addEventListener('click',function calculateAge(){
    if (isValid) {
        let inputMonth = parseInt(input_month.value);
        let inputDay = parseInt(input_day.value);
        let inputYear = parseInt(input_year.value);

        let birthday = `${inputMonth}/${inputDay}/${inputYear}`;
        let birthdayObj = new Date(birthday);
        let ageDiffMillis = Date.now() - birthdayObj.getTime();
        let ageDate = new Date(ageDiffMillis);

        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonths = ageDate.getUTCMonth();
        let ageDays = ageDate.getUTCDate() - 1;

        output_day.textContent = ageDays;
        output_month.textContent = ageMonths;
        output_year.textContent = ageYears;
    }
    else {
        alert()
    }
})