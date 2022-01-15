import styles from "../../styles/CardBox.module.css";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
const Realistic = ({ jobs }) => {
    let id = Math.floor(Math.random() * jobs.length + 1);
	let mname = "";
  console.log(jobs);
  async function changejobs(kind) {
    try {
      if (kind === "like") {
        document.getElementById("mname").innerHTML = jobs[id].name;
        mname = document.getElementById("mname").innerHTML;
        document.getElementById("mdescription").innerHTML = jobs[id].description;
      }

      if (kind === "dislike") {
        document.getElementById("mname").innerHTML = jobs[id].name;
        mname = document.getElementById("mname").innerHTML;
        document.getElementById("mdescription").innerHTML = jobs[id].description;
      }
      id++;

      //addToDB(mname, kind);
    } catch {
      document.getElementById("mname").innerHTML = "Error Occured";
      document.getElementById("mdescription").innerHTML =
        "Please refresh the browser... A client side error has occured";
    }
  }
  return (
    <div className={styles.bottomBody}>
      <div className={styles.cardContainer}>
        {/* <a href="#dislike"><i className="opt fa fa-times-circle"></i></a> */}
        <FaTimesCircle
          onClick={() => changejobs("dislike")}
          className={[styles.options, styles.cross_opt].join(" ")}
        />
        <div className={styles.card}>
          <h1 className={styles.name} id="mname">
            {jobs[id].name}
          </h1>
          <p className={styles.cardAbt} id="mdescription">
            {jobs[id].description}
          </p>
        </div>
        <FaCheckCircle
          onClick={() => changejobs("like")}
          className={[styles.options, styles.check_opt].join(" ")}
        />
        {/* <a href="#like"><i className="opt fa fa-check-circle"></i></a> */}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "http://www.hellocareer.tk:8000/jobs/riasec/Investigative"
  );
  const jobs = await res.json();

  return {
    props: { jobs: jobs },
  };
};

export default Realistic;
