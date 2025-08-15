import "./App.css";
import Sidebar from "./components/Sidebar";
import CVArea from "./components/CVArea";
import { useState } from "react";


function App() {

  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [mailAdress, setMailAdress] = useState("");
  const [mobilNumber, setMobilNumber] = useState("");
  const [educationObjectList, setEducationObjectList] = useState([
  ])

  function setName(name) {
    setFullName(name);
  }

  function setDate(date) {
    setBirthDate(date);
  }

  function setMail(mail) {
    setMailAdress(mail);
  }

  function setMobil(num) {
    setMobilNumber(num);
  }

  function funcSetEducationForm(form) {

    const newForm = {degree: form.degree, school: form.school, city: form.city, country: form.country, from: form.from, until: form.until, id: crypto.randomUUID()};
    setEducationObjectList((prevList) => [...prevList, newForm]);

  }
  return (
    <>
      <aside className="sideBar">
        <Sidebar setName= {setName} setDate= {setDate} setMobile= {setMobil} setMail = {setMail} fullName= {fullName} birthDate= {birthDate} mailAdress = {mailAdress} mobilNumber= {mobilNumber} setEducationForm = {funcSetEducationForm} />
      </aside>
      <main className="CVArea">
        <CVArea fullName = {fullName} birthDate = {birthDate} mail = {mailAdress} mobilNum = {mobilNumber} educationObjectList= {educationObjectList} />
      </main>
    </>
  );
}

export default App;