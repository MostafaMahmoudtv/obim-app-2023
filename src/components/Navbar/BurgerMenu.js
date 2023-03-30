import React, { useContext } from "react";
import "./burdermenu.css";
import { Context } from "../../context/ContextState";
import { Link } from "react-router-dom";
import { faCaretDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {IoLocationSharp} from 'react-icons/io5'


const BurgerMenu = () => {
  const context = useContext(Context);
  const {
    userValidation,
    setuserValidation,
    saveuser,
    setSaveUser,
    setLogIn,
    setshowNewReg,
    showburgermenu,
    setshowburgermenu,
  } = context;

  return (
    <div className="burgermenu">
      <ul className="burger-navbar-list d-lg-flex   align-items-center justify-content-center d-none">
        <FontAwesomeIcon
          className="x-icon"
          style={{ cursor: "pointer" }}
          onClick={() => setshowburgermenu(false)}
          icon={faXmark}
        />

        <Link className="main" to="/">
          <li>
            <svg
              className="svgicon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M192 48c0-26.5 21.5-48 48-48H400c26.5 0 48 21.5 48 48V512H368V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H192V48zM48 96H160V512H48c-26.5 0-48-21.5-48-48V320H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V224H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V144c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v48H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80V464c0 26.5-21.5 48-48 48H480V96H592zM312 64c-8.8 0-16 7.2-16 16v24H272c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V152h24c8.8 0 16-7.2 16-16V120c0-8.8-7.2-16-16-16H344V80c0-8.8-7.2-16-16-16H312z" />
            </svg>{" "}
            الرئيسية
          </li>
        </Link>
		<Link className="main" to="/map">
                  <li>
                    <IoLocationSharp/>
                   موقعنا الجغرافي
                  </li>
                </Link>



        <li className="position-relative">
          <a>
            <svg
              className="svgicon patients"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
            </svg>
            المرضى والزوار
            <FontAwesomeIcon className="me-2" icon={faCaretDown} />
          </a>

          <div
            onClick={() => setshowburgermenu(false)}
            className="burger-patiens-guests-menu"
          >
            <Link to="/حجز-المواعيد">
              <p className="p-2 rounded">حجز المواعيد</p>
            </Link>

            <Link to="/إجازة-الأطباء">
              <p className="m-0 p-2 rounded">إجازة الأطباء</p>
            </Link>
          </div>
        </li>

        <li className="position-relative">
          <a>
            <svg
              className="svgicon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" />
            </svg>
            المواعيد
            <FontAwesomeIcon className="me-2" icon={faCaretDown} />
          </a>

          <div
            onClick={() => setshowburgermenu(false)}
            className="burger-patiens-guests-menu star"
          >
            <Link to="/مواعيد-حضور-الدكاترة">
              <p className="p-2 rounded">مواعيد حضور الدكاترة</p>
            </Link>

            <Link to="/مواعيد-حجز-المريض">
              <p className="m-0 p-2 rounded">مواعيد حجز المريض</p>
            </Link>
          </div>
        </li>
        <Link className="available-dep" to="/التخصصات-المتاحة">
          <li>
            <svg
              className="svgicon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z" />
            </svg>{" "}
            التخصصات المتاحة
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default BurgerMenu;
