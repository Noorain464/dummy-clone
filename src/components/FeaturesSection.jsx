import { Users, BookOpen, Briefcase, GraduationCap, Video, MessageSquare } from 'lucide-react';
import './FeaturesSection.css';

const features = [
  {
    icon: <Users size={32} color="#f9322c" />,
    title: "1:1 Mentorship",
    desc: "Get matched with an industry expert who will mentor you, review your code, and guide your career.",
    delay: "0s"
  },
  {
    icon: <BookOpen size={32} color="#f9322c" />,
    title: "Expert Curriculum",
    desc: "Syllabus constantly updated by tech leaders to reflect real-world engineering challenges.",
    delay: "0.1s"
  },
  {
    icon: <Briefcase size={32} color="#f9322c" />,
    title: "Career Support",
    desc: "Resume reviews, mock interviews, and dedicated placement assistance to get you hired.",
    delay: "0.2s"
  },
  {
    icon: <Video size={32} color="#f9322c" />,
    title: "Live Classes",
    desc: "Interactive live sessions with top instructors. Get your doubts resolved in real-time.",
    delay: "0.3s"
  },
  {
    icon: <MessageSquare size={32} color="#f9322c" />,
    title: "Vibrant Community",
    desc: "Join a network of thousands of learners and alumni building the future of tech.",
    delay: "0.4s"
  },
  {
    icon: <GraduationCap size={32} color="#f9322c" />,
    title: "Alumni Status",
    desc: "Lifelong access to the Scaler network, exclusive events, and continuous learning materials.",
    delay: "0.5s"
  }
];

const FeaturesSection = ({ slots }) => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">{slots?.['Outcomes / Benefits Headline'] ?? <>Why Choose <span className="gradient-text">Scaler</span></>}</h2>
          <p className="section-desc">{slots?.['Outcomes Supporting Copy'] ?? "We don't just teach, we transform careers. Here's how we help you succeed."}</p>
        </div>
        
        <div className="features-grid">
          {features.map((feat, idx) => (
            <div className="feature-card" key={idx} style={{ animationDelay: feat.delay }}>
              <div className="feature-icon">{feat.icon}</div>
              <h3 className="feature-title">{feat.title}</h3>
              <p className="feature-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="features-stats-banner glass-panel">
          <div className="banner-stat">
            <h4>50k+</h4>
            <p>Careers Transformed</p>
          </div>
          <div className="banner-divider"></div>
          <div className="banner-stat">
            <h4>900+</h4>
            <p>Hiring Partners</p>
          </div>
          <div className="banner-divider"></div>
          <div className="banner-stat">
            <h4>100+</h4>
            <p>Expert Mentors</p>
          </div>
          <div className="banner-divider"></div>
          <div className="banner-stat">
            <h4>₹21.6L</h4>
            <p>Average Salary</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
