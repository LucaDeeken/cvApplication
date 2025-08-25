import Sidebar from "./components/Sidebar";
import CVArea from "./components/CVArea";
import { useState } from "react";
import "./styles/reset.css";
import "./styles/App.css";

function App() {
  
  const [openAreaPersonal, setOpenAreaPersonal] = useState("");
  const [openAreaEducational, setOpenAreaEducational] = useState("");
  const [openAreaPractical, setOpenAreaPractical] = useState("");
  const [educationalEditBtnDisabled, setEducationalEditBtnDisabled] =
    useState(true);
  const [practicalEditBtnDisabled, setPracticalEditBtnDisabled] =
    useState(true);
  const [educationEditBtn, setEducationEditBtn] = useState("btnDisabled");
  const [practicalEditBtn, setPracticalEditBtn] = useState("btnDisabled");
  const [selectedIdEducational, setSelectedIdEducational] = useState("");
  const [selectedIdPractical, setSelectedIdPractical] = useState("");
  const [fullName, setFullName] = useState("John Doe");
  const [birthDate, setBirthDate] = useState("1995-08-10");
  const [mailAdress, setMailAdress] = useState("john.doe@example.com");
  const [mobilNumber, setMobilNumber] = useState("1 555 123 4567");

  const [educationInputValue, setEducationInputValue] = useState({
    degree: "",
    school: "",
    city: "",
    country: "",
    from: null,
    until: null,
    id: "",
  });
  const [practicalInputValue, setPracticalInputValue] = useState({
    jobTitle: "",
    company: "",
    from: null,
    until: null,
    activities: "",
    id: "",
  });

  //Stores all objects of a section. These here are dummies for having something to display when visiting the site, so the paper isn't empty.
  const [educationObjectList, setEducationObjectList] = useState([
    {
      degree: "Master of Science in Software Engineering",
      school: "Global Institute of Technology",
      city: "Amsterdam",
      country: "Netherlands",
      from: "2021-09-01",
      until: "2023-07-15",
      id: crypto.randomUUID(),
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Exampletown",
      city: "Exampletown",
      country: "USA",
      from: "2017-09-01",
      until: "2021-06-30",
      id: crypto.randomUUID(),
    },
  ]);

  const [practicalObjectList, setPracticalObjectList] = useState([
    {
      jobTitle: "Junior Frontend Developer",
      company: "ExampleTech Inc.",
      from: "2021-07-01",
      until: "2023-03-31",
      activities:
        "Collaborated with cross-functional teams including designers, backend developers, and product managers to implement responsive web interfaces. Built and maintained reusable components using React, styled components, and Tailwind CSS. Participated in code reviews, bug fixing, and performance optimizations. Ensured accessibility standards (WCAG) and cross-browser compatibility. Contributed to internal UI libraries and wrote unit tests with Jest and React Testing Library.",
      id: crypto.randomUUID(),
    },
    {
      jobTitle: "Frontend Developer Intern",
      company: "Innovatech Solutions",
      from: "2020-01-15",
      until: "2021-06-30",
      activities:
        "Assisted in developing and testing web application features using React and Redux. Improved UI responsiveness and collaborated closely with design teams to enhance user experience. Maintained project documentation and participated in sprint planning.",
      id: crypto.randomUUID(),
    },
  ]);

  //Opens the sidebar input fields according to the respective category. Also takes care of the accessibility of the buttons.
  const toggleSection = (section) => {
    if (section === "personal") {
      if (openAreaPersonal === "open") {
        setOpenAreaPersonal("");
      } else {
        setOpenAreaPersonal("open");
      }
    } else if (section === "educational") {
      if (openAreaEducational === "open") {
        setOpenAreaEducational("");
        setEducationalEditBtnDisabled(true);
        setEducationInputValue({
          degree: "",
          school: "",
          city: "",
          country: "",
          from: "",
          until: "",
        });
      } else {
        setOpenAreaEducational("open");
        setEducationEditBtn("btnDisabled");
      }
    } else {
      if (openAreaPractical === "open") {
        setOpenAreaPractical("");
        setPracticalEditBtnDisabled(true);
        setPracticalInputValue({
          jobTitle: "",
          company: "",
          from: null,
          until: null,
          activities: "",
          id: "",
        });
      } else {
        setOpenAreaPractical("open");
        setPracticalEditBtn("btnDisabled");
      }
    }
  };

  //Manages the Edit-Button
  const toggleEdit = (section) => {
    if (section === "educational") {
      console.log(educationEditBtn);
      setEducationEditBtn("open");
      console.log(educationEditBtn);
      setPracticalEditBtn("btnDisabled");
    } else {
      setPracticalEditBtn("open");
      setEducationEditBtn("btnDisabled");
    }
  };

  //When an education-object got edited, this function updates its value and puts it back into the list.
  const updateEducationList = () => {
    const id = selectedIdEducational;
    const newData = educationInputValue;
    setEducationObjectList((prevList) =>
      prevList.map((obj) => (obj.id === id ? { ...obj, ...newData } : obj)),
    );
    console.log(educationObjectList);
  };

  //When an practical-object got edited, this function updates its value and puts it back into the list.
  const updatePracticalList = () => {
    const id = selectedIdPractical;
    const newData = practicalInputValue;
    setPracticalObjectList((prevList) =>
      prevList.map((obj) => (obj.id === id ? { ...obj, ...newData } : obj)),
    );
    console.log(educationObjectList);
  };


  //The personalfields aren't organized in objects but rather in own states (for the sake of practice).
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

  //When an object gets edited, these functions track the new values of the objects and update the states for this.
  const updateEducationState = (key, value) => {
    setEducationInputValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const updatePracticalState = (key, value) => {
    setPracticalInputValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  //these functions gets triggered, when new objects get created with the "add"-button and add them to the objectListStates.
  function funcSetEducationForm(form) {
    const newForm = {
      degree: form.degree,
      school: form.school,
      city: form.city,
      country: form.country,
      from: form.from,
      until: form.until,
      id: crypto.randomUUID(),
    };
    setEducationObjectList((prevList) => [...prevList, newForm]);
  }
  function funcSetPracticalForm(form) {
    const newForm = {
      jobTitle: form.jobTitle,
      company: form.company,
      from: form.from,
      until: form.until,
      activities: form.activities,
      id: crypto.randomUUID(),
    };
    setPracticalObjectList((prevList) => [...prevList, newForm]);
  }

  //Queries the ID of the clicked Education-Object, opens the Inputfields of the Section, fills the inputfields with the values and enables the Edit-Button
  function queryID(id) {
    console.log(educationObjectList);
    const form = educationObjectList.find((item) => item.id === id);
    console.log(form);
    setEducationInputValue(form);
    console.log(openAreaEducational);
    if (openAreaEducational === "") {
      toggleSection("educational");
    }
    if (openAreaPractical === "open") {
      toggleSection("practical");
    }
    toggleEdit("educational");
    setEducationalEditBtnDisabled(false);
    setSelectedIdEducational(id);
    return form;
  }
  //Queries the ID of the clicked Practical-Object, opens the Inputfields of the Section, fills the inputfields with the values and enables the Edit-Button
  function queryIDPractical(id) {
    console.log(practicalObjectList);
    const form = practicalObjectList.find((item) => item.id === id);
    console.log(form);
    setPracticalInputValue(form);
    if (openAreaPractical === "") {
      toggleSection("practical");
    }
    if (openAreaEducational === "open") {
      toggleSection("educational");
    }
    toggleEdit("practical");
    setPracticalEditBtnDisabled(false);
    setSelectedIdPractical(id);
    return form;
  }

  return (
    <>
      <aside className="sideBar">
        <Sidebar
          practicalInputValue={practicalInputValue}
          updatePracticalList={updatePracticalList}
          practicalEditBtnDisabled={practicalEditBtnDisabled}
          educationalEditBtnDisabled={educationalEditBtnDisabled}
          updateEducationList={updateEducationList}
          toggleSection={toggleSection}
          openAreaPersonal={openAreaPersonal}
          setOpenAreaPersonal={setOpenAreaPersonal}
          openAreaEducational={openAreaEducational}
          setOpenAreaEducational={setOpenAreaEducational}
          openAreaPractical={openAreaPractical}
          setOpenAreaPractical={setOpenAreaPractical}
          setName={setName}
          setDate={setDate}
          setMobil={setMobil}
          setMail={setMail}
          fullName={fullName}
          birthDate={birthDate}
          mailAdress={mailAdress}
          mobilNumber={mobilNumber}
          setEducationForm={funcSetEducationForm}
          setPracticalForm={funcSetPracticalForm}
          educationInputValue={educationInputValue}
          updateEducationState={updateEducationState}
          updatePracticalState={updatePracticalState}
          educationEditBtn={educationEditBtn}
          practicalEditBtn={practicalEditBtn}
        />
      </aside>
      <main className="CVArea">
        <CVArea
          setEducationObjectList={setEducationObjectList}
          setEducationEditBtn={setEducationEditBtn}
          toggleEdit={toggleEdit}
          toggleSection={toggleSection}
          setPracticalObjectList={setPracticalObjectList}
          setFullName={setFullName}
          setBirthDate={setBirthDate}
          setMail={setMailAdress}
          setMobil={setMobilNumber}
          fullName={fullName}
          birthDate={birthDate}
          mail={mailAdress}
          mobilNum={mobilNumber}
          educationObjectList={educationObjectList}
          practicalObjectList={practicalObjectList}
          queryID={queryID}
          queryIDPractical={queryIDPractical}
          setEducationInputValue={setEducationInputValue}
          updateEducationState={updateEducationState}
        />
      </main>
    </>
  );
}

export default App;