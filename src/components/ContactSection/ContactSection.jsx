import React, { lazy, useRef } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { MdEmail, MdClose } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { LiaSpinnerSolid } from "react-icons/lia";
import { ToastContainer, toast } from "react-toastify";
const Titles = lazy(() => import("../Common/Titles"));

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.info("Message sending...", {
      position: "top-center",
      autoClose: 8000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    emailjs
      .sendForm(
        "service_ykzdwcf",
        "template_ajypl2p",
        form.current,
        "KTKs5BWTvCiEm-MOW"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        () => {
          toast.error("Message send unsuccessfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
    e.target.reset();
  };

  return (
    <React.Fragment>
      <div className="flex flex-col items-center pt-20" id="contact">
        <Titles title={"Contact"} />
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-up"
          data-aos-duration="800"
          className="my-5 flex w-5/6 flex-col items-center justify-center gap-4 rounded-lg bg-white p-5 shadow-xl drop-shadow-xl dark:bg-slate-600 md:w-4/6 lg:w-2/3 xl:w-1/2"
        >
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput id="name" required type="text" name="name" />
          </div>

          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              placeholder="name@example.com"
              required
              type="email"
              name="email"
            />
          </div>

          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="message" value="Message" />
            </div>
            <Textarea
              id="message"
              placeholder="Leave a message..."
              sizing="lg"
              type="text"
              rows={5}
              name="message"
            />
          </div>
          <Button type="submit" className="w-28">
            Submit
          </Button>
        </form>
        <p className="mb-1 mt-5 text-lg italic">
          For More enquiries , feel free email me
        </p>
        <a
          href="mailto:contact@kavindu.me"
          className="relative mb-5 flex items-center duration-300 ease-in hover:invert"
        >
          <MdEmail size={22} className="relative mx-4" />
          <span className=""> contact@kavindu.me</span>
        </a>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        limit={1}
        closeButton={<MdClose className="relative" />}
        icon={<LiaSpinnerSolid className="relative h-6 w-6 animate-spin" />}
      />
    </React.Fragment>
  );
};

export default ContactSection;
