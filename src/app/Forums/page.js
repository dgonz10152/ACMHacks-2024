
import { PhotoGallery } from 'react-native-photo-gallery-api';

import { useCallback, useEffect, useState } from 'react';

import { AppState, EmitterSubscription } from 'react-native';

import { ImageDTO, isAboveIOS14, isAndroid } from 'src/Shared/Constants';
import { convertCameraRollPicturesToImageDtoType, photoLibraryEventEmitter } from 'src/Shared/Utils';

