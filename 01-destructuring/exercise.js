const educationalPlatform = {
  platformName: "TechMastery",
  launchYear: 2021,
  isPublic: true,
  courses: {
    course001: {
      title: "Marketing Digital",
      category: "Business",
      description:
        "Empieza de nuevo o mejora tus habilidades—¡en solo unas semanas, domina las habilidades de marketing digital que necesitas para hacer crecer cualquier negocio en línea!",
      durationWeeks: 4,
      topics: {
        topic1: "SEO",
        topic2: "Content Strategy",
        topic3: "Social Media",
        topic4: "Analytics",
      },
      difficulty: "Beginner",
      instructors: {
        instructor1: {
          name: "Alice Morgan",
          experienceYears: 8,
          role: "Lead Instructor",
        },
        instructor2: {
          name: "Carlos Lopez",
          experienceYears: 4,
          role: "Assistant",
        },
      },
      reviews: {
        review1: {
          reviewerName: "Sara",
          rating: 4.5,
          comment: "Amazing course for beginners!",
          date: "2022-08-21",
        },
        review2: {
          reviewerName: "Mike",
          rating: 4.0,
          comment: "Great practical examples!",
          date: "2022-09-15",
        },
      },
    },
    course002: {
      title: "Ingeniería en Inteligencia Artificial",
      category: "Technology",
      description:
        "De cero a héroe en IA con nuestro bootcamp para principiantes. Aprende y lanza tu carrera en la especialidad tech que más crece.",
      durationWeeks: 12,
      topics: {
        topic1: "Python",
        topic2: "Neural Networks",
        topic3: "Machine Learning Algorithms",
      },
      difficulty: "Intermediate",
      instructors: {
        instructor1: {
          name: "Dr. Julian Wong",
          experienceYears: 12,
          role: "Head Instructor",
        },
        instructor2: {
          name: "Rebecca Lin",
          experienceYears: 6,
          role: "TA",
        },
      },
      reviews: {
        review1: {
          reviewerName: "Jorge",
          rating: 5.0,
          comment: "Challenging but very rewarding!",
          date: "2023-01-03",
        },
      },
      prerequisites: {
        required: {
          requirement1: "Basic Programming",
          requirement2: "Mathematics",
        },
        recommended: {
          recommendation1: "Python Basics",
        },
      },
    },
  },
  users: {
    user1001: {
      name: "Alex Smith",
      role: "Student",
      enrolledCourses: {
        course001: "Marketing Digital",
        course002: "Ingeniería en Inteligencia Artificial",
      },
      progress: {
        course001: 85,
        course002: 40,
      },
      achievements: {
        achievement1: {
          title: "Marketing Digital Mastery",
          dateEarned: "2023-07-15",
          description:
            "Completed the Marketing Digital course with a final project grade above 90%.",
        },
      },
      preferences: {
        notifications: true,
        theme: "dark",
      },
    },
    user1002: {
      name: "Maria Sanchez",
      role: "Instructor",
      teachingCourses: {
        course002: "Ingeniería en Inteligencia Artificial",
      },
      bio: "AI researcher with a passion for teaching complex topics in an accessible way.",
      availability: {
        weekdays: {
          day1: "Monday",
          day2: "Wednesday",
          day3: "Friday",
        },
        hours: { start: "10:00", end: "16:00" },
      },
    },
  },
  resources: {
    videoLibrary: {
      vid101: {
        title: "Introduction to Marketing",
        courseID: "course001",
        lengthMinutes: 15,
        format: "HD",
        tags: {
          tag1: "intro",
          tag2: "marketing",
        },
        creator: "TechMastery Studio",
        likes: 230,
      },
    },
    documents: {
      doc201: {
        title: "AI Bootcamp Syllabus",
        courseID: "course002",
        fileType: "PDF",
        pages: 12,
        downloadLink: "/docs/ai-bootcamp-syllabus.pdf",
      },
    },
  },
  support: {
    contactEmail: "support@techmastery.com",
    hotline: "+1-800-555-0199",
    faqs: {
      faq1: {
        question: "What is the refund policy?",
        answer:
          "Students can request a refund within 14 days of the course start date if they are not satisfied.",
      },
      faq2: {
        question: "How can I contact my instructor?",
        answer:
          "Students can reach instructors via the messaging system in their enrolled courses.",
      },
    },
    liveChatAvailability: {
      weekdays: {
        day1: "Monday",
        day2: "Tuesday",
        day3: "Thursday",
      },
      hours: { start: "09:00", end: "17:00" },
      timezone: "UTC-5",
    },
  },
};

const { platformName } = educationalPlatform;

console.log(platformName);

const {
  courses: {
    course002: { difficulty: difficulty2 },
  },
} = educationalPlatform;

console.log(difficulty2);

const {
  users: {
    user1001: { name, role, enrolledCourses },
  },
} = educationalPlatform;

console.log(name, role, enrolledCourses);
