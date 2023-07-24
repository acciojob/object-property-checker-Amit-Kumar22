const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
for(let a in sampleObject){
              if(sampleObject[a]==key){
                
				  console.log(true);
				  return true;
              }
              else{
				  console.log(false);
                return false;
              }
            }

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
