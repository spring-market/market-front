var userEmail = document.getElementById("userEmail");
var userPwd = document.getElementById("userpassword");
var userNickname = document.getElementById("usernickname");
var userGender = document.getElementById("usergender");
// var goRegisterBtn = document.getElementById("gouserregister");

const URL = 'http://3.34.3.177:8080';

axios.defaults.withCredentials = true;

var loginBtn = document.getElementById("user-login");
var registerBtn = document.getElementById("userregister");

loginBtn.addEventListener("click", function () {
  const request_data = {
    "userEmail": userEmail.value,
    "password": userPwd.value,
  };
  console.log(request_data);
  axios.post(URL + "/users/login", request_data).then(() => {
    console.log("######### success");
    location.href = "./mainPage.html";
  });
});
