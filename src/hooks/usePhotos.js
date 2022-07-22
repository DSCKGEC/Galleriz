import {useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {PermissionsAndroid} from 'react-native';
async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}
const mS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
const getTitleText = timestamp => {
  const today = new Date();
  const d = new Date(timestamp * 1000);

  let string = '';
  if (today.getFullYear() === d.getFullYear()) {
    if (today.getDate() === d.getDate()) {
      string = 'Today';
    } else if (today.getDate() - 1 === d.getDate()) {
      string = 'Yesterday';
    } else {
      string = d.getDate() + ' ' + mS[d.getMonth()];
    }
  } else {
    string = d.getDate() + ' ' + mS[d.getMonth()] + ' ' + d.getFullYear();
  }
  return string;
};

const getThePhotoData = photos => {
  const map = new Map();
  photos.forEach(({node}) => {
    const key = getTitleText(node.timestamp);
    map.set(key, map.get(key) || []);
    map.get(key).push(node.image.uri);
  });
  const photoData = [];
  map.forEach((value, key) => {
    photoData.push({title: key, images: value});
  });
  return photoData;
};
const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const getPhotos = () => {
    hasAndroidPermission()
      .then(v => {
        if (v) {
          CameraRoll.getPhotos({
            first: 2000,
          })
            .then(r => {
              setPhotos(getThePhotoData(r.edges));
            })
            .catch(err => {
              console.log(err);
              //Error Loading Images
            });
        } else {
          throw 'No Permission';
        }
      })
      .catch(err => {
        setPhotos([]);
      });
  };
  return [photos, getPhotos];
};
export default usePhotos;
