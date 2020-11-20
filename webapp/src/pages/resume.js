import React from "react"

import "../utils/globals.css"
import Layout from "../components/layout"
import images from "../constants/images"
import Heading from "../components/heading"
import FollowMe from "../components/followMe"
import { Link } from "gatsby"
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function IndexPage() {
  return (
    <Layout>
      <BrowserView>
        <div className="relative flex flex-col justify-between px-10 lg:px-20 min-h-screen" style={{ maxWidth: "1440px" }}>
          <img className="hidden md:block absolute" style={{ top: "150px", right: "5%" }} src={images.IMAGE_DECORATION}></img>
          <div className="flex justify-between flex-col mb-20" style={{ paddingTop: "89px" }}>
            <div>
              <Heading className="pt-10 pb-5 text-lightBlack">I’ve got good experience.</Heading>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col pl-8 xl:pl-18p">
              <p className="text-black text-50 leading-none">Adam</p>
              <p className="text-black text-100 font-bold leading-none">Mayowa</p>
              <p className="text-lightBlack text-lg mt-10 mb-5">User Interface / User Experience & Graphic Designer</p>
              <p className="text-lightBlack text-lg items-center mb-10 flex">
                <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10.5948L30 2.73345V2.00011C30 1.61113 29.842 1.23808 29.5607 0.963024C29.2794 0.687971 28.8978 0.533447 28.5 0.533447H1.5C1.10218 0.533447 0.720644 0.687971 0.43934 0.963024C0.158035 1.23808 0 1.61113 0 2.00011V2.73345L15 10.5948Z" fill="#B57F66" />
                  <path d="M15.705 13.5574C15.488 13.6704 15.2459 13.7295 15 13.7295C14.7541 13.7295 14.512 13.6704 14.295 13.5574L0 6.03345V21.0668C0 21.4558 0.158035 21.8288 0.43934 22.1039C0.720644 22.3789 1.10218 22.5334 1.5 22.5334H28.5C28.8978 22.5334 29.2794 22.3789 29.5607 22.1039C29.842 21.8288 30 21.4558 30 21.0668V6.03345L15.705 13.5574Z" fill="#B57F66" />
                </svg> &nbsp;
              gentleibkay@gmail.com
            </p>
              <div>
                <Link to="https://drive.google.com/file/d/1n4d3I9HezrgyzW0AAHC-GLIaq0Bqw15k/view">
                  <button className="primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0)">
                        <path d="M8 17L12 21L16 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 12V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.8799 18.0899C21.7493 17.4786 22.4013 16.6061 22.7412 15.5991C23.0811 14.5921 23.0913 13.503 22.7703 12.4898C22.4493 11.4766 21.8138 10.592 20.956 9.96449C20.0982 9.33697 19.0628 8.9991 17.9999 8.99993H16.7399C16.4392 7.82781 15.8764 6.73918 15.0941 5.81601C14.3117 4.89285 13.3301 4.15919 12.2231 3.67029C11.1162 3.18138 9.91278 2.94996 8.70346 2.99345C7.49414 3.03694 6.31045 3.3542 5.24149 3.92136C4.17253 4.48851 3.24616 5.29078 2.53212 6.26776C1.81808 7.24474 1.33498 8.37098 1.11919 9.56168C0.903403 10.7524 0.960543 11.9765 1.28631 13.142C1.61208 14.3074 2.19799 15.3837 2.99993 16.2899" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg> &nbsp;
                View Resume
              </button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex md:flex-col pr-8 xl:pr-18p items-center">
              <img src={images.IMAGE_RESUME}></img>
              <FollowMe className="mt-10" />
            </div>
          </div>
          <div className="left-10 text-gray-700 lg:px-12 py-5 mt-20">
            © 2020 Bkay, All rights reserved.
        </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="flex flex-col justify-between min-h-screen" style={{ paddingTop: "60px" }}>
          <div className="p-4 flex justify-between flex-col">
            <div>
              <img className="absolute top-0 right-0 w-decorationmobile h-decorationmobile pr-5p pt-16" src={images.IMAGE_DECORATION}></img>
            </div>
            <div className="bg-aboutPanel pt-16 text-lightBlack text-base w-full smd:pb-20">
              <Heading className="mb-4">I’ve got good experience</Heading>
              <div className="flex flex-col items-center">
                <img className="m-5 px-10p"src={images.IMAGE_RESUME}></img>
                <p className="text-black text-25p leading-none">Adam</p>
                <p className="text-black text-50 font-bold leading-none">Mayowa</p>
                <p className="text-lightBlack text-xs mt-10 mb-5">User Interface / User Experience & Graphic Designer</p>
                <p className="text-lightBlack text-base items-center mb-10 flex">
                  <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2272 8.06415L22.4544 2.1801V1.63122C22.4544 1.34007 22.3361 1.06085 22.1256 0.854977C21.915 0.649105 21.6294 0.533447 21.3317 0.533447H1.12272C0.824956 0.533447 0.539388 0.649105 0.328837 0.854977C0.118286 1.06085 0 1.34007 0 1.63122V2.1801L11.2272 8.06415Z" fill="#B57F66" />
                    <path d="M11.7549 10.2816C11.5924 10.3662 11.4112 10.4105 11.2272 10.4105C11.0432 10.4105 10.862 10.3662 10.6995 10.2816L0 4.65009V15.9022C0 16.1934 0.118286 16.4726 0.328837 16.6785C0.539388 16.8843 0.824956 17 1.12272 17H21.3317C21.6294 17 21.915 16.8843 22.1256 16.6785C22.3361 16.4726 22.4544 16.1934 22.4544 15.9022V4.65009L11.7549 10.2816Z" fill="#B57F66" />
                  </svg>
                   &nbsp;
                  gentleibkay@gmail.com
                </p>
                <div>
                  <Link to="https://drive.google.com/file/d/1n4d3I9HezrgyzW0AAHC-GLIaq0Bqw15k/view">
                    <button className="primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                          <path d="M8 17L12 21L16 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12 12V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M20.8799 18.0899C21.7493 17.4786 22.4013 16.6061 22.7412 15.5991C23.0811 14.5921 23.0913 13.503 22.7703 12.4898C22.4493 11.4766 21.8138 10.592 20.956 9.96449C20.0982 9.33697 19.0628 8.9991 17.9999 8.99993H16.7399C16.4392 7.82781 15.8764 6.73918 15.0941 5.81601C14.3117 4.89285 13.3301 4.15919 12.2231 3.67029C11.1162 3.18138 9.91278 2.94996 8.70346 2.99345C7.49414 3.03694 6.31045 3.3542 5.24149 3.92136C4.17253 4.48851 3.24616 5.29078 2.53212 6.26776C1.81808 7.24474 1.33498 8.37098 1.11919 9.56168C0.903403 10.7524 0.960543 11.9765 1.28631 13.142C1.61208 14.3074 2.19799 15.3837 2.99993 16.2899" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg> &nbsp;
                      View Resume
                    </button>
                  </Link>
                </div>
                <FollowMe className="text-base my-5" />
              </div>
            </div>
          </div>
        </div>

      </MobileView>
    </Layout >
  )
}

export default IndexPage
