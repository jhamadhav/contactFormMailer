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

const sendMail = async (data) => {
    let mailOptions = {
        from: process.env.user,
        to: data.toUser,
        subject: data.subject,
        html: data.body
    };
    let res = await transporter.sendMail(mailOptions)

    if (res.rejected.length != 0) {
        return false
    }
    return true
}

module.exports = sendMail;
