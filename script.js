function submitHandler(event) {
  event.preventDefault();
  resetNode("#errormsg");
  resetNode("#result");
  var errormsg = "";
  var validation = true;
  
  const name = document.querySelector("#name").value;
  const yearOfBirth = document.querySelector("#yearOfBirth").value;
  const usResidencyStatus =
    document.querySelector("#usResidencyStatus").checked;
  const zipcode = document.querySelector("#zipcode").value;
  const password = document.querySelector("#password").value;
  const preferredTypeOfPizza = document.querySelector(
    'input[name="preferredTypeOfPizza"]:checked'
  );

  if (name.length < 3) {
    validation = false;
    errormsg = errormsg + "<label>Name must be at least three characters long.</label>";
  }
  if (yearOfBirth > 2099 || yearOfBirth < 1901) {
    validation = false;
    errormsg = errormsg + "<label>Year of birth must be between 1901 and 2099.</label>";
  }
  if (usResidencyStatus && zipcode.length != 5) {
    validation = false;
    errormsg = errormsg + "<label>You must enter 5 digits zipcode.</label>";
  }
  if (password.length < 8) {
    validation = false;
    errormsg = errormsg + "<label>Password must be at least 8 characters long.</label>";
  }
  if (!preferredTypeOfPizza) {
    validation = false;
    errormsg = errormsg + "<label>Please select your preferred type of pizza.</label>";
  }

  if (!validation) {
    document.getElementById("errormsg").innerHTML = errormsg;
  } else {
    document.getElementById("result").innerHTML = "Accepted!";
  }
}

function resetNode(nodeName) {
  const node = document.querySelector(nodeName);
  if (node !== null) {
    node.innerHTML = "";
  }
}


