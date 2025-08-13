function PersonalOutput( {fullName}) {
  return (
    <div className="personalOutput">
      <div className="fullName">{fullName}</div>
      <div className="birthDate">11.01.1994</div>
      <div className="mailNum">Mobil: 1234 56789</div>
      <div className="telNum">E-Mail: John@web.de</div>
      </div>
  );
}

export default PersonalOutput;
