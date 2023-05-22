import styled from '@emotion/styled';

export const OptionList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;

  margin: auto 0;
`;

export const OptionItem = styled.li`
  margin-right: 10px;
`;

export const OptionButton = styled.button`
  min-width: 100px;
  height: 32px;

  border: none;
  border-radius: 4px;

  transition: background-color 500ms, transform 500ms;

  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }

  &:hover,
  &:focus {
    background-color: green;
    transform: scale(1.1);
  }
`;
