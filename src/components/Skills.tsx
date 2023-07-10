export default function Skills() {
  return (
    <div className="Skills">
      <h2>Skills</h2>
      {charData.skills.map((elt) => {
        return (
          <p key={elt.label}>
            <input type="checkbox" disabled checked={elt.training} />
            {charData.skill(elt.label)} {elt.label} ({elt.stat})
          </p>
        )
      })}
    </div>
  )
}
