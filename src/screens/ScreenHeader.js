import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {SVGIcon} from '../components/SVGIcon';
import {SCText} from '../components/SCText';

export const ScreenHeader = ({title, showLogo = false, start}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const {colors} = useTheme();

  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.primary,
            height: 55 + insets.top,
            paddingTop: insets.top,
          },
        ]}>
        <SCText
          style={[
            styles.title,
            {
              color: colors.textInverted,
            },
          ]}>
          {title}
        </SCText>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MessageSearchScreen');
          }}
          style={styles.searchIconContainer}>
          <SVGIcon height="25" width="25" type="global-search" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    height: 30,
    width: 30,
    borderRadius: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  searchIconContainer: {},
});
