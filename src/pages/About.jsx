import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/profilepicture.jpeg';
// Replace these variables with your information
const firstName = 'Shakera Rivers';
const jobTitle = 'Sales and Service DIstribution Clerk';
const company = 'the United States Postal Service';
const mainDuty = 'Handling customer service and support operations';
const jobLocation = 'various locations';
const briefJobDescription = 'Currently working as a Sales and Service Distribution Clerk at the United States Postal Service, I handle customer service and operations support. I am looking to transition into a full stack developer role to leverage my skills in web development. ';
const careerObjective = 'IT professional with experience in customer service and operations support. Possess knowledge of the web development process, troubleshooting problems and building successful solutions. ';
const personalLife = 'In my free time, I enjoy spending time in nature , biking, hiking, traveling , and exploring new cultures and countries, I am a lifelong learner, always looking for opportunities to expand my knowledge and skills" ';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headShot */}
          <img className='headShot' src={PlaceholderImage} alt="profilePicture.jpeg" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, feel free to reach out to me.</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;