import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-gradient-orb top-left"></div>
      <div className="hero-gradient-orb bottom-right"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🔥</span>
            <span>Join 50,000+ techies upskilling daily</span>
          </div>
          
          <h1 className="hero-title">
            Become the <span className="gradient-text">Top 1%</span> in Tech
          </h1>
          
          <p className="hero-subtitle">
            A structured, flexible, and outcome-focused alternative to self-learning.
            Master Software Development and Data Science with 1:1 mentorship from industry veterans.
          </p>
          
          <div className="hero-cta-group">
            <button className="btn btn-primary hero-btn-main">
              Explore Programs <ArrowRight className="btn-icon" size={20} />
            </button>
            <button className="btn btn-secondary hero-btn-outline">
              Take Free Masterclass
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="starts-group">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="#FACC15" color="#FACC15" size={16} />)}
              </div>
              <p><span>4.8/5</span> Average Rating</p>
            </div>
            <div className="stat-item">
              <CheckCircle color="#10B981" size={16} />
              <p><span>900+</span> Placement Partners</p>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glass-panel visual-card main-card">
            <div className="card-header">
              <div className="dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <span>curriculum.js</span>
            </div>
            <div className="card-body">
              <pre><code>
<span className="code-keyword">const</span> <span className="code-variable">journey</span> = [
  <span>"Fundamentals"</span>,
  <span>"Data Structures"</span>,
  <span>"Algorithms"</span>,
  <span>"System Design"</span>,
  <span>"Top 1% Career"</span>
];

<span className="code-keyword">await</span> <span className="code-function">scaler</span>.<span className="code-function">start</span>(journey);
              </code></pre>
            </div>
          </div>
          
          <div className="glass-panel visual-card stat-card float-animation-1">
            <div className="stat-card-content">
              <h4>126%</h4>
              <p>Avg. Salary Hike</p>
            </div>
          </div>
          
          <div className="glass-panel visual-card profile-card float-animation-2">
             <div className="profile-img">🧑‍💻</div>
             <div className="profile-info">
               <h4>Rahul S.</h4>
               <p>Placed at Amazon</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
