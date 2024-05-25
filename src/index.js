import dotenv from "dotenv";
import conectinDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path : './env'
});

conectinDB() 

.then(()=>{
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`server is connect port , ${process.env.PORT}`);
    });
})
.catch((error)=>{
    console.log("mongodb contection faild !!!", error);
})
