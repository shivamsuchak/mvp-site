import styles from "../styles/CardBox.module.css";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineSend } from "react-icons/ai";

import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import ls from "local-storage";
const BlogIndex = () => {
  let id = 0;
  let arrid = [];
  let mname = "";
  let alljobslist = null
  let subjobs = ls.get("subjobs");
  console.log(subjobs);
  let len = Object.keys(subjobs).length;
  console.log(len)
  const addAllJobs = async (arrid, kind) => {
    // if (kind === "like") console.log(subcategory, "Social");
    if (kind === "like") {
      await axios
        .post("http://www.hellocareer.tk:8000/jobs/stage/three",{
            ids: arrid
          })
        .then((res) => {
          {
            alljobslist = res.data;
            ls.set("ids", alljobslist);
            console.log(ls.get("ids"));
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
        arrid.push(subjobs[id].id);
        if (id < len) {
          id++;
        }
        if (id === len) {
          console.log("end");
          console.log(arrid);
          addAllJobs(arrid, kind);
        }
        document.getElementById("mname").innerHTML = subjobs[id].name;
        mname = document.getElementById("mname").innerHTML;
        document.getElementById("mdescription").innerHTML =
          subjobs[id].description;
      }

      if (kind === "dislike") {
        if (id < len) {
          id++;
        }
        if (id === len) {
          console.log("end");
          console.log(arrid);
          addAllJobs(arrid, kind);
        }
        document.getElementById("mname").innerHTML = subjobs[id].name;
        mname = document.getElementById("mname").innerHTML;
        document.getElementById("mdescription").innerHTML =
          subjobs[id].description;
      }
    } catch (e) {
      document.getElementById("mname").innerHTML = "End Of S2";
      document.getElementById("mdescription").innerHTML = "Thanks For Using HC";
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
            {subjobs[id].name}
          </h1>
          <p className={styles.cardAbt} id="mdescription">
            {subjobs[id].description}
          </p>
        </div>
        <FaCheckCircle
          onClick={() => changejobs("like")}
          className={[styles.options, styles.check_opt].join(" ")}
        />
        <Link href={"/Alljobs"} className={styles.card} >
            <a className={styles.options} style={{marginLeft: "230%"}}><AiOutlineSend/></a>
        </Link>
        {/* <a href="#like"><i className="opt fa fa-check-circle"></i></a> */}
      </div>
    </div>
  );
};

export default BlogIndex;
