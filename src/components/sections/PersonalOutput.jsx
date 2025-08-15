import Icon from '@mdi/react';
import { mdiDeleteCircleOutline } from '@mdi/js';

function PersonalOutput( {fullName,birthDate, mail, mobilNum, setEducationObjectList, setPracticalObjectList, setFullName, setBirthDate, setMail, setMobil}) {

  function deleteCV() {
    setEducationObjectList([]);
    setPracticalObjectList([]);
    setFullName("");
    setBirthDate(null);
    setMail("");
    setMobil("");
  }

  return (
    <div className="personalOutput">
    <Icon
    path={mdiDeleteCircleOutline}
    size={1.8}
    className="deleteIcon"
    onClick= {() => deleteCV()}
    />
      <div className="fullName">{fullName}</div>
      <div className="birthDate">{birthDate}</div>
      <div className="mailNum">{mail}</div>
      <div className="telNum">{mobilNum}</div>
      </div>
  );
}

export default PersonalOutput;
