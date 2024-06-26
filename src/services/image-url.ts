/*
This is a service to manage the image url so as to crop the image
The image urls in the responses accept a crop prameter that allows one to resize the images.
*/

import placeHolderImage from '../assets/placeholder.png'

const cropImageURL = (url: string) => {
  if (!url) return placeHolderImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const slicedURL = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return slicedURL;
  
};

export default cropImageURL;
