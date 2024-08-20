import { NavLink } from "react-router-dom";
import PlaceholderHero from '..//assets/purpleflowers.jpeg'

const fullName = 'Shakera Rivers';
const personalQuote = '"Great minds discuss ideas, average minds discuss events, small minds discuss people." -Eleanor Roosevelt';
const professionalSummary1 = "I'm Shakera Rivers, currently working as a Sales and Service Distribution Clerk at the United States Postal Service, seeking to transition into a career as a entry-level Developer. I hold a Bachelors of Science degree in Interdisciplinary Studies and have developed strong technical skills in Javascript, Python, HTML, CSS, React, and Git Hub through Npower, various projects and self study.";
const professionalSummary2 = "In my current role I have refined my customer service skills and operational support experience, which has equipped me with strong problem-solving abilities and a keen attention to detail. My passion for technology and continuous learning drives me to stay updated with the latest developments in web development and apply innovative solutions to real-world problems"


const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h2 className="text-4xl mb-2">Hi, I am {fullName}</h2>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">
        Contact Me
        </NavLink>
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <img className="hero-background" src={PlaceholderHero} alt="placeholder hero image" />
      </section>
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview.</h2>
        <p className="subsection-paragraph">{professionalSummary1}</p>
        <p className="subsection-paragraph">{professionalSummary2}</p>
        <NavLink to="/about">
        Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">I have worked on multiple projects that showcase my skills and experience through real-life examples. Each project includes a brief description and links to my repositories demonstrating my ability to tackle challenging problems. If you are interested in my work click on the link below to go to the project page.</p>
      
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home