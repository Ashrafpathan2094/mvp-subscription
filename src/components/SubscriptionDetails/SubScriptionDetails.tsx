import styles from "./SubScriptionDetails.module.scss";

interface SubScriptionDetailsProps {
  stepDetail: {
    step: number;
    desc: string;
  };
}
export default function SubScriptionDetails({
  stepDetail,
}: SubScriptionDetailsProps) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <div
          className={`d-flex justify-content-center align-items-center position-relative px-2 ${styles.border50} ${styles.textOrange}`}
        >
          {stepDetail?.step}
          {stepDetail?.step < 3 && (
            <div className={`position-absolute ${styles.verticalLine}`}></div>
          )}
        </div>
        <div
          className={`d-flex justify-content-center align-items-start ${styles.descText}`}
        >
          {stepDetail?.desc}
        </div>
      </div>
    </>
  );
}
