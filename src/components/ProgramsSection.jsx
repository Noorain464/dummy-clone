import { Code2, Briefcase, Brain, ArrowRight } from 'lucide-react';
import './ProgramsSection.css';

const programs = [
  {
    id: 'tech',
    title: 'Scaler School of Technology',
    tags: ['UG Program', 'Computer Science'],
    icon: <Code2 size={40} color="#f9322c" />,
    description: "4-year fully residential undergraduate program in Computer Science delivered by top tech leaders.",
    duration: '4 Years',
    audience: 'After 12th',
    theme: 'red'
  },
  {
    id: 'business',
    title: 'Scaler School of Business',
    tags: ['PG Program', 'Business & Tech'],
    icon: <Briefcase size={40} color="#3b82f6" />,
    description: 'Postgraduate program to create tech-fluent business leaders. Learn strategy, analytics & entrepreneurship.',
    duration: '18 Months',
    audience: 'Graduates & Professionals',
    theme: 'blue'
  },
  {
    id: 'ai-business',
    title: 'AI + Business',
    tags: ['Specialization', 'AI'],
    icon: <Brain size={40} color="#8b5cf6" />,
    description: 'Master the intersection of AI and business. Build LLM apps and drive AI strategy for enterprises.',
    duration: '12 Months',
    audience: 'Working Professionals',
    theme: 'purple'
  }
];

const ProgramsSection = () => {
  return (
    <section className="programs-section" id="programs">
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
