import React, { useEffect } from 'react';

import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';

import ContentContainer from '../../../common/components/content-container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CONSTANT from './weight-calculator-const';
import NameWeightPair from './name-weight-pair';

import CategoryContainer from '../../../common/components/category-container';
import GearCard from './gear-crad';

const WeightCalculator = observer(({ store })=> {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    if (data.type === 'none' || !data.name || !data.weight || !data.qty) {
      return;
    }

    // add to store
    store.addToGearList(data);

    reset();
  }

  const generateTable = () => {
    const render = [];

    for (var key in CONSTANT.TYPE) {
      render.push(
        <CategoryContainer key={key} title={CONSTANT.TYPE[key]}>
          {
            store.gearsList.filter(x => x.type === key).map(x => <GearCard store={store} data={x} />)
          }
        </CategoryContainer>
      );
    }

    return render;
  }

  const generateSelectedGear = () => {
    const render = [];
    let weight = 0;

    store.selectedGears.forEach(data => {
      render.push(<NameWeightPair key={data.name} data={data} />);
      weight += parseFloat(data.weight * data.qty);
    })

    render.push(<hr />);

    const totalData = {
      name: '總重量',
      weight: weight
    }

    render.push(<NameWeightPair data={totalData} />);

    return render;
  }

  const createTypeOptions = () => {
    let render = [];

    for (var key in CONSTANT.TYPE) {
      render.push(<option value={key}>{CONSTANT.TYPE[key]}</option>);
    }

    return render;
  }

  return (
    <ContentContainer title="Gear 磅數計算機">
      <Box sx={{ bgcolor: 'grey.300' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', padding: 4 }}>
            <div>
              <label for="typeFormControl" class="form-label bold-label">類型</label>
              <select class="form-select" aria-label="Gear type select" {...register('type')}>
                <option selected value='none'>請選擇類型</option>
                { createTypeOptions() }
              </select>
            </div>
            <div>
              <label for="nameFormControlInput" class="form-label bold-label">名稱</label>
              <input class="form-control" id="nameFormControlInput" placeholder="名稱" {...register('name')} />
            </div>
            <div>
              <label for="weightFormControlInput" class="form-label bold-label">重量 (克)</label>
              <input class="form-control" id="weightFormControlInput" type="number" placeholder="重量 (克)" {...register('weight')} />
            </div>
            <div>
              <label for="weightFormControlInput" class="form-label bold-label">數量</label>
              <input class="form-control" id="weightFormControlInput" type="number" placeholder="數量" defaultValue="1" {...register('qty')} />
            </div>

            <button type='submit' className="btn btn-success submit-btn">提交</button>
            <button type='reset' className="btn btn-secondary submit-btn">重設</button>
          </div>

        </form>
      </Box>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3, height: '85vh', overflow: 'auto' }}>
            { generateTable() }
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3, height: '85vh', overflow: 'auto' }}>
            <CategoryContainer title={`⚖️總重量`}>
              { generateSelectedGear() }
            </CategoryContainer>
          </Box>
        </Grid>
      </Grid>
    </ContentContainer>
  )
});

export default WeightCalculator;