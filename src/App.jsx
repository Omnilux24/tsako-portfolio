import React, { useState } from 'react';
import { 
  Download, 
  Code2, 
  Database, 
  Shield, 
  Cloud, 
  Cpu, 
  Smartphone, 
  Layers,
  ExternalLink,
  Phone,
  Mail,
  Play
} from 'lucide-react';

// Import your custom hero image from the assets directory
import heroImg from './assets/hero.png';

// Custom inline SVG for GitHub
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Custom inline SVG for LinkedIn
const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [selectedTags, setSelectedTags] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tagsList = [
    "Mobile App", "Database Design", "Web Application", 
    "Backend", "Frontend", "Full Stack Development", "Maintenance"
  ];

  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out Name, Email, and Message fields.");
      return;
    }

    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Portfolio Lead - Tsako Novela",
          message: formData.message,
          selected_services: selectedTags.join(", ") || "None Selected"
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSelectedTags([]);
      } else {
        alert(result.message || "Submission failed. Please check your Access Key.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please check your network connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-stone-800 font-sans selection:bg-[#831a15] selection:text-white scroll-smooth">
      
      {/* Infinite Horizontal Marquee Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* HEADER SECTION (DARK BURGUNDY THEME) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e0e0c]/95 backdrop-blur-md flex justify-between items-center py-6 px-6 md:px-12 lg:px-24 border-b border-stone-900">
        <div className="text-white font-bold text-lg tracking-widest">
          TSAKO NOVELA
        </div>
        <div className="hidden md:flex gap-8 text-xs font-semibold tracking-wider text-stone-300">
          <a href="#about" className="hover:text-white transition duration-300">Home</a>
          <a href="#about" className="hover:text-white transition duration-300">Who's This</a>
          <a href="#services" className="hover:text-white transition duration-300">Services</a>
          <a href="#experience" className="hover:text-white transition duration-300">Experience</a>
          <a href="#contact" className="hover:text-white transition duration-300">Hit Me Up</a>
        </div>
        <div>
          <a href="#contact" className="bg-white text-stone-900 px-5 py-2.5 rounded font-bold text-xs tracking-wider hover:bg-stone-200 transition duration-300">
            Let's Talk ↗
          </a>
        </div>
      </nav>

      {/* HERO SECTION (DARK BURGUNDY THEME) */}
      <header className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 bg-[#1e0e0c] overflow-hidden text-left border-b border-stone-900">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[13vw] font-black tracking-widest select-none text-transparent opacity-10 uppercase z-0 [-webkit-text-stroke:2px_rgba(255,255,255,0.4)] [text-stroke:2px_rgba(255,255,255,0.4)]">
          ENGINEER
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-white text-3xl md:text-4xl font-light mb-4">
              Welcome to My <br />
              <span className="font-extrabold text-white">Portfolio</span>
            </h2>
            <p className="text-stone-400 text-sm md:text-base mb-8 max-w-md leading-relaxed">
              Explore my work, skills, and experience as a software engineer dedicated to building reliable digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/Tsako_Novela_CV.pdf" 
                download="Tsako_Novela_CV.pdf"
                className="bg-[#a3221b] hover:bg-[#851a15] text-white px-6 py-3.5 rounded font-bold text-xs tracking-wider flex items-center gap-2 transition duration-300 shadow-lg"
              >
                Download CV <Download size={14}/>
              </a>
              <a 
                href="https://github.com/Omnilux24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black/40 hover:bg-black/60 text-white border border-stone-800 px-6 py-3.5 rounded font-bold text-xs tracking-wider flex items-center gap-2 transition duration-300 shadow-lg"
              >
                GitHub Profile <GithubIcon size={14}/>
              </a>
            </div>
          </div>
          
          {/* Right Column (Visual Portrait Image using original colors) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Soft Red Glow Behind Image */}
              <div className="absolute -inset-1 bg-[#a3221b] rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500"></div>
              
              {/* Image Container Wrapper */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-end">
                
                {/* 
                  Renders the picture in original color (no grayscale or blending filters).
                */}
                <img 
                  src={heroImg} 
                  alt="Tsako Novela Portrait" 
                  className="absolute inset-0 w-full h-full object-cover transition duration-300"
                />
                
                {/* Soft black bottom gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Bottom details card on the visual frame */}
                <div className="relative z-10 p-6 w-full flex justify-between items-center">
                  <div>
                    <p className="text-white font-bold text-sm tracking-wide">Tsako Novela</p>
                    <p className="text-stone-300 text-xs">Based in South Africa</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/tsako-novela/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white transition duration-300">
                      <LinkedinIcon size={18} />
                    </a>
                    <a href="https://github.com/Omnilux24" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white transition duration-300">
                      <GithubIcon size={18} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT ME SECTION (WHITE THEME) */}
      <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-white border-b border-stone-100 text-left scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          
          <div className="w-12 h-[2px] bg-stone-800 mb-6"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <span className="text-stone-400 text-xs font-bold tracking-widest uppercase block mb-2">ABOUT ME</span>
              <h2 className="text-3xl md:text-4xl text-stone-900 font-extrabold leading-tight">
                Discover the Story, Passion, <br />
                and Purpose <span className="text-stone-400 font-normal">Behind the Person You See Here</span>
              </h2>
            </div>
            <div className="text-stone-600 text-sm md:text-base leading-relaxed space-y-6">
              <p>
                I am a passionate individual with a strong interest in technology and digital creation. I enjoy exploring ideas, solving problems, and transforming concepts into clear and functional outcomes. I believe consistency, attention to detail, and continuous learning are essential in creating meaningful work.
              </p>
              <p>
                I continue to develop my skills through various projects and experiences that challenge both my technical and creative abilities.
              </p>
            </div>
          </div>

          {/* Crafted Mind Stats Row */}
          <div className="border-t border-stone-200 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-12">
              <h3 className="text-2xl md:text-3xl text-stone-950 font-black tracking-tight leading-none uppercase">
                The Crafted Mind That Builds <br />
                <span className="text-stone-400 font-medium">the Future of Modern Technology</span>
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-5xl font-black text-stone-900">10+</h4>
                  <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mt-1">Projects Completed</p>
                  <p className="text-stone-400 text-xs mt-1">Successfully delivered a wide range of platforms across different ecosystems.</p>
                </div>
                <div className="border-t border-stone-100 pt-6">
                  <h4 className="text-5xl font-black text-stone-900">5+</h4>
                  <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mt-1">Years of Experience</p>
                  <p className="text-stone-400 text-xs mt-1">Built through continuous learning and hands-on practice dan developing strong problem-solving skills.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl aspect-video bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 shadow-md group">
                <div className="absolute inset-0 bg-stone-950/5 group-hover:bg-stone-950/20 transition duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-lg transform group-hover:scale-115 transition duration-300">
                    <Play size={20} className="fill-current ml-1" />
                  </div>
                </div>
                <div className="w-full h-full bg-stone-50 flex items-center justify-center font-mono text-[10px] text-stone-300 select-none">
                  {`// Workspace Stream Active`}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CURATED TOOLS SECTION (WHITE THEME) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#faf9f9] border-b border-stone-100 text-left">
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-[2px] bg-stone-800 mb-6"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
            <div className="lg:w-1/2">
              <span className="text-stone-400 text-xs font-bold tracking-widest uppercase block mb-2">TOOLS</span>
              <h2 className="text-3xl text-stone-900 font-extrabold">
                A Curated Set of <span className="text-stone-400 font-normal">Tools and Technologies Mastered</span> to Build Reliable Software Solutions
              </h2>
            </div>
            <p className="lg:w-1/2 text-stone-500 text-sm leading-relaxed">
              This section highlights a carefully selected set of tools and technologies used to support efficient and reliable software development. I use Laravel, React, PHP, SQL, Python, Flutter, Cyber Security, WordPress, Azure, and AWS.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Laravel", cat: "PHP Engine", icon: <Layers size={24} /> },
              { name: "React", cat: "UI Dev", icon: <Code2 size={24} /> },
              { name: "Node.js / Python", cat: "Runtimes", icon: <Cpu size={24} /> },
              { name: "PostgreSQL", cat: "Databases", icon: <Database size={24} /> },
              { name: "MySQL / SQL", cat: "Schema Dev", icon: <Database size={24} /> },
              { name: "VS Code", cat: "Environment", icon: <Code2 size={24} /> }
            ].map((tool, idx) => (
              <div key={idx} className="bg-white border border-stone-200/80 p-6 rounded-xl hover:border-stone-400 hover:shadow-sm transition duration-300 flex flex-col items-center justify-center text-center">
                <div className="text-stone-800 mb-4">{tool.icon}</div>
                <h4 className="text-stone-900 font-bold text-sm">{tool.name}</h4>
                <span className="text-stone-400 text-[10px] font-semibold tracking-wider uppercase mt-1">{tool.cat}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES SECTION (DEEP BURGUNDY THEME) */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-[#1e0e0c] text-white text-left scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-[2px] bg-white/40 mb-6"></div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
            <div className="lg:w-1/2">
              <span className="text-[#a3221b] text-xs font-bold tracking-widest uppercase block mb-2">SERVICES</span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Presenting the Professional Services and Unique Value I Offer to Help You Achieve Your Goals
              </h2>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <p className="text-stone-400 text-sm leading-relaxed">
                I design, optimize, and build complete pipelines. From cross-platform mobile apps to secure corporate database servers, I focus on clean performance metrics and cybersecurity compliance.
              </p>
              <a href="#contact" className="inline-block bg-[#a3221b] hover:bg-[#851a15] text-white px-5 py-3 rounded text-xs font-bold tracking-wider transition duration-300">
                Explore More ↗
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                id: "01",
                title: "Software Development",
                desc: "Building scalable and efficient applications based on system requirements. Specialized in custom web engines and high-fidelity Flutter applications."
              },
              {
                id: "02",
                title: "Database Management",
                desc: "Designing, managing, and optimizing databases for secure data storage. Clean structure layouts using secure SQL/MySQL schemas."
              },
              {
                id: "03",
                title: "Testing & Debugging",
                desc: "Identifying issues and ensuring software runs smoothly and reliably. Comprehensive QA protocols with optimized cybersecurity controls."
              }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white text-stone-900 border border-stone-100 rounded-2xl p-8 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition duration-300 relative group min-h-[250px]">
                <div>
                  <div className="text-stone-400 font-mono text-xs mb-6 font-bold">{srv.id} // SERVICE</div>
                  <h3 className="text-xl font-extrabold text-stone-950 mb-3">{srv.title}</h3>
                  <p className="text-stone-500 text-xs leading-relaxed">{srv.desc}</p>
                </div>
                <div className="mt-8 flex justify-end w-full">
                  <span className="text-stone-400 group-hover:text-stone-900 font-bold text-sm transition">↗</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CAREER JOURNEY SECTION (WHITE THEME) */}
      <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-white text-left scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-[2px] bg-stone-800 mb-6"></div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
            <div className="lg:w-1/2">
              <span className="text-stone-400 text-xs font-bold tracking-widest uppercase block mb-2">CAREER JOURNEY</span>
              <h2 className="text-3xl text-stone-900 font-extrabold">
                A Comprehensive Journey Through <span className="text-stone-400 font-normal">My Professional Experience Across Multiple Companies</span>
              </h2>
            </div>
            <p className="lg:w-1/2 text-stone-500 text-sm leading-relaxed">
              This section presents a professional journey built through experience across multiple platforms and systems. Each role contributes to practical skills, adaptability, and a strong understanding of delivering reliable and well-structured solutions.
            </p>
          </div>

          <div className="border-t border-stone-200">
            {[
              {
                num: "01",
                role: "Lead Systems & Mobile Engineer",
                company: "Bidora, Luxesa & Roomza Platforms",
                desc: "Developing high-fidelity Flutter mobile applications, student accommodation portals, and organizing secure API frameworks utilizing Laravel & React.",
                years: "2022 - Present"
              },
              {
                num: "02",
                role: "Full-Stack Developer",
                company: "Equity360, Policy360, Payrun360, Tender360 & Payment360",
                desc: "Architecting automated payroll software, startup funding modules, supplier procurement flows, and secure transaction pipelines.",
                years: "2020 - 2022"
              },
              {
                num: "03",
                role: "Backend & Systems Contractor",
                company: "MMFleet & Corporate Networks",
                desc: "Engineering relational databases, telemetry interfaces, and custom admin platforms with an emphasized focus on server integrity.",
                years: "2018 - 2020"
              }
            ].map((exp, idx) => (
              <div key={idx} className="border-b border-stone-200 py-10 flex flex-col md:flex-row items-start justify-between gap-6 group hover:bg-stone-50/50 px-4 transition">
                <div className="flex items-start gap-6 md:w-3/4">
                  <span className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-xs font-bold text-stone-500 bg-white shadow-sm">
                    {exp.num}
                  </span>
                  <div>
                    <h4 className="text-stone-950 font-extrabold text-lg group-hover:text-[#a3221b] transition">
                      {exp.role} <span className="text-stone-400 font-normal">at {exp.company}</span>
                    </h4>
                    <p className="text-stone-500 text-xs mt-2 max-w-xl leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
                <div className="text-stone-500 font-bold text-sm tracking-wider whitespace-nowrap md:w-1/4 md:text-right pt-2">
                  {exp.years}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SHOWCASE PROJECTS (DEEP BURGUNDY THEME - 11 PROJECTS) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#1e0e0c] text-white text-left">
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-[2px] bg-white/40 mb-6"></div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
            <div className="lg:w-1/2">
              <span className="text-[#a3221b] text-xs font-bold tracking-widest uppercase block mb-2">SHOWCASE PROJECTS</span>
              <h2 className="text-3xl text-white font-extrabold">
                A Selection of Projects That <span className="text-stone-400 font-normal">Showcase My Experience in Software Engineering</span>
              </h2>
            </div>
            <p className="lg:w-1/2 text-stone-400 text-sm leading-relaxed">
              This section presents a curated selection of projects that reflect my experience and growth as a software engineer. Each project highlights practical problem-solving and technical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Policy360", tag: "Policy Management System", link: "https://policy360.co.za", sub: "Web Portal Layout" },
              { title: "Payment360", tag: "Payment Gateway Integration", link: "https://payment360.co.za", sub: "Fintech Platform" },
              { title: "Equity360", tag: "Startup Funding Network", link: "https://equity360.co.za", sub: "Laravel & React" },
              { title: "Payrun360", tag: "Payroll Management System", link: "https://payrun360.co.za", sub: "Enterprise Management" },
              { title: "Tender360", tag: "Procurement Bidding System", link: "https://tender360.co.za", sub: "Laravel & React Portal" },
              { title: "Bidora Portal", tag: "Auction Application Admin", link: "https://bidora.co.za", sub: "Full-Stack System" },
              { title: "Luxesa Delivery", tag: "On-Demand Utility App", link: "#", sub: "Flutter Mobile Engine" },
              { title: "Roomza", tag: "Student Accommodation System", link: "/roomza", sub: "Work In Progress" },
              { title: "MMFleet", tag: "Fleet Geolocation Telemetry", link: "https://mmfleet.co.za", sub: "SaaS Application" },
              { title: "Learning Skills", tag: "LMS Skills Platform", link: "https://learningskillsdevelopment.co.za/", sub: "Educational Hub" },
              { title: "Unhumanagement", tag: "Business Workforce App", link: "https://unhumanagement.co.za", sub: "HR Admin Panels" }
            ].map((p, idx) => (
              <div key={idx} className="bg-stone-900 border border-stone-850 rounded-2xl overflow-hidden hover:border-stone-700 hover:shadow-2xl transition duration-300 group flex flex-col justify-between">
                
                <div className="aspect-video bg-[#120807] flex flex-col justify-between p-4 border-b border-stone-850 relative overflow-hidden">
                  <div className="flex items-center gap-1.5 z-10">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  
                  <div className="my-auto text-center font-mono text-[11px] text-stone-500 select-none z-10 uppercase tracking-widest space-y-1">
                    <p className="text-[#a3221b] font-bold">{p.title}</p>
                    <p className="text-stone-600 text-[9px]">{p.sub}</p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-[#a3221b]/5 to-transparent pointer-events-none"></div>
                </div>

                <div className="p-6 flex justify-between items-center bg-[#170b09]">
                  <div>
                    <h4 className="text-white font-extrabold text-sm">{p.title}</h4>
                    <span className="text-stone-500 text-[10px] uppercase font-bold tracking-wider mt-0.5 block">{p.tag}</span>
                  </div>
                  {p.link !== "#" ? (
                    <a 
                      href={p.link} 
                      target={p.link.startsWith('/') ? "_self" : "_blank"} 
                      rel="noopener noreferrer" 
                      className="w-8 h-8 rounded-full bg-stone-850 border border-stone-800 flex items-center justify-center text-white hover:bg-white hover:text-[#170b09] transition duration-300"
                    >
                      ↗
                    </a>
                  ) : (
                    <span className="text-stone-600 text-xs font-bold italic">App</span>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION (WHITE THEME WITH BUBBLE LAYOUT) */}
      <section className="py-28 px-6 md:px-12 lg:px-24 bg-white text-center overflow-hidden relative">
        <div className="max-w-6xl mx-auto relative">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] font-black tracking-widest text-stone-100 uppercase pointer-events-none select-none z-0">
            TESTIMONIALS
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-16">
            
            {/* Top Bubble */}
            <div className="w-72 p-6 rounded-full bg-stone-50 border border-stone-200 flex flex-col items-center justify-center shadow-sm">
              <span className="text-stone-400 text-xs font-black uppercase mb-2">“</span>
              <p className="text-stone-600 text-[11px] leading-relaxed max-w-xs mb-3 font-medium">
                Working together was a great experience. The work was delivered on time with excellent quality.
              </p>
              <p className="text-stone-900 font-bold text-[10px]">Andi Pratama</p>
              <p className="text-stone-400 text-[9px]">Project Manager</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12 w-full">
              {/* Left Bubble */}
              <div className="w-72 p-6 rounded-full bg-stone-50 border border-stone-200 flex flex-col items-center justify-center shadow-sm">
                <span className="text-stone-400 text-xs font-black uppercase mb-2">“</span>
                <p className="text-stone-600 text-[11px] leading-relaxed max-w-xs mb-3 font-medium">
                  A highly professional individual with strong technical skills and great attention to detail.
                </p>
                <p className="text-stone-900 font-bold text-[10px]">Rina Kurniawati</p>
                <p className="text-stone-400 text-[9px]">Product Owner</p>
              </div>

              {/* Right Big Dark Bubble */}
              <div className="w-80 h-80 rounded-full bg-stone-850 border border-stone-800 text-white flex flex-col items-center justify-center p-8 shadow-xl">
                <span className="text-[#a3221b] text-xl font-black uppercase mb-3">“</span>
                <p className="text-stone-300 text-[12px] leading-relaxed max-w-xs mb-4 text-center font-medium">
                  Demonstrated strong problem-solving abilities and a clear understanding of project requirements. A dependable professional to work with.
                </p>
                <p className="text-white font-extrabold text-xs">Sarah Wijaya</p>
                <p className="text-stone-500 text-[10px] mt-0.5">Business Analyst</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT FORM SECTION (WHITE THEME) */}
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-[#faf9f9] text-left border-t border-stone-200/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-stone-400 text-xs font-bold tracking-widest uppercase block mb-3">GET IN TOUCH</span>
            <h2 className="text-3xl md:text-4xl text-stone-900 font-black tracking-tight leading-tight mb-4">
              Get in Touch to Start a Collaboration <br />
              <span className="text-stone-400 font-normal">After Exploring My Work and Expertise</span>
            </h2>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center bg-green-100 text-green-800 w-16 h-16 rounded-full mb-6 text-xl font-bold">✓</div>
                <h3 className="text-xl font-extrabold mb-1 text-stone-900">Message Transmitted!</h3>
                <p className="text-stone-500 text-sm">Thank you. I will review your request and reach out promptly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-[#a3221b] font-bold text-xs uppercase hover:underline">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">Name <span className="text-[#a3221b]">*</span></label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange}
                      className="py-2.5 border-b border-stone-300 bg-transparent text-stone-800 font-medium focus:outline-none focus:border-stone-900 text-sm transition"
                      placeholder="Your name" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">Email <span className="text-[#a3221b]">*</span></label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange}
                      className="py-2.5 border-b border-stone-300 bg-transparent text-stone-800 font-medium focus:outline-none focus:border-stone-900 text-sm transition"
                      placeholder="your@email.com" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">Subject <span className="text-[#a3221b]">*</span></label>
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleInputChange}
                      className="py-2.5 border-b border-stone-300 bg-transparent text-stone-800 font-medium focus:outline-none focus:border-stone-900 text-sm transition"
                      placeholder="Project details" 
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">Your Message <span className="text-[#a3221b]">*</span></label>
                  <textarea 
                    rows="3" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange}
                    className="py-2.5 border-b border-stone-300 bg-transparent text-stone-800 font-medium focus:outline-none focus:border-stone-900 text-sm transition resize-none" 
                    placeholder="Describe your requirement..."
                  ></textarea>
                </div>

                {/* Pill selection container */}
                <div className="text-left">
                  <div className="flex flex-wrap gap-2">
                    {tagsList.map((t, idx) => {
                      const isSel = selectedTags.includes(t);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleTagToggle(t)}
                          className={`text-[10px] px-3.5 py-1.5 rounded-full border font-bold tracking-wider transition duration-300 ${
                            isSel 
                              ? 'bg-stone-900 border-stone-900 text-white' 
                              : 'bg-transparent border-stone-200 text-stone-400 hover:border-stone-400 hover:text-stone-800'
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button type="submit" disabled={isSubmitting} className="bg-stone-800 hover:bg-[#a3221b] text-white px-8 py-3.5 rounded font-bold text-xs tracking-widest uppercase transition duration-300 shadow-md w-full sm:w-auto disabled:opacity-50">
                    {isSubmitting ? "Sending..." : "Send Me ↗"}
                  </button>
                  <p className="text-stone-400 text-[10px] italic">
                    * Your message will be reviewed and responded to promptly
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* INFINITE RUNNING MARQUEE SECTION */}
      <section className="bg-[#1e0e0c] border-t border-b border-stone-900 py-6 overflow-hidden relative select-none">
        <div className="flex whitespace-nowrap">
          <div className="flex gap-16 animate-marquee text-white font-extrabold text-sm tracking-widest uppercase">
            <span>CLEAN CODE ✦ SCALABLE APPS ✦ CYBER SECURITY ✦ DEPLOYED SYSTEMS ✦ CLEAN CODE ✦ SCALABLE APPS ✦ CYBER SECURITY ✦ DEPLOYED SYSTEMS ✦</span>
            <span>CLEAN CODE ✦ SCALABLE APPS ✦ CYBER SECURITY ✦ DEPLOYED SYSTEMS ✦ CLEAN CODE ✦ SCALABLE APPS ✦ CYBER SECURITY ✦ DEPLOYED SYSTEMS ✦</span>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION (DARK BURGUNDY THEME) */}
      <footer className="bg-[#120807] text-stone-500 py-16 px-6 md:px-12 lg:px-24 text-left border-t border-stone-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-xs">
              <a href="#about" className="hover:text-white transition duration-300">Who's This</a>
              <a href="#services" className="hover:text-white transition duration-300">Services</a>
              <a href="#experience" className="hover:text-white transition duration-300">Experience</a>
              <a href="#contact" className="hover:text-white transition duration-300">Hit Me Up</a>
            </div>
          </div>

          {/* Software Engineer Location Column */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Software Engineer</h4>
            <p className="text-stone-400 text-xs mb-1 font-bold">Based in South Africa</p>
            <p className="text-stone-500 text-[11px] mb-4">Available globally for remote engineering pipelines.</p>
            <div className="flex gap-4">
              <a href="https://github.com/Omnilux24" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-white transition duration-300">
                <GithubIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/tsako-novela/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-white transition duration-300">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Email Address Column */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Email Address</h4>
            <p className="text-stone-300 text-xs font-mono mb-6">DEV@TSAKONOVELA.CO.ZA</p>
            <a href="#contact" className="inline-block bg-[#a3221b] hover:bg-[#851a15] text-white text-xs font-bold tracking-wider px-5 py-3 rounded-lg transition duration-300">
              Hire Me ➔
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="max-w-6xl mx-auto pt-8 border-t border-stone-900/60 flex flex-col sm:flex-row justify-between items-center text-[10px] text-stone-600 gap-4">
          <p>© {new Date().getFullYear()} Tsako Novela. All rights reserved.</p>
          <p>Created with React & Tailwind CSS</p>
        </div>
      </footer>

    </div>
  );
}

export default App;