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

const sendMail = (data) => {
    let mailOptions = {
        from: process.env.user,
        to: data.toUser,
        subject: data.subject,
        html: data.body
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
