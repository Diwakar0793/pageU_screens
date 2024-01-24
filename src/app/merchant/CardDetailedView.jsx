import React from "react";
import dummyDp from "./download.png";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ImageIcon from "@mui/icons-material/Image";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function CardDetailedView() {
  return (
    <div className="rightSide cardDetailedView">
      <div className="header">
        <div className="imgText">
          <div className="userimg">
            <img src={dummyDp} alt="" className="cover" />
          </div>
          <h4>
            JOHN DOE <br />
            <span>online</span>
          </h4>
        </div>
        <ul className="nav_icons">
          <li>
            <ion-icon name="search-outline"></ion-icon>
          </li>
          <li>
            <ion-icon name="ellipsis-vertical"></ion-icon>
          </li>
        </ul>
      </div>

      <div className="chatbox">
        <div className="message my_msg">
          <p>
            Hi <br />
            <span>12:18</span>
          </p>
        </div>
        <div className="message friend_msg">
          <p>
            Hey <br />
            <span>12:18</span>
          </p>
        </div>
        <div className="message my_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message friend_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message my_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eaque aliquid fugiat
            accusamus dolore qui vitae ratione optio sunt
            <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message friend_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message my_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message friend_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message my_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message friend_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message my_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message friend_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message my_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message friend_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message my_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <span>12:15</span>
          </p>
        </div>
        <div className="message friend_msg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <span>12:15</span>
          </p>
        </div>
      </div>

      <div className="chat_input">
        <ion-icon name="happy-outline"></ion-icon>
        {/* <ion-icon name="happy-outline"></ion-icon> */}
        <input type="text" placeholder="Type a message" />
        <ion-icon name="mic"></ion-icon>
      </div>

      <div className="bottomRow">
        <InsertDriveFileOutlinedIcon className="bottomIcons" />
        <ImageIcon className="bottomIcons" />
        <InfoOutlinedIcon className="bottomIcons" />
        <LocalOfferIcon className="bottomIcons" />
      </div>
    </div>
  );
}
