// file ini digunakan untuk mengurus business logic
// file ini digunakan untuk mengelola data seperti create, read, update, etc.

class User{

  constructor() {
    this.users = this.getUsers() || [];

  }

  saveUser(userData){
    const newUser = {
      id: Date.now(),
      ...userData,
    };
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));

    //return window.location.href = '../signin.html';

    return {
      success: true,
    };

    //console.log(userData);
  }

  signInUser(usernameByInput){

    // udah ga pake console log lagi
    // console.log(username);

    //Proses pemeriksaan data username pada localstorage
    const userExists = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());

    if(userExists){

    // proses pengambilan data ke signIn.js controller
    return {
      success: true,
      username,
    };
    }
    else{
      return {
        success: false,
        message: 'Data tidak ditemukan',
      };
    }

    // proses pengambilan data ke signIn.js controller
    return {
      success: true,
      username,
    };
  }

  getUsers(){
    return JSON.parse(localStorage.getItem('users')) || [];
  }
}