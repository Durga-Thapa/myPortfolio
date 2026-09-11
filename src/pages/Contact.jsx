import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { alert, showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState(false);

  const [currentAnimation, setCurrentAnimation] = useState("idle");

  // Handle form input changes
  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Fox animation
  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,

          to_name: "Durga Thapa",
          to_email: "durgaathapa25@gmail.com",

          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);

          showAlert({
            show: true,
            text: "Thank you! Your message has been sent successfully 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
            setCurrentAnimation("idle");

            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          console.error("Email sending failed:", error);

          setLoading(false);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "Sorry, I didn't receive your message. Please try again 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {/* Alert */}
      {alert.show && <Alert {...alert} />}

      {/* Contact Form Section */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <p className="mt-4 text-slate-500">
          Have a project idea, job opportunity, or want to work together?
          Feel free to send me a message!
        </p>

        {/* Contact Information */}
        <div className="mt-5 flex flex-col gap-3 text-slate-600">
          {/* Email */}
          <p>
            📧 <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:durgaathapa25@gmail.com"
              className="text-blue-600 font-semibold hover:underline"
            >
              durgaathapa25@gmail.com
            </a>
          </p>

          {/* Phone */}
          <p>
            📞 <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+97798XXXXXXXX"
              className="text-blue-600 font-semibold hover:underline"
            >
              +977 9749454559
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-10"
        >
          {/* Name */}
          <label className="text-black-500 font-semibold">
            Your Name

            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          {/* Email */}
          <label className="text-black-500 font-semibold">
            Your Email

            <input
              type="email"
              name="email"
              className="input"
              placeholder="example@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          {/* Message */}
          <label className="text-black-500 font-semibold">
            Your Message

            <textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Write your message here..."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* 3D Fox Section */}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />

          <ambientLight intensity={1} />

          <pointLight position={[5, 10, 0]} intensity={2} />

          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;