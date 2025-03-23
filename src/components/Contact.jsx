import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus("Sending...");

    emailjs
      .sendForm(
        "service_gt59r5k", // Your EmailJS Service ID
        "template_0rlvc4e", // Your EmailJS Template ID
        formRef.current,
        "8AmQ2f6H1VIgnQFC9", // Your EmailJS Public Key
      )
      .then(
        (response) => {
          setFormStatus("Message sent successfully!");
        },
        (error) => {
          setFormStatus("Failed to send message. Please try again.");
          console.error("❌ EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-16">
      <div className="border-b border-neutral-900 pb-20">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="my-10 text-center text-4xl"
        >
          Let's Connect
        </motion.h1>
        <div className="flex flex-col lg:flex-row justify-between max-w-6xl mx-auto px-4">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="text-center lg:text-left">
              <motion.a
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="my-4 block text-white-800"
                href="https://maps.app.goo.gl/eyMWWosEkp7UiMZU6"
                target="_blank"
                rel="noopener noreferrer"
              >
                {CONTACT.address}
              </motion.a>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="my-4 text-white-800"
              >
                {CONTACT.phoneNo}
              </motion.p>
              <motion.a
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                href={`mailto:${CONTACT.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="my-4 block text-white-800"
              >
                {CONTACT.email}
              </motion.a>
              <motion.h6
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left mt-4 text-white-500"
              >
                Made with ❤️ by @ragavendrarajajagathish
              </motion.h6>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full border border-purple-300 rounded-lg bg-transparent text-purple-300 px-4 py-2 font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-purple-100 hover:text-purple-800"
                  placeholder="Enter your name"
                  required
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full border border-purple-300 rounded-lg bg-transparent text-purple-300 px-4 py-2 font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-purple-100 hover:text-purple-800"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <textarea
                  name="message"
                  rows="4"
                  className="mt-1 block w-full border border-purple-300 rounded-lg bg-transparent text-purple-300 px-4 py-2 font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-purple-100 hover:text-purple-800"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                type="submit"
                className="mr-2 rounded-lg border-2 border-purple-300 bg-transparent text-purple-300 px-4 py-2 text-xs font-medium shadow-md hover:bg-purple-100 hover:text-purple-800"
              >
                Get in Touch
              </motion.button>
            </form>
            {formStatus && <p className="mt-4 text-center text-white-800">{formStatus}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
