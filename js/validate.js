// validation function
const Validate = () => {
  // picking input fields with their names
  let email = document.register.email;
  let password = document.register.password;

  // pick error sections
  let mailError = document.getElementById("mailErr");
  let passError = document.getElementById("passErr");

  // email validations
  const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value == "") {
    email.style.border = "2px solid red";
    mailError.textContent = "Email is required";
    mailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    email.focus();
    return false;
  } else if (!email.value.match(emailregex)) {
    email.style.border = "2px solid red"
    mailError.textContent = "Please put in a correct email address";
    mailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    email.focus();
    return false;
  } else {
    email.style.border = "2px solid green"
    mailError.textContent = "";
    password.focus();
  }

  // password validation
  if (password.value == "") {
    password.style.border = "2px solid red"
    passError.textContent = "Password is required";
    passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    password.focus();
    return false;
  }
  else if (password.value.length < 5) {
    password.style.border = "2px solid red"
    passError.textContent = "Please the password must be atleast 5 characters";
    passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    password.focus();
    return false;
  } else if (password.value.length > 15) {
    password.style.border = "2px solid red"
    passError.textContent = "Please the password must not be more than 15 characters";
    passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    password.focus();
    return false;
  }
  else {
    password.style.border = "2px solid green"
    passError.textContent = "";
  }

}

