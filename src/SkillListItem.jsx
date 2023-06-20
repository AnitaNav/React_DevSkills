import "./SkillListItem.css";

export default function SkillListItem({ skill, level, index }) {
  return (
    <li className="SkillListItem">
      <div>{skill}</div>
      <div className="level">LEVEL {level}</div>
    </li>
  );
}
