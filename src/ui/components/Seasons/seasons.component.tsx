import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/custom-hooks';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  Container,
} from './seasons.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { getEpisodesBySeasonId } from '../../../app/redux/actions/episodes.action';
import { EpisodeItem } from '../EpisodeItem/episode-item.component';
import { ActivityIndicator } from 'react-native';

type SeasonDropdownProp = {
  label: string;
  value: number
}
export function Seasons() {
  const [currentSeasonId, setCurrentSeasonId] = useState(0);
  const dispatch = useAppDispatch();
  const seasons = useAppSelector((state) => state.seasons);
  const episodes = useAppSelector((state) => state.episodes);
  const ui = useAppSelector((state) => state.ui);

  const [open, setOpen] = useState(false);

  const [items, setItems] = useState<SeasonDropdownProp[]>();

  useEffect(() => {
    setItems(seasons.map(season => ({
      label: `Season ${season.number}`,
      value: season.id
    })));
  }, [seasons]);

  return (
    <Container>
      <DropDownPicker
        listMode="SCROLLVIEW"
        placeholder='Select an Season'
        style={{
          borderWidth: 0,
          width: 140
        }}
        dropDownContainerStyle={{
          borderColor: "#ddd"
        }}
        dropDownDirection='TOP'
        open={open}
        items={items}
        setOpen={setOpen}
        value={currentSeasonId}
        setValue={setCurrentSeasonId}
        onChangeValue={(value) => {
          if (value) {
            dispatch(getEpisodesBySeasonId(value as number))
          }
        }}
      />

      {ui.pending
        ? <ActivityIndicator />
        :
        <ScrollView>
          {episodes.map((episode) => (
            <EpisodeItem key={episode.id} data={episode} />
          ))
          }
        </ScrollView>
      }
    </Container>
  );
}