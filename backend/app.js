import express from "express"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

import errorMiddleware from "./middleware/error.js"
// import fileUpload from "express-fileupload"

app.use(express.json());
app.use(cookieParser());//()bohot jaruri hai mt bhulna
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(fileUpload());

// Route Imports
import product from "./routes/productRoute.js"
import user from "./routes/userRoute.js"

import order from "./routes/orderRoute.js"

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
//middleware 
app.use(errorMiddleware);
export default app;
