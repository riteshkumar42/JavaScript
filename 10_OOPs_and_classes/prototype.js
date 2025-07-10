let username = 'Ritesh   '
console.log(username.length);

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

username.trueLength()
'Coffee aur code    '.trueLength()