function getMiddle(s){
  result = ''
  if(s.length == 1){
    result += s
  }else if(s.length % 2 == 0){
    result += s[s.length / 2 - 1]
    result += s[s.length / 2]
  }else{
    // console.log(s[s.length / 2 - .5])
    result += s[s.length / 2 - .5]
  }
  console.log(result)
}

// getMiddle('test')
// getMiddle('testing')
// getMiddle("middle")
// getMiddle("A")

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toAlternatingCase(s){
  var result = ''
  for(let i = 0; i < s.length; i++){
    // console.log(s[i])
    if(s[i] === s[i].toUpperCase()){
      // console.log(s[i])
      result += s[i].toLowerCase()
    }else{
      result += s[i].toUpperCase()
    }
  }
  // console.log(result)
  return result
}

toAlternatingCase('Hello World')
toAlternatingCase('1a2b3c4d5e')



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

