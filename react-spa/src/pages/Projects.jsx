import React, { useState } from 'react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "HomeHealthCloud AI",
      category: "healthcare",
      description: "Predictive healthcare platform for elderly care with fall prevention, wound risk analytics, and multilingual support.",
      tech: ["AWS Bedrock", "SageMaker", "DynamoDB", "Lambda", "React"],
      status: "In Development",
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "Bible Study Voice Assistant",
      category: "faith-tech",
      description: "Voice-enabled Bible study application with interactive scripture lookup and commentary.",
      tech: ["JavaScript", "Web Speech API", "HTML5", "CSS3"],
      status: "Deployment Ready",
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "Cybersecurity Threat Analysis",
      category: "cybersecurity",
      description: "Comprehensive network security assessment and vulnerability scanning for Oasis Infobyte internship.",
      tech: ["Nmap", "Nikto", "OWASP ZAP", "Python", "Network Analysis"],
      status: "25% Complete",
      link: "#",
      featured: false
    },
    {
      id: 4,
      title: "Elshadai Injera Services",
      category: "business",
      description: "E-commerce platform connecting Ethiopian Injera makers with diaspora customers worldwide.",
      tech: ["AWS Amplify", "Next.js", "S3", "Payment APIs"],
      status: "In Development",
      link: "#",
      featured: true
    },
    {
      id: 5,
      title: "AWS AI Agent Hackathon",
      category: "ai",
      description: "AI care agent for smart home-health monitoring using AWS Bedrock Agents.",
      tech: ["AWS Bedrock", "Lambda", "IoT Core", "SageMaker"],
      status: "Hackathon Entry",
      link: "#",
      featured: false
    },
    {
      id: 6,
      title: "Little Doctors Adventure",
      category: "education",
      description: "Educational game teaching medical concepts to children through interactive play.",
      tech: ["Python", "HTML5", "AWS Amplify", "DynamoDB"],
      status: "Prototype",
      link: "#",
      featured: false
    }
  ]

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'faith-tech', label: 'Faith Tech' },
    { key: 'cybersecurity', label: 'Cybersecurity' },
    { key: 'business', label: 'Business' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'education', label: 'Education' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const getStatusColor = (status) => {
    switch (status) {
      case 'Deployment Ready': return 'status-ready'
      case 'In Development': return 'status-development'
      case 'Hackathon Entry': return 'status-hackathon'
      case 'Prototype': return 'status-prototype'
      default: return 'status-progress'
    }
  }

  return (
    <div className="projects">
      <div className="container">
        <section className="projects-hero">
          <h1>My Projects</h1>
          <p className="lead">
            A collection of faith-driven technology solutions spanning healthcare AI, 
            cybersecurity, and community-focused applications.
          </p>
        </section>

        <section className="projects-filter">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.key}
                className={`filter-btn ${filter === category.key ? 'active' : ''}`}
                onClick={() => setFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        <section className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && <div className="featured-badge">Featured</div>}
              
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`project-status ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.link} className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className="github-cta">
          <div className="cta-content">
            <h3>Want to see more?</h3>
            <p>Check out my GitHub for additional projects and contributions</p>
            <a href="https://github.com/hiwotjewore" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Visit GitHub Profile
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects