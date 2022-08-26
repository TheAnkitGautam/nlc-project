const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const passport = require('passport');
const expressSession = require("express-session");
require('./config/passport-setup');
const mongoStore = require('connect-mongo');

// Enabling cross origin requests
var whitelist = ['http://example1.com', 'http://example2.com']
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


// Enabling pre-flight reqeust across 
app.options('*', cors(corsOptions));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(expressSession({
    secret: process.env.COOKIE_KEY,
    resave: false,
    saveUninitialized: false,
    httpOnly: true,
    cookie: {
        maxAge: 60 * 60 * 1000,
    },
    store: mongoStore.create({
        mongoUrl: process.env.LOCAL_MONGO_URI,
        collection: 'sessions',
        autoRemove: 'interval',
        autoRemoveInterval: 10
    }),
}));

app.use(passport.initialize());
app.use(passport.session());

// Logging
if (process.env.NODE_ENV === "dev") {
    app.use(morgan("dev"));
}

// Database Connection
mongoose.connect(process.env.LOCAL_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on("connected", () => {
    console.log("conneted to DB");
});
mongoose.connection.on("error", (err) => {
    console.log("err connecting db");
});

// Importing routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/userAuthRoutes"));
app.use("/user", require("./routes/userRoutes"));
app.use("/admin", require("./routes/adminRoutes"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server is running on", PORT);
});