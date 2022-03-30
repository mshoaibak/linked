import "./Header.css";
import vid from "../../assest/videos/video.mp4";
import { Player } from "video-react";

import Navigation from "../Navigation";
const Header = () => {
  return (
    <>
      <div className="header-main">
        <Navigation />

        <div className="header-data">
          <h1 className="font-weight-bold">Header Heading</h1>
          <p className="font-weight-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="button1">Check out</button>
        </div>
      </div>
    </>
  );
};

export default Header;
