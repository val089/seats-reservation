import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Seat from 'features/Seat/Seat';

export const GridStyled = styled.div`
  display: grid;
  width: 1000px;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 0px;

  .empty02 {
    grid-area: 1 / 6 / 11 / 7;
  }
  .empty01 {
    grid-area: 1 / 1 / 4 / 3;
  }
  .empty03 {
    grid-area: 1 / 11 / 11 / 12;
  }
  .empty04 {
    grid-area: 6 / 7 / 7 / 16;
  }
  .empty05 {
    grid-area: 7 / 10 / 8 / 11;
  }
`;

const Seats = () => {
  const [seats, setSeats] = useState([]);
  const [seatsReserved, setSeatsReserved] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/seats')
      .then((resp) => resp.json())
      .then((data) => {
        setSeats(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <GridStyled>
      <div className="empty02" />
      <div className="empty01" />
      <div className="empty03" />
      <div className="empty04" />
      <div className="empty05" />
      {seats.map((seat) => (
        <Seat
          key={seat.id}
          seat={seat}
          seatsReserved={seatsReserved}
          setSeatsReserved={setSeatsReserved}
        />
      ))}
      <div>
        <button type="submit" onClick={() => console.log(seatsReserved)}>Rezerwuj</button>
      </div>
    </GridStyled>
  );
};

Seats.propTypes = {};

export default Seats;
