import React from "react";
import { Link } from "react-router-dom";
import HeaderTechJobFinder from "./HeaderTechJobFinder";
const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Become a Frontend Developer",
      excerpt:
        "Learn the skills and technologies needed to become a frontend developer...",
      imageUrl:
        "https://i.pinimg.com/564x/90/44/a6/9044a634e09b2a633ff73efad0fdf470.jpg",
    },
    {
      id: 2,
      title: "The Future of AI in Tech",
      excerpt:
        "Explore the advancements and future trends of AI in the tech industry...",
      imageUrl:
        "https://i.pinimg.com/474x/e8/b5/13/e8b513bb64949c29fe3f34316e2572de.jpg",
    },
    {
      id: 3,
      title: "Top 10 Programming Languages in 2024",
      excerpt:
        "A comprehensive guide to the top programming languages you should learn in 2024...",
      imageUrl:
        "https://i.pinimg.com/564x/70/3b/83/703b83d13160aa9904093328e8a6639c.jpg",
    },
    {
      id: 4,
      title: "Introduction to Machine Learning",
      excerpt:
        "Discover the basics of machine learning and its applications in various industries...",
      imageUrl:
        "https://i.pinimg.com/736x/b4/79/1f/b4791f6106abef003fc1b096dce46bee.jpg",
    },
  ];

  const relatedPosts = {
    businessNews: [
      {
        id: 4,
        title: "Latest Trends in Business Technology",
        excerpt:
          "Stay updated with the latest trends in business technology and how they impact your business...",
        imageUrl:
          "https://i.pinimg.com/564x/50/35/57/503557d678025e87d3c017dd6a9fba14.jpg",
      },
      {
        id: 5,
        title: "How to Optimize Your Business Operations",
        excerpt:
          "Learn effective strategies to optimize your business operations for better efficiency and productivity...",
        imageUrl:
          "https://i.pinimg.com/564x/b9/f0/43/b9f043115c6fe08b4d0a88971c9b71a6.jpg",
      },
    ],
    productNews: [
      {
        id: 6,
        title: "New Product Launch: XYZ Software",
        excerpt:
          "Discover the features and benefits of our latest product, XYZ Software, designed to improve your workflow...",
        imageUrl:
          "https://i.pinimg.com/736x/41/23/05/41230590a0ff35dd78f8856bd993affb.jpg",
      },
      {
        id: 7,
        title: "Product Update: ABC Tool Version 2.0",
        excerpt:
          "Learn about the new features and improvements in the latest version of ABC Tool...",
        imageUrl:
          "https://i.pinimg.com/736x/46/71/4d/46714d9f9e035910d82974a56f2201d6.jpg",
      },
    ],
    freelancerTips: [
      {
        id: 8,
        title: "How to Build a Strong Freelancer Portfolio",
        excerpt:
          "Tips and tricks on how to create an impressive freelancer portfolio to attract more clients...",
        imageUrl:
          "https://i.pinimg.com/564x/a9/3d/e5/a93de59273e831544c061908b131b8e4.jpg",
      },
      {
        id: 9,
        title: "Time Management Tips for Freelancers",
        excerpt:
          "Learn effective time management strategies to boost your productivity as a freelancer...",
        imageUrl:
          "https://i.pinimg.com/736x/0c/c0/8c/0cc08c14b92e9918da26bab34e8eaba0.jpg",
      },
    ],
  };

  return (
    <div>
      <HeaderTechJobFinder />
      <div style={styles.blogContainer}>
        <h1 style={styles.title}>Blog</h1>
        <div style={styles.postsGrid}>
          {posts.map((post) => (
            <div key={post.id} style={styles.postCard}>
              <img
                src={post.imageUrl}
                alt={post.title}
                style={styles.postImage}
              />
              <h2 style={styles.postTitle}>{post.title}</h2>
              <p style={styles.postExcerpt}>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} style={styles.readMoreLink}>
                Read more
              </Link>
            </div>
          ))}
        </div>
        <h2 style={styles.subTitle}>Business News</h2>
        <div style={styles.postsGrid}>
          {relatedPosts.businessNews.map((post) => (
            <div key={post.id} style={styles.postCard}>
              <img
                src={post.imageUrl}
                alt={post.title}
                style={styles.postImage}
              />
              <h2 style={styles.postTitle}>{post.title}</h2>
              <p style={styles.postExcerpt}>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} style={styles.readMoreLink}>
                Read more
              </Link>
            </div>
          ))}
        </div>
        <h2 style={styles.subTitle}>Product News</h2>
        <div style={styles.postsGrid}>
          {relatedPosts.productNews.map((post) => (
            <div key={post.id} style={styles.postCard}>
              <img
                src={post.imageUrl}
                alt={post.title}
                style={styles.postImage}
              />
              <h2 style={styles.postTitle}>{post.title}</h2>
              <p style={styles.postExcerpt}>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} style={styles.readMoreLink}>
                Read more
              </Link>
            </div>
          ))}
        </div>
        <h2 style={styles.subTitle}>Freelancer Tips</h2>
        <div style={styles.postsGrid}>
          {relatedPosts.freelancerTips.map((post) => (
            <div key={post.id} style={styles.postCard}>
              <img
                src={post.imageUrl}
                alt={post.title}
                style={styles.postImage}
              />
              <h2 style={styles.postTitle}>{post.title}</h2>
              <p style={styles.postExcerpt}>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} style={styles.readMoreLink}>
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  blogContainer: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  subTitle: {
    fontSize: "28px",
    marginTop: "40px",
    marginBottom: "20px",
    textAlign: "left",
  },
  postsGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  postCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "300px",
    textAlign: "left",
  },
  postImage: {
    width: "100%",
    borderRadius: "10px",
  },
  postTitle: {
    fontSize: "24px",
    margin: "10px 0",
  },
  postExcerpt: {
    fontSize: "16px",
    color: "#555",
  },
  readMoreLink: {
    fontSize: "16px",
    color: "#1e90ff",
    textDecoration: "none",
  },
};

export default Blog;
