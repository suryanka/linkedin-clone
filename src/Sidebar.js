import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";

function Sidebar() {
  const user= useSelector(selectUser)

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__topFirst">
          <img src="https://media.licdn.com/dms/image/D4D16AQEn0au2ghWiZw/profile-displaybackgroundimage-shrink_350_1400/0/1677094583409?e=1694649600&v=beta&t=CQir1xLr44uzSdRyPernh_7s3m66qY0D_m7niJIPiec" />
          <Avatar
            className="sidebar__topFirstAvatar"
            src={user.photoURL}
          >{user.email[0]}</Avatar>
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
        </div>

        <div className="sidebar__topSecond">
          <div className="sidebar__topSecondContainer">
            <span>Who's viewed your profile</span>
            <h4>46</h4>
          </div>
          <div className="sidebar__topSecondContainer">
            <span>Impressions of your post</span>
            <h4>1632</h4>
          </div>
        </div>
        <div className="sidebar__topThird">
          <h3>Access exclusive tools and insights</h3>
          <div className="sidebar__topThirdBottom">
            <li-icon
              aria-hidden="true"
              type="premium-chip"
              class="feed-identity-module__premium-icon mr1 flex-shrink-zero"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                  fill="#f8c77e"
                ></path>
                <path
                  d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                  fill="#e7a33e"
                ></path>
              </svg>
            </li-icon>
            <span class="feed-identity-module__premium-cta-text">
              Get Hired Faster, Try Premium Free
            </span>
          </div>
        </div>
        <div className="sidebar__topFourth">
          <span class="sidebar__topFourthMyItems">
            My items
          </span>
        </div>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomFirst">
          <h3>Groups</h3>
          <h3>Events</h3>
          <h3>Followed Hashtags</h3>
        </div>
        <div className="sidebar__bottomSecond">
          <h2>Discover More</h2>        
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
