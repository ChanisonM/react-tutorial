import React from "react";

function Card({ obj }) {
  return (
    <>
      {obj.map((item) => (
        <div className="card" style={{ width: "18rem" }}>
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.content}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
