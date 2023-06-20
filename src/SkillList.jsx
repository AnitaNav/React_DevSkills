import SkillListItem from "./SkillListItem";

export default function SkillList({ skills }) {
  const skillListItems = skills.map((s, idx) => (
    <SkillListItem skill={s.name} level={s.level} index={idx} key={idx} />
  ));
  return <ul className="SkillList">{skillListItems}</ul>;
}
