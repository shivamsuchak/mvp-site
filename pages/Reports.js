import ls from "local-storage";
import styles from "../styles/CardBox.module.css";

const Report = () => {
  let names = ls.get("LikedIs");
  console.log(names);

  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/register", {
      body: JSON.stringify({
        name: event.target.name.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    // result.user => 'Ada Lovelace'
  };
  return (
    <div>
      <div className={styles.container}>
        <h1 style={{ textAlign: "center" }}>
          Job you liked
          <br />
          &darr;
        </h1>

        <main className={styles.main}>
          {names &&
            names.map((namess) => <h2 key={namess.id} className={styles.card}>{namess}</h2>)}
          <br />
          <h2 style={{ textAlign: "center" }}>What Next?</h2>
          <h3 style={{ textAlign: "center" }}>
            *Go on Youtube and know more about the job and courses related to it{" "}
            <br />
            *Check sites like Shiksha, which will help you understand more about
            courses offered by different institutions <br></br>
            *You can always email us on{" "}
            <a
              style={{ color: "blue" }}
              href="mailto:hellocareerconsulting@gmail.com"
            >
              hellocareerconsulting@gmail.com
            </a>
            , we will connect you to the people who are actually doing your
            dream job!!
          </h3>
        </main>
      </div>
      <div style={{textAlign: "center"}}>
        <form onSubmit={registerUser}>
          <label htmlFor="name">Feedback:</label><br></br>
          <textarea
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            rows="4" cols="50"
            required
          /><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Report;
