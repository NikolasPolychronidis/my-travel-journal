export default function Content(props) {
  return (
    <div className="container">
      <div className="content-div">
        <img src={`${props.imageUrl}`} />
        <div className="about-div">
          <span className="location">{props.location.toUpperCase()}</span>
          <span>
            <a href={`${props.googleMapsUrl}`} className="googlemap">
              {' '}
              view on google map{' '}
            </a>
          </span>
          <h3 className="placename">{props.title}</h3>
          <span className="date">
            {props.startDate}-{props.endDate}
          </span>
          <p className="about-place">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
