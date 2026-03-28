import { Code2, Database, ArrowRight } from 'lucide-react';
import './ProgramsSection.css';

const programs = [
  {
    id: 'academy',
    title: 'Scaler Academy',
    tags: ['Software Engineering', 'System Design'],
    icon: <Code2 size={40} color="#f9322c" />,
    description: 'Master Computer Science fundamentals, System Design, and Full Stack Development. Ideal for software engineers looking to level up.',
    duration: '9-11 Months',
    audience: 'For working professionals',
    theme: 'red'
  },
  {
    id: 'data-science',
    title: 'Data Science & Machine Learning',
    tags: ['Data Science', 'AI', 'ML'],
    icon: <Database size={40} color="#3b82f6" />,
    description: 'Learn Data Science from scratch. Master Python, SQL, Machine Learning, and Deep Learning with real-world projects.',
    duration: '11-15 Months',
    audience: 'For working professionals',
    theme: 'blue'
  }
];

const ProgramsSection = () => {
  return (
    <section className="programs-section" id="academy">
      <div className="container">
        <div className="programs-header">
          <h2 className="section-title">Programs Designed For <span className="gradient-text">Impact</span></h2>
          <p className="section-desc">Extensive curriculums covering from fundamentals to advanced concepts, guided by top 1% industry experts.</p>
        </div>
        
        <div className="programs-grid">
          {programs.map((prog) => (
             <div className="glass-panel program-card" key={prog.id} data-theme={prog.theme}>
               <div className="program-icon-wrapper">
                 {prog.icon}
               </div>
               
               <div className="program-tags">
                 {prog.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
               </div>
               
               <h3 className="program-title">{prog.title}</h3>
               <p className="program-desc">{prog.description}</p>
               
               <div className="program-meta">
                 <div className="meta-item">
                   <span className="meta-label">Duration</span>
                   <span className="meta-val">{prog.duration}</span>
                 </div>
                 <div className="meta-item">
                   <span className="meta-label">Target</span>
                   <span className="meta-val">{prog.audience}</span>
                 </div>
               </div>
               
               <button className="program-view-btn">
                 View Curriculum <ArrowRight size={16} />
               </button>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
