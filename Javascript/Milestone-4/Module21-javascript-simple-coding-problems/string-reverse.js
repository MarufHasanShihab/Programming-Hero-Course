function stringReverse(text) {
  let reverse = "";
  for (let i = text.length-1; i >= 0; i--) {
    reverse += text[i];
  }
  console.log(reverse)
}

const text = "Iam Good Boy";
stringReverse(text);
