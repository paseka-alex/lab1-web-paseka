async function fetch_info(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  document.getElementById("result").innerHTML = data["count"];
  document.getElementById("asjson").innerHTML = JSON.stringify(data, null, 2);
}


document.getElementById("button").addEventListener("click", function () {
  let input = document.getElementById("keyword");
  let keyword = input.value;
  let URL = `https://ll.thespacedevs.com/2.2.0/launch/?mode=list&search=${keyword}`;
  fetch_info(URL);
});
