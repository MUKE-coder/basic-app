export default function Card({ heading, description, facebookLink }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{heading}</h2>
      </div>
      <div className="card-body">
        <p>
          {description}
        </p>
      </div>
      <div className="card-footer">
        <a href={facebookLink}>Facebook</a>
      </div>
    </div>
  );
}
