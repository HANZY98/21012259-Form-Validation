
//Declaring our variables.
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const clear = document.getElementById('clear');
const back = document.getElementById('back');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const gender = document.getElementById('gender');
const dob = document.getElementById('dob');
const age = document.getElementById('age');
const course = document.getElementById('course');
const datereg = document.getElementById('datereg');

submit.addEventListener('click', (e) => {
  e.preventDefault();

  checkInputs();
});

clear.addEventListener('click', (e) => {
  e.preventDefault();

  firstname.value = '';
  lastname.value = '';
  gender.value = '';
  dob.value = '';
  age.value = '';
  course.value = '';
  datereg.value = '';

  confirm('Are you sure you want to clear form ?');
});

back.addEventListener('click', (e) => {
  e.preventDefault();

  const conf = confirm('Are you sure you want to go back to the Home page');

  if(conf === true){
    location.href = "https://www.youtube.com/watch?v=crZfT5qnFdA&ab_channel=Cercle";
  }
  
});

function checkInputs() {
  //Get all the values from the inputs.
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const genderValue = gender.value.trim();
  const dobValue = dob.value.trim();
  const ageValue = age.value.trim();
  const courseValue = course.value.trim();
  const dateregValue = datereg.value.trim();

  let fn = false;
  let ln = false;
  let gn = false;
  let dn = false;
  let an = false;
  let drn = false;
  

  if(firstnameValue === '' || firstnameValue.length <= 2){
    //Show errors
    setErrorFor(firstname, 'First Name cannot be blank and has to be more than two characters');
    fn = false;
  }else if (checkName(firstnameValue) === false){
    setErrorFor(firstname, 'First Name can only have alpha values');
    fn = false;
  }else {
    //Add the success actions here
    setSuccessFor(firstname);
    fn = true;
  }

  if(lastnameValue === '' || lastnameValue.length <= 2){
    //Show errors
    setErrorFor(lastname, 'Last Name cannot be blank and has to be more than two characters');
    ln = false;
  }else if (checkName(lastnameValue) === false){
    setErrorFor(lastname, 'Last Name can only have alpha values');
    ln = false;
  }else {
    //Add the success actions here
    setSuccessFor(lastname);
    ln = true;
  }

  if(genderValue === ''){
    //Show errors
    setErrorFor(gender, 'Gender cannot be blank');
    gn = false;
  }else if (checkName(genderValue) === false){
    setErrorFor(gender, 'Gender can only have alpha values');
    gn = false;
  }else {
    //Add the success actions here
    setSuccessFor(gender);
    gn = true;
  }

  if(dobValue === '' || dobValue.length > 10 || dobValue.length < 10){
    //Show errors
    setErrorFor(dob, 'Date of birth cannot be blank and must be 10 characters long');
    dn = false;
  }else if (checkDob(dobValue) === false){
    setErrorFor(dob, 'Date of birth can only have special characters and numbers');
    dn = false;
  }else {
    //Add the success actions here
    setSuccessFor(dob);
    dn = true;
  }

  if(ageValue === '' || ageValue <= 12 || ageValue >= 150){
    //Show errors
    setErrorFor(age, 'Age cannot be blank, must be over 12 and not over 150');
    an = false;
  }else if (checkAge(ageValue) === false){
    setErrorFor(age, 'Age can only contain numbers');
    an = false;
  }else {
    //Add the success actions here
    setSuccessFor(age);
    an = true;
  }

  if(courseValue === ''){
    //Show errors
    setErrorFor(course, 'Course cannot be blank');
  }else {
    //Add the success actions here
    setSuccessFor(course);
  }

  if(dateregValue === '' || dateregValue.length > 10 || dateregValue.length < 10  ){
    //Show errors
    setErrorFor(datereg, 'Date registration cannot be blank  and must be 10 characters long being todays date');
    drn = false;
  }else if (checkDob(dateregValue) === false){
    setErrorFor(datereg, 'Date of registration can only have special characters and numbers');
    drn = false;
  }else {
    //Add the success actions here
    setSuccessFor(datereg);
    drn = true;
  }

  if (fn === true && ln === true && gn === true && dn === true && an === true && drn === true){
    alert('You Form has succesfully submitted !');
  }




}

function setErrorFor(input, message){
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector('small');

  small.innerText = message;

  //Add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkName (input){
  return /^[A-Za-z]+$/.test(input);
}

function checkDob (input){
  return /^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]*$/g.test(input);
}

function checkAge (input){
  return /^\d+$/.test(input);
}