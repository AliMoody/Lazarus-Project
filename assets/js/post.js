const loginCaptcha = document.getElementById("loginCaptcha");
let num1 = Math.random() * 10;
let num2 = Math.random() * 10;

let captcha1 = Math.round(num1);
let captcha2 = Math.round(num2);
let sum = captcha1 + captcha2;

loginCaptcha.innerHTML = `
<h3>verify that you are human </h3>
<p> what is ${captcha1} plus ${captcha2} : </p>
<input class="captcha text-dark text-center " type="text" placeholder="   type answer here ... " id="inputAnswer">
<button class="btn btn-outline-warning mt-2" id="submitAns">Submit</button>

`;
const submitAns = document.getElementById("submitAns");
submitAns.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputAnswer.value == sum) {
    const loginSubmit = document.getElementById("loginSubmit");
    loginSubmit.classList.replace("btn-danger", "btn-success");
    loginSubmit.innerText = "Virfy success!";
    window.localStorage.clear();
    setTimeout(() => {
      window.location.href = "./login.html";
    }, 400);
  }
});

const POSTS = [
  {
    id: 1,
    name: "lorem1",
    description: "its lorem for post 1 ",
    image: "../assets/media/jasper-wilde-GQSNmxmlgnQ-unsplash.jpg",
  },
  {
    id: 2,
    name: "lorem2",
    description: "its lorem for post 2",
    image: "../assets/media/jasper-wilde-GQSNmxmlgnQ-unsplash.jpg",
  },
  {
    id: 3,
    name: "lorem3",
    description: "its lorem for post 3",
    image: "../assets/media/jasper-wilde-GQSNmxmlgnQ-unsplash.jpg",
  },
];

const postSection = document.getElementById("posts");

postSection.innerHTML = `
  ${POSTS.map((el) => {
    return `
    <li key="${el.id}" >
    <div class="card custom-card bg-transparent text-center text-light" style="width: 18rem;">
  <img src="${el.image}" class="card-img-top" alt="${el.name}">
  <div class="card-body">
    <p class="card-text">${el.description}</p>
  </div>
</div>
    </li>`;
  }).join('')}
    `;
