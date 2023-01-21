import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from "react";

const SenorSoftwareEngineer = () => {

  return (
    <section id="contact" className="mt-3">
      <p className="mt-1 mb-1 text-yellow text-2xl">Valuelabs LLP</p>
      <p className="mt-1 mb-2 text-red text-2xl">Senior Software Engineer</p>
      <li> developed UI components using Redux, Typescript, SASS, and drafted unit tests using Jest with 90% code coverage. Rest APIs written in.Net Core in accordance with the microservice architecture</li>
      <li>applied optimization techniques to reduce load times by 20%, thereby enhancing the user experience</li>
      <li>decreased bugs by 10% by offering recommendations for Redux.js for better troubleshooting support. contributed to the project within Agile Scrum project management environments.</li>
      <li> Independently implemented application-wide localization through i18n, enabled the application to be translated into three languages, increasing the application's reach internationally by 30%.</li>
    </section>
  );
};
const SoftwareEngineer = () => {

  return (
    <section id="contact" className="mt-3">
      <p className="mt-1 mb-1 text-yellow text-2xl">Valuelabs LLP</p>
      <p className="mt-1 mb-2 text-red text-2xl">Software Engineer</p>
      <li>worked on a web-based solution for report generation and visualization for auto body. My team was responsible for migrating the existing Angular front-end application into React.js</li>
      <li>Implemented 4 primary UI components, including metric selection, hierarchy generation, and crosstab report.</li>
      <li>Worked in a team of five members. Created React components with TypeScript. performed unit testing, designed visualization charts using Chartist.js and developed REST APIs using .Net Core.</li>
      <li>Took the initiative for peer code reviews, which minimized bugs reported in the testing phase by 25%</li>
    </section>
  );
};
const Intern = () => {

  return (
    <section id="contact" className="mt-3">
      <p className="mt-1 mb-1 text-yellow text-2xl">Valuelabs LLP</p>
      <p className="mt-1 mb-2 text-red text-2xl">Intern</p>
      <li> developed a web application concerned with enterprise customer due diligence solutions using Angular, HTML, and Angular Material</li>
      <li>Contributed as UI team member, responsible for making the application's front-end using Angular, TypeScript, and Bootstrap. I was also involved in writing unit test cases for the components using the Jasmine test framework</li>
    </section>
  );
};
// const router = createBrowserRouter([
//   {
//     path: "/1",
//     element: <div><SenorSoftwareEngineer /></div>,
//   },
//   {
//     path: "/2",
//     element: <div><SoftwareEngineer /></div>,
//   },
//   {
//     path: "/3",
//     element: <div><Intern /></div>,
//   },
// ]);



const Contact = () => {
  const [index, setIndex] = React.useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };


  return (
    <section id="contact" className="contact py-48">
      {/* <div className="flex justify-center items-center dark:text-red w-full">
        <Link rel="noopener noreferrer" to="/1" style={{'textColor'}} className="px-5 py-1 border-b-2 dark:border-red-400 dark:text-red-400">Senior Software Engineer</Link>
        <Link rel="noopener noreferrer" to="/2" className="px-5 py-1 border-b-2 dark:border-gray-700">Software Engineer</Link>
        <Link rel="noopener noreferrer" to="/3" className="px-5 py-1 border-b-2 dark:border-gray-700">Intern</Link>
      </div>
      <Routes>
        <Route path="/1" element={<SenorSoftwareEngineer />} />
        <Route path="/2" element={<SoftwareEngineer />} />
        <Route path="/3" element={<Intern />} />
      </Routes> */}
      <Tabs value={index} onChange={handleChange} centered textColor="white" variant="fullWidth"
        indicatorColor="secondary">
        <Tab label="Senior Software Engineer"></Tab>
        <Tab label="Software Engineer"></Tab>
        <Tab label="Intern"></Tab>
      </Tabs>
      {index == 0 &&
        <SenorSoftwareEngineer />}
      {index == 1 &&
        <SoftwareEngineer />}
      {index == 2 &&
        <Intern />}
    </section>
  );
};

export default Contact;
