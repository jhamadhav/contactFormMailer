const createEmailData = (user) => {
    let data = {}
    data.yourEmail = "jhamadhav28@gmail.com"
    data.subject = `Feedback from : ${user.name}`
    data.body = `Email : ${user.email}\nMessage : ${user.message}`
    data.userEmail = user.email
    return data
}

const callMailAPI = async (data) => {
    const url = '/sendMail'
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json();
}

window.onload = () => {
    let submitBtn = document.getElementById("submit-btn")
    let user = {}
    submitBtn.onclick = async () => {
        user = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        let data = createEmailData(user)
        let response = await callMailAPI(data)
        console.log(response)
    }
}