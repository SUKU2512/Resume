import './App.css';
import profilePic from './Photo/profilePic.jpg';
function App() {
  return (
    <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif', padding: '32px', maxWidth: '900px', margin: '40px auto', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #eaeaea', marginBottom: '24px', paddingBottom: '16px' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#2d3748' }}>Saragadam Sukanya</h1>
          <p style={{ margin: '8px 0', color: '#4a5568' }}>📍 Raidurg, Telangana</p>
          <p style={{ margin: '8px 0', color: '#4a5568' }}>
            📧 <a href="mailto:sukanyadevi15@gmail.com" style={{ color: '#3182ce', textDecoration: 'none' }}>sukanyadevi15@gmail.com</a>
          </p>
          <p style={{ margin: '8px 0', color: '#4a5568' }}>📞 +91-7989855433</p>
          <p>💼 <a href="https://linkedin.com/in/sukanyasaragada9" target="_blank" rel="noopener noreferrer" style={{ color: '#3182ce' }}>LinkedIn</a></p>
        </div>
        <img
          src={profilePic}
          alt="Profile"
          style={{
            width: '120px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
          }}
        />
      </header>
      <section>
        <h2 style={{ color: '#2b6cb0', marginTop: '0' }}>Professional Summary</h2>
        <p style={{ color: '#2d3748' }}>
          Results-driven Software Engineer with 3+ years of proven expertise in modern web development, UI/UX design, and full-stack application delivery. Adept at collaborating in agile teams, solving complex problems, and delivering high-quality, maintainable solutions. Passionate about continuous learning and leveraging technology to drive business outcomes
        </p>
      </section>

      <section>
        <h2 style={{ color: '#2b6cb0' }}>Technical Skills</h2>
        <ul style={{ color: '#2d3748' }}>
          <li><strong>Languages:</strong> HTML5, CSS3, JavaScript, Python</li>
          <li><strong>Frameworks/Libraries:</strong> React.js, Node.js, Express.js</li>
          <li><strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Postman</li>
          <li><strong>Databases:</strong> MongoDB, MySQL</li>
          <li><strong>Other:</strong> REST APIs, Responsive Design, Agile/Scrum, CI/CD</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#2b6cb0' }}>Education</h2>
        <p style={{ color: '#2d3748' }}>
          <strong>Master of Computer Application</strong><br />
          Gayatri Vidya Parishad, Visakhapatnam &mdash; <span style={{ color: '#718096' }}>Graduated: 2022</span>
        </p>
      </section>

      <section>
        <h2 style={{ color: '#2b6cb0' }}>Certifications</h2>
        <ul style={{ color: '#2d3748' }}>
          <li>Responsive Web Design &mdash; freeCodeCamp</li>
          <li>JavaScript Algorithms and Data Structures &mdash; Coursera</li>
          <li>Full-Stack Web Development &mdash; Udemy</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#2b6cb0' }}>Projects</h2>
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ color: '#2d3748' }}>Mondelez International Nutrition Science</h3>
          <p><strong>Tech Stack:</strong> HTML, CSS, React, Tailwind CSS</p>
          <ul>
            <li>Developed intuitive, mobile-first user interfaces to enhance user experience.</li>
            <li>Refactored and extended existing codebase to add new features and improve maintainability.</li>
            <li>Collaborated with QA to resolve issues and ensure product quality.</li>
          </ul>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ color: '#2d3748' }}>Freia</h3>
          <p><strong>Tech Stack:</strong> HTML, CSS, Bootstrap, JavaScript, TypeScript, SCSS</p>
          <ul>
            <li>Engineered responsive interfaces using Bootstrap and Tailwind CSS.</li>
            <li>Delivered client-specific pages and reusable components.</li>
            <li>Maintained code quality and reliability through best practices.</li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: '#2d3748' }}>FT-FMB-MS Orbital Service Engineering</h3>
          <p><strong>Tech Stack:</strong> Secure CRT, Data Explorer</p>
          <ul>
            <li>Monitored and updated modem connections and blockages.</li>
            <li>Ensured up-to-date Cloudnet status and device management.</li>
            <li>Automated device deletion and rack modem reboots for operational efficiency.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 style={{ color: '#2b6cb0' }}>Languages</h2>
        <ul style={{ color: '#2d3748' }}>
          <li>English (Fluent)</li>
          <li>Telugu (Native)</li>
          <li>Hindi (Conversational)</li>
        </ul>
      </section>
    </div>
  );
}

export default App;