import styled from '@emotion/styled';

export const SectionStyled = styled.section`
  padding: 10px 20px;
  background-color: ${props => {
    if (props.positivePercentage === 0 && props.total < 1) {
      return '#33cc33';
    }
    if (props.positivePercentage < 20) {
      return '#cc3300';
    }
    if (props.positivePercentage < 30) {
      return '#ff9900';
    }
    if (props.positivePercentage < 40) {
      return '#ffff00';
    }
    if (props.positivePercentage < 50) {
      return '#ccff33';
    }
    if (props.positivePercentage < 70) {
      return '#99ff33';
    }
    if (props.positivePercentage < 85) {
      return '#66ff33';
    }
    return '#33cc33';
  }};
`;
