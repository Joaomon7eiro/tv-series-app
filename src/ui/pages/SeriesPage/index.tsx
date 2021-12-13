import React, { useEffect } from 'react';
import { getAllSeries } from '../../../application/redux/actions/series.action';
import { useAppDispatch, useAppSelector } from '../../../hooks/custom-hooks';

import {
  Container,
} from './styles';

export function SeriesPage() {
  const dispatch = useAppDispatch();
  const series = useAppSelector(state => state.series);

  useEffect(() => {
    dispatch(getAllSeries());
  }, []);

  return (
    <Container>
    </Container>
  );
}