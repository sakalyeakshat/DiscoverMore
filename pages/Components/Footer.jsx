import React from "react";

const Footer = () => {
  return (
    <>
      <div className="fixed z-50 right-3 bottom-6 lg:right-5">
        <a
          className="flex justify-center flex-col-reverse items-center"
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/919109399601">
          <svg
            className="w-12 h-12"
            viewBox="0 0 256 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3893_79)">
              <path
                d="M5.46311 127.456C5.45711 149.133 11.1211 170.299 21.8911 188.955L4.43311 252.697L69.6651 235.593C87.7074 245.415 107.923 250.562 128.465 250.563H128.519C196.334 250.563 251.537 195.38 251.566 127.553C251.579 94.6861 238.791 63.7801 215.557 40.5281C192.327 17.2781 161.432 4.46715 128.514 4.45215C60.6911 4.45215 5.49211 59.6321 5.46411 127.456"
                fill="url(#paint0_linear_3893_79)"
              />
              <path
                d="M1.07 127.416C1.063 149.873 6.93 171.796 18.084 191.12L0 257.147L67.571 239.43C86.189 249.581 107.151 254.933 128.481 254.941H128.536C198.784 254.941 255.97 197.773 256 127.518C256.012 93.47 242.764 61.453 218.7 37.368C194.633 13.286 162.633 0.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416H1.07ZM41.31 187.792L38.787 183.787C28.181 166.923 22.583 147.435 22.591 127.424C22.614 69.029 70.138 21.52 128.576 21.52C156.876 21.532 183.472 32.564 203.476 52.58C223.479 72.598 234.486 99.208 234.479 127.51C234.453 185.905 186.928 233.42 128.536 233.42H128.494C109.481 233.41 90.834 228.304 74.572 218.655L70.702 216.36L30.604 226.873L41.31 187.791V187.792Z"
                fill="url(#paint1_linear_3893_79)"
              />
              <path
                d="M96.6781 74.1479C94.2921 68.8449 91.7811 68.7379 89.5121 68.6449C87.6541 68.5649 85.5301 68.5709 83.4081 68.5709C81.2841 68.5709 77.8331 69.3699 74.9161 72.5549C71.9961 75.7429 63.7681 83.4469 63.7681 99.1159C63.7681 114.786 75.1811 129.929 76.7721 132.056C78.3651 134.179 98.8051 167.363 131.177 180.129C158.081 190.738 163.556 188.628 169.395 188.096C175.235 187.566 188.239 180.394 190.892 172.957C193.547 165.521 193.547 159.147 192.751 157.815C191.955 156.488 189.831 155.691 186.646 154.099C183.46 152.506 167.802 144.801 164.883 143.738C161.963 142.676 159.84 142.146 157.716 145.335C155.592 148.519 149.493 155.691 147.634 157.815C145.777 159.944 143.918 160.209 140.734 158.616C137.547 157.018 127.29 153.659 115.121 142.81C105.653 134.368 99.2611 123.943 97.4031 120.754C95.5451 117.57 97.2041 115.844 98.8011 114.257C100.232 112.83 101.987 110.538 103.581 108.679C105.169 106.819 105.699 105.492 106.761 103.368C107.824 101.242 107.292 99.3819 106.497 97.7889C105.699 96.1959 99.5101 80.4459 96.6781 74.1489"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_3893_79"
                x1="128"
                y1="252.697"
                x2="128"
                y2="4.45215"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#1FAF38" />
                <stop offset="1" stopColor="#60D669" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_3893_79"
                x1="128"
                y1="257.147"
                x2="128"
                y2="0"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#F9F9F9" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
              <clipPath id="clip0_3893_79">
                <rect width="256" height="258" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>

      <div className="text-white border-t-2 border-white bg-red-900 pt-2 pb-5 border-t mt-md-5 d-flex flex-column flex-md-row justify-content-between">
        <div className="text-center">
          <p className="mb-0">
            Explore-World.com
          </p>
        </div>
        <div className="text-center pt-3 pt-md-0">
          <a href="#" className=" text-decoration-none mx-2">
            Terms &amp; Conditions
          </a>
          <a href="#" className=" text-decoration-none mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-decoration-none mx-2">
            Cancellation Policy
          </a>
          <a href="#" className="text-decoration-none mx-2">
            FAQs
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
