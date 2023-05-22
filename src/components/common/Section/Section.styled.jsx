import styled from '@emotion/styled';

const getColorByPercentage = (positivePercentage, total) => {
  if (positivePercentage === 0 && total < 1) {
    return '#33cc33';
  }
  if (positivePercentage < 20) {
    return '#cc3300';
  }
  if (positivePercentage < 30) {
    return '#ff9900';
  }
  if (positivePercentage < 40) {
    return '#ffff00';
  }
  if (positivePercentage < 50) {
    return '#ccff33';
  }
  if (positivePercentage < 70) {
    return '#99ff33';
  }
  if (positivePercentage < 85) {
    return '#66ff33';
  }
  return '#33cc33';
};

export const SectionStyled = styled.section`
  padding: 10px 20px;
  background-color: ${props => getColorByPercentage(props.positivePercentage, props.total)};
`;