import "bootstrap/dist/css/bootstrap.min.css";

const SportsmanCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.club}</p>
          <p className="card-text">
            <small class="text-muted">{props.username}</small>
          </p>
        </div>
      </div>
    </>
  );
};

export default SportsmanCard;
