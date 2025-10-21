import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Hiwot Jewore</span>
          </h1>
          <h2 className="hero-subtitle">
            AWS Cloud Developer & AI Healthcare Innovator
          </h2>
          <p className="hero-description">
            Building faith-driven AI solutions that transform healthcare, 
            support families, and empower communities through cloud technology.
          </p>
          <div className="hero-buttons">
            <a href="/projects" className="btn btn-primary">View My Work</a>
            <a href="/contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span>👩‍💻</span>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <h3>What I Do</h3>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="card-icon">☁️</div>
              <h4>AWS Cloud Solutions</h4>
              <p>Certified AWS Cloud Practitioner building scalable healthcare applications with Lambda, DynamoDB, and Bedrock AI.</p>
            </div>
            <div className="highlight-card">
              <div className="card-icon">🏥</div>
              <h4>Healthcare AI</h4>
              <p>Developing HomeHealthCloud AI for elderly care with predictive analytics and multilingual support.</p>
            </div>
            <div className="highlight-card">
              <div className="card-icon">🔒</div>
              <h4>Cybersecurity</h4>
              <p>Security analyst intern specializing in network scanning, vulnerability assessment, and threat analysis.</p>
            </div>
            <div className="highlight-card">
              <div className="card-icon">🙏</div>
              <h4>Faith-Tech Integration</h4>
              <p>Creating Bible study applications and family-focused solutions that blend technology with community values.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Active Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">AWS Certifications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Active Internships</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Faith-Driven</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home