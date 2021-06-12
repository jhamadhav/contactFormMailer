const express = require("express")
const app = express()

// port infos
const port = process.env.PORT || 8000

// parser
app.use(express.static("public"))
app.use(express.json())

app.get("/", (request, response) => {
    response.sendFile(__dirname + "../public/index.html");
})

app.post("/sendMail", (req, res) => {
    console.log(req.body)
    res.json({ message: "success" })
})

// listen for requests :)
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

