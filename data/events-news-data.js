export const newsAndEventsData = async () => {
  try {
    const response = await $fetch(
      "https://mapproject.nvs.la/api/v1/sg-4/vlogdata/NEWS%20&%20EVENTS/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// export const newsAndEventsData = [
//   {
//     id: "1",
//     section: "news",
//     title: "University Open Day",
//     description:
//       "Join us for an unforgettable experience at our highly anticipated University Open Day! This grand event is your golden opportunity to immerse yourself in the vibrant and dynamic atmosphere of our esteemed institution. Prepare for an entire day filled with engaging activities, including in-depth campus tours, thought-provoking informative sessions, and the exclusive chance to interact personally with our distinguished faculty members. Delve into the heart of our university and discover the diverse array of programs that define us. Whether you're a prospective student eager to explore your academic future or a community member curious about the intellectual hub in your midst, this is your chance to witness and experience the very essence of our educational legacy. Mark your calendars for an enriching day that promises to leave an indelible mark on your journey of knowledge and discovery.",
//     publishedDate: "2024-02-15",
//     image:
//       "https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149333689.jpg",
//   },
//   {
//     id: "2",
//     section: "events",
//     title: "Research Symposium",
//     description:
//       "Prepare to embark on a captivating intellectual journey at our prestigious Research Symposium! This extraordinary event serves as a platform for our exceptionally talented faculty and students to showcase the latest and most groundbreaking research findings. From revolutionary scientific breakthroughs to innovative projects that redefine the boundaries of knowledge, the symposium spans a wide spectrum of topics. Attendees can expect to gain profound insights into the cutting-edge research that not only shapes the future but also represents the pinnacle of academic excellence. Join us in celebrating the spirit of exploration and discovery that defines our institution. This is not just an event; it's a celebration of the relentless pursuit of knowledge that fuels our academic community.",
//     publishedDate: "2024-03-10",
//     image: "https://iubat.edu/wp-content/uploads/2019/07/UGC-chairman.jpg",
//   },
//   {
//     id: "3",
//     section: "events",
//     title: "New Student Orientation",
//     description:
//       "Welcome to the beginning of your academic adventure! Our New Student Orientation is designed to be more than just a welcoming ceremony—it's a comprehensive introduction to the exciting world of academia that awaits you. Expect a warm and enthusiastic reception as you join our diverse community of learners. This orientation is your gateway to valuable insights into university resources, a chance to forge connections with fellow students who will become lifelong friends, and the perfect preparation for the amazing academic journey that lies ahead. Don't miss out on this opportunity to start your university experience on the right note. Your journey of discovery, personal growth, and academic excellence begins here.",
//     publishedDate: "2024-04-05",
//     image:
//       "https://images.freeimages.com/images/large-previews/7b9/one-1517550.jpg?fmt=webp&w=500",
//   },
// ];

// export const noticeboardData = [
//   {
//     id: "1",
//     title: "Important Notice: Final Exam Schedule Released",
//     description:
//       "Attention, students! The moment you've been waiting for has arrived. The final exam schedule for the current semester has been officially released. It is crucial for every student to meticulously check the dates, times, and locations for your exams to ensure a smooth and well-prepared examination experience. Don't miss this opportunity to plan your study sessions effectively and excel in your academic pursuits. Best of luck to everyone!",
//     date: "2024-05-10",
//     image:
//       "https://t4.ftcdn.net/jpg/01/10/91/67/360_F_110916739_rpdUPryXBJtCLCF6RDXpPMBNnLlc4Vqm.jpg",
//   },
//   {
//     id: "2",
//     title: "Upcoming Library Closure for Maintenance",
//     description:
//       "Dear university community, please be informed that the university library is scheduled to undergo essential maintenance from June 1st to June 5th. During this period, the library will be temporarily closed. We kindly request all students and faculty members to plan your study schedules accordingly and make use of alternative resources during this short closure. We appreciate your understanding and cooperation as we work to enhance the library facilities for an even better academic experience. Thank you.",
//     date: "2024-05-10",
//     image:
//       "https://t4.ftcdn.net/jpg/01/10/91/67/360_F_110916739_rpdUPryXBJtCLCF6RDXpPMBNnLlc4Vqm.jpg",
//   },
// ];
// export const noticeboardData = [
//   {
//     id: "1",
//     title: "Important Notice: Final Exam Schedule Released",
//     description:
//       "Attention, students! The moment you've been waiting for has arrived. The final exam schedule for the current semester has been officially released. It is crucial for every student to meticulously check the dates, times, and locations for your exams to ensure a smooth and well-prepared examination experience. Don't miss this opportunity to plan your study sessions effectively and excel in your academic pursuits. Best of luck to everyone!",
//     publishedDate: "2024-05-10",
//     image:
//       "https://t4.ftcdn.net/jpg/01/10/91/67/360_F_110916739_rpdUPryXBJtCLCF6RDXpPMBNnLlc4Vqm.jpg",
//   },
//   {
//     id: "2",
//     title: "Upcoming Library Closure for Maintenance",
//     description:
//       "Dear university community, please be informed that the university library is scheduled to undergo essential maintenance from June 1st to June 5th. During this period, the library will be temporarily closed. We kindly request all students and faculty members to plan your study schedules accordingly and make use of alternative resources during this short closure. We appreciate your understanding and cooperation as we work to enhance the library facilities for an even better academic experience. Thank you.",
//     publishedDate: "2024-05-10",
//     image:
//       "https://t4.ftcdn.net/jpg/01/10/91/67/360_F_110916739_rpdUPryXBJtCLCF6RDXpPMBNnLlc4Vqm.jpg",
//   },
// ];

export const noticeboardData = async () => {
  try {
    const response = await $fetch(
      "https://mapproject.nvs.la/api/v1/sg-4/vlogdata/NOTICE%20BOARD/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
