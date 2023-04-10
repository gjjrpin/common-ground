import "./NotFoundPage.scss";
import notfound from "../../assets/notfound/notfound.gif";

function NotFoundPage() {
  return (
    <div className="notfound">
      <img className="notfound__image" src={notfound} alt="Not found Page" />
    </div>
  );
}

export default NotFoundPage;
