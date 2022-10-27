import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import {
  dashboardActions,
  selectLoading,
  selectHighestStudentList,
  selectStatistics,
  selectLowestStudentList,
  selectRankingByCityList,
} from './dashboardSlice';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const statistics = useAppSelector(selectStatistics);
  const highestStudentList = useAppSelector(selectHighestStudentList);
  const lowestStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCityList = useAppSelector(selectRankingByCityList);

  console.log({ loading, statistics, highestStudentList, lowestStudentList, rankingByCityList });

  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);

  return <div>Dashboard</div>;
}
