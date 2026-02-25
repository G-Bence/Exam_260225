import Blog from "./Blog";

const titleInput = document.getElementById("titleInput") as HTMLInputElement
const contentInput = document.getElementById("contentInput") as HTMLTextAreaElement
const colorInput = document.getElementById("colorInput") as HTMLSelectElement
const articleContainer = document.getElementById("articleContainer") as HTMLElement
const inputForm = document.getElementById("inputForm") as HTMLFormElement

let contentContainer: Blog[] = [new Blog("I love pigeons", "They are so adorable", "#ffffff"), new Blog("Spotify 4ever!", "I listenig to music right now =)", "#1DB954")]

displayBlogs()

function displayBlogs() {
  articleContainer.innerHTML = ""

  contentContainer.forEach(element => {
    const div = document.createElement("div")
    const articel = document.createElement("article")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")

    h2.innerText = element.title
    p.innerText = element.content

    articel.appendChild(h2)
    articel.appendChild(p)

    articel.classList.add("w-100", "p-2")
    articel.style.minHeight = "15vh"
    articel.style.backgroundColor = element.color
    articel.style.border = `solid 2px #88d4ff`
    articel.style.borderRadius = "10px"

    div.appendChild(articel)
    div.classList.add("col-sm-6", "p-2")
    articleContainer.appendChild(div)
  });
}

inputForm.addEventListener("submit", () => {
  try {
   contentContainer.push(new Blog(titleInput.value, contentInput.value, colorInput.value))
    titleInput.value = ""
    contentInput.value = ""
    colorInput.value = ""
  }
  catch (err) {
    alert(err)
  }

  displayBlogs()
})