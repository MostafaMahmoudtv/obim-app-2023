import { useHMSActions } from "@100mslive/react-sdk";
import React, { useState, useRef, useEffect } from "react";
import "./meeting.css";
import emailjs from "@emailjs/browser";

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hny7ic5",
        "template_er7yyje",
        form.current,
        "U4U6Z69v3faLoaCf5"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    setsentEmail(false);
  };

  useEffect(() => {
    console.log(form.current);
  }, []);

  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: "",
  });
  const [sentEmail, setsentEmail] = useState(true);

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hmsActions.join({
      userName: inputValues.name,
      authToken: inputValues.token,
    });
  };

  return (
    <>
    <div className="text-center mt-4">

    <span className={`ms-4 p-3 rounded border ${sentEmail ? 'border-5' : 'border-0'} ` } onClick={() => setsentEmail(true)}>ليس لدي موعد مسبق</span>
    <span className={`ms-4 p-3 rounded border ${!sentEmail ? 'border-5' : 'border-0'} ` } onClick={() => setsentEmail(false)}> لدي موعد مسبق</span>
    </div>
      {sentEmail ? (
        <form className="meeting" ref={form} onSubmit={sendEmail}>
          <p style={{ color: "white" }}>
            قم بإرسال بريدك الإلكتروني لتحصل على الرمز التعريفي الخاص بك
            للأنضمام للمحادثة
          </p>
          <div className="input-container">
            <label>الاسم</label>
            <input type="text" name="user_name" />
            <label>البريد الإلكتروني</label>
            <input type="email" name="user_email" />
            <label className="mt-3">اختيار الطبيب:  </label>
            <select className="d-block w-100 mt-4" name="user_select">
              <option value='طبيب نفسي'>طبيب نفسي</option>
              <option value='طبيب استشاري'>طبيب استشاري</option>
            </select>
            <input className="btn-primary mt-3" type="submit" value="إرسال" />
          </div>
        </form>
      ) : (
        <form className="meeting" onSubmit={handleSubmit}>
          <p style={{ color: "white" }}>
            قم بإدخال الرمز التعريفي الذي تم إرساله على بريدك الإلكتروني ، إذا
            لم تعثر عليه قم بإعادة تحميل الصفحة{" "}
          </p>
          <h2>الأنضمام إلى الإجتماع</h2>
          <div className="input-container">
            <input
              required
              value={inputValues.name}
              onChange={handleInputChange}
              id="name"
              type="text"
              name="name"
              placeholder="الاسم"
            />
          </div>
          <div className="input-container">
            <input
              required
              value={inputValues.token}
              onChange={handleInputChange}
              id="token"
              type="text"
              name="token"
              placeholder="رمز التعريف الخاص بك"
            />
          </div>
          <button className="btn-primary">الأنضمام</button>
        </form>
      )}
    </>
  );
}

export default Join;