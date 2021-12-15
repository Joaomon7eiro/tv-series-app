import React, { useEffect, useState } from 'react';
import DropDownPicker, { ItemType, ValueType } from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/custom-hooks';

import {
  Container,
} from './seasons.styles';
import { getEpisodesBySeasonId } from '../../../app/redux/actions/episodes.action';
import { EpisodeItem } from '../EpisodeItem/episode-item.component';
import { Season } from '../../../app/redux/reducers/seasons.reducer';

type SeasonsProps = {
  data: Season[]
}
export const Seasons: React.FC<SeasonsProps> = ({ data }: SeasonsProps) => {
  const [currentSeasonId, setCurrentSeasonId] = useState(0);

  const dispatch = useAppDispatch();
  const episodes = useAppSelector((state) => state.episodes);
  const ui = useAppSelector((state) => state.ui);

  const [open, setOpen] = useState(false);

  const [items, setItems] = useState<ItemType[]>([] as ItemType[]);

  const theme = useTheme();

  useEffect(() => {
    if (data.length) {
      setItems(data.map((season) => ({
        label: `Season ${season.number}`,
        value: season.id,
      })));
      if (currentSeasonId !== data[0].id) {
        setCurrentSeasonId(data[0].id);
      }
    }
  }, [data]);

  const handleDropdownChange = (value: ValueType | ValueType[] | null) => {
    if (value) {
      dispatch(getEpisodesBySeasonId(value as number));
    }
  };

  return (
    <Container>
      <DropDownPicker
        placeholder="Select a Season"
        listMode="SCROLLVIEW"
        style={{
          borderWidth: 0,
          width: 140,
          height: 40,
        }}
        labelStyle={{
          fontFamily: theme.fonts.primary.semiBold,
          fontSize: 15,
        }}
        textStyle={{
          fontFamily: theme.fonts.primary.semiBold,
          fontSize: 15,
        }}
        dropDownContainerStyle={{
          borderColor: '#ddd',
        }}
        dropDownDirection="TOP"
        open={open}
        items={items}
        setOpen={setOpen}
        value={currentSeasonId}
        setValue={setCurrentSeasonId}
        onChangeValue={handleDropdownChange}
      />
      {ui.pending ? <ActivityIndicator /> : null}
      <ScrollView>
        {episodes.map((episode) => (
          <EpisodeItem key={episode.id} data={episode} />
        ))}
      </ScrollView>

    </Container>
  );
};
