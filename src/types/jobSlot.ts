import { GestureResponderEvent } from 'react-native';

export type JobSlotProps = {
  item: {
         url: string | null;
         slot: number;
     };
     onPress: (event: GestureResponderEvent) => void;
};
