import React from "react";
import Link from "next/link";
import { convertDate, categoryTitle } from "../lib/funktions";

const RecentPost = ({ recentPost, category }) => {
  //console.log(recentPost);

  let categoryName;

  const recentPostData = recentPost;

  //Category check for recent post on category pages
  if (category) {
    categoryName = categoryTitle(category);
  } else {
    categoryName = " the Shop";
  }

  const recentPostItems = recentPostData.map((item, key) => (
    <React.Fragment key={key}>
      <div className="row blog-content_item">
        <div
          className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 blog-content_img"
          style={{
            background: `url("${item.feature_image}") center / cover no-repeat`,
          }}
        >
          <span
            className="badge shoptalk-badge"
            style={{ backgroundColor: `${item.primary_tag.accent_color}` }}
          >
            {item.primary_tag.name}
          </span>
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
          <h5
            className="text-start"
            style={{
              fontSize: "13px",
              color: "rgb(95,95,95)",
              marginBottom: "1px",
            }}
          >
            {convertDate(item.published_at)}
          </h5>
          <h2 style={{ marginBottom: "0px" }}>{item.title}</h2>
          <h5>By {item.primary_author.name}</h5>
          <p style={{ marginBottom: "8px" }}>{item.excerpt}</p>
          <Link href={`/${item.slug}`}>
            <a className="btn btn-primary shoptalk-btn">Continue Reading</a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  ));

  return (
    <div id="recent-post">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>More from {categoryName}</h1>
            {recentPostItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
