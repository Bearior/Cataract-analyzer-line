import Camera from 'react-html5-camera-photo';

<Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    />