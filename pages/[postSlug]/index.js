import Head from "next/dist/next-server/lib/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import React from "react";

import RecentPost from "../../components/RecentPost";

// FUNCTIONS
import {
  getPosts,
  getSinglePost,
  getFiveLatestPostCategory,
} from "../../lib/talkToGhost.js";
import { convertDate } from "../../lib/funktions";

const Post = (props) => {
  //Things we need:
  //- Post Conent
  //- Recent Articles
  console.log(props.recentPost);

  const data = props.post[0];
  //Also build out meta for each page with next/Head to make sure that twitter shares look cool

  // //Parsing out indivisual data points for injection
  const title = data.title;
  const categoryTitle = data.primary_tag.name;
  //const categorySlug = data.primary_tag.slug;
  //const categoryTags = data.primary_tag.slug;
  //const categoryColorRAW = data.primary_tag.accent_color;
  const postPublishDateRaw = data.published_at;
  const postAuthor = data.primary_author.name;
  const featureImage = data.feature_image;
  const authorImage = data.primary_author.profile_image;

  //Converting Data to proper format
  const postPublishDate = convertDate(postPublishDateRaw);

  const postContentRAW = data.html;

  const postTagData = data.tags;

  const postTags = postTagData.map((item, key) => (
    <React.Fragment key={key}>
      <Link href={`/tag/${item.slug}`}>
        <span
          className="badge shoptalk-badge"
          style={{ backgroundColor: `${item.accent_color}`, margin: "5px" }}
        >
          {item.name}
        </span>
      </Link>
    </React.Fragment>
  ));

  return (
    <>
      <Head></Head>
      <div>
        <div id="blog-page-content">
          <div className="container mt-1">
            <div className="row">
              <div
                className="col-md-2 order-last order-sm-last order-md-first"
                id="content_sidebar"
              >
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                  id="content_sidebar-inner"
                >
                  <Image
                    id="content_sidebar-author-img"
                    src={authorImage}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                  <div className="text-center content_sidebar-inner-text">
                    <p style={{ fontFamily: "metropolisextra_bold" }}>
                      {postAuthor}
                    </p>
                    <p style={{ fontSize: "14px" }}>{postPublishDate}</p>
                    <hr />
                    {postTags}
                  </div>
                </div>
              </div>
              <div className="col-md-10" id="content_main">
                <div className="text-center content_main-imgbox">
                  <Image
                    src={featureImage}
                    placeholder="blur"
                    blurDataURL={featureImage}
                    layout="fill"
                    objectFit="cover"
                    alt="alt"
                  />
                </div>
                <h2 id="content_main-title">{title}</h2>
                <section className="post-full-content">
                  <article
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: postContentRAW }}
                  />
                </section>
                <hr />
              </div>
            </div>
            <RecentPost
              recentPost={props.recentPost}
              category={props.category}
            />
          </div>
        </div>
        <div id="blog-comments" />
      </div>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const posts = await getPosts();
  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { postSlug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

//Pass the page slug over to the "getSinglePost" function
//In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  //const post = await getSinglePost(context.params.postSlug);
  const post = await getSinglePost(context.params.postSlug);

  const category = post[0].primary_tag.slug;

  const recentPost = await getFiveLatestPostCategory(category);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post, recentPost },
  };
}
