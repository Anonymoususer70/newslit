import React from "react";

const NewsItem = (props) => {
      let {title, description,imgUrl, newsUrl, source, author, time} = props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imgUrl? "https://www.thebluediamondgallery.com/handwriting/images/news.jpg":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className="badge bg-secondary">{source}</span>
            <p className="card-text">
             {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author? "Anonymous":author} at {new Date(time).toGMTString()}</small></p>
            
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
