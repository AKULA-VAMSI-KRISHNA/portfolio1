import "./Menubar.css";
import { NavLink } from "react-router-dom";
function Menubar() {
  return (
    <div className="qwe">
      <NavLink to="/" className="abc" style={{ textDecoration: "none" }}>
        {" "}
        <img
          src="https://w7.pngwing.com/pngs/648/221/png-transparent-computer-icons-house-house-logo-angle-text-logo-thumbnail.png"
          alt=""
          style={{ width: "22px" }}
        />{" "}
        Home&nbsp;&nbsp;&nbsp;
      </NavLink>
      <NavLink
        to="/Personal"
        className="abc"
        style={{ textDecoration: "none" }}
      >
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/cloud-his-icon/35-personal-information.png"
          alt=""
          style={{ width: "24px" }}
        />
        Personal Details&nbsp;&nbsp;&nbsp;
      </NavLink>
      <NavLink
        to="/Educational"
        className="abc"
        style={{ textDecoration: "none" }}
      >
        {" "}
        <img
          src="https://www.freeiconspng.com/thumbs/education-png/education-png-1.png"
          alt=""
          style={{ width: "24px" }}
        />{" "}
        Educational Details&nbsp;&nbsp;&nbsp;
      </NavLink>
      <NavLink
        to="/Projects"
        className="abc"
        style={{ textDecoration: "none" }}
      >
        {" "}
        <img
          src="https://banner2.cleanpng.com/20180601/piv/kisspng-project-infographic-management-ideas-5b10f6d55d3473.1939874115278384213818.jpg"
          alt=""
          style={{ width: "24px" }}
        />{" "}
        Projects&nbsp;&nbsp;&nbsp;
      </NavLink>
      <NavLink to="/Skills" className="abc" style={{ textDecoration: "none" }}>
        {" "}
        <img
          src="https://www.vhv.rs/dpng/d/438-4381204_settings-vector-technical-skill-setting-icon-hd-png.png"
          alt=""
          style={{ width: "24px" }}
        />{" "}
        Technical Skills&nbsp;&nbsp;&nbsp;
      </NavLink>
      <NavLink
        to="/Certificates"
        className="abc"
        style={{ textDecoration: "none" }}
      >
        {" "}
        <img
          src="https://www.freeiconspng.com/thumbs/certificate-icon-png/certificate-icon-10.png"
          alt=""
          style={{ width: "24px" }}
        />{" "}
        Certifications&nbsp;&nbsp;&nbsp;
      </NavLink>
    </div>
  );
}
export default Menubar;
