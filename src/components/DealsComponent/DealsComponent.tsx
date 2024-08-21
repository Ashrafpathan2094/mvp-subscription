import Image from "next/image";
import styles from "./DealsComponent.module.scss";
interface DealsComponentType {
  DealData: {
    dealIcon: string;
    dealTitle: string;
    dealDesc?: string;
  };
}

const DealsComponent = ({ DealData }: DealsComponentType) => {
  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-start gap-1 ${styles.mainContainer}`}
    >
      <Image src={DealData?.dealIcon} alt="deal-icon" height={50} width={50} />
      <div>
        <div className={styles.dealTitle}>{DealData?.dealTitle}</div>
        <div className={styles.dealDesc}>{DealData?.dealDesc}</div>
      </div>
    </div>
  );
};

export default DealsComponent;
