require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = {

    mailer: (FIRST_NAME, LAST_NAME, USER_EMAIL, SUBJECT, TEXT) => {

        let transporter = nodemailer.createTransport({
            service: process.env.SMTPSERVICE,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });


        let mailOptions = {
            from: `My website <${process.env.EMAIL}>`,
            to: process.env.DESTINY,
            subject: `${SUBJECT}`,
            text: `You have received a new contact\n
                    From: ${FIRST_NAME} ${LAST_NAME}\n
                    Email: ${USER_EMAIL}\n
                    ${TEXT}`
        }


        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                console.log('Error Occurs', err);
            } else {
                console.log('Email sent!!!');
            }
        });

    }
}