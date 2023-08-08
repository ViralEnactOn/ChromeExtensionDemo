console.log("Kittens of the world, unite as one!");

let filenames = [
  "817824-new-nature-backgrounds-hd-1920x1080-iphone.jpg",
  "images (1).jpg",
  "download.jpg",
  "images.jpg",
  "1093085-cool-nature-background-hd-1920x1200.jpg",
];

let imgs = document.getElementsByTagName("img");

for (imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = "kitten/" + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}
