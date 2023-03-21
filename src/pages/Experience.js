import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <>
      <div className="work-experience box">
        <h2>
          <FontAwesomeIcon icon={faBriefcase} /> WORK EXPERIENCE
        </h2>
        <div className="work-item">
          <h3>Senior Software Engineer (Full Stack web developer)</h3>
          <p>Cedar Gate Technologies</p>
          <p>04/2018 - Present</p>
          <ul>
            <li>
              Develop and manage web applications using Grails, Blazor, ASP
              .NET, and various programming languages for custom Rest API
              creation.
            </li>
            <li>
              Proficient in both relational database management systems like
              MySQL and non-relational search engines like ElasticSearch.
            </li>
            <li>
              Proficient in utilizing various AWS services, including S3, SQS,
              Kinesis, and EventBridge, to design and implement robust
              cloud-based solutions.
            </li>
            <li>
              Proficient in Git version control, including repository management
              and conflict resolution, for effective team collaboration.
            </li>
            <li>
              Experience in using Jira for project management, including task
              creation, progress tracking, and team collaboration to ensure
              successful project completion.
            </li>
          </ul>
        </div>

        <div className="work-item">
          <h3>Intren</h3>
          <p>Metro Infosys</p>
          <p>05/2017 - 11/2017</p>
          <ul>
            <li>
              Worked on web development projects using HTML, CSS, and
              Javascript.
            </li>
            <li>
              Assisted in creating and maintaining website layouts and user
              interfaces.
            </li>
            <li>
              Collaborated with team members to ensure project goals were met
              and completed within deadline.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
