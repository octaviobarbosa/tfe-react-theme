import styled from "styled-components"

const BoxToggle = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  font-size:0.8rem;
  padding: 0.6rem;
  width: 500px;
  margin: 0 auto;
  margin-top: 10px;
  `

const Box = ({children }) => {
    return (
        <BoxToggle  >
          {children}
        </BoxToggle>
    );
};

export default Box;
