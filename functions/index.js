const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
require('dotenv').config();

const {SENDER_EMAIL, SENDER_PASSWORD} = process.env;

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
        text: getOrderEmailText(data)
    });
})

function getOrderEmailText(data) {
    var html = [];

    let orderItemsString = data.orderItems.map(
        oi => `Название ${oi.product.name} \t Цена ${oi.product.price} \t Количество ${oi.quantity} \n`
    ).join("");

    html.push(
      `Имя ${data.name} \n`,
      `Телефон ${data.phone} \n`,
      `Адрес ${data.address} \n`,
      `Заметки ${data.notes} \n`,
      `Заказ \n`,
      orderItemsString
    );

    return html.join("");
}

exports.sendContactRequest = functions.firestore.document('contactRequests/{docId}')
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
        from: "contacts@kropflowers.com",
        to: "kropflowers@gmail.com",
        subject: 'You have new contact request',
        text: getContactRequestEmailText(data)
    });
})

function getContactRequestEmailText(data) {
    var html = [];

    html.push(
      `Имя ${data.name} \n`,
      `Email ${data.email} \n`,
      `Question ${data.question} \n`
    );

    return html.join("");
}