import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    emailjs
  .send(
    "service_gt59r5k",    // Your EmailJS Service ID
    "template_0rlvc4e",   // Your EmailJS Template ID
    {
      from_name: form.name,
      to_name: "Ragavendra Raja J",
      from_email: form.email,
      to_email: "ragavendra.jagathish@gmail.com",
      message: form.message,
    },
    "8AmQ2f6H1VIgnQFC9" // Your EmailJS Public Key
  )
  emailjs
    .send(
      "service_gt59r5k",    // Your EmailJS Service ID
      "template_0rlvc4e",   // Your EmailJS Template ID
      {
       from_name: form.name,
       to_name: "Ragavendra Raja J",
       from_email: form.email,
       to_email: "ragavendra.jagathish@gmail.com",
       message: form.message,
      },
      "8AmQ2f6H1VIgnQFC9" // Your EmailJS Public Key
  )

  };

  return (
    <section id="contact" className="py-16">
      <motion.h1
        variants={slideIn("top", "tween", 0.2, 1)}
        className="text-center text-4xl font-bold mb-6"
      >
        Let's Connect
      </motion.h1>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 px-4">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="lg:w-1/2"
        >
          <p className="text-lg">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <a href={`mailto:${CONTACT.email}`} className="text-blue-400">{CONTACT.email}</a>
          <p className="mt-4">Made with ❤️ by @ragavendrarajajagathish</p>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="lg:w-1/2 bg-black-100 p-6 rounded-2xl"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-2"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 px-6 rounded-lg"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
