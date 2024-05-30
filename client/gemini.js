
// async function sendMessage(message) {
//   try {
//     updateChat(message, 'user');

//     const response = await fetch('http://localhost:9000/generate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ prompt: message }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error('Error:', errorData.error);
//       return;
//     }

//     const data = await response.json();
//     updateChat(data.message, 'assistant');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }


// const chatgp1t = document.querySelector('.chat-gemini');

// function updateChat(message, sender) {
//   const chatContainer = chatgp1t.querySelector('.dummy');
//   const messageElement = document.createElement('div');
//   messageElement.textContent = message;

//   if (sender === 'user') {
//     messageElement.classList.add('user-message');
//   } else if (sender === 'assistant') {
//     messageElement.classList.add('assistant-message');
//   }

//   chatContainer.appendChild(messageElement);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const userInput = document.querySelector('.search-gemini input');
//   const sendButton = document.querySelector('.search-gemini svg');

//   sendButton.addEventListener('click', () => {
//     const message = userInput.value;
//     if (message.trim() !== '') {
//       sendMessage(message);
//       userInput.value = '';
//     }
//   });

//   userInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//       const message = userInput.value;
//       if (message.trim() !== '') {
//         sendMessage(message);
//         userInput.value = '';
//       }
//     }
//   });
// });



const chatgpt = document.querySelector(".opt3 p");
// console.log(chatgpt)

chatgpt.addEventListener("click", ()=>{

    window.location.href = "http://127.0.0.1:5500/client/chatgpt.html";

})




const gemini = document.querySelector(".opt2 p");
console.log(gemini)

gemini.addEventListener("click", ()=>{

    window.location.href = "http://127.0.0.1:5500/client/gemini.html";

})
async function sendMessage(message) {
  try {
    updateChat(message, 'user');

    const response = await fetch('http://localhost:9000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: message }),

    });

    if (!response.ok){
      console.error('Error:', await response.text()); // Log error message
      return;

    }

    const data = await response.json(); // Parse response as JSON
    updateChat(data.message, 'assistant');
  } catch (error) {
    console.error('Error:', error);
  }


}

const chatgp1t = document.querySelector('.chat-gemini');

function updateChat(message, sender) {
  const chatContainer = chatgp1t.querySelector('.dummy');
  const messageElement = document.createElement('div');
  messageElement.textContent = message;

  if (sender === 'user') {
    messageElement.classList.add('user-message');
  } else if (sender === 'assistant') {
    messageElement.classList.add('assistant-message');
  }

  chatContainer.appendChild(messageElement);

}

document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.querySelector('.search-gemini input');
  const sendButton = document.querySelector('.search-gemini svg');
  let chat_history = document.querySelector(".gemini-history");
  
  



  

  sendButton.addEventListener('click', () => {
    const message = userInput.value;
    if (message.trim() !== '') {
      

      let chat = document.createElement("div");
      console.log(chat);
      chat.classList.add("chat-gemini-div");
      chat_history.append(chat);
      let para = document.createElement("p");
      let image = document.createElement("img");
      image.src=`SVGS\\chathistory.svg`;
      chat.append(image);
      para.innerHTML = message;
      chat.append(para);


      sendMessage(message);
      userInput.value = '';
    }
  });
  
  userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {


      const message = userInput.value;
      if (message.trim() !== '') {

        let chat = document.createElement("div");
        console.log(chat);
        chat.classList.add("chat-gemini-div");
        chat_history.append(chat);
        let para = document.createElement("p");
        let image = document.createElement("img");
        // console.log(image);
        image.src=`SVGS\\chathistory.svg`;
        chat.append(image);
        para.innerHTML = message;
        chat.append(para);
        // console.log(para.innerHTML)
        // console.log(message)
        sendMessage(message);
        userInput.value = '';
      }
    }
  });
});
