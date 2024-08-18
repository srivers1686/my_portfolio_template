import { FaGithub } from "react-icons/fa6";
// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {

    title: 'Maternity Muse',
    description: 'Team project focused on maternity and motherhood',
    repositoryLink: 'https://github.com/Path2Tech/Path2Tech-Capstone-Project.git',
    // get repositoryLink() {
    //   return this._repositoryLink;
    // },
    // set repositoryLink(value) {
    //   this._repositoryLink = value;
    // },
    imageURL: "src/assets/maternityimage.jpg",
  },
  {
    title: "Shakera's Portfolio",
    description: 'Focuses on who I am, my work and what I am learning in the technology space',
    repositoryLink: 'https://github.com/srivers1686/my_portfolio_template.git',
    imageURL: "src/assets/flowers-5383054_1280.jpeg",
  },
  {
  title: "Weather-App-Template",
    description: 'This app was done to give the weather of searched cities',
    repositoryLink: 'Link to the GitHub repository',
    imageURL: "src/assets/sunrise.jpg",
  },
  
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border-2 rounded-lg">
          <section className="project-image-container">
            <img src={project.imageURL} alt={project.title} className="project-image" />
          </section>
          <section className="project-details">
          <FaGithub /> 
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-lg">{project.description}</p>
            <p>
              Check out the link to the project repository 
              <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer">
                here
              </a>
              .
            </p>
          </section>
        </section>
      ))}
    </main>
  );
};

export default Projects