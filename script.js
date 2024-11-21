const timetable = {
  Monday: ["Basic Electronics", "Discrete Mathematics", "Digital Electronics", "Data Structures & Algorithm", "Lunch", "Basic Electronics Lab", "Basic Electronics Lab"],
  Tuesday: ["Basic Electronics", "Data Structures & Algorithm ", "Discrete Mathematics", "Tutorial", "Lunch", "ACS Lab", "ACS Lab"],
  Wednesday: ["Discrete Mathematics", "JAVA", "Data Structures & Algorithm", "Digital Electronics", "Lunch", "Operations Research", "Operations Research"],
  Thursday: ["DSA-Lab", "DSA-Lab", "Data Structures & Algorithm", "SPORTS", "Lunch", "Digital Electronics", "JAVA"],
  Friday: ["Basic Electronics", "Operations Research", "Operations Research", "SALAH", "Lunch", "Digital Electronics", "Data Structures & Algorithm"],
  Saturday: ["Basic Electronics", "Java", "Java-Lab", "Java-Lab", "Lunch", "Java", "Discrete Mathematics"]
};

const timeSlots = [
  "9:30-10:30",
  "10:30-11:30",
  "11:30-12:30",
  "12:30-13:30",
  "13:30-14:30",
  "14:30-15:30",
  "15:30-16:30"
];

function updateTimetable() {
  const now = new Date();
  const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
  const currentTime = now.toLocaleTimeString("en-US", { hour12: false }).slice(0, 5); 
  const currentDate = now.toLocaleDateString("en-GB");

  document.getElementById("current-date").textContent = `Date: ${currentDate} | Day: ${currentDay}`;

  const daySubjects = timetable[currentDay] || [];
  let currentClass = "--";

  
  daySubjects.forEach((subject, index) => {
    if (isCurrentSlot(currentTime, index)) {
      currentClass = subject;
    }
  });

  document.getElementById("current-class").textContent = `Current Class: ${currentClass}`;
}

function isCurrentSlot(currentTime, index) {
  const [start, end] = timeSlots[index].split("-");
  return currentTime >= start && currentTime < end;
}

updateTimetable();
setInterval(updateTimetable, 60000);
