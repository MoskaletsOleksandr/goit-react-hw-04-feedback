import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';
import { SectionTitle } from '../SectionTitle';

export const Section = ({ title, children, positivePercentage, total }) => {
  return (
    <SectionStyled positivePercentage={positivePercentage} total={total}>
      <SectionTitle title={title} />
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
