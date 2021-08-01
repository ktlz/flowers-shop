const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
require('dotenv').config();

const {SENDER_EMAIL, SENDER_PASSWORD} = process.env;
console.log(SENDER_PASSWORD);
console.log(SENDER_EMAIL);

exports.sendOrderEmail = functions.firestore.document('orders/{docId}')
.onCreate((snap, ctx) => {
    const data = snap.data();

    let authData = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SENDER_EMAIL,
            pass: SENDER_PASSWORD
        }
    });

    authData.sendMail({
        from: "orders@kropflowers.com",
        to: "kropflowers@gmail.com",
        subject: 'You have new order',
        text: 'Example' 
    });
})