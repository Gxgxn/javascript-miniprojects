document.getElementById("jokeBtn").addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Something went wrong");
    })
    .then((obj) => {
      const out = document.getElementById("joke");
      out.innerText = obj.joke;
    })
    .catch((error) => alert(error));
});
