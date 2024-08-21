import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./index.module.scss";
import SubScriptionDetails from "@/components/SubscriptionDetails/SubScriptionDetails";
import { useState } from "react";
import FAQs from "@/components/FAQs/FAQs";
import DealsComponent from "@/components/DealsComponent/DealsComponent";
import CreditPerMonth from "../../public/assets/creditPerMonth.svg";
import DiscountOnFood from "../../public/assets/discountOnFoodAndBeverages.svg";
import FreeRolloverCredit from "../../public/assets/rolloverOfUnusedCredits.svg";
import ConvenienceFee from "../../public/assets/convenienceFee.svg";
import Flexible from "../../public/assets/100Flexible.svg";
import MMRPerk from "../../public/assets/MMRPerks.svg";
import StarIconMobile from "../../public/assets/teenyicons_star-solid-1.svg";
import HomeIcon from "../../public/assets/Home.svg";
const inter = Inter({ subsets: ["latin"] });

interface StepDetail {
  step: number;
  desc: string;
}
export default function Home() {
  const subScriptionStepDetails: StepDetail[] = [
    {
      step: 1,
      desc: "MVP Subscription Provides the member 1 movie credit per month",
    },
    {
      step: 2,
      desc: "They can avail it at any Marcus theater or Movie Tavern.",
    },
    {
      step: 3,
      desc: "Members earn 100 points and get a $5 reward redeemable on food & beverages + many more benefits",
    },
  ];

  const fAQsData = [
    {
      question:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      question:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      question:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      question:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  const monthlyDealsData = [
    {
      dealIcon: CreditPerMonth,
      dealTitle: "1 credit per month",
      dealDesc: "One 2D standard movie per month",
    },
    {
      dealIcon: DiscountOnFood,
      dealTitle: "20% Discount on all Food and Beverages",
      dealDesc: "*Excluding alcohol",
    },
    {
      dealIcon: FreeRolloverCredit,
      dealTitle: "Free rollover of unused credits",
      dealDesc: "Unused credits will be combined the following month",
    },
    {
      dealIcon: ConvenienceFee,
      dealTitle: "0 Convenience Fees",
      dealDesc: "Waived on all days on any tickets purchase",
    },
    {
      dealIcon: Flexible,
      dealTitle: "100% Flexible",
      dealDesc: "Cancel anytime",
    },
    {
      dealIcon: MMRPerk,
      dealTitle: "All MMR perks included",
    },
  ];
  return (
    <>
      <Head>
        <title>MVP Subscription</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.bg}>
        <div
          className={` ${styles.header} bg-cover bg-center d-flex justify-content-center`}
        >
          <div className={` w-75 ${styles.commanWidth}`}>
            <div className={`fixed-top ${styles.navbarContainer}  `}>
              <nav className="navbar navbar-expand-sm navbar-dark">
                <div className="container ">
                  <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#n_bar"
                    aria-controls="navbarNavAltMarkup"
                    aria-label="Toggle navigation"
                  >
                    <Image
                      src={HomeIcon}
                      width={30}
                      height={30}
                      alt="home-icon"
                    />
                  </button>
                  <div
                    className={`collapse navbar-collapse py-2 ${styles.navBar}`}
                    id="n_bar"
                  >
                    <ul className="navbar-nav w-100 d-flex align-items-center gap-3 justify-content-end">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle text-weight-bold text-white"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Placeholder Title
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle text-weight-bold text-white"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Placeholder Title
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle text-weight-bold text-white"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Placeholder Title
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                      <button
                        className={`btn btn-sm btn-outline-light text-white rounded-5 px-4 ${styles.customHoverButton}`}
                      >
                        Sign In
                      </button>
                    </ul>
                  </div>
                </div>
              </nav>
              <div
                className={`d-none d-md-flex  justify-content-center my-2 align-items-center ${styles.navbarFooterContainer}`}
              >
                <div
                  className={` ${styles.commanWidth} ${styles.navbarFooter} d-flex justify-content-end align-items-center gap-4`}
                >
                  <div>PlaceHolder Title</div>
                  <div>PlaceHolder Title</div>
                  <div>PlaceHolder Title</div>
                  <div>PlaceHolder Title</div>
                </div>
              </div>
            </div>
            <div
              className={`p-5 d-flex flex-column align-items-center ${styles.headerContainer}`}
            >
              <p className={` ${styles.headerTitle} text-center`}>
                {" "}
                MVP SUBSCRIPTION
              </p>
              <p className={` ${styles.headerDesc} text-center`}>
                Your go&minus;to Movie Membership Program
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex  justify-content-center my-4">
          <div
            className={`w-75  d-flex align-items-center justify-content-center py-3 ${styles.content} ${styles.commanWidth}`}
          >
            <div className="mx-2">
              <div className="d-none d-md-flex justify-content-sm-start justify-content-center align-items-sm-start align-items-center gap-2 font-weight-bold fs-4">
                <div className="d-block d-sm-none">
                  <Image
                    src={StarIconMobile}
                    height="30"
                    width="30"
                    alt="Star-icon"
                  />
                </div>
                <span>Reel Deal Monthly Movies</span>
                <div className="d-block d-sm-none">
                  <Image
                    src={StarIconMobile}
                    height="30"
                    width="30"
                    alt="Star-icon"
                  />
                </div>
              </div>
              <div
                className={`d-none d-md-flex justify-content-sm-start justify-content-center align-items-sm-start align-items-center my-2 ${styles.reelDesc}`}
              >
                Your flexible monthly membership to the latest movies
              </div>
              <div className={`mt-4 mb-2 ${styles.MVPSub}`}>
                What is MVP Subsciption?
              </div>
              {subScriptionStepDetails.map((stepDetail, index) => (
                <div
                  key={index}
                  className={`mx-2 my-4 d-flex justify-content-start align-items-center ${styles.subscriptionContainer}`}
                >
                  <SubScriptionDetails stepDetail={stepDetail} />
                </div>
              ))}
              <div
                className={`d-flex justify-content-between align-items-center py-2 gap-4 ${styles.startButton}`}
              >
                <button className={`btn px-5 ${styles.getStartedBtnDesktop}`}>
                  Get Started
                </button>
                <a className="text-white fw-light" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div>
              <div className=" d-flex d-md-none justify-content-md-start justify-content-center align-items-md-start align-items-center gap-2 font-weight-bold fs-4">
                <div className="d-block d-md-none">
                  <Image
                    src={StarIconMobile}
                    height="30"
                    width="30"
                    alt="Star-icon"
                  />
                </div>
                <span>Reel Deal Monthly Movies</span>
                <div className="d-block d-md-none">
                  <Image
                    src={StarIconMobile}
                    height="30"
                    width="30"
                    alt="Star-icon"
                  />
                </div>
              </div>
              <div
                className={`d-flex  d-md-none justify-content-md-start justify-content-center align-items-md-start align-items-center my-2 ${styles.reelDesc}`}
              >
                Your flexible monthly membership to the latest movies
              </div>

              <div className="m-2 d-flex justify-content-center align-items-start flex-column">
                <div className="row mx-2">
                  {monthlyDealsData.map((DealData, index) => (
                    <div key={index} className="col-6 col-md-4 mb-3">
                      <DealsComponent DealData={DealData} />
                    </div>
                  ))}
                </div>
                <div className={`ms-lg-5 ms-2 ms-0 ${styles.termsTxt}`}>
                  <sup>1</sup>Excludes IMAX and DBOX formats. No fees apply to
                  Passport Credits only.Other fees apply to full-priced tickets
                </div>
                <div className={`ms-lg-5 ms-2 mt-2 ${styles.termsTxt}`}>
                  <sup>2</sup>Excludes alcoholic beverages
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-black d-flex justify-content-center ">
          <div
            className={` w-75 d-flex flex-column px-2  align-items-center ${styles.commanWidth}`}
          >
            <span
              className={`mt-5 mx-2 border-bottom w-100 py-3 ${styles.faqHeading} `}
            >
              Frequently Asked Questions
            </span>
            {fAQsData.map((FAQ, index) => (
              <div
                key={index}
                className="mx-2 my-2 d-flex justify-content-start align-items-center w-100"
              >
                <FAQs FAQ={FAQ} />
              </div>
            ))}
          </div>
        </div>

        <div
          className={`bg-black fixed-bottom  d-flex justify-content-center  ${styles.footer} `}
        >
          <div className="w-100 mx-3 d-flex flex-column justify-content-center align-items-center py-2">
            <button className={`btn px-5 ${styles.getStartedBtnFooter}`}>
              Get Started
            </button>
            <p className={`text-center ${styles.stickyFooterTxt}`}>
              Marcus MVP is only avliable to use in app
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
