import styles from "../../styles/CardBox.module.css";
import axios from "axios";
import { useState } from "react";
import { FaTimesCircle, FaCheckCircle, IoIosSend } from "react-icons/fa";
import ls from 'local-storage';
import Link from "next/link";
import { AiOutlineSend } from "react-icons/ai";
const Realistic = ({ jobs }) => {
  const [subjobs, setSubjobs] = useState(null);
  let subcat = [];
  //let id = Math.floor(Math.random() * jobs.length + 1);
  let id = 0;
  let len = jobs.length;
  let mname = "";
  let arrlist = null;
  console.log(jobs);
  const addToDB = async (subcategory, kind) => {
    // if (kind === "like") console.log(subcategory, "Realistic");
    if (kind === "like") {
      await axios
        .post("http://www.hellocareer.tk:8000/jobs/stage/two", {
          riasec: "Realistic",
          q: subcategory,
        })
        .then((res) => {
          {
            arrlist = res.data;
            ls.set("subjobs", arrlist);
            console.log(ls.get("subjobs"));
            //console.log(arrlist);
            //setSubjobs(res.data);
          }
        })
        .then(() => {
          console.log("Added!!");
          //console.log(arrlist);
        });
      //.catch((e) => console.log(`Error: ${e}`))

      //.then((data) => console.log(data))
    }
  };
  async function changejobs(kind) {
    try {
      if (kind === "like") {
        subcat.push(jobs[id].subcategory);
        if (id < len) {
          id++;
        }
        if (id === len) {
          console.log("end");
          console.log(subcat);
          addToDB(subcat, kind);
        }
        document.getElementById("mname").innerHTML = jobs[id].name;
        mname = document.getElementById("mname").innerHTML;
        document.getElementById("mdescription").innerHTML =
          jobs[id].description;
      }

      if (kind === "dislike") {
        if (id < len) {
          id++;
        }
        if (id === len) {
          console.log("end");
          console.log(subcat);
          addToDB(subcat, kind);
        }
        document.getElementById("mname").innerHTML = jobs[id].name;
        mname = document.getElementById("mname").innerHTML;
        document.getElementById("mdescription").innerHTML =
          jobs[id].description;
      }
    } catch (e) {
      document.getElementById("mname").innerHTML = "End Of S1";
      document.getElementById("mdescription").innerHTML = "Thanks For Using HC";
    }
  }
  return (
    <div className={styles.bottomBody}>
      {console.log(arrlist)}
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
      <Link href={"/Subcategory"} className={styles.card} >
            <a className={styles.options}><AiOutlineSend/></a>
          </Link>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "http://www.hellocareer.tk:8000/jobs/riasec/Realistic"
  );
  const jobs = await res.json();

  return {
    props: { jobs: jobs },
  };
};

export default Realistic;
