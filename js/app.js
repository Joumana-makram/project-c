let container = document.querySelectorAll("section");
let navArray = [];
let naveMenu = document.getElementsByClassName("navbar__menu");
let ul = document.getElementById("navbar__list");
let li;
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let comment = document.querySelector("#comment");
let commentForm = document.querySelector("#comments");
let emailRegex = /@/g;
let userName;
let userEmail;
let userComment;
let navElements = document.getElementsByClassName("menu__link");
let main = document.querySelector("main");
let sections = document.createElement("div");
let liActive;

// list item
container.forEach((i) => {
  navArray.push(i);
  sections.append(i);
});

// nav list
navArray.forEach((i) => {
  li = document.createElement("li");
  li.innerHTML = `<a class="menu__link" href="#${i.id}" id="${i.id}Li">${i.id}</a>`;
  ul.appendChild(li);
});

ul.addEventListener("click", (e)=>{
  e.preventDefault()
  document.getElementById(e.target.innerText).scrollIntoView({behavior: "smooth"})
})
main.append(sections);

document.addEventListener("scroll", () => {
  container.forEach((section) => {
    if (5 > Math.floor(section.getBoundingClientRect().top) > 0) {
      navArray.forEach((li) => {
        
        let x = document.getElementById(`${li.id}Li`)
        
        if (x.getAttribute("href") == `#${section.id}`) {
          x.classList.add("navbar__menu__active");
        }
        else{
          x.classList.remove("navbar__menu__active");
        }
      });
      section.classList.add("active");
    } else {
      section.classList.remove("active");
      // liActive.classList.remove("navbar__menu__active");
    }
  });
});

// comment
function submit() {
  if (name.value && email.value.match(emailRegex) != null && comment.value) {
    userComment = document.createElement("p");
    userComment.textContent = comment.value;
    userComment.classList.add("textarea");
    userName = document.createElement("h5");
    userName.innerHTML = name.value;
    userName.classList.add("name");
    userEmail = document.createElement("p");
    userEmail.textContent = email.value;
    userName.classList.add("email");
    let commentSection = document.createElement("div");
    commentSection.innerHTML = userComment.innerText;
    commentSection.innerHTML += "</br>" + userName.outerHTML;
    commentSection.innerHTML += "</br>" + userEmail.innerText;
    commentSection.classList.add("comment");
    commentForm.prepend(commentSection);
    name.value = null;
    email.value = null;
    comment.value = null;
  } else if (name.value && email.value.match(emailRegex) != null) {
    window.alert("Your comment is empty");
  } else if (email.value.match(emailRegex) != null && comment.value) {
    window.alert("You forgot to write your name");
  } else if (name.value && comment.value) {
    window.alert("Your email is invalid");
  } else {
    window.alert("check your input again please");
  }
}
