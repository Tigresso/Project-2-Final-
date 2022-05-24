
import React, { useState } from "react";

const Contact= () => {
     const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
       setTimeout(() => {
      setSubmitted(true);
        });
      };
    
      if (submitted) {
       return (
        <>
        <div className="thank-you">Thank you!</div>
      <div className="contact-soon">We'll be in touch soon.</div>
   </>
 );
 }

  return (
    <form
    onSubmit={handleSubmit}
    >
        <h1 class="Middle-container">Contact Me</h1>
      
      <div className="links-pages"> 
        <div className="linktree"> 
        <a
          className="linkt"
          href="https://linktr.ee/Keotarts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My linktree!
        </a>
        </div>

        <div className="instagram"> 
        <a
          className="insta"
          href="https://www.instagram.com/keotarts/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My Instagram!
        </a>
        </div>
      
        <div className="youtube"> 
        <a
          className="utube"
          href="https://www.youtube.com/channel/UCprzW6KM9GcoXy4hPVVYD0Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My Youtube!
        </a>
        </div>

        <div className="twitter"> 
        <a
          className="twit"
          href="https://twitter.com/KEOTARTS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My Twitter!
        </a>
        </div>

        </div>
      <div className="contact-container1">

        <input
          type="text"
          placeholder="Name"
          name="name"
          required
        />
      </div>

      <div className="contact-container2">
        <textarea
          placeholder="Message"
          name="message"
          required
        />
      </div>
      
      <div className="contact-container3">
        <form2 onsubmit="console.log('You clicked submit.'); return false">
            <button type="submit">Submit</button>
        </form2>
      </div>
    </form>
  );
};

export default Contact;