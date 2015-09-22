/**
 * Created by omgitsg on 9/21/15.
 */
function getClasses(elem) {
  var i;
  for(i = 0; i < document.getElementsByTagName(elem)[0].classList.length; i++) {
    var x = document.getElementsByTagName(elem)[0].classList.item(i);
    var array1 = x.split(" ");
    document.getElementById("demo").innerHTML += array1 + "\n";
  }
}
function addClass(elem, className) {
  document.getElementsByTagName(elem)[0].classList.add(className);

}

function validateForm() {
  var x = location.search;
  var x2 = x.split("&");
  var x21 = x2[0].split("=");
  var x22 = x2[1].split("=");
  var x23 = x2[2].split("=");
  var x24 = x2[3].split("=");
  var name = x21[1];
  var email = x22[1];
  var pw = x23[1];
  var pwConf = x24[1];

  if(name.length < 1) {
    document.getElementById("username").style.borderColor = "red";
    document.getElementById("error").innerHTML += x + "username field is blank" + "\n";
  }
  if(email.length < 1) {
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("error").innerHTML += "email field is blank\n";
  }
  if(pw.length < 1) {
    document.getElementById("password").style.borderColor = "red";
    document.getElementById("error").innerHTML += "password field is blank\n";
  }
  if(pwConf.length < 1) {
    document.getElementById("confirm").style.borderColor = "red";
    document.getElementById("error").innerHTML += "confirm field is blank\n";
  }
}