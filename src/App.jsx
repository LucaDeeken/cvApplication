import "./App.css";
import Sidebar from "./components/Sidebar";
import CVArea from "./components/CVArea";
import { useState } from "react";


function App() {

  const [fullName, setFullName] = useState("John Doe");
  const [birthDate, setBirthDate] = useState("1995-08-10");
  const [mailAdress, setMailAdress] = useState("john.doe@example.com");
  const [mobilNumber, setMobilNumber] = useState("1 555 123 4567");
  const [educationObjectList, setEducationObjectList] = useState([
    {
      degree: "Master of Science in Software Engineering",
      school: "Global Institute of Technology",
      city: "Amsterdam",
      country: "Netherlands",
      from: "2021-09-01",
      until: "2023-07-15",
      id: crypto.randomUUID()
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Exampletown",
      city: "Exampletown",
      country: "USA",
      from: "2017-09-01",
      until: "2021-06-30",
      id: crypto.randomUUID()
    }
  ])

  const [practicalObjectList, setPracticalObjectList] = useState([
    {
      jobTitle: "Junior Frontend Developer",
      company: "ExampleTech Inc.",
      from: "2021-07-01",
      until: "2023-03-31",
      activities: "Collaborated with cross-functional teams including designers, backend developers, and product managers to implement responsive web interfaces. Built and maintained reusable components using React, styled components, and Tailwind CSS. Participated in code reviews, bug fixing, and performance optimizations. Ensured accessibility standards (WCAG) and cross-browser compatibility. Contributed to internal UI libraries and wrote unit tests with Jest and React Testing Library.",
      id: crypto.randomUUID()
    },
    {
      jobTitle: "Frontend Developer Intern",
      company: "Innovatech Solutions",
      from: "2020-01-15",
      until: "2021-06-30",
      activities: "Assisted in developing and testing web application features using React and Redux. Improved UI responsiveness and collaborated closely with design teams to enhance user experience. Maintained project documentation and participated in sprint planning.",
      id: crypto.randomUUID()
    }
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

  function funcSetPracticalForm(form) {

    const newForm = {jobTitle: form.jobTitle, company: form.company, from: form.from, until: form.until, activities: form.activities, id: crypto.randomUUID()};
    setPracticalObjectList((prevList) => [...prevList, newForm]);

  }

  return (
    <>
      <aside className="sideBar">
        <Sidebar setName= {setName} setDate= {setDate} setMobile= {setMobil} setMail = {setMail} fullName= {fullName} birthDate= {birthDate} mailAdress = {mailAdress} mobilNumber= {mobilNumber} setEducationForm = {funcSetEducationForm} setPracticalForm = {funcSetPracticalForm} />
      </aside>
      <main className="CVArea">
        <CVArea setEducationObjectList= {setEducationObjectList} setPracticalObjectList= {setPracticalObjectList} setFullName= {setFullName} setBirthDate = {setBirthDate} setMail = {setMailAdress} setMobil = {setMobilNumber}   fullName = {fullName} birthDate = {birthDate} mail = {mailAdress} mobilNum = {mobilNumber} educationObjectList= {educationObjectList} practicalObjectList= {practicalObjectList} />
      </main>
    </>
  );
}

export default App;