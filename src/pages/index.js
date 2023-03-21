import LeftCol from "./leftCol";
import RigthCol from "./rightCol";

export default function Home() {
  return (
    <div className="main">
      <div className="leftCol">
        <LeftCol />
      </div>
      <div className="separator">

      </div>
      <div className="rightCol">
        <RigthCol />
      </div>
    </div>
  );
}
