const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const passport = require('passport');
const cookieSession = require("cookie-session");
const passportSetup = require('./config/passport-setup');

// Importing config files
// dotenv.config({ path: './config/config.env' });

// Enabling cross origin requests
const corsOptions = {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200,
    Credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}
app.use(cors(corsOptions));


// Enabling pre-flight reqeust across 
app.options('*', cors(corsOptions));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(cookieSession({
    name: 'session',
    maxAge: 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
}));

app.use(passport.initialize());
app.use(passport.session());

// Logging
if (process.env.NODE_ENV === "dev") {
    app.use(morgan("dev"));
}

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on("connected", () => {
    console.log("conneted to DB");
});
mongoose.connection.on("error", (err) => {
    console.log("err connecting", err);
});

// Importing models

// Importing routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server is running on", PORT);
});