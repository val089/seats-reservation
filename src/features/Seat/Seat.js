import React, { useState } from 'react';
import PropTypes, { shape } from 'prop-types';
import styled from 'styled-components';

const SeatStyled = styled.div`
  background-color: ${({ isReserved }) => (isReserved ? '#e7e044' : null)};
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  cursor: pointer;
`;

const Seat = ({
  seatsReserved,
  setSeatsReserved,
  seat: { cords, reserved },
}) => {
  const [isReserved, setIsReserved] = useState(false);

  const reserve = (data) => {
    setIsReserved(!isReserved);
    if (seatsReserved.indexOf(data) > -1) {
      setSeatsReserved(seatsReserved.filter(res => res !== data));
    } else {
      setSeatsReserved(seatsReserved.concat(data));
    }
  };

  return (
    <SeatStyled
      onClick={() => reserve(cords)}
      isReserved={reserved || isReserved}
    />
  );
};

Seat.defaultProps = {
  seat: PropTypes.shape({
    cords: {
      x: 0,
      y: 0,
    },
    reserved: false,
  }),
};

Seat.propTypes = {
  seat: PropTypes.shape({
    cords: shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    reserved: PropTypes.bool,
  }),
};

export default Seat;
