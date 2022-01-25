function autoRefresh() {
    window.location = window.location.href;
  }
 
  function data() {
    var x = document.getElementById("c").value;
  if(x=="" || x==" "){
      document.getElementById("x").innerHTML ="Name Cannot Be Blank";
    }
          else{
    const api_url = "https://api.nationalize.io?name=" + x;
    async function getuser() {
      const response = await fetch(api_url);
      const data = await response.json();
            if((data.country) == "")
      {
        document.getElementById("x").innerHTML ="Not Able To Predict Try Different Name";
      }
        else{
      document.getElementById("x").innerHTML = data.country[0].country_id;
      document.getElementById("y").innerHTML = data.country[1].country_id;
      document.getElementById("z").innerHTML = data.country[2].country_id;
        }
    }
    getuser();
          }
  }
