/*
This is a service to manage the image url so as to crop the image
The image urls in the responses accept a crop prameter that allows one to resize the images.
*/

const cropImageURL = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const slicedURL = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return slicedURL;
  
};

export default cropImageURL;
