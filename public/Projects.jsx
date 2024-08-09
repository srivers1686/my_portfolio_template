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
    imageURL: './assets/profilepicture'
  },
  {
    title: 'My portfolio',
    description: 'Focuses on who I am, my work and what I am learning',
    repositoryLink: 'Link to the GitHub repository',
  },
  
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <div className="project-image-container">
            <img src={project.imageURL} alt={project.title} className="project-image" />
          </div>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>
        </section>
      ))}
    </main>
  )
}

export default Projects