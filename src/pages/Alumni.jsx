import { TrendingUp, Award, DollarSign } from 'lucide-react';
import './Alumni.css';

const transitions = [
  {
    name: "Priya Sharma",
    beforeCompany: "Infosys",
    beforeRole: "System Engineer",
    afterCompany: "Amazon",
    afterRole: "SDE II",
    hike: "210%"
  },
  {
    name: "Rahul Verma",
    beforeCompany: "TCS",
    beforeRole: "IT Analyst",
    afterCompany: "Microsoft",
    afterRole: "Software Engineer",
    hike: "185%"
  },
  {
    name: "Ankit Patel",
    beforeCompany: "Wipro",
    beforeRole: "Project Engineer",
    afterCompany: "Google",
    afterRole: "Software Engineer",
    hike: "250%"
  },
  {
    name: "Neha Gupta",
    beforeCompany: "Cognizant",
    beforeRole: "Programmer Analyst",
    afterCompany: "Atlassian",
    afterRole: "SDE",
    hike: "190%"
  }
];

const Alumni = () => {
  return (
    <div className="alumni-page">
      <div className="alumni-hero">
        <div className="container">
          <div className="alumni-badge">⭐ Top 1% Careers</div>
          <h1 className="alumni-title">From Service-Based to <span className="gradient-text">Product-Based</span></h1>
          <p className="alumni-subtitle">Join thousands of Scaler alumni who have successfully transitioned to the world's leading tech companies.</p>
          
          <div className="alumni-stats-bar">
            <div className="alumni-stat-card glass-panel">
              <TrendingUp size={32} color="#10B981" />
              <h3>126%</h3>
              <p>Average Salary Hike</p>
            </div>
            <div className="alumni-stat-card glass-panel">
              <DollarSign size={32} color="#facc15" />
              <h3>₹90 LPA</h3>
              <p>Highest Salary</p>
            </div>
            <div className="alumni-stat-card glass-panel">
              <Award size={32} color="#3b82f6" />
              <h3>900+</h3>
              <p>Hiring Partners</p>
            </div>
          </div>
        </div>
      </div>

      <section className="transitions-section">
         <div className="container">
           <h2 className="section-title text-center">Real People, <span className="gradient-text">Real Impact</span></h2>
           
           <div className="transitions-grid">
             {transitions.map((t, idx) => (
                <div key={idx} className="transition-card glass-panel">
                  <div className="transition-header">
                    <h4>{t.name}</h4>
                    <div className="hike-badge">+{t.hike} Hike</div>
                  </div>
                  
                  <div className="transition-body">
                    <div className="role-box before">
                      <span className="label">Before</span>
                      <p className="company">{t.beforeCompany}</p>
                      <p className="role">{t.beforeRole}</p>
                    </div>
                    
                    <div className="transition-arrow">
                      &#10230;
                    </div>
                    
                    <div className="role-box after">
                      <span className="label text-green">After Scaler</span>
                      <p className="company gradient-text">{t.afterCompany}</p>
                      <p className="role">{t.afterRole}</p>
                    </div>
                  </div>
                </div>
             ))}
           </div>
         </div>
      </section>
      
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to be our next success story?</h2>
          <button className="btn btn-primary cta-button">Apply for Scaler Academy</button>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
