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
import { useTheme } from 'styled-components';
import { Season } from '../../../app/redux/reducers/seasons.reducer';

type SeasonDropdownProp = {
  label: string;
  value: number
}

type SeasonsProps = {
  data: Season[]
}
export function Seasons({ data }: SeasonsProps) {
  const [currentSeasonId, setCurrentSeasonId] = useState(0);

  const dispatch = useAppDispatch();
  const episodes = useAppSelector((state) => state.episodes);
  const ui = useAppSelector((state) => state.ui);

  const [open, setOpen] = useState(false);

  const [items, setItems] = useState<SeasonDropdownProp[]>();

  const theme = useTheme();

  useEffect(() => {
    console.log('ATRAS DO BUG 3');

    if (data.length) {
      setItems(data.map(season => ({
        label: `Season ${season.number}`,
        value: season.id
      })));
      if (currentSeasonId != data[0].id) {
        setCurrentSeasonId(data[0].id)
      }
    }
  }, [data]);

  const handleDropdownChange = (value: number) => {
    if (value) {
      dispatch(getEpisodesBySeasonId(value));
    }
  }

  return (
    <Container>
      <DropDownPicker
        placeholder='Select a Season'
        listMode="SCROLLVIEW"
        style={{
          borderWidth: 0,
          width: 140,
          height: 40
        }}
        labelStyle={{
          fontFamily: theme.fonts.primary.regular,
          fontSize: 15
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
        onChangeValue={handleDropdownChange}
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