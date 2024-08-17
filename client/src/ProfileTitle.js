import "./ProfileTitle.css";
import profile from "./assets/profile.svg";

const ProfileTitle = () => {
  return (
    <div class="icon-text">
      <div class="image">
        <img class="image" src={profile} alt="profile" />
      </div>
      <div class="title">
        <p>profile</p>
      </div>
    </div>
  );
};

export default ProfileTitle;
