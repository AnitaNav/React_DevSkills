import { useState } from "react";
import "./NewSkillForm.css";

export default function NewSkillForm({ addSkill }) {
  const [formData, setFormData] = useState({
    name: "",
    level: 3
  });

  function handleChange(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }

  function handleAddSkill(evt) {
    evt.preventDefault();
    addSkill(formData);
    setFormData({ name: "", level: 3 });
  }

  return (
    <form className="NewSkillForm" onSubmit={handleAddSkill}>
      <label>Skill</label>
      <input
        onChange={handleChange}
        name="name"
        type="text"
        value={formData.name}
      />
      Level{" "}
      <select onChange={handleChange} name="level" value={formData.level}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">ADD SKILL</button>
    </form>
  );
}
