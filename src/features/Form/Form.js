import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Wrapper } from './Form.styles';

const Form = ({ formValues }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values, e) => {
    formValues(values);
    e.target.reset();
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="placesNumber">
            Liczba miejsc:
            <input name="placesNumber" type="number" {...register('placesNumber', { required: true })} />
          </label>
        </div>
        <div>
          <label htmlFor="seatsNextTo">
            <input
              type="checkbox"
              value="seatsNextTo"
              name="seatsNextTo"
              {...register('seatsNextTo', { required: false })}
            />
            Czy miejsca mają być obok siebie?
          </label>
        </div>
        <div>
          <button type="submit">Wybierz miejsca</button>
        </div>
      </form>
    </Wrapper>
  );
};

Form.defaultProps = {
  formValues: PropTypes.shape({
    placesNumber: '0',
    seatsNextTo: false,
  }),
};

Form.propTypes = {
  formValues: PropTypes.func,
};

export default Form;
