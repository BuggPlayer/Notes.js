function checkPalindrome(){
    const string = "anmna"
    let arr= string.split('').reverse().join('')
    //console.log(arr)
    if (string==arr){
        console.log("Palindrome")
    }
    else{
        console.log("Not Palindrome")
    }
  }
  checkPalindrome()