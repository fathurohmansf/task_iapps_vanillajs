// file ini untuk penghubung antara UI  HTML dan model User

document.addEventListener('DOMContentLoaded', () => {

  const userForm = document.getElementById('userForm');
  const userManager = new User();

  userForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const usernameByInput = document.getElementById('username').value;

    const result = userManager.signInUser(usernameByInput);

    if (result.success){
      //hapus jadi ga kepake hanya notif aja
      //alert('success logined' + result.username);
      return window.location.href = '../tasks.html';
    }
    else{
      console.log(result.message);
    }

  });

});