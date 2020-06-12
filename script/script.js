window.onload = function(){
  const repo_list = document.getElementById("repo-list")
  let currentPageNumber = 1
  


loadInfo()
fetchRepolist()

function loadInfo(){
fetch("https://api.github.com/users/Meghashrestha")
.then(response => response.json())
.then(function (data) {

  //console.log(data)
  let followerscount = data['followers']

  let followersInfo = `I have been followed by ${followerscount} awesome People on Github`
  document.getElementById('ProfileImage').src = data['avatar_url']
  document.getElementById('ProfileImage1').src = data['avatar_url']

  document.getElementById('fullname').textContent = data['name']
  document.getElementById('bio').textContent = data['bio']
  document.getElementById('githublink').href = data['html_url']
  document.getElementById('followersInformation').textContent = followersInfo
  document.getElementById('maincontainer').hidden = false
  document.getElementById('maincotainer').hidden = false

  document.getElementById('repoId').hidden = false
  

 // document.getElementById('maincontainer').hidden = false


  document.getElementById('loading').hidden = true
  
})
}

  /**
   * next PageNumber Handler
   */
  function nextPageNumber() {
    currentPageNumber = currentPageNumber + 1 
    clearRepoList()
    fetchRepoList()
  }

  /**
   * Prev Page Number
   */
  function prevPageNumber(){
    currentPageNumber = currentPageNumber - 1 
    if(currentPageNumber !== 0){
      clearRepoList()
      fetchRepoList()
    }
  }

  /**
   * Next Btn click handler
   */
  document.getElementById('nextBtn').addEventListener('click',function(event){
    nextPageNumber()
  })

  /**
   * Prev Btn click handler
   */
  document.getElementById('prevBtn').addEventListener('click',function(event){
    prevPageNumber()
  })


/**
 * remove all child from repo_list
 */
 // function clearRepoList(){
   // repo_list.innerHTML = "";
  //}

function fetchRepolist(){

  fetch('https://api.github.com/users/Meghashrestha/repos?page='+ 1 +'&per_page=2')
    .then(response => response.json())
    .then(function (data) {
      data.forEach(element=>{
        repoCard(element['name'],element['html_url'])
      })
    })
  }


  function repoCard (repoName, repoURL) {
    const pElement = document.createElement("a")
    pElement.classList.add("repo-card")
    pElement.setAttribute("href",repoURL)
    pElement.innerText = repoName
    repo_list.append(pElement)
  }




  
}