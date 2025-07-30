export const people = [
  //Jovelyn Ocampo
  {
    first_name: "Jovelyn",
    last_name: "Ocampo",
    name: "Jovelyn D. Ocampo, MIT",
    designations: { 
      current_designation: "Head, OSAS",
      last_designation: [
        { year: 2024, designation: "Try2024" },
        { year: 2023, designation: "Try2023" },
      ],
    },
    image: "/images/ocampo.jpg",
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
    schedule: [
      {
        semesterName: "1st Sem A.Y 22-23",
        details: {
          monday: [
            { time: "8:00 AM - 9:00 AM", subject: "DCIT 24", section: "CS 2-2" },
            { time: "9:00 AM - 10:00 AM", subject: "DCIT 24", section: "CS 2-2" },
            { time: "10:00 AM - 11:00 AM", subject: "DCIT 24", section: "CS 2-1" },
            { time: "11:00 AM - 12:00 PM", subject: "DCIT 24", section: "CS 2-1" },
            { time: "1:00 PM - 3:00 PM", subject: "CONSULTATION", room: "FACULTY" }
          ],
          tuesday: [
            { time: "7:00 AM - 8:00 AM", subject: "CVSU 101", section: "CS 1-3" },
            { time: "8:00 AM - 9:00 AM", subject: "DCIT 22", section: "IT 1-2" },
            { time: "10:00 AM - 11:00 AM", subject: "DCIT 22 (LAB)", section: "CS 1-1" },
            { time: "11:00 AM - 1:00 PM", subject: "DCIT 22 (LAB)", section: "CS 1-1" },
            { time: "1:00 PM - 2:00 PM", subject: "DCIT 22 (LAB)", section: "IT 1-2" },
            { time: "7:00 PM - 8:00 PM", subject: "COSC 101", section: "CS 3-1" },
            { time: "8:00 PM - 9:00 PM", subject: "COSC 101", section: "CS 3-1" }
          ],
          wednesday: [
            { time: "1:00 PM - 2:00 PM", subject: "DCIT 24 (LAB)", section: "CS 2-1" },
            { time: "2:00 PM - 4:00 PM", subject: "DCIT 24 (LAB)", section: "CS 2-1" },
            { time: "4:00 PM - 5:00 PM", subject: "DCIT 24 (LAB)", section: "CS 2-2" },
            { time: "5:00 PM - 7:00 PM", subject: "DCIT 24 (LAB)", section: "CS 2-2" }
          ],
          thursday: [
            { time: "7:00 AM - 8:00 AM", subject: "COSC 101 (LAB)", section: "CS 3-1" },
            { time: "8:00 AM - 9:00 AM", subject: "COSC 101 (LAB)", section: "CS 3-1" },
            { time: "10:00 AM - 11:00 AM", subject: "DCIT 22 (LAB)", section: "CS 1-1" },
            { time: "11:00 AM - 1:00 PM", subject: "DCIT 22 (LAB)", section: "CS 1-1" },
            { time: "1:00 PM - 2:00 PM", subject: "DCIT 22 (LAB)", section: "IT 1-2" },
            { time: "2:00 PM - 4:00 PM", subject: "DCIT 22 (LAB)", section: "IT 1-2" },
            { time: "4:00 PM - 5:00 PM", subject: "DCIT 22 (LAB)", section: "CS 1-1" },
            { time: "5:00 PM - 7:00 PM", subject: "DCIT 22 (LAB)", section: "IT 1-2" },
            { time: "8:00 PM - 9:00 PM", subject: "COSC 101 (LAB)", section: "CS 3-1" }
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [
            { time: "7:00 AM - 8:00 AM", subject: "ITEC 70 (LEC) ASYNC", section: "IT 2-4" },
            { time: "8:00 AM - 9:00 AM", subject: "ITEC 70 (LEC) ASYNC", section: "IT 2-2" },
            { time: "9:00 AM - 10:00 AM", subject: "ITEC 70 (LEC)", section: "IT 2-2", room: "ROOM 305" },
            { time: "10:00 AM - 11:00 AM", subject: "ITEC 70 (LEC)", section: "IT 2-4", room: "ROOM 303" },
            { time: "1:00 PM - 2:30 PM", subject: "ITEC 70 (LAB)", section: "IT 2-2", room: "CL 4" },
            { time: "3:00 PM - 5:00 PM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "6:00 PM - 9:00 PM", subject: "ITEC 70 (LAB)", section: "IT 2-1", room: "CL 2" }
          ],
          tuesday: [
            { time: "7:00 AM - 8:00 AM", subject: "ITEC 70 (LEC) ASYNC", section: "IT 2-6" },
            { time: "8:00 AM - 9:00 AM", subject: "ITEC 70 (LEC) ASYNC", section: "IT 2-5" },
            { time: "9:00 AM - 10:00 AM", subject: "ITEC 70 (LEC) ASYNC", section: "IT 2-3" },
            { time: "10:00 AM - 11:00 AM", subject: "ITEC 70 (LEC) ASYNC", section: "IT 2-1" },
            { time: "11:00 AM - 12:00 PM", subject: "ITEC 70 (LEC)", section: "IT 2-1", room: "ROOM 301" },
            { time: "4:00 PM - 5:00 PM", subject: "ITEC 70 (LEC)", section: "IT 2-6", room: "ROOM 305" },
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 70 (LEC)", section: "IT 2-3", room: "ROOM 303" }
          ],
          wednesday: [
            { time: "10:00 AM - 11:30 AM", subject: "ITEC 70 (LAB)", section: "IT 2-4", room: "CL 4" },
            { time: "1:00 PM - 2:00 PM", subject: "ITEC 70 (LEC)", section: "IT 2-5", room: "ROOM 303" },
            { time: "6:00 PM - 9:00 PM", subject: "ITEC 70 (LAB)", section: "IT 2-3", room: "CL 1" }
          ],
          thursday: [],
          friday: [
            { time: "7:00 AM - 10:00 AM", subject: "ITEC 70 (LAB)", section: "IT 2-6", room: "CL 4" },
            { time: "10:00 AM - 1:00 PM", subject: "ITEC 70 (LAB)", section: "IT 2-5", room: "CL 4" },
            { time: "2:30 PM - 4:00 PM", subject: "ITEC 70 (LAB)", section: "IT 2-2", room: "CL 4" },
            { time: "4:00 PM - 5:30 PM", subject: "ITEC 70 (LAB)", section: "IT 2-4", room: "CL 2" }
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            { time: "7:00 AM - 9:00 AM", subject: "DCIT 24", section: "IT 2-6", room: "CL 4" },
            { time: "9:00 AM - 10:00 AM", subject: "DCIT 24 (LAB) ASYNC", section: "IT 2-6" },
            { time: "1:00 PM - 3:00 PM", subject: "DCIT 24", section: "IT 2-7", room: "CL 4" },
          ],
          tuesday: [
            { time: "7:00 AM - 10:00 AM", subject: "DCIT 22", section: "IT 1-4", room: "CL 2" },
            { time: "10:00 AM - 1:00 PM", subject: "DCIT 22 (LAB)", section: "IT 1-5", room: "CL 2" },
            { time: "2:00 PM - 3:00 PM", subject: "DCIT 22 (LEC)", section: "IT 1-4", room: "ROOM 305" },
            { time: "3:00 PM - 4:00 PM", subject: "DCIT 22 (LAB) ASYNC", section: "IT 1-6" },
            { time: "4:00 PM - 5:00 PM", subject: "DCIT 22 (LEC)", section: "IT 1-6", room: "CL 4" },
            { time: "5:00 PM - 7:00 PM", subject: "DCIT 22", section: "IT 1-6", room: "CL 4" },
            { time: "7:00 PM - 8:00 PM", subject: "DCIT 24 (LEC) ASYNC", section: "IT 2-6" },
            { time: "8:00 PM - 9:00 PM", subject: "DCIT 24 (LEC) ASYNC", section: "IT 2-7" }
          ],
          wednesday: [],
          thursday: [
            { time: "7:00 AM - 9:00 AM", subject: "DCIT 22", section: "IT 1-4", room: "CL 2" },
            { time: "9:00 AM - 10:00 AM", subject: "DCIT 22 (LAB) ASYNC", section: "IT 1-4" },
            { time: "10:00 AM - 11:00 AM", subject: "DCIT 22 (LAB) ASYNC", section: "IT 1-5" },
            { time: "11:00 AM - 1:00 PM", subject: "DCIT 22", section: "IT 1-5", room: "CL 2" },
            { time: "2:00 PM - 3:00 PM", subject: "DCIT 22 (LEC)", section: "IT 1-5", room: "ROOM 305" },
            { time: "3:00 PM - 5:00 PM", subject: "CONSULTATION", room: "FACULTY" }
          ],
          friday: [],
          saturday: [
            { time: "7:00 AM - 9:00 AM", subject: "DCIT 22 (LAB)", section: "IT 1-6", room: "CL 4" },
            { time: "9:00 AM - 10:00 AM", subject: "DCIT 22 (LAB) ASYNC", section: "IT 1-6" },
            { time: "10:00 AM - 11:00 AM", subject: "DCIT 24 (LEC)", section: "IT 2-6", room: "ROOM 303" },
            { time: "11:00 AM - 12:00 PM", subject: "DCIT 24 (LEC)", section: "IT 2-7", room: "ROOM 303" }
          ],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "7:00 AM - 8:00 AM", subject: "DCIT 24 (LAB) ASYNC", section: "IT 2-5" },
            { time: "8:00 AM - 10:00 AM", subject: "CONSULTAION", room: "FACULTY" },
            { time: "10:00 AM - 11:00 AM", subject: "ITEC 70 (LAB) ASYNC", section: "IT 2-6" },
            { time: "11:00 AM - 1:00 PM", subject: "ITEC 70", section: "IT 2-5", room: "CL 1" },
            { time: "1:00 PM - 2:00 PM", subject: "ITEC 70 (LAB) ASYNC", section: "IT 2-4" },
            { time: "3:00 PM - 5:00 PM", subject: "ITEC 70", section: "IT 2-6", room: "CL 1" },
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 70 (LAB) ASYNC", section: "IT 2-3" }
          ],
          tuesday: [
            { time: "9:00 AM - 11:00 AM", subject: "ITEC 70", section: "IT 2-4", room: "CL 1" },
            { time: "9:00 AM - 11:00 AM", subject: "ITEC 70", section: "IT 2-1", room: "CL 1" },
            { time: "1:00 PM - 2:00 PM", subject: "ITEC 70 (LEC) ASYNC", section: "IT 2-4" },
            { time: "2:00 PM - 3:00 PM", subject: "ITEC 70 (LEC) ASYNC", section: "IT 2-5" },
            { time: "3:00 PM - 4:00 PM", subject: "ITEC 70 (LEC) ASYNC", section: "IT 2-6" }
          ],
          wednesday: [
            { time: "9:00 AM - 10:00 AM", subject: "ITEC 70 (LEC) ASYNC", section: "IT 2-3" },
            { time: "10:00 AM - 11:00 AM", subject: "ITEC 70", section: "IT 2-1", room: "ROOM 301" },
            { time: "11:00 AM - 12:00 PM", subject: "ITEC 70 (LEC) ASYNC", section: "IT 2-1" },
            { time: "12:00 AM - 1:00 PM", subject: "ITEC 70", section: "IT 2-4", room: "ROOM 303" },
            { time: "1:00 PM - 2:00 PM", subject: "ITEC 70 (LEC) ASYNC", section: "IT 2-2" },
            { time: "3:00 PM - 4:00 PM", subject: "ITEC 70", section: "IT 2-3", room: "ROOM 303" },
            { time: "4:00 PM - 5:00 PM", subject: "ITEC 70", section: "IT 2-2", room: "ROOM 302" }
          ],
          thursday: [],
          friday: [
            { time: "10:00 AM - 11:00 AM", subject: "ITEC 70", section: "IT 2-5", room: "ROOM 302" },
            { time: "4:00 PM - 5:00 PM", subject: "ITEC 70", section: "IT 2-6", room: "ROOM 301" },
            { time: "1:00 PM - 2:00 PM", subject: "ITEC 70 (LAB) ASYNC", section: "IT 2-2" },
            { time: "2:00 PM - 3:00 PM", subject: "ITEC 70 (LAB) ASYNC", section: "IT 2-1" },
            { time: "3:00 PM - 5:00 PM", subject: "ITEC 70", section: "IT 2-2", room: "CL 1" },
            { time: "5:00 PM - 7:00 PM", subject: "ITEC 70", section: "IT 2-3", room: "CL 1" }
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            { time: "8:00 AM - 11:00 AM", subject: "ITEC 199", section: "IT 4-2", room: "ACCRE" },
            { time: "11:00 AM - 2:00 PM", subject: "ITEC 199", section: "IT 4-6", room: "ACCRE" }
          ],
          tuesday: [],
          wednesday: [
            { time: "9:00 AM - 12:00 PM", subject: "RESEARCH/EXTENSION", room: "FACULTY" },
            { time: "3:00 PM - 6:00 PM", subject: "ITEC 200A", section: "IT 3-4", room: "ACCRE" }
          ],
          thursday: [
            { time: "8:00 AM - 11:00 AM", subject: "ITEC 199", section: "IT 4-2", room: "ACCRE" },
            { time: "11:00 AM - 2:00 PM", subject: "ITEC 199", section: "IT 4-6", room: "ACCRE" }
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [4.8, 4.7, 4.9, 4.8, 4.9, 3.79],
    evaluation_labels: ["1st Sem A.Y 22-23", "2nd Sem A.Y 22-23", "1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": ["Attend local/ national seminars on emerging IT trends."],
        "2025": [
          "Enrolled in doctorate degree program in Information Technology.",
          "Participated in local and international workshops and training on current trends and technologies.",
          "Joined and an active member of any IT and CS related professional organizations."
        ],
        "2026": [
          "Continue to enroll in the DIT program.",
          "Integrate learning into teaching and program enhancement.",
          "Attend regional and national conferences.",
          "Continue to attend relevant training and seminars within the field of computer studies."
        ],
        "2027": [
          "Continue DIT program.",
          "Develop a new research proposal.",
          "Continue to attend relevant training and seminars within the field of computer studies.",
          "Attend face-to-face or hybrid international conferences."
        ],
        "2028": [
          "Proceed with DIT dissertation.",
          "Continue to attend relevant training and seminars within the field of computer studies."
        ],
      },
      loading: {
        "2024": [],
        "2025": [],
        "2026": [],
        "2027": [],
        "2028": [],
      },
      research: {
        "2024": [
          "Attended a research capacity-building seminar.",
          "Served as panelist/ adviser for capstone projects and undergraduate research."
        ],
        "2025": [
          "Applied for at least 1 research for funding.",
          "Continue to serve as research panelist, adviser, and mentor students to seek external funding opportunities for their research."
        ],
        "2026": [
          "Publish at least one paper in a Scopus- or CHED- recognized journal.",
          "Continue to serve as research panelist, adviser, and mentor students to seek external funding opportunities for their research."
        ],
        "2027": [
          "Collaborate with partner institutions or industry for applied research.",
          "Continue to serve as research panelist, adviser, and mentor students to seek external funding opportunities for their research."
        ],
        "2028": [
          "Complete funded research.",
          "Continue to serve as research panelist, adviser, and mentor students to seek external funding opportunities for their research."
        ],
      },
      extensions: {
        "2024": ["Actively participated in extension programs organized at the campus level, especially those initiated by the department."],
        "2025": [
          "Continue to actively participate in extension programs and initiatives.",
          "Aligned capstone/research projects with community extension goals."
        ],
        "2026": [
          "Conduct project impact assessments and submit results.",
          "Develop a new ICT-based extension project proposal aimed at addressing the identified needs of the community."
        ],
        "2027": [
          "Collaborate with LGUs, or NGOs on tech-enabled outreach."
        ],
        "2028": [
          "Facilitate a new extension project."
        ],
      }
    }
  },
  //Ely Rose Panganiban-Briones
  {
    first_name: "Ely Rose ",
    last_name: "Briones",
    name: "Ely Rose L. Panganiban-Briones, MIT",
    designation: "Computer Science Program Coordinator",
    image: "/images/briones.JPG",
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
    schedule: [
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [
            { time: "10:00 AM - 12:00 PM", section: "CS 2-1", subject: "INSY 50", room: "ROOM 302" },
            { time: "1:00 PM - 3:00 PM", section: "CS 4-1", subject: "COSC 200A", room: "ROOM 303" },
          ],
          wednesday: [
            { time: "10:00 AM - 11:00 AM", section: "CS 2-1", subject: "INSY 50 Async", room: "" },
            { time: "11:00 AM - 12:00 PM", section: "CS 2-1", subject: "INSY 50 Async", room: "" },
            { time: "12:00 PM - 1:00 PM", section: "CS 2-1", subject: "INSY 50 Async", room: "" },
          ],
          thursday: [
            { time: "10:00 AM - 12:00 PM", section: "CS 2-2", subject: "INSY 50", room: "ROOM 302" },
            { time: "1:00 PM - 3:00 PM", section: "CS 2-3", subject: "INSY 50", room: "ROOM 302" },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "9:00 AM - 12:00 AM", section: "", subject: "Research", room: "Faculty" },
            { time: "1:00 PM - 4:00 PM", section: "", subject: "Extension", room: "Faculty" },
          ],
          tuesday: [
            { time: "10:30 AM - 12:30 PM", section: "CS 4-1", subject: "COSC 200B", room: "ROOM 408" },
            { time: "3:00 PM - 5:00 PM", section: "IT 4-1", subject: "ITEC 199", room: "CL 4" },
          ],
          wednesday: [
            { time: "10:00 AM - 11:00 AM", section: "IT 3-6", subject: "DCIT 60 Async", room: "" },
            { time: "11:00 AM - 12:00 PM", section: "CS 4-1", subject: "COSC 200B", room: "" },
            { time: "12:00 PM - 2:00 PM", section: "IT 4-1", subject: "ITEC 199", room: "" },
          ],
          thursday: [
            { time: "10:00 AM - 12:00 PM", section: "IT 3-6", subject: "ITEC 200A", room: "ROOM 302" },
            { time: "3:00 PM - 5:00 PM", section: "IT 4-1", subject: "ITEC 199", room: "CL 4" },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            { time: "10:00 AM - 1:00 PM", section: "IT 4-1", subject: "IT 4-1", room: "ACCRE" },
            { time: "3:00 PM - 6:00 PM", section: "CS 4-2", subject: "COSC 200B", room: "ACCRE" },
          ],
          tuesday: [
            { time: "1:00 PM - 4:00 PM", section: "", subject: "Extension", room: "Faculty" },
          ],
          wednesday: [
            { time: "10:00 AM - 1:00 PM", section: "IT 4-1", subject: "ITEC 199", room: "ACCRE" },
            { time: "3:00 PM - 6:00 PM", section: "", subject: "Research", room: "" },
          ],
          thursday: [
            { time: "10:00 AM - 1:00 PM", section: "CS 4-3", subject: "COSC 200B", room: "ACCRE" },
            { time: "1:00 PM - 4:00 PM", section: "CS 4-1", subject: "COSC 200B", room: "ACCRE" },
          ],
          friday: [
            { time: "9:00 AM - 11:00 AM", subject: "Strategic Planning Session", room: "Conf. Room B" },
          ],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [4.8, 4.7, 4.9, 4.8, 4.9, 4.32],
    evaluation_labels: ["1st Sem A.Y 22-23", "2nd Sem A.Y 22-23", "1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Attend local/ national seminars on emerging IT trends.",
        ],
        "2025": [
          "Continue to enroll in the DIT program.Integrate learnings into teaching and program enhancement.",
          "Attend and present at virtual international conferences",
          "Continue to attend relevant training and seminars within the field of computer studies."
        ],
        "2026": [
          "Continue my Doctor of Information Technology (DIT) coursework to advance my academic and professional expertise.",
          "Attend face-to-face or hybrid international conferences.",
          "Continue to attend relevant training and seminars within the field of computer studies."
        ],
        "2027": [
          "Advance to dissertation writing in the DIT program.",
          "Attend and present at international conferences.",
          "Initiate faculty-industry immersion or externship program.",
          "Continue to attend relevant training and seminars within the field of computer studies."
        ],
        "2028": [
          "Complete the Doctor of Information Technology (DIT) program to achieve advanced academic and professional qualifications.",
          "Lead faculty mentoring programs and capability-building workshops.",
          "Continue to attend relevant training and seminars within the field of computer studies."
        ],
      },
      loading: {
        "2024": [
          "Information Management",
          "Software Engineering",
          "Undergraduate Thesis A and B"
        ],
        "2025": [
          "Undergraduate Thesis A and B",
          "Practicum(IT/CS Intership Supervision)"
        ],
        "2026": [
          "Methods of Research",
          "Undergraduate Thesis A and B",
          "Practicum(IT/CS Intership Supervision)"
        ],
        "2027": [
          "Methods of Research.",
          "Undergraduate Thesis A and B",
          "Practicum(IT/CS Intership Supervision)"
        ],
        "2028": [
          "Methods of Research",
          "Undergraduate Thesis A and B",
          "Practicum(IT/CS Intership Supervision)"
        ],
      },
      research: {
        "2024": [
          "Attend a research capacity-building seminar.",
          "Serve as panelist/ adviser for undergraduate research."
        ],
        "2025": [
          "Apply for at least 1 research for funding.",
          "Co-author and present at national/ international conferences.",
          "Continue to serve as research panelist, adviser, and mentor students to seek external funding opportunities for their research."
        ],
        "2026": [
          "Publish at least one paper in a Scopus- or CHED- recognized journal.",
          "Continue to serve as research panelist, adviser, and mentor students to seek external funding opportunities for their research."
        ],
        "2027": [
          "Collaborate with partner institutions or industry for applied research.",
          "Continue to serve as research panelist, adviser, and mentor students to seek external funding opportunities for their research."
        ],
        "2028": [
          "Publish dissertation output in an international Journal.",
          "Continue to serve as research panelist, adviser, and mentor students to seek external funding opportunities for their research."
        ],
      },
      extensions: {
        "2024": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2025": [
          "Continue to actively participate in extension programs and initiatives.",
          "Align capstone/research projects with community extension goals."
        ],
        "2026": [
          "Conduct project impact assessments and submit results.",
          "Prepare a new ICT-based extension project proposal that addresses identified community needs."
        ],
        "2027": [
          "Facilitate a new extension project",
          "Collaborate with LGUs, or NGOs on tech-enabled outreach.."
        ],
        "2028": ["Continue to facilitate ICT based extension projects on partner communities."],
      }
    }
  },
  //Donnalyn Montallana
  {
    first_name: "Donnalyn ",
    last_name: "Montallana",
    name: "Donnalyn B. Montallana, MIT",
    designation: "Information Technology Program Coordinator",
    image: "/images/montallana.JPG",
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
    schedule: [
      {
        semesterName: "1st Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 65",
              section: "IT 4-2",
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 65",
              section: "IT 4-3",
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "DCIT 99",
              section: "CS 4-OC",
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "DCIT 99",
              section: "CS 4-OC",
            },
          ],
          tuesday: [
            {
              time: "9:00 AM - 11:00 AM",
              subject: "DCIT 60",
              section: "IT 3-3",
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 60",
              section: "IT 3-1",
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "DCIT 60",
              section: "IT 3-2",
            },
          ],
          wednesday: [
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 65",
              section: "IT 4-2",
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "DCIT 65",
              section: "IT 4-3",
            },
            {
              time: "3:00 PM - 6:00 PM",
              subject: "RESEARCH AND EXTENSION",
            },
          ],
          thursday: [
            {
              time: "8:00 AM - 10:00 AM",
              subject: "DCIT 60",
              section: "IT 3-2",
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 60",
              section: "IT 3-1",
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "DCIT 60",
              section: "IT 3-3",
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "11:00 AM - 1:00 PM",
              subject: "ITEC 99",
              section: "IT 4-3",
              room: "ROOM 302"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "ITEC 99",
              section: "IT 4-2",
              room: "ROOM 303"
            },
          ],
          tuesday: [],
          wednesday: [
            {
              time: "11:00 AM - 1:00 PM",
              subject: "ITEC 99",
              section: "IT 4-3",
              room: "ROOM 305"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "ITEC 99",
              section: "IT 4-2",
              room: "ROOM 303"
            },
          ],
          thursday: [
            {
              time: "9:00 AM - 12:00 PM",
              subject: "RESEARCH AND EXTENSION",
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "ITEC 99",
              section: "IT 4-3",
              room: "ROOM 301"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "1:00 PM - 3:00 PM",
              subject: "DCIT 60",
              section: "IT 3-3",
              room: "ROOM 305"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 60 ASYNC",
              section: "IT 3-3",
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "DCIT 60 ASYNC",
              section: "IT 3-1",
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "DCIT 60 ASYNC",
              section: "IT 3-2",
            },
          ],
          tuesday: [],
          wednesday: [
            {
              time: "8:00 AM - 10:00 AM",
              subject: "DCIT 60",
              section: "IT 3-1",
              room: "ROOM 305"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "DCIT 60",
              section: "IT 3-2",
              room: "AUDI 1"
            },
          ],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "9:00 AM - 12:00 PM",
              subject: "RESEARCH",
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "EXTENSION",
            },
          ],
          tuesday: [
            {
              time: "10:00 AM - 12:00 PM",
              subject: "ITEC 199",
              section: "IT 4-2",
              room: "CL 4"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "ITEC 199",
              section: "IT 4-3",
              room: "CL 4"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "ITEC 199 ASYNC",
              section: "IT 4-3",
            },
          ],
          wednesday: [],
          thursday: [
            {
              time: "10:00 AM - 12:00 PM",
              subject: "ITEC 199",
              section: "IT 4-2",
              room: "CL 4"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "ITEC 199",
              section: "IT 4-3",
              room: "CL 4"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "ITEC 199 ASYNC",
              section: "IT 4-3",
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            {
              time: "8:00 AM - 11:00 AM",
              subject: "ITEC 199",
              section: "IT 4-3",
              room: "ACCRE"
            },
            {
              time: "11:00 AM - 2:00 PM",
              subject: "ITEC 199",
              section: "IT 4-4",
              room: "ACCRE"
            },
            {
              time: "3:00 PM - 6:00 PM",
              subject: "ITEC 199",
              section: "IT 4-5",
              room: "ACCRE"
            },
          ],
          tuesday: [
            {
              time: "8:00 AM - 11:00 AM",
              subject: "ITEC 199",
              section: "IT 4-3",
              room: "ACCRE"
            },
            {
              time: "11:00 AM - 2:00 PM",
              subject: "RESEARCH",
            },
          ],
          wednesday: [
            {
              time: "1:00 PM - 4:00 PM",
              subject: "EXTENSION",
            },
          ],
          thursday: [
            {
              time: "11:00 AM - 2:00 PM",
              subject: "ITEC 199",
              section: "IT 4-4",
              room: "ACCRE"
            },
            {
              time: "3:00 PM - 6:00 PM",
              subject: "ITEC 199",
              section: "IT 4-5",
              room: "ACCRE"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [4.8, 4.7, 4.9, 4.8, 4.9, 4.45],
    evaluation_labels: ["1st Sem A.Y 22-23", "2nd Sem A.Y 22-23", "1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": ["Attended relevant training and seminars within the field of computer studies."],
        "2025": ["Participated in local and international workshops and training on current trends and technologies.", "Joined and became an active member of IT and CS related professional organizations."],
        "2026": ["Continue to enroll in the DIT program. Integrate learnings into teaching and program enhancement", "Attend and present at national and regional conferences.", "Continue to attend relevant training and seminars within the field of computer studies."],
        "2027": ["Continue DIT schooling.", "Propose a new research proposal.", "Continue to attend relevant training and seminars within the field of computer studies.", "Attend face-to-face or hybrid international conferences."],
        "2028": ["Proceed with DIT dissertation.", "Continue to attend relevant training and seminars within the field of computer studies."],
      },
      loading: {
        "2024": ["Methods of Research", "Capstone A and B", "Practicum(IT/CS Intership Supervision)"],
        "2025": ["Methods of Research", "Practicum(IT Intership Supervision)"],
        "2026": ["Methods of Research", "Capstone A and B", "Practicum(IT/CS Intership Supervision)"],
        "2027": ["Methods of Research", "Capstone A and B", "Practicum(IT/CS Intership Supervision)"],
        "2028": ["Methods of Research", "Capstone A and B", "Practicum(IT/CS Intership Supervision)"],
      },
      research: {
        "2024": ["Attended a research capacity-building seminar.", "Served as panelist/ adviser for undergraduate research."],
        "2025": ["Finished current research project and submitted all related paperworks.", "Served as research panelist, adviser, and mentor students to seek external funding opportunities for their research."],
        "2026": ["Draft and submit a research proposal for funding.", "Publish at least one paper in a Scopus- or CHED- recognized journal.", "Continue to serve as research panelist, adviser, and mentor students to seek external funding opportunities for their research."],
        "2027": ["Collaborate with partner institutions or industry for applied research.", "Continue to serve as research panelist, adviser, and mentor students to seek external funding opportunities for their research."],
        "2028": ["Continue to attend research related presentations and conferences to gather insights and experiences.", "Continue to serve as research panelist, adviser, and mentor students to seek external funding opportunities for their research."],
      },
      extensions: {
        "2024": ["Actively participated in extension programs organized at the campus level, especially those initiated by the department."],
        "2025": ["Continue to actively participate in extension programs and initiatives.", "Realign capstone/research projects with community extension goals."],
        "2026": ["Conduct project impact assessments and submit results.", "Submit proposals/ideas on a new ICT-based extension project proposal that addresses identified community needs."],
        "2027": ["Continue to actively participate in extension programs organized at the campus level, especially those initiated by the department.", "Collaborate with LGUs, or NGOs on tech-enabled outreach."],
        "2028": ["Continue to actively participate in extension programs organized at the campus level, especially those initiated by the department."],
      }
    }
  },
  //Steffanie Bato
  {
    first_name: "Steffanie ",
    last_name: "Bato",
    name: "Steffanie M. Bato, MIT",
    designation: "Head, OSAS",
    image: "/images/bato.JPG",
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
    schedule: [
      { //1st 22-23
        semesterName: "1st Sem A.Y 22-23",
        details: {
          monday: [],
          tuesday: [
            {
              time: "8:00 AM - 11:00 AM",
              subject: "INSY 55 (LAB)",
              section: "IT 3-1",
              room: null
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 21",
              section: "CS 1-3",
              room: null
            },
            {
              time: "2:00 PM - 5:00 PM",
              subject: "INSY 55 (LAB)",
              section: "IT 3-2",
              room: null
            },
          ],
          wednesday: [
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 21",
              section: "CS 1-3",
              room: null
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "RESEARCH AND EXTENSION",
              section: null,
              room: null
            }
          ],
          thursday: [
            {
              time: "8:00 AM - 10:00 AM",
              subject: "INSY 55",
              section: "IT 3-1",
              room: null
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 21 (LAB)",
              section: "CS 1-3",
              room: null
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "INSY 55",
              section: "IT 3-2",
              room: null
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      { //2nd 22-23
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "10:00 AM - 1:00 PM",
              subject: "ITEC 200A",
              section: "IT 3-3",
              room: "ROOM 305"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "ITEC 200A",
              section: "IT 3-2",
              room: "ROOM 305"
            },
          ],
          tuesday: [],
          wednesday: [
            {
              time: "1:00 PM - 4:00 AM",
              subject: "RESEARCH AND EXTENSION",
              section: null,
              room: null
            }
          ],
          thursday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 23 (LEC)",
              section: "IT 1-4",
              room: null
            },
            {
              time: "9:00 AM - 12:00 PM",
              subject: "DCIT 23 (LAB)",
              section: "IT 1-4",
              room: "COM LAB 3"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 23 (LAB)",
              section: "IT 1-4",
              room: "COM LAB 3"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      { //1st 23-24
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 60 ASYNC",
              section: "IT 3-6",
              room: null
            },
            {
              time: "11:00 AM - 12:00 AM",
              subject: "ITEC 200B ASYNC",
              section: "IT 4-1",
              room: null
            },
            {
              time: "12:00 AM - 1:00 PM",
              subject: "ITEC 200B ASYNC",
              section: "IT 4-2",
              room: null
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "ITEC 200B ASYNC",
              section: "IT 4-3",
              room: null
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "DCIT 60",
              section: "IT 3-6",
              room: "ROOM 305"
            },
          ],
          tuesday: [
            {
              time: "8:00 AM - 10:00 AM",
              subject: "ITEC 200B",
              section: "IT 4-1",
              room: "ROOM 303"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "ITEC 200B",
              section: "IT 4-2",
              room: "ROOM 407"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "ITEC 200B",
              section: "IT 4-3",
              room: "ROOM 303"
            },
          ],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        },
      },
      { //2nd 23-24
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "9:00 AM - 12:00 PM",
              subject: "RESEARCH",
              section: null,
              room: "FACULTY"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "ITEC 200A",
              section: "IT 3-4",
              room: "ROOM 303"
            }
          ],
          tuesday: [
            {
              time: "8:00 AM - 10:00 AM",
              subject: "ITEC 200A",
              section: "IT 3-1",
              room: "ROOM 305"
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "ITEC 200A ASYNC",
              section: "IT 3-1",
              room: null
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 200A ASYNC",
              section: "IT 3-2",
              room: null
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "ITEC 200A ASYNC",
              section: "IT 3-3",
              room: null
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "ITEC 200A ASYNC",
              section: "IT 3-4",
              room: null
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "ITEC 200A ASYNC",
              section: "IT 3-5",
              room: null
            }
          ],
          wednesday: [
            {
              time: "9:00 AM - 12:00 PM",
              subject: "EXTENSION",
              section: null,
              room: "FACULTY"
            },
          ],
          thursday: [
            {
              time: "9:00 AM - 11:00 AM",
              subject: "ITEC 200A",
              section: "IT 3-2",
              room: "ROOM 301"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "ITEC 200A",
              section: "IT 3-5",
              room: "ROOM 303"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      { //2nd 24-25
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            {
              time: "10:00 AM - 1:00 PM",
              subject: "ITEC 200A",
              section: "IT 3-3",
              room: "ACCRE"
            }
          ],
          tuesday: [
            {
              time: "9:00 AM - 12:00 PM",
              subject: "ITEC 200A",
              section: "IT 3-1",
              room: "ACCRE"
            },
            {
              time: "12:00 PM - 3:00 PM",
              subject: "ITEC 200A",
              section: "IT 3-2",
              room: "ACCRE"
            }
          ],
          wednesday: [
            {
              time: "8:00 AM - 11:00 AM",
              subject: "ITEC 200B",
              section: "IT 4",
              room: "ACCRE"
            },
            {
              time: "8:00 AM - 11:00 AM",
              subject: "ITEC 200A",
              section: "IT 3-5",
              room: "ACCRE"
            },
            {
              time: "3:00 PM - 6:00 PM",
              subject: "RESEARCH",
              section: null,
              room: "FACULTY"
            },
          ],
          thursday: [
            {
              time: "1:00 PM - 4:00 PM",
              subject: "EXTENSION",
              section: null,
              room: "FACULTY"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
    ],
    evaluation_scores: [4.8, 4.7, 4.9, 4.8, 4.9, 4.50],
    evaluation_labels: ["1st Sem A.Y 22-23", "2nd Sem A.Y 22-23", "1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Pursued graduate studies by enrolling Doctor in Information Technology in any CHED recognized institution.",
          "Participated in local and international workshops and bootcamps on emerging technologies.",
          "Incorporated blended learning, flipped classroom strategies, and project-based learning into CS and IT courses.",
          "Mastered tools such as Moodle, Google Classroom, and Canvas for online and hybrid learning"
        ],
        "2025": [
          "Participate in local and international workshops and bootcamps on emerging technologies.",
          "Be an active member of any IT and CS related professional organizations like Philippine Society of IT Educators (PSITE), Computing Society of the Philippines (CSP) and Association for Computing Machinery (ACM).",
          "Attend and present at national and regional conferences (e.g., NCITE, iSITE, etc.)"
        ],
        "2026": [
          "Continue striving to finish DIT in any CHED recognized institution.",
          "Engage in research on computer science education, software development, or data analytics.",
          "Obtain industry-recognized certifications such as: Cisco (CCNA), Microsoft (Azure and the likes)"
        ],
        "2027": [
          "Write and Publish / co-author at least one peer-reviewed article in any reputable academic journals.",
          "Continue to mentor student researchers to be able to produce at least Research per year for funding"
        ],
        "2028": [
          "Continue striving to finish DIT in any CHED recognized institution.",
          "Engage in research on computer science education, software development, or data analytics; present in symposia or publish in any reputable academic journals."
        ],
      },
      loading: {
        "2024": [
          "Research Related Subject for IT/CS"
        ],
        "2025": [
          "Research Related Subject for IT/CS"
        ],
        "2026": [
          "Research Related Subject for IT/CS"
        ],
        "2027": [
          "Research Related Subject for IT/CS"
        ],
        "2028": [
          "Research Related Subject for IT/CS"
        ],
      },
      research: {
        "2024": [
          "Engage in research on computer science education, software development, or data analytics.",
          "Continue guiding students in their research journey."
        ],
        "2025": [
          "Engage in research on computer science education, software development, or data analytics.",
          "Continue guiding students in their research journey."
        ],
        "2026": [
          "Continue to mentor student researchers to be able to produce at least Research per year for funding.",
          "Continue guiding students in their research journey."
        ],
        "2027": [
          "Write and Publish / co-author at least one peer-reviewed article in any reputable academic journals.",
          "Continue guiding students in their research journey."
        ],
        "2028": [
          "Write and Publish / co-author at least one peer-reviewed article in any reputable academic journals.",
          "Continue guiding students in their research journey."
        ],
      },
      extensions: {
        "2024": [
          "Participate in the department’s initiative to conduct community outreach through ICT literacy trainings and support for local schools or barangays"
        ],
        "2025": [
          "Continue to kick off extension activities under CLASSES program of BacoorEx in Mambog Elementary School, BJMP Bacoor and Brgy. Molino II."
        ],
        "2026": [
          "Continue to kick off extension activities under CLASSES program of BacoorEx in Mambog Elementary School, BJMP Bacoor and Brgy. Molino II."
        ],
        "2027": [
          "Lead the department towards the thorough evaluation and monitoring of the CLASSES project before it will be terminated."
        ],
        "2028": [
          "Formulate another extension project that would be beneficial to the chosen community through peer collaboration."
        ],
      }
    }
  },

  //Bryan Ablaza
  {
    first_name: "Bryan",
    last_name: "Ablaza",
    name: "Bryan Dale Ablaza",
    designation: "Instructor I",
    image: "/images/ablaza.JPG",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INDUSTRIAL EDUCATION",
      url: "https://drive.google.com/file/d/1niKFF7rHL9QYydkeqeXcWbBcPBrPZJBY/view?usp=drive_link"
    },],
    // tor: "/tor/tor.jfif",
    resume: {
      url: "https://drive.google.com/file/d/1DwxvMB55GxK2groUnOOoKFxs02j8rO28/view?usp=drive_link"
    },
    certificates: [{
      name: "Off-Campus Practice Teaching",
      url: "https://drive.google.com/file/d/1OjXG1LSZeRJhnlp7jLkDj9Cn0yn-KEeM/view?usp=drive_link"
    },

    {
      name: "EdukaTalks: A SEM1 Seminar Series",
      url: "https://drive.google.com/file/d/1H2nxazqePHdwCEHbEfcNbFIASgFUptqu/view?usp=drive_link"
    },],

    schedule: [
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            {
              time: "9:00 AM - 11:00 AM",
              subject: "CONSULTATION",
              room: "FACULTY ROOM"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 23",
              section: "IT 1-7",
              room: "CL 5"
            }, {
              time: "4:00 PM - 7:00 PM",
              subject: "DCIT 23",
              section: "CS 1-5",
              room: "CL 1"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "DCIT 23",
              section: "CS 1-5",
              room: "CL 1"
            },
          ],
          tuesday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "DCIT 23",
              section: "CS 1-5",
              room: "CL 4"
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 23",
              section: "IT 1-7",
              room: "AUDI"
            }, {
              time: "1:00 PM - 4:00 PM",
              subject: "ITEC 106",
              section: "IT 3-5",
              room: "CL 3"
            },
            {
              time: "6:00 PM - 8:00 PM",
              subject: "ITEC 106",
              section: "IT 3-3",
              room: "CL 1"
            },
          ],
          wednesday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "DCIT 23",
              section: "IT 1-7",
              room: "CL 2"
            },
            {
              time: "10:00 PM - 1:00 PM",
              subject: "ITEC 106",
              section: "IT 3-4",
              room: "CL 2"
            }, {
              time: "3:00 PM - 6:00 PM",
              subject: "ITEC 106",
              section: "IT 3-3",
              room: "CL 4"
            },
          ],
          thursday: [
          ],
          friday: [
            {
              time: "10:00 AM - 12:00 PM",
              subject: "ITEC 106",
              section: "IT 3-5",
              room: "AUDI"
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "ITEC 106",
              section: "IT 3-4",
              room: "107"
            }
          ],
          saturday: [
          ],
          sunday: [
          ],
        }
      }
    ],
    evaluation_scores: [4.58, 4.43],
    evaluation_labels: ["1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Participated in professional development programs focused on learning methodologies and curriculum design to enhance instructional expertise.",
          "Pursued certified online training programs to acquire industry-relevant skills aligned with the chosen career path."
        ],
        "2025": [
          "Passed the Board Licensure Examination for Professional Teachers (BLEPT)",
          "Attended academic related seminars to enhance teaching effectiveness.",
          "Became a technical critic for students to guide them in their project and thesis."
        ],
        "2026": [
          "Enroll in a Master’s program in Information Technology",
          "Join in organizations that will enhance my professional and academic skills.",
          "Seek for organizations who are in need in terms of systems, mobile and web applications.",
          " Enhance teaching approach for students, in order to attain effective deliverance of the topic."
        ],
        "2027": [
          "Complete the Master’s Degree program in Information Technology.",
          "Stay and lead people in an organization that is focused on IT related programs."
        ],
        "2028": ["Participate in seminars that offer advanced certification in the relevant field."],
      },
      loading: {
        "2024": ["Information Management", "Elective 3: Internet of Things", "Automata Theory and Formal Languages"],
        "2025": ["Computer Programming II", "Web System and Technologies II", "System Integration and Architecture I"],
        "2026": ["Any Minor/ Major Subject related to Web Design, Computer Programming, Computer System Servicing"],
        "2027": ["Any Minor/ Major Subject related to Web Design, Computer Programming, Computer System Servicing"],
        "2028": ["Any Minor/ Major Subject related to Web Design, Computer Programming, Computer System Servicing"],
      },
      research: {
        "2024": [
          "Participated in research-oriented seminars to enhance critical thinking skills and adopt effective approaches to subject matter analysis.",
          "Delivered forward-thinking academic mentorship to students, guiding them in the development of innovative and impact-driven research projects."
        ],
        "2025": [
          "Drove pioneering research that pushed the boundaries of Computer Studies in response to future technological advancements.",
          "Continuously engaged in advanced seminars and immersive workshops to stay at the forefront of evolving research practices.",
          "Empowered the next generation of innovators by providing ongoing mentorship and strategic guidance in their research endeavors."
        ],
        "2026": [
          "Engage in innovative research initiatives that advance the field of Computer Studies.",
          "Participate in cutting-edge seminars and workshops to stay updated with emerging trends in research writing and methodologies.",
          "Foster future-ready researchers by continuously mentoring students throughout their evolving research journeys."
        ],
        "2027": [
          "Guide students with their research development.",
          "Participate in a research seminar related to Computer Studies."
        ],
        "2028": ["Guide students with their research development."],
      },
      extensions: {
        "2024": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2025": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2026": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2027": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2028": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
      }
    }
  },
  //Mikaela Arciaga
  {
    first_name: "Mikaela",
    last_name: "Arciaga",
    name: "Mikaela Arciaga",
    designation: "Instructor I",
    image: "/images/arciaga.JPG",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1d6F-Sa-0-KDgxPj4QCENkD2sfa5M8nuW/view?usp=drive_link"
    },],
    tor: [{
      name: "TOR: BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1ST9zWRG3iqbTTOLJh7G1-22hK8HiUHwK/view?usp=drive_link"
    },],
    resume: {
      url: "https://drive.google.com/file/d/1n8yYCs08h-QTZnlDStGcHZE0ICDChnBI/view?usp=drive_link"
    },
    certificates: [{
      name: "-",
      url: "https://drive.google.com/file/d/1ZDwAzRO-QnzWZ0PkyuDxG1qd3QOdOG0V/view?usp=drive_link"
    }],

    schedule: [
      {
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "ITEC 50 (LEC)",
              section: "IT 1-1",
              room: "ROOM 301"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "ITEC 50 (LEC)",
              section: "CS 1-1",
              room: "ROOM 301"
            },
            {
              time: "3:00 PM - 6:00 PM",
              subject: "DCIT 25 (LAB)",
              section: "CS 2-2",
              room: "CL 3"
            },
          ],
          tuesday: [
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 25 (LEC)",
              section: "CS 2-1",
              room: "ROOM 302"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "CONSULTATION HOURS",
              room: "FACULTY ROOM"
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "ITEC 50 (LAB)",
              section: "IT 1-1",
              room: "CL 2"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "DCIT 25 (LEC)",
              section: "IT 2-6",
              room: "ROOM 302"
            },
          ],
          wednesday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "ITEC 50 (LAB)",
              section: "IT 1-2",
              room: "CL 1"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 25 (LEC)",
              section: "CS 2-2",
              room: "ROOM 302"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 25 (LAB)",
              section: "IT 2-6",
              room: "CL 2"
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "DCIT 25 (LEC) ASYNC",
              section: "IT 2-6",
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "ITEC 50 (LEC) ASYNC",
              section: "IT 1-2",
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 50 (LEC) ASYNC",
              section: "IT 1-1",
            },
          ],
          thursday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "ITEC 50 (LAB)",
              section: "CS 2-1",
              room: "CL 1"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 25 (LEC)",
              section: "CS 2-3",
              room: "ROOM 302"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 25 (LAB)",
              section: "CS 2-3",
              room: "CL 4"
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "DCIT 25 (LEC) ASYNC",
              section: "CS 2-1",
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "DCIT 25 (LEC) ASYNC",
              section: "CS 2-2",
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "DCIT 25 (LEC) ASYNC",
              section: "CS 2-3",
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 22 (LEC)",
              section: "CS 1-1",
              room: "ROOM 301"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 22",
              section: "CS 1-1",
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "DCIT 26 (LEC)",
              section: "CS 3-1",
              room: "ROOM 301"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 22 (LEC)",
              section: "CS 1-2",
              room: "ROOM 301"
            },
            {
              time: "4:00 PM - 6:00 PM",
              subject: "DCIT 22",
              section: "CS 1-2",
              room: "CL 4"
            },

          ],
          tuesday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 26 (LEC) ASYNC",
              section: "CS 3-1",
            },
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 26 (LEC) ASYNC",
              section: "CS 3-2",
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "CONSULTATION HOURS",
              room: "CL 4"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 26",
              section: "CS 3-1",
              room: "FACULTY ROOM"
            },
          ],
          wednesday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 22",
              section: "CS 1-3",
              room: "CL 3"
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "DCIT 22",
              section: "CS 1-2",
              room: "CL 2"
            },
            {
              time: "11:00 AM - 1:00 PM",
              subject: "DCIT 22",
              section: "CS 1-1",
              room: "CL 4"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 26 ((LEC))",
              section: "CS 3-2",
              room: "ROOM 301"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 22 (LAB)",
              section: "CS 1-2",
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "DCIT 22 (LAB)",
              section: "CS 1-3",
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "DCIT 22 (LAB)",
              section: "CS 1-1",
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "DCIT 22 (LAB)",
              section: "CS 1-2",
            },
          ],
          thursday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 22 ((LEC))",
              section: "CS 1-3",
              room: "ROOM 301"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 22",
              section: "CS 1-3",
              room: "CL 4"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "DCIT 26",
              section: "CS 1-3",
              room: "CL 4"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "9:00 AM - 11:00 AM",
              subject: "ITEC 50",
              section: "CS 1-4",
              room: "CL 4"
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "ITEC 50",
              section: "IT 1-4",
              room: "CL 2"
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "ITEC 50",
              section: "IT 1-5",
              room: "CL 2"
            },

          ],
          tuesday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "ITEC 95",
              section: "IT 3-2",
              room: "CL 4"
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "ITEC 95",
              section: "IT 3-3",
              room: "ROOM 305"
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "ITEC 50",
              section: "CS 1-5",
              room: "CL 2"
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "ITEC 50",
              section: "IT 1-5",
              room: "ROOM 302"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "ITEC 50 LAB ASYNC",
              section: "CS 1-4",
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "ITEC 50 LAB ASYNC",
              section: "CS 1-5",
            },
          ],
          wednesday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "ITEC 50",
              section: "CS 1-5",
              room: "ROOM 302"
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "ITEC 50 (LEC) ASYNC",
              section: "CS 1-5",
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 50 (LEC) ASYNC",
              section: "CS 1-4",
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "ITEC 50",
              section: "CS 1-4",
              room: "CL 2"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "ITEC 50 (LEC) ASYNC",
              section: "IT 1-4",
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "ITEC 50 (LEC) ASYNC",
              section: "IT 1-5",
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "ITEC 50 LAB ASYNC",
              section: "IT 1-4",
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "ITEC 50 LAB ASYNC",
              section: "IT 1-5",
            },
          ],
          thursday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "ITEC 95",
              section: "IT 3-1",
              room: "ROOM 302"
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "ITEC 95 ASYNC",
              section: "IT 3-1",
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "ITEC 95 ASYNC",
              section: "IT 3-2",
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 95 ASYNC",
              section: "IT 3-3",
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "ITEC 50",
              section: "IT 1-4",
              room: "302"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "ITEC 50",
              section: "IT 1-4",
              room: "CL 4"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "ITEC 50",
              section: "IT 1-7",
              room: "CL 2"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "CONSULTATION",
              room: "FACULTY ROOM"
            },

          ],
          tuesday: [

          ],
          wednesday: [
            {
              time: "7:00 AM - 8:30 AM",
              subject: "ITEC 95",
              section: "IT 3-3",
              room: "ROOM 203"
            },
            {
              time: "8:30 AM - 10:00 AM",
              subject: "ITEC 95",
              section: "IT 3-2",
              room: "ROOM 203"
            },
            {
              time: "10:00 AM - 11:30 AM",
              subject: "ITEC 95",
              section: "IT 3-1",
              room: "ROOM 203"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "ITEC 50",
              section: "IT 1-5",
              room: "ROOM 203"
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "ITEC 50",
              section: "IT 1-4",
              room: "AUDI"
            },
          ],
          thursday: [
          ],
          friday: [
            {
              time: "7:00 AM - 8:30 AM",
              subject: "ITEC 95",
              section: "IT 3-1",
              room: "ROOM 203"
            },
            {
              time: "8:30 AM - 10:00 AM",
              subject: "ITEC 95",
              section: "IT 3-3",
              room: "ROOM 203"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "ITEC 50",
              section: "IT 1-5",
              room: "ROOM 203"
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "ITEC 50",
              section: "IT 1-4",
              room: "AUDI"
            },
          ],
          saturday: [
            {
              time: "7:00 AM - 8:30 AM",
              subject: "ITEC 95",
              section: "IT 3-3",
              room: "ROOM 203"
            },
            {
              time: "8:30 AM - 10:00 AM",
              subject: "ITEC 95",
              section: "IT 3-2",
              room: "ROOM 203"
            },
            {
              time: "10:00 AM - 11:30 AM",
              subject: "ITEC 95",
              section: "IT 3-1",
              room: "ROOM 203"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "ITEC 50",
              section: "IT 1-5",
              room: "ROOM 203"
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "ITEC 50",
              section: "IT 1-4",
              room: "AUDI"
            },
          ],
          sunday: [
          ],
        }
      }
    ],
    evaluation_scores: [null, null, 4.75, 4.33, 4.53],
    evaluation_labels: ["1st Sem A.Y 22-23", "2nd Sem A.Y 22-23", "1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Enrolled in a Master’s program in Information Technology",
          "Redesigned course syllabus to integrate flexible learning and LMS.",
          "Identified potential research topics related to tech in education."
        ],
        "2025": [
          "Completed my Master’s degree.",
          "Developed online learning materials for 1–2 subjects.",
          "Implemented tech-enhanced assessments using tools like Google Forms."
        ],
        "2026": [
          "Take CISCO developer-focused certification track.",
          "Join institutional community outreach IT projects.",
          "Develop research proposal and seek internal approval."
        ],
        "2027": [
          "Share best practices in instructional innovation through in-house seminars.",
          "Publish at least one paper in a journal or IT education conference proceedings.",
          "Lead a tech-for-community innovation project."
        ],
        "2028": [
          "Share best practices in instructional innovation through in-house seminars.",
          "Participate in institutional curriculum review committee",
          "Enroll in short-term international training or fellowship."
        ],
      },
      loading: {
        "2024": ["Object-oriented Programming", "Computer   Programming I"],
        "2025": ["Quantitative Research", "Web and System Technologies", "Application Development and Emerging Technology"],
        "2026": ["Any Major BSIT/BSCS Courses"],
        "2027": ["Any Major BSIT/BSCS Courses"],
        "2028": ["Any Major BSIT/BSCS Courses"],
      },
      research: {
        "2024": [
          "Engaged in research on computer science education, software development, or data analytics.",
          "Continue guiding students in their research journey.."
        ],
        "2025": [
          "Engaged in research on computer science education, software development, or data analytics.",
          "Continue guiding students in their research journey.."
        ],
        "2026": [
          "Continue to mentor student researchers to be able to produce at least Research per year for funding.",
          "Continue guiding students in their research journey.."
        ],
        "2027": [
          "Write and Publish / co-author at least one peer-reviewed article in any reputable academic journals.",
          "Continue guiding students in their research journey.."
        ],
        "2028": [
          "Write and Publish / co-author at least one peer-reviewed article in any reputable academic journals.",
          "Continue guiding students in their research journey.."
        ],
      },
      extensions: {
        "2024": [],
        "2025": [],
        "2026": ["Participate in the campus extension activities."],
        "2027": ["Participate in the campus extension activities."],
        "2028": ["Participate in the campus extension activities."],
      }
    }
  },
  //Stephen Bacolor
  {
    first_name: "Stephen",
    last_name: "Bacolor",
    name: "Stephen Bacolor",
    designation: "Instructor I",
    image: "/images/bacolor.JPG",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1ZDwAzRO-QnzWZ0PkyuDxG1qd3QOdOG0V/view?usp=drive_link"
    },],
    tor: [{
      name: "TOR: BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1BScHlM_SpLeAnDq8iVceH_vMwUcGazp_/view?usp=drive_link"
    },],
    resume: {
      url: "https://drive.google.com/file/d/1b7C9kyETjtBPZnxOIGhB2NgxtaWiJ4AH/view?usp=drive_link"
    },
    certificates: [{
      name: "LEADERSHIP SUMMIT 2023: KABSUHENYONG LIDERATO SA PANIBANGONG PANAHON",
      url: "https://drive.google.com/file/d/1FEcFnOx_Cw3Pfm2FSAozNoJWboVMd2E7/view?usp=drive_link"
    },
    {
      name: "INTRODUCTION TO CYBERSECURITY - CISCO NETWORKING ACADEMY",
      url: "https://drive.google.com/file/d/1ZvZArl8NNt5Q5Hu2u4FxndF4YpJxSZPv/view?usp=drive_link"
    },
    {
      name: "COMPUTER LITERACY PROGRAM - DATACOM INSTITUTE OF COMPUTER TECHNOLOGY - IMUS",
      url: "https://drive.google.com/file/d/10FaXQYC2TASOrUft5v8nYHKZM3tiyQuF/view?usp=drive_link"
    },],
    schedule: [
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "COSC 95",
              section: "CS 3-5",
              room: "ROOM 204"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "ITEC 65",
              section: "IT 2-4",
              room: "AUDITORIUM"
            },
            {
              time: "1:00 PM - 2:30 PM",
              subject: "COSC 95",
              section: "CS 3-6",
              room: "AUDITORIUM"
            },
            {
              time: "4:30 PM - 6:00 PM",
              subject: "COSC 95",
              section: "CS 3-1",
              room: "ROOM 204"
            },
            {
              time: "7:30 PM - 9:00 PM",
              subject: "COSC 70",
              section: "CS 2-2",
              room: "AUDITORIUM"
            },
          ],
          tuesday: [
            {
              time: "10:30 AM - 12:00 PM",
              subject: "COSC 95",
              section: "CS 3-4",
              room: "AUDITORIUM"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "CONSULTATION HOURS",
              room: "FACULTY"
            },
            {
              time: "4:00 PM - 5:30 PM",
              subject: "COSC 95",
              section: "CS 3-1",
              room: "AUDITORIUM"
            },
            {
              time: "5:30 PM - 7:00 PM",
              subject: "COSC 70",
              section: "CS 2-4",
              room: "CL 3"
            },
            {
              time: "7:00 PM - 8:30 PM",
              subject: "COSC 70",
              section: "CS 2-2",
              room: "CL 4"
            },
          ],
          wednesday: [
            {
              time: "12:30 PM - 2:00 PM",
              subject: "COSC 70",
              section: "CS 2-4",
              room: "ROOM 201"
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "ITEC 65",
              section: "IT 2-3",
              room: "CL 2"
            },
          ],
          thursday: [],
          friday: [],
          saturday: [
            {
              time: "8:30 AM - 10:00 AM",
              subject: "COSC 95",
              section: "CS 3-5",
              room: "AUDITORIUM"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "ITEC 65",
              section: "IT 2-4",
              room: "CL 1"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "COSC 95",
              section: "CS 3-4",
              room: "AUDITORIUM"
            },
            {
              time: "5:30 PM - 7:00 PM",
              subject: "COSC 95",
              section: "CS 3-6",
              room: "AUDITORIUM"
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "ITEC 65",
              section: "IT 2-3",
              room: "ROOM 107"
            },
          ],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [4.39, 4.36],
    evaluation_labels: ["1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Attended industry-recognized training and seminars related to my Degree, BS Information Technology.",
          "Gained more knowledge through workshops related to Operating Systems, Mobile Technology, and Computer Programming.",
          "Broadened my knowledge and strength in teaching."
        ],
        "2025": [
          "Attended industry-recognized training and seminars related to my Degree, BS Information Technology.",
          "Gained more knowledge through workshops related to Operating Systems, Mobile Technology, and Computer Programming.",
          "Broadened my knowledge and strength in teaching.",
          "Continue in attending training, seminars and workshops related to Information Technology, Hosting, Mobile Technology and Computer Programming."
        ],
        "2026": [
          "Continue to attend industry-recognized training and seminars related to my Degree, BS Information Technology.",
          "Be a resource speaker related to Operating Systems, and  Mobile Technology.",
          "Continue in attending training, seminars and workshops related to Information Technology, Hosting, Mobile Technology and Computer Programming.",
          "Gain a unit in terms of Teaching.",
          "To attend workshops in Google, and Microsoft."
        ],
        "2027": [
          "Continue to attend industry-recognized training and seminars related to my Degree, BS Information Technology.",
          "Be a resource speaker related to Operating Systems, and  Mobile Technology.",
          "Continue in attending training, seminars and workshops related to Information Technology, Hosting, Mobile Technology and Computer Programming.",
          "Gain a unit in terms of Teaching.",
          "Gain a License for Teaching.",
          "Pursue a Master’s degree in Information Technology."
        ],
        "2028": [
          "Continue to attend industry-recognized training and seminars related to my Degree, BS Information Technology.",
          "Be a resource speaker related to Operating Systems, and  Mobile Technology.",
          "Continue in attending training, seminars and workshops related to Information Technology, Hosting, Mobile Technology and Computer Programming.",
          "Gain a unit in terms of Teaching.",
          "Gain a License for Teaching.",
          "Pursue a Master’s degree in Information Technology.",
          "Work abroad as a teacher"
        ],
      },
      loading: {
        "2024": ["COSC 85: OPERATING SYSTEMS"],
        "2025": ["COSC 90: PROGRAMMING LANGUAGES", "COSC 70: SOFTWARE ENGINEERING I", "ITEC 65: OPEN-SOURCE TECHNOLOGY"],
        "2026": ["COSC 85: OPERATING SYSTEMS", "ITEC 55: PLATFORM TECHNOLOGIES"],
        "2027": ["Any Major Subject BSIT/BSCS Course"],
        "2028": ["Any Major Subject BSIT/BSCS Course"],
      },
      research: {
        "2024": [
          "Engage in research related to computer studies",
          "Guide students with their research development."
        ],
        "2025": [
          "Engage in research related to computer studies",
          "Guide students with their research development."
        ],
        "2026": [
          "Engage in research related to computer studies",
          "Guide students with their research development.",
          "Be able to compose my own research related to Operating System innovation."
        ],
        "2027": [
          "Engage in research related to computer studies",
          "Guide students with their research development.",
          "Be able to compose my own research related to Operating System innovation."
        ],
        "2028": [
          "Engage in research related to computer studies"
        ],
      },
      extensions: {
        "2024": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2025": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2026": ["Be able to conduct an extension program regarding Mobile Technology Efficiency"],
        "2027": [
          "Continue to conduct an extension program regarding Mobile Technology Efficiency.",
          "Collaborate with LGUs and NGOs for Literacy on Mobile Technology."
        ],
        "2028": [
          "Continue to conduct an extension program regarding Mobile Technology Efficiency.",
          "Collaborate with LGUs and NGOs for Literacy on Mobile Technology."
        ],
      }
    }
  },
  //Jhon Nerick Batuigas
  {
    first_name: "Jhon Nerick",
    last_name: "Batuigas",
    name: "Jhon Nerick Batuigas",
    designation: "Instructor I",
    image: "/images/batuigas.JPG",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INDUSTRIAL EDUCATION",
      url: "https://drive.google.com/file/d/16elYpxvQDk-dbG-9Vs7e4xhFZYOAX6GB/view?usp=drive_link"
    },],
    tor: [{
      name: "TOR: BACHELOR OF SCIENCE IN INDUSTRIAL EDUCATION",
      url: "https://drive.google.com/file/d/1hQedUTRMwszaMajzVfCE4lQQzI3wI7ce/view?usp=drive_link"
    },],
    resume: {
      url: "https://drive.google.com/file/d/1Oa23aJB_fVoKJhykozlv8eUdU5cV2d90/view?usp=drive_link"
    },
    certificates: [{
      name: "NC II COMPUTER SYSTEM SERVICING - TESDA",
      url: "https://drive.google.com/file/d/1kGUKM8UPXx1MjTPAPYkG1Mvi24auSc_d/view?usp=drive_link"
    }],

    schedule: [
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 25",
              section: "CS 2-4",
              room: "CL 2"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 25",
              section: "CS 2-2",
              room: "CL 4"
            },
            {
              time: "4:00 PM - 6:00 PM",
              subject: "ITEC 65",
              section: "IT 2-5",
              room: "ROOM 203"
            },
          ],
          wednesday: [
            {
              time: "8:00 AM - 10:00 AM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "ITEC 65",
              section: "IT 2-6",
              room: "CL 3"
            },
          ],
          thursday: [
            {
              time: "9:30 AM - 11:30 AM",
              subject: "DCIT 25",
              section: "CS 2-5",
              room: "AUDITORIUM"
            },
            {
              time: "11:30 AM - 1:30 PM",
              subject: "DCIT 25",
              section: "CS 2-2",
              room: "AUDITORIUM"
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "DCIT 25",
              section: "CS 2-4",
              room: "CL 3"
            },
          ],
          friday: [
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 25",
              section: "CS 2-5",
              room: "CL 2"
            },
            {
              time: "1:00 AM - 3:00 PM",
              subject: "ITEC 65",
              section: "IT 2-6",
              room: "ROOM 203"
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "DCIT 25",
              section: "CS 2-5",
              room: "CL 5"
            },
          ],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 4.46],
    evaluation_labels: ["1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Acquired relevant skills aligned with the course by enrolling in certified online training programs.",
          "Attended development programs related to learning styles, or curriculum development."
        ],
        "2025": [
          "Passed the Board Licensure Examination for Professional Teachers (BLEPT) to obtain professional certification in the field of education.",
          "Acquired relevant skills aligned with the course by enrolling in certified online training programs.",
          "Served as adviser or panelist in undergraduate capstone/thesis projects."
        ],
        "2026": [
          "Pursue a Master’s degree in Information Technology to deepen expertise and broaden knowledge in the field.",
          "Engage in public speaking opportunities by participating in seminars, webinars, and similar events to enhance communication and presentation skills"
        ],
        "2027": ["Serve as resource speaker or trainer in seminars/webinars outside the university."],
        "2028": ["Complete the Master’s Degree program"],
      },
      loading: {
        "2024": ["Information Management", "Intelligent System ", "Network Fundamentals"],
        "2025": ["Data Structures and Algorithms", "Open Source Technology ", "System Integration and Architecture I"],
        "2026": ["Any courses in networking, hardware, or computer programming fundamentals, where I can apply my expertise as an ICT educator."],
        "2027": ["Any courses in networking, hardware, or computer programming fundamentals, where I can apply my expertise as an ICT educator."],
        "2028": ["Any courses in networking, hardware, or computer programming fundamentals, where I can apply my expertise as an ICT educator."],
      },
      research: {
        "2024": ["Guide students with their research development."],
        "2025": ["Guide students with their research development."],
        "2026": ["Serve as adviser or panelist in undergraduate capstone/thesis projects."],
        "2027": ["Serve as adviser or panelist in undergraduate capstone/thesis projects."],
        "2028": ["Serve as adviser or panelist in undergraduate capstone/thesis projects."],
      },
      extensions: {
        "2024": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2025": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2026": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2027": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2028": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
      }
    }
  },
  //Edan Belgica
  {
    first_name: "Edan",
    last_name: "Belgica",
    name: "Edan A. Belgica",
    designation: "Instructor I",
    image: "/images/belgic.jpeg",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      url: "https://drive.google.com/file/d/1bMZsYarmGI_KHjhpmNIUOTK6HB8kQ45W/view?usp=drive_link"
    },],
    tor: [{
      name: "TOR: BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      url: "https://drive.google.com/file/d/1fNyXSp0Osq3xCgrcI2AMopkfb5DuOpOj/view?usp=drive_link"
    },],
    resume: {
      url: "https://drive.google.com/file/d/1L5lM0fGKwv1lksmYmVvqxR7eyk9RceSp/view?usp=drive_link"
    },
    certificates: [
      {
        name: "C# Theoritical Understanding",
        url: "https://drive.google.com/file/d/1q8v6Jtls_GeaWAoLrMsY4O505KDivC5W/view?usp=drive_link"
      },
      {
        name: "Training-Workshop on Proposal Writing and Publication",
        url: "https://drive.google.com/file/d/1Qf1swnhotCKFDKyJ0GM0YOoYZs3Gb46f/view?usp=drive_link"
      },
      {
        name: "Introduction to Machine Learning",
        url: "https://drive.google.com/file/d/1j4x798N9Zee6riHbF1F4Nmc6oRqBwIeR/view?usp=drive_link"
      },

      {
        name: "Java Theoritical Understanding",
        url: "https://drive.google.com/file/d/11Lq-H_2zaGYNWdqmkNSchYyWzLDuJEig/view?usp=drive_link"
      },

      {
        name: "JavaScript Theoritical Understanding",
        url: "https://drive.google.com/file/d/1oyva7Yq0R_lb1TXVb2C95WTRIEKhT6_O/view?usp=drive_link"
      },
      {
        name: "SQL Theoritical Understanding",
        url: "https://drive.google.com/file/d/1eebCjFdli886SLE9_DyssnfvUb5ebZS8/view?usp=drive_link"
      },
      {
        name: "Seminar-Workshop on Module Development and Publication",
        url: "https://drive.google.com/file/d/1HfxvgckXehgqz2iZCHIPc8ldRoCDqhmP/view?usp=drive_link"
      }
    ],
    schedule: [
      {
        semesterName: "1st Sem A.Y 22-23",
        details: {
          monday: [],
          tuesday: [
            {
              time: "7:00 AM - 8:00 AM",
              subject: "DCIT 22",
              section: "CS 1-6",
              room: ""
            },
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 22 (LAB)",
              section: "CS 1-6",
              room: ""
            },
          ],
          wednesday: [],
          thursday: [
            {
              time: "7:00 AM - 8:00 AM",
              subject: "DCIT 22 (LAB)",
              section: "CS 1-7",
              room: ""
            },
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 22 (LAB)",
              section: "CS 1-7",
              room: ""
            },
          ],
          friday: [],
          saturday: [
            {
              time: "7:00 AM - 8:00 AM",
              subject: "DCIT 22 (LAB)",
              section: "CS 1-6",
              room: ""
            },
            {
              time: "8:00 AM - 12:00 PM",
              subject: "DCIT 22 (LAB)",
              section: "CS 1-6",
              room: ""
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "ORNT 1",
              section: "CS 1-4",
              room: ""
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "ORNT 1",
              section: "CS 1-2",
              room: ""
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "DCIT 22",
              section: "CS 1-7",
              room: ""
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "DCIT 22 (LAB)",
              section: "CS 1-7",
              room: ""
            },
            {
              time: "6:00 PM - 9:00 PM",
              subject: "DCIT 22 (LAB)",
              section: "CS 1-7",
              room: ""
            },
          ],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "7:00 AM - 8:00 AM",
              subject: "DCIT 23",
              section: "IT 1-2",
              room: ""
            },
            {
              time: "8:00 AM - 11:00 AM",
              subject: "DCIT 23 (LAB)",
              section: "IT 1-2",
              room: "CL 1"
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 23",
              section: "IT 1-3",
              room: ""
            },
            {
              time: "1:00 PM - 7:00 PM",
              subject: "DCIT 23 (LAB)",
              section: "IT 1-3",
              room: "CL 1"
            },
          ],
          tuesday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 23",
              section: "IT 1-1",
              room: ""
            },
            {
              time: "9:00 AM - 12:00 PM",
              subject: "DCIT 23 (LAB)",
              section: "IT 1-1",
              room: "CL 1"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 23 (LAB)",
              section: "IT 1-1",
              room: "CL 1"
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "DCIT 23 (LAB)",
              section: "IT 1-2",
              room: "CL 1"
            },
          ],
          wednesday: [],
          thursday: [
            {
              time: "7:00 AM - 8:00 AM",
              subject: "ITEC 95 (LEC) ASYNC",
              section: "IT 3-3",
            },
            {
              time: "8:00 AM - 9:00 AM",
              subject: "ITEC 95 (LEC) ASYNC",
              section: "IT 3-1",
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "ITEC 95 (LEC) ASYNC",
              section: "IT 3-2",
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "ITEC 95 (LEC)",
              section: "IT 3-3",
              room: "ROOM 305"
            },
            {
              time: "4:00 PM - 6:00 PM",
              subject: "ITEC 95 (LEC)",
              section: "IT 3-2",
              room: "ROOM 305"
            },
            {
              time: "6:00 PM - 8:00 PM",
              subject: "ITEC 95 (LEC)",
              section: "IT 3-1",
              room: "ROOM 305"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 50 (LAB)",
              section: "IT 2-2",
              room: "CL 4"
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 50 (LAB) ASYNC",
              section: "CS 2-2",
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 50 (LEC)",
              section: "CS 2-4",
              room: "ROOM 301"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 50 (LEC)",
              section: "CS 2-7",
              room: "ROOM 301"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 50 ASYNC",
              section: "CS 2-4",
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "DCIT 50 ASYNC",
              section: "CS 2-5",
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 50 ASYNC",
              section: "CS 2-6",
            },
          ],
          wednesday: [
            {
              time: "7:00 AM - 8:00 AM",
              subject: "DCIT 50 ASYNC",
              section: "CS 2-2",
            },
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 50 ASYNC",
              section: "CS 2-3",
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "CONSULTATION",
              room: "FACULTY",
            },
          ],
          thursday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "DCIT 50 (LAB)",
              section: "CS 2-3",
              room: "CL 4"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "DCIT 50 (LAB) ASYNC",
              section: "CS 2-3",
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "DCIT 50 ASYNC",
              section: "CS 2-7",
            },
          ],
          friday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "DCIT 50 (LAB)",
              section: "CS 2-7",
              room: "CL 4"
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 50 (LEC)",
              section: "CS 2-5",
              room: "ROOM 301"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 50 (LEC)",
              section: "CS 2-6",
              room: "ROOM 301"
            },
          ],
          saturday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 50 (LEC)",
              section: "CS 2-2",
              room: "ROOM 301"
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 50 (LEC)",
              section: "CS 2-3",
              room: "ROOM 301"
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 50 (LAB) ASYNC",
              section: "CS 2-4",
            },
            {
              time: "11:00 AM - 1:00 PM",
              subject: "DCIT 50 (LAB)",
              section: "CS 2-4",
              room: "CL 4"
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "DCIT 50 (LAB) ASYNC",
              section: "CS 2-5",
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "DCIT 50 (LAB)",
              section: "CS 2-5",
              room: "CL 4"
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "DCIT 50 (LAB)",
              section: "CS 2-6",
              room: "CL 4"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "DCIT 50 (LAB) ASYNC",
              section: "CS 2-6",
            },
          ],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 23",
              section: "CS 1-1",
              room: "CL 2"
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 23",
              section: "CS 1-1",
              room: "CL 2"
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 55",
              section: "CS 2-6",
              room: "ROOM 303"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 55",
              section: "CS 2-5",
              room: "ROOM 302"
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "CS 2-5",
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "CS 2-6",
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "CS 2-7",
            },
          ],
          wednesday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 23",
              section: "CS 1-2",
              room: "CL 3"
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 23",
              section: "CS 1-2",
              room: "CL 3"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 23",
              section: "CS 1-1",
              room: "CL 4"
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 55 (LAB) ASYNC",
              section: "CS 2-5",
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 55 (LAB) ASYNC",
              section: "CS 2-6",
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 55 (LAB) ASYNC",
              section: "CS 2-7",
            },
          ],
          thursday: [
            {
              time: "8:00 AM - 10:00 AM",
              subject: "DCIT 23 (LAB) ASYNC",
              section: "CS 1-1",
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 55",
              section: "CS 2-5",
              room: "CL 2"
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "DCIT 23 (LAB) ASYNC",
              section: "CS 1-2",
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "CONSULTATION",
              room: "FACULTY",
            },
          ],
          friday: [],
          saturday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 23",
              section: "CS 1-2",
              room: "CL 2"
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "DCIT 55",
              section: "CS 2-7",
              room: "CL 2"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 55",
              section: "CS 2-7",
              room: "ROOM 303"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "DCIT 55",
              section: "CS 2-6",
              room: "CL 3"
            },
          ],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            {
              time: "7:00 AM - 8:30 AM",
              subject: "ITEC 85",
              section: "CS 3-3",
              room: "ROOM 201"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 55",
              section: "CS 2-3",
              room: "ROOM 201"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 55",
              section: "CS 2-2",
              room: "CL 1"
            },
          ],
          tuesday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "ITEC 106",
              section: "IT 3-1",
              room: "ROOM 107"
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "ITEC 106",
              section: "IT 3-2",
              room: "ROOM 109"
            },
            {
              time: "12:00 PM - 3:00 PM",
              subject: "DCIT 55",
              section: "CS 2-4",
              room: "CL 1"
            },
            {
              time: "3:00 PM - 6:00 PM",
              subject: "DCIT 55",
              section: "CS 2-3",
              room: "CL 1"
            },
          ],
          wednesday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "ITEC 85",
              section: "CS 3-3",
              room: "ROOM 201"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "ITEC 106",
              section: "IT 3-2",
              room: "CL 1"
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "ITEC 106",
              section: "IT 3-1",
              room: "CL 1"
            },
          ],
          thursday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 55",
              section: "CS 2-4",
              room: "ROOM 107"
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "DCIT 55",
              section: "CS 2-2",
              room: "ROOM 107"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, null, null, 3.97, null, 4.34],
    evaluation_labels: ["1st Sem A.Y 22-23", "2nd Sem A.Y 22-23", "1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Strengthen proficiency in mobile and web development through continuous learning and project-based practice.",
          "Enhance teaching effectiveness by conducting self-evaluations guided by Student Evaluation of Teachers (SET) results and incorporating feedback into instructional strategies."
        ],
        "2025": [
          "Become an active member of organizations related to mobile and web development to foster professional networking and stay updated with industry trends.",
          "Enroll in a Master’s program in Computer Science to deepen theoretical foundations and advance practical competencies in the field."
        ],
        "2026": [
          "Continue Master’s studies while actively engaging in IT and Computer Science communities through conferences, workshops, and seminars for professional growth.",
          "Continue developing mobile and web applications for partner organizations to strengthen real-world experience and community engagement."
        ],
        "2027": [
          "Complete the Master’s degree in Computer Science.",
          "Maintain active membership in multiple professional organizations to support lifelong learning and expand collaborative opportunities"
        ],
        "2028": [
          "Lead or co-lead professional development initiatives or workshops within the institution or partner organizations.",
          "Explore opportunities for collaborative projects with industry partners to integrate real-world applications into teaching and research."
        ],
      },
      loading: {
        "2024": ["Software Engineering 2"],
        "2025": ["Advanced Database Management System", "Information Security and Assurance", "Web Systems and Technologies 2"],
        "2026": ["Any major Computer Science Course Subjects"],
        "2027": ["Any major Computer Science Course Subjects"],
        "2028": ["Any major Computer Science Course Subjects"],
      },
      research: {
        "2024": ["One of the proponents of a Faculty Study."],
        "2025": ["Developed the application that supports the Faculty Study."],
        "2026": ["Presentation of the Faculty Study to the CvSU’s CELLAR.", "Be a member of the research projects for the extension services."],
        "2027": ["Make publications of the presented research and studies."],
        "2028": ["Continue with the research-related application development and create research projects locally and internationally."],
      },
      extensions: {
        "2024": ["Participate in the campus extension activities."],
        "2025": ["Develop applications and automated solutions for the extension projects."],
        "2026": ["Finished the development of the application and automated solutions for the extension projects."],
        "2027": ["Develop additional applications for an automated solution and processes for the extension projects."],
        "2028": ["Initiate training and workshops related to application development."],
      }
    }
  },
  //Ralph Christian Bolarda
  {
    first_name: "Ralph Christian",
    last_name: "Bolarda",
    name: "Ralph Christian Bolarda, MIT",
    designation: "Instructor I",
    image: "/images/bolarda.JPG",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1vZbJpkcNKzVAjOhaI_2pxbEd6Yha147H/view?usp=drive_link"
    },],
    masters_diploma: {
      name: "MASTER IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1vBxRmRTd-osPfFdAxx9ncQWagBOz65lK/view?usp=drive_link"
    },
    tor: [{
      name: "TOR: BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1z1okPsd93fgtWkqBY7d3ptvMZpEJGDMT/view?usp=drive_link"
    },],
    resume: {
      url: "https://drive.google.com/file/d/1_TEGYBf5-F_DFkecGkObp2kKYB1psxNO/view?usp=drive_link"
    },
    certificates: [
      {
        name: "BIG DATA - UDEMY",
        url: "https://drive.google.com/file/d/1OvrOESUOL-eSutXOTCGKFBsDXow-_mVE/view?usp=drive_link"
      },
      {
        name: "SEMINAR-WORKSHOP ON MODULE DEVELOPMENT AND PUBLICATION - CAVITE STATE UNIVERSITY - BACOOR",
        url: "https://drive.google.com/file/d/1tYjr4HnPGJZQo_Rff_xmkgwFpTGQhwqH/view?usp=drive_link"
      },],
    schedule: [
      {
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 55 (LAB)",
              section: "IT 2-5",
              room: "CL 2"
            },
            {
              time: "3:00 PM - 6:00 PM",
              subject: "DCIT 55 (LAB)",
              section: "IT 2-4",
              room: "CL 4"
            },
          ],
          tuesday: [
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 55 (LAB)",
              section: "IT 2-6",
              room: "CL 4"
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "DCIT 55 (LEC)",
              section: "IT 2-5",
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "IT 2-6",
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "ITEC 60 (LEC) ASYNC",
              section: "IT 2-4",
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "ITEC 60 (LEC) ASYNC",
              section: "IT 2-5",
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 60 (LEC) ASYNC",
              section: "IT 2-6",
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "DCIT 55(LEC) ASYNC",
              section: "IT 2-4",
            },
          ],
          wednesday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 55 (LEC)",
              section: "IT 2-5",
              room: "ROOM 305"
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 55 (LEC)",
              section: "IT 2-6",
              room: "ROOM 305"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "ITEC 60 (LEC)",
              section: "IT 2-4",
              room: "ROOM 301"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "ITEC 60 (LEC)",
              section: "IT 2-5",
              room: "ROOM 302"
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "ITEC 60 (LEC)",
              section: "IT 2-6",
              room: "ROOM 302"
            },
          ],
          thursday: [],
          friday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 55 (LEC)",
              section: "IT 2-4",
              room: "ROOM 301"
            },
            {
              time: "9:00 AM - 12:00 PM",
              subject: "ITEC 60 (LAB)",
              section: "IT 2-4",
              room: "CL 2"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "ITEC 60 (LAB)",
              section: "IT 2-5",
              room: "CL 2"
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "ITEC 60 (LAB)",
              section: "IT 2-6",
              room: "CL 4"
            },
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 24 (LAB)",
              section: "IT 2-4",
              room: "CL 2"
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 24 (LAB) ASYNC",
              section: "IT 2-5",
            },
            {
              time: "11:00 AM - 1:00 PM",
              subject: "DCIT 24 (LAB)",
              section: "IT 2-5",
              room: "CL 2"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 24 (LEC)",
              section: "IT 2-1",
              room: "ROOM 301"
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "DCIT 24 (LEC)",
              section: "IT 2-3",
              room: "ROOM 301"
            },
          ],
          tuesday: [
            {
              time: "7:00 AM - 8:00 AM",
              subject: "DCIT 55 (LEC)",
              section: "CS 3-3",
              room: "ROOM 301"
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 24 (LEC)",
              section: "IT 2-2",
              room: "CL 3"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 24 (LAB)",
              section: "IT 2-2",
              room: "CL 3"
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 24 (LAB) ASYNC",
              section: "IT 2-2",
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 24 (LAB)",
              section: "IT 2-3",
              room: "CL 2"
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "DCIT 24 ASYNC",
              section: "IT 2-1",
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "DCIT 24 ASYNC",
              section: "IT 2-4",
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "DCIT 24 ASYNC",
              section: "IT 2-5",
            },
          ],
          wednesday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 24 (LAB)",
              section: "IT 2-1",
              room: "CL 2"
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 24 (LAB) ASYNC",
              section: "IT 2-1",
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "CVSU 101",
              section: "IT 1-3",
              room: "ROOM 303"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 24 (LEC)",
              section: "IT 2-4",
              room: "ROOM 301"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 24 (LEC)",
              section: "IT 2-5",
              room: "ROOM 301"
            },
          ],
          thursday: [
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 24 ASYNC",
              section: "IT 2-2",
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 24 ASYNC",
              section: "IT 2-3",
            },
            {
              time: "12:00 PM - 3:00 PM",
              subject: "CONSULTATION",
              room: "FACULTY",
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 24 (LAB) ASYNC",
              section: "IT 2-4",
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "DCIT 55 (LAB) ASYNC",
              section: "CS 3-3",
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "DCIT 55 (LAB)",
              section: "CS 3-3",
              room: "CL 3"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 55 (LAB) ASYNC",
              section: "CS 2-1",
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 55 (LAB) ASYNC",
              section: "CS 2-2",
            },
            {
              time: "11:00 AM - 1:00 PM",
              subject: "DCIT 55",
              section: "CS 2-1",
              room: "CL 3"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "DCIT 55",
              section: "CS 2-2",
              room: "CL 3"
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "DCIT 55",
              section: "IT 2-7",
              room: "ROOM 303"
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "CS 2-1",
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "CS 2-2",
            },
          ],
          tuesday: [
            {
              time: "9:00 AM - 11:00 AM",
              subject: "ITEC 60",
              section: "IT 2-2",
              room: "CL 3"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 60 (LAB) ASYNC",
              section: "IT 2-2",
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "ITEC 60 (LAB) ASYNC",
              section: "IT 2-4",
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "ITEC 60",
              section: "IT 2-4",
              room: "CL 1"
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "DCIT 55 (LAB) ASYNC",
              section: "IT 2-7",
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "IT 2-7",
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "DCIT 55 (LAB) ASYNC",
              section: "IT 2-6",
            },
          ],
          wednesday: [
            {
              time: "10:00 AM - 11:00 AM",
              subject: "ITEC 60",
              section: "IT 2-2",
              room: "ROOM 305"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 55",
              section: "CS 2-1",
              room: "ROOM 301"
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 55",
              section: "CS 2-2",
              room: "ROOM 301"
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "ITEC 60",
              section: "IT 2-4",
              room: "ROOM 305"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 55",
              section: "IT 2-6",
              room: "ROOM 305"
            },
            {
              time: "4:00 PM - 6:00 PM",
              subject: "DCIT 55",
              section: "IT 2-7",
              room: "CL 3"
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "DCIT 55",
              section: "IT 2-6",
              room: "CL 2"
            },
          ],
          thursday: [
            {
              time: "8:00 AM - 10:00 AM",
              subject: "CONSULTATION",
              room: "FACULTY",
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "IT 2-6",
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 60 (LEC) ASYNC",
              section: "IT 2-2",
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "ITEC 60 (LEC) ASYNC",
              section: "IT 2-2",
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            {
              time: "7:00 AM - 10:-00 AM",
              subject: "DCIT 55",
              section: "IT 2-4",
              room: "CL 2"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 55",
              section: "IT 2-5",
              room: "ROOM 204"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 55",
              section: "IT 2-6",
              room: "CL 2"
            },
            {
              time: "5:00 PM - 8:00 PM",
              subject: "GNED 09",
              section: "CS 3-5",
              room: "ROOM 109"
            },
          ],
          tuesday: [],
          wednesday: [
            {
              time: "12:00 PM - 2:00 PM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "ITEC 101",
              section: "IT 3-5",
              room: "ROOM 109"
            },
            {
              time: "6:00 PM - 7:30 PM",
              subject: "DCIT 55",
              section: "IT 2-5",
              room: "ROOM 109"
            },
          ],
          thursday: [],
          friday: [
            {
              time: "7:00 AM - 10:-00 AM",
              subject: "DCIT 55",
              section: "IT 2-5",
              room: "CL 2"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 55",
              section: "IT 2-6",
              room: "ROOM 203"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "ITEC 101",
              section: "IT 3-5",
              room: "CL 4"
            },
            {
              time: "4:00 PM - 6:00 PM",
              subject: "DCIT 55",
              section: "IT 2-5",
              room: "ROOM 204"
            },
          ],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, null, 4.12, null, 4.25],
    evaluation_labels: ["2nd Sem A.Y 22-23", "1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Attend training on latest software development and cloud computing technologies.",
          "Integrate coding challenges and hands-on activities to reinforce programming concepts."
        ],
        "2025": [
          "Completed Master in Information Technology (MIT), enhancing expertise in software development, database systems, and emerging IT trends."
        ],
        "2026": [],
        "2027": [],
        "2028": [],
      },
      loading: {
        "2024": ["Advanced Database Management System", "Web System and Technologies", "Web System and Technologies"],
        "2025": ["Advanced Database Management System", "Human Computer Interaction 2"],
        "2026": [],
        "2027": [],
        "2028": [],
      },
      research: {
        "2024": ["Engaged in research initiatives focused on Computer Studies, including emerging technologies and applied computing."],
        "2025": ["Encourage innovation and critical thinking in student-led research efforts."],
        "2026": [],
        "2027": [],
        "2028": [],
      },
      extensions: {
        "2024": [],
        "2025": [],
        "2026": [],
        "2027": [],
        "2028": [],
      }
    }
  },
  //Rafael Carvajal
  {
    first_name: "Rafael",
    last_name: "Carvajal",
    name: "Rafel J. Carvajal",
    designation: "Instructor I",
    image: "/images/carvajal.JPG",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INDUSTRIAL EDUCATION",
      url: "https://drive.google.com/file/d/1IkZvDHn2Y9NCiXsuF-7UIpLJj5bAeJbl/view?usp=drive_link"
    },],
    tor: [{
      name: "TOR: BACHELOR OF SCIENCE IN INDUSTRIAL EDUCATION",
      url: "https://drive.google.com/file/d/1OD5ihB_21VLXplxN42pP4u1DVb9mV-IH/view?usp=drive_link"
    },],
    resume: {
      url: "https://drive.google.com/file/d/1kmBSZPwJthlmjze5C275tfQp2Ffm-vJk/view?usp=drive_link"
    },
    certificates: [
      {
        name: "SEMINAR-WORKSHOP ON MODULE DEVELOPMENT AND PUBLICATION - CAVITE STATE UNIVERSITY - BACOOR",
        url: "https://drive.google.com/file/d/111dy8R6L4MQZdbe68pkgpogwuostNUPv/view?usp=drive_link"
      },
      {
        name: "BEYOND FIREWALLS: A UNIFIED APPROACH TO CYBERSECURITY - DICT",
        url: "https://drive.google.com/file/d/1kw_uGfMNEok1Fl_BodJny6WAdtthNeYH/view?usp=drive_link"
      },],
    schedule: [
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 23",
              section: "IT 1-2",
              room: "ROOM 203"
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "DCIT 23",
              section: "IT 1-6",
              room: "CL 4"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "DCIT 23",
              section: "IT 1-6",
              room: "ROOM 109"
            },
          ],
          wednesday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "DCIT 23",
              section: "IT 1-2",
              room: "CL 1"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "DCIT 23",
              section: "IT 1-5",
              room: "CL 2"
            },
          ],
          thursday: [],
          friday: [
            {
              time: "7:00 AM - 10:-00 AM",
              subject: "COSC 70",
              section: " CS 2-5",
              room: "ROOM 109"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 23",
              section: "IT 2-6",
              room: "CL 5"
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "DCIT 23",
              section: "IT 1-5",
              room: "ROOM 109"
            },
          ],
          saturday: [
            {
              time: "7:00 AM - 10:-00 AM",
              subject: "DCIT 23",
              section: " IT 1-5",
              room: "CL 3"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 23",
              section: "IT 1-2",
              room: "CL 5"
            },
          ],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 4.41],
    evaluation_labels: ["1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Successfully passed the Board Licensure Examinations for Professional Teachers.",
          "Integrated relevant skills aligned with the course by attending to online seminars and programs."
        ],
        "2025": [
          "Participated in any local and international workshops and seminars on Cybersecurity and Ethical Use of AI.",
          "Attended Module Creation Workshop and Capability Enhancement Training provided by the CvSU and DICT.",
          "Assist students for their academic compliance through project proposal aligned to the UN’s Sustainable Development Goals with applied technical strategies on Computer Programming through Community-Based Sustainable solutions to the issues/concerns focusing on Healthcare, Traffic Management, Waste Management and Animal Welfare."
        ],
        "2026": [
          "Enroll to a reputable university for a Master of Science in Computer Science.",
          "Enhance my skills in Media and Information Literacy and Multimedia Arts through workshops and training.",
          "Improve my abilities in Research and Communications to better align students’ research purposes with community issues and concerns.",
          "Become a member of professional organizations that will enrich and augment my expertise in Computer Science."
        ],
        "2027": [
          "Publish a Faculty Research that focuses students’ Career Assessment and their Job Performance during OJT.",
          "Craft a policy on the students’ ethical use of AI on their submitted academic materials aligned to the CvSU Academic Guidelines and other significant factors.",
          "Integrate my professional skills on Data Analysis on Computer Studies."
        ],
        "2028": [
          "Engage on Seminars, Trainings and related events to share professional insights and knowledge to the audiences.",
          "Enhance my skills on Educational Management and Curriculum Enhancement from compiled students’ evaluations, performance ratings through relevant workshops and trainings.",
          "Propose a Curriculum Roadmap for Computer Studies."
        ],
      },
      loading: {
        "2024": ["Systems Analysis and Design"],
        "2025": ["Software Engineering I", "Computer Programming 2"],
        "2026": ["Any subjects related to General Education, Multimedia and IT/CS."],
        "2027": ["Any subjects related to General Education, Multimedia and IT/CS."],
        "2028": ["Any subjects related to General Education, Multimedia and IT/CS."],
      },
      research: {
        "2024": [],
        "2025": ["Continue to mentor student researchers to be able to produce at least Research per year for funding"],
        "2026": ["Continue to mentor student researchers to be able to produce at least Research per year for funding"],
        "2027": [],
        "2028": [],
      },
      extensions: {
        "2024": [],
        "2025": [],
        "2026": ["Participate in the campus extension activities."],
        "2027": ["Participate in the campus extension activities."],
        "2028": ["Participate in the campus extension activities."],
      }
    }
  },
  //Jerico Castillo
  {
    first_name: "Jerico",
    last_name: "Castillo",
    name: "Jerico D. Castillo",
    designation: "Instructor I",
    image: "/images/castillo.jpg",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INDUSTRIAL EDUCATION",
      url: "https://drive.google.com/file/d/1dkCoo6jeZOAHA7u_QzOwdJv9NnUvQzej/view?usp=drive_link"
    },],
    tor: [
      {
        name: "BACHELOR OF SCIENCE IN INDUSTRIAL EDUCATION",
        url: "https://drive.google.com/file/d/1Eb9dtITCymDZ1W2pxkMh9tTCY1EBb7nF/view?usp=drive_link"
      },
      {
        name: "MASTER OF ARTS IN EDUCATION MAJOR IN EDUCATIONAL MANAGEMENT",
        url: "https://drive.google.com/file/d/1fztALg8k0oHJ9CRlWBON-giU0Vp4PWnz/view?usp=drive_link"
      },],
    resume: {
      url: "https://docs.google.com/document/d/11-Oo8Qq995N3ZFPvde9LyTDAtlv0AuFi/edit?usp=drive_link&ouid=102452445519148225886&rtpof=true&sd=true"
    },
    certificates: [
      {
        name: "Training-Writeshop on the Enhancement of Contingency Plan and School Safety Plan",
        url: "https://drive.google.com/file/d/14DUR4pjOat661UoGSV6mHX2o41i4GJ_t/view?usp=drive_link"
      },
    ],
    speaking_engagements: [{
      name: "Resource Speaker: District-Level Training on the Matatag Curriculum for Grade 7 Teachers",
      url: "https://drive.google.com/file/d/1vLC6nkRADTwNLjP6VWVVZSDPFT-f9NjA/view?usp=drive_link"
    }],
    schedule: [
      {
        semesterName: "1st Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "3:00 PM - 5:00 PM",
              subject: "DCIT 21",
              section: "CS 1-2",
              room: ""
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "COSC 85 (LAB)",
              section: "CS 4-1",
              room: ""
            },
          ],
          tuesday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "COSC 85 (LAB)",
              section: "CS 4-1",
              room: ""
            },
          ],
          wednesday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "DCIT 21",
              section: "CS 1-1",
              room: ""
            },
          ],
          thursday: [],
          friday: [],
          saturday: [
            {
              time: "7:00 AM - 8:00 AM",
              subject: "DCIT 21",
              section: "CS 1-1",
              room: ""
            },
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 21 (LAB)",
              section: "CS 1-1",
              room: ""
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 21 (LAB)",
              section: "CS 1-1",
              room: ""
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 21",
              section: "CS 1-2",
              room: ""
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 21 (LAB)",
              section: "CS 1-2",
              room: ""
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 21 (LAB)",
              section: "CS 1-2",
              room: ""
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "ORNT 1",
              section: "IT 1-1",
              room: ""
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "ORNT 1",
              section: "IT 1-2",
              room: ""
            },
          ],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [
            {
              time: "7:00 AM - 8:00 AM",
              subject: "ITEC 50 (LEC)",
              section: "IT 1-7",
            },
            {
              time: "8:00 AM - 9:00 AM",
              subject: "ITEC 50 (LEC)",
              section: "IT 1-6",
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "ITEC 50 (LEC)",
              section: "IT 1-6",
              room: "ROOM 301"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "ITEC 50 (LEC)",
              section: "IT 1-6",
              room: "CL 1"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "ITEC 50 (LEC)",
              section: "IT 1-7",
              room: "ROOM 301"
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "ITEC 50 (LEC)",
              section: "IT 1-7",
              room: "CL 1"
            },
          ],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 50 (LEC)",
              section: "CS 2-4",
              room: "ROOM 301"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 50 (LEC)",
              section: "CS 2-3",
              room: "ROOM 301"
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 50 (LAB)",
              section: "CS 2-3",
              room: "CL 1"
            },
          ],
          tuesday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "ITEC 50 (LAB)",
              section: "CS 2-7",
              room: "CL 3"
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 50 (LEC)",
              section: "CS 2-7",
              room: "CL 3"
            },
          ],
          wednesday: [
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 50 (LAB) ASYNC",
              section: "CS 2-7",
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "ITEC 50 (LAB)",
              section: "CS 2-3",
              room: "CL 1"
            },
          ],
          thursday: [
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 50 (LEC) ASYNC",
              section: "CS 2-3",
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 50 (LEC) ASYNC",
              section: "CS 2-4",
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 50 (LEC) ASYNC",
              section: "CS 2-7",
            },
          ],
          friday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "ITEC 50 (LAB)",
              section: "CS 2-4",
              room: "CL 2"
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 50 (LAB) ASYNC",
              section: "CS 2-4",
            },
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "ITEC 50",
              section: "IT 1-1",
              room: "CL 1"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 50",
              section: "IT 1-1",
              room: "ROOM 301"
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 50 (LEC) ASYNC",
              section: "IT 2-2",
            },
          ],
          tuesday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "GNED 08",
              section: "CS 2-3",
              room: "ROOM 303"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "GNED 08 ASYNC",
              section: "CS 2-3",
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 50 (LEC) ASYNC",
              section: "IT 1-1",
            },
          ],
          wednesday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "ITEC 50",
              section: "IT 1-2",
              room: "CL 1"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 50",
              section: "IT 1-1",
              room: "ROOM 301"
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 50 (LEC) ASYNC",
              section: "IT 1-2",
            },
          ],
          thursday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "GNED 08",
              section: "CS 2-7",
              room: "ROOM 303"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "GNED 08 ASYNC",
              section: "CS 2-7",
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 50 (LAB) ASYNC",
              section: "IT 1-1",
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            {
              time: "6:00 PM - 7:30 PM",
              subject: "GNED 08",
              section: "CS 2-1",
              room: "AUDITORIUM"
            },
          ],
          tuesday: [
            {
              time: "5:30 PM - 7:00 PM",
              subject: "GNED 08",
              section: "CS 2-2",
              room: "AUDITORIUM"
            },
            {
              time: "7:00 PM - 8:30 PM",
              subject: "GNED 08",
              section: "IT 2-5",
              room: "ROOM 201"
            },
          ],
          wednesday: [
            {
              time: "7:00 PM - 8:30 PM",
              subject: "GNED 08",
              section: "IT 2-5",
              room: "CL 2"
            },
          ],
          thursday: [
            {
              time: "5:30 PM - 7:00 PM",
              subject: "GNED 08",
              section: "CS 2-2",
              room: "ROOM 107"
            },
            {
              time: "7:00 PM - 8:30 PM",
              subject: "GNED 08",
              section: "IT 2-1",
              room: "ROOM 107"
            },
          ],
          friday: [
            {
              time: "5:30 PM - 7:00 PM",
              subject: "GNED 08",
              section: "CS 2-1",
              room: "ROOM 107"
            },
            {
              time: "7:00 PM - 8:30 PM",
              subject: "GNED 08",
              section: "IT 2-1",
              room: "CL 5"
            },
          ],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [4.71, 4.19, null, 3.67],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": ["Continued Masters Degree"],
        "2025": ["Earned Masters Degree"],
        "2026": ["To continue in Doctorate Degree"],
        "2027": ["To continue in Doctorate Degree"],
        "2028": [],
      },
      loading: {
        "2024": ["Web Systems and Technologies 1", "Understanding the Self"],
        "2025": ["Web Systems and Technologies 1", "Understanding the Self"],
        "2026": ["Web Systems and Technologies 1", "Understanding the Self"],
        "2027": ["Web Systems and Technologies 1", "Understanding the Self"],
        "2028": ["Web Systems and Technologies 1", "Understanding the Self"],
      },
      research: {
        "2024": ["To attend research seminar/ workshop and colloquium"],
        "2025": ["To attend research seminar/ workshop and colloquium"],
        "2026": ["To attend research seminar/ workshop and colloquium"],
        "2027": ["To conduct and publish applied research in computing studies"],
        "2028": ["To conduct and publish applied research in computing studies"],
      },
      extensions: {
        "2024": ["To engage in various extension activities and programs"],
        "2025": ["To engage in various extension activities and programs"],
        "2026": ["To engage in various extension activities and programs"],
        "2027": ["To engage in various extension activities and programs"],
        "2028": ["To engage in various extension activities and programs"],
      }
    }
  },
  //Mariel Castillo
  {
    first_name: "Mariel",
    last_name: "Castillo",
    name: "Mariel E. Castillo",
    designation: "Instructor I",
    image: "/images/m_castillo.JPG",
    diploma: [{
      name: "BACHELOR OF SECONDARY EDUCATION MAJOR IN MATHEMATICS",
      url: "https://drive.google.com/file/d/1X_38eAzIhR5ERSyBVcINhPT3eK4svwbr/view?usp=drive_link"
    },],
    tor: [{
      name: "TOR: BACHELOR OF SECONDARY EDUCATION MAJOR IN MATHEMATICS",
      url: "https://drive.google.com/file/d/1CbDVQsroAu5B7nNLtjlvVgZsvhySAUGT/view?usp=drive_link"
    },],
    resume: {
      url: "https://drive.google.com/file/d/1Zf4zHWDUcq58dl9KlxLmE-svOzxnsiQi/view?usp=drive_link"
    },

    schedule: [
      {
        semesterName: "1st Sem A.Y 22-23",
        details: {
          monday: [{ time: "1:00 PM - 3:00 PM", subject: "CS101 - Intro to Programming", room: "Lab 1" }],
          tuesday: [{ time: "9:00 AM - 11:00 AM", subject: "IT202 - Web Development", room: "G201" }],
          wednesday: [],
          thursday: [{ time: "1:00 PM - 3:00 PM", subject: "CS101 - Intro to Programming (Lab)", room: "Lab 2" }],
          friday: [{ time: "9:00 AM - 11:00 AM", subject: "Office Hours", room: "Faculty Office 2" }],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [{ time: "9:00 AM - 11:00 AM", subject: "Data Structures", room: "G101" }],
          tuesday: [{ time: "1:00 PM - 3:00 PM", subject: "Algorithms", room: "G102" }],
          wednesday: [{ time: "10:00 AM - 12:00 PM", subject: "Office Hours", room: "Faculty Office 2" }],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "COSC 50",
              section: "CS 1-3",
              room: "ROOM 301"
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "COSC 50",
              section: "CS 1-5",
              room: "ROOM 302"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "MATH 3",
              section: "CS 3-1",
              room: "ROOM 303"
            },
          ],
          tuesday: [
            {
              time: "7:00 AM - 8:00 AM",
              subject: "COSC 50 ASYNC",
              section: "CS 1-1",
            },
            {
              time: "8:00 AM - 9:00 AM",
              subject: "COSC 50 ASYNC",
              section: "CS 1-2",
            },
            {
              time: "9:00 AM - 1O:00 AM",
              subject: "COSC 50 ASYNC",
              section: "CS 1-3",
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "COSC 50 ASYNC",
              section: "CS 1-5",
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "MATH 1",
              section: "CS 2-6",
              room: "ROOM 302"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "MATH 1",
              section: "CS 2-7",
              room: "ROOM 302"
            },
          ],
          wednesday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "COSC 50",
              section: "CS 1-1",
              room: "ROOM 302"
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "COSC 50",
              section: "CS 1-4",
              room: "ROOM 302"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "MATH 3",
              section: "CS 3-3",
              room: "ROOM 303"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "MATH 3",
              section: "CS 3-2",
              room: "ROOM 303"
            },
          ],
          thursday: [],
          friday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "COSC 50",
              section: "CS 1-2",
              room: "ROOM 301"
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "COSC 50 ASYNC",
              section: "CS 1-4",
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "MATH 1 ASYNC",
              section: "CS 2-4",
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "MATH 1 ASYNC",
              section: "CS 2-6",
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "MATH 3 ASYNC",
              section: "CS 3-1",
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "MATH 3 ASYNC",
              section: "CS 3-2",
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "MATH 3 ASYNC",
              section: "CS 3-3",
            },
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "GNED 01",
              section: "IT 1-6",
              room: "ROOM 305"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "GNED 03",
              section: "IT 1-1",
              room: "ROOM 302"
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "GNED 03 ASYNC",
              section: "IT 1-3",
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "GNED 03",
              section: "IT 1-2",
              room: "ROOM 302"
            },
          ],
          tuesday: [],
          wednesday: [],
          thursday: [
            {
              time: "9:00 AM - 11:00 AM",
              subject: "GNED 01",
              section: "IT 1-5",
              room: "ROOM 303"
            },
            {
              time: "11:00 AM - 1:00 PM",
              subject: "MATH 2",
              section: "CS 2-4",
              room: "ROOM 301"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "MATH 2",
              section: "CS 2-5",
              room: "ROOM 305"
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "MATH 2",
              section: "CS 2-6",
              room: "ROOM 301"
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "MATH 2",
              section: "CS 2-7",
              room: "ROOM 305"
            },
          ],
          friday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "GNED 01 ASYNC",
              section: "IT 1-5",
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "GNED 01 ASYNC",
              section: "IT 1-6",
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "GNED 01 ASYNC",
              section: "IT 1-1",
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "GNED 01 ASYNC",
              section: "IT 1-2",
            },
          ],
          saturday: [
            {
              time: "10:00 AM - 11:00 AM",
              subject: "GNED 03 ASYNC",
              section: "CS 1-3",
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "MATH 2 ASYNC",
              section: "CS 2-4",
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "MATH 2 ASYNC",
              section: "CS 2-5",
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "MATH 2 ASYNC",
              section: "CS 2-6",
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "GNED 03",
              section: "IT 1-3",
              room: "ROOM 305"
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "GNED 03",
              section: "CS 1-3",
              room: "ROOM 305"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "MATH 2 ASYNC",
              section: "CS 2-7",
            },
          ],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [
            {
              time: "1:00 PM - 2:00 PM",
              subject: "MATH 02",
              section: "CS 2-3",
              room: "AUDITORIUM"
            },
            {
              time: "7:00 PM - 8:30 PM",
              subject: "GNED 03",
              section: "CS 1-3",
              room: ""
            },
          ],
          wednesday: [
            {
              time: "7:00 AM - 8:30 AM",
              subject: "GNED 03",
              section: "CS 1-4",
              room: "ROOM 109"
            },
            {
              time: "9:00 AM - 12:00 PM",
              subject: "MATH 02",
              section: "CS 2-1",
              room: "ROOM 101"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
          ],
          thursday: [
            {
              time: "7:00 AM - 8:30 AM",
              subject: "MATH 02",
              section: "CS 2-5",
              room: "ROOM 109"
            },
            {
              time: "8:30 AM - 10:00 AM",
              subject: "GNED 03",
              section: "CS 1-4",
              room: "ROOM 109"
            },
            {
              time: "10:00 AM - 11:30 AM",
              subject: "GNED 03",
              section: "CS 1-1",
              room: "ROOM 109"
            },
            {
              time: "2:30 PM - 5:30 PM",
              subject: "MATH 02",
              section: "CS 2-2",
              room: "AUDITORIUM"
            },
            {
              time: "7:00 PM - 8:30 PM",
              subject: "MATH 02",
              section: "CS 2-4",
              room: "CL 1"
            },
          ],
          friday: [
            {
              time: "1:30 PM - 3:00 PM",
              subject: "MATH 02",
              section: "CS 2-5",
              room: "ROOM 204"
            },
            {
              time: "3:00 PM - 4:30 PM",
              subject: "GNED 03",
              section: "CS 1-3",
              room: "ROOM 203"
            },
            {
              time: "4:30 PM - 6:00 PM",
              subject: "GNED 03",
              section: "CS 1-1",
              room: "ROOM 203"
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "MATH 02",
              section: "CS 2-3",
              room: "CL 1"
            },
          ],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 3.94, null, 3.66],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Strengthened my teaching strategies in mathematics for computing by aligning with OBE principles and CS course outcomes.",
          "Attended training on integrating computational tools (e.g., Python, MATLAB, GeoGebra) in teaching mathematical concepts.",
          "Used SET feedback and peer observation to refine instructional delivery and student engagement."
        ],
        "2025": [
          "Attended workshops on teaching programming-related mathematics (e.g., Discrete Math, Linear Algebra, Probability).",
          "Collaborated with CS faculty to enhance cross-disciplinary instruction (e.g., using math in algorithms and AI).",
          "Mentored students struggling with math-based CS subjects and support tutorial or bridge programs."
        ],
        "2026": [
          "I will pursue graduate studies in either Applied Mathematics or Computer Science to deepen my interdisciplinary expertise.",
          "I plan to explore innovative assessment and teaching strategies for higher math and computing integration."
        ],
        "2027": [
          "I will present at education or CS teaching conferences, focusing on math teaching innovations or integration strategies.",
          "I will participate in university curriculum reviews to better align math content with current computing trends."
        ],
        "2028": [
          "I aim to co-develop a minor specialization or elective that blends math modeling and computing.",
          "I will start developing a specialized teaching module or e-learning resource for math in CS."
        ],
      },
      loading: {
        "2024": ["Mathematics in the Modern World", "Discrete Structure  I"],
        "2025": ["Mathematics in the Modern World", "Experimental statistics"],
        "2026": ["Any major or minor subjects in BSIT and BSCS related to mathematics."],
        "2027": ["Any major or minor subjects in BSIT and BSCS related to mathematics."],
        "2028": ["Any major or minor subjects in BSIT and BSCS related to mathematics."],
      },
      research: {
        "2024": [
          "Explored research topics that intersect mathematics and computing (e.g., graph theory, numerical methods).",
          "Attended training on research proposal writing, data analytics, and educational research design.",
          "Supported student research in math-based system modeling or optimization."
        ],
        "2025": ["Offered guidance and assistance to students throughout the course of their research or thesis projects."],
        "2026": ["Take CvSU Examination for Statistician recognition to help student researcher"],
        "2027": [
          "I will focus on research topics such as algorithm efficiency, quantitative modeling, or math anxiety in CS students.",
          "I aim to submit a research proposal for funding or institutional support.",
          "I will integrate research findings into teaching practices and student learning materials."
        ],
        "2028": [
          "I will mentor undergraduate thesis groups focused on mathematical models, optimization, or analytics.",
          "I plan to produce a research output that can influence curriculum development or policy."
        ],
      },
      extensions: {
        "2024": [],
        "2025": [],
        "2026": ["Engage and participate in the campus extension activities."],
        "2027": ["Engage and participate in the campus extension activities."],
        "2028": ["Engage and participate in the campus extension activities."],
      }
    }
  },
  //Alvin Catalo
  {
    first_name: "Alvin",
    last_name: "Catalo",
    name: "Alvin Catalo, MIT",
    designation: "Research Coordinator",
    image: "/images/catalo.JPG",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1-J4qYC2-5qVOa0zsJiBXpMWTDkDBcF4J/view?usp=drive_link"
    },],
    masters_diploma: {
      name: "MASTER IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1bOcOxR_bjrhx_Etf9b7qlkE-_A7Rho5A/view?usp=drive_link"
    },
    tor: [{
      name: "TOR: BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1WXMm-jqx7nACUvsJyvD3DozjkZ0ROrPI/view?usp=drive_link"
    },
    {
      name: "TOR: MASTER IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1WXMm-jqx7nACUvsJyvD3DozjkZ0ROrPI/view?usp=drive_link"
    },],
    resume: {
      url: "https://drive.google.com/file/d/1Bvmz-sK8F8lARgQB20SumsdHEKj7B7BW/view?usp=drive_link"
    },
    certificates: [{
      name: "DESIGNING EFFECTIVE OUTCOMES-BASED COURSE SYLLABI AND CREATIVITY AND INNOVATION IN TEACHING WITH THE USE OF PRODUCTIVITY AND AI TOOLS - KOLEHIYO NG LUNGSOD NG DASMARINAS",
      url: "https://drive.google.com/file/d/1CFSxCLsTfkQwC0bTHMHvHKS-xVew6ShD/view?usp=drive_link"
    },
    {
      name: "1ST INTERNATION CONFERENCE ON MOBILE TECHNOLOGY AND ENGINEERING EDUCATION (ICMTEE) - INDONESIA",
      url: "https://drive.google.com/file/d/1Cqz6J0uqpFpzaeouVU6nzMGrNq7Uw83V/view?usp=drive_link"
    },
    {
      name: "DATA SCIENCE AND ANALYTICS TRAINING - DICT",
      url: "https://drive.google.com/file/d/1ZQCaHkVZXj_6puUijePrG3kYicac04_0/view?usp=drive_link"
    },
    {
      name: "UNDERSTANDING MICRO-CREDENTIALS FOR LIFELONG LEARNING - KOLEHIYO NG LUNGSOD NG DASMARINAS",
      url: "https://drive.google.com/file/d/1vI4g2Btx8ei6wiIAC1IW64kb8Cmo9ULr/view?usp=drive_link"
    }, {
      name: "INTERNATIONALIZATION INITIATIVES AND ITS IMPACT ON WORLD UNIVERSITY RANKINGS",
      url: "https://drive.google.com/file/d/1resJOAX_-a0SVXjrfrF910qpBjcHozyv/view?usp=drive_link"
    }, {
      name: "INTEGRATING SUSTAINABLE DEVELOPMENT GOALS INTO HIGHER EDUCATION CURRICULA",
      url: "https://drive.google.com/file/d/14UE5KGbpjmUpCZS2kOJ-7vRbC79Y_lpV/view?usp=drive_link"
    },],
    speaking_engagements: [{
      name: "PRESENTER: 1ST INTERNATION CONFERENCE ON MOBILE TECHNOLOGY AND ENGINEERING EDUCATION (ICMTEE) - INDONESIA",
      url: "https://drive.google.com/file/d/1r3n7FHLF56nsB5fKdMEgRXDEsQu1Gxow/view?usp=drive_link"
    },
    {
      name: "COMPUTER LITERACY AND SYSTEM SUPPORT EXTENSION SERVICES - MAMBOG ELEMENTARY SCHOOL",
      url: "https://drive.google.com/file/d/1ehQfwTkOddptyc2q-vkLXt9uFGySrtlb/view?usp=drive_link"
    }],
    schedule: [
      {
        semesterName: "1st Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "10:00 AM - 11:00 AM",
              subject: "COSC 200-A",
              section: "CS 4-1",
              room: ""
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "ITEC 200-B",
              section: "IT 4-1",
              room: ""
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "ITEC 200-B",
              section: "IT 4-2",
              room: ""
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "ITEC 200-B",
              section: "IT 4-3",
              room: ""
            },
            {
              time: "4:00 PM - 6:00 PM",
              subject: "CONSULTATION",
              section: "CS 1-2",
              room: ""
            },
          ],
          tuesday: [
            {
              time: "9:00 AM - 12:00 PM",
              subject: "DCIT 26 (LAB)",
              section: "IT 3-2",
              room: ""
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 26 (LAB)",
              section: "IT 3-1",
              room: ""
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "DCIT 26 (LAB)",
              section: "IT 3-3",
              room: ""
            },
          ],
          wednesday: [],
          thursday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 26",
              section: "IT 3-3",
              room: ""
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 26",
              section: "IT 3-3",
              room: ""
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 26",
              section: "IT 3-2",
              room: ""
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 26",
              section: "IT 3-2",
              room: ""
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "ORNT 1",
              section: "IT 1-5",
              room: ""
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "DCIT 26",
              section: "IT 3-1",
              room: ""
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 26",
              section: "IT 3-1",
              room: ""
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "ORNT 1",
              section: "IT 1-6",
              room: ""
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ORNT 1",
              section: "IT 1-7",
              room: ""
            },
          ],
          friday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "ITEC 200-B",
              section: "IT 4-3",
              room: ""
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "COSC 200-A",
              section: "IT 3-3",
              room: ""
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "ITEC 200-B",
              section: "IT 4-1",
              room: ""
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "ITEC 200-B",
              section: "IT 4-2",
              room: ""
            },
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "9:00 AM - 12:00 PM",
              subject: "DCIT 23 (LAB)",
              section: "IT 1-7",
              room: "CL 3"
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 23 (LEC)",
              section: "IT 1-4",
              room: "CL 1"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 23 (LAB)",
              section: "IT 1-5",
              room: "CL 1"
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "COSC 200-B (LEC)",
              section: "IT 4-1",
              room: "ROOM 301"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "COSC 200-B (LEC) ASYNC",
              section: "IT 4-1",
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 200-A (LEC) ASYNC",
              section: "IT 3-4",
            },
          ],
          tuesday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 23 (LEC)",
              section: "IT 1-6",
              room: "CL 2"
            },
            {
              time: "9:00 AM - 12:00 PM",
              subject: "DCIT 23 (LAB)",
              section: "IT 1-6",
              room: "CL 2"
            },
            {
              time: "1:00 PM - 2:00 AM",
              subject: "DCIT 23 (LEC)",
              section: "IT 1-7",
              room: "CL 3"
            },
            {
              time: "2:00 PM - 5:00 PM",
              subject: "DCIT 23 (LAB)",
              section: "IT 1-7",
              room: "CL 3"
            },
            {
              time: "6:00 PM - 8:00 PM",
              subject: "ITEC 200-A (LEC)",
              section: "IT 3-4",
              room: "ROOM 305"
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 200-A (LEC) ASYNC",
              section: "IT 3-1",
            },
          ],
          wednesday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "DCIT 23 (LAB)",
              section: "IT 1-6",
              room: "CL 2"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 23 (LAB)",
              section: "IT 1-5",
              room: "CL 1"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "ITEC 200-A",
              section: "IT 3-4",
              room: "ROOM 301"
            },
          ],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [
            {
              time: "6:00 PM - 7:00 PM",
              subject: "GNED 03 ASYNC",
              section: "IT 2-1",
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "GNED 03 ASYNC",
              section: "IT 2-3",
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "GNED 03 ASYNC",
              section: "IT 2-4",
            },
          ],
          friday: [],
          saturday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "GNED 03",
              section: "IT 2-5",
              room: "ROOM 206"
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "GNED 03 ASYNC",
              section: "IT 2-5",
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "GNED 03 ASYNC",
              section: "IT 2-6",
            },
            {
              time: "11:00 AM - 1:00 PM",
              subject: "GNED 03",
              section: "IT 2-6",
              room: "ROOM 202"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "GNED 03",
              section: "IT 2-4",
              room: "ROOM 208"
            },
            {
              time: "4:00 PM - 6:00 PM",
              subject: "GNED 03",
              section: "IT 2-1",
              room: "ROOM 302"
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "GNED 03",
              section: "IT 2-3",
              room: "ROOM 302"
            },
          ],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 23",
              section: "IT 1-2",
              room: "CL 4"
            },
            {
              time: "9:00 AM - 1O:00 AM",
              subject: "DCIT 23",
              section: "IT 1-2",
              room: "CL 4"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 23",
              section: "IT 1-3",
              room: "CL 1"
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "COSC 70",
              section: "CS 2-7",
              room: "AUDI 2"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "DCIT 60",
              section: "CS 3-2",
              room: "ROOM 301"
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "DCIT 60 ASYNC",
              section: "CS 3-2",
            },
          ],
          thursday: [
            {
              time: "12:00 PM - 1:00 PM",
              subject: "ITEC 200-A ASYNC",
              section: "CS 3-2",
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 60 ASYNC",
              section: "CS 3-3",
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "DCIT 23 (LAB) ASYNC",
              section: "IT 1-2",
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "DCIT 60",
              section: "CS 3-3",
              room: "ROOM 301"
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "DCIT 60",
              section: "CS 3-1",
              room: "ROOM 307"
            },
          ],
          friday: [
            {
              time: "6:00 PM - 7:00 PM",
              subject: "COSC 70 ASYNC",
              section: "CS 2-5",
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "DCIT 23 (LAB) ASYNC",
              section: "IT 1-3",
            },
          ],
          saturday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 23",
              section: "IT 1-2",
              room: "CL 4"
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "DCIT 23",
              section: "IT 1-3",
              room: "CL 4"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 23",
              section: "IT 1-3",
              room: "ROOM 305"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "ITEC 200 A",
              section: "IT 3-3",
              room: "CL 4"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "DCIT 60 ASYNC",
              section: "CS 3-1"
            },
          ],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 60",
              section: "CS 3-1",
              room: "ACCRE"
            },
            {
              time: "2:00 PM - 5:00 PM",
              subject: "DCIT 60",
              section: "CS 3-5",
              room: "ACCRE"
            },
            {
              time: "5:00 PM - 8:00 PM",
              subject: "DCIT 60",
              section: "CS 3-3",
              room: "ACCRE"
            },
          ],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "CONSULTATION",
              room: "FACULTY"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 60",
              section: "CS 3-4",
              room: "ACCRE"
            },
            {
              time: "2:00 PM - 5:00 PM",
              subject: "DCIT 60",
              section: "CS 3-2",
              room: "ACCRE"
            },
            {
              time: "5:00 PM - 8:00 PM",
              subject: "DCIT 60",
              section: "CS 3-6",
              room: "ACCRE"
            },],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, null, null, 4.36, null, 4.16],
    evaluation_labels: ["1st Sem A.Y 22-23", "2nd Sem A.Y 22-23", "1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": ["Attended relevant workshops and earned industry-recognized certifications in the IT and Computer Science field to continually update and expand technical knowledge."],
        "2025": ["Became an active member of a professional IT/Computer Science organization to stay updated on emerging trends, contribute to the field, and expand my professional network."],
        "2026": ["Pursue a Doctoral degree in Information Technology to advance my research capabilities and contribute to academic knowledge and innovation."],
        "2027": ["Pursue doctoral studies in [IT/Computer Science] and aim to publish at least one research paper in a peer-reviewed journal or conference during the course of my program."],
        "2028": [" participate in specialized workshops and obtain recognized certifications in the IT and Computer Science fields to keep my technical skills current and continuously broaden my expertise."],
      },
      loading: {
        "2024": ["Information Management", "Institutional Orientation"],
        "2025": ["Methods of Research"],
        "2026": ["Any Major BSIT/BSCS Courses"],
        "2027": ["Any Major BSIT/BSCS Courses"],
        "2028": ["Any Major BSIT/BSCS Courses"],
      },
      research: {
        "2024": ["One of the proponents of a Faculty Study."],
        "2025": ["One of the proponents of a Faculty Study."],
        "2026": ["Present at least one research paper"],
        "2027": ["Publish at least one research paper"],
        "2028": ["Publish at least one research paper"],
      },
      extensions: {
        "2024": ["Actively Participate in Extension programs"],
        "2025": ["Actively Participate in Extension programs"],
        "2026": ["Actively Participate in Extension programs"],
        "2027": ["Actively Participate in Extension programs"],
        "2028": ["Actively Participate in Extension programs"],
      }
    }
  },
  //Alvin Celino
  {
    first_name: "Alvin",
    last_name: "Celino",
    name: "Alvin P. Celino",
    designation: "Instructor I",
    image: "/images/celino.JPG",
    diploma: [{
      name: "Bachelor of Science in Computer Engineering",
      url: "https://drive.google.com/file/d/1Q_swPtzGs_0NnEIvBzduIWjm93QSsyNe/view?usp=drive_link"
    }],
    masters_diploma: [{
      name: "",
      url: ""
    }],
    tor: [
      { name: "Bachelor of Science in Computer Engineering", url: "https://drive.google.com/file/d/1-YUOnraAK-lApKbC1Upvn67TRa0PiN5d/view?usp=drive_link" },
      { name: "Professional Education Units", url: "https://drive.google.com/file/d/13pjAca-nnAJt0nS_o9HP99Ytwat8XOGj/view?usp=drive_link" }],
    resume: "https://drive.google.com/file/d/1q-iUn_XmzpcwFjT0Zb_HApy0U8xeob4P/view?usp=drive_link",
    certificates: [
      { name: "", url: "https://drive.google.com/file/d/1B5tlyKXsCiKzrzuGC65Z58e_kMh5n-fO/view?usp=drive_link" },
    ],
    schedule: [
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [{ time: "7:00 AM - 9:00 AM", section: " IT 3-6", subject: "ITEC 90 Lab", room: "CL 3" }],
          tuesday: [],
          wednesday: [{ time: "7:00 PM - 8:00 AM", subject: "ITEC 90 Lec", section: "IT 3-2", room: "ROOM 305" }, { time: "8:00 AM - 9:00 AM", subject: "ITEC 90 Lec", section: "IT 3-6", ROOM: "Room 305" }],
          thursday: [],
          friday: [{ time: "7:00 AM - 9:00 PM", section: "IT 3-2", subject: "ITEC 90 Lab", room: "Room 301" }],
          saturday: [{ time: "7:00 AM - 8:00 AM", section: "IT 3-2", subject: "ITEC 90 Lec", ROOM: "" }, { time: "8:00 AM - 9:00 AM", section: "IT 3-2", subject: "ITEC 90 Lab", ROOM: "" }, { time: "9:00 AM - 10:00 AM", section: "IT 3-6", subject: "ITEC 90 Lec", ROOM: "" }, { time: "10:00 AM - 11:00 AM", section: "IT 3-6", subject: "ITEC 90 Lab", ROOM: "" }],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [
            { time: "7:00 PM - 8:00 PM", section: "IT 3-6", subject: "ITEC 105", ROOM: "ROOM 301" },
            { time: "8:00 PM - 9:00 PM", section: "IT 3-6", subject: "ITEC 105 Lec", ROOM: "" },
            { time: "9:00 PM - 10:00 PM", section: "IT 3-6", subject: "ITEC 105 Lab", ROOM: "" }
          ],
          wednesday: [],
          thursday: [{ time: "7:00 AM - 9:00 AM", subject: "ITEC 105", ROOM: "CL 1" }],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },

      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [{ time: "7:00 AM - 10:00 AM", section: "IT 3-4", subject: "ITEC 105", room: "CL 3" }],
          tuesday: [{ time: "7:00 AM - 9:00 AM", section: "IT 3-5", subject: "ITEC 105", room: "ROOM 201" }],
          wednesday: [{ time: "7:00 AM - 10:00 AM", section: "IT 3-5", subject: "ITEC 105", room: "ROOM 203" }],
          thursday: [{ time: "7:00 AM - 10:00 AM", section: "IT 3-5", subject: "ITEC 85", room: "ROOM 201" }],
          friday: [{ time: "7:00 AM - 9:00 AM", section: "IT 3-4", subject: "ITEC 105", room: "ROOM 201" }],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [4.29, 4.48, 4.37],
    evaluation_labels: ["2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Regularly attended seminars and webinars focused on networking to improve my communication skills and expand my professional network.",
          "Undertook and completed a foundational course in networking fundamentals, which provided hands-on experience and theoretical knowledge in key networking concepts and practices.",
          "Researched multiple graduate schools, evaluated program offerings, and prepared to enroll in a Master’s program that best matched my field of interest and long-term objectives."
        ],
        "2025": [
          "Enroll in a Master’s degree program in Computer Studies with a specialization in Networking to enhance my technical knowledge and career opportunities.",
          "Attend one to two professional conferences or seminars to gain insights from industry experts and stay updated on the latest developments in the field."
        ],
        "2026": [
          "Continue my Master’s degree studies to further develop specialized knowledge and practical skills relevant to my career goals.",
          "Attend one major networking seminar or conference to gain in-depth insights into current industry practices and emerging technologies.",
          "Enroll in an advanced short course to deepen my knowledge in a specific technical field and enhance my practical skills."
        ],
        "2027": [
          "Work toward completing my Master’s degree by focusing on my thesis or final project, demonstrating applied knowledge and research skills.",
          "Participate in a minimum of two professional seminars or workshops, contributing either as an engaged attendee or as a speaker presenting on relevant topics in my field.",
          "Take short courses focused on cloud computing and enterprise networking to build specialized technical skills and stay updated with current industry standards."
        ],
        "2028": [
          "Finalize my Master’s degree requirements and present my thesis or project in a professional seminar to demonstrate the outcomes of my academic work.",
          "Organize and lead a networking workshop aimed at educating participants on essential networking concepts, tools, and real-world applications"
        ],
      },
      loading: {
        "2024": [
          "Network Fundamentals",
          "Network Management"
        ],
        "2025": [
          "Network Fundamentals",
          "Network Management"
        ],
        "2026": [
          "Network Fundamentals",
          "Network Management"
        ],
        "2027": [
          "Network Fundamentals",
          "Network Management"
        ],
        "2028": [
          "Network Fundamentals",
          "Network Management"
        ],
      },
      research: {
        "2024": ["One of the proponents of a Faculty Study."],
        "2025": ["One of the proponents of a Faculty Study."],
        "2026": ["One of the proponents of a Faculty Study."],
        "2027": ["One of the proponents of a Faculty Study."],
        "2028": ["Publish at least one research paper"],
      },
      extensions: {
        "2024": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department"],
        "2025": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department"],
        "2026": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department"],
        "2027": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department"],
        "2028": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department"],
      }
    }
  },
  //Allen Dave Coles
  {
    first_name: "Allen Dave",
    last_name: "Coles",
    name: "Allen Dave Coles",
    designation: "Instructor I",
    image: "/images/coles.JPG",
    diploma:
      [
        {
          name: "Bachelor of Science in Industrial Education",
          url: "https://drive.google.com/file/d/1nxpjnIqxYD7EoaefDtJLOvCjYLX3cPca/view?usp=drive_link"
        },
      ],
    tor: [
      { name: "Bachelor of Science in Industrial Education", url: "Bachelor of Science in Industrial Education" },
    ],
    resume: ["https://drive.google.com/file/d/1fuLTxBR8mSRojcDS_R4O6nbq4tzn3PHf/view?usp=drive_link"],
    certificates: [
      { name: "Training Workshop on Proposal Writing and Publication Cavite State University-Bacoor", url: "https://drive.google.com/file/d/1MxUyLjRr72GbhrrJotFoAnSMPE5z4nRY/view?usp=drive_link" },
      { name: "HTML ESSENTIALS - CISCO NETWORKING ACADEMY", url: "https://drive.google.com/file/d/1DGnhxkwy2dbpEBRtaTWdR_m96P1EDwVv/view?usp=drive_link" },
      { name: "INTRODUCTION TO TECHNOLOGY FOR TEACHING AND LEARNING - UNIVERSITY OF THE PHILIPPINES OPEN UNIVERSITY", url: "https://drive.google.com/file/d/18EvPJuKQzA2nNAPiULCNp-qELYLp1Og6/view?usp=drive_link" },
      { name: "DIMENSIONS OF DEVELOPMENT: NURTURING THE CHILD AND ADOLESCENT LEARNER THROUGH EFFECTIVE LEARNING PRINCIPLES - TUP CAVITE", url: "https://drive.google.com/file/d/1naaPqumJtLFk3Fx7mof1OH86-P8y2Xro/view?usp=drive_link" },
      { name: "EDUKATALKS: A SEM1 SEMINAR SERIES - TUP CAVITE", url: "https://drive.google.com/file/d/1D7-sMobzHeSeFAVbk1ZsiTEBKCZurXUA/view?usp=drive_link" },
      { name: "CONNECTED: HARNESSING TECHNOLOGY FOR TEACHING AND LEARNING - TUP CAVITE", url: "https://drive.google.com/file/d/1mLOTtMY72Av82bNJlfmMcCX3u3yGX5VT/view?usp=drive_link" },
      { name: "SCRIPTWRITING FOR EDUCATIONAL VIDEO MATERIALS - UNIVERSITY OF THE PHILIPPINES OPEN UNIVERSITY", url: "https://drive.google.com/file/d/1WI5xR-0gkTnGimHnNgIRcqy2YiAkG_oP/view?usp=drive_link" },
    ],
    speaking_engagements: [
      { name: "PHOTO AND VIDEO EDITING TRAINING - CAVITE STATE UNIVERSITY - BACOOR", url: "https://drive.google.com/file/d/105Yf9vc9o_el642t38LYhtjzxtxT89K5/view?usp=drive_link" },
    ],
    schedule: [
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            { time: "10:00 AM - 1:00 PM", section: "CS 1-3", subject: "ITEC 50", room: "CL 4" },
            { time: "1:00 PM - 4:00 PM", section: "CS 1-5", subject: "ITEC 50", room: "CL 3" }
          ],
          tuesday: [
            { time: "7:00 AM - 9:00 PM", section: "CS 1-3", subject: "ITEC 50", room: "ROOM 203" },
            { time: "9:00 AM - 12:00 PM", section: "CS 1-4", subject: "ITEC 50", room: "CL 2" },
            { time: "1:00 PM - 3:00 PM", section: "CS 1-5", subject: "ITEC 50", room: "ROOM 109" },
            { time: "3:00 PM - 6:00 PM", section: "IT 2-3", subject: "GNED 08", room: "ROOM 101" }
          ],
          wednesday: [
            { time: "7:00 AM - 10:00 AM", section: "CS 2-4", subject: "GNED 08", room: "ROOM 107" },
            { time: "10:00 PM - 12:00 PM", section: "", subject: "Consultation", room: "Faculty" }
          ],
          thursday: [
            { time: "10:00 AM - 1:00 PM", section: "IT 2-6", subject: "GNED 08", room: "ROOM 101" },
            { time: "1:00 PM - 3:00 PM", section: "CS 1-4", subject: "ITEC 50", room: "ROOM 101" },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 4.13],
    evaluation_labels: ["1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [""],
        "2025": [
          "Pass the Board Licensure Examination for Professional Teachers (BLEPT)",
          "Partake in seminars that are relevant in the field"
        ],
        "2026": [
          "Enroll in a Master’s program in Information Technology",
          "Be a member of an organization that can help in my professional and academic endeavors"
        ],
        "2027": [
          "Placeholder for Allen Dave's 2027 PDContinue Master’s studies program in Information Technology",
          "Keep being an active member of an organization and explore other opportunities"
        ],
        "2028": ["Attend seminars that offer advanced certification in the relevant field"],
      },
      loading: {
        "2024": ["Integrated Programming and Technologies 2"],
        "2025": [
          "Web Systems and Technologies 1",
          "Understanding the Self",
          "Science, Technology, and Society"
        ],
        "2026": ["Any courses in multimedia, and web design"],
        "2027": ["Any courses in multimedia, and web design"],
        "2028": ["Any courses in multimedia, and web design"],
      },
      research: {
        "2024": ["Guide students with their research development."],
        "2025": ["Guide students with their research development."],
        "2026": ["Guide students with their research development."],
        "2027": ["Guide students with their research development."],
        "2028": ["Guide students with their research development."],
      },
      extensions: {
        "2024": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2025": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2026": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2027": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2028": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
      }
    }
  },
  //Redem Decipulo
  {
    first_name: "Redem",
    last_name: "Decipulo",
    name: "Redem M. Decipulo",
    designation: "Instructor I",
    image: "/images/decipulo.jpg",
    diploma: [
      { name: "Bachelor of Science in Industrial Education", url: "https://drive.google.com/file/d/1tte-IH3YhYpZhqNHYWHw7YExMBQUjzOx/view?usp=drive_link" },
    ],
    tor: [
      { name: "Bachelor of Science in Industrial Education", url: "https://drive.google.com/file/d/1mHGnJ-tXtpHj3_Zk6WB0pGJzuU6iGlR0/view?usp=drive_link" },
    ],
    resume: "https://drive.google.com/file/d/1olJ3gaTfFNxg_s-0ZcVjtjDjNIBfh_UD/view?usp=drive_link",
    certificates: [],
    speaking_engagements: [
      { name: "COMPUTER LITERACY AND SYSTEM SUPPORT EXTENSION SERVICES - MAMBOG ELEMENTARY SCHOOL", url: "https://drive.google.com/file/d/1UjjMVjCYMg6TP2tkDRLrpybks8Rb3EHZ/view?usp=drive_link" }
    ],
    schedule: [
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            { time: "12:00 PM - 1:00 PM", section: "IT 2-1", subject: "ITEC 55 (Lec)", room: "ROOM 305" },
            { time: "1:00 PM - 3:00 PM", section: "", subject: "Consultation", room: "Faculty" },
            { time: "3:00 PM - 5:00 PM", section: "IT 2-1", subject: "ITEC 55 (Lab)", room: "CL 2" }
          ],
          tuesday: [
            { time: "8:00 AM - 9:00 AM", section: "IT 2-1", subject: "ITEC 55 (Lec) Async", room: "" },
            { time: "9:00 AM - 10:00 AM", section: "IT 2-1", subject: "ITEC 55 (Lab) Async", room: "" },
            { time: "10:00 AM - 11:00 AM", section: "IT 2-3", subject: "DCIT 24 (Lec) Async", room: "" },
            { time: "11:00 AM - 12:00 PM", section: "IT 2-4", subject: "DCIT 24 (Lab) Async", room: "" },
            { time: "12:00 PM - 1:00 PM", section: "IT 2-5", subject: "DCIT 24 (Lec) Async", room: "" },
            { time: "1:00 PM - 2:00 PM", section: "IT 2-6", subject: "DCIT 24 (Lab) Async", room: "" },
            { time: "2:00 AM - 3:00 PM", section: "IT 2-7", subject: "DCIT 24 (Lec) Async", room: "" },
            { time: "3:00 AM - 4:00 PM", section: "IT 2-3", subject: "DCIT 24 (Lab) Async", room: "" },
            { time: "4:00 PM - 5:00 PM", section: "IT 2-4", subject: "DCIT 24 (Lec) Async", room: "" },
            { time: "5:00 PM - 6:00 PM", section: "IT 2-5", subject: "DCIT 24 (Lab) Async", room: "" },
            { time: "6:00 PM - 7:00 PM", section: "IT 2-6", subject: "DCIT 24 (Lec) Async", room: "" },
            { time: "7:00 PM - 8:00 PM", section: "IT 2-7", subject: "DCIT 24 (Lab) Async", room: "" }
          ],
          wednesday: [],
          thursday: [
            { time: "10:00 AM - 11:00 AM", section: "CS 2-5", subject: "ITEC 55 (Lec)", room: "CL 3" },
            { time: "11:00 AM - 12:00 PM", section: "CS 2-3", subject: "DCIT 24 (Lec)", room: "ROOM 303" },
            { time: "1:00 PM - 3:00 PM", section: "CS 2-5", subject: "DCIT 24 (Lab)", room: "CL 4" },
            { time: "3:00 PM - 5:00 PM", section: "CS 2-3", subject: "DCIT 24 (Lab)", room: "CL 4" },
            { time: "5:00 PM - 6:00 PM", section: "CS 2-4", subject: "DCIT 24 (Lec)", room: "ROOM 305" }
          ],
          friday: [
            { time: "8:00 AM - 9:00 AM", section: "CS 2-6", subject: "DCIT 24 (Lec)", room: "ROOM 303" },
            { time: "10:00 AM - 12:00 PM", section: "CS 2-7", subject: "DCIT 24 (Lab)", room: "CL 3" },
            { time: "12:00 PM - 2:00 PM", section: "CS 2-4", subject: "DCIT 24 (Lab)", room: "CL 3" },
            { time: "5:00 PM - 6:00 PM", section: "CS 2-7", subject: "DCIT 24 (Lec)", room: "ROOM 305" },
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "7:00 AM - 9:00 AM", section: "IT 2-6", subject: "ITEC 65", room: "CL 3" },
            { time: "9:00 AM - 11:00 AM", section: "IT 2-5", subject: "ITEC 65", room: "CL 1" },
            { time: "11:00 AM - 12:00 PM", section: "IT 2-7", subject: "ITEC 60 (Lec) Async", room: "" },
            { time: "1:00 PM - 3:00 PM", section: "IT 2-7", subject: "ITEC 60", room: "Cl 4" },
            { time: "3:00 PM - 4:00 PM", section: "IT 2-5", subject: "ITEC 65 (Lab) Async", room: "" },
            { time: "4:00 PM - 5:00 PM", section: "IT 2-3", subject: "ITEC 60 (Lab) Async", room: "" }
          ],
          tuesday: [
            { time: "9:00 PM - 10:00 PM", section: "IT 2-3", subject: "ITEC 60", room: "ROOM 303" },
            { time: "10:00 AM - 11:00 AM", section: "IT 2-1", subject: "ITEC 60 (Lec) Async", room: "" },
            { time: "11:00 AM - 1:00 PM", section: "", subject: "Consultation", room: "Faculty" },
            { time: "1:00 PM - 3:00 PM", section: "IT 3-4", subject: "ITEC 95", room: "Audi 2" },
            { time: "3:00 PM - 4:00 PM", section: "IT 2-1", subject: "ITEC 60", room: "ROOM 301" },
            { time: "5:00 PM - 7:00 PM", section: "IT 3-5", subject: "ITEC 95", room: "ROOM 302" },
            { time: "7:00 PM - 8:00 PM", section: "IT 2-6", subject: "ITEC 65 (Lec) Async", room: "" }
          ],
          wednesday: [
            { time: "7:00 AM - 8:00 AM", section: "IT 2-6", subject: "ITEC 62", room: "CL 2" },
            { time: "8:00 AM - 10:00 AM", section: "IT 2-1", subject: "ITEC 60", room: "CL 2" },
            { time: "10:00 AM - 11:00 AM", section: "IT 2-1", subject: "ITEC 60 (Lab) Async", room: "" },
            { time: "11:00 AM - 12:00 PM", section: "IT 2-5", subject: "ITEC 65", room: "CL 3" },
            { time: "1:00 PM - 3:00 PM", section: "IT 2-3", subject: "ITEC 60", room: "CL 2" },
            { time: "3:00 PM - 4:00 PM", section: "IT 2-7", subject: "ITEC 60", room: "ROOM 301" },
            { time: "4:00 PM - 5:00 PM", section: "IT 2-5", subject: "ITEC 65 (Lec) Async", room: "" },
            { time: "5:00 PM - 6:00 PM", section: "IT 2-6", subject: "ITEC 65 (Lec) Async", room: "" }
          ],
          thursday: [
            { time: "8:00 AM - 9:00 AM", section: "IT 2-3", subject: "ITEC 60 (Lec) Async", room: "" },
            { time: "9:00 PM - 10:00 PM", section: "IT 2-7", subject: "ITEC 60 (Lab) Async", room: "" },
            { time: "10:00 PM - 11:00 PM", section: "IT 3-4", subject: "ITEC 60 (Lec) Async", room: "" }
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [{ time: "9:00 AM - 11:00 AM", subject: "Software Engineering Principles", room: "G202" }],
          tuesday: [{ time: "1:00 PM - 3:00 PM", subject: "Operating Systems", room: "G302" }],
          wednesday: [],
          thursday: [{ time: "10:00 AM - 11:00 AM", subject: "Office Hours", room: "Faculty Office 2" }],
          friday: [{ time: "9:00 AM - 12:00 PM", subject: "Curriculum Review", room: "Conf. Room A" }],
          saturday: [],
          sunday: [],
        }
      },

      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            { time: "7:00 AM - 10:00 AM", section: "IT 2-5", subject: "DCIT 25", room: "ROOM 101" },
            { time: "1:00 PM - 4:00 PM", section: "IT 3-4", subject: "ITEC 101", room: "ROOM 203" },
            { time: "4:00 PM - 7:00 PM", section: "IT 2-6", subject: "DCIT 25", room: "CL 2" }
          ],
          tuesday: [],
          wednesday: [
            { time: "1:00 PM - 3:00 PM", section: "IT 2-5", subject: "DCIT 25", room: "CL 4" },
            { time: "5:00 PM - 7:00 PM", section: "IT 2-6", subject: "DCIT 25", room: "ROOM 203" }
          ],
          thursday: [
            { time: "10:00 AM - 12:00 PM", section: "IT 2-2", subject: "ITEC 65", room: "" },
            { time: "1:00 PM - 3:00 PM", section: "", subject: "Consultation", room: "Faculty" },
            { time: "4:00 PM - 7:00 PM", section: "IT 2-1", subject: "ITEC 65", room: "CL 4" }
          ],
          friday: [
            { time: "7:00 AM - 10:00 AM", section: "IT 2-2", subject: "ITEC 65", room: "CL 1" },
            { time: "10:00 AM - 12:00 PM", section: "IT 2-1", subject: "ITEC 65", room: "ROOM 101" },
            { time: "4:00 PM - 6:00 PM", section: "IT 3-4", subject: "ITEC 101", room: "CL 2" }
          ],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 3.59, null, 3.93],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Passed the Licensure Examination for Professional Teacher(LEPT).",
          "Attend at least one national-level IT or CS conference or seminar.",
          "Submit at least one research proposal for internal funding.",
        ],
        "2025": [
          "Pursue and begin graduate-level studies to further enhance my academic and professional development.",
          "Complete short courses/certifications for better instructions and academic foundations.",
          "Enhance professional competencies by attending relevant",
        ],
        "2026": [
          "Obtain professional certification (e.g., AWS, Cisco, Google Educator, etc.).",
          "Enhance professional competencies by attending relevant workshops and training programs in IT and Computer Science, both nationally and internationally."
        ],
        "2027": [
          "Attain a postgraduate degree or be in candidacy status.",
          "Enhance professional competencies by attending relevant workshops and training programs in IT and Computer Science, both nationally and internationally."
        ],
        "2028": [
          "Enhancing credibility and beginning doctoral studies(if applicable.)",
          " Enhance professional competencies by attending relevant workshops and training programs in IT and Computer Science, both nationally and internationally."
        ],
      },
      loading: {
        "2024": [
          "Platform Technologies",
          "Information Management",
          "Human Computer Interaction II",
          "Data Structure and Algorithm",
          "Science, Technology, and Society"
        ],
        "2025": [
          "Platform Technologies",
          "Information Assurance and Security I",
          "Data Structure and Algorithm",
          "Human Computer Interaction II",
          "Open Source Technologies"
        ],
        "2026": ["Any Major /Minor Subject BSIT/BSCS Course"],
        "2027": ["Any Major /Minor Subject BSIT/BSCS Course"],
        "2028": ["Any Major /Minor Subject BSIT/BSCS Course"],
      },
      research: {
        "2024": [
          "Attend research methodology or proposal writing workshops.",
          "Develop a research agenda aligned with departmental or institutional objectives."
        ],
        "2025": [
          "Submit and complete one internally funded research project.",
          "Serve as research adviser for undergraduate thesis projects."
        ],
        "2026": [
          "Collaborate with colleagues on a multi-disciplinary research project.",
          "Present research output in a local or regional research colloquium."
        ],
        "2027": [
          "Present a paper in an international conference , face-to-face or virtual.",
          "Apply for external research funding/grant."
        ],
        "2028": ["Publish in an international indexed journal."],
      },
      extensions: {
        "2024": ["Actively Participate in department and university extension activity."],
        "2025": ["Actively Participate in department and university extension activity."],
        "2026": ["Actively Participate in department and university extension activity."],
        "2027": ["Actively Participate in department and university extension activity."],
        "2028": ["Actively Participate in department and university extension activity."],
      }
    }
  },
  //Rufino Dela Cruz
  {
    first_name: "Rufino",
    last_name: "Dela Cruz",
    name: "Rufino A. Dela Cruz Jr.",
    designation: "Instructor I",
    image: "/images/delacruz.jpg",
    diploma: "/diploma/diplom.jpg",
    tor: "/tor/tor.jfif",
    resume: "/resume/resume-sample.png",
    certificates: [
      { name: "", url: "https://drive.google.com/file/d/1B5tlyKXsCiKzrzuGC65Z58e_kMh5n-fO/view?usp=drive_link" },
    ],
    schedule: [
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            { time: "7:00 AM - 9:00 AM", section: "CS 1-2", subject: "DCIT 21", room: "CL 1" },
            { time: "9:00 AM - 11:00 AM", section: "CS 1-3", subject: "DCIT 21", room: "CL 2" },
            { time: "11:00 AM - 2:00 PM", section: "IT 2-6", subject: "ITEC 65", room: "CL 1" },
            { time: "3:00 PM - 4:00 PM", section: "CS 1-5", subject: "DCIT 21", room: "ROOM 302" },
            { time: "4:00 PM - 5:00 PM", section: "CS 1-4", subject: "DCIT 21 (Lab) Async", room: "" },
            { time: "5:00 PM - 7:00 PM", section: "CS 1-4", subject: "DCIT 21", room: "CL 2" }
          ],
          tuesday: [
            { time: "8:00 AM - 9:00 AM", section: "IT 2-6", subject: "ITEC 55 (Lec) Async", room: "" },
            { time: "9:00 AM - 10:00 AM", section: "IT 2-7", subject: "ITEC 55 (Lec) Async", room: "" },
            { time: "10:00 AM - 11:00 AM", section: "IT 2-6", subject: "ITEC 55 (Lab) Async", room: "" },
            { time: "11:00 AM - 12:00 PM", section: "IT 2-7", subject: "ITEC 55 (Lab) Async", room: "" },
            { time: "1:00 AM - 2:00 PM", section: "CS 1-2", subject: "DCIT 21 (Lec) Async", room: "" },
            { time: "2:00 AM - 3:00 PM", section: "CS 1-3", subject: "DCIT 21 (Lec) Async", room: "" },
            { time: "3:00 AM - 4:00 PM", section: "CS 1-4", subject: "DCIT 21 (Lec) Async", room: "" },
            { time: "4:00 AM - 5:00 PM", section: "CS 1-5", subject: "DCIT 21 (Lec) Async", room: "" },
            { time: "5:00 AM - 6:00 PM", section: "CS 1-2", subject: "DCIT 21 (Lab) Async", room: "" },
            { time: "6:00 AM - 7:00 PM", section: "CS 1-3", subject: "DCIT 21 (Lab) Async", room: "" },
            { time: "7:00 AM - 8:00 PM", section: "CS 1-5", subject: "DCIT 21 (Lab) Async", room: "" },
          ],
          wednesday: [
            { time: "8:00 AM - 9:00 AM", section: "CS 1-4", subject: "DCIT 21 (Lec)", room: "ROOM 301" },
            { time: "9:00 AM - 10:00 AM", section: "CS 1-3", subject: "DCIT 21 (Lec)", room: "ROOM 301" },
            { time: "1:00 PM - 3:00 PM", section: "CS 1-5", subject: "DCIT 21", room: "CL 2" },
            { time: "3:00 PM - 5:00 PM", section: "CS 2-7", subject: "ITEC 55", room: "CL 3" },
            { time: "7:00 PM - 8:00 PM", section: "CS 1-2", subject: "DCIT 21 (Lec)", room: "ROOM 301" },
          ],
          thursday: [
            { time: "12:00 PM - 1:00 PM", section: "IT 2-6", subject: "ITEC 55 (Lec)", room: "ROOM 303" },
            { time: "2:00 PM - 3:00 PM", section: "IT 2-7", subject: "ITEC 55 (Lec)", room: "ROOM 301" },
            { time: "3:00 PM - 5:00 PM", section: "", subject: "Consultation", room: "Faculty" },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "11:00 AM - 1:00 PM", section: "CS 3-3", subject: "ITEC 65", room: "ROOM 210" },
            { time: "1:00 PM - 3:00 PM", section: "", subject: "Consultation", room: "Faculty" },
            { time: "3:00 PM - 4:00 PM", section: "CS 3-3", subject: "ITEC 85 Async", room: "" }
          ],
          tuesday: [
            { time: "12:00 PM - 1:00 PM", section: "IT 2-3", subject: "DCIT 25 (Lec) Async", room: "" },
            { time: "2:00 PM - 3:00 PM", section: "IT 2-4", subject: "DCIT 25 (Lec) Async", room: "" },
            { time: "3:00 PM - 4:00 PM", section: "CS 2-5", subject: "DCIT25 (Lab) Async", room: "" },
            { time: "4:00 PM - 5:00 PM", section: "IT 2-4", subject: "DCIT 25", room: "ROOM 301" },
            { time: "5:00 PM - 6:00 PM", section: "CS 2-7", subject: "ITEC 65 (Lec) Async", room: "" },
            { time: "6:00 PM - 8:00 PM", section: "IT 2-3", subject: "ITEC 65", room: "CL 2" },

          ],
          wednesday: [
            { time: "11:00 AM - 1:00 AM", section: "CS 2-3", subject: "GNED 14", room: "ROOM 305" },
            { time: "1:00 PM - 2:00 PM", section: "IT 2-3", subject: "DCIT 25 (Lab) Async", room: "" },
            { time: "2:00 PM - 3:00 PM", section: "CS 2-5", subject: "DCIT 25", room: "ROOM 302" },
            { time: "3:00 PM - 4:00 PM", section: "IT 2-4", subject: "DCIT 25 (Lab) Async", room: "" },
            { time: "4:00 PM - 5:00 PM", section: "CS 2-7", subject: "DCIT 25", room: "ROOM 305" },
            { time: "5:00 PM - 6:00 PM", section: "IT 2-3", subject: "DCIT 25", room: "ROOM 301" },
            { time: "6:00 PM - 7:00 PM", section: "IT 2-4", subject: "DCIT 25", room: "CL 1" }
          ],
          thursday: [
            { time: "7:00 AM - 9:00 AM", section: "CS 2-7", subject: "DCIT 25", room: "CL 3" },
            { time: "9:00 AM - 10:00 AM", section: "CS 2-3", subject: "GNED 14", room: "" },
            { time: "10:00 AM - 11:00 AM", section: "CS 2-4", subject: "GNED 14", room: "" },
            { time: "11:00 AM - 12:00 PM", section: "CS 2-5", subject: "DCIT 25", room: "" },
            { time: "12:00 PM - 1:00 PM", section: "CS 2-7", subject: "DCIT 25", room: "" },
            { time: "2:00 PM - 4:00 PM", section: "CS 2-4", subject: "GNED 14", room: "ROOM 303" },
            { time: "4:00 PM - 6:00 PM", section: "CS 2-5", subject: "DCIT 25", room: "CL 2" },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },

      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            { time: "10:00 AM - 1:00 PM", section: "IT 1-3", subject: "GNED 01", room: "ROOM 107" },
            { time: "3:00 PM - 6:00 PM", section: "IT 1-4", subject: "GNED 01", room: "ROOM 107" },
            { time: "6:00 PM - 9:00 PM", section: "IT 1-7", subject: "GNED 01", room: "ROOM 107" }
          ],
          tuesday: [
            { time: "10:30 AM - 12:00 PM", section: "IT 1-6", subject: "GNED 01", room: "ROOM 203" },
            { time: "1:00 PM - 3:00 PM", section: "", subject: "Consultation", room: "Faculty" },
          ],
          wednesday: [
            { time: "7:00 AM - 9:00 AM", section: "IT 2-3", subject: "ITEC 70", room: "ROOM 204" },
            { time: "9:00 AM - 11:00 AM", section: "IT 2-1", subject: "ITEC 70", room: "ROOM 204" },
            { time: "1:00 PM - 4:00 PM", section: "IT 2-2", subject: "ITEC 70", room: "ROOM 109" },
            { time: "5:00 PM - 8:00 PM", section: "IT 1-2", subject: "GNED 01", room: "ROOM 101" },
          ],
          thursday: [
            { time: "7:00 AM - 10:00 AM", section: "IT 2-3", subject: "ITEC 70", room: "CL 5" },
            { time: "11:30 AM - 1:00 PM", section: "IT 1-6", subject: "GNED 01", room: "ROOM 107" },
            { time: "1:00 PM - 4:00 PM", section: "IT 2-1", subject: "ITEC 70", room: "CL 2" },
            { time: "7:00 PM - 9:00 PM", section: "IT 2-2", subject: "ITEC 70", room: "CL 2" }
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 4.54, 4.56, 3.97],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [],
        "2025": [],
        "2026": [],
        "2027": [],
        "2028": [],
      },
      loading: {
        "2024": [],
        "2025": [],
        "2026": [],
        "2027": [],
        "2028": [],
      },
      research: {
        "2024": [],
        "2025": [],
        "2026": [],
        "2027": [],
        "2028": [],
      },
      extensions: {
        "2024": [],
        "2025": [],
        "2026": [],
        "2027": [],
        "2028": [],
      }
    }
  },
  //Jen Jerome Dela Pena
  {
    first_name: "Jen Jerome",
    last_name: "Dela Pena",
    name: "Jen Jerome V. Dela Pena",
    designation: "Instructor I",
    image: "/images/delapena.png",
    diploma: [
      { name: "Bachelor of Science in Industrial Education", url: "https://drive.google.com/file/d/1O2kNowNkAmzWIfIarrIbGLog9wJXX_xc/view?usp=drive_link" }
    ],
    tor: [
      { name: "Bachelor of Science in Industrial Education", url: "https://drive.google.com/file/d/1ll7o1VE306Zsg0iCCC_B2-1uW00um679/view?usp=drive_link" }
    ],
    resume: "https://drive.google.com/file/d/1yavnXI1qLTWBb-PfiAKe010ma5QNsOdD/view?usp=drive_link",
    certificates: [
      { name: "Programming for Beginners Using Python - DICT", url: "https://drive.google.com/file/d/1AqI5w1sFX7scH9hjsYsH0NbxVX18ZixW/view?usp=drive_link" },
      { name: "Python Essentials 1 - CISCO NETWORKING ACADEMY", url: "https://drive.google.com/file/d/15qzXuNX67ciJkJ4E0UTFwWWPT4982gay/view?usp=drive_link" },
      { name: "Python Essentials 2 - CISCO NETWORKING ACADEMY", url: "https://drive.google.com/file/d/1TWY6NZZ1gtlJ4jn9N1Eu0bG96I1_38gP/view?usp=drive_link" },
      { name: "LEARNING RECOVERY TO LEARNING RESILIENCE IN CLASSROOMS THROUGH EFFECTIVE TEACHING STRATEGIES FOR EMPOWERING TECHNOLOGIES", url: "https://drive.google.com/file/d/1fZTwxC5h3J4mt7cA_D4j4Sj2QmNdk0-M/view?usp=drive_link" },
    ],
    membership: [
      { name: "Member: ICT Industry Council", url: "https://drive.google.com/file/d/1tTd_rQq6x8qFlQHW46doPOG-9nvVnSqF/view?usp=drive_link" },
    ],
    speaking_engagements: [

    ],
    schedule: [
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            { time: "8:00 AM - 9:00 PM", section: "IT 3-1", subject: "DCIT 26", room: "ROOM 301" },
            { time: "9:00 AM - 11:00 AM", section: "IT 3-1", subject: "DCIT 26", room: "CL 3" },
            { time: "11:00 AM - 1:00 PM", section: "IT 3-3", subject: "DCIT 26", room: "CL 3" },
          ],
          tuesday: [],
          wednesday: [
            { time: "10:00 AM - 12:00 PM", section: "", subject: "Consultation", room: "Faculty" },
            { time: "12:00 PM - 1:00 PM", section: "IT 3-2", subject: "DCIT 26", room: "CL 4" },
            { time: "1:00 PM - 2:00 PM", section: "IT 3-1", subject: "DCIT 26 (Lec) Async", room: "" },
            { time: "2:00 PM - 3:00 PM", section: "IT 3-2", subject: "DCIT 26 (Lec) Async", room: "" },
            { time: "3:00 PM - 4:00 PM", section: "IT 3-3", subject: "ITEC 111 (Lec) Async", room: "" },
            { time: "4:00 PM - 5:00 PM", section: "IT 4-1", subject: "ITEC 111 (Lab) Async", room: "" },
            { time: "5:00 PM - 6:00 PM", section: "IT 4-2", subject: "ITEC 111 (Lab) Async", room: "" },
            { time: "6:00 PM - 7:00 PM", section: "IT 4-3", subject: "ITEC 111 (Lab) Async", room: "" },
            { time: "7:00 PM - 8:00 PM", section: "IT 3-3", subject: "ITEC 111 (Lab) Async", room: "" }
          ],
          thursday: [
            { time: "10:00 AM - 11:00 AM", section: "IT 4-3", subject: "ITEC 111", room: "305" },
            { time: "12:00 PM - 11:00 PM", section: "IT 4-1", subject: "ITEC 111", room: "CL 1" },
            { time: "1:00 PM - 3:00 PM", section: "IT 4-1", subject: "ITEC 111", room: "CL 1" },
            { time: "3:00 PM - 5:00 PM", section: "IT 4-2", subject: "ITEC 111", room: "CL 1" },
            { time: "5:00 PM - 6:00 PM", section: "IT 4-2", subject: "ITEC 111", room: "ROOM 302" },
            { time: "6:00 PM - 7:00 PM", section: "IT 3-1", subject: "DCIT 26 (Lab) Async", room: "" },
            { time: "7:00 PM - 8:00 PM", section: "IT 3-2", subject: "DCIT 26 (Lec) Async", room: "" },
            { time: "8:00 PM - 9:00 PM", section: "IT 3-3", subject: "DCIT 26", room: "ROOM 303" }
          ],
          friday: [],
          saturday: [
            { time: "9:00 AM - 11:00 AM", section: "IT 4-3", subject: "ITEC 111", room: "CL 1" },
            { time: "11:00 AM - 12:00 PM", section: "IT 4-2", subject: "ITEC 111 (Lec) Async", room: "" },
            { time: "12:00 PM - 1:00 PM", section: "IT 4-3", subject: "ITEC 111 (Lec) Async", room: "" },
            { time: "1:00 PM - 2:00 PM", section: "IT 4-1", subject: "ITEC 111 (Lec) Async", room: "" },
            { time: "5:00 PM - 7:00 PM", section: "IT 3-2", subject: "DCIT 26", room: "CL 1" },
          ],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "8:00 AM - 9:00 AM", section: "CS 3-2", subject: "COSC  106 (Lab) Async", room: "" },
            { time: "9:00 AM - 10:00 AM", section: "CS 3-1", subject: "COSC  106 (Lab) Async", room: "" },
            { time: "11:00 AM - 1:00 PM", section: "CS 3-2", subject: "COSC  106", room: "CL 4" },
            { time: "1:00 PM - 2:00 PM", section: "IT 1-6", subject: "ITEC 60", room: "ROOM 303" },
            { time: "2:00 PM - 3:00 PM", section: "IT 2-6", subject: "ITEC 60 (Lab) Async", room: "" },
            { time: "3:00 PM - 5:00 PM", section: "CS 3-1", subject: "COSC  106", room: "CL 4" },
            { time: "5:00 PM - 6:00 PM", section: "IT 2-5", subject: "ITEC 60", room: "ROOM 303" },
          ],
          tuesday: [],
          wednesday: [
            { time: "9:00 AM - 10:00 AM", section: "IT 2-6", subject: "ITEC 60 (Lec) Async ", room: "" },
            { time: "10:00 AM - 11:00 AM", section: "IT 2-5", subject: "ITEC 60 (Lec) Async ", room: "" },
            { time: "12:00 PM - 2:00 PM", section: "IT 2-5", subject: "ITEC 60", room: "CL 1" },
            { time: "2:00 PM - 3:00 PM", section: "CS 3-2", subject: "COSC 106", room: "CL 4" },
            { time: "3:00 PM - 4:00 PM", section: "CS 3-1", subject: "COSC 106", room: "CL 4" },
            { time: "4:00 PM - 5:00 PM", section: "IT 2-5", subject: "ITEC 60 (Lab) Async", room: "" },
            { time: "5:00 PM - 7:00 PM", section: "IT 2-6", subject: "ITEC 60", room: "CL 2" },
          ],
          thursday: [
            { time: "12:00 PM - 2:00 PM", section: "IT 3-5", subject: "ITEC 101", room: "CL 3" },
            { time: "2:00 PM - 3:00 PM", section: "IT 3-5", subject: "ITEC 101 (Lab) Async", room: "" },
            { time: "3:00 PM - 4:00 PM", section: "IT 3-6", subject: "ITEC 101 (Lab) Async", room: "" },
            { time: "4:00 PM - 6:00 PM", section: "IT 3-6", subject: "ITEC 101", room: "CL 3" },
          ],
          friday: [],
          saturday: [
            { time: "9:00 AM - 10:00 AM", section: "IT 3-6", subject: "ITEC 101", room: "ROOM 305" },
            { time: "10:00 AM - 11:00 PM", section: "IT 3-5", subject: "ITEC 101", room: "ROOM 305" },
            { time: "11:00 PM - 12:00 PM", section: "IT 3-5", subject: "ITEC 101 (Lec) Async", room: "" },
            { time: "12:00 PM - 1:00 PM", section: "IT 3-6", subject: "ITEC 101 (Lec) Async", room: "" },
            { time: "2:00 PM - 4:00 PM", section: "", subject: "Consultation", room: "Faculty" },
            { time: "4:00 PM - 5:00 PM", section: "IT 3-2", subject: "COSC 106 (Lec) Async", room: "" },
            { time: "5:00 PM - 6:00 PM", section: "IT 3-1", subject: "COSC 106 (Lec) Async", room: "" },
          ],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },

      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [
            { time: "10:00 AM - 1:00 PM", section: "CS 3-1", subject: "COSC 106", room: "CL 5" },
            { time: "2:00 PM - 5:00 PM", section: "CS 3-4", subject: "COSC 106", room: "CL 5" },
            { time: "5:00 PM - 7:00 PM", section: "CS 3-3", subject: "COSC 106", room: "ROOM 201" },
          ],
          wednesday: [
            { time: "10:00 PM - 1:00 PM", section: "CS 3-3", subject: "COSC 106", room: "CL 5" },
            { time: "1:00 PM - 3:00 PM", section: "CS 3-4", subject: "COSC 106", room: "ROOM 201" },
            { time: "5:00 PM - 8:00 PM", section: "CS 3-2", subject: "COSC 106", room: "CL 5" },
          ],
          thursday: [
            { time: "10:00 AM - 1:00 PM", section: "CS 3-5", subject: "COSC 106", room: "CL 5" },
            { time: "2:00 PM - 5:00 PM", section: "CS 3-6", subject: "COSC 106", room: "CL 5" },
            { time: "5:00 PM - 7:00 PM", section: "CS 3-1", subject: "COSC 106", room: "AUDI" },
          ],
          friday: [],
          saturday: [
            { time: "10:00 AM - 12:00 PM", section: "CS 3-2", subject: "COSC 106", room: "ROOM 204" },
            { time: "12:00 PM - 2:00 PM", section: "CS 3-6", subject: "COSC 106", room: "ROOM 107" },
            { time: "2:30 PM - 4:30 PM", section: "", subject: "Consultation", room: "Faculty" },
            { time: "5:00 PM - 7:00 PM", section: "CS 3-5", subject: "COSC 106", room: "ROOM 201" },
          ],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 3.69, null, 3.79],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Passed the Board in Licensure Examination for Teachers.",
          "Enrolled in a Master’s program in Information Technology",
          "Passed the TESDA National Certificates in Computer Systems Servicing (NC II) and Trainers Methodology  (TM I)",
          "Passed the International Computer Driving License(ICDL)",
          "Completed the online course offered by Oracle"
        ],
        "2025": [
          "Take a Civil Service Exam for Professional",
          "Take an ICT Proficiency Exam by Department of Information and Communication Technology Diagnostic Test",
          "Mentor students in certification programs or capstone projects.",
          "Become a Sr. Developer in Web Development",
          "Make a Educational Content Video related in Programming",
          "Proposed a research paper",
          "Attend Seminar and Workshop offered by Department of information and communication technology"
        ],
        "2026": [
          "Complete the Master’s degree in Information Technology",
          "Talks as a speaker in a different schools and industries related in technology trends",
          "Propose a new research proposal",
          "Publish a research paper and Learning Module"
        ],
        "2027": ["Enroll in a Doctor’s program in Information Technology"],
        "2028": ["Continue and improve all that I have started."],
      },
      loading: {
        "2024": ["Application Development and Emerging Technology"],
        "2025": ["Introduction to Game Development"],
        "2026": ["Application Development and Emerging Technology"],
        "2027": ["Introduction to Game Development "],
        "2028": ["Application Development and Emerging Technology"],
      },
      research: {
        "2024": [
          "Present at research symposium",
          "Served as a panelist during undergraduate research defense.",
          "Guide student as a Technical Critic"
        ],
        "2025": [
          "Withdraw the development of our approved research",
          "Served as a panelist during undergraduate research defense."
        ],
        "2026": ["Participate at different research seminars/workshop and symposium"],
        "2027": ["To conduct and publish applied research in computing and technology education"],
        "2028": ["To conduct and publish applied research in computing and technology education"],
      },
      extensions: {
        "2024": [],
        "2025": [],
        "2026": [],
        "2027": [],
        "2028": [],
      }
    }
  },
  //Roi Francisco
  {
    first_name: "Francisco",
    last_name: "Roi",
    name: "Roi M. Francisco",
    designation: "Instructor I",
    image: "/images/francisc.jpg",
    diploma: [
      { name: "BACHELOR OF SCIENCE IN INDUSTRIAL EDUCATION", url: "https://drive.google.com/file/d/1AHTgB2AiSAKrXSZaEJrNxW2ZW8B2P1zI/view?usp=drive_link" }
    ],
    tor: [
      { name: "BACHELOR OF SCIENCE IN INDUSTRIAL EDUCATION", url: "https://drive.google.com/file/d/12C2wVx_4zgvbrEjDfxrXVrzcyCZjoPWi/view?usp=drive_link" }
    ],
    resume: "https://drive.google.com/file/d/1qlRrgmmPiMP74LcZKfykAOayidOtT8wx/view?usp=drive_link",
    certificates: [
      { name: "COMPUTER SYSTEM SERVICING (NCII) - TESDA", url: "https://drive.google.com/file/d/1o5Yc15cVVePDtqtgOoBallqMJHztKTQ3/view?usp=drive_link" },
      { name: "TRAINERS METHOLODGY CERTIFICATE I - TESDA", url: "https://drive.google.com/file/d/1ALoKy9xMuBzmxVdhBQbb5Yr6s6wSVQHe/view?usp=drive_link" },
    ],
    schedule: [
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "7:00 AM - 9:00 AM", section: "CS 2-1", subject: "COSC 65", room: "CL 1" },
            { time: "9:00 AM - 10:00 AM", section: "CS 2-2", subject: "COSC 65", room: "CL 1" },
            { time: "10:00 AM - 11:00 AM", section: "CS 2-3", subject: "COSC 65 (Lab) Async", room: "" },
          ],
          tuesday: [
            { time: "7:00 AM - 8:00 AM", section: "CS 2-5", subject: "GNED 08 Async", room: "" },
            { time: "8:00 AM - 10:00 AM", section: "CS 2-5", subject: "GNED 08", room: "ROOM 301" }
          ],
          wednesday: [
            { time: "7:00 AM - 9:00 AM", section: "CS 2-2", subject: "COCS 65", room: "CL 1" },
            { time: "9:00 AM - 10:00 AM", section: "CS 2-1", subject: "COSC 65", room: "ROOM 301" },
            { time: "10:00 AM - 11:00 AM", section: "CS 2-2", subject: "COSC 65 (Lab) Async", room: "" },
          ],
          thursday: [
            { time: "7:00 AM - 9:00 AM", section: "CS 2-6", subject: "GNED 08", room: "ROOM 301" },
            { time: "9:00 AM - 10:00 AM", section: "CS 2-6", subject: "GNED 08 Async", room: "" },
          ],
          friday: [
            { time: "7:00 AM - 8:00 AM", section: "CS 2-1", subject: "COSC 65 (Lec) Async", room: "" },
            { time: "8:00 AM - 9:00 AM", section: "CS 2-2", subject: "COSC 65 (Lec) Async", room: "" },
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },

      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [{ time: "9:00 AM - 10:00 AM", section: "CS 2-1", subject: "COSC 65", room: "CL 1" }],
          tuesday: [{ time: "7:00 AM - 10:00 AM", section: "CS 2-2", subject: "COSC 65", room: "CL 1" }],
          wednesday: [],
          thursday: [{ time: "7:00 AM - 9:00 AM", section: "CS 2-2", subject: "COSC 65", room: "ROOM 204" }],
          friday: [{ time: "7:00 AM - 9:00 AM", section: "CS 2-1", subject: "COSC 65", room: "ROOM 204" }],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [4.66, 4.11, null, 4.10],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Attended networking seminars or webinars.",
          "Took a short course on networking fundamentals.",
          "Explored and compared graduate programs from multiple universities to identify the most suitable Master’s program and developed a plan for enrollment."
        ],
        "2025": [
          "Enroll in a Master’s degree program in Computer Studies",
          "Attend 1–2 professional conferences or seminars"
        ],
        "2026": [
          "Continue Master’s degree studies.",
          "Attend a major networking seminar/conference.",
          "To renew  TESDA National Certificate in various Information Technology Areas"
        ],
        "2027": [
          "Complete Master’s degree or work on thesis/project.",
          "Attend at least professional seminars/works as a participant or speaker."
        ],
        "2028": ["Finalize Master’s degree  and showcase thesis/project in a seminar."],
      },
      loading: {
        "2024": [
          "Network Fundamentals",
          "Architecture and Organization",
          "Web Systems and Technologies 1",
          "Network Fundamentals",
          "Architecture and Organization"
        ],
        "2025": [
          "Web Systems and Technologies 1",
          "Network Fundamentals",
          "Architecture and Organization",
        ],
        "2026": [
          "Web Systems and Technologies 1",
          "Network Fundamentals",
          "Architecture and Organization"
        ],
        "2027": [
          "Web Systems and Technologies 1",
          "Network Fundamentals",
          "Architecture and Organization"],
        "2028": [
          "Web Systems and Technologies 1",
          "Network Fundamentals",
          "Architecture and Organization"
        ],
      },
      research: {
        "2024": ["Attended research seminars/symposium"],
        "2025": ["To engage and participate in innovation projects or collaborative research with academic colleagues"],
        "2026": ["To engage and participate in innovation projects or collaborative research with academic colleagues"],
        "2027": ["To conduct and publish applied research in computing studies"],
        "2028": ["To conduct and publish applied research in computing studies"],
      },
      extensions: {
        "2024": ["Engaged in various extension activities and programs that benefits the communities"],
        "2025": ["Engaged in various extension activities and programs that benefits the communities"],
        "2026": ["To engage in various extension activities and programs that benefits the communities"],
        "2027": ["To engage in various extension activities and programs that benefits the communities"],
        "2028": ["To engage in various extension activities and programs that benefits the communities"],
      }
    }
  },

  //Lawrence Jimenez
  {
    first_name: "Lawrence ",
    last_name: "Jimenez",
    name: "Lawrence G. Jimenez",
    designation: "Instructor I",
    image: "/images/jimenez.jpg",
    diploma: "/diploma/diplom.jpg",
    tor: "/tor/tor.jfif",
    resume: "/resume/resume-sample.png",
    certificates: [
      { name: "Dancerist", url: "https://drive.google.com/file/d/1B5tlyKXsCiKzrzuGC65Z58e_kMh5n-fO/view?usp=drive_link" },
    ],
    schedule: [
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [

          ],
          tuesday: [
            { time: "8:00 AM - 9:00 AM", section: "IT 3-5", subject: "DCIT 26 (Lec) Async", room: "" },
            { time: "9:00 AM - 10:00 AM", section: "IT 3-6", subject: "DCIT 26 (Lec) Async", room: "" },
            { time: "10:00 AM - 11:00 AM", section: "IT 2-3", subject: "ITEC 55 (Lec)", room: "ROOM 305" },
            { time: "12:00 PM - 2:00 PM", section: "IT 2-2", subject: "ITEC 55 (Lab)", room: "CL3" },
            { time: "3:00 PM - 5:00 PM", section: "", subject: "Consultation", room: "Faculty" },
            { time: "5:00 PM - 6:00 PM", section: "IT 3-5", subject: "DCIT 26 (Lab) Async", room: "" },
            { time: "6:00 PM - 7:00 PM", section: "IT 3-6", subject: "DCIT 26 (Lab) Async", room: "" },
            { time: "7:00 PM - 9:00 PM", section: "IT 2-3", subject: "ITEC 55 Lab", room: "CL 4" }
          ],
          wednesday: [
            { time: "7:00 AM - 8:00 AM", section: "IT 2-2", subject: "ITEC 55 (Lec) Async", room: "" },
            { time: "8:00 AM - 9:00 AM", section: "IT 2-3", subject: "ITEC 55 (Lec) Async", room: "" },
            { time: "9:00 AM - 10:00 AM", section: "IT 2-4", subject: "ITEC 55 (Lec) Async", room: "" },
            { time: "10:00 AM - 11:00 AM", section: "IT 2-5", subject: "ITEC 55 (Lec) Async", room: "" },
            { time: "11:00 AM - 12:00 PM", section: "IT 2-2", subject: "ITEC 55 Lec", room: "ROOM 305" },
            { time: "12:00 PM - 1:00 PM", section: "IT 3-5", subject: "DCIT 26 Lec", room: "ROOM 301" },
            { time: "2:00 PM - 3:00 PM", section: "IT 2-4", subject: "ITEC 55 Lab", room: "ROOM 305" },
            { time: "4:00 PM - 6:00 PM", section: "IT 3-6", subject: "IT 3-6", room: "CL 4" },
          ],
          thursday: [
            { time: "10:00 AM - 11:00 AM", section: "IT 2-5", subject: "ITEC 55 (Lab) Async", room: "" },
            { time: "11:00 AM - 12:00 PM", section: "IT 2-4", subject: "ITEC 55 (Lab) Async", room: "" },
            { time: "12:00 PM - 1:00 PM", section: "IT 2-3", subject: "DCIT 26 Lab", room: "ROOM 301" },
            { time: "1:00 PM - 3:00 PM", section: "IT 3-5", subject: "DCIT 26 Lab", room: "CL 3" },
            { time: "3:00 PM - 4:00 PM", section: "IT 3-6", subject: "DCIT 26 Lec", room: "ROOM 301" },
            { time: "5:00 PM - 7:00 PM", section: "IT 2-4", subject: "ITEC 55 Lab", room: "CL 1" },
          ],
          friday: [{ time: "11:00 AM - 12:00 PM", section: "CL 4", subject: "ITEC 55 Lab", room: "CL 4" }],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "9:00 AM - 10:00 AM", section: "CS 2-1", subject: "DCIT 25", room: "ROOM 305" },
            { time: "10:00 AM - 11:00 AM", section: "CS 2-1", subject: "DCIT 25 (Lec) Async", room: "" },
            { time: "11:00 AM - 12:00 PM", section: "CS 2-2", subject: "DCIT 25", room: "CL 2" },
            { time: "12:00 PM - 1:00 PM", section: "CS 2-2", subject: "DCIT 25 (Lec) Async", room: "" },
            { time: "1:00 PM - 2:00 PM", section: "CS 2-1", subject: "ITEC 65 (Lab) Async", room: "" },
          ],
          tuesday: [
            { time: "9:00 AM - 10:00 AM", section: "CS 2-3", subject: "DCIT 25 (Lab) Async", room: "" },
            { time: "10:00 AM - 12:00 AM", section: "CS 2-3", subject: "DCIT 25", room: "CL 2" },
            { time: "1:00 PM - 2:00 PM", section: "CS 2-6", subject: "GNED 14 Async", room: "" },
            { time: "2:00 PM - 4:00 PM", section: "CS 2-6", subject: "GNED 14", room: "ROOM 305" },
            { time: "4:00 PM - 6:00 PM", section: "", subject: "Consultation", room: "Faculty" },
            { time: "6:00 PM - 7:00 PM", section: "CS 2-3", subject: "DCIT 25 (Lec) Async", room: "" },
            { time: "7:00 PM - 8:00 PM", section: "IT 2-1", subject: "ITEC 65", room: "ROOM 305" },
          ],
          wednesday: [
            { time: "9:00 AM - 10:00 AM", section: "CS 2-2", subject: "DCIT 25 (Lab) Async", room: "" },
            { time: "10:00 AM - 11:00 AM", section: "CS 2-1", subject: "DCIT 25", room: "CL 3" },
            { time: "11:00 AM - 12:00 PM", section: "IT 2-2", subject: "ITEC 65", room: "ROOM 303" },
            { time: "12:00 PM - 2:00 PM", section: "CS 2-1", subject: "DCIT 25", room: "CL 3 " },
            { time: "2:00 PM - 4:00 PM", section: "CS 2-2", subject: "DCIT 25", room: "CL 3" },
            { time: "5:00 PM - 6:00 PM", section: "CS 2-1", subject: "DCIT 25 (Lab) Async", room: "" },
          ],
          thursday: [],
          friday: [
            { time: "8:00 AM - 9:00 AM", section: "IT 2-1", subject: "ITEC 65 (Lec) Async", room: "" },
            { time: "9:00 AM - 10:00 AM", section: "IT 2-2", subject: "ITEC 65 (Lec) Async", room: "" },
            { time: "10:00 AM - 11:00 AM", section: "IT 2-2", subject: "ITEC 65 (Lab) Async", room: "" },
            { time: "11:00 AM - 12:00 PM", section: "IT 2-1", subject: "ITEC 65", room: "CL 1" },
            { time: "1:00 PM - 3:00 PM", section: "IT 2-2", subject: "ITEC 65", room: "CL 2" }
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },

      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            { time: "9:00 AM - 8:30 AM", section: "CS 1-5", subject: "DCIT 25", room: "ROOM 305" },
            { time: "8:30 AM - 10:00 AM", section: "CS 1-3", subject: "GNED 12", room: "ROOM 107" },
            { time: "10:00 AM - 12:00 PM", section: "IT 2-6", subject: "ITEC 70", room: "CL 3" },
            { time: "1:00 PM - 2:30 PM", section: "CS 1-2", subject: "GNED 12", room: "ROOM 107" },
            { time: "2:30 PM - 4:00 PM", section: "CS 1-3", subject: "GNED 12", room: "AUDI" },
          ],
          tuesday: [
            { time: "9:00 AM - 10:30 AM", section: "CS 1-2", subject: "GNED 12", room: "AUDI" },
            { time: "1:00 PM - 3:00 PM", section: "IT 2-5", subject: "ITEC 70", room: "ROOM 204" },
            { time: "3:00 PM - 6:00 PM", section: "CS 1-1", subject: "GNED 12", room: "ROOM 109" },
            { time: "6:00 PM - 7:30 PM", section: "CS 1-5", subject: "GNED 12", room: "ROOM 204" },
          ],
          wednesday: [
            { time: "10:00 AM - 1:00 PM", section: "CS 1-4", subject: "GNED 12", room: "AUDI" },
            { time: "1:00 PM - 4:00 PM", section: "IT 2-6", subject: "ITEC 70", room: "CL 5" },
            { time: "6:00 PM - 9:00 PM", section: "IT 2-4", subject: "ITEC 70", room: "CL 4" },
          ],
          thursday: [],
          friday: [
            { time: "10:00 AM - 1:00 PM", section: "IT 2-5", subject: "ITEC 70", room: "CL 4" },
            { time: "2:00 PM - 4:00 PM", section: "", subject: "Consultation", room: "Faculty" },
            { time: "6:00 PM - 8:00 PM", section: "IT 2-4", subject: "ITEC 70", room: "ROOM 204" },
          ],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 4.32, null, 3.98],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Passed the Board in Licensure Examination for Teachers.",
          "Currently enrolled in an advanced academic program at MIT to deepen my expertise in the field."
        ],
        "2025": ["Gain relevant skills and knowledge aligned with the course by enrolling in certified online training programs available."],
        "2026": ["Gain relevant skills and knowledge aligned with the course by enrolling in certified online training programs available"],
        "2027": ["Gain relevant skills and knowledge aligned with the course by enrolling in certified online training programs available"],
        "2028": ["Gain relevant skills and knowledge aligned with the course by enrolling in certified online training programs available"],
      },
      loading: {
        "2024": [
          "Platform Technologies",
          "Application Development and Emerging Technology",
          "Data Structure and Algorithm",
          "Panitikang Panlipunan"
        ],
        "2025": [
          "Open Source Technology",
          "Data Structure and Algorithm",
          "CS Elective Computer Graphics",
          "Multimedia System",
          "Dalumat ng/sa Filipino"
        ],
        "2026": [
          "CS Elective Computer Graphics",
          "Multimedia System",
          "Panitikang Panlipunan",
          "Dalumat ng/sa Filipino"
        ],
        "2027": [
          "CS Elective Computer Graphics",
          "Multimedia System",
          "Panitikang Panlipunan",
          "Dalumat ng/sa Filipino"
        ],
        "2028": ["CS Elective Computer Graphics",
          "Multimedia System",
          "Panitikang Panlipunan",
          "Dalumat ng/sa Filipino"],
      },
      research: {
        "2024": [
          "Presented at research symposium",
          "Served as a panelist during undergraduate research defense.",
          "Guided student as a Technical Critic"
        ],
        "2025": [
          "Continue the development of our approved research",
          "Served as a panelist during undergraduate research defense."
        ],
        "2026": ["Participate at different research seminars/workshop and symposium"],
        "2027": ["To conduct and publish applied research in computing and technology education"],
        "2028": ["To conduct and publish applied research in computing and technology education"],
      },
      extensions: {
        "2024": [
          "Participate in the campus extension activities.",
          "Participate in the community workshop thru NGO",
        ],
        "2025": [
          "Mentoring at Multimedia Course held at Bacoor Computer Center.",
          "Be Organizing committee at CyberPeace Education 2025"
        ],
        "2026": ["Spearhead a workshop focusing on Multimedia within the community"],
        "2027": ["Continuous participation on different activities that will beneficial to the local community "],
        "2028": ["Develop a web-based application for Cavite Creative Community"],
      }
    }
  },
  //James Mañozo
  {
    first_name: "James",
    last_name: "Mañozo",
    name: "James Mañozo",
    designation: "Instructor I",
    image: "/images/mañozo.JPG",
    diploma: [
      { name: "BACHELOR OF SECONDARY EDUCATION MAJOR IN MATHEMATICS", url: "https://drive.google.com/file/d/1LA5i_jQ_B08bJ5ESgNsk7t9aptgyVY86/view?usp=drive_link" },
    ],
    tor: [
      {
        name: "BACHELOR OF SECONDARY EDUCATION MAJOR IN MATHEMATICS", url: "https://drive.google.com/file/d/1_LnFiVi4FC8oaOBQmNC-XCIQz4goTD59/view?usp=drive_link"
      }
    ],
    resume: "https://drive.google.com/file/d/1ayHFiLC7X6m8EkQvgv6yoUuNYvt1vu3D/view?usp=drive_link",
    certificates: [
      { name: "SEMINAR-WORKSHOP ON MODULE DEVELOPMENT AND PUBLICATION - CAVITE STATE UNIVERSITY - BACOOR", url: "https://drive.google.com/file/d/1m4hLPjQtpEqd2UW03OQQ02p2qWbHDxh_/view?usp=drive_link" },
      { name: "2024 RESEARCH SYMPOSIUM - CALL FOR PROPOSAL - CAVITE STATE UNIVERSITY - BACOOR", url: "https://drive.google.com/file/d/1mL1joT2xmUAZM_PX76fgigjgC1Lx11qm/view?usp=drive_link" }
    ],
    schedule: [
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            { time: "8:00 AM - 10:00 AM", section: "", subject: "Consultation", room: "Faculty" },
            { time: "11:00 AM - 1:00 PM", section: "CS 2-3", subject: "GNED 03", room: "ROOM 303" },
            { time: "1:00 PM - 3:00 PM", section: "CS 2-4", subject: "GNED 03", room: "ROOM 303" },
          ],
          tuesday: [
            { time: "7:00 AM - 8:00 AM", section: "CS 2-6", subject: "COSC 55 Async", room: "" },
            { time: "8:00 AM - 9:00 AM", section: "IT 1-2", subject: "COSC 50 Async", room: "" },
            { time: "9:00 AM - 10:00 AM", section: "CS 2-7", subject: "COSC 55 Async", room: "" },
            { time: "10:00 AM - 12:00 PM", section: "CS 2-6", subject: "COSC 55", room: "ROOM 303" },
            { time: "12:00 PM - 2:00 PM", section: "CS 2-7", subject: "COSC 55", room: "ROOM 301" },
            { time: "3:00 PM - 4:00 PM", section: "CS 2-1", subject: "GNED 03 Async", room: "" },
            { time: "4:00 PM - 5:00 PM", section: "CS 2-2", subject: "GNED 03 Async", room: "" },
            { time: "5:00 PM - 6:00 PM", section: "CS 2-3", subject: "GNED 03 Async", room: "" },
            { time: "6:00 PM - 7:00 PM", section: "CS 2-4", subject: "GNED 03 Async", room: "" },
            { time: "7:00 PM - 8:00 PM", section: "CS 2-5", subject: "GNED 03 Async", room: "" },
          ],
          wednesday: [],
          thursday: [
            { time: "8:00 AM - 10:00 AM", section: "CS 2-5", subject: "GNED 03", room: "ROOM 302" },
            { time: "10:00 AM - 11:00 PM", section: "CS 2-6", subject: "GNED 03 Async", room: "" },
            { time: "12:00 PM - 2:00 PM", section: "IT 1-2", subject: "COSC 50", room: "ROOM 305" },
          ],
          friday: [
            { time: "7:00 AM - 9:00 AM", section: "CS 2-1", subject: "GNED 03", room: "ROOM 305" },
            { time: "9:00 AM - 11:00 AM", section: "CS 2-6", subject: "GNED 03", room: "ROOM 305" },
            { time: "11:00 AM - 1:00 PM", section: "CS 2-2", subject: "GNED 03", room: "ROOM 305" },
            { time: "1:00 PM - 2:00 PM", section: "CS 2-7", subject: "GNED 03 Async", room: "" },
            { time: "3:00 PM - 5:00 PM", section: "CS 2-7", subject: "GNED 03", room: "CS 2-7" },
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "10:00 AM - 11:00 AM", section: "IT 3-4", subject: "GNED 09 Async", room: "" },
            { time: "11:00 AM - 1:00 PM", section: "CS 1-2", subject: "GNED 03", room: "ROOM 303" },
            { time: "1:00 PM - 3:00 PM", section: "IT 3-4", subject: "GNED 09", room: "ROOM 305" },
            { time: "3:00 PM - 5:00 PM", section: "CS 3-3", subject: "MATH 4", room: "ROOM 301" },
            { time: "6:00 PM - 7:00 PM", section: "IT 3-6", subject: "GNED 09 Async", room: "" },
            { time: "7:00 PM - 8:00 PM", section: "IT 3-5", subject: "GNED 09 Async", room: "" },
          ],
          tuesday: [
            { time: "9:00 AM - 10:00 PM", section: "IT 1-5", subject: "GNED 03 Async", room: "" },
            { time: "10:00 AM - 11:00 AM", section: "IT 1-4", subject: "GNED 03 Async", room: "" },
            { time: "12:00 PM - 1:00 PM", section: "IT 1-6", subject: "GNED 03 Async", room: "" },
            { time: "1:00 PM - 3:00 PM", section: "IT 3-5", subject: "GNED 09", room: "ROOM 301" },
            { time: "3:00 PM - 5:00 PM", section: "CS 1-1", subject: "GNED 03", room: "ROOM 302" },
            { time: "5:00 PM - 7:00 PM", section: "IT 3-6", subject: "GNED 09", room: "ROOM 305" },
          ],
          wednesday: [],
          thursday: [
            { time: "9:00 AM - 11:00 AM", section: "IT 1-4", subject: "GNED 03", room: "ROOM 305" },
            { time: "11:00 AM - 1:00 PM", section: "IT 1-5", subject: "GNED 03", room: "ROOM 305" },
            { time: "1:00 PM - 2:00 PM", section: "CS 1-1", subject: "GNED 03 Async", room: "" },
            { time: "3:00 PM - 5:00 PM", section: "IT 1-6", subject: "GNED 03", room: "ROOM 305" },
            { time: "5:00 PM - 6:00 PM", section: "CS 1-2", subject: "GNED 03 Async", room: "" },
          ],
          friday: [
            { time: "10:00 AM - 12:00 PM", section: "", subject: "Consultation", room: "" },
            { time: "12:00 AM - 1:00 PM", section: "CS 3-3", subject: "MATH 4", room: "ROOM 301" },
            { time: "1:00 PM - 2:00 PM", section: "CS 3-3", subject: "MATH 4 (Lec) Async", room: "" },
            { time: "2:00 PM - 3:00 PM", section: "CS 3-3", subject: "MATH 4 (Lab) Async", room: "" },
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [
            { time: "1:30 PM - 4:30 PM", section: "CS 3-3", subject: "MATH 4", room: "ROOM 107" },
            { time: "7:00 PM - 9:00 PM", section: "CS 3-1", subject: "MATH 4", room: "CL 2" }
          ],
          wednesday: [
            { time: "1:00 PM - 3:00 PM", section: "", subject: "Consultation", room: "Faculty" },
            { time: "3:00 PM - 5:00 PM", section: "CS 3-2", subject: "MATH 4", room: "ROOM 203" },
            { time: "7:00 PM - 9:00 PM", section: "CS 3-3", subject: "MATH 4", room: "ROOM 203" }
          ],
          thursday: [
            { time: "7:00 AM - 9:00 AM", section: "IT 1-6", subject: "GNED 03", room: "ROOM 101" },
            { time: "10:00 AM - 12:00 AM", section: "CS 3-1", subject: "MATH 4", room: "AUDI 2" },
            { time: "12:00 PM - 3:00 PM", section: "CS 3-2", subject: "MATH 4", room: "ROOM 203" },
            { time: "3:00 PM - 4:00 PM", section: "CS 3-1", subject: "MATH 4", room: "ROOM 101" }
          ],
          friday: [],
          saturday: [
            { time: "7:00 AM - 10:00 AM", section: "IT 1-2", subject: "GNED 03", room: "CL 4" },
            { time: "10:00 AM - 1:00 PM", section: "IT 1-4", subject: "GNED 03", room: "CL 4" },
            { time: "2:00 PM - 5:00 PM", section: "IT 1-5", subject: "GNED 03", room: "CL 4" },
            { time: "5:00 PM - 6:00 PM", section: "IT 1-6", subject: "GNED 03", room: "CL 4" }
          ],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 4.15, null, 3.78],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Passed the Licensure Examination for Teachers and began applying my education degree in a professional teaching career.",
          "Enhanced teaching effectiveness through systematic self-evaluation, guided by the results of the Student Evaluation of Teachers (SET), and by thoughtfully integrating feedback into instructional strategies."
        ],
        "2025": [
          "Make a Educational Content Video related in Programming",
          "Attend Seminar and Workshop offered by Department of Computer Studies"
        ],
        "2026": ["To earn a masters degree and continue to participate in seminars and training related to my profession and can contribute to the development of the community and department."],
        "2027": ["To continue in Doctorate Degree"],
        "2028": ["To continue in Doctorate Degree"],
      },
      loading: {
        "2024": [
          "Mathematics in the modern world",
          "Discrete structure  I"
        ],
        "2025": [
          "Mathematics in the modern world",
          "Experimental statistics"
        ],
        "2026": ["Any major or minor subjects in BSIT and BSCS related to mathematics."],
        "2027": ["Any major or minor subjects in BSIT and BSCS related to mathematics."],
        "2028": ["Any major or minor subjects in BSIT and BSCS related to mathematics."],
      },
      research: {
        "2024": ["Engaged in research training and seminars related to Computer Studies."],
        "2025": ["Engaged in research training and seminars related to Computer Studies."],
        "2026": ["To offer guidance and assistance to students throughout the course of their research or thesis projects."],
        "2027": ["To conduct and publish applied research in computing studies"],
        "2028": ["To conduct and publish applied research in computing studies"],
      },
      extensions: {
        "2024": [],
        "2025": [],
        "2026": [],
        "2027": [],
        "2028": [],
      }
    }
  },
  //Ashley Manuel
  {
    first_name: "Ashley",
    last_name: "Manuel",
    name: "Ashley Manuel",
    designation: "Instructor I",
    image: "/images/manuel.JPG",
    diploma: [
      { name: "BACHELOR OF SCIENCE IN INDUSTRIAL EDUCATION", url: "https://drive.google.com/file/d/1G-6r59KX54zX_6ckdCSJE3mGYCzD0O4s/view?usp=drive_link" }
    ],
    tor: [
      { name: "BACHELOR OF SCIENCE IN INDUSTRIAL EDUCATION", url: "https://drive.google.com/file/d/1YsCrbyAd0aYl4RvXmi1i879RDvXFBAod/view?usp=drive_link" }
    ],
    resume: "https://drive.google.com/file/d/1mVkgHWvs3k5tbYXceRJKwn07wZivoCfb/view?usp=drive_link",
    certificates: [
      { name: "SETTING UP COMPUTER NETWORKS - TESDA", url: "https://drive.google.com/file/d/1rTkW5JykTI8jdnxdPepcg8Xs5ij3zJrG/view?usp=drive_link" },
      { name: "SETTING UP COMPUTER SERVERS - TESDA", url: "https://drive.google.com/file/d/1bukDi2wi3MaKL7G-rkI4DnI-FhiXHzlR/view?usp=drive_link" },
      { name: "DEVELOPING DESIGNS FOR USER INTERFACE - TESDA", url: "https://drive.google.com/file/d/1lJxMD5u2U2HneeFCp4vf7g01a-heoHZv/view?usp=drive_link" },
      { name: "INSTALLING AND CONFIGURING COMPUTER SYSTEMS - TESDA", url: "https://drive.google.com/file/d/19s2_0LrY2bbCKvzEHY6OnB8BE-mbZO00/view?usp=drive_link" },
      { name: "INTRODUCTION TO CSS", url: "https://drive.google.com/file/d/1ZtENEs9ZfMUQcxU_FHy8NsnrsleR4aWh/view?usp=drive_link" },
      { name: "MAINTAINING COMPUTER SYSTEMS AND NETWORKS - TESDA", url: "https://drive.google.com/file/d/1rWLkvIsSLSHY0OZ4Un_NngjZQj8oaeXR/view?usp=drive_link" },
      { name: "INTRODUCTION TO VISUAL GRAPHIC DESIGN - TESDA", url: "https://drive.google.com/file/d/1l7oU8LMkUKpUJHxzcGWTZ2RXOxWn8OM8/view?usp=drive_link" }
    ],
    schedule: [
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            { time: "2:00 PM - 4:00 PM", section: "", subject: "Consultation", room: "Faculty" },
            { time: "4:00 PM - 7:00 PM", section: "CS 1-3", subject: "DCIT 23", room: "CL 5" },
            { time: "7:00 PM - 8:00 PM", section: "CS 1-3", subject: "DCIT 23", room: "CL 5" }
          ],
          tuesday: [
            { time: "12:00 PM - 1:00 PM", section: "CS 1-4", subject: "DCIT 23", room: "ROOM 109" },
            { time: "1:00 PM - 2:30 PM", section: "CS 3-1", subject: "ITEC 85", room: "ROOM 201" },
            { time: "4:00 PM - 7:00 PM", section: "CS 1-4", subject: "DCIT 23", room: "CL 2" },
          ],
          wednesday: [
            { time: "7:00 AM - 8:30 AM", section: "IT 1-1", subject: "GNED 01", room: "ROOM 101" },
            { time: "9:00 AM - 10:00 AM", section: "IT 1-5", subject: "GNED 01", room: "CL 5" },
            { time: "10:00 AM - 11:30 AM", section: "CS 3-2", subject: "ITEC 85", room: "ROOM 201" },
            { time: "1:00 AM - 4:00 PM", section: "CS 1-3", subject: "DCIT 23", room: "CL 3" },
            { time: "6:00 PM - 9:00 PM", section: "CS 1-4", subject: "DCIT 23", room: "CL 3" }
          ],
          thursday: [
            { time: "8:30 AM - 10:00 AM", section: "CS 3-1", subject: "ITEC 85", room: "ROOM 201" },
            { time: "10:00 AM - 12:00 AM", section: "IT 1-5", subject: "GNED 01", room: "ROOM 204" },
            { time: "2:00 PM - 3:30 PM", section: "IT 1-1", subject: "GNED 01", room: "ROOM 107" },
            { time: "3:30 PM - 5:00 PM", section: "CS 3-2", subject: "ITEC 85", room: "ROOM 203" },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 4.51],
    evaluation_labels: ["1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Started a professional career and applied the skills I have acquired through my degree in education.",
          "Enhanced teaching effectiveness through systematic self-evaluation, guided by the results of the Student Evaluation of Teachers (SET), and by thoughtfully integrating feedback into instructional strategies."
        ],
        "2025": [
          "Pass the Board Licensure Examination for Professional Teachers (BLEPT).",
          "Actively participate as a speaker in workshops and seminars related to my specialization, sharing my expertise beyond the classroom to reach wider learners."
        ],
        "2026": [
          "Pursue my professional development by enrolling in a Master’s degree program related to Computer Studies.",
          "Be an active member of an organization wherein I can acquire new skills while applying and refining my existing competencies."
        ],
        "2027": [
          "Continue professional development in my Master’s program.",
          "Keep being an active member of an organization.",
          "Spearhead skills training initiatives such as workshops and seminars, either within the institution or in partnership with external organizations."
        ],
        "2028": [
          "Complete graduate studies leading to a Master’s degree related to Computer Studies.",
          "Pursue an additional academic degree in the field of engineering, specifically computer engineering."
        ],
      },
      loading: {
        "2024": [
          "System Administration and Maintenance",
          "System Integration and Architecture II"
        ],
        "2025": [
          "Computer Programming II",
          "Information Assurance and Security",
          "Art Appreciation",
          "Science, Technology, and Science",
          "System Integration and Architecture"
        ],
        "2026": ["Any courses in networking, hardware, or graphic design where I can apply my expertise as an ICT educator."],
        "2027": ["Any courses in networking, hardware, or graphic design where I can apply my expertise as an ICT educator."],
        "2028": ["Any courses in networking, hardware, or graphic design where I can apply my expertise as an ICT educator."],
      },
      research: {
        "2024": ["Guide students with their research development."],
        "2025": ["Guide students with their research development."],
        "2026": [
          "Guide students with their research development.",
          "Serve as research adviser for undergraduate thesis projects."
        ],
        "2027": ["Engage in collaborative research with fellow educators across various academic disciplines."],
        "2028": [
          "Author or co-author at least one peer-reviewed publication in a recognized academic journal.",
          "Sustain engagement in research endeavors and offer continuous support to students in their scholarly work."
        ],
      },
      extensions: {
        "2024": ["Actively participate in extension programs organized at the campus level, especially those initiated by the department."],
        "2025": ["Maintain active involvement in institutional and departmental extension activities."],
        "2026": ["Regularly engage in extension programs spearheaded by the department."],
        "2027": ["Maintain actively involved in extension programs led by both the department and the university."],
        "2028": ["Initiate training sessions or workshops focused on computer literacy and other in-demand industry skills."],
      }
    }
  },
  //Edmund Martinez
  {
    first_name: "Edmund",
    last_name: "Martinez",
    name: "Edmund E. Martinez",
    designations: { 
      current_designation: "Instructor I",
      last_designation: [
        { year: 2024, designation: "Try2024" },
        { year: 2023, designation: "Try2023" },
      ],
    },
    image: "/images/martinez.JPG",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1I4XT9BVoXJbnossRYZ17BDBcGf5e3vNb/view?usp=drive_link"
    },],
    masters_diploma: [{
      name: "MASTER IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1niKFF7rHL9QYydkeqeXcWbBcPBrPZJBY/view?usp=drive_link"
    },],
    tor: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1fvK81JPTKD1yIt7ZPhCHwaH813CW9Yxw/view?usp=drive_link"
    },],
    resume: {
      url: "https://drive.google.com/file/d/1fN0Ck8ZL7HJrisi6hWnX4n48Mz7i7gAE/view?usp=drive_link"
    },
    certificates: [
      {
        name: "BASIC OF NETWORKING DESIGN - TESDA",
        url: "https://drive.google.com/file/d/1vvOObhDtuqocZQph0w0WYImNGbKKCz-D/view?usp=drive_link"
      },
      {
        name: "CANVA FOR BEGINNERS - TESDA",
        url: "https://drive.google.com/file/d/1Wgb23NDB1sl1a8NPMk4U84mUTAWCgiNP/view?usp=drive_link"
      },
      {
        name: "COMPUTER LITERACY TRAINING PROGRAM - ADAMSON UNIVERSITY",
        url: "https://drive.google.com/file/d/1DXrVZuQqJmvqD8c8o2UlLKA8RmfKj3M3/view?usp=drive_link"
      },
      {
        name: "CYBERATTACKS AND CYBERSECURITY - MINDORO STATE UNIVERSITY",
        url: "https://drive.google.com/file/d/1CZkmHDYObK4SBPKN4M1gYOYx1rGHyvMg/view?usp=drive_link"
      },
      {
        url: "https://drive.google.com/file/d/1DXrVZuQqJmvqD8c8o2UlLKA8RmfKj3M3/view?usp=drive_link",
        name: "COMPUTER LITERACY TRAINING PROGRAM - ADAMSON UNIVERSITY"
      },
      {
        name: "CYBERSECURITY AWARENESS - DICT",
        url: "https://drive.google.com/file/d/1r4BbghOqrJurLveXCTeFgr4mnSQiyQlz/view?usp=drive_link"
      },
      {
        name: "CYBERSECURITY AWARENESS - DICT",
        url: "https://drive.google.com/file/d/13XdmTRmEG_FjrDmL6OsShSBK9A8cTtfi/view?usp=drive_link"
      },
      {
        name: "CYBERSECURITY AWARENESS - DICT,",
        url: "https://drive.google.com/file/d/1fLkq6fLtsnQHGjNlXweqecLmbL4HmQNv/view?usp=drive_link"
      },
      {
        name: "CYBERTALKS: CYBER RESILIENCE: ADAPTING, INNOVATING AND DEFENDING IN THE DIGITAL AGE - DICT",
        url: "https://drive.google.com/file/d/1FaDk-bVSwzBfgWj47G-VEzv4UBD2fbUm/view?usp=drive_link"
      },
      {
        name: "DATA PRIVACY ACT (RA 10173) AWARENESS SEMINAR - DICT",
        url: "https://drive.google.com/file/d/1aESd4gd605Z9gFdA-yuSQlexjxDzVWhu/view?usp=drive_link"
      },
      {
        name: "ICT PEDAGOGY, ANDRAGOGY, AND HEUTAGOGY: DYNAMICS OF TEACHING ICT - DICT",
        url: "https://drive.google.com/file/d/1z1oMOW-d17CfL2-6_vhEsa1ZXBcr8Nu5/view?usp=drive_link"
      },
      {
        name: "EMERGNCY COMMUNICATION SYSTEMS WEBINAR - DICT",
        url: "https://drive.google.com/file/d/10BCOMkEsG7qBxAY5nhOWl60rlEjy26PX/view?usp=drive_link"
      },
      {
        name: "EXCEL TECHNIQUES FOR DATA ANALYSIS - DICT",
        url: "https://drive.google.com/file/d/1et6l0US2uD1mFDJrXIFP2VEHM-GKNyMq/view?usp=drive_link"
      },
      {
        name: "ADOBE CREATIVE EDUCATORS CERTIFICATIONS (LEVEL 2) - DICT",
        url: "https://drive.google.com/file/d/1UUnvQtPs4ALWnfAA7XprE_mG3ZSUDBzS/view?usp=drive_link"
      },
      {
        name: "EXPLORATION AND UTILIZATION OF GOOGLE WORKSPACE",
        url: "https://drive.google.com/file/d/1c453fXYZg9m7EhnnmviB7MusVlD_ajEU/view?usp=drive_link"
      },
      {
        name: "GOOGLE WORKSPACE",
        url: "https://drive.google.com/file/d/1DCjXx9-ljt5S6V4e0Bn5v3GZWxyT6tF_/view?usp=drive_link"
      },
      {
        name: "GRAPHIC DESIGN USING ADOBE EXPRESS - CREATIVE NATION ACADEMY",
        url: "https://drive.google.com/file/d/1EzjYeKJbnUTKTZHC5L1QiBDH8lBPaeMu/view?usp=drive_link"
      },
      {
        name: "GRAPHIC DESIGN USING ADOBE EXPRESS - CREATIVE NATION ACADEMY",
        url: "https://drive.google.com/file/d/1FccoRc4EYIUY7mQxKhqVA_8om520S2-r/view?usp=drive_link"
      },
      {
        name: "MAXIMIZE YOUR FREELANCE EARNINGS WITH AI TOOLS - DICT",
        url: "https://drive.google.com/file/d/1G5NWSrUNStLD09QlmFcbLYxH0BgtkOno/view?usp=drive_link"
      },
      {
        name: "COMPUTER SYSTEM SERVICING (NCII) - TESDA",
        url: "https://drive.google.com/file/d/1AzuqFWhQ_ZAPNZNpel3_h2rYdhs9unjM/view?usp=drive_link"
      },
      {
        name: "PC FORMATTING USING VIRTUALBOX - DICT",
        url: "https://drive.google.com/file/d/1eh5a_4WkCmEr9ILz1t77ttAt_ODxbqg-/view?usp=drive_link"
      },
      {
        name: "VIDEO EDITING USING ADOBE PHOTOSHOP - CREATIVE NATION ACADEMY",
        url: "https://drive.google.com/file/d/1X1491C9F9y46SDfDp-Bf3Q13pc3lQPn0/view?usp=drive_link"
      },
      {
        name: "WEB 3.0 101 WEBINAR - DICT",
        url: "https://drive.google.com/file/d/1X9VQ4Fnjb7FwuW_oDp-9BAl7B-LfMVwj/view?usp=drive_link"
      },
      {
        name: "COMPUTER SYSTEM SERVICING - TESDA",
        url: "https://drive.google.com/file/d/1AzuqFWhQ_ZAPNZNpel3_h2rYdhs9unjM/view?usp=drive_link"
      }
    ],
    schedule: [
      //No Record - 1st SEM  22-23
      //No Record - 2nd SEM  22-23
      { //1st 23-24
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 90 ASYNC",
              section: "IT 3-4",
              room: null
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "ITEC 90 ASYNC",
              section: "IT 3-1",
              room: null
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "ITEC 90 ASYNC",
              section: "IT 3-4",
              room: "CL 2"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "ITEC 90 (LAB)",
              section: "IT 3-4",
              room: "CL 2"
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "ITEC 90 (LAB)",
              section: "IT 3-5",
              room: "CL 2"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 90",
              section: "IT 3-1",
              room: "CL 2"
            },
          ],
          sunday: [],
        }
      },
      { //2nd 23-24
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [
            {
              time: "9:00 AM - 11:00 AM",
              subject: "ITEC 105 ASYNC",
              section: "IT 3-5",
              room: null
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 105 ASYNC",
              section: "IT 3-4",
              room: null
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "ITEC 105",
              section: "IT 3-4",
              room: "CL 4"
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "ITEC 105",
              section: "IT 3-4",
              room: "CL 4"
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "ITEC 105",
              section: "IT 3-5",
              room: "CL 4"
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "ITEC 105",
              section: "IT 3-5",
              room: "CL 4"
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "ITEC 105",
              section: "IT 3-5",
              room: "CL 4"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 105",
              section: "IT 3-4 (LEC) ASYNC",
              room: null
            },
          ],
          sunday: [],
        }
      },
      { //2nd 24-25
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [
            {
              time: "9:00 AM - 11:00 AM",
              subject: "ITEC 105",
              section: "IT 3-1",
              room: "ACCRE"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "ITEC 105",
              section: "IT 3-1",
              room: "CL 5"
            },
          ],
          sunday: [],
        }
      },
    ],
    evaluation_scores: [4.76, 4.51, null, 4.12],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Established effective systems and standards in computer laboratory management to improve teaching strategies.",
          "Attended relevant seminars and training related to Information Technology."
        ],
        "2025": [
          "Established effective systems and standards in computer laboratory management to improve teaching strategies.",
          "Attended relevant seminars and training related to Information Technology.",
          "Stayed updated with new and emerging technologies to ensure the integration of the latest tools, software, and methodologies in both laboratory operations and ICT instruction."
        ],
        "2026": [
          "Continue to Establish an effective systems and standards in computer laboratory management and to improve teaching strategies",
          "Continue to Attend relevant seminars and training related to Information Technology.",
          "Staying updated with new and emerging technologies to ensure the integration of the latest tools, software, and methodologies in both laboratory operations and ICT instruction."
        ],
        "2027": [
          "Continue to Establish an effective systems and standards in computer laboratory management and to improve teaching strategies",
          "Continue to Attend relevant seminars and training related to Information Technology.",
          "Staying updated with new and emerging technologies to ensure the integration of the latest tools, software, and methodologies in both laboratory operations and ICT instruction."
        ],
        "2028": [
          "Continue to Establish an effective systems and standards in computer laboratory management and to improve teaching strategies",
          "Continue to Attend relevant seminars and training related to Information Technology.",
          "Staying updated with new and emerging technologies to ensure the integration of the latest tools, software, and methodologies in both laboratory operations and ICT instruction."
        ],
      },
      loading: {
        "2024": [
          "Network Fundamentals",
          "Network Management"
        ],
        "2025": [
          "Network Fundamentals",
          "Network Management"
        ],
        "2026": [
          "Network Fundamentals",
          "Network Management"
        ],
        "2027": [
          "Network Fundamentals",
          "Network Management"
        ],
        "2028": [
          "Network Fundamentals",
          "Network Management"
        ],
      },
      research: {
        "2024": [
          "Guide students with their research development.",
          "Serve as Technical Critic or panelist in undergraduate capstone/thesis projects."
        ],
        "2025": [
          "Guide students with their research development.",
          "Serve as Technical Critic or panelist in undergraduate capstone/thesis projects."
        ],
        "2026": [
          "Serve as Technical Critic or panelist in undergraduate capstone/thesis projects."
        ],
        "2027": [
          "Serve as Technical Critic or panelist in undergraduate capstone/thesis projects.",
          "Serve as Adviser in undergraduate capstone/thesis projects."
        ],
        "2028": [
          "Serve as Technical Critic or panelist in undergraduate capstone/thesis projects.",
          "Serve as Adviser in undergraduate capstone/thesis projects."
        ],
      },
      extensions: {
        "2024": [
          "Support extension activities and programs",
          "Assist and provide the equipment and materials needed for extension activities"
        ],
        "2025": [
          "Support extension activities and programs",
          "Assist and provide the equipment and materials needed for extension activities"
        ],
        "2026": [
          "Support extension activities and programs",
          "Assist and provide the equipment and materials needed for extension activities"
        ],
        "2027": [
          "Support extension activities and programs",
          "Assist and provide the equipment and materials needed for extension activities"
        ],
        "2028": [
          "Support extension activities and programs",
          "Assist and provide the equipment and materials needed for extension activities"
        ],
      }
    }
  },
  //Julios Mojas
  {
    first_name: "Julios",
    last_name: "Mojas",
    name: "Julios M. Mojas",
    designation: "Instructor I",
    image: "/images/mojas.JPG",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      url: "https://drive.google.com/file/d/1tblDO1MXNqwooST1lts8t_-XQKKCq1Lq/view?usp=drive_link"
    },],
    tor: [{
      name: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      url: "https://drive.google.com/file/d/153JADjzVYIdLU9ZpBHgW8Z7FrFBKJqpY/view?usp=drive_link"
    },],
    resume: [{
      url: "https://drive.google.com/file/d/1uvX97ogxkKL2uavAOeKdIk26H-gWmMp4/view?usp=drive_link"
    },],
    certificates:
      [{
        name: "DCS RESEARCH COLLOQUIUM 2024 - CAVITE STATE UNIVERSITY - BACOOR",
        url: "https://drive.google.com/file/d/1RRujWOYRHKWoYXDaDwDv-4bVqe6rltLe/view?usp=drive_link"
      },
      {
        name: "1ST INTERNATIONAL RESEARCH CONFERENCE ON SUSTAINABLE DEVELOPMENT 2024",
        url: "https://drive.google.com/file/d/1NuCSTpagn6qtvAsVgJKbi0hqDU5IqtCO/view?usp=drive_link"
      },
      {
        name: "ICT PROJECT MANAGEMENT - DICT",
        url: "https://drive.google.com/file/d/1HW_Eho_7eXo9oHrT680zxnbpe5Y0u523/view?usp=drive_link"
      },
      {
        name: "RESPONSIBLE RESEACH: BALANCING ARTIFICIAL INTELLIGENCE AND ETHICS - ISTREL",
        url: "https://drive.google.com/file/d/1Kc-_Tq1SKDcwmlGhSsXt8V-Jl7ORaIyQ/view?usp=drive_link"
      },
      {
        name: "SOFTWARE DEVELOPMENT AND DESIGN THINKING - DICT",
        url: "https://drive.google.com/file/d/1yuf_b5qEWDe5IHQrfMWBUxNjbIMFyl1b/view?usp=drive_link"
      },
      {
        name: "SEMINAR-WORKSHOP ON MODULE DEVELOPMENT AND PUBLICATION - CAVITE STATE UNIVERSITY - BACOOR",
        url: "https://drive.google.com/file/d/1a9xzBfNAljx0shN1taI5B1txc3DpebNO/view?usp=drive_link"
      },
      {
        name: "IN2ITION 2024: 3RD PHYIGF - SOUTHVILLE INTERNATIONAL SCHOOL AND COLLEGES",
        url: "https://drive.google.com/file/d/1p2Aq0gCyG_-RLpLIVT8xmKNDIVrNzsmh/view?usp=drive_link"
      },
      {
        name: "STUDENT RESEARCH SYMPOSIUM - CAVITE STATE UNIVERSITY - MAIN",
        url: "https://drive.google.com/file/d/1WrvHBRNgB3v0AFBsHSd2J3d5D4rG7wJM/view?usp=drive_link"
      },
      {
        name: "STUDENT RESEARCH SYMPOSIUM (SECOND PLACE) - CAVITE STATE UNIVERSITY - MAIN",
        url: "https://drive.google.com/file/d/1rW0_c2oVOBLksNEvfo3oON-p2sMvK15N/view?usp=drive_link"
      },
      {
        name: "3RD ALCUCOA NATIONAL RESEARCH CONFERENCE",
        url: "https://drive.google.com/file/d/1FgBcF-Jt56eVd30ittHrYmmPntgbeROM/view?usp=drive_link"
      },
      {
        name: "3RD ALCUCOA NATIONAL RESEARCH CONFERENCE (BEST PAPER PRESENTATION)",
        url: "https://drive.google.com/file/d/1ILphwXXv9mZBHfXzuI4SudCE5m7RgSpB/view?usp=drive_link"
      },
      {
        name: "9TH GENDER AND DEVELOPMENT RESEARCH CONFERENCE - CAVITE STATE UNIVERSITY - MAIN",
        url: "https://drive.google.com/file/d/1JxZNVNzwqhlCVcHz1p8QKUXW3Zj2XlqY/view?usp=drive_link"
      },
      {
        name: "1ST INTERNATIONAL RESEARCH CONFERENCE ON SUSTAINABLE DEVELOPMENT 2024",
        url: "https://drive.google.com/file/d/1jJGmRauyzmJO4_EVTHFriNgwxaforDZC/view?usp=drive_link"
      },
      {
        name: "COMPUTER SYSTEM SERVICING - TESDA",
        url: "https://drive.google.com/file/d/1CQFvsFs9xzZQTy7pI-mRJXgc7heYmUXD/view?usp=drive_link"
      },],
    speaking_engagements: [{
      name: "STUDENT RESEARCH SYMPOSIUM - CAVITE STATE UNIVERSITY - MAIN",
      url: "https://drive.google.com/file/d/1WrvHBRNgB3v0AFBsHSd2J3d5D4rG7wJM/view?usp=drive_link"
    }],
    schedule: [
      //No Record - 1st SEM  22-23
      //No Record - 2nd SEM  22-23
      //No Record - 1st SEM  23-24
      //No Record - 2nd SEM  24-25
      { //2nd 24-25
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            {
              time: "7:00 AM - 8:30 AM",
              subject: "COSC 90",
              section: "CS 3-5",
              room: "ROOM 107"
            },
            {
              time: "8:30 AM - 10:00 AM",
              subject: "GNED 09",
              section: "CS 3-1",
              room: "ROOM 109"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "COSC 90",
              section: "CS 3-6",
              room: "ROOM 203"
            },
            {
              time: "2:00 PM - 3:30 PM",
              subject: "GNED 09",
              section: "CS 3-3",
              room: "ROOM 309"
            },
          ],
          tuesday: [],
          wednesday: [
            {
              time: "12:00 PM - 2:00 PM",
              subject: "COSC 65",
              section: "CS 2-4",
              room: "ROOM 101"
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "CONSULTATION",
              section: null,
              room: "FACULTY"
            },
            {
              time: "4:00 PM - 5:30 PM",
              subject: "GNED 09",
              section: "CS 3-3",
              room: "ROOM 109"
            },
          ],
          thursday: [
            {
              time: "9:00 AM - 12:00 PM",
              subject: "COSC 65",
              section: "CS 2-4",
              room: "CL 3"
            },
            {
              time: "12:30 PM - 2:00 PM",
              subject: "GNED 09",
              section: "CS 1-3",
              room: "ROOM 109"
            },
          ],
          friday: [],
          saturday: [
            {
              time: "7:00 AM - 8:30 AM",
              subject: "COSC 90",
              section: "CS 3-5",
              room: "AUDI"
            },
            {
              time: "12:30 - 2:00 PM",
              subject: "GNED 09",
              section: "CS 3-2",
              room: "ROOM 204"
            },
            {
              time: "5:00 PM - 8:00 PM",
              subject: "COSC 90",
              section: "CS 3-4",
              room: "ROOM 203"
            }
          ],
          sunday: [],
        }
      },
    ],
    evaluation_scores: [null, 4.39],
    evaluation_labels: ["1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Begin laying the groundwork as a full-time instructor by aligning teaching practices with department and university goals. My aim this year is to establish credibility, connect with students, and integrate myself into the academic community.",
          "Utilize Student Evaluation of Teachers (SET) results to reflect on teaching style and continuously improve instructional strategies. Incorporate feedback into lesson planning and delivery for better engagement and clarity.",
          "Participate in workshops on classroom management, digital pedagogy, and outcome-based education to refine your teaching techniques and stay current with modern teaching trends in Computer Science"
        ],
        "2025": [
          "Joined a Research Council or department research cluster to support and initiate collaborative projects.",
          "Continue professional growth by participating in training focused on instructional material development, teaching innovation, and empowering students in the classroom.",
          "Attended Module writing workshops, capability-building seminars, and proposal development trainings organized by CvSU or CHED.", "Participated in panel review, documentation, or mentoring in undergraduate research and system project courses."
        ],
        "2026": [
          "Enroll in a Master’s program in Computer Science to strengthen theoretical and technical competencies.",
          "Continue mentoring undergraduate students and co-developing papers with research advisors."
        ],
        "2027": [
          "Continue Master’s studies and complete coursework while managing teaching load.",
          "Actively participate in academic conferences, workshops, and seminars in CS/IT.",
          "Publish or co-author at least one peer-reviewed article in a journal or indexed conference.",
          "Collaborate on interdepartmental or inter-campus projects."
        ],
        "2028": [
          "Continue Master’s studies and complete coursework while managing teaching load.",
          "Actively participate in academic conferences, workshops, and seminars in CS/IT.",
          "Publish or co-author at least one peer-reviewed article in a journal or indexed conference.",
          "Collaborate on interdepartmental or inter-campus projects."
        ],
      },
      loading: {
        "2024": [
          "Digital Logic Design",
          "Object Oriented Programming"
        ],
        "2025": [
          "Life and Works of Rizal",
          "Design And Analysis of Algorithms",
          "Architecture and Organization",
          "Practicum"
        ],
        "2026": [
          "Any courses related to my specialization.",
          "Familiarity boosts confidence, establishing credibility among students and peers."
        ],
        "2027": [
          "Familiarity helps refine lesson plans, activities, and assessments based on past experiences."
        ],
        "2028": [
          "Long-term handling allows room for experimentation, feedback-based improvements, and scholarly contributions."
        ],
      },
      research: {
        "2024": [
          "Begin integrating research practices into my instruction, especially in system development and documentation.",
          "Attend basic research seminars and workshops to strengthen my understanding of research ethics, methodology, and proposal writing.",
          "Contribute to research efforts by assisting in documentation, mentoring students, or participating in proposal reviews.",
          "Begin building a personal roadmap aligned with DCS and institutional thrusts"
        ],
        "2025": [
          "Become an active member of the University Research Council or similar institutional body.",
          "Mentor students in thesis and capstone research, helping them develop quality outputs suitable for presentation or publication."
        ],
        "2026": [
          "Participate in research capability-building sessions and proposal writing workshops.",
          "Develop a collaborative Faculty research proposal aligned with Computer Science themes",
          "Assist in collaborative faculty-student research initiatives within the department."
        ],
        "2027": [
          "Co-author or lead at least one research paper for submission to a peer-reviewed journal or indexed conference.",
          "Join research consortiums or academic networks in the field of IT and CS",
          "Present thesis-related progress or system-based research at a regional or National forum."
        ],
        "2028": [
          "Produce a completed Master’s thesis that can be adapted into a journal article or case study.",
          "Lead a collaborative research project, preferably involving both students and faculty.",
          "Initiate or contribute to research publications or policy papers that address real-world problems in computer science or education."
        ],
      },
      extensions: {
        "2024": [
          "Participate in department-led extension activities focused on digital literacy, basic programming, or IT awareness in nearby communities or schools."
        ],
        "2025": [
          "Attend seminars and training on community-based project development and impact assessment."
        ],
        "2026": [
          "I will propose and design an extension activity aligned with my specialization, such as basic cybersecurity, mobile app literacy, or digital productivity tools."
        ],
        "2027": [
          "Collaborate with student organizations to integrate outreach into student-led activities and system development projects."
        ],
        "2028": [
          "Explore partnerships with local schools or barangays to sustain community engagement."
        ],
      }
    }
  },
  //Richard Ongayo
  {
    first_name: "Richard",
    last_name: "Ongayo",
    name: "Ridhard D. Ongayo",
    designation: "Instructor I",
    image: "/images/ongayo.JPG",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN ELECTRONICS AND COMMUNICATIONS ENGINEERING",
      url: "https://drive.google.com/file/d/1YVgISKruS4SCtI-b9rzhVQ8iZ8BZhTVi/view?usp=drive_link"
    },],
    // masters_diploma: {name:"", url:""},
    // tor: {name:"", url:""},
    // resume: {url:""},
    // certificates: [{name:"", url:""},],
    schedule: [
      //No Record - 1st SEM  22-23
      //No Record - 2nd SEM  22-23
      { //1st 23-24
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "MATH 01",
              section: "CS 2-1",
              room: "ROOM 302"
            },
          ],
          wednesday: [],
          thursday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "MATH 01",
              section: "CS 2-2",
              room: "ROOM 302"
            },
          ],
          friday: [],
          saturday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "MATH 01",
              section: "CS 2-4",
              room: "ROOM 302"
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "MATH 01",
              section: "CS 2-5",
              room: "ROOM 302"
            },
            {
              time: "11:00 AM - 1:00 PM",
              subject: "MATH 01",
              section: "CS 2-3",
              room: "ROOM 302"
            },
            {
              time: "2:00 AM - 3:00 PM",
              subject: "MATH 01",
              section: "CS 2-1 ASYNC",
              room: null
            },
            {
              time: "3:00 AM - 4:00 PM",
              subject: "MATH 01",
              section: "CS 2-2 ASYNC",
              room: null
            },
            {
              time: "4:00 AM - 5:00 PM",
              subject: "MATH 01",
              section: "CS 2-3 ASYNC",
              room: null
            },
            {
              time: "5:00 AM - 6:00 PM",
              subject: "MATH 01",
              section: "CS 2-4 ASYNC",
              room: null
            },
            {
              time: "6:00 AM - 7:00 PM",
              subject: "MATH 01",
              section: "CS 2-5 ASYNC",
              room: null
            },
          ],
          sunday: [],
        }
      },
      { //2nd 23-24
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "MATH 2",
              section: "CS 2-2",
              room: "ROOM 303"
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "MATH 2",
              section: "CS 2-2",
              room: null
            },
          ],
          tuesday: [],
          wednesday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "MATH 2",
              section: "CS 2-3",
              room: "ROOM 303"
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "MATH 2",
              section: "CS 2-3",
              room: null
            },
          ],
          thursday: [],
          friday: [],
          saturday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "MATH 2 ASYNC",
              section: "CS 2-1",
              room: null
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "GNED 03 ASYNC",
              section: "CS 1-4",
              room: null
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "GNED 03",
              section: "CS 1-5",
              room: "ROOM 303"
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "GNED 03 ASYNC",
              section: "CS 1-5",
              room: null
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "MATH 2",
              section: "CS 2-1",
              room: "ROOM 301"
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "GNED 03",
              section: "CS 1-4",
              room: "ROOM 303"
            },
          ],
          sunday: [],
        }
      },
      { //2nd 24-25
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "MATH 2",
              section: "CS 3-6",
              room: "ROOM 203"
            },
          ],
          tuesday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "MATH 2",
              section: "CS 3-4",
              room: "ROOM 203"
            },
          ],
          wednesday: [],
          thursday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "MATH 4",
              section: "CS 3-5",
              room: "ROOM 204"
            },
          ],
          friday: [],
          saturday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "MATH 4",
              section: "CS 3-4",
              room: "ROOM 203"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "MATH 4",
              section: "CS 3-5",
              room: "ROOM 203"
            },
            {
              time: "2:00 PM - 5:00 PM",
              subject: "MATH 4",
              section: "CS 3-6",
              room: "ROOM 203"
            },
          ],
          sunday: [],
        }
      },
    ],
    evaluation_scores: [4.59, 4.82, null, 4.77],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Acquired relevant skills aligned with the course by enrolling in certified online training programs.",
          "Attended development programs related to learning styles, or curriculum development."
        ],
        "2025": [
          "Continue Masters Degree"
        ],
        "2026": [
          "To earn Masters Degree"
        ],
        "2027": [
          "To continue in Doctorate Degree"
        ],
        "2028": [
          "To earn in Doctorate Degree"
        ],
      },
      loading: {
        "2024": [
          "Object-oriented Programming",
          "System Integration and Architecture",
          "Advanced Database Management System",
          "Web Systems and Technologies ",
          "Computer Programming1, 2,3."
        ],
        "2025": [
          "Object-oriented Programming",
          "System Integration and Architecture",
          "Advanced Database Management System",
          "Web Systems and Technologies ",
          "Computer Programming1, 2,3."
        ],
        "2026": [
          "Any Major /Minor Subject BSIT/BSCS Course"
        ],
        "2027": [
          "Any Major /Minor Subject BSIT/BSCS Course"
        ],
        "2028": [
          "Any Major /Minor Subject BSIT/BSCS Course"
        ],
      },
      research: {
        "2024": [
          "To attend research seminars"
        ],
        "2025": [
          "To provide mentorship and support to students throughout their research/thesis work."
        ],
        "2026": [
          "To provide mentorship and support to students throughout their research/thesis work."
        ],
        "2027": [
          "To conduct and publish applied research in computing studies"
        ],
        "2028": [
          "To conduct and publish applied research in computing studies"
        ],
      },
      extensions: {
        "2024": [
          "To Engaged in various extension activities and programs that benefits the communities"
        ],
        "2025": [
          "To Engaged in various extension activities and programs that benefits the communities"
        ],
        "2026": [
          "To Engaged in various extension activities and programs that benefits the communities"
        ],
        "2027": [
          "To participate in various extension activities and programs"
        ],
        "2028": [
          "To participate in various extension activities and programs"
        ],
      }
    }
  },
  //Aida Penson
  {
    first_name: "Aida",
    last_name: "Penson",
    name: "Aida M. Penson",
    designation: "Instructor I",
    image: "/images/penson.jpg",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN ELECTRONICS AND COMMUNICATIONS ENGINEERING",
      url: "https://drive.google.com/file/d/1MycGv2JX2wvev1JTu97Kgou8UAuez66n/view?usp=drive_link"
    },],
    // masters_diploma: {name:"", url:""},
    tor: [{
      name: "BACHELOR OF SCIENCE IN ELECTRONICS AND COMMUNICATIONS ENGINEERING",
      url: "https://drive.google.com/file/d/1KZTe_2eXI5M7QghQBHSOm-nPICfP1X8y/view?usp=drive_link"
    },],
    resume: {
      url: "https://drive.google.com/file/d/1W1vPP_9rrwvMwpTfag6yNjXQroxO7l19/view?usp=drive_link"
    },
    certificates: [
      {
        name: "FUNDAMENTALS OF STATISTICS WITH MICROSOFT EXCEL - DATA ANALYTICS PHILIPPINES",
        url: "https://drive.google.com/file/d/1twkaAPPUOVDi2bdsBppF26aqNXG87nst/view?usp=drive_link"
      },
      {
        name: "INTRODUCTION TO DATA PRIVACY - DICT",
        url: "https://drive.google.com/file/d/1II2CP67LcM-zSgMKB2ZY4LzE23KieYFt/view?usp=drive_link"
      },],

    schedule: [
      { //1st 22-23
        semesterName: "1st Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "COSC 55",
              section: "CS 2-2",
              room: null
            },
          ],
          tuesday: [
            {
              time: "5:00 PM - 8:00 PM",
              subject: "COSC 50",
              section: "CS 1-7",
              room: null
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "COSC 50",
              section: "IT 1-6",
              room: null
            },
          ],
          wednesday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "COSC 55",
              section: "CS 2-1",
              room: null
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "COSC 55",
              section: "CS 2-3",
              room: null
            },
          ],
          thursday: [
            {
              time: "5:00 PM - 8:00 PM",
              subject: "COSC 50",
              section: "CS 1-6",
              room: null
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "COSC 55",
              section: "CS 2-3",
              room: null
            },
          ],
          friday: [
            {
              time: "5:00 PM - 6:00 PM",
              subject: "COSC 55",
              section: "CS 2-1",
              room: null
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "COSC 55",
              section: "CS 2-2",
              room: null
            },
          ],
          saturday: [
            {
              time: "11:00 AM - 1:00 PM",
              subject: "CONSULTATION HOURS",
              section: null,
              room: "FACULTY"
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "COSC 50",
              section: "IT 1-6",
              room: null
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "COSC 50",
              section: "IT 1-7",
              room: null
            },
          ],
          sunday: [],
        }
      },
      { //2nd 22-23
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "5:00 PM - 6:00 PM",
              subject: "MATH 4 (LEC)",
              section: "CS 3-1",
              room: "ROOM 205"
            },
            {
              time: "6:00 PM - 9:00 PM",
              subject: "MATH 4 (LEC)",
              section: "CS 3-1",
              room: "ROOM 305"
            },
          ],
          tuesday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "COSC 110 (LEC)",
              section: "CS 4-1",
              room: "ROOM 302"
            },
          ],
          wednesday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "MATH 2",
              section: "CS 2-1",
              room: "ROOM 303"
            },
          ],
          thursday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "MATH 2",
              section: "CS 2-3",
              room: "ROOM 304"
            },
          ],
          friday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "COSC 110 (LAB)",
              section: "CS 4-1",
              room: "ROOM 302"
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "COSC 110",
              section: "IT 2-6",
              room: "ROOM 302"
            },
          ],
          saturday: [
            {
              time: "8:00 AM - 10:00 AM",
              subject: "CONSULTATION HOURS",
              section: "CS 2-2",
              room: "ROOM 302"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "CONSULTATION HOURS",
              section: null,
              room: "FACULTY"
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "MATH 2",
              section: "CS 2-1",
              room: null
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "MATH 2 (ASYNC)",
              section: "CS 2-1",
              room: null
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "MATH 2 (ASYNC)",
              section: "CS 2-3",
              room: null
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "MATH 2 (ASYNC)",
              section: "CS 2-2",
              room: null
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "MATH 2 (ASYNC)",
              section: "IT 2-6",
              room: null
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "MATH 2 (ASYNC)",
              section: "CS 3-1",
              room: null
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "MATH 2 (ASYNC)",
              section: "CS 3-1",
              room: null
            },
          ],
          sunday: [],
        }
      },
      { //1st 23-24
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "COSC 55",
              section: "CS 2-3",
              room: "ROOM 302"
            },
          ],
          tuesday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "COSC 55",
              section: "CS 2-2",
              room: "ROOM 302"
            },
          ],
          wednesday: [],
          thursday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "COSC 55",
              section: "CS 2-1",
              room: "ROOM 301"
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "COSC 55",
              section: "CS 2-4",
              room: "ROOM 301"
            },
          ],
          friday: [
            {
              time: "5:00 PM - 6:00 PM",
              subject: "COSC 55 ASYNC",
              section: "CS 2-3",
              room: null
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "COSC 55 ASYNC",
              section: "CS 2-4",
              room: null
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "COSC 55 ASYNC",
              section: "CS 2-5",
              room: null
            },
          ],
          saturday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "COSC 55",
              section: "CS 2-5",
              room: "ROOM 305"
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "COSC 55 ASYNC",
              section: "CS 2-1",
              room: null
            },
            {
              time: "10:00 AM - 11:10 AM",
              subject: "COSC 55 ASYNC",
              section: "CS 2-2",
              room: null
            },
          ],
          sunday: [],
        }
      },
      { //2nd 23-24
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "MATH 4",
              section: "CS 3-1",
              room: "ROOM 301"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "MATH 4",
              section: "CS 3-1",
              room: null
            },
          ],
          tuesday: [
            {
              time: "5:00 PM - 6:00 PM",
              subject: "COSC 110 (LEC) ASYNC",
              section: "CS 4-1",
              room: "ROOM 302"
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "COSC 110 ASYNC",
              section: "CS 4-1",
              room: null
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "GNED 06",
              section: "CS 1-5",
              room: "CL 4"
            },
          ],
          wednesday: [
            {
              time: "5:00 PM - 6:00 PM",
              subject: "MATH 4",
              section: "CS 3-1",
              room: "ROOM 302"
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "MATH 4",
              section: "CS 3-2",
              room: "ROOM 302"
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "MATH 4 (LEC) ASYNC",
              section: "CS 3-1",
              room: null
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "MATH 4 (LAB) ASYNC",
              section: "CS 3-1",
              room: null
            },
          ],
          thursday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "COSC 110",
              section: "CS 4-1",
              room: "ROOM 301"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "MATH 4 (LEC) ASYNC",
              section: "CS 3-2",
              room: null
            },
          ],
          friday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "MATH 4",
              section: "CS 3-2",
              room: "ROOM 301"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "MATH 4 (LEC) ASYNC",
              section: "CS 3-2",
              room: null
            },
          ],
          saturday: [],
          sunday: [],
        }
      },
      { //2nd 24-25
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            {
              time: "5:00 PM - 6:30 PM",
              subject: "COSCS 110",
              section: "CS 4-1",
              room: "ROOM 201"
            },
            {
              time: "6:30 - 8:00 PM PM",
              subject: "COSCS 110",
              section: "CS 4-3",
              room: "ROOM 201"
            },
          ],
          tuesday: [],
          wednesday: [
            {
              time: "5:00 PM - 6:30 PM",
              subject: "COSCS 110",
              section: "CS 4-1",
              room: "ROOM 201"
            },
            {
              time: "6:30 - 8:00 PM",
              subject: "COSCS 110",
              section: "CS 4-2",
              room: "ROOM 201"
            },
          ],
          thursday: [
            {
              time: "5:00 PM - 6:30 PM",
              subject: "COSCS 110",
              section: "CS 4-2",
              room: "ROOM 201"
            },
            {
              time: "6:30 - 8:00 PM",
              subject: "COSCS 110",
              section: "CS 4-3",
              room: "ROOM 201"
            },
          ],
          friday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "COSCS 110",
              section: "CS 4-1",
              room: "ROOM 201"
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "COSCS 110",
              section: "CS 4-2",
              room: "ROOM 109"
            },
            {
              time: "11:00 AM - 1:00 PM",
              subject: "COSCS 110",
              section: "CS 4-3",
              room: "ROOM 109"
            },
          ],
          saturday: [],
          sunday: [],
        }
      },
    ],

    evaluation_scores: [null, 4.41, null, 4.21],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Attended relevant trainings and seminars aligned with and beyond my field of specialization."
        ],
        "2025": [
          "Continued attending relevant training and seminars aligned with and beyond my field of specialization.",
          "Pursued further studies by enrolling in a Master's program to complete my MAEd in Mathematics."
        ],
        "2026": [
          "Continue participating in relevant training and seminars both within and beyond my area of specialization.",
          "Will finish my MAEd in Mathematics."
        ],
        "2027": [
          "Enroll in Doctorate degree",
          "Continue participating in relevant training and seminars both within and beyond my area of specialization."
        ],
        "2028": [
          "Continue and complete doctorate program",
          "Continue participating in relevant training and seminars both within and beyond my area of specialization."
        ],
      },
      loading: {
        "2024": [
          "Any Mathematics subjects and General Education"
        ],
        "2025": [
          "Any Mathematics subjects and General Education"
        ],
        "2026": [
          "Any Mathematics subjects and General Education"
        ],
        "2027": [
          "Any Mathematics subjects and General Education"
        ],
        "2028": [
          "Any Mathematics subjects and General Education"
        ],
      },
      research: {
        "2024": [
          "One of the proponents of a Faculty Study"
        ],
        "2025": [
          "One of the proponents of a Faculty Study",
          "Be the one statistician in campus"
        ],
        "2026": [
          "Present a study for Math Deficiency of a study for a research and extension"
        ],
        "2027": [

          "One of the co-author of any study for research and extension"
        ],
        "2028": [
          "Continue to a research program"
        ],
      },
      extensions: {
        "2024": [],
        "2025": [],
        "2026": [
          "Engage and collaborate in the campus extension program"
        ],
        "2027": [
          "Engage and collaborate in the campus extension program"
        ],
        "2028": [
          "Engage and collaborate in the campus extension program"
        ],
      }
    }
  },
  //Nestor Migule Pimentel
  {
    first_name: "Nestor Miguel",
    last_name: "Pimentel",
    name: "Nestor Miguel T. Pimentel",
    designation: "Instructor I",
    image: "/images/pimentel.jpg",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/11zHyrLDN6jCzLsKL5FRyVD3VrU0cdmDo/view?usp=drive_link"
    },],
    // masters_diploma: {name:"", url:""},
    tor: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/10gyOQqhCCoUAg5od1hpYtFE8X9sgPQSG/view?usp=drive_link"
    },],
    resume: {
      url: "https://drive.google.com/file/d/1_Gun1auCL0MZ_HQbMCunrsQb_5beMCtM/view?usp=drive_link"
    },
    certificates: [
      {
        name: "2ND IGNITE IT CONVENTION - IGNITE",
        url: "https://drive.google.com/file/d/1d25VWC5DvAaASqMi6Pir1kAUfmxs2D8j/view?usp=drive_link"
      },
      {
        name: "TRAIN THE TRAINER PROGRAM WORKSHOP FOR SAP BUSINESS ONE - STI COLLEGE",
        url: "https://drive.google.com/file/d/1FsT55uPq_oyJLhqEMttDgX-AV2T8BcM5/view?usp=drive_link"
      },
      {
        name: "CONDUCT COMPETENCY ASSESSMENT",
        url: "https://drive.google.com/file/d/1pCGI0sWdfWNhGxqYOzHxQOxG156-a7z1/view?usp=drive_link"
      },
      {
        name: "DELIVER TRAINING SESSION",
        url: "https://drive.google.com/file/d/1HAL-b_4hqnsiX_Wg6U1lcjJxC56M21U6/view?usp=drive_link"
      },
      {
        name: "PHILIPPINE TVET TRAINERS QUALIFICATION SYSTEMS",
        url: "https://drive.google.com/file/d/10WFtqER6VbWVwC5yySkQQ7UmACVijxY7/view?usp=drive_link"
      },],
    // speaking_engagements: [{name:"", url:""},],

    schedule: [
      //No Record - 1st SEM  22-23
      //No Record - 2nd SEM  22-23
      { //1st 23-24
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [
            {
              time: "10:00 AM - 11:00 AM",
              subject: "COSC 101 ASYNC",
              section: "CS 3-3",
              room: null
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "COSC 101 ASYNC",
              section: "CS 3-2",
              room: null
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "DCIT 23",
              section: "CS 2-1",
              room: "CL 1"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "COSC 101 ASYNC",
              section: "CS 3-3",
              room: "ROOM 305"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 23",
              section: "CS 2-3",
              room: "CL 1"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "DCIT 23",
              section: "CS 3-2",
              room: "ROOM 303"
            },
          ],
          thursday: [
            {
              time: "7:00 AM - 8:00 AM",
              subject: "DCIT 23 (LEC)",
              section: "CS 2-2",
              room: "CL 1"
            },
            {
              time: "7:00 AM - 8:00 AM",
              subject: "DCIT 23",
              section: "CS 2-2",
              room: "CL 1"
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 23",
              section: "CS 2-1",
              room: "ROOM 303"
            },
            {
              time: "11:00 AM - 1:00 PM",
              subject: "COSC 101",
              section: "CS 2-2",
              room: "CL 3"
            },
          ],
          friday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 23",
              section: "CS 2-2",
              room: "CL 1"
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 23 (LAB) ASYNC",
              section: "CS 2-1",
              room: null
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 23",
              section: "CS 2-1",
              room: "CL 1"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "COSC 101 (LAB) ASYNC",
              section: "CS 3-3",
              room: null
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "COSC 101 (LAB) ASYNC",
              section: "CS 3-3",
              room: "CL 4"
            },
          ],
          saturday: [
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 23 (LAB) ASYNC",
              section: "CS 2-1",
              room: null
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 23 (LAB) ASYNC",
              section: "CS 2-2",
              room: null
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "DCIT 23 (LAB) ASYNC",
              section: "CS 2-3",
              room: null
            },
            {
              time: "3:00 PM - 6:00 PM",
              subject: "DCIT 23 (LAB) ASYNC",
              section: "CS 3-2",
              room: null
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "DCIT 23",
              section: "CS 2-3",
              room: "ROOM 301"
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "DCIT 23",
              section: "CS 2-3",
              room: "CL 1"
            },
          ],
          sunday: [],
        }
      },
      { //2nd 23-24
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "ITEC 70",
              section: "IT 2-7",
              room: "CL 4"
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "COSC 95",
              section: "CS 3-1",
              room: "ROOM 301"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "COSC 95",
              section: "CS 3-3",
              room: "ROOM 301"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "DCIT 23",
              section: "CS 1-4",
              room: "CL 3"
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "DCIT 23",
              section: "CS 1-4",
              room: "CL 3"
            },
          ],
          tuesday: [
            {
              time: "8:00 AM - 10:00 AM",
              subject: "DCIT 23 (LAB) ASYNC",
              section: "CS 1-4",
              room: null
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "CONSULTATION HOURS",
              section: null,
              room: "FACULTY"
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "DCIT 23 (LAB) ASYNC",
              section: "IT 1-1",
              room: null
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 23",
              section: "IT 1-1",
              room: "CL 3"
            },
            {
              time: "4:00 PM - 6:00 PM",
              subject: "DCIT 23",
              section: "IT 1-1",
              room: "CL 3"
            },
          ],
          wednesday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "ITEC 70",
              section: "IT 2-7",
              room: "ROOM 209"
            },
            {
              time: "8:00 AM - 9:00 AM",
              subject: "COSC 95",
              section: "CS 3-2",
              room: "ROOM 303"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "COSC 95 ASYNC",
              section: "CS 3-2",
              room: null
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "DCIT 23",
              section: "IT 1-1",
              room: "CL 4"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "DCIT 23",
              section: "IT 1-4",
              room: "CL 2"
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "ITEC 70 (LAB) ASYNC",
              section: "IT 2-7",
              room: null
            },
          ],
          thursday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "COSC 95 ASYNC",
              section: "CS 3-1",
              room: null
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "COSC 95 ASYNC",
              section: "CS 3-3",
              room: null
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "ITEC 70 (LEC) ASYNC",
              section: "IT 2-7",
              room: null
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      { //2nd 24-25
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "DCIT 23",
              section: "IT 1-3",
              room: "CL 5"
            },
            {
              time: "9:00 AM - 1:00 PM",
              subject: "DCIT 23",
              section: "IT 1-4",
              room: "CL 5"
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "COSC 65",
              section: "CS 2-3",
              room: "ROOM 101"
            },
          ],
          tuesday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 23",
              section: "IT 1-1",
              room: "AUDI"
            },
            {
              time: "9:00 AM - 10:30 AM",
              subject: "DCIT 23",
              section: "IT 1-1",
              room: "ROOM 201"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 23",
              section: "IT 1-3",
              room: "CL 5"
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "CONSULTATION HOURS",
              section: null,
              room: "FACULTY"
            },
            {
              time: "5:00 PM - 8:00 PM",
              subject: "DCIT 23",
              section: "IT 1-3",
              room: "CL 5"
            },
          ],
          wednesday: [
            {
              time: "7:00 AM - 8:30 AM",
              subject: "ITEC 85",
              section: "CS 3-4",
              room: "ROOM 201"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 23",
              section: "IT 1-1",
              room: "CL 1"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 23",
              section: "IT 1-4",
              room: "CL 2"
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "DCIT 23",
              section: "IT 1-4",
              room: "ROOM 101"
            },
          ],
          thursday: [
            {
              time: "10:00 AM - 1:00 PM",
              subject: "DCIT 23",
              section: "IT 1-1",
              room: "CL 1"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "COSC 65",
              section: "CS 2-3",
              room: "CL 4"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
    ],

    evaluation_scores: [4.83, 4.68, 4.41, 4.35],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Updating Trainers Methodology Certificate 1 or Certificate of Competency in Conduct Competency Assessme",
          "Continous practice in OOP and multimedia."
        ],
        "2025": [
          "Continue professional development by re-enrolling in a Master’s degree program related to Computer Science or pursue Masters degree related to Information Technology or to the department of Computer Studies.",
          "Update seminar and training certificates earned from previous schools and industries that I can use and share to the department and to Cavite State University and its future endeavor."
        ],
        "2026": [
          "Continue professional development by enrolling in a Master’s degree program related to Computer Science or pursue Masters degree related to Information Technology or to the department of Computer Studies.",
          "Participating to new seminars and trainings and earning certificates so I can use and share to the future department and to Cavite State University."
        ],
        "2027": [
          "Continue professional development by enrolling in a Master’s degree program related to Computer Science or pursue Masters degree related to Information Technology or to the department of Computer Studies.",
          "Participating to new seminars and trainings so I can use and share to the future department and to Cavite State University."
        ],
        "2028": [
          "Graduate in Master’s degree program enrolled. And enhancing Web development and mobile application skills.",
          "Plan to take board licensure exams for Teachers for betterment of my career and to use and share to the Department of Computer Studies."
        ],
      },
      loading: {
        "2024": [
          "Introduction to Computing",
          "Human Computer Interaction",
          "Computer Graphics and Visual Computing"
        ],
        "2025": [
          "Computer Programming 1",
          "Discrete Structure 2",
          "Object Oriented Programming"
        ],
        "2026": [
          "Computer Programming 1",
          "Discrete Structure 2",
          "Object Oriented Programming"
        ],
        "2027": [
          "Computer Programming 1",
          "Discrete Structure 2",
          "Object Oriented Programming"
        ],
        "2028": [
          "Networks and Communications",
          "Design and Analysis of Algorithm"
        ],
      },
      research: {
        "2024": [
          "Present a proposal in research on Computer Department Studies. An Online development of Object Oriented trends and responsive in android phones",
          "Advising thesis related students in their research per group assigned in capstone A and B."
        ],
        "2025": [
          "Participate in seminar and proposal making in research on computer science course An Online development of Object Oriented trends and responsive in android phones."
        ],
        "2026": [
          "To continue in proposal making in research on Computer Department Studies."
        ],
        "2027": [
          "To conduct and publish research related to Computer Department Studies."
        ],
        "2028": [
          "Applying a publish research related to Computer Department Studies."
        ],
      },
      extensions: {
        "2024": [
          "Shared expertise in research on Computer Department Studies trends."
        ],
        "2025": [
          "Participate in extension programs organized at the campus level, especially those initiated by the department"
        ],
        "2026": [
          "Participate in extension programs organized at the campus level, especially those initiated by the department"
        ],
        "2027": [
          "To engage in extension programs organized at the campus level, especially those initiated by the department."
        ],
        "2028": [
          "To facilitate in extension programs organized at the campus level, especially those initiated by the department."
        ],
      }
    }
  },
  //JR Racadio
  {
    first_name: "Jay-Ar",
    last_name: "Racadio",
    name: "Jay-Ar A. Racadio",
    designation: "Instructor I",
    image: "/images/racadio.jpeg",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1nCFGl5mhhCo99GBlsrUvCv3BuP-_VAtA/view?usp=drive_link"
    },],
    // masters_diploma: {name:"", url:""},
    tor: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1Azf0IC2oiLqtec7M0_Edd6JONffKIPSI/view?usp=drive_link"
    },],
    resume: {
      url: "https://docs.google.com/document/d/1dFB9TS_jtSqFCrMOTWZQtVMzZPjocAKs/edit?usp=drive_link&ouid=102452445519148225886&rtpof=true&sd=true"
    },
    certificates: [
      {
        name: "COMPUTER PROGRAMMING III (INTERMEDIATE JAVA PROGRAMMING) - STI",
        url: "https://drive.google.com/file/d/1A3Y85q8rkoKEpwiguMhkcI0upi8ms4ID/view?usp=drive_link"
      },
      {
        name: "TRAINERS METHODOLOGY LEVEL 1 - TESDA",
        url: "https://drive.google.com/file/d/11o0VgaPJcUj_Cb6rvQREXjy0ZW2aVelg/view?usp=drive_link"
      },],
    // speaking_engagements: [{name:"", url:""},],
    schedule: [
      //No Record - 1st SEM  22-23
      //No Record - 2nd SEM  22-23
      { //1st 23-24
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 50",
              section: "IT 2-4",
              room: "CL 1"
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 50 (LAB) ASYNC",
              section: "IT 2-4",
              room: null
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "DCIT 50",
              section: "IT 2-4",
              room: "CL 2"
            },
          ],
          tuesday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "DCIT 50",
              section: "CS 2-1",
              room: "CL 1"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "ITEC 116",
              section: "IT 4-1",
              room: "CL 1"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "ITEC 116",
              section: "IT 4-1",
              room: "ROOM 305"
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "DCIT 50 ASYNC",
              section: "IT 2-4",
              room: null
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 50 ASYNC",
              section: "IT 2-5",
              room: null
            },
            {
              time: "4:00 PM - 6:00 PM",
              subject: "ITEC 116",
              section: "IT 4-2",
              room: "CL 1"
            },
          ],
          wednesday: [
            {
              time: "9:00 AM - 11:00 AM",
              subject: "CONSULTATION HOURS",
              section: null,
              room: "FACULTY"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 116",
              section: "IT 4-2",
              room: "ROOM 302"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 50 ASYNC",
              section: "CS 2-1",
              room: null
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "ITEC 116 (LEC) ASYNC",
              section: "IT 4-2",
              room: null
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "ITEC 116 (LEC) ASYNC",
              section: "IT 4-3",
              room: null
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "ITEC 116 (LEC) ASYNC",
              section: "IT 4-2",
              room: null
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "ITEC 116 (LAB) ASYNC",
              section: "IT 4-1",
              room: null
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "ITEC 116 (LAB) ASYNC",
              section: "IT 4-1",
              room: null
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 116 (LAB) ASYNC",
              section: "IT 4-3",
              room: null
            },
          ],
          thursday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 50",
              section: "CS 2-1",
              room: "CL 1"
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 50",
              section: "IT 2-4",
              room: "ROOM 301"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 50",
              section: "IT 2-5",
              room: "ROOM 301"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "ITEC 116",
              section: "IT 4-3",
              room: "CL 2"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "ITEC 116",
              section: "IT 4-3",
              room: "CL 2"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      { //2nd 23-24
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "9:00 AM - 11:00 AM",
              subject: "ITEC 50",
              section: "CS 1-3",
              room: "CL 3"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 55 (LAB) ASYNC",
              section: "CS 2-3",
              room: null
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 55 (LAB) ASYNC",
              section: "CS 1-3",
              room: null
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "CONSULTATION HOURS",
              section: null,
              room: "FACULTY"
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "DCIT 55 (LAB) ASYNC",
              section: "CS 2-4",
              room: null
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "ITEC 50 (LAB) ASYNC",
              section: "CS 1-3",
              room: null
            },
          ],
          tuesday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "IT 2-2",
              room: null
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "CS 2-4",
              room: null
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "IT 2-4",
              room: "ROOM 305"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "DCIT 55",
              section: "CS 2-3",
              room: "CL 3"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "CS 2-3",
              room: "CL 3"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "ITEC 50",
              section: "CS 1-3",
              room: "ROOM 303"
            },
          ],
          wednesday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "IT 2-4",
              room: null
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 55",
              section: "CS 2-4",
              room: "CL 2"
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "IT 2-5",
              room: null
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 55",
              section: "IT 2-2",
              room: "ROOM 305"
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "DCIT 55",
              section: "IT 2-5",
              room: "ROOM 303"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "CS 2-4",
              room: null
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "ITEC 50 (LAB) ASYNC",
              section: "CS 1-3",
              room: null
            },
          ],
          thursday: [],
          friday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 55",
              section: "IT 2-5",
              room: "CL 4"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 55",
              section: "IT 2-2",
              room: "CL 2"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "DCIT 55",
              section: "CS 2-4",
              room: "CL 1"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 55 (LAB) ASYNC",
              section: "IT 2-2",
              room: null
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "DCIT 55",
              section: "CS 2-3",
              room: "ROOM 202"
            },
          ],
          saturday: [],
          sunday: [],
        }
      },
      { //2nd 24-25
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "ITEC 50",
              section: "IT 1-3",
              room: "CL 3"
            },
            {
              time: "7:00 AM - 10:00 AM",
              subject: "ITEC 50",
              section: "IT 1-3",
              room: "CL 3"
            },
          ],
          wednesday: [
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 50",
              section: "IT 1-2",
              room: "204"
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "CONSULTATION HOURS",
              section: null,
              room: "FACULTY"
            },
            {
              time: "4:00 PM - 6:00 PM",
              subject: "DCIT 55",
              section: "IT 2-2",
              room: "AUDI 2"
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "DCIT 55",
              section: "IT 2-3",
              room: "ROOM 204"
            },
          ],
          thursday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "DCIT 55",
              section: "IT 2-2",
              room: "CL 4"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 55",
              section: "IT 2-1",
              room: "CL 2"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "ITEC 50",
              section: "IT 1-3",
              room: "ROOM 204"
            },
          ],
          friday: [],
          saturday: [
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 55",
              section: "IT 2-1",
              room: "CL 3"
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "DCIT 55",
              section: "IT 2-3",
              room: "CL 3"
            },
          ],
          sunday: [],
        }
      },
    ],
    evaluation_scores: [4.67, 4.17, null, 4.0],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Successfully demonstrated the core competencies in Trainers Methodology 1 of Advanced Java Programming Qualifications.",
          "Acquired mastery in the completion of TM1 teaching components such as: Planned training sessions, Supervised work-based learning, Facilitated learning sessions, Conducted competency assessments",
          "Masters the 0365 platform for tech to teach tools."
        ],
        "2025": [],
        "2026": [
          "Pursue a Master's degree in Information Technology to augment theoretical foundations and technical expertise."
        ],
        "2027": [
          "Continue striving to finish Master's degree"
        ],
        "2028": [
          "Participate in a notable IT related workshops to explore opportunities."
        ],
      },
      loading: {
        "2024": [
          "Object-oriented Programming",
          "System Integration and Architecture",
          "Advanced Database Management System",
          "Web Systems and Technologies",
          "Computer Programming1, 2,3."
        ],
        "2025": [
          "Object-oriented Programming",
          "System Integration and Architecture",
          "Advanced Database Management System",
          "Web Systems and Technologies",
          "Computer Programming1, 2,3."
        ],
        "2026": [
          "Any Major /Minor Subject BSIT/BSCS Course"
        ],
        "2027": [
          "Any Major /Minor Subject BSIT/BSCS Course"
        ],
        "2028": [
          "Any Major /Minor Subject BSIT/BSCS Course"
        ],
      },
      research: {
        "2024": [
          "Engaged in research on computer science education, software development, or data analytics",
          "Continue guiding students in their research journey."
        ],
        "2025": [
          "Engaged in research on computer science education, software development, or data analytics",
          "Continue guiding students in their research journey."
        ],
        "2026": [
          "Continue to mentor student researchers to be able to produce at least Research per year for funding.",
          "Continue guiding students in their research journey."

        ],
        "2027": [
          "Write and Publish / co-author at least one peer-reviewed article in any reputable academic journals",
          "Continue guiding students in their research journey."
        ],
        "2028": [
          "Write and Publish / co-author at least one peer-reviewed article in any reputable academic journals",
          "Continue guiding students in their research journey."
        ],
      },
      extensions: {
        "2024": [
          "Participate in Extension programs"
        ],
        "2025": [
          "Participate in Extension programs"
        ],
        "2026": [
          "Participate in Extension programs"
        ],
        "2027": [
          "Participate in Extension programs"
        ],
        "2028": [
          "Participate in Extension programs"
        ],
      }
    }
  },
  //Alvina Ramallosa
  {
    first_name: "Alvina",
    last_name: "Ramallosa",
    name: "Alvina Ramallosa",
    designation: "Instructor I",
    image: "/images/ramallosa.jpg",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1JhQzXFYI9KPAMkCdtD2tOvxzZWmcIFhN/view?usp=drive_link"
    },],
    // masters_diploma: {name:"", url:""},
    tor: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1NMdVjMmnGUsIoGOWAEV5LPtg5UKkLDx4/view?usp=drive_link"
    },],
    resume: {
      url: "https://drive.google.com/file/d/1gMxHBB_NXHm6Rd4drwIZ2vxrsKP3leJJ/view?usp=drive_link"
    },
    certificates: [
      {
        name: "HARNESSING AI: RESPONSIBLE AND ETHICAL USE OF AI IN THE ACADEMIC SETTING - UNIVERSITY OF THE PHILIPPINES DILIMAN",
        url: "https://drive.google.com/file/d/1AKBWp-vy7Jz43i8d9lTpwg5PxMdzmwIs/view?usp=drive_link"
      },
      {
        name: "R1 101: INTRODUCTION TO RESEARCH INTEGRITY - UNIVERSITY OF THE PHILIPPINES DILIMAN",
        url: "https://drive.google.com/file/d/17MYXIHUQhKnRzOuAQkqXZ1KUJvM6UCwM/view?usp=drive_link"
      },
      {
        name: "COMPUTER LITERACY AND SYSTEM SUPPORT EXTENSION SERVICES - CAVITE STATE UNIVERSITY - MAIN",
        url: "https://drive.google.com/file/d/1llQ2UhSnDz7RyFP2EGZBWhvdouy1Hasn/view?usp=drive_link"
      },],
    speaking_engagements: [{
      name: "COMPUTER LITERACY AND SYSTEM SUPPORT EXTENSION SERVICES - CAVITE STATE UNIVERSITY - MAIN",
      url: "https://drive.google.com/file/d/1zaM5_GolEkUb_edP9eMGJOXe_Edjur1c/view?usp=drive_link"
    }],
    schedule: [
      { //1st 22-23
        semesterName: "1st Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "ITEC 75 (LAB)",
              section: "IT 4-1",
              room: null
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "ITEC 75 (LAB)",
              section: "IT 4-1",
              room: null
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 75 (LAB)",
              section: "IT 4-3",
              room: null
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "DCIT 65 (LAB)",
              section: "IT 4-1",
              room: null
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "DCIT 21 (LAB)",
              section: "CS 1-5",
              room: null
            },
          ],
          tuesday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "DCIT 65",
              section: "CS 3-1",
              room: null
            },
            {
              time: "9:00 AM - 12:00 AM",
              subject: "DCIT 26 (LAB)",
              section: "CS 3-1",
              room: null
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "DCIT 21",
              section: "CS 1-4",
              room: null
            },
            {
              time: "4:00 PM - 6:00 PM",
              subject: "DCIT 21",
              section: "IT 1-5",
              room: null
            },
          ],
          wednesday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "ITEC 75 (LAB)",
              section: "IT 4-3",
              room: null
            },
            {
              time: "11:00 AM - 9:00 PM",
              subject: "ITEC 75 (LAB)",
              section: "IT 4-1",
              room: null
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "DCIT 65",
              section: "IT 4-1",
              room: null
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "ITEC 75 (LAB)",
              section: "IT 4-2",
              room: null
            },
          ],
          thursday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "DCIT 21 (LAB)",
              section: "CS 1-4",
              room: null
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "CONSULTATION HOURS",
              section: null,
              room: "FACULTY"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 26",
              section: "CS 3-1",
              room: null
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "DCIT 21 (LAB)",
              section: "CS 1-5",
              room: null
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      { //2nd 22-23
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "DCIT 55 (LAB)",
              section: "CS 2-2",
              room: "COM LAB 2"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 60 (LEC)",
              section: "CS 3-1",
              room: "ROOM 301"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "ITEC 65 (LEC)",
              section: "IT 2-4",
              room: "ROOM 302"
            },
            {
              time: "3:00 PM - 6:00 PM",
              subject: "ITEC 65 (LAB)",
              section: "IT 2-5",
              room: "COM LAB 2"
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 65 (LEC) ASYNC",
              section: "IT 2-5",
              room: null
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 65 (LEC) ASYNC",
              section: "IT 2-4",
              room: null
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 65 (LEC) ASYNC",
              section: "IT 2-6",
              room: null
            },
          ],
          tuesday: [],
          wednesday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 55 (LEC)",
              section: "CS 2-2",
              room: "ROOM 303"
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "ITEC 65 (LEC)",
              section: "IT 2-5",
              room: "ROOM 303"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "DCIT 55 (LAB)",
              section: "CS 2-1",
              room: "COM LAB 3"
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "ITEC 65 (LEC)",
              section: "IT 2-5",
              room: "COM LAB 4"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 65 (LEC)",
              section: "IT 2-6",
              room: "ROOM 302"
            },
          ],
          thursday: [
            {
              time: "7:00 AM - 8:00 AM",
              subject: "DCIT 60 (LEC) ASYNC",
              section: "CS 3-1",
              room: null
            },
            {
              time: "8:00 AM - 10:00 AM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "CS 2-2",
              room: null
            },
            {
              time: "11:00 AM - 1:00 PM",
              subject: "CONSULTATION HOURS",
              section: null,
              room: "FACULTY"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 55 (LEC) ASYNC",
              section: "CS 2-1",
              room: "ROOM 302"
            },
          ],
          friday: [
            {
              time: "10:00 AM - 1:00 PM",
              subject: "ITEC 65 (LAB)",
              section: "IT 2-6",
              room: "COM LAB 3"
            },
            {
              time: "1:00 PM - 4:00 PM",
              subject: "ITEC 75 (LAB)",
              section: "IT 4-1",
              room: "COM LAB 3"
            },
          ],
          saturday: [],
          sunday: [],
        }
      },
      { //1st 23-24
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "9:00 AM - 11:00 AM",
              subject: "CONSULTATION HOURS",
              section: null,
              room: "FACULTY"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "CvSU 101",
              section: "CS 1-5",
              room: "ROOM 302"
            },
          ],
          tuesday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 21 (LEC)",
              section: "IT 1-5",
              room: "ROOM 301"
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 21",
              section: "IT 1-2",
              room: "ROOM 301"
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 21 (LAB) ASYNC",
              section: "IT 1-2",
              room: null
            },
            {
              time: "11:00 AM - 1:00 PM",
              subject: "DCIT 21 (LAB)",
              section: "IT 1-2",
              room: "CL 4"
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "DCIT 21 (LEC)",
              section: "IT 1-5",
              room: "ROOM 301"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 21 (LEC)",
              section: "IT 1-4",
              room: "ROOM 301"
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "CVSU 101",
              section: "CS 1-1",
              room: "ROOM 301"
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "CVSU 101 ASYNC",
              section: "CS 1-1",
              room: null
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "CVSU 101 ASYNC",
              section: "CS 1-5",
              room: null
            },
          ],
          wednesday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "DCIT 21 ASYNC",
              section: "IT 1-4",
              room: null
            },
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 21 ASYNC",
              section: "IT 1-5",
              room: null
            },
            {
              time: "10:00 AM - 11:00 AM",
              subject: "DCIT 21 (LAB) ASYNC",
              section: "IT 1-3",
              room: null
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "DCIT 21 (LAB)",
              section: "IT 1-2",
              room: "CL 2"
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 21 (LAB) ASYNC",
              section: "CS 1-5",
              room: null
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "DCIT 21 (LAB)",
              section: "CS 1-5",
              room: "CL 4"
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "DCIT 60 (LAB)",
              section: "IT 3-4",
              room: "ROOM 303"
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "DCIT 60 (LAB)",
              section: "IT 3-5",
              room: "CL 2"
            },
          ],
          thursday: [
            {
              time: "9:00 AM - 10:00 AM",
              subject: "DCIT 60 ASYNC",
              section: "IT 3-4",
              room: null
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "DCIT 21 (LAB)",
              section: "IT 1-4",
              room: "CL 1"
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "DCIT 21 ASYNC",
              section: "IT 1-3",
              room: null
            },
            {
              time: "1:00 PM - 2:00 PM",
              subject: "DCIT 21 ASYNC",
              section: "IT 3-5",
              room: null
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "DCIT 21 ASYNC",
              section: "IT 1-2",
              room: null
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "DCIT 21 ASYNC",
              section: "IT 1-4",
              room: null
            },
            {
              time: "4:00 PM - 6:00 PM",
              subject: "DCIT 21 ASYNC",
              section: "IT 4-3",
              room: "ROOM 305"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      { //2nd 23-24
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "10:00 AM - 11:00 AM",
              subject: "ITEC 65",
              section: "IT 2-7",
              room: "ROOM 303"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 85 ASYNC",
              section: "CS 3-1",
              room: null
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "ITEC 85 ASYNC",
              section: "CS 3-2",
              room: null
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "CONSULTATION",
              section: null,
              room: "FACULTY"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "ITEC 85 ASYNC",
              section: "CS 3-3",
              room: null
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "ITEC 101",
              section: "IT 3-4",
              room: "CL 4"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 65 (LEC) ASYNC",
              section: "IT 2-7",
              room: null
            },
          ],
          tuesday: [
            {
              time: "10:00 AM - 11:00 AM",
              subject: "ITEC 101 (LEC) ASYNC",
              section: "IT 3-4",
              room: null
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 101",
              section: "IT 3-4",
              room: "ROOM 303"
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "ITEC 65",
              section: "IT 2-3",
              room: "CL 4"
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "ITEC 101",
              section: "IT 3-3",
              room: "ROOM 303"
            },
            {
              time: "3:00 PM - 4:00 PM",
              subject: "ITEC 65 (LEC) ASYNC",
              section: "IT 3-3",
              room: null
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "ITEC 65 (LEC) ASYNC",
              section: "IT 2-3",
              room: null
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "ITEC 65 (LAB) ASYNC",
              section: "IT 2-3",
              room: null
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 65 (LAB) ASYNC",
              section: "IT 2-7",
              room: null
            },
          ],
          wednesday: [],
          thursday: [
            {
              time: "11:00 AM - 12:00 PM",
              subject: "GNED 14 ASYNC",
              section: "CS 2-7",
              room: null
            },
            {
              time: "12:00 PM - 2:00 PM",
              subject: "GNED 14",
              section: "CS 2-7",
              room: "ROOM 303"
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "ITEC 101",
              section: "IT 3-3",
              room: "CL 2"
            },
          ],
          friday: [
            {
              time: "7:00 AM - 9:00 AM",
              subject: "ITEC 65",
              section: "IT 2-3",
              room: "CL 1"
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "ITEC 65",
              section: "IT 2-7",
              room: "CL 1"
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 101 (LAB) ASYNC",
              section: "IT 3-3",
              room: null
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "ITEC 85",
              section: "CS 3-1",
              room: "ROOM 301"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "ITEC 85",
              section: "CS 3-2",
              room: "ROOM 301"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "ITEC 101 (LAB) ASYNC",
              section: "IT 3-4",
              room: null
            },
          ],
          saturday: [],
          sunday: [],
        }
      },
      { //2nd 24-25
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "ITEC 100",
              section: "IT 3-4",
              room: "CL 4"
            },
            {
              time: "11:30 AM - 1:00 PM",
              subject: "GNED 10",
              section: "CS 4-1",
              room: "ROOM 201"
            },
            {
              time: "3:30 PM - 5:00 PM",
              subject: "GNED 10",
              section: "CS 4-2",
              room: "ROOM 201"
            },
            {
              time: "5:00 PM - 7:00 PM",
              subject: "ITEC 100",
              section: "IT 3-5",
              room: "ROOM 204"
            },
          ],
          thursday: [
            {
              time: "7:00 AM - 8:30 AM",
              subject: "GNED 10",
              section: "CS 4-1",
              room: "ROOM 201"
            },
            {
              time: "9:00 AM - 12:00 PM",
              subject: "DCIT 60",
              section: "CS 3-6",
              room: "ACCRE"
            },
            {
              time: "12:00 PM - 1:00 PM",
              subject: "GNED 01",
              section: "CS 1-4",
              room: "CL 2"
            },
            {
              time: "2:00 PM - 3:30 PM",
              subject: "GNED 10",
              section: "CS 4-3",
              room: "ROOM 201"
            },
            {
              time: "3:30 PM - 5:00 PM",
              subject: "GNED 10",
              section: "CS 4-2",
              room: "ROOM 201"
            },
          ],
          friday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "ITEC 100",
              section: "IT 2-3",
              room: "CL 4"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "ITEC 100",
              section: "IT 3-4",
              room: "ROOM 204"
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "GNED 01",
              section: "CS 1-4",
              room: "ROOM 107"
            },
          ],
          saturday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "DCIT 60",
              section: "CS 3-5",
              room: "ACCRE"
            },
            {
              time: "10:00 AM - 12:00 PM",
              subject: "CONSULTATION HOURS",
              section: null,
              room: "FACULTY"
            },
            {
              time: "1:00 PM - 2:30 PM",
              subject: "GNED 1-0",
              section: "CS 4-3",
              room: "AUDI"
            },
          ],
          sunday: [],
        }
      },
    ],
    evaluation_scores: [null, null, null, 3.62, null, 3.81],
    evaluation_labels: ["1st Sem A.Y 22-23", "2nd Sem A.Y 22-23", "1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Started my Masters degree"
        ],
        "2025": [
          "Continure my masteral degree",
          "Become a member of any organizations related in IT",
          "Attended more research workshops"
        ],
        "2026": [
          "Complete my Masteral Degree",
          "Taking up Doctor of information Technology",
          "Attend more seminar, workshop for my professional growth"
        ],
        "2027": [
          "Enhancing my skills in any mobile developing thru more seminar and workshops",
          "Take Board Licensure Examination for Professional Teachers"
        ],
        "2028": [
          "Participate local and International seminar workshops"
        ],
      },
      loading: {
        "2024": [
          "Professional Ethics"
        ],
        "2025": [
          "Methods of Research"
        ],
        "2026": [
          "Any Major BSIT/BSCS Courses"
        ],
        "2027": [
          "Any Major BSIT/BSCS Courses"
        ],
        "2028": [
          "Any Major BSIT/BSCS Courses"
        ],
      },
      research: {
        "2024": [
          "One of the proponents of a Faculty Study"
        ],
        "2025": [

        ],
        "2026": [
          "Be one of a presenter of a study for a research and extension"
        ],
        "2027": [
          "One of the co-author of any study for research and extension"
        ],
        "2028": [
          "Continue to a research program"
        ],
      },
      extensions: {
        "2024": [
          "Focusrd and obtained Project 2 CLASSES OBJECTIVES"
        ],
        "2025": [
          "Continue to kick off the remaining activities of Project 2 CLASSES"
        ],
        "2026": [
          "Propose a new project extension partnership",
          "Propose new extension activity that align in research"
        ],
        "2027": [
          "Continue to participate to an activity that contributes to long-term, sustainable development goals in the local area"
        ],
        "2028": [
          "Continue to participate to an activity that contributes to long-term, sustainable development goals in the local area"
        ],
      }
    }
  },
  //Joven Rios
  {
    first_name: "Joven",
    last_name: "Rios",
    name: "Joven S. Rios",
    designation: "Instructor I",
    image: "/images/rios.JPG",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN ELECTRONICS AND COMMUNICATIONS ENGINEERING",
      url: "https://drive.google.com/file/d/1U9AYJP_pHKbYD99EqeVAAbVw09WAFiX3/view?usp=drive_link"
    },],
    // masters_diploma: {name:"", url:""},
    resume: {
      url: "https://drive.google.com/file/d/1MGU35y36s_dmTGekSpVv27Y359A531rh/view?usp=drive_link"
    },
    // tor: {name:"", url:""},
    // certificates: [{name:"", url:""},],
    // speaking_engagements: [{name:"", url:""},],
    schedule: [
      { //1st 22-23
        semesterName: "1st Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "COSC 60",
              section: "CS 2-3",
              room: null
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "DCIT 24 (LAB)",
              section: "CS 4-1",
              room: null
            },
          ],
          tuesday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "COSC 85",
              section: "CS 3-1",
              room: null
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "ITEC 90",
              section: "IT 3-1",
              room: null
            },
          ],
          wednesday: [
            {
              time: "7:00 PM - 9:00 PM",
              subject: "COSC 60 (LAB)",
              section: "CS 4-1",
              room: null
            },
          ],
          thursday: [
            {
              time: "5:00 PM - 8:00 PM",
              subject: "COSC 85 (LAB)",
              section: "CS 3-1",
              room: null
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "DCIT 24 (LAB)",
              section: "CS 4-1",
              room: null
            },
          ],
          friday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "CONSULTATION HOURS",
              section: null,
              room: "FACULTY"
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "DCIT 24 (LAB)",
              section: "CS 4-1",
              room: null
            },
          ],
          saturday: [
            {
              time: "1:00 PM - 4:00 PM",
              subject: "ITEC 90 (LAB)",
              section: "IT 3-1",
              room: null
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "COSC 60 (LAB)",
              section: "CS 2-3",
              room: null
            },
            {
              time: "6:00 PM - 9:00 PM",
              subject: "COSC 60 (LAB)",
              section: "CS 4-1",
              room: null
            },
          ],
          sunday: [],
        }
      },
      { //2nd 22-23
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [
            {
              time: "5:00 PM - 8:00 PM",
              subject: "COSC 65 (LAB)",
              section: "CS 2-2",
              room: "COM LAB 3"
            },
          ],
          thursday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "COSC 65 (LEC)",
              section: "CS 2-1",
              room: "ROOM 301"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "COSC 65 (LEC) ASYNC",
              section: "CS 2-3",
              room: null
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "COSC 65 (LEC) ASYNC",
              section: "CS 2-2",
              room: null
            },
          ],
          friday: [
            {
              time: "6:00 PM - 9:00 PM",
              subject: "COSC 65 (LAB)",
              section: "CS 2-3",
              room: "COM LAB 3"
            },
          ],
          saturday: [
            {
              time: "1:00 PM - 2:00 PM",
              subject: "COSC 65 (LEC)",
              section: "CS 2-3",
              room: "ROOM 302"
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "COSC 65 (LEC)",
              section: "CS 2-2",
              room: "ROOM 302"
            },
            {
              time: "5:00 PM - 8:00 PM",
              subject: "COSC 65 (LAB)",
              section: "CS 2-1",
              room: "COM LAB 4"
            },
          ],
          sunday: [],
        }
      },
      { //1st 23-24
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [
            {
              time: "3:00 PM - 5:00 PM",
              subject: "COSC 60",
              section: "CS 2-1",
              room: "ROOM 303"
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "COSC 60 (LAB) ASYNC",
              section: "CS 2-1",
              room: null
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "COSC 60 (LAB) ASYNC",
              section: "CS 2-4",
              room: null
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "COSC 60",
              section: "CS 2-4",
              room: "ROOM 303"
            },
          ],
          wednesday: [
            {
              time: "3:00 PM - 4:00 PM",
              subject: "COSC 60",
              section: "CS 2-2",
              room: "ROOM 302"
            },
            {
              time: "4:00 PM - 5:00 PM",
              subject: "COSC 60 ASYNC",
              section: "CS 2-4",
              room: null
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "COSC 60 ASYNC",
              section: "CS 2-4",
              room: null
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "COSC 60 ASYNC",
              section: "CS 2-4",
              room: null
            },
          ],
          thursday: [
            {
              time: "3:00 PM - 5:00 PM",
              subject: "COSC 60",
              section: "CS 2-2",
              room: "ROOM 303"
            },
            {
              time: "5:00 PM - 6:00 PM",
              subject: "COSC 60 (LAB) ASYNC",
              section: "CS 2-1",
              room: null
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "COSC 60",
              section: "CS 2-4",
              room: "ROOM 303"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "COSC 60",
              section: "CS 2-1",
              room: "ROOM 303"
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      { //2nd 23-24
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [
            {
              time: "4:00 PM - 6:00 PM",
              subject: "COSC 65",
              section: "CS 2-4",
              room: "CL 2"
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 105",
              section: "IT 3-1",
              room: "CL 4"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "COSC 65 (LEC) ASYNC",
              section: "CS 2-4",
              room: null
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "COSC 65 (LEC) ASYNC",
              section: "IT 3-1",
              room: null
            },
          ],
          wednesday: [],
          thursday: [
            {
              time: "4:00 PM - 6:00 PM",
              subject: "ITEC 105",
              section: "IT 3-1",
              room: "CL 1"
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "COSC 65",
              section: "CS 2-4",
              room: "CL 2"
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "COSC 65 (LAB) ASYNC",
              section: "CS 2-4",
              room: null
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "COSC 65 (LAB) ASYNC",
              section: "IT 3-1",
              room: null
            },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      { //2nd 24-25
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [
            {
              time: "4:00 PM - 5:00 PM",
              subject: "COSC 65",
              section: "CS 2-5",
              room: "ROOM 107"
            },
            {
              time: "5:00 PM - 8:00 PM",
              subject: "ITEC 85",
              section: "CS 3-6",
              room: "ROOM 203"
            },
          ],
          friday: [
            {
              time: "4:00 PM - 5:00 PM",
              subject: "COSC 65",
              section: "CS 2-5",
              room: "AUDI"
            },
            {
              time: "5:00 PM - 8:00 PM",
              subject: "COSC 65",
              section: "CS 3-6",
              room: "CL 4"
            },
          ],
          saturday: [],
          sunday: [],
        }
      },
    ],
    evaluation_scores: [null, null, null, 3.42, null, 4.70],
    evaluation_labels: ["1st Sem A.Y 22-23", "2nd Sem A.Y 22-23", "1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Successfully passed the Board Licensure Examinations for Professional Teachers",
          "Complete my Master’s degree."
        ],
        "2025": [
          "Attend different workshops and seminars, both domestically and abroad in research"
        ],
        "2026": [
          "I intend to obtain a doctorate in information technology in order to enhance my abilities, expertise, and inventiveness."
        ],
        "2027": [
          "Continue Doctorate program"
        ],
        "2028": [
          "Finish the doctoral program."
        ],
      },
      loading: {
        "2024": [
          "Digital Logic design",
          "(Applied Manual Robotics)",
          "Architecture and Organization"
        ],
        "2025": [
          "Digital Logic design",
          "(Applied Manual Robotics)",
          "Architecture and Organization"
        ],
        "2026": [
          "Digital Logic design",
          "(Applied Manual Robotics)",
          "Architecture and Organization"
        ],
        "2027": [
          "Digital Logic design",
          "(Applied Manual Robotics)",
          "Architecture and Organization"
        ],
        "2028": [
          "Digital Logic design",
          "(Applied Manual Robotics)",
          "Architecture and Organization"
        ],
      },
      research: {
        "2024": [
          "Attended research seminars."
        ],
        "2025": [
          "Engaged in innovation projects or collaborative research with academic peers."
        ],
        "2026": [
          "To continue the engagement in innovation projects or collaborative research with academic peers"
        ],
        "2027": [
          "To conduct and publish applied research in computing and technology education"
        ],
        "2028": [
          "To conduct and publish applied research in computing and technology education"
        ],
      },
      extensions: {
        "2024": [
          "To engage in various extension activities and programs"
        ],
        "2025": [
          "To engage in various extension activities and programs"
        ],
        "2026": [
          "To engage in various extension activities and programs that benefits the communities"
        ],
        "2027": [
          "To participate in various extension activities and programs "
        ],
        "2028": [
          "To participate in various extension activities and programs "
        ],
      }
    }
  },
  //Nino Rodil
  {
    first_name: "Nino",
    last_name: "Rodil",
    name: "Nino M. Rodil",
    designation: "Instructor I",
    image: "/images/rodil.jpg",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1Qqu3GM0naLFfLRAweoTQ-qLgh7yIdOnm/view?usp=drive_link"
    },],
    // masters_diploma: {name:"", url:""},
    tor: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1Qqu3GM0naLFfLRAweoTQ-qLgh7yIdOnm/view?usp=drive_link"
    },],
    resume: {
      url: "https://drive.google.com/file/d/1HkY_9si5VpTlHTekGsKrlN9E0l91DiFB/view?usp=drive_link"
    },
    // certificates: [{name:"", url:""},],
    // speaking_engagements: [{name:"", url:""},],
    schedule: [
      { //1st 22-23
        semesterName: "1st Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "5:00 PM - 6:00 PM",
              subject: "ITEC 85 (LAB)",
              section: "IT 4-1",
              room: null
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 85 (LAB)",
              section: "IT 4-2",
              room: null
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "ITEC 85 (LAB)",
              section: "IT 4-3",
              room: null
            },
          ],
          tuesday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "ITEC 85",
              section: "IT 3-1",
              room: null
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "ITEC 85 (LAB)",
              section: "IT 3-3",
              room: null
            },
          ],
          wednesday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "ITEC 85 (LAB)",
              section: "IT 4-1",
              room: null
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 85 (LAB)",
              section: "IT 4-3",
              room: null
            },
          ],
          thursday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "ITEC 85",
              section: "IT 3-2",
              room: null
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "DCIT 21",
              section: "IT 1-5",
              room: null
            },
          ],
          friday: [
            {
              time: "5:00 PM - 7:00 PM",
              subject: "ITEC 85 (LAB)",
              section: "IT 4-2",
              room: null
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "CONSULTATION HOURS",
              section: null,
              room: "FACULTY"
            },
          ],
          saturday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "ITEC 85 (LAB)",
              section: "IT 3-1",
              room: null
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "ITEC 85 (LAB)",
              section: "IT 3-2",
              room: null
            },
            {
              time: "2:00 PM - 4:00 PM",
              subject: "ITEC 85 (LAB)",
              section: "IT 3-3",
              room: null
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "DCIT 21 (LAB)",
              section: "IT 1-5",
              room: null
            },
          ],
          sunday: [],
        }
      },
      { //2nd 22-23
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 100 (LEC) ASYNC",
              section: "IT 3-3",
              room: null
            },
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 100 (LEC) ASYNC",
              section: "IT 3-2",
              room: null
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 85 (LEC) ASYNC",
              section: "CS 3-1",
              room: null
            },
          ],
          tuesday: [
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 100 (LEC)",
              section: "IT 3-2",
              room: "ROOM 303"
            },
          ],
          wednesday: [],
          thursday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "ITEC 85",
              section: "CS 3-1",
              room: "ROOM 302"
            },
          ],
          friday: [
            {
              time: "6:00 PM - 9:00 PM",
              subject: "ITEC 100 (LAB)",
              section: "IT 3-2",
              room: "COM LAB 2"
            },
          ],
          saturday: [
            {
              time: "11:00 AM - 12:00 PM",
              subject: "ITEC 100 (LEC)",
              section: "IT 3-3",
              room: "ROOM 303"
            },
            {
              time: "1:00 AM - 4:00 PM",
              subject: "ITEC 100",
              section: "IT 3-3",
              room: "COM LAB 2"
            },
          ],
          sunday: [],
        }
      },
      { //1st 23-24
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 110 (LEC) ASYNC",
              section: "IT 4-1",
              room: null
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 100 (LAB) ASYNC",
              section: "IT 4-2",
              room: null
            },
          ],
          wednesday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "ITEC 110 (LAB)",
              section: "IT 4-1",
              room: "ROOM 302"
            },
          ],
          thursday: [
            {
              time: "7:00 PM - 8:00 PM",
              subject: "ITEC 110 (LEC) ASYNC",
              section: "IT 4-3",
              room: null
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 100 (LAB) ASYNC",
              section: "IT 4-3",
              room: null
            },
          ],
          friday: [
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 110 (LEC)",
              section: "IT 4-2",
              room: "ROOM 303"
            },
            {
              time: "7:00 PM - 9:00 PM",
              subject: "ITEC 110 (LAB)",
              section: "IT 4-2",
              room: "ROOM 303"
            },
          ],
          saturday: [
            {
              time: "3:00 PM - 4:00 PM",
              subject: "ITEC 110 (LEC)",
              section: "IT 4-3",
              room: "ROOM 405"
            },
            {
              time: "4:00 PM - 6:00 PM",
              subject: "ITEC 110 (LAB)",
              section: "IT 4-3",
              room: "ROOM 305"
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 110 (LEC) ASYNC",
              section: "IT 4-2",
              room: null
            },
            {
              time: "6:00 PM - 7:00 PM",
              subject: "ITEC 110 (LEC) ASYNC",
              section: "IT 4-1",
              room: null
            },
          ],
          sunday: [],
        }
      },
      { //2nd 23-24
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "ITEC 106 (LAB) ASYNC",
              section: "IT 3-5",
              room: null
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 100 (LEC) ASYNC",
              section: "IT 3-5",
              room: null
            },
          ],
          tuesday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "ITEC 100",
              section: "IT 3-2",
              room: "CL 3"
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 100 (LAB) ASYNC",
              section: "IT 3-2",
              room: null
            },
          ],
          wednesday: [],
          thursday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "ITEC 100",
              section: "IT 3-3",
              room: "CL 3"
            },
            {
              time: "8:00 PM - 9:00 PM",
              subject: "ITEC 106",
              section: "IT 3-5",
              room: "ROOM 303"
            },
          ],
          friday: [],
          saturday: [
            {
              time: "8:00 AM - 9:00 AM",
              subject: "ITEC 100",
              section: "IT 3-3",
              room: "ROOM 301"
            },
            {
              time: "9:00 AM - 11:00 AM",
              subject: "GNED 12",
              section: "CS 3-5",
              room: "ROOM 302"
            },
            {
              time: "12:00 AM - 1:00 PM",
              subject: "ITEC 100",
              section: "IT 3-2",
              room: "ROOM 305"
            },
            {
              time: "1:00 PM - 3:00 PM",
              subject: "ITEC 106",
              section: "IT 3-5",
              room: "CL 2"
            },
            {
              time: "3:00 PM - 5:00 PM",
              subject: "ITEC 100 ASYNC",
              section: "IT 3-3",
              room: null
            },
          ],
          sunday: [],
        }
      },
      { //2nd 24-25
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [
            {
              time: "6:300 PM - 8:30 PM",
              subject: "ITEC 100",
              section: "IT 3-1",
              room: "ROOM 107"
            },
          ],
          wednesday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "ITEC 100",
              section: "IT 3-2",
              room: "ROOM 107"
            },
          ],
          thursday: [],
          friday: [
            {
              time: "6:00 PM - 8:00 PM",
              subject: "ITEC 100",
              section: "IT 3-3",
              room: "ROOM 203"
            },
          ],
          saturday: [
            {
              time: "7:00 AM - 10:00 AM",
              subject: "ITEC 100",
              section: "IT 3-3",
              room: "CL 2"
            },
            {
              time: "10:00 AM - 1:00 PM",
              subject: "ITEC 100",
              section: "IT 3-2",
              room: "CL 2"
            },
            {
              time: "4:00 PM - 7:00 PM",
              subject: "ITEC 100",
              section: "IT 3-1",
              room: "CL 2"
            },
          ],
          sunday: [],
        }
      },
    ],
    evaluation_scores: [null, null, null, 3.96, null, 3.87],
    evaluation_labels: ["1st Sem A.Y 22-23", "2nd Sem A.Y 22-23", "1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Attended relevant training and seminars within the field of computer studies"
        ],
        "2025": [
          "Conferred Scientific and Technological Specialist Eligibility from the Civil Service Commission.",
          "Attended relevant training and seminars within the field of Computer Studies."
        ],
        "2026": [
          "Attend relevant training and seminars within the field of computer studies"
        ],
        "2027": [
          "To enroll in Master’s Degree Program",
          "To attend relevant training and seminars within the field of computer studies"
        ],
        "2028": [
          "To attend relevant training and seminars within the field of computer studies"
        ],
      },
      loading: {
        "2024": [
          "System Administration and Maintenance",
          "Information Assurance and Security II",
          "Web System Technologies II"
        ],
        "2025": [
          "System Administrationand Maintenance",
          "Information Assurance and Security II"
        ],
        "2026": [
          "Any Major BSIT/BSCS"
        ],
        "2027": [
          "Any Major BSIT/BSCS"
        ],
        "2028": [
          "Any Major BSIT/BSCS"
        ],
      },
      research: {
        "2024": [
          "Provided mentorship and support to students throughout their research/thesis work."
        ],
        "2025": [
          "Provided mentorship and support to students throughout their research/thesis work."
        ],
        "2026": [
          "To provide mentorship and support to students throughout their research/thesis work."
        ],
        "2027": [
          "To provide mentorship and support to students throughout their research/thesis work."
        ],
        "2028": [
          "To provide mentorship and support to students throughout their research/thesis work."
        ],
      },
      extensions: {
        "2024": [
          "Engaged in various extension activities aimed at community development."
        ],
        "2025": [
          "Engaged in various extension activities aimed at community development."
        ],
        "2026": [
          "To engage in various extension activities aimed at community development."
        ],
        "2027": [
          "To engage in various extension activities aimed at community development."
        ],
        "2028": [
          "To engage in various extension activities aimed at community development"
        ],
      }
    }
  },
  //Rachel Rodriguez
  {
    first_name: "Rachel",
    last_name: "Rodriguez",
    name: "Rachel Rodriguez",
    designation: "Instructor I",
    image: "/images/rodriguez.JPG",
    diploma: {
      name: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      url: "https://drive.google.com/file/d/1HtP05Tgh2OtUPJr1ie1p1hxrvs4LO6IV/view?usp=drive_link"
    },
    tor: {
      name: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      url: "https://drive.google.com/file/d/1HtP05Tgh2OtUPJr1ie1p1hxrvs4LO6IV/view?usp=drive_link"
    },
    resume: {
      url: "https://docs.google.com/document/d/1x-8Twt1hyOmNbmcEw58YPWWBma-Qv8cm/edit?usp=drive_link&ouid=102452445519148225886&rtpof=true&sd=true",
    },
    certificates: [{
      name: "LIBREOFFICE: FREE AND OPEN-SOURCE PRODUCTIVITY SOFTWARE SUITE - CAVITE STATE UNIVERSITY - MAIN",
      url: "https://drive.google.com/file/d/1yqT6zTFZy-KViA_HNb9aqnZdHTvNZU8T/view?usp=drive_link"
    },
    {
      name: "EXPLORING BASIC COMPONENTS OF GOOGLE SUITE - CAVITE STATE UNIVERSITY - MAIN",
      url: "https://drive.google.com/file/d/1O-ZqBTQuh9jPge20nd9sCnEuYbBAPhwO/view?usp=drive_link"
    },
    {
      name: "THE INFORMATION SCIENCE OF GREEN IOT, INTERNET OF THINGS - PERPETUAL HELP MOLINO",
      url: "https://drive.google.com/file/d/1hexCNUhjupc8UKFwjdjT_9bLSDq40GLg/view?usp=drive_link"
    },
    {
      name: "SMART UNIVERSITY: LEVERAGING TECHNOLOGY FOR BETTER TEACHING AND LEARNING - PERPETUAL HELP MOLINO",
      url: "https://drive.google.com/file/d/1ZiIhH6zIr0zRbqBKVbPKWgqdUCHOp_-6/view?usp=drive_link"
    },
    {
      name: "SENTIMENT ANALYSIS AND COMPUTING: 3RD INTERNATIONAL WEBINAR - PERPETUAL HELP MOLINO",
      url: "https://drive.google.com/file/d/1rk1fqni5ox45ioDt-u96TrUsW_w3Fyp7/view?usp=drive_link"
    },
    ],
    speaking_engagements: [{
      name: "CSS ACADEMIC INDUSTRY COUNCIL CURRICULUM REVIEW 2022 - PERPETUAL HELP MOLINO",
      url: "https://drive.google.com/file/d/1nQXk_cgbGcPqbu1tyjfiDJ5YowEChlCF/view?usp=drive_link"
    },
    {
      name: "TIKTOK SHOP TRAINING",
      url: "https://drive.google.com/file/d/1fS4N6MEHqbvgqUzQ-6uOKyf4qjDOMRWD/view?usp=drive_link"
    }],

    schedule: [
      {
        semesterName: "1st Sem A.Y 22-23",
        details: {
          monday: [
          ],
          tuesday: [
            { time: "8:00 AM - 10:00 AM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "10:00 PM - 1:00 PM", subject: "ITEC 111", section: "IT 4-1" },
            { time: "2:00 PM - 5:00 PM", subject: "ITEC 111 (LAB)", section: "IT 4-2" },
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 55", section: "IT 2-1" },
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 55", section: "IT 2-1" },
          ],
          wednesday: [
          ],
          thursday: [
            { time: "7:00 AM - 8:00 AM", subject: "ITEC 55 (LAB)", section: "IT 2-3" },
            { time: "8:00 AM - 10:00 AM", subject: "ITEC 55 (LAB)", section: "IT 2-3" },
            { time: "10:00 AM - 11:00 AM", subject: "ITEC 55 (LAB)", section: "IT 2-1" },
            { time: "11:00 AM - 1:00 PM", subject: "ITEC 55 (LAB)", section: "IT 2-1" },
            { time: "2:00 PM - 3:00 PM", subject: "ITEC 55 (LAB)", section: "IT 2-2" },
            { time: "3:00 PM - 5:00 PM", subject: "ITEC 55 (LAB)", section: "IT 2-2" },
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 55", section: "IT 2-6" },
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 55", section: "IT 2-6" },
          ],
          friday: [
          ],
          saturday: [
            { time: "7:00 AM - 8:00 AM", subject: "ITEC 55", section: "IT 2-3" },
            { time: "9:00 AM - 10:00 AM", subject: "ITEC 111", section: "IT 4-1" },
            { time: "10:00 AM - 11:00 AM", subject: "ITEC 111", section: "IT 4-1" },
            { time: "11:00 AM - 12:00 PM", subject: "ITEC 111", section: "IT 4-2" },
            { time: "12:00 PM - 1:00 PM", subject: "ITEC 111", section: "IT 4-2" },
            { time: "1:00 PM - 2:00 PM", subject: "ITEC 55", section: "IT 2-3" },
            { time: "3:30 PM - 4:30 PM", subject: "ITEC 55 (LAB)" },
            { time: "4:30 PM - 6:00 PM", subject: "ITEC 55", section: "IT 2-6" },
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 55", section: "IT 2-2" },
            { time: "7:00 PM - 8:00 PM", subject: "ITEC 55", section: "IT 2-2" },
          ],
          sunday: [
          ],
        }
      },
      {
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [],
          tuesday: [
            { time: "7:00 AM - 10:00 AM", subject: "ITEC 101", section: "IT 3-1", room: "CL 4" },
            { time: "11:00 AM - 12:00 PM", subject: "ITEC 60 (LEC)", section: "IT 2-3", room: "ROOM 303" },
            { time: "1:00 PM - 2:00 PM", subject: "ITEC 101 (LEC)", section: "IT 3-2", room: "ROOM 305" },
            { time: "3:00 PM - 3:00 PM", subject: "ITEC 60 (LEC)", section: "IT 2-1", room: "ROOM 302" },
            { time: "5:00 PM - 7:00 PM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "7:00 PM - 8:30 PM", subject: "ITEC 101 (LAB)", section: "IT 3-3", room: "CL 2" }
          ],
          wednesday: [],
          thursday: [
            { time: "7:00 AM - 8:00 AM", subject: "ITEC 101 (LEC) ASYNC", section: "IT 3-2" },
            { time: "8:00 AM - 9:00 AM", subject: "ITEC 101 (LEC) ASYNC", section: "IT 3-1" },
            { time: "9:00 AM - 10:00 AM", subject: "ITEC 101 (LEC)", section: "IT 3-1" },
            { time: "10:00 AM - 1:00 PM", subject: "ITEC 101 (LAB)", section: "IT 3-2", room: "CL 4" },
            { time: "2:00 PM - 3:00 PM", subject: "ITEC 60 (LEC)", section: "IT 2-2" },
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 101 (LEC)", section: "IT 3-3" },
            { time: "7:00 PM - 8:30 PM", subject: "ITEC 101 (LAB)", section: "IT 3-3", room: "CL 3" }
          ],
          friday: [],
          saturday: [
            { time: "7:00 AM - 10:00 AM", subject: "ITEC 60 (LAB)", section: "IT 2-1", room: "CL 4" },
            { time: "10:00 AM - 1:00 PM", subject: "ITEC 60 (LAB)", section: "IT 2-2", room: "CL 4" },
            { time: "2:00 PM - 5:00 PM", subject: "ITEC 60 (LAB)", section: "IT 2-3", room: "CL 4" },
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 60 (LEC) ASYNC", section: "IT 2-3" },
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 60 (LEC) ASYNC", section: "IT 2-2" },
            { time: "7:00 PM - 8:00 PM", subject: "ITEC 60 (LEC) ASYNC", section: "IT 2-1" },
            { time: "8:00 PM - 9:00 PM", subject: "ITEC 101 (LEC) ASYNC", section: "IT 3-3" }
          ],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            { time: "8:00 AM - 10:00 AM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "10:00 AM - 11:00 AM", subject: "CVSU 101", section: "CS 1-2", room: "ROOM 301" },
            { time: "11:00 AM - 12:00 PM", subject: "DCIT 25 (LEC)", section: "IT 3-1", room: "ROOM 301" },
            { time: "1:00 PM - 3:00 PM", subject: "ITEC 80 (LAB)", section: "IT 3-6", room: "CL 3" },
            { time: "4:00 PM - 5:00 PM", subject: "DCIT 25 (LEC)", section: "IT 3-3", room: "ROOM 302" },
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 80 (LAB) ASYNC", section: "IT 3-6" }
          ],
          tuesday: [],
          wednesday: [
            { time: "9:00 AM - 10:00 AM", subject: "DCIT 25 (LEC)", section: "IT 3-2", room: "ROOM 305" },
            { time: "10:00 AM - 12:00 PM", subject: "DCIT 25 (LAB)", section: "IT 3-1", room: "CL 3" },
            { time: "12:00 PM - 1:00 PM", subject: "DCIT 25 (LAB) ASYNC", section: "IT 3-1" },
            { time: "1:00 PM - 2:00 PM", subject: "ITEC 80 (LEC)", section: "IT 3-6", room: "CL 4" },
            { time: "3:00 PM - 4:00 PM", subject: "DCIT 25 (LEC) ASYNC", section: "IT 3-1" },
            { time: "4:00 PM - 5:00 PM", subject: "DCIT 25 (LEC) ASYNC", section: "IT 3-2" },
            { time: "5:00 PM - 6:00 PM", subject: "DCIT 25 (LEC) ASYNC", section: "IT 3-3" },
            { time: "6:00 PM - 7:00 PM", subject: "DCIT 25 (LEC) ASYNC", section: "IT 3-4" },
            { time: "7:00 PM - 8:00 PM", subject: "DCIT 25 (LEC) ASYNC", section: "IT 3-5" },
            { time: "8:00 PM - 9:00 PM", subject: "DCIT 25 (LEC) ASYNC", section: "IT 3-6" }
          ],
          thursday: [],
          friday: [
            { time: "7:00 AM - 8:00 AM", subject: "DCIT 25 (LEC)", section: "IT 3-4", room: "CL 2" },
            { time: "8:00 AM - 10:00 AM", subject: "DCIT 25", section: "IT 3-4", room: "CL 2" },
            { time: "10:00 AM - 11:00 AM", subject: "DCIT 25 (LEC)", section: "IT 3-5", room: "CL 2" },
            { time: "11:00 AM - 1:00 PM", subject: "DCIT 25", section: "IT 3-5", room: "CL 2" },
            { time: "2:00 PM - 3:00 PM", subject: "DCIT 25 (LAB) ASYNC", section: "IT 3-2" },
            { time: "3:00 PM - 5:00 PM", subject: "DCIT 25", section: "IT 3-2", room: "CL 2" },
            { time: "5:00 PM - 7:00 PM", subject: "DCIT 25", section: "IT 3-3", room: "CL 1" },
            { time: "7:00 PM - 8:00 PM", subject: "DCIT 25 (LAB) ASYNC", section: "IT 3-3" },
            { time: "8:00 PM - 9:00 PM", subject: "DCIT 25 (LAB) ASYNC", section: "IT 3-5" }
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "7:00 AM - 9:00 AM", subject: "ITEC 65", section: "IT 2-6", room: "CL 3" },
            { time: "9:00 AM - 11:00 AM", subject: "ITEC 65", section: "IT 2-5", room: "CL 1" },
            { time: "11:00 AM - 12:00 PM", subject: "ITEC 60 (LEC) ASYNC", section: "IT 2-7" },
            { time: "1:00 PM - 3:00 PM", subject: "ITEC 60", section: "IT 2-7", room: "CL 4" },
            { time: "3:00 PM - 4:00 PM", subject: "ITEC 65 (LAB) ASYNC", section: "IT 2-5" },
            { time: "4:00 PM - 5:00 PM", subject: "ITEC 60 (LAB) ASYNC", section: "IT 2-3" }
          ],
          tuesday: [
            { time: "9:00 AM - 10:00 AM", subject: "ITEC 60", section: "IT 2-3", room: "ROOM 303" },
            { time: "10:00 AM - 11:00 AM", subject: "ITEC 60 (LEC) ASYNC", section: "IT 2-1" },
            { time: "11:00 AM - 1:00 PM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "1:00 PM - 3:00 PM", subject: "ITEC 95", section: "IT 3-4", room: "AUDI 2" },
            { time: "3:00 PM - 4:00 PM", subject: "ITEC 60", section: "IT 2-1", room: "ROOM 301" },
            { time: "5:00 PM - 7:00 PM", subject: "ITEC 95", section: "IT 3-5", room: "ROOM 302" },
            { time: "7:00 PM - 8:00 PM", subject: "ITEC 65 (LAB) ASYNC", section: "IT 2-6" }
          ],
          wednesday: [
            { time: "7:00 AM - 8:00 AM", subject: "ITEC 65", section: "IT 2-6", room: "CL 2" },
            { time: "8:00 AM - 10:00 AM", subject: "ITEC 60", section: "IT 2-1", room: "CL 2" },
            { time: "10:00 AM - 11:00 AM", subject: "ITEC 60 (LAB) ASYNC", section: "IT 2-1" },
            { time: "11:00 AM - 12:00 PM", subject: "ITEC 65", section: "IT 2-5", room: "CL 3" },
            { time: "1:00 PM - 3:00 PM", subject: "ITEC 60", section: "IT 2-3", room: "CL 2" },
            { time: "3:00 PM - 4:00 PM", subject: "ITEC 60", section: "IT 2-7", room: "ROOM 301" },
            { time: "4:00 PM - 5:00 PM", subject: "ITEC 65 (LAB) ASYNC", section: "IT 2-5" },
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 65 (LEC) ASYNC", section: "IT 2-6" }
          ],
          thursday: [
            { time: "8:00 AM - 9:00 AM", subject: "ITEC 60 (LEC) ASYNC", section: "IT 2-3" },
            { time: "9:00 AM -10:00 AM", subject: "ITEC 60 (LAB) ASYNC", section: "IT 2-7" },
            { time: "10:00 AM - 11:00 AM", subject: "ITEC 95 ASYNC", section: "IT 3-4" },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [
            { time: "7:00 AM - 10:00 AM", subject: "DCIT 25", section: "CS 2-3", room: "CL 1" },
            { time: "10:00 AM - 12:00 PM", subject: "DCIT 25", section: "IT 2-3", room: "ROOM 203" },
            { time: "1:00 PM - 3:00 PM", subject: "GNED 06", section: "IT 1-6", room: "AUDI 2" },
            { time: "3:00 PM - 4:30 PM", subject: "GNED 06", section: "IT 1-5", room: "ROOM 107" },
            { time: "6:00 PM - 7:00 PM", subject: "GNED 06", section: "IT 1-6", room: "ROOM 109" }
          ],
          friday: [
            { time: "8:00 AM - 10:00 AM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "10:00 AM - 1:00 PM", subject: "DCIT 25", section: "IT 2-4", room: "CL 3" },
            { time: "2:00 PM - 4:00 PM", subject: "DCIT 25", section: "IT 2-4", room: "ROOM 201" },
            { time: "5:00 PM - 7:00 PM", subject: "DCIT 25", section: "CS 2-3", room: "AUDI" }
          ],
          saturday: [
            { time: "7:00 AM - 10:00 AM", subject: "DCIT 25", section: "IT 2-3", room: "CL 1" },
            { time: "10:00 AM - 11:30 AM", subject: "GNED 06", section: "IT 1-5", room: "CL 3" },
            { time: "1:00 PM - 4:00 PM", subject: "DCIT 25", section: "CS 2-1", room: "CL 1" },
            { time: "5:00 PM - 7:00 PM", subject: "DCIT 25", section: "CS 2-1", room: "ROOM 107" }
          ],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, null, null, 3.80, null, 3.87],
    evaluation_labels: ["1st Sem A.Y 22-23", "2nd Sem A.Y 22-23", "1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": ["Continued MAEdSpEd. To update and expand knowledge in the field, local seminars were actively attended, complemented by international webinars directly related to the MAEdSpEd coursework."],
        "2025": [
          "Active membership is maintained in the professional IT organization PSITE.",
          "Graduation from the MAEdSpEd program is being finalized, with preparation underway for the Licensure Examination for Professional Teachers."
        ],
        "2026": [
          "Continue pursuit of MSIT program is underway, aimed at augmenting academic knowledge for future contributions to the field.",
          "Attend various seminars and workshops to ensure continuous professional growth."
        ],
        "2027": ["Pursuit of doctoral studies in MAEd-SpEd will be undertaken to enhance specialization in the field and support long-term professional growth."],
        "2028": ["Involvement in local and international conferences, seminars, and workshops will be actively pursued to broaden professional networks and stay updated with current trends in the field."],
      },
      loading: {
        "2024": ["Data Structure and Algorithm", "Platform Technologies", "Information System", "Quantitative Methods", "Human Computer Interaction I"],
        "2025": ["Data Structure and Algorithm", "Science, Technology, and Society"],
        "2026": ["Any Major Subject BSIT/BSCS Program"],
        "2027": ["Any Major Subject BSIT/BSCS Program"],
        "2028": ["Any Major Subject BSIT/BSCS Program"],
      },
      research: {
        "2024": ["Attended research and seminars and a contributed to the Faculty Research."],
        "2025": [
          "Engaged in an ongoing research study as part of graduate school requirements.",
          "Responded as TA/TC of undergraduate research."
        ],
        "2026": ["Participate in local and international research."],
        "2027": [
          "Continue to serve as research panelist, adviser, and mentor students.",
          "Participate in local and international research."
        ],
        "2028": [
          "Continue to serve as research panelist, adviser, and mentor students.",
          "Participate in local and international research."
        ],
      },
      extensions: {
        "2024": ["Participated in campus extension activities such as ICT Literacy Training at Molino II, contributing to community engagement and digital skills development."],
        "2025": ["Has continued participation in extension activities at BJMP Female Dorm, supporting outreach efforts and community involvement."],
        "2026": ["Participation in campus extension programs will be sustained to help participants gain new skills and knowledge applicable to their daily lives or livelihood, through training, seminars, or workshops."],
        "2027": ["Continued participation in community-based activities will be prioritized to support long-term, sustainable development goals within the local area."],
        "2028": ["Participation in community-based activities will continue, contributing to the achievement of long-term, sustainable development goals in the local area."],
      }
    }
  },
  //Clarissa Rostrollo
  {
    first_name: "Clarissa",
    last_name: "Rostrollo",
    name: "Clarissa Rostrollo",
    designation: "Instructor I",
    image: "/images/rostrollo.JPG",
    diploma: {
      name: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      url: "https://drive.google.com/file/d/1-EzbQ77U9l2H4qBHZkuOMH9BYgaB_3cZ/view?usp=drive_link"
    },
    tor: {
      name: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      url: "https://drive.google.com/file/d/1FZIwC5ImoW7EshHE5HnQJiieL4IOwxf5/view?usp=drive_link"
    },
    resume: {
      url: "https://docs.google.com/document/d/1q_Ao6n-tOg0YO2fA4gvI3CzKD1yJOcdf/edit?usp=drive_link&ouid=102452445519148225886&rtpof=true&sd=true",
    },
    certificates: [{
      name: "TRAINING-WORKSHOP ON PROPOSAL WRITING AND PUBLICATION - CAVITE STATE UNIVERSITY - BACOOR",
      url: "https://drive.google.com/file/d/1gOBLzYTe2CAeBBkK4dnlG06RwmvNQClL/view?usp=drive_link"
    },
    {
      name: "SEMINAR-WORKSHOP ON MODULE DEVELOPMENT AND PUBLICATION - CAVITE STATE UNIVERSITY - BACOOR",
      url: "https://drive.google.com/file/d/1Yl264k-ko_tXBi_7X39ai06mZivJwL3r/view?usp=drive_link"
    },
    {
      name: "GRADUATE/UNDERGRADUATE THESIS DOCUMENTATION STYLE AND TYPING MECHANICS - CAVITE STATE UNIVESITY - MAIN",
      url: "https://drive.google.com/file/d/1fnMID7-7qYIO-8sKP4SPQRxr7AAefdFt/view?usp=drive_link"
    },
    ],
    speaking_engagements: [{
      name: "2024 RESEARCH SYMPOSIUM - CALL FOR PROPOSAL - CAVITE STATE UNIVERSITY - BACOOR",
      url: "https://drive.google.com/file/d/1zEyYdiQDz1bWqT-1pg1yPXlKTGXQOWSP/view?usp=drive_link"
    },
    ],

    schedule: [
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [{ time: "7:00 AM - 8:00 AM", subject: "CONSULTATION", room: "FACULTY" }],
          tuesday: [
            { time: "7:00 AM - 8:00 AM", subject: "COSC 75 (LEC)", section: "CS 3-1", room: "ROOM 305" },
            { time: "8:00 AM - 9:00 AM", subject: "COSC 75 (LEC)", section: "CS 3-3", room: "ROOM 305" },
            { time: "9:00 AM - 10:00 AM", subject: "COSC 75 (LEC) ASYNC", section: "CS 3-2" }
          ],
          wednesday: [
            { time: "7:00 AM - 8:00 AM", subject: "COSC 111", section: "CS 4-1", room: "ROOM 303" },
            { time: "8:00 AM - 9:00 AM", subject: "COSC 75 (LEC) ASYNC", section: "CS 3-1" },
            { time: "9:00 AM - 10:00 AM", subject: "COSC 75 (LEC) ASYNC", section: "CS 3-3" }
          ],
          thursday: [{ time: "8:00 AM - 9:00 AM", subject: "COSC 75 (LEC)", section: "CS 3-2", room: "ROOM 305" }],
          friday: [],
          saturday: [
            { time: "7:00 AM - 8:00 AM", subject: "COSC 75 (LEC) ASYNC", section: "CS 3-1" },
            { time: "8:00 AM - 9:00 AM", subject: "COSC 75 (LEC) ASYNC", section: "CS 3-2" },
            { time: "9:00 AM - 10:00 AM", subject: "COSC 75 (LEC) ASYNC", section: "CS 3-3" },
            { time: "10:00 AM - 11:00 AM", subject: "COSC 111 (LAB) ASYNC", section: "CS 4-1" },
            { time: "11:00 AM - 12:00 PM", subject: "COSC 111 (LEC) ASYNC", section: "CS 4-1" },
            { time: "12:00 PM - 2:00 PM", subject: "COSC 111", section: "CS 4-1", room: "CL 2" },
            { time: "3:00 PM - 5:00 PM", subject: "COSC 75", section: "CS 3-1", room: "ROOM 303" },
            { time: "5:00 PM - 7:00 PM", subject: "COSC 75", section: "CS 3-2", room: "ROOM 303" },
            { time: "7:00 PM - 9:00 PM", subject: "COSC 75", section: "CS 3-3", room: "ROOM 303" },
          ],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "11:00 AM - 12:00 PM", subject: "COSC 65 (LAB) ASYNC", section: "CS 2-3" },
            { time: "12:00 PM - 1:00 PM", subject: "GNED 12 ASYNC", section: "CS 1-4" },
            { time: "1:00 PM - 3:00 PM", subject: "COSC 90", section: "CS 3-2", room: "ROOM 302" }
          ],
          tuesday: [
            { time: "10:00 AM - 11:00 AM", subject: "GNED 01 ASYNC", section: "CS 1-2" },
            { time: "11:00 AM - 12:00 PM", subject: "GNED 01 ASYNC", section: "CS 1-3" },
            { time: "12:00 PM - 2:00 PM", subject: "GNED 01", section: "CS 1-3", room: "ROOM 302" }
          ],
          wednesday: [
            { time: "9:00 AM - 10:00 AM", subject: "COSC 65", section: "CS 2-3", room: "ROOM 305" },
            { time: "10:00 AM - 12:00 PM", subject: "COSC 70", section: "CS 2-5", room: "ROOM 302" },
            { time: "12:00 PM - 1:00 PM", subject: "GNED 12 ASYNC", section: "CS 1-3" },
            { time: "1:00 PM - 2:00 PM", subject: "GNED 01 ASYNC", section: "CS 1-1" }
          ],
          thursday: [
            { time: "9:00 AM - 10:00 AM", subject: "COSC 65", section: "CS 2-3", room: "ROOM 302" },
            { time: "10:00 AM - 11:00 AM", subject: "COSC 70 ASYNC", section: "CS 2-5" },
            { time: "11:00 AM - 12:00 PM", subject: "COSC 65 (LEC) ASYNC", section: "CS 1-3" },
            { time: "12:00 PM - 2:00 PM", subject: "CONSULTATION", room: "FACULTY" }
          ],
          friday: [
            { time: "10:00 AM - 12:00 PM", subject: "COSC 65", section: "CS 2-3", room: "CL 3" },
            { time: "12:00 PM - 1:00 PM", subject: "COSC 65 (LAB) ASYNC", section: "CS 2-6" },
            { time: "1:00 PM - 2:00 PM", subject: "COSC 65 (LEC) ASYNC", section: "CS 2-6" }
          ],
          saturday: [
            { time: "7:00 AM - 9:00 AM", subject: "GNED 12", section: "CS 1-4", room: "ROOM 302" },
            { time: "9:00 AM - 11:00 AM", subject: "GNED 01", section: "CS 1-1", room: "ROOM 301" },
            { time: "11:00 AM - 1:00 PM", subject: "COSC 65", section: "CS 2-6", room: "CL 2" },
            { time: "3:00 PM - 5:00 PM", subject: "GNED 01", section: "CS 1-2", room: "CL 3" },
            { time: "7:00 PM - 9:00 PM", subject: "GNED 12", section: "CS 1-3", room: "CL 4" }
          ],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            { time: "8:30 AM - 10:00 AM", subject: "COSC 90", section: "CS 3-3", room: "ROOM 201" },
            { time: "10:00 AM - 1:00 PM", subject: "DCIT 23", section: "CS 1-2", room: "CL 1" },
            { time: "1:30 PM - 4:30 PM", subject: "COSC 90", section: "CS 3-1", room: "ROOM 201" },
            { time: "4:30 PM - 6:00 PM", subject: "COSC 70", section: "CS 2-1", room: "ROOM 203" }
          ],
          tuesday: [
            { time: "7:00 AM - 10:00 AM", subject: "DCIT 23", section: "CS 1-1", room: "CL 1" },
            { time: "10:30 AM - 12:00 PM", subject: "COSC 90", section: "CS 3-3", room: "ROOM 201" },
            { time: "12:00 PM - 3:00 PM", subject: "DCIT 23", section: "CS 1-2", room: "CL 2" }
          ],
          wednesday: [
            { time: "9:30 AM - 11:30 AM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "11:30 AM - 1:00 PM", subject: "COSC 90", section: "CS 3-2", room: "ROOM 203" },
            { time: "1:00 PM - 2:30 PM", subject: "COSC 70", section: "CS 2-1", room: "ROOM 107" }
          ],
          thursday: [
            { time: "10:00 AM - 11:30 AM", subject: "COSC 90", section: "CS 3-2", room: "ROOM 201" },
            { time: "12:00 PM - 1:00 PM", subject: "DCIT 23", section: "CS 1-2", room: "ROOM 204" },
            { time: "1:00 PM - 2:00 PM", subject: "DCIT 23", section: "CS 1-1", room: "CL 5" }
          ],
          friday: [
            { time: "10:00 AM - 1:00 PM", subject: "COSC 70", section: "CS 2-3", room: "CL 1" },
            { time: "1:00 PM - 4:00 PM", subject: "DCIT 23", section: "CS 1-1", room: "CL 3" }
          ],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 4.53, 4.72, 4.79],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Attended relevant training and seminars in improving teaching strategies.",
          "Enhanced teaching effectiveness through the use of Student Evaluation of Teachers (SET)."
        ],
        "2025": ["Enrolled in the Master’s in Computer Science program to advance technical expertise and academic qualifications in the field."],
        "2026": [
          "Continuation of the Master’s Degree program will be pursued to deepen expertise in the field and fulfill academic goals.",
          "Enroll in a Teacher Certificate Program will be undertaken to gain additional knowledge in teaching methodologies and improve instructional effectiveness."
        ],
        "2027": [
          "Completion of the Master’s Degree program will be achieved to solidify academic qualifications and enhance career advancement opportunities.",
          "Completion of the Teacher Certificate Program and taking of the Licensure Examination for Teachers (LET) will be pursued to obtain professional teaching credentials and broaden career pathways in education."
        ],
        "2028": [
          "Attend in faculty development training both local and international.",
          "Search for a scholarship and pursue my Doctorate Degree."
        ],
      },
      loading: {
        "2024": [
          "Computer Programming I",
          "Computer Programming II",
          "Software Engineering I",
          "Institutional Orientation",
          "Design and Analysis of Algorithm"
        ],
        "2025": [
          "Computer Programming I",
          "Computer Programming II",
          "Software Engineering I",
          "Software Engineering II"
        ],
        "2026": [
          "Programming Languages",
          "Operating Systems",
          "Methods of Research",
          "Software Engineering I",
          "Software Engineering II"
        ],
        "2027": [
          "Method of Research",
          "Undergraduate Thesis Part A"
        ],
        "2028": [
          "Methods of Research",
          "Undergraduate Thesis Part A",
          "Undergraduate Thesis Part B"
        ],
      },
      research: {
        "2024": [
          "Engaged in research related to Computer Studies.",
          "Guided students in their research as Thesis Adviser and Technical Critic."
        ],
        "2025": [
          "Contributed to research related to Computer Science",
          "Has become an active member of the Campus Research and Development Team, contributing to initiatives that promote innovation and academic excellence.",
          "Attended seminars/workshops related to research writing."
        ],
        "2026": [
          "Write and publish one research related to Computer Studies.",
          "Participate in a local research conference."
        ],
        "2027": [
          "Write and publish one research related to Computer Studies.",
          "Participate in a local research conference."
        ],
        "2028": [],
      },
      extensions: {
        "2024": ["Participated in the campus extension activities."],
        "2025": ["Active member or lecturer in an extension of activities provided by the Campus."],
        "2026": ["Propose a system that will improve the extension activities of the Campus."],
        "2027": ["Attend or participate in seminars or workshops promoting various extension activities."],
        "2028": ["Collaborate with different organizations locally in promoting various extension activities."],
      }
    }
  },
  //Clarence Salvador
  {
    first_name: "Clarence",
    last_name: "Salvador",
    name: "Marc Clarence Salvador",
    designation: "Instructor I",
    image: "/images/salvador.jpeg",
    diploma: {
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1nsWZ6gLwu8DDNH2k-KGd6T5EzNglNRoM/view?usp=drive_link"
    },
    tor: {
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1IXHswA7eQP3LWjzUBvOQpvyWdZIIWfmr/view?usp=drive_link"
    },
    resume: {
      url: "https://drive.google.com/file/d/1A5cC0fxc9ea9vSUG40C2ZhNZ1shOTScO/view?usp=drive_link",
    },
    certificates: [{
      name: "TRAINING-WORKSHOP ON PROPOSAL WRITING AND PUBLICATION - CAVITE STATE UNIVERSITY - BACOOR",
      url: "https://drive.google.com/file/d/1vB356LKPkpzFPmIHb3p0kurn9i2mKgij/view?usp=drive_link"
    },
    {
      name: "SEMINAR-WORKSHOP ON MODULE DEVELOPMENT AND PUBLICATION - CAVITE STATE UNIVERSITY - BACOOR",
      url: "https://drive.google.com/file/d/1YEjuNWbiQHNz8oSJgEpYXE-ZpVstsnLm/view?usp=drive_link"
    },
    {
      name: "GRADUATE/UNDERGRADUATE THESIS DOCUMENTATION STYLE AND TYPING MECHANICS - CAVITE STATE UNIVESITY - MAIN",
      url: "https://drive.google.com/file/d/1P01Q0-aMYQqdgQ4ajvoeMo0HOTLFNMdM/view?usp=drive_link"
    },
    ],
    schedule: [
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 80 ASYNC", section: "CS 4-1" },
            { time: "7:00 PM - 8:00 PM", subject: "ITEC 80 (LEC)", section: "IT 3-1", room: "ROOM 305" },
            { time: "8:00 PM - 9:00 PM", subject: "ITEC 80 (LEC)", section: "IT 3-3", room: "ROOM 305" }
          ],
          tuesday: [
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 80 (LAB) ASYNC", section: "IT 3-1" },
            { time: "7:00 PM - 8:00 PM", subject: "CVSU 101", section: "IT 1-4", room: "ROOM 301" },
            { time: "8:00 PM - 9:00 PM", subject: "CVSU 101", section: "IT 1-6", room: "ROOM 301" }
          ],
          wednesday: [
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 80 (LAB) ASYNC", section: "IT 3-3" },
            { time: "7:00 PM - 9:00 PM", subject: "CONSULTATION", room: "FACULTY" }
          ],
          thursday: [
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 80 ASYNC", section: "IT 3-3" },
            { time: "7:00 PM - 8:00 PM", subject: "ITEC 80 ASYNC", section: "IT 3-2" },
            { time: "8:00 PM - 9:00 PM", subject: "ITEC 80 ASYNC", section: "IT 3-1" }
          ],
          friday: [
            { time: "5:00 PM - 6:00 PM", subject: "DCIT 21 ASYNC", section: "IT 1-1" },
            { time: "6:00 PM - 7:00 PM", subject: "DCIT 21 (LAB) ASYNC", section: "IT 1-1" },
            { time: "7:00 PM - 9:00 PM", subject: "DCIT 21 (LAB)", section: "IT 1-1", room: "CL 1" }
          ],
          saturday: [
            { time: "9:00 AM - 11:00 AM", subject: "ITEC 80 (LAB)", section: "IT 3-1", room: "CL 4" },
            { time: "11:00 AM - 12:00 PM", subject: "ITEC 80 (LEC)", section: "IT 3-2", room: "ROOM 305" },
            { time: "1:00 PM - 2:00 PM", subject: "DCIT 21 (LEC)", section: "IT 1-1", room: "ROOM 305" },
            { time: "2:00 PM - 4:00 PM", subject: "ITEC 80 (LEC)", section: "CS 4-1", room: "ROOM 305" },
            { time: "4:00 PM - 6:00 PM", subject: "ITEC 80 (LAB)", section: "IT 3-3", room: "CL 3" },
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 80 (LAB) ASYNC", section: "IT 3-2" },
            { time: "7:00 PM - 9:00 PM", subject: "ITEC 80 (LAB)", section: "IT 3-3", room: "CL 4" }
          ],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "5:00 PM - 6:00 PM", subject: "GNED 12 ASYNC", section: "IT 1-3" },
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 100 (LAB)", section: "IT 3-4" },
            { time: "7:00 PM - 9:00 PM", subject: "ITEC 100", section: "IT 3-4", room: "CL 1" }
          ],
          tuesday: [
            { time: "6:00 PM - 7:00 PM", subject: "GNED 12 ASYNC", section: "IT 1-1" },
            { time: "7:00 PM - 9:00 PM", subject: "GNED 12", section: "IT 1-1", room: "ROOM 302" }
          ],
          wednesday: [
            { time: "5:00 PM - 6:00 PM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "6:00 PM - 7:00 PM", subject: "GNED 12 ASYNC", section: "IT 1-2" },
            { time: "7:00 PM - 9:00 PM", subject: "GNED 12", section: "IT 1-2", room: "ROOM 304" }
          ],
          thursday: [
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 100 (LEC) ASYNC", section: "IT 3-4" },
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 100 (LEC) ASYNC", section: "IT 3-1" },
            { time: "7:00 PM - 8:00 PM", subject: "ITEC 100", section: "IT 3-1", room: "ROOM 303" },
            { time: "8:00 PM - 9:00 PM", subject: "ITEC 105", section: "IT 3-3", room: "ROOM 301" }
          ],
          friday: [
            { time: "5:00 PM - 6:00 PM", subject: "GNED 12 ASYNC", section: "CS 1-2" },
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 105 (LEC) ASYNC", section: "IT 3-3" },
            { time: "7:00 PM - 8:00 PM", subject: "ITEC 105 (LAB)", section: "IT 3-3" },
            { time: "8:00 PM - 9:00 PM", subject: "ITEC 105 (LAB)", section: "IT 3-1" }
          ],
          saturday: [
            { time: "7:00 AM - 8:00 AM", subject: "ITEC 100", section: "IT 3-4", room: "ROOM 303" },
            { time: "9:00 AM - 11:00 AM", subject: "ITEC 105", section: "IT 3-3", room: "CL 1" },
            { time: "11:00 AM - 1:00 PM", subject: "ITEC 100", section: "IT 3-1", room: "CL 3" },
            { time: "4:00 PM - 5:00 PM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "5:00 PM - 7:00 PM", subject: "GNED 12", section: "IT 1-3", room: "ROOM 301" },
            { time: "7:00 PM - 9:00 PM", subject: "GNED 12", section: "CS 1-2", room: "CL 1" }
          ],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [
            { time: "10:00 AM - 1:00 PM", subject: "GNED 01", section: "CS 1-1", room: "ROOM 204" },
            { time: "1:00 PM - 4:00 PM", subject: "ITEC 101", section: "IT 3-1", room: "CL 4" },
            { time: "4:30 PM - 6:30 PM", subject: "ITEC 101", section: "IT 3-2", room: "ROOM 107" },
            { time: "7:00 PM - 8:30 PM", subject: "GNED 06", section: "CS 1-4", room: "CL 3" }
          ],
          wednesday: [
            { time: "10:00 AM - 1:00 PM", subject: "GNED 01", section: "CS 1-3", room: "ROOM 107" },
            { time: "1:00 PM - 3:00 PM", subject: "ITEC 101", section: "IT 3-3", room: "AUDI" },
            { time: "3:30 PM - 5:00 PM", subject: "GNED 06", section: "CS 1-4", room: "AUDI" }
          ],
          thursday: [
            { time: "10:00 AM - 1:00 PM", subject: "GNED 01", section: "CS 1-5", room: "CL 4" },
            { time: "2:00 PM - 4:00 PM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "5:00 PM - 8:00 PM", subject: "GNED 01", section: "CS 1-2", room: "CL 5" }
          ],
          friday: [
            { time: "10:00 AM - 12:00 PM", subject: "ITEC 101", section: "IT 3-1", room: "ROOM 107" },
            { time: "1:00 PM - 4:00 PM", subject: "ITEC 101", section: "IT 3-3", room: "CL 1" },
            { time: "4:00 PM - 7:00 PM", subject: "ITEC 101", section: "IT 3-2", room: "ROOM 201" }
          ],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [4.71, 4.65, 4.28, 4.46],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Attended relevant training and seminars in improving teaching strategies.",
          "Enhanced teaching effectiveness through the use of Student Evaluation of Teachers (SET)."
        ],
        "2025": [
          "Enroll in a Master's program in Information Technology.",
          "Attended relevant training and seminars in improving teaching strategies."
        ],
        "2026": [
          "Continue Master’s studies program in Information Technology.",
          "Keep being an active member of an organization and explore other opportunities."
        ],
        "2027": [
          "Complete graduate studies leading to a Master’s degree related to Computer Studies.",
          "Pursue an additional academic degree in the field of engineering, specifically computer engineering."
        ],
        "2028": ["Pursue a Doctoral degree in Information Technology."],
      },
      loading: {
        "2024": [
          "Human Computer Interaction I",
          "Introduction to Computing",
          "Dalumat ng/sa Filipino",
          "Institutional Orientation",
          "System Integration and Architecture"
        ],
        "2025": [
          "Computer Programming I",
          "Institutional Orientation",
          "Human Computer Interaction II",
          "Science, Technology and Society",
          "Arts Appreciation",
          "System Integration and Architecture"
        ],
        "2026": ["Any Major Subject BSIT/BSCS Course"],
        "2027": ["Any Major Subject BSIT/BSCS Course"],
        "2028": ["Any Major Subject BSIT/BSCS Course"],
      },
      research: {
        "2024": [
          "Engaged in research on computer science education, software development or data analytics.",
          "Guided students in their research as Thesis Adviser and Technical Critic."
        ],
        "2025": [
          "Contributed to Research Related to Computer Studies.",
          "Attended seminars and workshops related to research writing.",
          "Continued guiding students in their research journey."
        ],
        "2026": [
          "Write and Publish / co-author at least one peer-reviewed article in any reputable academic journals.",
          "Continue guiding students in their research journey."
        ],
        "2027": [
          "Write and Publish / co-author at least one peer-reviewed article in any reputable academic journals.",
          "Continue guiding students in their research journey."
        ],
        "2028": [
          "Write and Publish / co-author at least one peer-reviewed article in any reputable academic journals.",
          "Continue guiding students in their research journey."
        ],
      },
      extensions: {
        "2024": ["Engaged and collaborated in the campus extension program."],
        "2025": ["Continued participation in the extension activities BJMP Female Dorm."],
        "2026": ["Participate in the campus extension activities like ICT literacy Training at Molino2."],
        "2027": ["Be an active member or lecturer in an extension of activities provided by the Campus."],
        "2028": ["Be an active member or lecturer in an extension of activities provided by the Campus."],
      }
    }
  },
  //Jessica Ann Sambrano
  {
    first_name: "Jessica Ann",
    last_name: "Sambrano",
    name: "Jessica Ann Sambrano",
    designation: "Instructor I",
    image: "/images/sambrano.JPG",
    diploma: "/diploma/diplom.jpg",
    tor: "/tor/tor.jfif",
    resume: "/resume/resume-sample.png",
    schedule: [
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [
            { time: "8:00 AM - 9:00 AM", subject: "GNED 09 ASYNC", section: "IT 3-2" },
            { time: "10:00 AM - 11:00 AM", subject: "GNED 09 ASYNC", section: "CS 3-2" },
            { time: "11:00 AM - 12:00 AM", subject: "GNED 09 ASYNC", section: "CS 3-3" },
            { time: "12:00 PM - 2:00 PM", subject: "GNED 14", section: "CS 2-5", room: "ROOM 302" },
            { time: "2:00 PM - 3:00 PM", subject: "GNED 14 ASYNC" },
            { time: "3:00 PM - 5:00 PM", subject: "CONSULTATION", room: "FACULTY" }
          ],
          thursday: [
            { time: "9:00 AM - 10:00 AM", subject: "GNED 14 ASYNC", section: "IT 2-3" },
            { time: "10:00 AM - 11:00 AM", subject: "GNED 14 ASYNC", section: "CS 2-2" },
            { time: "11:00 AM - 12:00 PM", subject: "GNED 14 ASYNC", section: "CS 2-1" },
            { time: "12:00 AM - 1:00 PM", subject: "GNED 09 ASYNC", section: "CS 3-1" },
            { time: "1:00 AM - 2:00 PM", subject: "GNED 09 ASYNC", section: "IT 3-1" }
          ],
          friday: [
            { time: "9:00 AM - 11:00 AM", subject: "GNED 14", section: "IT 2-3", room: "ROOM 305" },
            { time: "11:00 AM - 1:00 PM", subject: "GNED 09", section: "CS 3-1", room: "ROOM 305" },
            { time: "1:00 PM - 3:00 PM", subject: "GNED 09", section: "CS 3-2", room: "ROOM 305" },
            { time: "4:00 PM - 5:00 PM", subject: "GNED 09 ASYNC", section: "IT 3-3" },
            { time: "5:00 PM - 7:00 PM", subject: "GNED 09", section: "IT 3-3", room: "ROOM 305" }
          ],
          saturday: [
            { time: "7:00 AM - 9:00 AM", subject: "GNED 14", section: "CS 2-2", room: "ROOM 305" },
            { time: "9:00 AM - 11:00 AM", subject: "GNED 09", section: "IT 3-1", room: "AUDI 2" },
            { time: "1:00 PM - 3:00 PM", subject: "GNED 14", section: "CS 2-1", room: "ROOM 305" },
            { time: "3:00 PM - 5:00 PM", subject: "GNED 09", section: "IT 3-3", room: "ROOM 303" },
            { time: "5:00 PM - 7:00 PM", subject: "GNED 09", section: "IT 3-2", room: "CL 2" }
          ],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            { time: "8:30 AM - 10:00 AM", subject: "GNED 14", section: "CS 2-2", room: "ROOM 203" },
            { time: "10:00 AM - 12:00 PM", subject: "GNED 09", section: "IT 3-4", room: "ROOM 101" },
            { time: "12:00 PM - 2:00 PM", subject: "GNED 14", section: "CS 2-1", room: "ROOM 204" },
            { time: "4:00 PM - 5:30 PM", subject: "GNED 14", section: "CS 2-3", room: "AUDI" }
          ],
          tuesday: [
            { time: "9:00 AM - 12:00 PM", subject: "GNED 09", section: "IT 3-5", room: "ROOM 107" },
            { time: "12:00 PM - 1:30 PM", subject: "GNED 09", section: "CS 3-4", room: "ROOM 107" },
            { time: "2:00 PM - 4:00 PM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "4:00 PM - 5:30 PM", subject: "GNED 14", section: "CS 2-2", room: "CL 3" }
          ],
          wednesday: [
            { time: "8:30 AM - 11:30 AM", subject: "GNED 09", section: "IT 3-3", room: "ROOM 109" },
            { time: "11:30 AM - 1:00 PM", subject: "GNED 09", section: "CS 3-4", room: "ROOM 109" },
            { time: "2:00 PM - 3:00 PM", subject: "GNED 09", section: "IT 3-4", room: "ROOM 204" },
            { time: "3:00 PM - 6:00 PM", subject: "GNED 14", section: "CS 2-4", room: "ROOM 107" }
          ],
          thursday: [],
          friday: [
            { time: "7:00 AM - 8:30 AM", subject: "GNED 14", section: "CS 2-3", room: "AUDI" },
            { time: "9:00 AM - 12:00 PM", subject: "GNED 09", section: "IT 3-2", room: "ROOM 201" },
            { time: "1:00 PM - 4:00 PM", subject: "GNED 09", section: "IT 3-1", room: "AUDI" },
            { time: "4:00 PM - 5:00 PM", subject: "GNED 14", section: "CS 2-1", room: "CL 4" }
          ],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [4.61, 4.38, 4.53, 4.46],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Successfully obtained a license by passing the Board Licensure Examination for Professional Teachers.",
          "Participated in online training and seminars to acquire course-relevant skills and competencies."
        ],
        "2025": [
          "Pursue a Master’s degree to advance academic qualifications.",
          "Finish specialized short courses or certifications to strengthen teaching skills and subject expertise.",
          "Improve professional abilities by joining local and international training programs and workshops related to IT and Computer Science."
        ],
        "2026": [
          "Continue participating in recognized training and seminars in the field of ICT.",
          "Serve as a resource speaker in topics such as Operating Systems and Mobile Technology.",
          "Engage in ongoing workshops related to IT, hosting, mobile technology, and programming.",
          "Earn academic units required for teaching qualifications.",
          "Attend certified workshops for Computer Science and Information Technology related."
        ],
        "2027": [
          "Pursue or achieve candidacy for a postgraduate degree.",
          "Strengthen professional expertise through participation in relevant local and international training programs and workshops in Information Technology and Computer Science."
        ],
        "2028": [
          "Strengthen academic and professional credibility by commencing doctoral studies, if applicable.",
          "Advance technical and instructional competencies through participation in specialized training and workshops in Information Technology and Computer Science at both national and international levels."
        ],
      },
      loading: {
        "2024": [
          "Panitikang Panlipunan",
          "Life and Works of Rizal",
          "Mga Babasahin Hinggil sa Kasaysayan ng Pilipinas",
          "Object-oriented Programming"
        ],
        "2025": [
          "Social and Professional Issues",
          "Introduction to Computing",
          "Panitikang Panlipunan",
          "Life and Works of Rizal"
        ],
        "2026": ["Any Major/Minor Subject BSIT/BSCS Course"],
        "2027": ["Any Major/Minor Subject BSIT/BSCS Course"],
        "2028": ["Any Major/Minor Subject BSIT/BSCS Course"],
      },
      research: {
        "2024": [
          "Participated in scholarly research activities within the field of Computer Studies.",
          "Provided academic guidance to students in the development of their research projects."
        ],
        "2025": ["Maintained active involvement in Computer Studies research and continued mentoring student researchers."],
        "2026": [
          "Engage in collaborative research with fellow educators across various academic disciplines.",
          "Present the outcomes of the research at a local or regional academic conference or colloquium."
        ],
        "2027": [
          "Present and publish research findings on Operating System advancements in a reputable academic journal or conference.",
          "Sustain engagement in research endeavors and offer continuous support to students in their scholarly work."
        ],
        "2028": [
          "Author or co-author at least one peer-reviewed publication in a recognized academic journal.",
          "Provide ongoing mentorship to students throughout their research endeavors."
        ],
      },
      extensions: {
        "2024": [
          "Consistently took part in extension programs and outreach initiatives organized by the department and the university.",
          "Maintained active involvement in institutional and departmental extension activities."
        ],
        "2025": [
          "Consistently took part in extension programs and outreach initiatives organized by the department and the university.",
          "Maintained active involvement in institutional and departmental extension activities."
        ],
        "2026": [],
        "2027": [],
        "2028": [],
      }
    }
  },
  //Benedick Sarmiento
  {
    first_name: "Benedick",
    last_name: "Sarmieto",
    name: "Benedick M. Sarmiento",
    designation: "Instructor I",
    image: "/images/sarmiento.jpg",
    diploma: [{
      name: "INFORMATION TECHNOLOGY MAJOR IN COMPUTER TECHNICIAN",
      url: "https://drive.google.com/file/d/1TCOi2uvlxKWdUmjhgWMxrWj4XY4Jh5ET/view?usp=drive_link"
    },
    {
      name: "BACHELOR OF TECHNICAL-VOCATIONAL TEACHER EDUCATION MAJOR IN COMPUTER HARDWARE SERVICING",
      url: "https://drive.google.com/file/d/162SEpiuPo-_6FjdT250VpWqmOUTZdfX9/view?usp=drive_link"
    },
    ],
    tor: {
      name: "INFORMATION TECHNOLOGY MAJOR IN COMPUTER TECHNICIAN",
      url: "https://drive.google.com/file/d/1O17jZwXcWF811O1QHSJ9VRIHt4s4qkmS/view?usp=drive_link"
    },
    resume: null,
    certificates: [{
      name: "MICROSOFT OFFICE SPECIALIST - OFFICE EXCEL 2010",
      url: "https://drive.google.com/file/d/1QrAWYJde7VNuOTtB5pNT1rK3GgmtWWlL/view?usp=drive_link"
    },
    {
      name: "COMPUTER SYSTEM SERVICING",
      url: "https://drive.google.com/file/d/1IRd1B0khYCocbNAd4JQBU0fSsfrSwGxw/view?usp=drive_link"
    },
    {
      name: "PHILIPPINE TVET TRAINERS QUALIFICATION SYSTEMS (PTTQS)",
      url: "https://drive.google.com/file/d/1-ZOP5PpIyRjEcKLxep95X-VmPfCTN8Ri/view?usp=drive_link"
    },
    ],
    schedule: [
      {
        semesterName: "2nd Sem A.Y 22-23",
        details: {
          monday: [
            { time: "7:00 AM - 8:30 AM", subject: "ITEC 106 (LAB)", section: "IT 3-2", room: "CL 3" },
            { time: "9:00 AM - 10:00 AM", subject: "ITEC 106 (LEC)", section: "IT 3-2", room: "ROOM 303" }
          ],
          tuesday: [{ time: "7:00 AM - 8:30 AM", subject: "ITEC 106 (LAB)", section: "IT 3-2", room: "ROOM 303" }],
          wednesday: [],
          thursday: [{ time: "7:00 AM - 8:30 AM", subject: "ITEC 106 (LAB)", section: "IT 3-1", room: "ROOM 303" },],
          friday: [
            { time: "7:00 AM - 8:30 AM", subject: "ITEC 106 (LAB)", section: "IT 3-1", room: "CL 2" },
            { time: "8:30 AM - 9:30 AM", subject: "ITEC 106 (LEC)", section: "IT 3-1", room: "ROOM 305" }
          ],
          saturday: [
            { time: "7:00 AM - 10:00 AM", subject: "ITEC 106 (LAB)", section: "IT 3-3", room: "CL 3" },
            { time: "10:00 AM - 11:00 AM", subject: "ITEC 106 (LEC)", section: "IT 3-3", room: "ROOM 305" },
            { time: "11:00 AM - 12:00 PM", subject: "ITEC 106 (LEC) ASYNC", section: "IT 3-1" },
            { time: "12:00 PM - 1:00 PM", subject: "ITEC 106 (LEC) ASYNC", section: "IT 3-2" },
            { time: "1:00 PM - 2:00 PM", subject: "ITEC 106 (LEC) ASYNC", section: "IT 3-3" },
          ],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            { time: "3:00 PM - 5:00 PM", subject: "COSC 85", section: "CS 3-2", room: "CL 3" },
            { time: "5:00 PM - 6:00 PM", subject: "COSC 85 (LAB) ASYNC", section: "CS 3-2" },
            { time: "6:00 PM - 7:00 PM", subject: "COSC 85", section: "CS 3-1", room: "ROOM 303" }
          ],
          tuesday: [{ time: "2:00 PM - 5:00 PM", subject: "COSC 85", section: "CS 3-3", room: "CL 3" }],
          wednesday: [
            { time: "2:00 PM - 3:00 PM", subject: "COSC 85 ASYNC", section: "CS 3-1" },
            { time: "3:00 PM - 4:00 PM", subject: "COSC 85 ASYNC", section: "CS 3-2" },
            { time: "4:00 PM - 5:00 PM", subject: "COSC 85 ASYNC", section: "CS 3-3" },
            { time: "5:00 PM - 6:00 PM", subject: "COSC 85", section: "CS 3-3", room: "ROOM 301" },
            { time: "5:00 PM - 6:00 PM", subject: "COSC 85", section: "CS 3-2", room: "ROOM 301" }
          ],
          thursday: [],
          friday: [{ time: "3:00 PM - 6:00 PM", subject: "COSC 85", section: "CS 3-1", room: "CL 2" }],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "7:00 AM - 9:00 AM", subject: "GNED 01", section: "IT 1-2", room: "ROOM 302" },
            { time: "9:00 AM - 10:00 AM", subject: "GNED 01 ASYNC", section: "IT 1-2" }
          ],
          tuesday: [],
          wednesday: [
            { time: "7:00 AM - 9:00 AM", subject: "GNED 01", section: "IT 1-3", room: "ROOM 303" },
            { time: "9:00 AM - 10:00 AM", subject: "GNED 01 ASYNC", section: "IT 1-3" }
          ],
          thursday: [
            { time: "7:00 AM - 8:00 AM", subject: "ITEC 106", section: "IT 3-2", room: "ROOM 305" },
            { time: "8:00 AM - 9:00 AM", subject: "ITEC 106 (LEC) ASYNC", section: "IT 3-2" },
            { time: "9:00 AM - 10:00 AM", subject: "ITEC 106", section: "IT 3-1", room: "ROOM 301" },
            { time: "10:00 AM - 11:00 AM", subject: "ITEC 106 (LEC) ASYNC", section: "IT 3-1" }
          ],
          friday: [],
          saturday: [
            { time: "7:00 AM - 9:00 AM", subject: "ITEC 106", section: "IT 3-1", room: "CL 3" },
            { time: "9:00 AM - 11:00 AM", subject: "ITEC 106", section: "IT 3-2", room: "CL 3" },
            { time: "11:00 AM - 12:00 PM", subject: "ITEC 106 (LAB) ASYNC", section: "IT 3-1" },
            { time: "12:00 PM - 1:00 PM", subject: "ITEC 106 (LAB) ASYNC", section: "IT 3-2" }
          ],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [
            { time: "7:00 AM - 10:00 AM", subject: "ITEC 105", section: "IT 3-2", room: "CL 5" },
            { time: "10:00 AM - 12:00 PM", subject: "ITEC 105", section: "IT 3-3", room: "ROOM 107" },
            { time: "2:00 PM - 4:00 PM", subject: "ITEC 105", section: "IT 3-2", room: "ROOM 201" },
            { time: "4:00 PM - 7:00 PM", subject: "ITEC 105", section: "IT 3-3", room: "CL 5" }
          ],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [4.64, 3.58, null, 4.42],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Passed the Licensure Examination for Professional Teachers.",
          "Started Graduate Studies (Master’s Degree)."
        ],
        "2025": [
          "Completed the Academic Requirements for Graduate Studies (Master’s Degree).",
          "Ongoing thesis writing, aiming to fulfill academic requirements and contribute original research to the field."
        ],
        "2026": [
          "To Complete the  Graduate Studies (Master’s Degree).",
          "To renew  TESDA National Certificate in various Information Technology Areas (Animation, Technical Drafting, Programming, Visual Graphic Design and Computer System Servicing NCII)."
        ],
        "2027": [
          "To renew professional certification in Cisco and CompTIA.",
          "To enroll in Graduate Studies (Doctorate Degree) related to Information Technology."
        ],
        "2028": [
          "To demonstrate up-to-date knowledge in Networking.",
          "To attend IT conferences, expos, and networking events.",
          "To participate in local or international tech communities."
        ],
      },
      loading: {
        "2024": [
          "Network and Communications",
          "Network Fundamentals",
          "Network Management"
        ],
        "2025": [
          "Network and Communications",
          "Network Fundamentals",
          "Network Management"
        ],
        "2026": [
          "Network and Communications",
          "Network Fundamentals",
          "Network Management"
        ],
        "2027": [
          "Network and Communications",
          "Network Fundamentals",
          "Network Management"
        ],
        "2028": [
          "Network and Communications",
          "Network Fundamentals",
          "Network Management"
        ],
      },
      research: {
        "2024": ["Attended research seminars."],
        "2025": ["Engaged in innovation projects or collaborative research with academic peers."],
        "2026": ["To continue the engagement in innovation projects or collaborative research with academic peers."],
        "2027": ["To conduct and publish applied research in computing and technology education."],
        "2028": ["To conduct and publish applied research in computing and technology education."],
      },
      extensions: {
        "2024": ["Served as one of the resource speaker at Mambog Elementary School for Computer System Servicing NCII training."],
        "2025": ["Served as one of the resource speaker at Mambog Elementary School for Computer System Servicing NCII training."],
        "2026": ["To continue to serve as a resource speaker and participate in any extension classes activities."],
        "2027": ["To continue to serve as a resource speaker and participate in any extension classes activities."],
        "2028": ["To continue to serve as a resource speaker and participate in any extension classes activities."],
      }
    }
  },
  //Jerome Tacata
  {
    first_name: "Jerome",
    last_name: "Tacata",
    name: "Jerome Tacata",
    designation: "Instructor I",
    image: "/images/tacata.JPG",
    diploma: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1yTysOCyM5-fhLH5MS_pQmVwtO_8un-fL/view?usp=drive_link"
    },
    ],
    tor: [{
      name: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      url: "https://drive.google.com/file/d/1XdWIDqz-DUPii7WZE8pWRiyYgL_C0P-f/view?usp=drive_link"
    },
    ],
    resume: {
      url: "https://drive.google.com/file/d/102AlDuAN_0K07mSEFJqoHu_UU5GJyDRg/view?usp=drive_link"
    },
    certificates: [{
      name: "CSS ESSENTIALS - CISCO NETWORKING ACADEMY",
      url: "https://drive.google.com/file/d/1dCq6YwlUfLgADAxZjuh18JvisXVqKJdn/view?usp=drive_link"
    },
    {
      name: "CYBER THREAT MANAGEMENT - CISCO NETWORKING ACADEMY",
      url: "https://drive.google.com/file/d/1KEyzF-WQvWZTPYBtjmgm_ts-Iyjgf3eZ/view?usp=drive_link"
    },
    {
      name: "HTML ESSENTIALS - CISCO NETWORKING ACADEMY",
      url: "https://drive.google.com/file/d/1SvLKLsvyza0Vq9bdRoz60yz42W3ucTrA/view?usp=drive_link"
    },
    {
      name: "LEARN SQL: INTRODUCTION TO QUERYING DATA - DICT",
      url: "https://drive.google.com/file/d/1Rfzsx7g_zsbf8WDK2klOYamQSVzxOWDL/view?usp=drive_link"
    },
    {
      name: "NETWORK DEFENSE - CISCO NETWORK ACADEMY",
      url: "https://drive.google.com/file/d/1JglblWbVoWmviuNP1ndFJHSivaVPYN4i/view?usp=drive_link"
    },
    {
      name: "PROGRAMMING FOR BEGINNERS USING PYTHON - DICT",
      url: "https://drive.google.com/file/d/1hPIrqxGZBDdVkNP-GZYz_gcb9TB-fcZp/view?usp=drive_link"
    },
    {
      name: "PYTHON ESSENTIAL 1 - CISCO NETWORK ACADEMY",
      url: "https://drive.google.com/file/d/1szee3tizLHLmWF0XdfyflRXUW5_-4rgm/view?usp=drive_link"
    },
    {
      name: "PYTHON ESSENTIAL 2 - CISCO NETWORK ACADEMY",
      url: "https://drive.google.com/file/d/15dw95V-xRzXSHxKfaXj-NTWhWObAWopN/view?usp=drive_link"
    },
    {
      name: "DIGITAL LEARNING APAC - IBE FORUM",
      url: "https://drive.google.com/file/d/1JOhli0irWsWS9e5d1r_OHrA6tc-v6H9T/view?usp=drive_link"
    },
    {
      name: "CANVAS LEARNING MANAGEMENT SYSTEM - PERPETUAL HELP MOLINO",
      url: "https://drive.google.com/file/d/1iiphM5G_HnLbDXelwSQ41gq0i0axZPUj/view?usp=drive_link",
    },
    {
      name: "PROMOTING GLOBAL ENGAGEMENT TOWARDS A SUSTAINABLE AND SAFE ENVIRONMENT - PERPETUAL HELP MOLINO",
      url: "https://drive.google.com/file/d/1NAzjUv9H20KcRebXKU_MjKHjXtytfvy0/view?usp=drive_link"
    },
    {
      name: "ART OF WRITING RESEARCH ON BLOCKCHAIN TECHNOLOGY - PERPETUAL HELP MOLINO",
      url: "https://drive.google.com/file/d/1EXNhoqEoxWcLdCkKgjvsbHb7GisidWma/view?usp=drive_link"
    },
    {
      name: "INFORMATION TECHNOLOGY ENTREPRENEURIAL DEVELOPMENT, RESEARCH, AND INNOVATION - PERPETUAL HELP MOLINO",
      url: "https://drive.google.com/file/d/1Ux6BP1F4XOkFqIIg8Bw5iHwitXfbDdrx/view?usp=drive_link"
    },
    ],
    schedule: [
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
          ],
          tuesday: [],
          wednesday: [
            { time: "1:00 PM - 3:00 PM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "3:00 PM - 4:00 PM", subject: "GNED 11 ASYNC", section: "CS 1-1" },
            { time: "4:00 PM - 5:00 PM", subject: "GNED 11 ASYNC", section: "CS 1-2" },
            { time: "5:00 PM - 7:00 PM", subject: "GNED 14", section: "IT 2-4", room: "CL 1" },
            { time: "7:00 PM - 9:00 PM", subject: "GNED 11", section: "CS 1-5", room: "ROOM 201" }
          ],
          thursday: [],
          friday: [
            { time: "7:00 AM - 9:00 AM", subject: "GNED 11", section: "CS 1-3", room: "ROOM 201" },
            { time: "9:00 AM - 11:00 AM", subject: "GNED 11", section: "CS 1-2", room: "ROOM 312" },
            { time: "11:00 AM - 12:00 PM", subject: "GNED 14 ASYNC", section: "IT 2-5" },
            { time: "1:00 PM - 3:00 PM", subject: "GNED 14", section: "IT 2-5", room: "CL 1" },
            { time: "3:00 PM - 4:00 PM", subject: "GNED 11 ASYNC", section: "CS 1-3" },
            { time: "4:00 PM - 5:00 PM", subject: "GNED 11 ASYNC", section: "CS 1-5" },
            { time: "5:00 PM - 6:00 PM", subject: "GNED 11 ASYNC", section: "IT 2-4" },
            { time: "7:00 PM - 9:00 PM", subject: "GNED 11", section: "CS 1-1", room: "ROOM 312" }
          ],
          saturday: [
            { time: "8:00 AM - 9:00 AM", subject: "ITEC 85 ASYNC", section: "IT 3-3" },
            { time: "9:00 AM - 11:00 AM", subject: "COSC 111", section: "CS 4-1", room: "ROOM 305" },
            { time: "8:00 AM - 9:00 AM", subject: "ITEC 85 (LEC) ASYNC", section: "IT 3-3" },
            { time: "1:00 PM - 3:00 PM", subject: "ITEC 85 (LAB)", section: "IT 3-3", room: "CL 3" },
            { time: "3:00 PM - 4:00 PM", subject: "ITEC 85 (LEC)", section: "IT 3-3", room: "CL 3" },
            { time: "4:00 PM - 5:00 PM", subject: "ITEC 85 (LEC) ASYNC", section: "IT 3-4" },
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 85 (LAB) ASYNC", section: "IT 3-4" },
            { time: "6:00 PM - 8:00 PM", subject: "ITEC 85 (LAB)", section: "IT 3-4", room: "CL 3" },
            { time: "8:00 PM - 9:00 PM", subject: "ITEC 85 (LEC)", section: "IT 3-4", room: "CL 3" }
          ],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [],
          tuesday: [
            { time: "11:00 AM - 12:00 PM", subject: "DCIT 25", section: "CS 2-4", room: "ROOM 301" },
            { time: "12:00 PM - 1:00 PM", subject: "COSC 65", section: "CS 2-5", room: "ROOM 301" },
            { time: "1:00 PM - 3:00 PM", subject: "ITEC 106", section: "IT 3-6", room: "CL 4" },
            { time: "3:00 PM - 4:00 PM", subject: "ITEC 106 (LAB) ASYNC", section: "IT 3-6" },
            { time: "4:00 PM - 5:00 PM", subject: "DCIT 25", section: "CS 2-6" },
            { time: "6:00 PM - 7:00 PM", subject: "DCIT 25 (LEC) ASYNC", section: "CS 2-4" },
            { time: "7:00 PM - 8:00 PM", subject: "DCIT 25 (LEC) ASYNC", section: "CS 2-6" },
            { time: "8:00 PM - 9:00 PM", subject: "DCIT 25 (LEC) ASYNC", section: "CS 2-5" }
          ],
          wednesday: [
            { time: "2:00 PM - 3:00 PM", subject: "DCIT 25 (LAB) ASYNC", section: "CS 2-4" },
            { time: "3:00 PM - 4:00 PM", subject: "DCIT 25 (LAB) ASYNC", section: "CS 2-6" },
            { time: "4:00 PM - 5:00 PM", subject: "DCIT 25 (LAB) ASYNC", section: "CS 2-5" },
            { time: "5:00 PM - 6:00 PM", subject: "DCIT 25 (LAB) ASYNC", section: "CS 2-7" },
            { time: "6:00 PM - 8:00 PM", subject: "COSC 65", section: "CS 2-5", room: "CL 4" }
          ],
          thursday: [
            { time: "12:00 PM - 2:00 PM", subject: "DCIT 25", section: "CS 2-6", room: "CL 2" },
            { time: "2:00 PM - 4:00 PM", subject: "COSC 65", section: "CS 2-7", room: "CL 3" },
            { time: "5:00 PM - 7:00 PM", subject: "GNED 12", section: "IT 1-6", room: "ROOM 305" },
            { time: "7:00 PM - 9:00 PM", subject: "DCIT 25", section: "CS 2-4", room: "CL 1" }
          ],
          friday: [],
          saturday: [
            { time: "7:00 AM - 8:00 AM", subject: "ITEC 106", section: "IT 3-6", room: "ROOM 301" },
            { time: "8:00 AM - 9:00 AM", subject: "COSC 65", section: "CS 2-7", room: "ROOM 303" },
            { time: "10:00 AM - 12:00 PM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "12:00 PM - 1:00 PM", subject: "ITEC 106 (LEC) ASYNC", section: "IT 3-6" },
            { time: "1:00 PM - 2:00 PM", subject: "COSC 65 (LEC) ASYNC", section: "CS 2-7" },
            { time: "2:00 PM - 3:00 PM", subject: "GNED 12 ASYNC", section: "IT 1-6" }
          ],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [
            { time: "10:00 AM - 12:00 PM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "12:00 PM - 2:00 PM", subject: "ITEC 50", section: "IT 1-1", room: "ROOM 203" },
            { time: "3:00 PM - 5:00 PM", subject: "DCIT 55", section: "CS 2-5", room: "ROOM 201" },
          ],
          wednesday: [
            { time: "7:00 AM - 9:00 AM", subject: "ITEC 60", section: "IT 2-2", room: "CL 5" },
            { time: "10:00 AM - 1:00 PM", subject: "DCIT 55", section: "CS 2-5", room: "CL 4" },
            { time: "3:00 PM - 5:00 PM", subject: "ITEC 60", section: "IT 2-3", room: "ROOM 204" },
            { time: "5:00 PM - 7:00 PM", subject: "DCIT 55", section: "CS 2-1", room: "ACCRE" },
          ],
          thursday: [
            { time: "7:00 AM - 10:00 AM", subject: "ITEC 50", section: "IT 1-1", room: "CL 2" },
            { time: "1:00 PM - 4:00 PM", subject: "ITEC 60", section: "IT 2-3", room: "CL 1" },
            { time: "4:00 PM - 7:00 PM", subject: "ITEC 60", section: "IT 2-2", room: "CL 1" }
          ],
          friday: [
            { time: "7:00 AM - 10:00 AM", subject: "ITEC 60", section: "IT 2-6", room: "CL 5" },
            { time: "10:00 AM - 1:00 PM", subject: "DCIT 55", section: "CS 2-1", room: "CL 5" },
            { time: "3:00 PM - 5:00 PM", subject: "ITEC 60", section: "IT 2-6", room: "ROOM 201" }
          ],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 4.43, 4.43, 4.50],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": ["Enhanced IT teaching methodologies by attending workshops on blended learning and integrating emerging technologies."],
        "2025": [
          "Passed the Board in Licensure Examination for Teachers.",
          "Mentored students in certification programs or capstone projects."
        ],
        "2026": [
          "Complete the Master’s degree in Information Technology",
          "Publish a research paper or present at a conference on innovative IT education strategies or technical trends."
        ],
        "2027": ["Pursue a leadership role in curriculum development for IT programs, ensuring alignment with industry standards."],
        "2028": ["Explore doctoral studies or advanced certifications."],
      },
      loading: {
        "2024": [
          "CvSU 101",
          "Introduction to Computing",
          "Social and Professional Issues"
        ],
        "2025": [
          "Web Systems and Technologies 1",
          "Integrated and Technologies 1",
          "Advance Database Management System"
        ],
        "2026": ["Any Major/Minor Subject BSIT/BSCS Course"],
        "2027": ["Any Major/Minor Subject BSIT/BSCS Course"],
        "2028": ["Any Major/Minor Subject BSIT/BSCS Course"],
      },
      research: {
        "2024": ["Guided students with their research development."],
        "2025": ["Served as one of the proponents of a faculty study."],
        "2026": ["One of the proponents of a Faculty Study."],
        "2027": ["One of the proponents of a Faculty Study."],
        "2028": ["One of the proponents of a Faculty Study."],
      },
      extensions: {
        "2024": ["Participated in the campus extension activities like Computer System Servicing at Mambog."],
        "2025": ["Actively participated in extension programs organized at the campus level, especially those initiated by the department."],
        "2026": ["Participation in community-based activities will be continued to contribute toward the achievement of long-term, sustainable development goals in the local area."],
        "2027": ["Participation in community-based activities will be continued to contribute toward the achievement of long-term, sustainable development goals in the local area."],
        "2028": ["Participation in community-based activities will be continued to contribute toward the achievement of long-term, sustainable development goals in the local area."],
      }
    }
  },
  //Pamela Tagum
  {
    first_name: "Pamela",
    last_name: "Tagum",
    name: "Pamela Marie O. Tagum",
    designation: "Instructor I",
    image: "/images/tagum.JPG",
    diploma: [{
      name: "DIPLOMA IN COMPUTER ENGINEERING TECHNOLOGY",
      url: "https://drive.google.com/file/d/1ANoBLwbbR_Guqo0G5uVE43NXy5VdlaQX/view?usp=drive_link",
    },
    {
      name: "BACHELOR OF TECHNICAL TEACHER EDUCATION",
      url: "https://drive.google.com/file/d/14DVxCjdrG7UNrjlP9NH3SmVVnFS2iFjD/view?usp=drive_link"
    },
    ],
    tor: [{
      name: "BACHELOR OF TECHNICAL TEACHER EDUCATION",
      url: "https://drive.google.com/file/d/1ULne0ElwwPXxIN6OlxQOxqD8RUwfVaLc/view?usp=drive_link"
    },
    ],
    resume: null,
    certificates: [{
      name: "TEFL COURSE - TEFL PROFESSIONAL INSTITUTE",
      url: "https://drive.google.com/file/d/13ABUtDl0xwZ5KG0sbWntkY-e_hopMXaG/view?usp=drive_link"
    },
    {
      name: "TEACHING ENGLISH TO YOUNG LEARNERS (TEYL) - TESOL/TEFL",
      url: "https://drive.google.com/file/d/1edRoIllzNgjWf3Km5kdlW9dsHjGp6ZpM/view?usp=drive_link"
    },
    {
      name: "TEACHING ENGLISH TO SPEAKERS OF OTHER LANGAUGE - TESOL",
      url: "https://drive.google.com/file/d/1WT1UIOWaDjzPoOqiGxlIb43o-Hgpm5Qb/view?usp=drive_link"
    },
    {
      name: "COMPUTER SYSTEMS SERVICING",
      url: "https://drive.google.com/file/d/1p_ZrB9asZOz8REocCvlWflZC_cbdN80O/view?usp=drive_link"
    },
    ],
    schedule: [
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            { time: "7:00 PM - 9:00 PM", subject: "ITEC 95", section: "IT 3-4", room: "ROOM 204" }
          ],
          tuesday: [],
          wednesday: [
            { time: "7:00 PM - 8:30 PM", subject: "ITEC 95", section: "IT 3-5", room: "AUDI" }
          ],
          thursday: [],
          friday: [
            { time: "7:30 PM - 9:00 PM", subject: "ITEC 95", section: "IT 3-5", room: "ROOM 201" }
          ],
          saturday: [
            { time: "7:00 AM - 10:00 AM", subject: "GNED 09", section: "CS 3-6", room: "ROOM 204" }
          ],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 4.67],
    evaluation_labels: ["1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": ["Strengthened technical knowledge in emerging technologies through joining seminars and workshops."],
        "2025": ["Attended local and national conferences to gather relevant-information in the field of IT/ICT."],
        "2026": ["Pursue academic and teaching credentials such as TESDA, Master's of Technology in Education Program, and Robotics Coach Certification."],
        "2027": [
          "Pursue continuous training to deepen expertise and consistently work toward completing graduate programs.",
          "Aim to gain global experience by pursuing work opportunities overseas."
        ],
        "2028": ["Engage in continuous learning to strengthen competencies and remain responsive to technological advancements."],
      },
      loading: {
        "2024": [],
        "2025": [],
        "2026": [],
        "2027": [],
        "2028": [],
      },
      research: {
        "2024": [],
        "2025": [],
        "2026": [],
        "2027": [],
        "2028": [],
      },
      extensions: {
        "2024": [],
        "2025": [],
        "2026": [],
        "2027": [],
        "2028": [],
      }
    }
  },
  //Cesar Talibong
  {
    first_name: "Cesar II",
    last_name: "Talibong",
    name: "Cesar II B. Talibong ",
    designation: "Instructor I",
    image: "/images/talibong.jpg",
    diploma: [
      {
        name: "BACHELOR OF SCIENCE IN INDUSTRIAL EDUCATION",
        url: "https://drive.google.com/file/d/1kgtKuCwTSfufgj0RdQgNS8yPwDuSo4Wa/view?usp=drive_link"
      },
    ],
    tor: [{
      name: "BACHELOR OF SCIENCE IN INDUSTRIAL EDUCATION",
      url: "https://drive.google.com/file/d/13HpTCurPKzo68rvQanTrlW4WpIUPvjMg/view?usp=drive_link"
    },
    ],
    resume:
    {
      url: "https://docs.google.com/document/d/1AFp6ue4xok1x7FQcGMhaQhZPXdrL36uP/edit?usp=drive_link&ouid=102452445519148225886&rtpof=true&sd=true"
    },
    certificates: null,
    speaking_engagements: [{
      name: "2024 RESEARCH SYMPOSIUM - CALL FOR PROPOSALS - CAVITE STATE UNIVESITY - BACOOR",
      url: "https://drive.google.com/file/d/1zykr4P8Xb_PzZPaW3QH_n5Q8kSUY_F6J/view?usp=drive_link"
    }],
    schedule: [
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            { time: "9:00 AM - 11:00 AM", subject: "INSY 55", section: "IT 3-3", room: "ROOM 303" },
            { time: "1:00 PM - 3:00 PM", subject: "INSY 55 (LAB)", section: "IT 3-1", room: "ROOM 302" }
          ],
          tuesday: [],
          wednesday: [
            { time: "7:00 AM - 8:00 AM", subject: "INSY 55 ASYNC", section: "IT 3-1" },
            { time: "8:00 AM - 9:00 AM", subject: "INSY 55 ASYNC", section: "IT 3-2" },
            { time: "9:00 AM - 10:00 AM", subject: "INSY 55 ASYNC", section: "IT 3-3" },
            { time: "10:00 AM - 11:00 AM", subject: "INSY 55", section: "IT 3-2", room: "ROOM 305" },
            { time: "12:00 PM - 1:00 PM", subject: "ITEC 85", section: "IT 3-6", room: "ROOM 305" },
            { time: "1:00 PM - 2:00 PM", subject: "INSY 55", section: "IT 3-1", room: "ROOM 305" },
            { time: "2:00 PM - 4:00 PM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "4:00 PM - 5X:00 PM", subject: "ITEC 85", section: "IT 3-5", room: "ROOM 305" },
            { time: "6:00 PM - 7:00 PM", subject: "INSY 55 ASYNC", section: "IT 3-4" },
            { time: "7:00 PM - 8:00 PM", subject: "INSY 55 (LAB )ASYNC", section: "IT 3-4" }
          ],
          thursday: [
            { time: "1:00 PM - 3:00 PM", subject: "ITEC 85", section: "IT 3-6", room: "ROOM 303" },
            { time: "3:00 PM - 5:00 PM", subject: "ITEC 85", section: "IT 3-5", room: "ROOM 302" },
            { time: "6:00 PM - 7:00 PM", subject: "INSY 55", section: "IT 3-3", room: "ROOM 305" }
          ],
          friday: [
            { time: "7:00 AM - 8:00 AM", subject: "INSY 55 (LAB) ASYNC", section: "IT 3-1" },
            { time: "8:00 AM - 9:00 AM", subject: "INSY 55 (LAB) ASYNC", section: "IT 3-2" },
            { time: "9:00 AM - 10:00 AM", subject: "INSY 55 (LAB) ASYNC", section: "IT 3-3" },
            { time: "10:00 AM - 12:00 PM", subject: "INSY 55 (LAB)", section: "IT 3-2", room: "ROOM 302" },
            { time: "12:00 PM - 1:00 PM", subject: "ITEC 85 ASYNC", section: "IT 3-5" },
            { time: "1:00 PM - 2:00 PM", subject: "ITEC 85 ASYNC", section: "IT 3-6" },
            { time: "3:00 PM - 4:00 PM", subject: "ITEC 85 (LAB) ASYNC", section: "IT 3-5" },
            { time: "4:00 PM - 6:00 PM", subject: "INSY 55", section: "IT 3-4", room: "ROOM 303" },
            { time: "6:00 PM - 7:00 PM", subject: "INSY 55", section: "IT 3-4", room: "CL 4" },
            { time: "7:00 PM - 8:00 PM", subject: "ITEC 85 (LAB) ASYNC", section: "IT 3-6" }
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "7:00 AM - 9:00 AM", subject: "DCIT 23", section: "IT 1-5", room: "CL 2" },
            { time: "9:00 AM - 11:00 AM", subject: "DCIT 23 (LAB) ASYNC", section: "IT 1-5" },
            { time: "11:00 AM - 1:00 PM", subject: "DCIT 23 (LAB) ASYNC", section: "IT 1-4" },
            { time: "4:00 PM - 5:00 PM", subject: "ITEC 106 (LEC) ASYNC", section: "IT 3-3" },
            { time: "6:00 PM - 8:00 PM", subject: "DCIT 23", section: "IT 1-4", room: "CL 3" },
            { time: "8:00 PM - 9:00 PM", subject: "DCIT 23", section: "IT 1-4", room: "CL 3" }
          ],
          tuesday: [
            { time: "9:00 AM - 10:00 AM", subject: "DCIT 23", section: "CS 1-3", room: "CL 4" },
            { time: "10:00 AM - 12:00 PM", subject: "DCIT 23", section: "CS 1-3", room: "CL 4" },
            { time: "1:00 PM - 2:00 PM", subject: "ITEC 106", section: "IT 3-3", room: "ROOM 305" },
            { time: "2:00 PM - 3:00 PM", subject: "ITEC 106 (LAB) ASYNC", section: "IT 3-3" },
            { time: "3:00 PM - 5:00 PM", subject: "DCIT 23", section: "IT 1-5", room: "CL 4" },
            { time: "5:00 PM - 6:00 PM", subject: "DCIT 23", section: "IT 1-5", room: "CL 4" }
          ],
          wednesday: [
            { time: "9:00 AM - 11:00 AM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "11:00 AM - 1:00 PM", subject: "DCIT 23 (LAB) ASYNC", section: "CS 1-3" },
            { time: "1:00 PM - 3:00 PM", subject: "GNED 06", section: "CS 1-1", room: "ROOM 301" },
            { time: "3:00 PM - 4:00 PM", subject: "GNED 06 ASYNC", section: "CS 1-1" }
          ],
          thursday: [],
          friday: [],
          saturday: [
            { time: "11:00 AM - 1:00 PM", subject: "DCIT 23", section: "IT 1-4", room: "CL 1" },
            { time: "3:00 PM - 5:00 PM", subject: "DCIT 23", section: "CS 1-3", room: "CL 2" },
            { time: "5:00 PM - 7:00 PM", subject: "ITEC 106", section: "IT 3-3", room: "CL 1" }
          ],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            { time: "8:00 AM - 10:00 AM", subject: "ITEC 50", section: "CS 1-2", room: "AUDI" },
            { time: "1:00 PM - 4:00 PM", subject: "ITEC 60", section: "IT 2-4", room: "CL 4" },
            { time: "4:00 PM - 7:00 PM", subject: "ITEC 60", section: "IT 2-5", room: "CL 3" }
          ],
          tuesday: [],
          wednesday: [
            { time: "9:00 AM - 11:00 AM", subject: "ITEC 60", section: "IT 2-5", room: "AUDI 2" },
            { time: "11:00 AM - 1:00 PM", subject: "ITEC 60", section: "IT 2-4", room: "AUDI 2" }
          ],
          thursday: [
            { time: "7:00 AM - 9:00 AM", subject: "ITEC 60", section: "IT 2-1", room: "CL 3" },
            { time: "9:00 AM - 11:00 AM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "1:00 PM - 4:00 PM", subject: "ITEC 50", section: "CS 1-2", room: "CL 3" },
            { time: "4:00 PM - 6:00 PM", subject: "ITEC 50", section: "CS 1-1", room: "ROOM 101" }
          ],
          friday: [
            { time: "7:00 AM - 10:00 AM", subject: "ITEC 60", section: "IT 2-1", room: "CL 3" },
            { time: "6:00 PM - 9:00 PM", subject: "ITEC 50", section: "CS 1-1", room: "CL 2" }
          ],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 4.31, null, 4.12],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Attended local and national seminars and training about IT.",
          "Attended workshops in blended learning."
        ],
        "2025": [
          "Attended more workshops integrating emerging technologies and css.",
          "Attended Module Creation Workshop and Capability Enhancement Training.",
          "Passed the licensure examination for teachers"
        ],
        "2026": [
          "Be a resource speaker about any seminars related to IT.",
          "Attend Module Creation Workshop and Capability Enhancement Training."
        ],
        "2027": [
          "Attend more local and national seminars and training about IT.",
          "Taking more certification from any available trainings online.",
          "Attend Module Creation Workshop and Capability Enhancement Training."
        ],
        "2028": [
          "Attend more local and national seminars and training about IT.",
          "Taking more certification from any available trainings online.",
          "Attend Module Creation Workshop and Capability Enhancement Training."
        ],
      },
      loading: {
        "2024": [
          "Computer Programming II",
          "IT Elective 2",
          "Information Assurance and Security 1",
          "System Analysis and Design"
        ],
        "2025": [
          "Human Computer Interaction 1",
          "Information Assurance and Security 1",
          "Integrated Programming and Technologies 1",
          "Web Systems and Technologies 1"
        ],
        "2026": ["Any Major/Minor Subject BSIT/BSCS Course"],
        "2027": ["Any Major/Minor Subject BSIT/BSCS Course"],
        "2028": ["Any Major/Minor Subject BSIT/BSCS Course"],
      },
      research: {
        "2024": ["Participated in Research symposium and presented our own developed title."],
        "2025": ["Guided students with their research development."],
        "2026": ["Serve as adviser or panelist in undergraduate capstone/thesis projects."],
        "2027": ["Serve as adviser or panelist in undergraduate capstone/thesis projects."],
        "2028": ["Serve as adviser or panelist in undergraduate capstone/thesis projects."],
      },
      extensions: {
        "2024": ["Participated in extension activities for community development in Mambog Elementary School."],
        "2025": ["Participated in extension activities for community development and having my share of educating students in CSS."],
        "2026": ["Participate in Extension programs."],
        "2027": ["Participate in Extension programs."],
        "2028": ["Participate in Extension programs."],
      }
    }
  },
  //Russel Villareal
  {
    first_name: "Russel Adrianne",
    last_name: "Villareal",
    name: "Russel Adrianne Villareal",
    designation: "Instructor I",
    image: "/images/villareal.JPG",
    diploma: [null],
    tor: [null],
    resume: {
      url: "https://drive.google.com/file/d/1thAHDQ1hSViTTXM-keeejBOgu1dvVnnE/view?usp=drive_link"
    },
    certificates: [{
      name: "SEMINAR-WORKSHOP ON MODULE DEVELOPMENT AND PUBLICATION - CAVITE STATE UNIVERSITY - BACOOR",
      url: "https://drive.google.com/file/d/1H5xEkT1TrLUmC9MZuyevKh1A-XQCW31P/view?usp=drive_link"
    }],
    speaking_engagements: [{
      name: "COMPUTER LITERACY AND SYSTEM SUPPORT EXTENSION - MAMBOG ELEMENTARY SCHOOL",
      url: "https://drive.google.com/file/d/1loyMz2C6OmtHSI_JMEBRO7lGi1ou9lzt/view?usp=drive_link"
    },
    {
      name: "2024 RESEACH SYMPOSIUM - CALL FOR PROPOSALS - CAVITE STATE UNIVERSITY - BACOOR",
      url: "https://drive.google.com/file/d/1b_sUN997MR80cJmLkq_gIaI3m2OfS9_7/view?usp=drive_link"
    }],
    schedule: [
      {
        semesterName: "1st Sem A.Y 23-24",
        details: {
          monday: [
            { time: "12:00 PM - 2:00 PM", subject: "DCIT 65", section: "CS 3-2", room: "ROOM 109" },
            { time: "2:00 PM - 3:00 PM", subject: "DCIT 65 ASYNC", section: "CS 3-2" },
            { time: "3:00 PM - 4:00 PM", subject: "DCIT 65 ASYNC", section: "CS 3-3" },
            { time: "4:00 PM - 5:00 PM", subject: "COSC 101", section: "CS 3-1" },
            { time: "5:00 PM - 6:00 PM", subject: "COSC 101 (LAB) ASYNC", section: "CS 3-1" },
            { time: "6:00 PM - 7:00 PM", subject: "COSC 105 ASYNC", section: "CS 4-1" },
            { time: "7:00 PM - 8:00 PM", subject: "COSC 105 (LAB) ASYNC", section: "CS 4-1" }
          ],
          tuesday: [],
          wednesday: [
            { time: "7:00 AM - 9:00 AM", subject: "ITEC 80 (LAB)", section: "IT 3-5", room: "CL 3" },
            { time: "9:00 AM - 11:00 AM", subject: "COSC 101", section: "CS 3-1", room: "CL 4" },
            { time: "11:00 AM - 12:00 PM", subject: "COSC 101 (LEC)", section: "CS 3-1", room: "ROOM 301" },
            { time: "12:00 PM - 1:00 PM", subject: "COSC 105 (LEC)", section: "CS 4-1", room: "CL 3" },
            { time: "1:00 PM - 3:00 PM", subject: "ITEC 80", section: "IT 3-4", room: "AUDI 3" },
            { time: "3:00 PM - 5:00 PM", subject: "COSC 105", section: "CS 4-1", room: "CL 2" },
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 80 ASYNC", section: "IT 3-4" },
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 80 ASYNC", section: "IT 3-4" }
          ],
          thursday: [],
          friday: [
            { time: "8:00 AM - 10:00 AM", subject: "DCIT 65", section: "CS 3-3", room: "ROOM 109" },
            { time: "1O:00 AM - 12:00 PM", subject: "ITEC 80 (LAB)", section: "IT 3-4", room: "ROOM 109" },
            { time: "1:00 PM - 3:00 PM", subject: "ITEC 80", section: "IT 3-5", room: "ROOM 109" },
            { time: "3:00 PM - 5:00 PM", subject: "CONSULTATION", room: "FACULTY" }
          ],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 23-24",
        details: {
          monday: [
            { time: "9:00 AM - 11:00 AM", subject: "DCIT 23", section: "IT 1-6", room: "CL 4" },
            { time: "11:00 AM - 1:00 PM", subject: "GNED 12", section: "IT 1-5", room: "ROOM 301" },
            { time: "1:00 PM - 2:00 PM", subject: "GNED 12 ASYNC", section: "IT 1-5" },
            { time: "2:00 PM - 3:00 PM", subject: "GNED 12 ASYNC", section: "IT 1-4" },
            { time: "4:00 PM - 5:00 PM", subject: "ITEC 50 (LEC) ASYNC", section: "IT 1-3" },
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 50", section: "IT 1-3", room: "ROOM 305" },
            { time: "6:00 PM - 8:00 PM", subject: "ITEC 50", section: "IT 1-3", room: "CL 2" },
          ],
          tuesday: [
            { time: "7:00 AM - 9:00 AM", subject: "ITEC 100", section: "IT 3-5", room: "CL 3" },
            { time: "9:00 AM - 11:00 AM", subject: "DCIT 23 (LAB) ASYNC", section: "IT 1-6" },
            { time: "11:00 AM - 1:00 PM", subject: "ITEC 100", section: "IT 3-6", room: "CL 3" },
            { time: "2:00 PM - 4:00 PM", subject: "CONSULTATION", room: "FACULTY" },
            { time: "4:00 PM - 5:00 PM", subject: "ITEC 100 (LAB) ASYNC", section: "IT 3-6" },
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 100 (LEC) ASYNC", section: "IT 3-6" }
          ],
          wednesday: [],
          thursday: [
            { time: "8:00 AM - 9:00 AM", subject: "ITEC 100", section: "IT 3-5", room: "ROOM 305" },
            { time: "9:00 AM - 10:00 AM", subject: "DCIT 23", section: "IT 1-6", room: "CL 1" },
            { time: "10:00 AM - 12:00 PM", subject: "DCIT 23", section: "IT 1-6", room: "CL 1" },
            { time: "1:00 PM - 2:00 PM", subject: "ITEC 100", section: "IT 3-6", room: "ROOM 302" },
            { time: "2:00 PM - 4:00 PM", subject: "GNED 12", section: "IT 1-4", room: "ROOM 302" },
            { time: "4:00 PM - 5:00 PM", subject: "ITEC 100 (LAB) ASYNC", section: "IT 3-5" },
            { time: "5:00 PM - 6:00 PM", subject: "ITEC 100 (LEC) ASYNC", section: "IT 3-5" },
            { time: "6:00 PM - 7:00 PM", subject: "ITEC 100 (LAB) ASYNC", section: "IT 1-3" },
          ],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "1st Sem A.Y 24-25",
        details: {
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
          saturday: [],
          sunday: [],
        }
      },
      {
        semesterName: "2nd Sem A.Y 24-25",
        details: {
          monday: [
            { time: "10:00 AM - 1:00 PM", subject: "COSC 95", section: "CS 3-3", room: "ROOM 109" },
            { time: "3:00 PM - 6:30 PM", subject: "GNED 08", section: "IT 2-4", room: "CL 4" },
            { time: "6:30 PM - 8:00 PM", subject: "GNED 08", section: "CS 2-3", room: "CL 4" }
          ],
          tuesday: [
            { time: "7:00 AM - 8:00 PM", subject: "GNED 08", section: "CS 2-3", room: "CL 4" },
            { time: "11:00 AM - 1:00 PM", subject: "CONSULTATION", room: "FACULTY" }
          ],
          wednesday: [
            { time: "7:00 AM - 10:00 AM", subject: "COSC 95", section: "CS 3-2", room: "AUDI" },
            { time: "3:00 PM - 4:00 PM", subject: "DCIT 25", section: "IT 2-1", room: "AUDI 2" },
            { time: "4:00 PM - 6:00 PM", subject: "DCIT 25", section: "IT 2-1", room: "CL 3" }
          ],
          thursday: [],
          friday: [
            { time: "8:30 AM - 10:00 AM", subject: "GNED 08", section: "CS 2-3", room: "ROOM 107" },
            { time: "12:00 PM - 2:00 PM", subject: "DCIT 25", section: "IT 2-2", room: "ROOM 201" },
            { time: "2:00 PM - 4:00 PM", subject: "DCIT 25", section: "IT 2-1", room: "ROOM 201" },
            { time: "4:00 PM - 7:00 PM", subject: "DCIT 25", section: "IT 2-2", room: "CL 1" }
          ],
          saturday: [],
          sunday: [],
        }
      }
    ],
    evaluation_scores: [null, 2.75, null, 4.33],
    evaluation_labels: ["1st Sem A.Y 23-24", "2nd Sem A.Y 23-24", "1st Sem A.Y 24-25", "2nd Sem A.Y 24-25"],
    development_plan: {
      professionalDevelopment: {
        "2024": [
          "Passed the Board in Licensure Examination for Teachers.",
          "Enhanced IT teaching methodologies by attending workshops on blended learning and integrating emerging technologies."
        ],
        "2025": [
          "Mentored students in certification programs or capstone projects.",
          "Enhanced teaching effectiveness through systematic self-evaluation, guided by the results of the Student Evaluation of Teachers (SET), and by thoughtfully integrating feedback into instructional strategies."
        ],
        "2026": [
          "Complete the Master’s degree in Information Technology",
          "Publish a research paper or present at a conference on innovative IT education strategies or technical trends."
        ],
        "2027": ["Pursue a leadership role in curriculum development for IT programs, ensuring alignment with industry standards."],
        "2028": ["Explore doctoral studies or advanced certifications."],
      },
      loading: {
        "2024": [
          "Professional Ethics",
          "Understanding The Self",
          "Data Structure And Algorithm",
          "Programming Languages"
        ],
        "2025": [
          "Professional Ethics",
          "Understanding The Self",
          "Data Structure And Algorithm",
          "Programming Languages"
        ],
        "2026": [
          "Any subjects related to General Education, Multimedia and IT/CS.",
          "Any General Education Subjects IT/CS."
        ],
        "2027": [
          "Any subjects related to General Education, Multimedia and IT/CS.",
          "Any General Education Subjects IT/CS."
        ],
        "2028": [
          "Any subjects related to General Education, Multimedia and IT/CS.",
          "Any General Education Subjects IT/CS."
        ],
      },
      research: {
        "2024": ["Served as one of the proponents of a faculty study."],
        "2025": ["Served as one of the proponents of a faculty study."],
        "2026": ["One of the proponents of a Faculty Study."],
        "2027": ["One of the proponents of a Faculty Study."],
        "2028": ["One of the proponents of a Faculty Study."],
      },
      extensions: {
        "2024": ["Participated in the Project 2 Classes Objecives."],
        "2025": ["Actively Participate in department and university extension activity."],
        "2026": ["Participate in the campus extension activities."],
        "2027": ["Participate in the campus extension activities."],
        "2028": ["Participate in the campus extension activities."],
      },
    }
  },

];