import styled from "styled-components"

const ButtonBoxToggle = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  /* border: 1px solid ${({ theme }) => theme.toggleBorder}; */
  color: ${({ theme }) => theme.buttonText};
  border-radius: 0px;
  /* font-size:0.8rem; */
  width: 70px;
  height: 30px;
  /* margin: 0 auto; */
  /* margin-top: 10px; */
  `

const Button = ({children, onClick }) => {
    return (
        <ButtonBoxToggle onClick={onClick} >
          {children}
        </ButtonBoxToggle>
    );
};

export default Button;
