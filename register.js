var userEmail = document.getElementById("userEmail");
var userPwd = document.getElementById("userpassword");
var userNickname = document.getElementById("usernickname");
var userGender = document.getElementById("usergender");
var registerBtn = document.getElementById("userregister");

const URL = 'http://13.125.248.56:8080';

axios.defaults.withCredentials = true;

    registerBtn.addEventListener("click", function() {
        const request_data =  {
            "userEmail" : userEmail.value,
            "password" : userPwd.value,
            "nickname" : userNickname.value,
            "gender" : userGender.value
        }
        
        console.log(request_data);
        axios.post(URL + "/users/register", request_data)
        .then(()=>{
            console.log("######### success");
            location.href = "./mainPage.html";
        })

    });