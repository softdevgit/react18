import Student from "./Components/Student/Student.jsx";
import StudentReview from "./Components/Student/StudentReview.jsx";
const MainBody = () => {
  const whatWeWillLearn = "React JS";
  const totalLecture = 3;
  return (
    <div style={{ minHeight: "70vh" }}>
      <p>
        In this course, we will learn <b>{whatWeWillLearn}</b> by building
        TaskOPedia!
      </p>
      <hr />
      <p>Total Lecture - {totalLecture}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Component</li>
      </ul>
      {/* <div>
          Enter Task : <input maxLength={20} readOnly={false} placeholder="Enter Task...."></input>
        </div> */}
      <div className="container row">Student Enrolled</div>
      <Student
        experience={2}
        name="Shivansh Pandey"
        headshot="https://api.lorem.space/image/game?w=150&h=220"
      >
        <StudentReview />
      </Student>
      <Student
        experience={5}
        name="Navika Pandey"
        headshot="https://api.lorem.space/image/game?w=150&h=221"
      >
        <StudentReview />
      </Student>
      <Student
        experience={19}
        name="Devesh Pandey"
        headshot="https://api.lorem.space/image/game?w=150&h=222"
      />
      <Student
        experience={12}
        name="Bhawna Bhatt"
        headshot="https://api.lorem.space/image/game?w=150&h=223"
      />
    </div>
  );
}
export default MainBody;