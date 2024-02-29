const express = require("express");
const app = express();
const port = 7865;

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.send("Welcome to the payment system");
});

app.get("/cart/:id(\\d+)", (req, res) => {
    const cartId = req.params.id;
    res.send(`Payment methods for cart ${cartId}`);
});
app.get("/available_payments", (req, res) => {
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false,
        },
    });
});
app.post("/login", express.json(), (req, res) => {
    const { userName } = req.body;
    res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});
