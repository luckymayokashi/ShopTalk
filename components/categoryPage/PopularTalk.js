import React from "react";
import Link from "next/link";
import { convertDate, convertHex } from "../../lib/funktions";

const PopularTalk = ({ popularTalk }) => {
  const popularTalkData = popularTalk;

  //console.log(data);

  //building PopularTalk Blocks
  const popularTalkItems = popularTalkData.map((item, key) => (
    <React.Fragment key={key}>
      <div className="col d-flex popular-post_item-box">
        <div
          className="d-flex align-items-center popular-post_item"
          style={{
            background: `linear-gradient(148deg, ${convertHex(
              item.primary_tag.accent_color,
              65
            )} 48%, rgba(255,255,255,0.75) 100%), url("${
              item.feature_image
            }") center / cover no-repeat`,
          }}
        >
          <h2 className="popular-post_item-heading shoptalk-shadow">
            {item.title}
          </h2>
          <div className="text-center popular-post_item-content">
            <span
              className="float-end popular-post_item-content-date shoptalk-shadow"
              style={{ color: "rgb(255,255,255)" }}
            >
              {convertDate(item.published_at)}
            </span>
            <p className="popular-post_item-content-snippet shoptalk-shadow">
              {item.excerpt}
            </p>
            <Link href={`/${item.slug}`}>
              <a className="btn btn-primary shoptalk-btn">Continue Reading</a>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  ));

  return (
    <div id="trending-bar">
      <div className="container">
        <div className="row">
          <div
            className="col d-flex flex-column justify-content-center glass-card-lower"
            id="popular-post"
            style={{ background: "rgba(220, 58, 7, 0.3)" }}
          >
            <div className="row text-center">
              <div className="col ">
                <h1
                  style={{
                    color: "rgb(255,255,255)",
                    textShadow: "1px 2px 3px rgba(220,58,7,0.3)",
                  }}
                >
                  PopularTalk
                </h1>
              </div>
            </div>
            <div className="row scrolling-wrapper-flexbox">
              {popularTalkItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTalk;
