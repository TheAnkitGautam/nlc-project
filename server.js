const express = require('express');
const app = express();
const nodemailer = require("nodemailer");


app.get('/send', async (req, res) => {
    async function main() {

        let transporter = nodemailer.createTransport({
            pool: true,
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "a99gau@gmail.com",
                pass: "",
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let info = await transporter.sendMail({
            from: 'a99gau@gmail.com',
            to: "",
            bcc: "vasedik912@veb34.com",
            subject: "Hello Hari",
            text: "<h5>This is an test email send through gmail smtp by Ankit</h5><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            text:"Hello This is Ankit"
        });

        res.json(info).status(200);
    }
    main().catch(console.error);
})




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})