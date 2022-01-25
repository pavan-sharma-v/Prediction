function autoRefresh() {
    window.location = window.location.href;
  }
 
  function data() {
    var x = document.getElementById("c").value;

    const api_url = "https://api.nationalize.io?name=" + x;
    async function getuser() {
      const response = await fetch(api_url);
      const data = await response.json();
      document.getElementById("x").innerHTML = data.country[0].country_id;
      document.getElementById("y").innerHTML = data.country[1].country_id;
      document.getElementById("z").innerHTML = data.country[2].country_id;
    }
    getuser();
  }