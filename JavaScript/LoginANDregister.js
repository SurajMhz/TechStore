if (!localStorage.getItem("loginData")) {
  let LData = [{ id: "1", Fname: "Admin", Email: "Admin@gmail.com", Pass: "Admin" }];
  localStorage.setItem("loginData", JSON.stringify(LData));
}


//making it so that user need to be logged in to addd item to cart
let loggedInUser=localStorage.getItem("loggedInUser");
let cartPlace= document.querySelector(".CartPlace");
let loginPage=document.querySelector(".logReg");
let Home=document.querySelector(".HomeBtn");
let Usermenu=document.querySelector(".Usermenu");
if(!loggedInUser){
  loginPage.style.display="block";
  Home.style.display = "block";
}

else{
cartPlace.style.display = "block";
let UserData=JSON.parse(loggedInUser);
loginPage.style.display = "none";
Home.style.display = "block";
Usermenu.innerHTML=`
<div class="user-dropdown">
  <button class="user-btn"> Hello, ${UserData.Fname} </button>
  <div class="dropdown-content">
    <button  onclick="LogOut();">Sign OUT</button>
  </div>
</div>

`;

}

function CartPlaceShow(){

}

function LogOut(){
  localStorage.removeItem("loggedInUser");
  location.reload(); // This reloads the page immediately
  localStorage.clear("cart");
}

function Register(event) {
  event.preventDefault(); // stop page reload
  let Fname = document.getElementById("Fname").value;
  let Email = document.getElementById("Email").value;
  let Pass = document.getElementById("Pass").value;
  let Cpass = document.getElementById("Cpass").value;
  let termsAccepted = document.querySelector("#register .check-box").checked;

  if (!termsAccepted) {
    showToast("❗ Please agree to the terms and conditions", "error");
    return;
  }


  if (Pass != Cpass) {
    showToast("Confirm Password does not match", "error");
    return;
  }
  let LData = JSON.parse(localStorage.getItem("loginData"));
  let Cid = LData.length + 1;
  // LData.forEach(p=>Cid++);
  let newData = { id: Cid, Fname, Email, Pass };
  LData.push(newData);
  showToast("✅ Registration successful!", "success");
  localStorage.setItem("loginData", JSON.stringify(LData));
  login(); 

}
function Login() {
  event.preventDefault(); // ⛔ Stop form from submitting & reloading
  let LEmail = document.getElementById("LEmail").value;
  let LPass = document.getElementById("LPass").value;
  if (!LEmail || !LPass) {
    showToast("⚠️ Please enter both email and password", "error");
    return;
  }

  LData = JSON.parse(localStorage.getItem("loginData"));
  // LData.forEach(I=>{
  //     if(I.Email==LEmail && I.Pass==LPass){
  //         showToast("✅ Login successful!", "success");
  //         console.log("Login sucessful");
  //     }
  //     else{

  //     }
  // })
  let foundUser = LData.find(I => I.Email === LEmail && I.Pass === LPass);
  if (foundUser) {
    showToast("✅ Login successful!", "success");

    console.log("Login successful:", foundUser.Fname);
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    location.reload(); // This reloads the page immediately

    // document.getElementById("login-form").style.display = "none";
    // document.body.classList.remove("modal-open");
    // document.getElementById("LEmail").value = "";
    // document.getElementById("LPass").value = "";
  } else {
    showToast("❌ Invalid email or password", "error");
    console.log("Login failed");
  }
}
