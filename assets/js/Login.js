const USERS = [];
const newUser = class {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
};
const emailsec = document.querySelector("#email");
const passwordsec = document.querySelector("#password");
const submitsec = document.querySelector("#submit");
const toastLiveExample = document.getElementById('liveToast');
const toastLiveExample2 = document.getElementById('liveToast2');




let current = null;
document.querySelector("#email").addEventListener("focus", (e) => {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#password").addEventListener("focus", (e) => {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#submit").addEventListener("focus", (e) => {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});

console.log(USERS.length);
submitsec.addEventListener("click", (e) => {
  const user = new newUser(emailsec.value, passwordsec.value);
  if ((USERS.length == 0)) {
    USERS.push(user);
    window.localStorage.setItem('Users', JSON.stringify(USERS))
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
        setTimeout(() => {
            window.location.href = '../index.html'
        }, 1000);
  } else {
    window.localStorage.setItem('Users', JSON.stringify(USERS))
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
        toastBootstrap.show()
        setTimeout(() => {
          window.location.href = '../index.html'
      }, 1000);
  }
});


