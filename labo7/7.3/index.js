import papaparse from "papaparse";

let csvstring = "first_name;last_name;email;Tom;Peeters;tom.peeters@ap.be;Tim;Dams;tim.dams@ap.be;Test;Test;Test@test.be";

let json = papaparse.parse(csvstring);

console.log(json);