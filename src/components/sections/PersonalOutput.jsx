function PersonalOutput( {fullName,birthDate, mail, mobilNum}) {
  return (
    <div className="personalOutput">
      <div className="fullName">{fullName}</div>
      <div className="birthDate">{birthDate}</div>
      <div className="mailNum">{mail}</div>
      <div className="telNum">{mobilNum}</div>
      </div>
  );
}

export default PersonalOutput;
