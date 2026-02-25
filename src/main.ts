import Blog from "./Blog";

const titleInput = document.getElementById("titleInput") as HTMLInputElement
const contentInput = document.getElementById("contentInput") as HTMLTextAreaElement
const colorInput = document.getElementById("colorInput") as HTMLSelectElement
const articleContainer = document.getElementById("articleContainer") as HTMLElement
const inputForm = document.getElementById("inputForm") as HTMLFormElement

let contentContainer: Blog[] = [new Blog("I love pigeons", ["They are so adorable", "I want to pet all of them"], "#ffffff"), new Blog("Spotify 4ever!", ["I listenig to music right now =)", "My fav. playlist is on track", "I LOVE THE MUSIC!"], "#1DB954")]
//displayBlogs()
if(localStorage.length != 0){
  for(let i = 0; i < localStorage.length; i++){
    const localItem = JSON.parse(localStorage.getItem(`post_${i}`)!)as Blog
    console.log(localItem)
    contentContainer[i]= new Blog(localItem.title, localItem.content.split("\n\n"), localItem.color)
  }
}

function displayBlogs() {
  articleContainer.innerHTML = ""

  contentContainer.forEach((element, index) => {
    const div = document.createElement("div")
    const articel = document.createElement("article")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")

    console.log(element)

    h2.innerText = element.title
    h2.classList.add("mb-3")
    p.innerText = element.content

    articel.appendChild(h2)
    articel.appendChild(p)

    articel.classList.add("w-100", "p-3")
    articel.style.minHeight = "18vh"
    articel.style.backgroundColor = element.color
    articel.style.border = `solid 2px #a4a4a4`
    articel.style.borderRadius = "10px"

    div.appendChild(articel)
    div.classList.add("w-100", "p-2", "d-inline-block")
    articleContainer.appendChild(div)

    localStorage.setItem(`post_${index}`, JSON.stringify(element))
  });

  
}

inputForm.addEventListener("submit", (e) => {
  e.preventDefault()
  try {
    contentContainer.push(new Blog(titleInput.value, contentInput.value.split("\n"), colorInput.value))
  }
  catch (err) {
    alert(err)
  }
  finally {
    displayBlogs()
    titleInput.value = ""
    contentInput.value = ""
    colorInput.value = "#563d7c"
  }
})

displayBlogs()