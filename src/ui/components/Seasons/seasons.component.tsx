import React, { useEffect, useState } from 'react';
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
} from './seasons.styles';
import { useSeason } from '../../../hooks/season.hook';
import { EpisodesContainer } from '../Episodes/episodes.component';

type SeasonsProps = {
  serieId: number;
}
export const Seasons: React.FC<SeasonsProps> = ({ serieId }: SeasonsProps) => {
  const { data: seasons, isFetching } = useSeason(serieId);

  const [currentSeasonId, setCurrentSeasonId] = useState<number>(0);

  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    if (seasons?.length) {
      setCurrentSeasonId(seasons[0].id);
      setItems(seasons.map((season) => ({
        label: `Season ${season.number}`,
        value: season.id,
      })));
    }
  }, [seasons]);

  if (isFetching) {
    return (
      <Container>
        <ActivityIndicator color={theme.colors.primary} />
      </Container>
    );
  }

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
      />
      <EpisodesContainer seasonId={currentSeasonId} />
    </Container>
  );
};
