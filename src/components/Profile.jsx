import "./Profile.css";
import PropTypes from "prop-types";

function Profile(data) {
  return (
    <div className="Profile">
      <div className="profile-pic">
        <img src={data.image} />
      </div>
      <div className="profile-data">
        <div>
          <div>
            <span className="name">{data.name}</span>
            <span className="position">{data.position}</span>
          </div>
          <div>
            <span className="email">
              <span className="material-symbols-outlined">mail</span>
              {data.email}
            </span>
            <span className="phone">
              <span className="material-symbols-outlined">call</span>
              {data.phone}
            </span>
          </div>
        </div>
        <div>
          <span className="desc">{data.desc}</span>
        </div>
      </div>
    </div>
  );
}

Profile.defaultProps = {
  image:
    "https://s3-alpha-sig.figma.com/img/7065/f9e9/979e69ae430b2e62edb3533925323ba0?Expires=1676851200&Signature=EIZw0O4aGn~f3upEo3rIjBa6NblJ44wLSZStpD-2m8bSOKWrBcchs5H1~EiIsZmn2TS37PtUEANn1DbQOcVdKXEoKafvfC70LYJvSDND549ey9OnoEZ0WGenV~e-ZGulq3vRnADs~a0hbTqXwwcD1c5JvunjC5d-7kID9mG6F4jn8jaOj6oLsqbyQpTetPv6kXrMvHHEMqedhuOLvRx0dQVtDhE40oMkJvGzXmI2v7G3avMnx0QjOwX6d6sMohk~GLtOGHAVw4DXrvIgefu5wL3ZCxQqGtjxP5HFN-jiObdfjVC6ja5dbeh1iOUFneSKJQcCe5FlfoNTgjbEbsq4Tg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  name: "Billy Pearson",
  position: "Front-end dveloper",
  email: "billy@example.com",
  phone: "(+603) 546 624 342",
  desc: "Self-motivated developer, who is willing to learn and create outstanding UI applications.",
};

Profile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  desc: PropTypes.string,
};

export default Profile;
