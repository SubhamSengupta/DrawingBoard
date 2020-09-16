import styled, { css } from "styled-components"

export const Tool = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 4px;
  border: 1px solid ${({isSelected}) => isSelected ? '#0000ff' : '#efefef'};
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  background: ${({isSelected}) => isSelected ? '#dfdfef' : '#fff'};
  align-items: center;
  font-size: 1.8rem;
  cursor: ${({disabled}) => disabled ? 'normal' : 'pointer'};
  :hover {
    ${({disabled}) => !disabled && css`
      box-shadow: 0 0 4px 0 rgba(200, 200, 250, 0.8);
    `}
  }
`;

export const Point = styled.div`
  width: ${({width}) => width * 2}px;
  height: ${({width}) => width * 2}px;
  border-radius: 50%;
  background: ${({disabled}) => disabled ? '#cfcfcf' : '#1c1c1c'};
`;

export const Tools = styled.div`
  display: flex;
  align-items: center;
`;

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10rem;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  color: ${({disabled}) => disabled ? '#cfcfcf' : '#1c1c1c'};
`;

export const Section = styled.section`
  height: 6rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 0.4rem 1rem rgba(0, 0, 0, 0.15);
  margin: 0.5rem 0;
  padding: 0 2rem;
  display: flex;
  align-items: center;
`;
