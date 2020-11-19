const casual = require("casual");

let city = casual.city;
let name = casual.name;
let country = casual.country;
let phone = casual.phone;
let address= casual.address
let month = casual.month_name;


console.log("Hello there "+name+"! \n"+"How was your trip to "+country+"? \n"+"Did you get to visit "+city+"? \n"+"I sure hope you had a wonderful time. \n"+"Is your phone number still "+phone+" ? \n"+"I will give you a call sometime. By the way, I want to send you a fresh loaf of bread at your address of: \n"+address+"\n"+"\n"+"Well, I will see you soon. I will be visiting sometime before "+month+". \n"+"Until then, farewell!");