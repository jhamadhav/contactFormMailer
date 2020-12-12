const dotenv = require('dotenv').config({ path: __dirname + "/../.env" });
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.user,
        pass: process.env.pass
    }
});

const sendMail = (toUser) => {
    let mailOptions = {
        from: process.env.user,
        to: toUser,
        subject: 'Sending Email using Node.js',
        html: `<h1>Hello Mail</h1>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendMail;

