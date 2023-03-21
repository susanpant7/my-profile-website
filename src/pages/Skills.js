import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Skills.module.css";

const SkillsBox = ({ skill }) => {
  return (
    <div className={styles.skillBox}>
      <span>{skill}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="work-experience box">
      <h2>
        <FontAwesomeIcon icon={faLaptopCode} /> SKILLS
      </h2>

      <div className={styles.skillsContainer}>
        <SkillsBox skill="Grails" />
        <SkillsBox skill="Blazor" />
        <SkillsBox skill="ASP .NET" />
        <SkillsBox skill="MySQL" />
        <SkillsBox skill="ElasticSearch" />
        <SkillsBox skill="Groovy" />
        <SkillsBox skill="Java" />
        <SkillsBox skill="C#" />
        <SkillsBox skill="Python" />
        <SkillsBox skill="React Js" />
        <SkillsBox skill="React Native" />
        <SkillsBox skill="jQuery" />
        <SkillsBox skill="Git" />
        <SkillsBox skill="Jira" />
        <SkillsBox skill="AWS" />
      </div>
    </div>
  );
};

export default Skills;
