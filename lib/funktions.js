export function convertDate(rawDate) {
  let date = new Date(rawDate);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = date.toLocaleString("default", { month: "long" });
  let day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  let result = month + " " + day + ", " + year;
  return result;
}

//Thank you subodhghulaxe! https://jsfiddle.net/subodhghulaxe/t568u/
export function convertHex(hex, opacity) {
  hex = hex.replace("#", "");
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  let result = "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
  return result;
}

export function categoryTitle(category) {
  let catTitle;
  let catRaw = category;
  if (catRaw.includes("-")) {
    catTitle = catRaw.replace(/-/g, " ");
  } else {
    catTitle = catRaw;
  }
  const mySentence = catTitle;
  const words = mySentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  let final = words.join(" ");
  return final;
}
