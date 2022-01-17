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
  let likedIds = null
  let Alljobs = ls.get("ids");
  console.log(Alljobs);
  let len = Alljobs?.length;
  // console.log(len)
  async function changejobs(kind) {
    try {
      if (kind === "like") {
        arrid.push(Alljobs[id].name);
        if (id < len) {
          id++;
        }
        if (id === len) {
          console.log("end");
          console.log(arrid);
          //addAllJobs(arrid, kind);
        }
        document.getElementById("mname").innerHTML = Alljobs[id].name;
        mname = document.getElementById("mname").innerHTML;
        document.getElementById("mdescription").innerHTML =
          Alljobs[id].description;
      }

      if (kind === "dislike") {
        if (id < len) {
          id++;
        }
        if (id === len) {
          console.log("end");
          console.log(arrid);
          //addAllJobs(arrid, kind);
        }
        document.getElementById("mname").innerHTML = Alljobs[id].name;
        mname = document.getElementById("mname").innerHTML;
        document.getElementById("mdescription").innerHTML =
          Alljobs[id].description;
      }
    } catch (e) {
      document.getElementById("mname").innerHTML = "End Of S3";
      document.getElementById("mdescription").innerHTML = "Thanks For Using HC";
    }
    ls.set("LikedIs", arrid)
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
            {Alljobs[id].name}
          </h1>
          <p className={styles.cardAbt} id="mdescription">
            {Alljobs[id].description}
          </p>
        </div>
       
        <FaCheckCircle
          onClick={() => changejobs("like")}
          className={[styles.options, styles.check_opt].join(" ")}
        />
        <Link href="/Reports" className={styles.card} >
            <a className={styles.options} style={{marginLeft: "230%"}}><AiOutlineSend/></a>
        </Link>
        {/* <a href="#like"><i className="opt fa fa-check-circle"></i></a> */}
      </div>
    </div>
  );
};

export default BlogIndex;
