import styled from "styled-components";

export const AppContainer = styled.div`
  /* Add more reset styles if needed */

  .container {
    // width: 100vh;
    height: 100vh;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    background-color: #ffffff;
    // align-items: stretch;
    // flex: 1;
    .wrapper {
      display: flex;
      flex-direction: row;
      // align-items: stretch;
      justify-content: center;
      width: 100%;
      height: 100%;
      // flex: 1;
      gap: 10px;
      padding: 20px;
      @media (width <= 60em) {
        flex-direction: column;
      }
      .menu {
        background-color: #f5f6f7;
        width: 60px;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        @media (width <= 60em) {
          width: 100%;
          flex-direction: row;
        }
        .logo {
          width: 31px;
          height: 31px;
        }
      }
      .sidebar {
        background-color: #ffffff;
        width: 300px;
        border-radius: 8px;
        .sect_title {
          font-size: 16px;
          font-weight: 600;
          color: #000000;
          padding: 20px;
          border-bottom: 1px solid #e4e4e4;
        }
      }
      .bodyContainer {
        background-color: #f5f6f7;
        flex-grow: 1;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 20px;
        padding-bottom: 154px;
        overflow-y: auto;

        .chatWrpper {
          order: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          width: 50vw;
          gap: 20px;
          margin-top: 30px;
          flex: 1;
          
          @media (width <= 60em) {
            width: 80vw;
          }
          @media (width <= 45em) {
            width: 100%;
          }
          .bot {
            padding: 20px;
            border-radius: 12px;
            background-color: #ffffff;
            display: flex;
            flex-direction: row;
            align-items: start;
            align-self: flex-start;
            gap: 10px;
            max-width: 600px;
            .thumbWrap {
            }
            .infoWrap {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              .name {
                font-size: 12px;
                font-weight: 600;
                color: #000000;
              }
              .chat {
                font-size: 14px;
                font-weight: 400;
                color: #000000;
              }
            }
          }
          .user {
            padding: 20px;
            border-radius: 12px;
            background-color: #e6f5ee;
            display: flex;
            flex-direction: row;
            align-items: start;
            align-self: flex-end;
            gap: 10px;
            max-width: 600px;
            .thumbWrap {
            }
            .infoWrap {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              .name {
                font-size: 12px;
                font-weight: 600;
                color: #000000;
              }
              .chat {
                font-size: 14px;
                font-weight: 400;
                color: #000000;
              }
            }
          }
        }

        .queryWrapper {
          position: fixed;
          bottom: 20px;
          order: 2;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          /* justify-content: flex-end; */
          align-items: center;
          /* margin-bottom: 20px; */
          height: 124px;
          background-color: #f5f6f7;
          padding-top: 12px;

          form {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 50vw;
            @media (width <= 60em) {
              width: 100%;
            }
          }

          .inspireMe_btn {
            background-color: #049e53;
            border-radius: 50px;
            padding: 10px 20px;
            border: 1px solid #e4e4e4;
            font-size: 14px;
            font-weight: 600;
            color: #ffffff;
            cursor: pointer;
            height: 40px;
            display: flex;
            flex-direction: row;
            gap: 10px;
            align-items: center;
            // @media (width <= 60em) {
            //     font-size: 12px;
            //     height: 30px;
            //   }
            .btn_text {
              @media (width <= 45em) {
                display: none;
              }
            }
          }

          input[type="text"] {
            flex-grow: 1;
            height: 40px;
            border-radius: 50px;
            border: 1px solid #e4e4e4;
            padding: 0 20px;
            font-size: 14px;
            font-weight: 600;
            color: #000000;
            // @media (width <= 60em) {
            //     font-size: 12px;
            //     height: 30px;
            //   }
          }

          .notice {
            font-size: 11px;
            font-weight: 400;
            color: #000000;
            padding: 10px 40px;
            @media (width <= 45em) {
              text-align: center;
            }
          }
          .send_btn {
            @media (width <= 45em) {
              display: none;
            }
          }
        }
      }
    }
  }
`;
