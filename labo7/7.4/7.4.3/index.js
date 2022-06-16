const maths = require("./maths.js");
  
process.stdout.write("Wat is uw naam");
process.stdin.on("data", (lname) => {
    lname = lname.toString().trim();

    process.stdout.write("Wat is uw voornaam");
    process.stdin.on("data", (fname) => {
        fname = fname.toString().trim();

        console.log(fname +  " " + lname);
    });
})