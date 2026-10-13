import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, BrainCircuit, ChartNoAxesCombined, Code2, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Menu, X, Cpu, Database, Layers3, Sparkles, Terminal, Workflow } from "lucide-react";
import "./App.css";

const skills = [
 {title:"Programming",items:["Python","Java","SQL / MySQL"],icon:Code2},
 {title:"Data Science",items:["Pandas","NumPy","Matplotlib","EDA","Data Cleaning","Data Visualization"],icon:ChartNoAxesCombined},
 {title:"AI & Machine Learning",items:["Scikit-learn","Supervised Learning","Classification","Predictive Modeling","Feature Engineering","LLMs","Prompt Engineering"],icon:BrainCircuit},
 {title:"Deep Learning",items:["CNN","Image Classification","Data Augmentation"],icon:Cpu},
 {title:"Tools & Web",items:["Git","GitHub","HTML","CSS"],icon:Terminal},
 {title:"Core Strengths",items:["Statistical Analysis","Problem Solving","Analytical Thinking","Data Interpretation"],icon:Workflow}
];
const projects = [
 {number:"01",title:"Gesture Recognition",type:"COMPUTER VISION · DEEP LEARNING",description:"A hand-gesture recognition project exploring CNN architectures, image preprocessing, model training, and evaluation.",metrics:[["95%","MNIST accuracy"],["0.85","F1-score"],["+5%","Baseline improvement"]],tags:["Python","CNN","Computer Vision","Data Augmentation"],icon:BrainCircuit},
 {number:"02",title:"Alcohol Detector",type:"SAFETY-ORIENTED SYSTEM CONCEPT",description:"A device/system concept focused on detecting alcohol presence in breath for potential safety-oriented applications.",metrics:[],tags:["Sensors","Detection","Safety Applications"],icon:Cpu}
];
const reveal = {hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut" as const}}};

export default function App() {
 const [menuOpen,setMenuOpen] = useState(false);
 const closeMenu = () => setMenuOpen(false);
 return <div className="site-shell">
  <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
  <header className="topbar">
   <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">MC</span><span>MUDURU CHARAN<span className="brand-dot">.</span></span></a>
   <button className="menu-toggle" aria-label="Toggle navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
   <nav className={menuOpen?"nav-links nav-open":"nav-links"}>{["About","Skills","Projects","Experience","Education","Contact"].map(item=><a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}<a className="nav-resume" href="/resume.pdf" download><Download size={15}/> Resume</a></nav>
  </header>
  <main>
   <section className="hero section-wrap" id="home">
    <div className="hero-copy">
     <motion.div className="eyebrow" initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}} transition={{duration:.6}}><span className="status-dot"/> OPEN TO OPPORTUNITIES <span className="eyebrow-line"/></motion.div>
     <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.1}}>Turning data<br/>into <span className="gradient-text">direction.</span></motion.h1>
     <motion.p className="hero-lede" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.2}}>I'm <strong>Muduru Charan</strong>, an Electronics and Communication Engineering graduate exploring data science, AI/ML, and practical software solutions.</motion.p>
     <motion.div className="hero-actions" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.3}}><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17}/></a><a className="button button-ghost" href="/resume.pdf" download>Download resume <Download size={16}/></a></motion.div>
     <motion.div className="hero-meta" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.55}}><span><MapPin size={15}/> Tirupati, Andhra Pradesh</span><span className="meta-separator"/><span><Sparkles size={15}/> Data · AI · Engineering</span></motion.div>
    </div>
    <motion.div className="hero-visual" initial={{opacity:0,scale:.94,x:16}} animate={{opacity:1,scale:1,x:0}} transition={{duration:.8,delay:.2}}>
     <div className="visual-grid"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/>
     <div className="hero-core"><div className="core-glow"/><div className="core-icon"><BrainCircuit size={66} strokeWidth={1.15}/></div><span className="core-label">IDEAS → INSIGHT</span></div>
     <div className="float-card float-card-top"><span className="mini-icon violet"><Database size={17}/></span><div><b>Data analysis</b><small>Find the signal</small></div><span className="tiny-spark">↗</span></div>
     <div className="float-card float-card-bottom"><span className="mini-icon mint"><Cpu size={17}/></span><div><b>Machine learning</b><small>Make predictions</small></div><span className="pulse-ring"/></div>
     <div className="visual-caption"><span>PORTFOLIO / 2026</span><span>01 — 06</span></div><span className="visual-code code-one">model.fit(X, y)</span><span className="visual-code code-two">insight = data</span>
    </motion.div>
    <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE <ArrowDownRight size={14}/></a>
   </section>
   <section className="intro-strip section-wrap" id="about">
    <div className="section-index">01 / ABOUT</div><div className="intro-content">
     <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}}>Curious by nature.<br/><span className="muted-heading">Analytical by practice.</span></motion.h2>
     <div className="intro-text"><p>With a background in Electronics and Communication Engineering, I enjoy solving problems through code, data, and experimentation. My interests span machine learning, computer vision, data storytelling, and tools that make complex information easier to understand.</p><p>I value continuous learning, clear collaboration, and practical results. I'm looking for opportunities to grow with a team and contribute to meaningful technology projects.</p><a className="text-link" href="#contact">Let's connect <ArrowRight size={16}/></a></div>
    </div>
    <div className="stats-row"><div className="stat"><strong>95<span>%</span></strong><small>Gesture model accuracy</small></div><div className="stat"><strong>30<span>%</span></strong><small>Data-task efficiency gain</small></div><div className="stat"><strong>08.0</strong><small>Engineering CGPA / 10</small></div><div className="stat"><strong>03</strong><small>Certifications</small></div></div>
   </section>
   <section className="section-wrap section-block" id="skills"><div className="section-heading"><div><div className="section-index">02 / TOOLKIT</div><h2>Skills & <span className="gradient-text">capabilities.</span></h2></div><p>A growing toolkit for exploring data, training models, and creating useful digital experiences.</p></div>
    <div className="skills-grid">{skills.map((skill,i)=>{const Icon=skill.icon;return <motion.article className="skill-card" key={skill.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*.06}}><div className="skill-card-top"><span className="skill-icon"><Icon size={20}/></span><span className="card-number">0{i+1}</span></div><h3>{skill.title}</h3><div className="tag-list">{skill.items.map(item=><span className="tag" key={item}>{item}</span>)}</div></motion.article>})}</div>
   </section>
   <section className="projects-section" id="projects"><div className="section-wrap section-block"><div className="section-heading"><div><div className="section-index">03 / SELECTED WORK</div><h2>Projects with a <span className="gradient-text">purpose.</span></h2></div><p>Experiments and concepts focused on learning, accuracy, and real-world relevance.</p></div>
    <div className="projects-list">{projects.map(project=>{const Icon=project.icon;return <motion.article className="project-card" key={project.number} variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}}><div className="project-number">{project.number}</div><div className="project-main"><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag=><span className="tag" key={tag}>{tag}</span>)}</div></div><div className="project-side"><div className="project-art"><Icon size={46} strokeWidth={1.1}/><span className="art-orbit"/></div>{project.metrics.length>0&&<div className="project-metrics">{project.metrics.map(([value,label])=><div key={label}><strong>{value}</strong><small>{label}</small></div>)}</div>}</div></motion.article>})}</div>
   </div></section>
   <section className="section-wrap section-block" id="experience"><div className="section-heading"><div><div className="section-index">04 / EXPERIENCE</div><h2>Learning by <span className="gradient-text">doing.</span></h2></div><p>Hands-on experience applying Python and data science tools to practical tasks.</p></div>
    <div className="timeline"><div className="timeline-mark"><span/></div><div className="timeline-content"><div className="timeline-top"><div><span className="timeline-date">JUL 2023 — AUG 2023</span><h3>Python with Data Science Intern</h3><p className="company">Trios Technologies Pvt. Ltd.</p></div><span className="experience-badge">INTERNSHIP</span></div><ul><li>Supported data cleaning, analysis, and visualization with Pandas, NumPy, and Matplotlib.</li><li>Assisted with Scikit-learn models for predictive analysis and pattern recognition.</li><li>Automated data collection tasks using Python scripts, improving process efficiency by 30%.</li><li>Collaborated with team members to communicate findings through reports and dashboards.</li></ul></div></div>
   </section>
   <section className="education-section" id="education"><div className="section-wrap section-block"><div className="section-heading"><div><div className="section-index">05 / EDUCATION</div><h2>Foundations for <span className="gradient-text">what's next.</span></h2></div></div>
    <div className="education-grid"><article className="education-card featured-education"><span className="education-year">2021 — 2025</span><span className="education-symbol"><Layers3 size={22}/></span><h3>B.E. — Electronics & Communication Engineering</h3><p>Panimalar Institute of Technology</p><div className="education-score"><strong>8.0</strong><span>CGPA / 10</span></div></article><article className="education-card"><span className="education-year">2019 — 2021</span><span className="education-symbol"><Code2 size={21}/></span><h3>Higher Secondary Certificate</h3><p>Narayana Junior College</p><div className="education-score"><strong>81%</strong><span>Score</span></div></article><article className="education-card"><span className="education-year">2019</span><span className="education-symbol"><Sparkles size={21}/></span><h3>Secondary School Certificate</h3><p>Veda Vyasa Vidya Niketan</p><div className="education-score"><strong>9.3</strong><span>GPA</span></div></article></div>
    <div className="certifications"><span className="section-index">CERTIFICATIONS</span><div className="cert-list"><span>Smarticulture <small>IJRASET</small></span><span>Networking Essentials <small>Cisco</small></span><span>Cyber Security Analysis and Design <small>NASSCOM</small></span></div></div>
   </div></section>
   <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-index">06 / CONTACT</div><h2>Let's make something<br/><span className="gradient-text">meaningful.</span></h2><p>Interested in data, AI/ML, or entry-level technology opportunities? I'd be glad to connect.</p><a className="button button-primary contact-cta" href="mailto:m.charancherry00@gmail.com">Start a conversation <ArrowRight size={17}/></a>
    <div className="contact-details"><a href="mailto:m.charancherry00@gmail.com"><Mail size={17}/><span>m.charancherry00@gmail.com</span><ExternalLink size={13}/></a><a href="tel:+918019985001"><span className="phone-icon">↗</span><span>+91 80199 85001</span></a><a href="https://linkedin.com/in/m-charan-329b83229" target="_blank" rel="noreferrer"><Linkedin size={17}/><span>LinkedIn profile</span><ExternalLink size={13}/></a><a href="https://github.com/mudurucharan" target="_blank" rel="noreferrer"><Github size={17}/><span>GitHub profile</span><ExternalLink size={13}/></a></div>
   </div></section>
  </main>
  <footer className="footer section-wrap"><a href="#home" className="brand"><span className="brand-mark">MC</span><span>MUDURU CHARAN<span className="brand-dot">.</span></span></a><p>Designed with curiosity. Powered by continuous learning.</p><a className="back-top" href="#home">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} Muduru Charan</span></footer>
 </div>;
}
