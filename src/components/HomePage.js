import React from 'react';
import './HomePage.css';
import logoImage from '../assets/b.png'; 
import section1 from '../assets/section1.png'; 
import circle1 from '../assets/Purple_Circle_2.png';

const tools = [
  {
    title: 'Article Generator',
    description: 'Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.',
    icon: '📝'
  },
  {
    title: 'Blog Post Writer',
    description: 'Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.',
    icon: '📄'
  },
  {
    title: 'Content Rewriter',
    description: 'Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.',
    icon: '🔄'
  },
  {
    title: 'Image Generator',
    description: 'Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.',
    icon: '🖼️'
  },
  {
    title: 'Product Descriptions',
    description: 'Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.',
    icon: '🛍️'
  },
  {
    title: 'Social Media Post',
    description: 'Turn a title and an outline into a fully SEO-optimized and long article with this AI editor.',
    icon: '📱'
  }
];

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">
          <img src={logoImage} width="50px" alt="logo" /> uiAid
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#research">Research</a></li>
          </ul>
        </nav>
        <div className="login-button">
          <button>Login</button>
        </div>
      </header>
      <main className="main-content">
        <h1>Effortlessly Create High-Quality Articles with Our AI Article Generator</h1>
        <p>
          AI has the potential to revolutionize the way we live and work, from improving healthcare and transportation to enhancing the way.
        </p>
        <div className="buttons">
          <button className="get-started">Get Started</button>
          <button className="explore">Explore</button>
        </div>
      </main>
      <div className="image-container"> 
        <img src={circle1} alt="circle" className="circle top-left" />
        <img src={circle1} alt="circle" className="circle bottom-right" />
        <img src={section1} alt="..." className="section1-image" />
      </div>
      <section className="tools-section">
        <h2>Most Popular Tools</h2>
        <p>These are the most popular tools and a good place to start. Give them a try!</p>
        <div className="tools-container">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <div className="tool-content">
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
