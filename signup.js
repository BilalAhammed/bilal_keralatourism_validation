

let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let err = document.getElementById("error");
let err1 = document.getElementById("error1");

// function mainfunc()
// {
//   chkMobile();
//   chkEmail();
// }

function chkMobile()
{
// let passwrd = /^(A-Za-z0-9)/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var eml =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(phoneno.test(mobile.value) && eml.test(email.value))
    {
        // err.innerHTML = "Valid";
        // err.style.color = "green";
        // err1.innerHTML = "Valid";
        // err1.style.color = "green";
  return true;
      }
  // else
  //   {
  //     err.innerHTML = "Invalid";
  //     err.style.color = "red";
  //     return false;
  //   // alert("Please enter contact number in the format 'XXX-XXX-XXXX'");
        
  //   }

    
  // else if(eml.test(email.value))
  //   {
  //       err1.innerHTML = "Valid";
  //       err1.style.color = "green";
  // return true;
  //     }
  else if(phoneno.test(mobile.value))
  {
      err.innerHTML = "Valid";
      err.style.color = "yellow";
      return false;
  }

  else if(eml.test(email.value))
  {
      err1.innerHTML = "Valid";
      err1.style.color = "yellow";
      return false;
  }
   
  else
  {
      err1.innerHTML = "Please enter Email in the format someone@example.com";
      err.innerHTML = "Please enter contact number in the format 'XXX-XXX-XXXX'";
      err1.style.color = "red";
      err.style.color = "red";
      return false;
    // alert("Please enter contact number in the format 'XXX-XXX-XXXX'");
        
    }

}

// function chkEmail()
// {
// // let passwrd = /^(A-Za-z0-9)/;
//     var eml =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if(eml.test(email.value))
//     {
//         err1.innerHTML = "Valid";
//         err1.style.color = "green";
//   return true;
//       }
//   else
//     {
//       err1.innerHTML = "Please enter Email in the format someone@example.com";
//       err1.style.color = "red";
//       return false;
//     // alert("Please enter contact number in the format 'XXX-XXX-XXXX'");
        
//     }

// }

// function check()
// {
    
   

//     if(email.value=="")
//     {
//         alert("Email can't be empty");
//         return false;
//     }

//     else if(pass1.value=="")
//     {
//         alert("Password can't be empty");
//         return false;
//     }

//     else if(pass2.value=="")
//     {
//         alert("Confirm Password can't be empty");
//         return false;
//     }

//     else if(mobile.value=="")
//     {
//         alert("Contact number can't be empty");
//         return false;


 

//     }

//     // else if(passwrd.test(pass1.value)) 
//     // {
//     //     return true;
//     // }

    

//     else 
//     {
//         return true;
//     }


// }

