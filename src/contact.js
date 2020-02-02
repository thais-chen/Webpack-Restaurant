 
const contactTab = () => {

    const content_div = document.getElementById('tab_content');


    const contactForm = document.createElement('form');
    contactForm.id = "contact"
   

    const contactH1 = document.createElement('h1');
    contactH1.innerText="Contact Us";
    content_div.appendChild(contactH1);
     
    const hLine =  document.createElement('hr');
    contactForm.appendChild(hLine);


   const nameLabel = document.createElement('label');
   nameLabel.textContent="Your Name: ";
   contactForm.appendChild(nameLabel);

   const nameInput = document.createElement('input');
   contactForm.setAttribute("type", "text")
   contactForm.appendChild(nameInput);
 

   const namebreak = document.createElement('br');
   contactForm.appendChild(namebreak);

   const numberLabel = document.createElement('label');
   numberLabel.textContent = "Phone Number: ";
   contactForm.appendChild(numberLabel);

   const numberInput = document.createElement('input');
   numberInput.setAttribute("type", "text")
   contactForm.appendChild(numberInput);

 
   const phonebreak = document.createElement('br');
   contactForm.appendChild(phonebreak);

   const messageLabel = document.createElement('label');
   messageLabel.textContent = "Your Message: "
   contactForm.appendChild(messageLabel);

   const messageInput = document.createElement('textarea');
   contactForm.appendChild(messageInput)

   const submit = document.createElement('input');
   submit.setAttribute("type", "submit");
   submit.setAttribute("value", "Submit")
   contactForm.appendChild(submit);



   content_div.appendChild(contactForm)


}
export {contactTab}