import { blogPosts } from "@/assets/data/blogs";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="zirox-blog zirox-blog--home-2 zirox-section">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center">
          Direct From The Blog
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="400" className="text-center text-black">
          Latest From Our Blog Post For Business Agency
        </h2>
        <div className="row">
          {blogPosts.slice(0, 3).map((post) => (
            <div key={post.id} data-aos="fade-up" data-aos-delay={`${post.id * 200}`} className="col-12 col-md-6 col-lg-4">
              <div className={`zirox-blog__post mb-5`}>
                <div className="zirox-blog__post-thumbnail">
                  <Link to={`/blogs/${post.id}`} target="_blank" rel="noopener noreferrer">
                    <img src={post.imgSrc} alt="Post Thumbnail" />
                  </Link>
                </div>
                <div className="zirox-blog__post-body">
                  <div className="zirox-blog__post-body-tags">
                    <div className="zirox-blog__post-body-tags__author">
                      <div className="d-flex align-items-center gap-1">
                        <i className="flaticon-round-account-button-with-user-inside"></i>
                        <p>{post.author}</p>
                      </div>
                    </div>
                    <div className="zirox-blog__post-body-tags__comment">
                      <div className="d-flex align-items-center gap-1">
                        <i className="flaticon-bubble-chat"></i>
                        <p>{post.comments} Comment</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="zirox-blog__post-body-title">
                    <Link to={`/blogs/${post.id}`} title="Post title">
                      {post.title}
                    </Link>
                  </h3>
                  <Link to={`/blogs/${post.id}`} target="_blank" rel="noopener noreferrer" className="zirox-blog__post-body-read-more">
                    Read More <i className="flaticon-right-arrow-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
