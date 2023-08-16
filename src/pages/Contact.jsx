import React, { lazy, useRef } from "react";
import { PiHexagonLight } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaSpinner } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const NavigationIsland = lazy(() =>
  import("../components/Common/NavigationIslad")
);
const Header = lazy(() => import("../components/Common/Header"));
const Footer = lazy(() => import("../components/Common/Footer"));
const Gradient = lazy(() => import("../components/Common/Gradient"));
const GradientBottom = lazy(() =>
  import("../components/Common/GradientBottom")
);
const Titles = lazy(() => import("../components/Common/Titles"));
const SocialIcons = lazy(() => import("../components/Home/SocialIcons"));

const details = [
  {
    icon: <FaLocationDot />,
    title: "Address",
    content: "Dickwella, Sri Lanka",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    content: "+94 71 906 3347",
  },
  {
    icon: <MdEmail />,
    title: "Email",
    content: "contact@kavindu.me",
  },
];

const MySwal = withReactContent(Swal);

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    MySwal.fire({
      title: (
        <h1 className="mb-10 flex justify-center">
          <FaSpinner className="animate-spin text-7xl text-yellow-300" />
        </h1>
      ),
      background: "#00000000",
      showConfirmButton: false,
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
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Message sent successfully!",
          });
        },
        () => {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Message send unsuccessfully!",
          });
        }
      );
    e.target.reset();
  };

  return (
    <React.Fragment>
      <div className="relative flex h-auto min-h-screen flex-col justify-between overflow-hidden">
        <div className="">
          {/* header */}
          <Header />
          {/* title */}
          <Titles titleStart={"Get in"} titleEnd={"Touch"} />
        </div>
        {/* content area */}
        <div className="flex w-screen flex-col items-center justify-center gap-10 px-10 pb-28 lg:flex-row xl:gap-x-20">
          <form
            className="flex w-full max-w-2xl flex-col font-ABeeZee"
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-right"
          >
            {/* line 1 */}
            <div className="flex w-full flex-col gap-x-5 sm:flex-row">
              {/* first name */}
              <div class="relative mb-6 w-full">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  class="peer block w-full rounded-lg border border-sky-600 bg-transparent p-2.5 py-3 text-sm text-gray-900 focus:border-sky-500 focus:ring-0 dark:border-sky-500 dark:text-white"
                  required
                />
                <label
                  for="fname"
                  class="absolute top-0 flex h-full items-center ps-2 text-sm font-semibold italic text-gray-500 peer-valid:hidden peer-focus:hidden dark:text-gray-300"
                >
                  First name
                </label>
              </div>
              {/* last name */}
              <div class="relative mb-6 w-full">
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  class="peer block w-full rounded-lg border border-sky-600 bg-transparent p-2.5 py-3 text-sm text-gray-900 focus:border-sky-500 focus:ring-0 dark:border-sky-500 dark:text-white"
                  required
                />
                <label
                  for="lname"
                  class="absolute top-0 flex h-full items-center ps-2 text-sm font-semibold italic text-gray-500 peer-valid:hidden peer-focus:hidden dark:text-gray-300"
                >
                  Last name
                </label>
              </div>
            </div>
            {/* line 2 */}
            <div className="flex w-full flex-col gap-x-5 sm:flex-row">
              {/* phone number */}
              <div class="relative mb-6 w-full">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  class="peer block w-full rounded-lg border border-sky-600 bg-transparent p-2.5 py-3 text-sm text-gray-900 focus:border-sky-500 focus:ring-0 dark:border-sky-500 dark:text-white"
                  required
                />
                <label
                  for="phone"
                  class="absolute top-0 flex h-full items-center ps-2 text-sm font-semibold italic text-gray-500 peer-valid:hidden peer-focus:hidden dark:text-gray-300"
                >
                  Phone number
                </label>
              </div>
              {/* email */}
              <div class="relative mb-6 w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="peer block w-full rounded-lg border border-sky-600 bg-transparent p-2.5 py-3 text-sm text-gray-900 focus:border-sky-500 focus:ring-0 dark:border-sky-500 dark:text-white"
                  required
                />
                <label
                  for="email"
                  class="absolute top-0 flex h-full items-center ps-2 text-sm font-semibold italic text-gray-500 peer-valid:hidden peer-focus:hidden dark:text-gray-300"
                >
                  Email
                </label>
              </div>
            </div>
            {/* line 3 */}
            <div class="relative mb-6 w-full">
              <textarea
                name="message"
                id="message"
                rows="10"
                required
                className="peer w-full rounded-lg border border-sky-600 bg-transparent p-2.5 py-3 text-sm text-gray-900 focus:border-sky-500 focus:ring-0 dark:border-sky-500 dark:text-white"
              ></textarea>
              <label
                for="message"
                class="absolute top-0 flex h-12 items-center ps-2 text-sm font-semibold italic text-gray-500 peer-valid:hidden peer-focus:hidden dark:text-gray-300"
              >
                Message
              </label>
            </div>
            {/* button */}
            <button
              type="submit"
              className="place-self-end rounded-md bg-sky-700 px-3 py-2 text-white hover:bg-emerald-500 dark:bg-sky-600 hover:dark:bg-emerald-500"
            >
              Submit message
            </button>
          </form>

          {/* contact info */}
          <div
            data-aos="fade-left"
            className="mt-16 flex w-full max-w-lg flex-col justify-center gap-y-5 lg:mt-0"
          >
            {details.map((data, key) => {
              return (
                <div
                  key={key}
                  className="group relative flex w-full max-w-lg rounded-md bg-white p-5 font-ABeeZee before:absolute before:-inset-0  before:-z-50 before:rounded-lg before:shadow-[0_0_80px_15px_#00FFAB60] dark:bg-gray-800/50"
                >
                  <div className="rounded-md bg-sky-500 p-3 text-2xl text-white duration-300 ease-in group-hover:bg-emerald-500">
                    {data.icon}
                  </div>
                  <div className="flex flex-col justify-end gap-y-1 px-2">
                    <p className="text-xs font-bold">{data.title}</p>
                    <p className="font-semibold">{data.content}</p>
                  </div>
                </div>
              );
            })}
            <div className="flex items-center w-full -mt-8 dark:opacity-80">
              <SocialIcons />
            </div>
          </div>
        </div>
        {/* top gradient */}
        <Gradient />
        {/* navigation island */}
        <NavigationIsland />
        {/* botom gradient efferc */}
        <GradientBottom />
        {/* footer */}
        <Footer />
        {/* hexagens */}
        <PiHexagonLight className="absolute bottom-2 end-3 -z-50 h-60 w-60 text-primary-green opacity-30 dark:opacity-10" />
        <PiHexagonLight className="absolute bottom-60 end-40 -z-50 h-40 w-40 text-primary-green opacity-30 dark:opacity-10" />
        <PiHexagonLight className="absolute bottom-40 end-80 -z-50 h-20 w-20 text-primary-green opacity-30 dark:opacity-10" />
      </div>
    </React.Fragment>
  );
};

export default Contact;
