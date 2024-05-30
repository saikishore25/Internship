
const more_button = document.querySelector(".more")
console.log(more_button);

const matter = document.querySelector(".more p");
// console.log(matter.innerHTML)


const opt5 = document.querySelector(".opt5")
const opt6 = document.querySelector(".opt6")
const opt7 = document.querySelector(".opt7")

console.log(opt5, opt6, opt7);







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


async function sendMessage(message){

    try {

      updateChat(message, 'user')
      const response = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });
  
      
      if (!response.ok) {
        console.error('Error:', response.statusText);
        return;
      }
  
      const data = await response.json();
      updateChat(data.message, 'assistant');
    } catch (error) {
      console.error('Error:', error);
    }
    
  }
  
  const chatgp1t = document.querySelector(".chat-gpt");
  console.log(chatgp1t) 

  function updateChat(message, sender) {
    const chatContainer = chatgp1t.querySelector(".dummy")
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);

    if(sender === 'user'){

      messageElement.classList.add('user-message');

    } 

    else if(sender === 'assistant'){

      messageElement.classList.add('assistant-message');
      
    }

  chatContainer.appendChild(messageElement);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.querySelector('.search-gpt input');
    const sendButton = document.querySelector('.search-gpt svg');

    let chat_history = document.querySelector(".chatgpt-history");
  
    sendButton.addEventListener('click', () => {
      const message = userInput.value;
      if (message.trim() !== '') {

        let chat = document.createElement("div");
        console.log(chat);
        chat.classList.add("chat-gpt-div");
        chat_history.append(chat);
        let para = document.createElement("p");
        let image = document.createElement("img");
        image.src=`SVGS\\chathistory.svg`;
        para.innerHTML = message;
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
          chat.classList.add("chat-gpt-div");
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
      }
    });

  });
  