import { Container } from "./styled";

const Page404 = () => {
  return (
    <Container>
      <div className="error-content">
        <div className="title">404</div>
        <div className="message">
          Please provide your name on the end of the URL.
          <br />
          Ex: chat/yourname
        </div>
      </div>
    </Container>
  );
};

export default Page404;
