import StandardBtn from "../../common/standard-btn/StandardBtn";
import styles from "./Content.module.css";

function Content() {
  return (
    <div className={styles.container}>
      <div>Hello from Homepage</div>
      <StandardBtn />
    </div>
  );
}

export default Content;