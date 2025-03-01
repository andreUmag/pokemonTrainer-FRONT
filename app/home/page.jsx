import "./home.css";
import ShinyText from "@/components/ShinyText";

function HomePage() {
  return (
    <div className="home-page">
      <div className="columns">
        <div className="left-column">
          <div className="user">
            <img src="./avatar1.webp" alt="avatar" />
            <div className="usertags">
              <ShinyText
                text="TRAINER"
                disabled={false}
                speed={5}
                className="trainer"
              />
              <p className="trainerName">HITMAN RONALD</p>
            </div>
          </div>
          <div className="battles"></div>
        </div>
        <div className="right-column">
          <div className="team"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
