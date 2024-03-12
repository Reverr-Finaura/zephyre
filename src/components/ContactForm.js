import React from "react";
import style from "@/style/contact.module.css";

const ContactForm = () => {
  return (
    <div className={style.conatctForm}>
      <form className={style.formarea}>
        <div className={style.upperfield}>
          <div className={style.inputfieldarea}>
            <label>Name</label>
            <input type='text' placeholder='' />
          </div>
          <div className={style.inputfieldarea}>
            <label>Email</label>
            <input type='text' placeholder='' />
          </div>
        </div>
        <div className={style.inputfieldarea}>
          <label>Subject</label>
          <input type='text' placeholder='' />
        </div>
        <div className={style.inputfieldarea}>
          <label>Message</label>
          <textarea></textarea>
        </div>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
