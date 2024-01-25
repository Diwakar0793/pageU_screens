import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigation } from "../utils/useNavigation";
import dummyDp from "./download.png";
import AttachmentIcon from "@mui/icons-material/Attachment";

export default function CardsListPage() {
  const [, navigateToPath] = useNavigation();

  const checkAPI = async () => {
    try {
      const response = await fetch("http://localhost:3010/user/getUserRoles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("error------" + error);
    }
  };

  const matches = useMediaQuery("(min-width:450px)");
  return (
    <>
      {!matches && (
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
                <div className="taskHead asd" onClick={() => checkAPI()}>
                  <div className="taskParent">
                    <p className="task">Get groceries</p>
                    <b>1</b>
                  </div>
                  <div className="taskBottom">
                    <div className="attachmentParent">
                      <AttachmentIcon className="attachmentIcon" />
                      <p className="attachmentNumber">3</p>
                    </div>
                    <div className="taskMembersIcons">
                      <div className="userimg">
                        <img src={dummyDp} className="cover" alt="" />
                      </div>

                      <div className="userimg">
                        <img src={dummyDp} className="cover" alt="" />
                      </div>

                      <div className="userimg">
                        <img src={dummyDp} className="cover" alt="" />
                      </div>

                      <div>
                        <p className="additionalMemberIcon">+3</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="taskHead"
                  onClick={() => navigateToPath("/cardDetailedView")}
                >
                  <div className="taskParent">
                    <p className="task">Get groceries</p>
                    <b>1</b>
                  </div>
                  <div className="taskBottom">
                    <div className="attachmentParent">
                      <AttachmentIcon className="attachmentIcon" />
                      <p className="attachmentNumber">3</p>
                    </div>
                    <div className="taskMembersIcons">
                      <div className="userimg">
                        <img src={dummyDp} className="cover" alt="" />
                      </div>

                      <div className="userimg">
                        <img src={dummyDp} className="cover" alt="" />
                      </div>

                      <div className="userimg">
                        <img src={dummyDp} className="cover" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="taskHead">
                  <div className="taskParent">
                    <p className="task">Get groceries</p>
                    <b>1</b>
                  </div>
                  <div className="taskBottom">
                    <div className="attachmentParent">
                      <AttachmentIcon className="attachmentIcon" />
                      <p className="attachmentNumber">3</p>
                    </div>
                    <div className="taskMembersIcons">
                      <div className="userimg">
                        <img src={dummyDp} className="cover" alt="" />
                      </div>

                      <div className="userimg">
                        <img src={dummyDp} className="cover" alt="" />
                      </div>

                      <div className="userimg">
                        <img src={dummyDp} className="cover" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="taskHead">
                  <div className="taskParent">
                    <p className="task">Get groceries</p>
                    <b>1</b>
                  </div>
                  <div className="taskBottom">
                    <div className="attachmentParent">
                      <AttachmentIcon className="attachmentIcon" />
                      <p className="attachmentNumber">3</p>
                    </div>
                    <div className="taskMembersIcons">
                      <div className="userimg">
                        <img src={dummyDp} className="cover" alt="" />
                      </div>

                      <div className="userimg">
                        <img src={dummyDp} className="cover" alt="" />
                      </div>

                      <div className="userimg">
                        <img src={dummyDp} className="cover" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
