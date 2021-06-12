const express = require("express")
const cors = require('cors')
const sendMail = require('./mail')
const app = express()

// port infos
const port = process.env.PORT || 8000

// parser
app.use(express.static("public"))
app.use(express.json())
app.use(cors())

app.get("/", (request, response) => {
    response.sendFile(__dirname + "../public/index.html");
})

app.post("/sendMail", async (req, res) => {
    // send an email to yourself
    let yourMail = {
        "toUser": req.body.yourEmail,
        "subject": req.body.subject,
        "body": req.body.body
    }
    console.log(yourMail);
    let yourMailRes = await sendMail(yourMail);

    // send a thank you email to user
    let userMail = {
        "toUser": req.body.userEmail,
        "subject": "Thank you for your feedback",
        "body": "Happy to know that you liked it"
    }
    console.log(userMail);
    let userMailRes = await sendMail(userMail)

    let resData = { mailToYou: yourMailRes, mailtoUser: userMailRes }
    console.log(resData)
    res.json(resData)
})

// listen for requests :)
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

