import styled from "styled-components";

const Header = styled.h1`
  color: cadetblue;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: indianred;
`;

const SubHeader = styled.h2`
  color: darkslateblue;
`;

const LinkWrapper = styled.div`
  margin-top: 2rem;
`;

const ContentWrapper = styled.div`
  width: 80%;
  margin: auto;
  padding: 2rem;
  background-color: lightsteelblue;
  border: 1px solid darkolivegreen;
  border-radius: 4px;
  box-shadow: 3px 2px 2px 1px rgba(211, 211, 211, 0.65);
`;

const ContentWrapper2 = styled(ContentWrapper)`
  background-color: peachpuff;
  border: 2px solid greenyellow;
  box-shadow: none;
`;

const BorderedSalmonContent = styled.div`
  border: 2px solid salmon;
  border-radius: 4px;
  padding: 1rem;
`;

export {
    ContentWrapper,
    ContentWrapper2,
    BorderedSalmonContent,
    LinkWrapper,
    SubHeader,
    Header,
};