const getBaconIpsums = (urls = [], el = document.body) => {
  if (!urls.length) {
    return false;
  }

  const promises = urls.map((url) => {
    return fetch(url).then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    });
  });

  Promise.all(promises)
    .then((responses) => {
      const resultText = responses.flat().join(" ");
      if (el === document.body) {
        const result = document.createElement("div");
        result.className = "success";
        result.innerText = resultText;
        el.appendChild(result);
      } else {
        el.classList.add("success");
        el.innerText = resultText;
      }
    })
    .catch((err) => {
      const errorEl = document.createElement("div");
      errorEl.className = "error";
      errorEl.innerText = err;
      el.appendChild(errorEl);
    });
};

getBaconIpsums([
  "https://baconipsum.com/api/?type=meat-and-filler&amp;paras=5&amp;format=json",
  "https://baconipsum.com/api/?type=all-meat&amp;paras=3&amp;start-with-lorem=1&amp;format=json",
]);
