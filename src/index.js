let sendMail = require("./mail");
let data = {
    toUser: "jhamadhav28@gmail.com",
    subject: "trial Mail",
    body: "hi there!"
}
sendMail(data);