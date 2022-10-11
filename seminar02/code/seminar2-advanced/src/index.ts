import express, { NextFunction, Request, Response } from "express";

const app = express(); 
const PORT = 3000;

app.use(express.json());

app.use("/api", require("./api")); 

app.listen(PORT, () => {
  console.log(`
        #############################################
            🛡️ Server listening on port: ${PORT} 🛡️
        #############################################
    `);
}); 
