"use client";
import React, { useState } from "react";
import style from "@/style/contact.module.css";
import { database } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      form_name: formData.name,
      to_name: "Zephyre",
      reply_to: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_75hv915",
        "template_ey7qj0f",
        templateParams,
        "XoxXCd2l9_6rumw8j"
      );
      const timeId = new Date().getTime().toString();
      await setDoc(doc(database, "Form", timeId), formData);
      toast.success("Sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className={style.conatctForm}>
      <form className={style.formarea} onSubmit={handleSubmit}>
        <div className={style.upperfield}>
          <div className={style.inputfieldarea}>
            <label>Name</label>
            <input
              type='text'
              placeholder=''
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.inputfieldarea}>
            <label>Email</label>
            <input
              type='text'
              placeholder=''
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={style.inputfieldarea}>
          <label>Subject</label>
          <input
            type='text'
            placeholder=''
            name='subject'
            value={formData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.inputfieldarea}>
          <label>Message</label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button disabled={loading}>Send Message</button>
      </form>
      <Toaster />
    </div>
  );
};

export default ContactForm;
