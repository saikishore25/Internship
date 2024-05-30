
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const app = express();
// app.use(express.json());

// app.use(cors());

// const corsOptions = {

//     origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
//   credentials: true, // Important for cookies

// };

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);


// app.post('/generate', async(req, res)=>{

//     const {prompt} = req.body;

//     try{

        
//             // For text-only input, use the gemini-pro model
//             const model = genAI.getGenerativeModel({ model: "gemini-pro"});
          
//             const result = await model.generateContent(prompt);
//             const response = await result.response;
//             const text = response.text();
//             // console.log(text);
//             res.send(text);
    

//     }

//     catch(error){

//         console.log(error);
//         res.status(500).send("Failed to Generate Content");


//     }
// })


// app.listen(9000, console.log("Server is Running"));

const mongoose = require('mongoose');
const { Conversation } = require('./mong');
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(express.json());

app.use(cors({
  origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
  credentials: true, // Important for cookies
}));

// Access your API key as an environment variable 
const genAI = new GoogleGenerativeAI(process.env.API_KEY);


app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
  console.log("Received User Input:", prompt);

    
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const newConversation = new Conversation({ // Create new conversation object
      userMessage: prompt,
      assistantMessage: text,
      timestamp: new Date(),
    });
  
    await newConversation.save();  // Save conversation to MongoDB


    res.send({ message: text }); // Send only generated text as JSON

  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to Generate Content");
  }

});


app.listen(9000, console.log("Server is Running"));
