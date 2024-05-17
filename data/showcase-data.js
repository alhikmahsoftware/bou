// export const buttons = [
//   {
//     label: "Programs",
//     subLabel: "Academic Offerings",
//     id: 1,
//     content:
//       "Explore our diverse range of academic programs and courses. Learn from experienced faculty members and engage in hands-on learning experiences to prepare for a successful career in your chosen field.<br/>At our university, we are committed to providing a comprehensive education that goes beyond the textbooks. Our state-of-the-art facilities and cutting-edge curriculum ensure that you receive the best possible preparation for the challenges of the professional world. Join us on a journey of intellectual growth and personal development.<br/>Whether you're interested in the sciences, humanities, or arts, our programs cater to a wide range of interests. Choose from a variety of majors and minors, and customize your academic journey to align with your passions and career goals.",
//   },
//   {
//     label: "Admissions",
//     subLabel: "Admission Process",
//     id: 2,
//     content:
//       "Discover the seamless admission process at our university. We welcome talented and motivated individuals who are eager to contribute to our academic community. Join us and embark on a journey of knowledge and discovery.<br/>Our admission process is designed to be transparent and accessible. We believe in recognizing potential and fostering a diverse community of learners. As you navigate through the admissions journey, you'll find support from our dedicated staff who are here to assist you every step of the way.<br/>At our university, we value not only academic achievements but also the unique qualities and perspectives that each student brings. Showcase your talents, experiences, and aspirations in your application, and become a part of our dynamic and inclusive learning environment.",
//   },
//   {
//     label: "Research",
//     subLabel: "Research Initiatives",
//     id: 3,
//     content:
//       "Immerse yourself in groundbreaking research initiatives that tackle real-world challenges. Our faculty and students collaborate on innovative projects that contribute to the advancement of knowledge and make a positive impact on society.<br/>Research is at the heart of our academic community. From conducting experiments in state-of-the-art laboratories to participating in field studies, you'll have the opportunity to engage in hands-on research experiences. Our commitment to pushing the boundaries of knowledge extends to all disciplines, and we encourage interdisciplinary collaboration to address complex global issues.<br/>Join us in the pursuit of discovery and innovation. Our research initiatives span a wide range of fields, from sustainable technologies to medical breakthroughs. As a student, you'll have the chance to work alongside renowned faculty members who are leaders in their respective fields, providing mentorship and guidance throughout your research journey.",
//   },
//   {
//     label: "Campus Life",
//     subLabel: "Student Activities",
//     id: 4,
//     content:
//       "Experience the vibrant campus life with a rich tapestry of events, clubs, and activities. From cultural festivals to sports competitions, there's always something happening on campus. Build lasting connections and create memories that will stay with you throughout your academic journey.<br/>Our campus is a lively hub of creativity and collaboration. Join student organizations that align with your interests, participate in community service projects, and attend events that showcase the diverse talents of our student body. Whether you're an aspiring artist, athlete, or entrepreneur, you'll find a supportive community that encourages you to pursue your passions.<br/>In addition to academic pursuits, we believe in the holistic development of our students. The friendships you form, the skills you develop through extracurricular activities, and the cultural experiences you encounter will contribute to your personal growth. Take advantage of the opportunities available and make the most of your time on campus.",
//   },
// ];

export const routine = async () => {
  try {
    const response = await $fetch(
      "https://opentv.nvs.la/api/v1/sg-5/get_routindata/",
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
