import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend service
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact">
      <div className="container">
        <section className="contact-hero">
          <h1>Get In Touch</h1>
          <p className="lead">
            Let's collaborate on faith-driven technology solutions that make a positive impact. 
            I'm always excited to discuss new opportunities and partnerships.
          </p>
        </section>

        <section className="contact-content">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Connect</h2>
              <p>
                Whether you're interested in healthcare AI, cybersecurity consulting, 
                or faith-based application development, I'd love to hear from you.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-info">
                    <h4>Email</h4>
                    <p>hiwot.jewore@example.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">💼</div>
                  <div className="method-info">
                    <h4>LinkedIn</h4>
                    <p>Connect for professional networking</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">🐙</div>
                  <div className="method-info">
                    <h4>GitHub</h4>
                    <p>Explore my open source contributions</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">☁️</div>
                  <div className="method-info">
                    <h4>AWS Community</h4>
                    <p>Active in AWS events and hackathons</p>
                  </div>
                </div>
              </div>

              <div className="availability">
                <h3>Current Availability</h3>
                <ul>
                  <li>✅ Healthcare AI consulting projects</li>
                  <li>✅ AWS cloud architecture reviews</li>
                  <li>✅ Faith-based application development</li>
                  <li>✅ Cybersecurity assessments</li>
                  <li>✅ Speaking at tech/faith community events</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-section">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="healthcare-ai">Healthcare AI Project</option>
                    <option value="cybersecurity">Cybersecurity Consulting</option>
                    <option value="faith-tech">Faith-Based Application</option>
                    <option value="aws-consulting">AWS Cloud Consulting</option>
                    <option value="speaking">Speaking Opportunity</option>
                    <option value="collaboration">General Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or how we can work together..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="community-involvement">
          <h3>Community Involvement</h3>
          <div className="community-grid">
            <div className="community-item">
              <h4>📝 "Exciting Wednesdays" Column</h4>
              <p>Weekly LinkedIn posts on "How AWS, Cloud, and AI Are Transforming Healthcare"</p>
            </div>
            <div className="community-item">
              <h4>🏆 AWS Hackathons</h4>
              <p>Active participant in AWS community events and AI/ML competitions</p>
            </div>
            <div className="community-item">
              <h4>🌟 Hiwot Cloud Solutions</h4>
              <p>Portfolio brand integrating faith + technology + positive impact</p>
            </div>
            <div className="community-item">
              <h4>👥 Mentorship</h4>
              <p>Supporting aspiring cloud developers and healthcare technologists</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact