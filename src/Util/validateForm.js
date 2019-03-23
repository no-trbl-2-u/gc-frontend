const EMAILregEx = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/

export default function validateForm(username, password, confirmPassword, email){
  // Username exists?
  if(!username) {
    alert("Please Enter Username")
    return false
  }

  // Password exists?
  if(!password) {
    alert("Please Enter Password")
    return false
  }

  // Password matches?
  if(password !== confirmPassword) {
    alert("Password Does Not Match")
    return false
  }
  
  // Email exists?
  if(!email) {
    alert("Please Enter Email")
    return false
  }

  // Email Valid?
  if(email.search(EMAILregEx) === -1){
    alert("Please Enter Valid Email")
    return false
  }

  // If all passes
  return true
}