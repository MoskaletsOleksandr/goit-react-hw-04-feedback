import PropTypes from 'prop-types';
import {
  StatisticList,
  StatisticItem,
  StatisticValue,
} from './Statistics.styled';
import { Notification } from 'components/Notification';

export const Statistics = ({total, arrayOfStatsKeys, statistics, positivePercentage}) => {
  return (
          <div>
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <StatisticList>
            {arrayOfStatsKeys.map(stat => {
              return (
                <StatisticItem key={stat}>
                  <StatisticValue>
                    {stat}: {statistics[stat]}
                  </StatisticValue>
                </StatisticItem>
              );
            })}
            <StatisticItem>
              <StatisticValue>Total: {total}</StatisticValue>
            </StatisticItem>
            <StatisticItem>
              <StatisticValue>
                Positive feedback: {positivePercentage}%
              </StatisticValue>
            </StatisticItem>
          </StatisticList>
        )}
      </div>
  )
}

Statistics.propTypes = {
  statistics: PropTypes.objectOf(PropTypes.number).isRequired,
  arrayOfStatsKeys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
