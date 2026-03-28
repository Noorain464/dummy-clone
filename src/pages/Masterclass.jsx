import { Calendar, Clock, Video, ChevronRight } from 'lucide-react';
import './Masterclass.css';

const masterclasses = [
  {
    title: "Cracking System Design for FAANG",
    instructor: "Anshuman Singh",
    role: "Co-Founder, Scaler",
    date: "Sat, 28 Oct",
    time: "5:00 PM - 8:00 PM IST",
    image: "👨‍🏫"
  },
  {
    title: "Mastering Dynamic Programming",
    instructor: "Tarun Malhotra",
    role: "Ex-Google Software Engineer",
    date: "Sun, 29 Oct",
    time: "4:00 PM - 7:00 PM IST",
    image: "👨‍💻"
  },
  {
    title: "Intro to GenAI & Large Language Models",
    instructor: "Priyanka Desai",
    role: "Data Scientist, Meta",
    date: "Wed, 01 Nov",
    time: "7:00 PM - 9:00 PM IST",
    image: "👩‍🔬"
  }
];

const Masterclass = () => {
  return (
    <div className="masterclass-page">
      <div className="mc-hero container">
        <div className="mc-hero-content">
          <div className="alumni-badge">🟢 Live Classes</div>
          <h1 className="alumni-title">Free <span className="gradient-text">Live Masterclasses</span></h1>
          <p className="alumni-subtitle">Learn from industry veterans who have built scalable systems at top product companies. Reserve your seat today!</p>
        </div>
        
        <div className="mc-register-card glass-panel">
          <h3>Register for Free</h3>
          <p>Get the link to join the upcoming live session.</p>
          <form className="register-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+91 9876543210" required />
            </div>
            <button className="btn btn-primary submit-btn">Book My Seat</button>
          </form>
        </div>
      </div>
      
      <section className="schedule-section">
        <div className="container">
          <h2 className="section-title">Upcoming Schedule</h2>
          <div className="schedule-list">
            {masterclasses.map((cls, idx) => (
               <div key={idx} className="mc-card glass-panel">
                 <div className="mc-card-header">
                   <div className="mc-instructor">
                     <div className="instructor-emoji">{cls.image}</div>
                     <div>
                       <h4>{cls.instructor}</h4>
                       <span className="inst-role">{cls.role}</span>
                     </div>
                   </div>
                   <div className="mc-time-info">
                     <span className="time-badge"><Calendar size={16}/> {cls.date}</span>
                     <span className="time-badge"><Clock size={16}/> {cls.time}</span>
                   </div>
                 </div>
                 
                 <div className="mc-card-body">
                   <h3 className="mc-topic">{cls.title}</h3>
                   <div className="mc-actions">
                     <button className="btn btn-secondary"><Video size={18} style={{marginRight: '8px'}} /> Remind Me</button>
                     <button className="mc-link-btn">View Details <ChevronRight size={18} /></button>
                   </div>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Masterclass;
