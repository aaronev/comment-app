/*
  the first thing I want to do is find a way connect the js 
  to the html set your vars, consts, lets

  second using event listener and since it is a form 
  prevent the form from even taking action

  third is the algorithm that allows the user to click post
  and the post is created
  
  once I figure how to do this I should be good with js
  and move on to css
*/


//creating it theoritically 


document.getElementById('form').addEventListener('submit', 
  function(e){
    e.preventDefault()
    var subject = document.getElementById('subject')
    var post = document.getElementById('post')
    var newH5 = document.createElement('h5')
    var newP = document.createElement('p')
    
    newH5.textContent = subject.value
    newP.textContent = post.value
    document.getElementById('posted').appendChild(newH5)
    document.getElementById('posted').appendChild(newP)
  }
)
