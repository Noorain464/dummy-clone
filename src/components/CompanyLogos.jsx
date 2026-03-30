import './CompanyLogos.css';

const companies = [
  { name: 'Google', color: '#ea4335' },
  { name: 'Microsoft', color: '#00a4ef' },
  { name: 'Amazon', color: '#ff9900' },
  { name: 'Meta', color: '#1877f2' },
  { name: 'Netflix', color: '#e50914' },
  { name: 'Apple', color: '#ffffff' },
  { name: 'Uber', color: '#ffffff' },
  { name: 'Airbnb', color: '#ff5a5f' }
];

const CompanyLogos = ({ slots }) => {
  return (
    <section className="company-logos-section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 className="section-subtitle">{slots?.['Testimonials Section Headline'] ?? 'Our Alumni Work At Top Tech Companies'}</h3>
        
        <div className="marquee-container">
          <div className="marquee-content">
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="company-logo" style={{ '--brand-color': company.color }}>
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
