import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import dummyDp from "./download.png";

export default function CardsListPage() {
  const matches = useMediaQuery("(min-width:450px)");
  return (
    <>
      {!matches && (
        <div class="rightSide">
          <div class="header">
            <div class="imgText">
              <div class="userimg">
                <img src={dummyDp} alt="" class="cover" />
              </div>
              <h4>
                <span>JOHN DOE </span>
                <br />
                <span>online</span>
              </h4>
            </div>
            <ul class="nav_icons">
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
    </>
  );
}
