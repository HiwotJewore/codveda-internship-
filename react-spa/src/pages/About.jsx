import React from 'react'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <section className="about-hero">
          <h1>About Me</h1>
          <p className="lead">
            Faith-driven AWS Cloud Developer passionate about creating AI solutions 
            that make a positive impact in healthcare and community building.
          </p>
        </section>

        <section className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <h2>My Journey</h2>
              <p>
                As an AWS Cloud Application Developer Graduate from Amazon Cloud Institute, 
                I combine my healthcare background (MPH, BSc Medical Laboratory Science) 
                with cutting-edge cloud technology to build solutions that matter.
              </p>
              <p>
                My mission is to bridge the gap between technology and human needs, 
                creating applications that support families, enhance healthcare outcomes, 
                and strengthen faith communities.
              </p>
              
              <h3>Current Focus</h3>
              <ul>
                <li>🏥 <strong>HomeHealthCloud AI</strong> - Predictive healthcare platform for elderly care</li>
                <li>🔒 <strong>Cybersecurity Internship</strong> - Network security and vulnerability assessment</li>
                <li>📖 <strong>Bible Study Voice Assistant</strong> - Faith community engagement tool</li>
                <li>🍽️ <strong>Elshadai Injera Services</strong> - E-commerce for Ethiopian diaspora</li>
              </ul>
            </div>

            <div className="skills-section">
              <h3>Technical Skills</h3>
              
              <div className="skill-category">
                <h4>AWS Services</h4>
                <div className="skills-list">
                  <span className="skill-tag">Lambda</span>
                  <span className="skill-tag">DynamoDB</span>
                  <span className="skill-tag">S3</span>
                  <span className="skill-tag">API Gateway</span>
                  <span className="skill-tag">Bedrock</span>
                  <span className="skill-tag">SageMaker</span>
                  <span className="skill-tag">Amplify</span>
                  <span className="skill-tag">CloudFormation</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Programming Languages</h4>
                <div className="skills-list">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">HTML/CSS</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Node.js</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Specializations</h4>
                <div className="skills-list">
                  <span className="skill-tag">Healthcare AI</span>
                  <span className="skill-tag">Cybersecurity</span>
                  <span className="skill-tag">Cloud Architecture</span>
                  <span className="skill-tag">API Development</span>
                  <span className="skill-tag">DevOps</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="certifications">
          <h3>Certifications & Education</h3>
          <div className="cert-grid">
            <div className="cert-card">
              <h4>AWS Cloud Application Developer</h4>
              <p>Amazon Cloud Institute Graduate</p>
            </div>
            <div className="cert-card">
              <h4>AWS Cloud Practitioner</h4>
              <p>Certified AWS Professional</p>
            </div>
            <div className="cert-card">
              <h4>AI Practitioner</h4>
              <p>Certified AI Professional</p>
            </div>
            <div className="cert-card">
              <h4>Master of Public Health</h4>
              <p>Healthcare & Community Focus</p>
            </div>
          </div>
        </section>

        <section className="values">
          <h3>My Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>🙏 Faith-Driven</h4>
              <p>Technology as a tool for positive impact and community building</p>
            </div>
            <div className="value-item">
              <h4>👨‍👩‍👧‍👦 Family-Focused</h4>
              <p>Solutions that support families and strengthen relationships</p>
            </div>
            <div className="value-item">
              <h4>🏥 Healthcare-Oriented</h4>
              <p>Leveraging technology to improve health outcomes and accessibility</p>
            </div>
            <div className="value-item">
              <h4>🌍 Community-Building</h4>
              <p>Growing and supporting cloud/AI communities through sharing knowledge</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About