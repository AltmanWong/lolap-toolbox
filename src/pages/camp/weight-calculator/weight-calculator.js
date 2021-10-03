import React, { useEffect } from 'react';

import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';

const WeightCalculator = observer(({ store })=> {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    console.log(store);
  }, [])

  const onSubmit = (data) => {
    // add to store
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
        <input {...register('weight')} />

        <input type="submit" />
      </form>

      Weight Calculator
    </div>
  )
});

export default WeightCalculator;