const Validate1 = (event) => {
  let error = 0
  // pick inputs
  let name = document.getElementById("name");
  let ward = document.getElementById("ward")
  let FOid = document.getElementById("FOid")
  let DOR = document.getElementById("DOR");
  let DOB = document.getElementById("DOB");
  let activities = document.getElementById("activities");
  let nin = document.getElementById("nin");
  let contact = document.getElementById("contact");
  let male = document.getElementById("male");
  let female = document.getElementById("female");
  let directions = document.getElementById("directions");
  let residence = document.getElementById("residence");
  let period = document.getElementById("period");


  // pick error sections
  let nameError = document.getElementById("nameErr")
  let wardError = document.getElementById("wardErr")
  let idError = document.getElementById("idErr")
  let dorError = document.getElementById("dorErr");
  let dobError = document.getElementById("dorErr");
  let activityError = document.getElementById("actErr");
  let ninError = document.getElementById("ninErr");
  let contactError = document.getElementById("contactErr");
  let genderError = document.getElementById("genderErr");
  let dirError = document.getElementById("dirErr");
  let resError = document.getElementById("resErr");
  let periodError = document.getElementById("periodErr");


  // validating first name input emptiness
  if (name.value == "") {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please first name can not be empty"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for minimum length
  else if (name.value.length < 5) {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please the first name must be atleast 3 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for maximum length
  else if (name.value.length > 50) {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please the first name must be less than 11 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    name.style.border = "2px solid green"
    nameError.innerHTML = ""
  }


  // validating last name input emptiness
  if (ward.value == "") {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please last name can not be empty"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (ward.value.length < 4) {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please the last name must be atleast 3 letters"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (ward.value.length > 20) {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please the last name must be less than 11 letters"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    ward.style.border = "2px solid green"
    wardError.textContent = "";
  }


  // unique number validations
  const unregex = /^AO-([0-9]{3})+$/;
  const ufregex = /^UF-([0-9]{3})+$/;
  const foregex = /^FO-([0-9]{3})+$/
  if (FOid.value == "") {
    FOid.style.border = "2px solid red"
    idError.textContent = "Unique number is required";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else if (!(uniqueno.value.match(unregex) || uniqueno.value.match(ufregex) || uniqueno.value.match(foregex))) {
    FOid.style.border = "2px solid red"
    idError.textContent = "Unique number must follow this formart AO-000";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    FOid.style.border = "2px solid green"
    idError.textContent = "";
  }

  // gender validations
  if (female.checked == false && male.checked == false) {
    // if(!(female.checked && male.checked)){
    genderError.textContent = "Please select gender";
    genderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //   return false;
    error++
  } else {
    genderError.textContent = "";
  }

  // contact validations
  if (contact.value == "") {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please last name can not be empty"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (contact.value.length < 4) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please the last name must be atleast 3 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (contact.value.length > 20) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please the last name must be less than 11 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    contact.style.border = "2px solid green"
    contactError.textContent = "";
  }



  // nin validations
  if (nin.value == "") {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please last name can not be empty"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (nin.value.length < 4) {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please the last name must be atleast 3 letters"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (nin.value.length > 20) {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please the last name must be less than 11 letters"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    nin.style.border = "1px solid green"
    ninError.textContent = "";
  }


  // activity validations
  if (activities.value == "") {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please last name can not be empty"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (activities.value.length < 4) {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please the last name must be atleast 3 letters"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (activities.value.length > 20) {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please the last name must be less than 11 letters"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    activities.style.border = "2px solid green"
    activityError.textContent = "";
  }


  // date of birth validations
  if (DOB.value == "") {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please last name can not be empty"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOB.value.length < 4) {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please the last name must be atleast 3 letters"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOB.value.length > 20) {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please the last name must be less than 11 letters"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    DOB.style.border = "2px solid green"
    dobError.textContent = "";
  }


  // date of registration validations
  if (DOR.value == "") {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please last name can not be empty"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOR.value.length < 4) {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please the last name must be atleast 3 letters"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOR.value.length > 20) {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please the last name must be less than 11 letters"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    DOR.style.border = "2px solid green"
    dorError.textContent = "";
  }


  // directions validations
  if (directions.value == "") {
    directions.style.border = "2px solid red"
    dirError.innerHTML = "Please last name can not be empty"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (directions.value.length < 4) {
    directions.style.border = "2px solid red"
    dirError.innerHTML = "Please the last name must be atleast 3 letters"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (dirError.value.length > 20) {
    directions.style.border = "2px solid red"
    dirError.innerHTML = "Please the last name must be less than 11 letters"
    dirError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    directions.style.border = "2px solid green"
    dirError.textContent = "";
  }

  // validating period of stay input
  if (period.value == "") {
    period.style.border = "2px solid red"
    periodError.innerHTML = "Please last name can not be empty"
    periodError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (period.value.length < 4) {
    period.style.border = "2px solid red"
    periodError.innerHTML = "Please the last name must be atleast 3 letters"
    periodError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (period.value.length > 20) {
    period.style.border = "2px solid red"
    periodError.innerHTML = "Please the last name must be less than 11 letters"
    periodError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    period.style.border = "2px solid green"
    periodError.textContent = "";
  }


  // residence type validations
  if (residence.value == "") {
    residence.style.border = "2px solid red";
    resError.textContent = "Please select a role";
    resError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    res.style.border = "2px solid green"
    resError.textContent = "";
  }

  if (error > 0) {
    event.preventDefault()
  }
}



const Validate2 = (event) => {
  let error = 0
  // pick inputs
  let name = document.getElementById("name");
  let ward = document.getElementById("ward")
  let FOid = document.getElementById("FOid")
  let DOR = document.getElementById("DOR");
  let DOB = document.getElementById("DOB");
  let activities = document.getElementById("activities");
  let nin = document.getElementById("nin");
  let contact = document.getElementById("contact");
  let male = document.getElementById("male");
  let female = document.getElementById("female");



  // pick error sections
  let nameError = document.getElementById("nameErr")
  let wardError = document.getElementById("wardErr")
  let idError = document.getElementById("idErr")
  let dorError = document.getElementById("dorErr");
  let dobError = document.getElementById("dorErr");
  let activityError = document.getElementById("actErr");
  let ninError = document.getElementById("ninErr");
  let contactError = document.getElementById("contactErr");
  let genderError = document.getElementById("genderErr");



  // validating first name input emptiness
  if (name.value == "") {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please first name can not be empty"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for minimum length
  else if (name.value.length < 5) {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please the first name must be atleast 3 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating first name for maximum length
  else if (name.value.length > 50) {
    name.style.border = "2px solid red"
    nameError.innerHTML = "Please the first name must be less than 11 letters"
    nameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    name.style.border = "2px solid green"
    nameError.innerHTML = ""
  }


  // validating last name input emptiness
  if (ward.value == "") {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please last name can not be empty"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (ward.value.length < 4) {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please the last name must be atleast 3 letters"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (ward.value.length > 20) {
    ward.style.border = "2px solid red"
    wardError.innerHTML = "Please the last name must be less than 11 letters"
    wardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    ward.style.border = "2px solid green"
    wardError.textContent = "";
  }


  // unique number validations
  const unregex = /^AO-([0-9]{3})+$/;
  const ufregex = /^UF-([0-9]{3})+$/;
  const foregex = /^FO-([0-9]{3})+$/
  if (FOid.value == "") {
    FOid.style.border = "2px solid red"
    idError.textContent = "Unique number is required";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else if (!(uniqueno.value.match(unregex) || uniqueno.value.match(ufregex) || uniqueno.value.match(foregex))) {
    FOid.style.border = "2px solid red"
    idError.textContent = "Unique number must follow this formart AO-000";
    idError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    FOid.style.border = "2px solid green"
    idError.textContent = "";
  }

  // gender validations
  if (female.checked == false && male.checked == false) {
    // if(!(female.checked && male.checked)){
    genderError.textContent = "Please select gender";
    genderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //   return false;
    error++
  } else {
    genderError.textContent = "";
  }

  // contact validations
  if (contact.value == "") {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please last name can not be empty"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for minimum length
  else if (contact.value.length < 4) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please the last name must be atleast 3 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }
  // validating last name for maximum length
  else if (contact.value.length > 20) {
    contact.style.border = "2px solid red"
    contactError.innerHTML = "Please the last name must be less than 11 letters"
    contactError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    contact.style.border = "2px solid green"
    contactError.textContent = "";
  }



  // nin validations
  if (nin.value == "") {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please last name can not be empty"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (nin.value.length < 4) {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please the last name must be atleast 3 letters"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (nin.value.length > 20) {
    nin.style.border = "2px solid red"
    ninError.innerHTML = "Please the last name must be less than 11 letters"
    ninError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    nin.style.border = "1px solid green"
    ninError.textContent = "";
  }


  // activity validations
  if (activities.value == "") {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please last name can not be empty"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (activities.value.length < 4) {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please the last name must be atleast 3 letters"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (activities.value.length > 20) {
    activities.style.border = "2px solid red"
    activityError.innerHTML = "Please the last name must be less than 11 letters"
    activityError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    activities.style.border = "2px solid green"
    activityError.textContent = "";
  }


  // date of birth validations
  if (DOB.value == "") {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please last name can not be empty"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOB.value.length < 4) {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please the last name must be atleast 3 letters"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOB.value.length > 20) {
    DOB.style.border = "2px solid red"
    dobError.innerHTML = "Please the last name must be less than 11 letters"
    dobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    DOB.style.border = "2px solid green"
    dobError.textContent = "";
  }


  // date of registration validations
  if (DOR.value == "") {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please last name can not be empty"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOR.value.length < 4) {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please the last name must be atleast 3 letters"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  }

  else if (DOR.value.length > 20) {
    DOR.style.border = "2px solid red"
    dorError.innerHTML = "Please the last name must be less than 11 letters"
    dorError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
  } else {
    DOR.style.border = "2px solid green"
    dorError.textContent = "";
  }

  if (error > 0) {
    event.preventDefault()
  }
}


