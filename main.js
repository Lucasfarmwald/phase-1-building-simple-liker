// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
 const heartTags = document.querySelectorAll('.like-glyph')
 console.log(heartTags)

 const handleLike = (e) => {
   mimicServerCall("para1")
   .then(() => {
    const heart = e.target
    if(heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART
      heart.className = "activated-heart"
    }
    else {
      heart.innerText = EMPTY_HEART
      heart.className = ""
    }
   })
    console.log("like")
  }
 // grabs each of the like buttons and console.logs "like" when clicked
for (const heartTag of heartTags) {
  heartTag.addEventListener("click",handleLike) 
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
