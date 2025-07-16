// src/data.js
export const people = [
  {
    first_name: "Jovelyn",
    last_name: "Ocampo",
    name: "Jovelyn D. Ocampo, MIT",
    designation: "Department Head",
    image: "/images/ocampo.png",
    diploma: "/diploma/diplom.jpg",
    tor: "/tor/tor.jfif",
    resume: "/resume/resume-sample.png",
    certificates: [{
      name: "Certificate in Teaching and Learning",
      url: "/certificates/cert.jpg"
    }],
    speaking_engagements: [{
      name: "Speaking Engagement at the 2023 ICT Educators' Conference",
      url: "/certificates/cert.jpg"
    }],
    masters_diploma: "/diploma/diplom.jpg",
    schedule: {
      monday: [
        { time: "9:00 AM - 10:00 AM", subject: "Dept. Meeting", room: "Conf. Room A" },
        { time: "10:00 AM - 12:00 PM", subject: "CS Elective 1 (Adv. Data Science)", room: "Online" },
      ],
      tuesday: [
        { time: "1:00 PM - 3:00 PM", subject: "IT Capstone Project Advising", room: "Faculty Office 1" },
      ],
      wednesday: [
        { time: "8:00 AM - 10:00 AM", subject: "Curriculum Development", room: "Conf. Room B" },
      ],
      thursday: [
        { time: "10:00 AM - 12:00 PM", subject: "Office Hours", room: "Faculty Office 1" },
      ],
      friday: [
        { time: "9:00 AM - 11:00 AM", subject: "Research Collaboration", room: "Library Study Area" },
      ],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.8, 4.7, 4.9, 4.8, 4.9], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/images/ocampo.png"
  },
  {
    first_name: "Bryan",
    last_name: "Ablaza",
    name: "Bryan Dale Ablaza",
    designation: "Instructor I",
    image: "/images/ablaza.JPG",
    schedule: {
      monday: [{ time: "1:00 PM - 3:00 PM", subject: "CS101 - Intro to Programming", room: "Lab 1" }],
      tuesday: [{ time: "9:00 AM - 11:00 AM", subject: "IT202 - Web Development", room: "G201" }],
      wednesday: [],
      thursday: [{ time: "1:00 PM - 3:00 PM", subject: "CS101 - Intro to Programming (Lab)", room: "Lab 2" }],
      friday: [{ time: "9:00 AM - 11:00 AM", subject: "Office Hours", room: "Faculty Office 2" }],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.0, 4.2, 4.1, 4.3, 4.0], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "Mikaela",
    last_name: "Arciaga",
    name: "Mikaela Arciaga",
    designation: "Instructor I",
    image: "/images/arciaga.JPG",
    schedule: {
      monday: [],
      tuesday: [{ time: "10:00 AM - 12:00 PM", subject: "IT Elective (Mobile Dev)", room: "G305" }],
      wednesday: [{ time: "1:00 PM - 2:00 PM", subject: "Office Hours", room: "Faculty Office 3" }],
      thursday: [],
      friday: [{ time: "10:00 AM - 12:00 PM", subject: "CS303 - Database Systems", room: "G105" }],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.5, 4.6, 4.4, 4.5, 4.6], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "Stephen",
    last_name: "Bacolor",
    name: "Stephen Bacolor",
    designation: "Instructor I",
    image: "/images/bacolor.JPG",
    schedule: {
      monday: [{ time: "9:00 AM - 11:00 AM", subject: "CS201 - Discrete Structures", room: "G102" }],
      tuesday: [],
      wednesday: [{ time: "9:00 AM - 11:00 AM", subject: "CS201 - Discrete Structures", room: "G102" }],
      thursday: [{ time: "1:00 PM - 2:00 PM", subject: "Office Hours", room: "Faculty Office 4" }],
      friday: [],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [3.9, 4.0, 4.1, 4.0, 4.2], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "Jhon Nerick",
    last_name: "Batuigas",
    name: "John Nerick Batuigas",
    designation: "Instructor I",
    image: "/images/batuigas.JPG",
    schedule: {
      monday: [{ time: "10:00 AM - 12:00 PM", subject: "IT102 - Computer Fundamentals", room: "Lab 3" }],
      tuesday: [{ time: "2:00 PM - 4:00 PM", subject: "IT102 - Computer Fundamentals", room: "Lab 3" }],
      wednesday: [],
      thursday: [{ time: "10:00 AM - 11:00 AM", subject: "Office Hours", room: "Faculty Office 5" }],
      friday: [],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.2, 4.3, 4.2, 4.4, 4.1], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "Edan",
    last_name: "Belgica",
    name: "Edan A. Belgica",
    designation: "Instructor I",
    image: "/images/belgica.jpeg",
    diploma: "https://drive.google.com/file/d/1TbHmM1XsWJZUANmNEvLBQNHr60T6F4xU/view?usp=drive_link",
    certificates: [
      { name: "C# Theoritical Understanding", url: "https://drive.google.com/file/d/15R4MYPRy2itbYqLi1mV1QSblpwz5fPUZ/view?usp=drive_link" },
      { name: "Training-Workshop on Proposal Writing and Publication", url: "https://drive.google.com/file/d/1NWuBbh9f97ulGMuqg8ImQSk9eWM3u19o/view?usp=drive_link" },
      { name: "Seminar-Workshop on Module Development and Publication", url: "https://drive.google.com/file/d/12MEK7JCvPr0foYTZj07R-O6Yer59mtRB/view?usp=drive_link" }
    ],
    schedule: {
      monday: [
        { time: "10:00 AM - 12:00 PM", subject: "CS102 - Object-Oriented Programming", room: "G103" },
        { time: "1:00 PM - 3:00 PM", subject: "Office Hours", room: "Faculty Office 6" },
      ],
      tuesday: [],
      wednesday: [
        { time: "9:00 AM - 11:00 AM", subject: "IT401 - Software Engineering", room: "G401" },
      ],
      thursday: [
        { time: "1:00 PM - 3:00 PM", subject: "CS102 - Object-Oriented Programming (Lab)", room: "Lab 4" },
      ],
      friday: [
        { time: "9:00 AM - 11:00 AM", subject: "Research Project Supervision", room: "Library Study Area" },
      ],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.5, 4.6, 4.5, 4.7, 4.8], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "Alvin",
    last_name: "Catalo",
    name: "Alvin Catalo, MIT",
    designation: "Research Coordinator",
    image: "/images/catalo.JPG",
    diploma: "/images/catalo.JPG",
    masters_diploma: "/images/catalo.JPG",
    schedule: {
      monday: [],
      tuesday: [{ time: "9:00 AM - 11:00 AM", subject: "Research Consultation", room: "Research Office" }],
      wednesday: [{ time: "1:00 PM - 3:00 PM", subject: "Thesis Advising", room: "Research Office" }],
      thursday: [],
      friday: [{ time: "9:00 AM - 11:00 AM", subject: "Office Hours", room: "Research Office" }],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.6, 4.7, 4.8, 4.7, 4.5], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "Allen Dave",
    last_name: "Coles",
    name: "Allen Dave Coles",
    designation: "Instructor I",
    image: "/images/coles.JPG",
    schedule: {
      monday: [{ time: "1:00 PM - 3:00 PM", subject: "IT201 - Data Communications", room: "G202" }],
      tuesday: [],
      wednesday: [{ time: "9:00 AM - 11:00 AM", subject: "IT201 - Data Communications", room: "G202" }],
      thursday: [{ time: "1:00 PM - 2:00 PM", subject: "Office Hours", room: "Faculty Office 7" }],
      friday: [],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.1, 4.2, 4.0, 4.3, 4.1], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "James",
    last_name: "Mañozo",
    name: "James Mañozo",
    designation: "Instructor I",
    image: "/images/mañozo.JPG",
    schedule: {
      monday: [],
      tuesday: [{ time: "1:00 PM - 3:00 PM", subject: "CS301 - Operating Systems", room: "G303" }],
      wednesday: [],
      thursday: [{ time: "9:00 AM - 11:00 AM", subject: "CS301 - Operating Systems", room: "G303" }],
      friday: [{ time: "10:00 AM - 11:00 AM", subject: "Office Hours", room: "Faculty Office 8" }],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.3, 4.4, 4.2, 4.5, 4.3], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "Ashley",
    last_name: "Manuel",
    name: "Ashley Manuel",
    designation: "Instructor I",
    image: "/images/manuel.JPG",
    schedule: {
      monday: [{ time: "9:00 AM - 11:00 AM", subject: "IT301 - Network Administration", room: "Lab 5" }],
      tuesday: [],
      wednesday: [],
      thursday: [{ time: "9:00 AM - 11:00 AM", subject: "IT301 - Network Administration", room: "Lab 5" }],
      friday: [{ time: "1:00 PM - 2:00 PM", subject: "Office Hours", room: "Faculty Office 9" }],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.0, 4.1, 4.0, 4.2, 4.1], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "Alvina",
    last_name: "Ramallosa",
    name: "Alvina Ramallosa",
    designation: "Instructor I",
    image: "/images/ramallosa.jpg",
    schedule: {
      monday: [{ time: "1:00 PM - 3:00 PM", subject: "CS202 - Algorithms Analysis", room: "G203" }],
      tuesday: [{ time: "9:00 AM - 10:00 AM", subject: "Office Hours", room: "Faculty Office 10" }],
      wednesday: [{ time: "1:00 PM - 3:00 PM", subject: "CS202 - Algorithms Analysis", room: "G203" }],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.4, 4.5, 4.3, 4.6, 4.4], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "Rachel",
    last_name: "Rodriguez",
    name: "Rachel Rodriguez",
    designation: "Instructor I",
    image: "/images/rodriguez.JPG",
    schedule: {
      monday: [],
      tuesday: [{ time: "10:00 AM - 12:00 PM", subject: "IT402 - Information Security", room: "G402" }],
      wednesday: [],
      thursday: [{ time: "10:00 AM - 12:00 PM", subject: "IT402 - Information Security", room: "G402" }],
      friday: [{ time: "1:00 PM - 2:00 PM", subject: "Office Hours", room: "Faculty Office 11" }],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.0, 4.1, 4.1, 4.0, 4.2], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "Clarissa",
    last_name: "Rostrollo",
    name: "Clarissa Rostrollo",
    designation: "Instructor I",
    image: "/images/rostrollo.JPG",
    schedule: {
      monday: [{ time: "10:00 AM - 12:00 PM", subject: "CS Elective 2 (AI Fundamentals)", room: "G301" }],
      tuesday: [],
      wednesday: [{ time: "1:00 PM - 3:00 PM", subject: "CS Elective 2 (AI Fundamentals)", room: "G301" }],
      thursday: [{ time: "9:00 AM - 10:00 AM", subject: "Office Hours", room: "Faculty Office 12" }],
      friday: [],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.5, 4.6, 4.5, 4.7, 4.6], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "Clarence",
    last_name: "Salvador",
    name: "Marc Clarence Salvador",
    designation: "Instructor I",
    image: "/images/salvador.jpeg",
    schedule: {
      monday: [],
      tuesday: [{ time: "9:00 AM - 11:00 AM", subject: "IT302 - Cloud Computing", room: "G403" }],
      wednesday: [{ time: "10:00 AM - 11:00 AM", subject: "Office Hours", room: "Faculty Office 13" }],
      thursday: [],
      friday: [{ time: "9:00 AM - 11:00 AM", subject: "IT302 - Cloud Computing", room: "G403" }],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.2, 4.3, 4.1, 4.4, 4.3], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "Jessica Ann",
    last_name: "Sambrano",
    name: "Jessica Ann Sambrano",
    designation: "Instructor I",
    image: "/images/sambrano.JPG",
    schedule: {
      monday: [{ time: "1:00 PM - 3:00 PM", subject: "CS Elective 3 (Machine Learning)", room: "G302" }],
      tuesday: [{ time: "10:00 AM - 11:00 AM", subject: "Office Hours", room: "Faculty Office 14" }],
      wednesday: [],
      thursday: [{ time: "1:00 PM - 3:00 PM", subject: "CS Elective 3 (Machine Learning)", room: "G302" }],
      friday: [],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.3, 4.4, 4.5, 4.3, 4.4], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  },
  {
    first_name: "Jerome",
    last_name: "Tacata",
    name: "Jerome Tacata",
    designation: "Instructor I",
    image: "/images/tacata.JPG",
    schedule: {
      monday: [{ time: "9:00 AM - 11:00 AM", subject: "IT Elective (Cybersecurity)", room: "Lab 6" }],
      tuesday: [],
      wednesday: [{ time: "9:00 AM - 11:00 AM", subject: "IT Elective (Cybersecurity)", room: "Lab 6" }],
      thursday: [{ time: "1:00 PM - 2:00 PM", subject: "Office Hours", room: "Faculty Office 15" }],
      friday: [],
      saturday: [],
      sunday: [],
    },
    evaluation_scores: [4.1, 4.2, 4.0, 4.3, 4.1], // Added an extra score to match 5 labels
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25", "1st Sem A.Y 25-26"],
    // development_plan_image: "/faculty-schedule/development_plan_placeholder.jpg"
  }
];