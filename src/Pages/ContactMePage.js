import React, { useRef } from "react";
import TSParticles from "react-tsparticles";
import axios from "axios";

const ContactMePage = () => {

    const NameBox = useRef("none")
    const MailBox = useRef("none")
    const PhoneBox = useRef("none")
    const SubjectBox = useRef("none")
    const MessageBox = useRef("none")

    const HandleSubmitForm = e => {
        e.preventDefault()
        
        const info = {
          name: NameBox.current.value,
          email: MailBox.current.value,
          phone: PhoneBox.current.value,
          subject: SubjectBox.current.value,
          message: MessageBox.current.value,
        }

        axios.post("/Submits/add", info)
          .then(res => {

            if (res.data === "added"){
              console.log("Submit Forms Sent")

              NameBox.current.value = ""
              MailBox.current.value = ""
              PhoneBox.current.value = ""
              SubjectBox.current.value = ""
              MessageBox.current.value = ""

              alert("Your Info has been Send, you will be hearing from us soon")

            } else {
              console.log("thingy")
            }

          })
          .catch(err => console.log(err))
    }

    return (
      <div className="ContactMePage">
        <div className="SocialMediaBox">
          
          <TSParticles
            id="tsparticles"
            options={{
              background: {
                color: {
                  value: "#060316",
                  // value: "#7B67E8",
                },
              },
              fpsLimit: 60,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 25,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />

          <a
            href="https://twitter.com/Keybot5716"
            target="_newtab"
            className="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            target="_newtab"
            href="https://www.facebook.com/keybot.first/"
            className="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a
            target="_newtab"
            href="https://www.instagram.com/keybothgo/"
            className="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            target="_newtab"
            href="https://www.youtube.com/channel/UC-lLmy638wv2j0RXUi5pcJA/videos"
            className="Youtube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
        </div>

        <div className="MailFormsBox">
          <h1>Send Us your Info!</h1>

          <form>
            <div className="nameBox">
              <input
                placeholder="Your Name"
                type="text"
                name="something"
                ref={NameBox}
              ></input>
            </div>
            <div className="mailBox">
              <input
                placeholder="Your Mail"
                type="email"
                name="something"
                ref={MailBox}
              ></input>
            </div>
            <div className="phoneBox">
              <input
                placeholder="Your Phone Number"
                type="text"
                name="something"
                ref={PhoneBox}
              ></input>
            </div>
            <div className="subjectBox">
              <input
                placeholder="The Subject"
                type="text"
                name="something"
                ref={SubjectBox}
              ></input>
            </div>
            <div className="messageBox">
              <input ref={MessageBox} placeholder="Message" type="text" name="something"></input>
            </div>
            <div className="submitBox">
              <input onClick={HandleSubmitForm} type="submit" name="something"></input>
            </div>
          </form>
        </div>
      </div>
    );
}

export default ContactMePage;