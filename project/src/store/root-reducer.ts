import {combineReducers} from 'redux';
import {mainData} from './main-data/main-data';
import {propertyData} from './property-data/property-data';
import {favoriteData} from './favorite-data/favorite-data';
import {userData} from './user-data/user-data';

export const enum NameDataList {
  MainData = 'MainData',
  PropertyData = 'RoomData',
  FavoriteData = 'FavoriteData',
  UserData = 'UserData',
}

export const rootReducer = combineReducers({
  [NameDataList.MainData]: mainData,
  [NameDataList.PropertyData]: propertyData,
  [NameDataList.FavoriteData]: favoriteData,
  [NameDataList.UserData]: userData,
});


export type RootState = ReturnType<typeof rootReducer>;
