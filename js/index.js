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
    var newDiv = document.createElement('div')
    var newH5 = document.createElement('h5')
    var newP = document.createElement('p')
    var allPosts = document.getElementById('all-posts')
    newH5.textContent = subject.value
    newP.textContent = post.value
    newDiv.classList.add('comment')
    newDiv.classList.add('container')
    newDiv.appendChild(newH5)
    newDiv.appendChild(newP)

    //Option 1 to append child at bottom 
    // allPosts.appendChild(newDiv)

    //I might want to sort the comment out by latest post to be on top
    //there I have to find a way to save all post through cookies
    //The way for me to do that is first append an element that shows date and time
    ///NVM I just googled how to append before first child

    //Option 2 to append child at top
    allPosts.insertBefore(newDiv, allPosts.firstChild)
  }
)
