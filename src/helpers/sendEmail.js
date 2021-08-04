function sendOneEmail(o){
  const main = async () => {
    await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(o),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      });
  };
  main();
};

function sendEmail(contactData){
  sendToClientEmail(contactData);
  sendToBusinessEmail(contactData);
}

function sendToClientEmail(contactData){
  const {contactEmail, contactName} = contactData;
  const emailData = {
    toAddress: `${contactEmail}`,
    emailSubject: `Thank You for Contacting Peck Web Development`,
    emailText: `Hello ${contactName},\nThank you for reaching out to the team at Peck Web Development regarding your website needs! We will review your message and get in touch with you soon.\n\nThanks again!\n\nJeremiah Peck\nLead Developer\n707-799-7894\njpeck@peck-web.com\n\nPeck Web Development\nGualala, California`
  };
  sendOneEmail(emailData);
};

function sendToBusinessEmail(contactData){
  const {contactEmail, contactName, contactMessage, contactPhone, contactSubject} = contactData;
  const emailData = {
    toAddress: `jpeck@peck-web.com`,
    emailSubject: `${contactSubject}`,
    emailText: `Contact Name: ${contactName}\nContact Email Address: ${contactEmail}\nContact Phone: ${contactPhone}\nContact Message: ${contactMessage}`
  };
  sendOneEmail(emailData);
};


export default sendEmail;