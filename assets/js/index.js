const caroImg1 = document.getElementById('caroImage1');
const caroImg2 = document.getElementById('caroImage2');
const caroText1 = document.getElementById('caroText1');
const caroText2 = document.getElementById('caroText2');
const loginLink = document.getElementById('loginLink');
const postLink = document.getElementById('postLink');
const postCaptcha = document.getElementById('postCaptcha');
const loginCaptcha = document.getElementById('loginCaptcha');
const profile = document.getElementById('userprofile');




const isLogin = JSON.parse(window.localStorage.getItem("Users"));

if (isLogin === null) {
    profile.innerText = `GUEST`
} else {
    let username = isLogin[0].email
    profile.innerText = `${username.toUpperCase()}`

}

caroImg1.addEventListener('mouseenter' , () => {
    caroText1.classList.remove('d-none')
})
caroImg1.addEventListener('mouseleave' , () => {
    caroText1.classList.add('d-none')
    
})
caroImg2.addEventListener('mouseenter' , () => {
    caroText2.classList.remove('d-none')

})
caroImg2.addEventListener('mouseleave' , () => {
    caroText2.classList.add('d-none')

})

let num1 = Math.random()*10
let num2 = Math.random()*10

let captcha1 = Math.round(num1)
let captcha2 = Math.round(num2)
let sum = captcha1 + captcha2


loginCaptcha.innerHTML= `
<h3>verify that you are human </h3>
<p> what is ${captcha1} plus ${captcha2} : </p>
<input class="captcha text-dark text-center " type="text" placeholder="   type answer here ... " id="inputAnswer">
<button class="btn btn-outline-warning mt-2" id="submitAns">Submit</button>

`;
const inputAnswer = document.getElementById('inputAnswer')
 
const submitAns = document.getElementById('submitAns')


    submitAns.addEventListener("click" , (e) => {
    
        e.preventDefault()
        if (inputAnswer.value == sum ) {
            const loginSubmit = document.getElementById('loginSubmit');
            loginSubmit.classList.replace("btn-danger", "btn-success");
            loginSubmit.innerText="Virfy success!";
            window.localStorage.clear();
            setTimeout(() => {
                window.location.href='./pages/Login.html';
            }, 400);
        }
    } )

postCaptcha.innerHTML= `
<h3>verify that you are human </h3>
<p> what is ${captcha1} plus ${captcha2} : </p>
<input class="captcha text-dark text-center " type="text" placeholder="   type answer here ..." id="inputAnswer1">
<button class="btn btn-outline-warning mt-2" id="submitAns1">Submit</button>

`;
const inputAnswer1 = document.getElementById('inputAnswer1')
 
const submitAns1 = document.getElementById('submitAns1')

submitAns1.addEventListener("click" , (e) => {

    e.preventDefault()
    if (inputAnswer1.value == sum ) {
        const postSubmit = document.getElementById('postSubmit');
        postSubmit.classList.replace("btn-danger", "btn-success");
        postSubmit.innerText="Verify success!";
        setTimeout(() => {
            window.location.href='./pages/post.html';
        }, 400);
    }
} )
