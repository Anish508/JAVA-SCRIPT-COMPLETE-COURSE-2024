const user = {
  _email: "ani@gmail.com",
  _password: "anish@8173$",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const userData = Object.create(user)
console.log(user.email);