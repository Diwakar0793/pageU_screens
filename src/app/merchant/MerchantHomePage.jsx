import * as React from "react";
import "../../css/merchantHomePage.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import dummyDp from "./download.png";
import { useNavigation } from "../utils/useNavigation";
export default function MerchantHomePage() {
  const [, navigateToPath] = useNavigation();

  const matches = useMediaQuery("(min-width:450px)");
  return (
    <div className="container">
      <div className="leftSide">
        <div className="header">
          <div className="userimg">
            <img src={dummyDp} alt="" className="cover" />
          </div>
          <div>PAGEU</div>
          <ul className="nav_icons">
            <li>
              <ion-icon name="ellipsis-vertical"></ion-icon>
            </li>
          </ul>
        </div>
        <div className="search_chat">
          <div>
            <input type="text" placeholder="Search" />
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
        <div className="chatlist">
          <div
            className="block "
            onClick={!matches ? () => navigateToPath("/cardsListPage") : null}
          >
            <div className="imgBox">
              <img src={dummyDp} className="cover" alt="" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>JOHN DOE</h4>
                <p className="time">10:56</p>
              </div>
              <div className="message_p">
                <p>How are you doing?</p>
              </div>
            </div>
          </div>

          <div className="block unread">
            <div className="imgBox">
              <img src={dummyDp} className="cover" alt="" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>ANDRE</h4>
                <p className="time">12:34</p>
              </div>
              <div className="message_p">
                <p>I love your youtube videos!</p>
                <b>1</b>
              </div>
            </div>
          </div>

          <div className="block unread">
            <div className="imgBox">
              <img src={dummyDp} className="cover" alt="" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>OLIVIA</h4>
                <p className="time">Yesterday</p>
              </div>
              <div className="message_p">
                <p>I just subscribed to your channel</p>
                <b>2</b>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="imgBox">
              <img src={dummyDp} className="cover" alt="" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>PARKER</h4>
                <p className="time">Yesterday</p>
              </div>
              <div className="message_p">
                <p>Hey!</p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="imgBox">
              <img src={dummyDp} className="cover" alt="" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>ZOEY</h4>
                <p className="time">18/01/2022</p>
              </div>
              <div className="message_p">
                <p>I'll get back to you</p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="imgBox">
              <img src={dummyDp} className="cover" alt="" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>JOSH</h4>
                <p className="time">17/01/2022</p>
              </div>
              <div className="message_p">
                <p>Congratulations</p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="imgBox">
              <img src={dummyDp} className="cover" alt="" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>DIAN</h4>
                <p className="time">15/01/2022</p>
              </div>
              <div className="message_p">
                <p>Thanks alot</p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="imgBox">
              <img src={dummyDp} className="cover" alt="" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>SAM</h4>
                <p className="time">Yesterday</p>
              </div>
              <div className="message_p">
                <p>Did you finish the project?</p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="imgBox">
              <img src={dummyDp} className="cover" alt="" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>JUNIOR</h4>
                <p className="time">18/01/2022</p>
              </div>
              <div className="message_p">
                <p>Nice course</p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="imgBox">
              <img src={dummyDp} className="cover" alt="" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>ZOEY</h4>
                <p className="time">18/01/2022</p>
              </div>
              <div className="message_p">
                <p>I'll get back to you</p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="imgBox">
              <img src={dummyDp} className="cover" alt="" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>JOSH</h4>
                <p className="time">17/01/2022</p>
              </div>
              <div className="message_p">
                <p>Congratulations</p>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="imgBox">
              <img src={dummyDp} className="cover" alt="" />
            </div>
            <div className="details">
              <div className="listHead">
                <h4>DIAN</h4>
                <p className="time">15/01/2022</p>
              </div>
              <div className="message_p">
                <p>Thanks alot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {matches && (
        <div className="rightSide">
          <div className="header">
            <div className="imgText">
              <div className="userimg">
                <img src={dummyDp} alt="" className="cover" />
              </div>
              <h4>
                <span>JOHN DOE </span>
                <br />
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

          <div>
            <div className="lanes">
              <div className="swim-lane" id="todo-lane">
                {/* <h3 className="heading">TODO</h3> */}
                <div>
                  <p className="task">Get groceries</p>
                </div>
                <div>
                  <p className="task">Get groceries</p>
                </div>
                <div>
                  <p className="task">Get groceries</p>
                </div>
                <div>
                  <p className="task">Get groceries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
