import Link from "next/link";
import { convertDate, convertHex } from "../../lib/funktions";

const FeaturedArticle = ({ featuredPost }) => {
  //Getting main data for the Featured Article

  //console.log(featuredPost);
  const data = featuredPost[0];

  //Parsing out indivisual data points for injection
  const title = data.title;
  const categoryTitle = data.primary_tag.name;
  const categorySlug = data.primary_tag.slug;
  const categoryColorRAW = data.primary_tag.accent_color;
  const postPublishDateRaw = data.published_at;
  const postAuthor = data.primary_author.name;
  const postExcerpt = data.excerpt;
  const postSlug = data.slug;
  const featureImage = data.feature_image;

  //Converting Data to proper format
  const postPublishDate = convertDate(postPublishDateRaw);

  //Converting HEX value returned from API and converting to RGBA for gradient
  const categoryColor = convertHex(categoryColorRAW, 30);

  //console.log(data);
  return (
    <div id="hero_wrapper">
      <div id="hero_content">
        <div className="container">
          <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-9 col-xxl-9"
              id="hero_content--article-title-box"
            >
              <span
                className="badge shoptalk-badge"
                style={{ backgroundColor: categoryColor }}
              >
                {categoryTitle}
              </span>
              <h1 id="hero_content--article-title" className="shoptalk-shadow">
                {title}
              </h1>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-6 col-xxl-5 offset-0 offset-sm-0 offset-md-0 offset-lg-5 offset-xl-6 offset-xxl-6 prevBoxPadder">
              <div className="card text-end glass-card">
                <div className="card-body text-end">
                  <h5
                    className="text-end"
                    style={{
                      fontSize: "13px",
                      color: "rgb(95,95,95)",
                      marginBottom: "1px",
                    }}
                  >
                    {postPublishDate}
                  </h5>
                  <h5
                    className="text-end"
                    style={{ fontSize: "12px", color: "rgb(95,95,95)" }}
                  >
                    By {postAuthor}
                  </h5>
                  <p
                    className="text-end card-text"
                    style={{
                      color: "rgb(255,255,255)",
                      textShadow: "1px 1px 3px rgb(0,0,0)",
                    }}
                  >
                    {postExcerpt}
                  </p>
                  <Link href={`/${postSlug}`}>
                    <span className="btn btn-primary shoptalk-btn">
                      Continue Reading
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="hero_background"
        style={{
          background: `linear-gradient(180deg, ${categoryColor} 40%, rgba(255,255,255,0) 85%), linear-gradient(0deg, rgba(255,255,255,1) 2%, rgba(255,255,255,0.4542191876750701) 33%), url('${featureImage}') top / cover no-repeat`,
        }}
      />
    </div>
  );
};

export default FeaturedArticle;
