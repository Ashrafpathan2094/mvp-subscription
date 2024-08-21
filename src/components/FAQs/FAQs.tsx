import Image from "next/image";
import React, { useState } from "react";
import styles from "./FAQs.module.scss";
import DropDownArrow from "../../../public/assets/dropdown-arrow.svg";

interface FAQPropType {
  FAQ: {
    question: string;
    answer: string;
  };
}
const FAQs = ({ FAQ }: FAQPropType) => {
  // mainting this state to monitor the open anc close of the FAQ
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`my-1  w-100  ${styles.FAQContainer}`}>
      <div
        className="d-flex justify-content-start align-items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="min-w-7 w-7">
          <Image
            src={DropDownArrow}
            alt="arrow-icon"
            className={`w-1.5 ${
              isOpen ? styles.rotate90 : styles.rotateMinus90
            }`}
            width={20}
            height={20}
          />
        </div>
        <div className={`${styles.questionTxt}`}>{FAQ?.question}</div>
      </div>
      {isOpen && (
        <div className={` ${styles.answerTxt} ms-4 `}>{FAQ?.answer}</div>
      )}

      <hr />
    </div>
  );
};

export default FAQs;
