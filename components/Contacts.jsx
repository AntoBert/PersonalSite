import { useEffect, useState } from "react";
import styles from "../styles/Contacts.module.css";
/* const nodemailer = require("nodemailer");
const {google} = require("googleapis"); */


const Contacts = () => {

    const [text, setText] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");

    /* const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN);
    oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});  */


    async function sendMail(e){
        try {

            e.preventDefault();

            const formData = {email: email, subject: subject, text: text};

            fetch("/api/mail",{
                method:"post",
                body: JSON.stringify(formData)
            })


            /* const accessToken = await oAuth2Client.getAccessToken();

            const transport = nodemailer.createTransport({
                service:"gmail",
                auth: {
                    type: "OAuth2",
                    user: "@gmail.com",
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                }
            })

            const mailOptions = {
                from: email,
                to: '@gmail.com',
                subject: subject,
                text: text
            };

            const result = await transport.sendMail(mailOptions); */
            e.target.reset();
            return result;

        } catch (error) {
            return error
        }
    }

    return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Contattami per ulteriori informazioni</h2>
            <form method="post" className={styles.form} onSubmit={sendMail}>
                <input className={styles.input} placeholder="Email" onChange={e => setEmail(e.target.value)} required/>
                <input className={styles.input} placeholder="Oggetto" onChange={e => setSubject(e.target.value)} />
                <textarea className={styles.textarea} rows={6} required onChange={e => setText(e.target.value)} />
                <button className={styles.button}>INVIO</button>
            </form>
        </div>
    </div>
    )
}

export default Contacts