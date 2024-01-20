import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="menu">
          <div className="logo">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5ZM3.85356 15.5C3.85356 21.9321 9.06785 27.1464 15.5 27.1464C21.9321 27.1464 27.1464 21.9321 27.1464 15.5C27.1464 9.06785 21.9321 3.85356 15.5 3.85356C9.06785 3.85356 3.85356 9.06785 3.85356 15.5Z"
                fill="#049E53"
              />
              <path
                d="M25.6768 15.5C25.6768 13.5923 25.1406 11.7231 24.1293 10.1055C23.1181 8.48784 21.6726 7.18704 19.9576 6.35144C18.2427 5.51584 16.3274 5.1791 14.4303 5.37962C12.5332 5.58014 10.7306 6.30986 9.22827 7.48553C7.72592 8.6612 6.58427 10.2355 5.93356 12.0287C5.28286 13.822 5.1493 15.7621 5.54813 17.6276C5.94696 19.4931 6.86211 21.209 8.18918 22.5794C9.51625 23.9499 11.2018 24.9197 13.0535 25.3783L14.0321 21.427C12.9211 21.1518 11.9098 20.5699 11.1135 19.7477C10.3173 18.9254 9.76818 17.8959 9.52888 16.7766C9.28958 15.6573 9.36972 14.4932 9.76014 13.4172C10.1506 12.3413 10.8356 11.3967 11.737 10.6913C12.6384 9.98592 13.7199 9.54809 14.8582 9.42778C15.9964 9.30746 17.1456 9.50951 18.1746 10.0109C19.2035 10.5122 20.0709 11.2927 20.6776 12.2633C21.2843 13.2338 21.6061 14.3554 21.6061 15.5H25.6768Z"
                fill="#EAB010"
              />
              <path
                d="M14.5917 21.0815C14.7466 21.8712 15.1005 22.6083 15.6198 23.223C16.1391 23.8377 16.8068 24.3097 17.5595 24.5944C18.3122 24.879 19.1251 24.9668 19.9212 24.8495C20.7174 24.7322 21.4704 24.4137 22.109 23.9241C22.7477 23.4345 23.2508 22.79 23.5708 22.0516C23.8908 21.3132 24.017 20.5054 23.9376 19.7046C23.8581 18.9038 23.5756 18.1365 23.1168 17.4754C22.658 16.8142 22.0381 16.2811 21.3157 15.9265L20.1357 18.3303C20.449 18.4841 20.7179 18.7153 20.9169 19.0021C21.1159 19.2888 21.2384 19.6216 21.2729 19.9689C21.3073 20.3162 21.2525 20.6666 21.1138 20.9868C20.975 21.3071 20.7568 21.5866 20.4798 21.7989C20.2028 22.0113 19.8762 22.1494 19.5309 22.2003C19.1856 22.2512 18.8331 22.2131 18.5066 22.0897C18.1801 21.9662 17.8906 21.7615 17.6653 21.4949C17.4401 21.2283 17.2866 20.9086 17.2194 20.5661L14.5917 21.0815Z"
                fill="#F17F29"
              />
            </svg>
          </div>
          <div className="actionWrpper">
            <ul>
              <li>
                <a href="#">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.0214 6.56277e-05C9.87748 -0.00749331 8.82599 0.638456 8.31638 1.6602L7.84373 2.6055C7.65747 2.67467 7.47423 2.75042 7.29296 2.83206L6.29102 2.49808C5.2086 2.13676 4.00721 2.42322 3.20512 3.23831C2.4146 4.04175 2.14323 5.22458 2.50005 6.291L2.83403 7.29099C2.75064 7.47354 2.67262 7.65798 2.60161 7.84567L1.66022 8.31637C0.639536 8.82546 -0.00828756 9.87594 8.01012e-05 11.0195C0.0083307 12.1469 0.652382 13.1753 1.65826 13.6776L2.60552 14.1542C2.67496 14.3405 2.75047 14.5238 2.83208 14.705L2.50005 15.7049C2.13909 16.7863 2.42463 17.9867 3.23832 18.7889C4.04114 19.5804 5.22406 19.852 6.29102 19.4959L7.291 19.1639C7.47333 19.247 7.65822 19.3233 7.84568 19.3944L8.31638 20.3338C8.82599 21.3556 9.87748 22.0029 11.0214 21.9939C12.1486 21.9864 13.1775 21.3406 13.6796 20.3338L14.1503 19.3924C14.3389 19.3225 14.5254 19.2467 14.7089 19.1639L15.705 19.4959C16.7719 19.8519 17.9548 19.5806 18.7577 18.7889C19.5718 17.9862 19.8579 16.7848 19.4959 15.703L19.1639 14.703C19.2469 14.5212 19.3237 14.3371 19.3944 14.1503L20.3358 13.6776C21.3424 13.1756 21.9876 12.1474 21.9959 11.0195C22.0043 9.8759 21.3564 8.82546 20.3358 8.31637L19.3905 7.84372C19.321 7.65626 19.2457 7.47147 19.1639 7.28904L19.4959 6.291V6.28905C19.8518 5.22312 19.5809 4.04126 18.7909 3.23831C17.9888 2.42307 16.7874 2.13688 15.705 2.49808L14.703 2.83206C14.5212 2.74929 14.3372 2.67227 14.1503 2.6016L13.6796 1.6602C13.1775 0.653423 12.1487 0.00887182 11.0214 6.56277e-05ZM11.0058 2.00004C11.3819 2.00295 11.7217 2.21623 11.8906 2.55472L12.5253 3.82424C12.5849 3.94364 12.6678 4.04991 12.7691 4.13679C12.8704 4.22367 12.9881 4.28939 13.1152 4.33009C13.4919 4.45028 13.8578 4.60108 14.2089 4.78321C14.3274 4.84489 14.4571 4.8822 14.5903 4.89294C14.7234 4.90367 14.8574 4.88761 14.9843 4.84571L16.3358 4.39649H16.3378C16.702 4.2748 17.0976 4.37002 17.3651 4.64063C17.6286 4.9086 17.7175 5.29945 17.5975 5.6582V5.66015L17.1503 7.00584C17.1086 7.13159 17.0923 7.26437 17.1023 7.39648C17.1124 7.52858 17.1486 7.65737 17.2088 7.77536C17.3888 8.12723 17.538 8.49393 17.6561 8.87105C17.6963 8.99938 17.7621 9.11829 17.8493 9.22064C17.9366 9.323 18.0436 9.4067 18.1639 9.46674L19.4412 10.1054C19.7848 10.2766 19.9987 10.6229 19.9959 11.0038C19.9932 11.3791 19.78 11.7197 19.4412 11.8886H19.4393L18.1698 12.5253C18.0507 12.5851 17.9448 12.6681 17.8583 12.7694C17.7718 12.8707 17.7063 12.9882 17.6659 13.1151C17.545 13.4919 17.3935 13.8578 17.2108 14.2089C17.1489 14.3277 17.1114 14.4577 17.1007 14.5912C17.0899 14.7247 17.1061 14.8591 17.1483 14.9862L17.5975 16.3358C17.7193 16.6998 17.6268 17.0954 17.3553 17.3631C17.0878 17.6269 16.6967 17.7173 16.3378 17.5975H16.3358L14.9901 17.1502C14.8641 17.1083 14.731 17.0919 14.5985 17.1019C14.466 17.112 14.3369 17.1483 14.2187 17.2088C13.8663 17.3895 13.5007 17.5395 13.123 17.658C12.9946 17.6983 12.8757 17.764 12.7734 17.8512C12.671 17.9385 12.5873 18.0455 12.5273 18.1659L11.8906 19.4393C11.7217 19.7779 11.382 19.991 11.0058 19.994C10.6239 19.9969 10.2769 19.7831 10.1054 19.4393L9.47066 18.1717C9.41107 18.0523 9.32818 17.946 9.22688 17.8592C9.12558 17.7723 9.00792 17.7066 8.88083 17.6659C8.50342 17.5449 8.13671 17.3937 7.78514 17.2108C7.66636 17.1488 7.53635 17.1114 7.40281 17.1006C7.26928 17.0899 7.13495 17.1061 7.0078 17.1483L5.65821 17.5975C5.29931 17.7173 4.90822 17.6277 4.64065 17.3631C4.36912 17.0955 4.27668 16.6998 4.39846 16.3358V16.3338L4.84572 14.9882C4.88738 14.862 4.90349 14.7288 4.89309 14.5963C4.8827 14.4639 4.84601 14.3348 4.78518 14.2167C4.60477 13.8656 4.45466 13.4995 4.33596 13.1229C4.29595 12.9953 4.23073 12.877 4.14418 12.775C4.05763 12.673 3.95149 12.5894 3.83206 12.5292L2.55669 11.8886H2.55474C2.21602 11.7196 2.0028 11.3793 2.00005 11.0038C1.99727 10.6229 2.21121 10.2767 2.55474 10.1054L3.82425 9.47065C3.94366 9.41106 4.04993 9.32817 4.13681 9.22687C4.22368 9.12557 4.2894 9.00791 4.3301 8.88081C4.45101 8.504 4.60243 8.13811 4.78518 7.78708C4.84686 7.66856 4.88417 7.53889 4.8949 7.40571C4.90564 7.27254 4.88958 7.13856 4.84768 7.0117L4.39846 5.66015V5.6582C4.27844 5.29953 4.36739 4.90841 4.63088 4.64063C4.89838 4.36889 5.294 4.27517 5.65821 4.39649L7.00585 4.84571C7.13189 4.88767 7.26503 4.9041 7.39748 4.89404C7.52994 4.88398 7.65907 4.84763 7.77733 4.78712C8.12863 4.60721 8.49451 4.45793 8.87106 4.33986C8.9994 4.29962 9.1183 4.23391 9.22066 4.14665C9.32301 4.0594 9.40671 3.9524 9.46676 3.83205L10.1054 2.55472C10.2769 2.21079 10.6239 1.99705 11.0058 2.00004ZM11.0019 5.99804C8.25236 5.99804 5.99611 8.24649 5.9961 10.996C5.99608 13.7456 8.25234 15.9999 11.0019 15.9999C13.7515 15.9999 15.9979 13.7456 15.9979 10.996C15.9979 8.24649 13.7514 5.99804 11.0019 5.99804ZM11.0019 7.99801C12.6706 7.99801 13.9979 9.32734 13.998 10.996C13.998 12.6647 12.6706 13.9999 11.0019 13.9999C9.33321 13.9999 7.99606 12.6647 7.99607 10.996C7.99608 9.32734 9.33322 7.99801 11.0019 7.99801Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bodyContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;