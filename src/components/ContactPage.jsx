import React, { useRef } from "react";

export default function ContactPage() {
  const messageRef = useRef();
  const emailRef = useRef();

  function BuildMailToLink(givenEmail, givenMessage) {
    // format body of email
    let bodyMessage = `Hi Elie,%0D%0A%0D%0A${givenMessage.current.value}%0D%0A%0D%0AYou can reach me at ${givenEmail.current.value}%0D%0A`;

    // insert good values into the given template
    const template = `mailto:ElieKabengele.Work@gmail.com?subject=Contact Me!&body=${bodyMessage}`;

    return template;
  }

  return (
    <section className="bg-primaryBgDark">
      <h1 className="smaller-heading text-slate-300">Contact</h1>
      <div className="font-light text-slate-500 text-center">
        <p>I'm free to contact using the resources down below</p>
        <div className="m-4 p-7 rounded bg-white flex flex-col gap-4 min-w-[300px] lg:min-w-[500px] ">
          <input
            type="email"
            id="email"
            name="email"
            class="block p-2.5 w-full text-sm rounded border-none bg-slate-100"
            placeholder="Your Email.."
            ref={emailRef}
          />
          <textarea
            id="message"
            rows="6"
            class="block p-2.5 w-full text-sm rounded border-none bg-slate-100"
            placeholder="Your message..."
            ref={messageRef}
          ></textarea>
        </div>
          <button
            type="button"
            class="text-white border-none duration-300 bg-slate-500 hover:bg-slate-700 focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            onClick={() => { window.location.href = BuildMailToLink(emailRef, messageRef)}}
          >
            Contact Me
          </button>
      </div>
    </section>
  );
}
