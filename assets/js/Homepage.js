function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
  document.getElementById("main").style.marginLeft = "150px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}





document.addEventListener("DOMContentLoaded", () => {

  fetch("assets/csv/Users.csv")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then(csvText => {
      const jsonData = csvToJSONuser(csvText);
      populateuserTable(jsonData);
    })
    .catch(error => {
      console.error("Error loading CSV:", error);
    });
});
 
function csvToJSONuser(csv) {
  const lines = csv
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0);
 
  if (lines.length === 0) return [];
 
  const headers = lines[0].split(",").map(h => h.trim());
 
  const result = lines.slice(1).map(line => {
    const values = line.split(",").map(v => v.trim());
    let obj = {};
    headers.forEach((h, i) => {
      obj[h] = values[i] ?? "";
    });
    return obj;
  });
 
  return result;
}
 
function populateuserTable(json) {
  const tableHead = document.querySelector("#User-Table thead");
  const tableBody = document.querySelector("#User-Table tbody");
 
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";
 
  if (!json || json.length === 0) {
    return;
  }
 
  const headerRow = document.createElement("tr");
  Object.keys(json[0]).forEach(key => {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);
 
  json.forEach(row => {
    const tr = document.createElement("tr");
    Object.values(row).forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}



document.addEventListener("DOMContentLoaded", () => {

  fetch("assets/csv/Trips.csv")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then(csvText => {
      const jsonData = csvToJSONtrip(csvText);
      populatetripTable(jsonData);
    })
    .catch(error => {
      console.error("Error loading CSV:", error);
    });
});
 
function csvToJSONtrip(csv) {
  const lines = csv
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0);
 
  if (lines.length === 0) return [];
 
  const headers = lines[0].split(",").map(h => h.trim());
 
  const result = lines.slice(1).map(line => {
    const values = line.split(",").map(v => v.trim());
    let obj = {};
    headers.forEach((h, i) => {
      obj[h] = values[i] ?? "";
    });
    return obj;
  });
 
  return result;
}
 
function populatetripTable(json) {
  const tableHead = document.querySelector("#Trip-Table thead");
  const tableBody = document.querySelector("#Trip-Table tbody");
 
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";
 
  if (!json || json.length === 0) {
    return;
  }
 
  const headerRow = document.createElement("tr");
  Object.keys(json[0]).forEach(key => {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);
 
  json.forEach(row => {
    const tr = document.createElement("tr");
    Object.values(row).forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}



document.addEventListener("DOMContentLoaded", () => {

  fetch("assets/csv/Flags.csv")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then(csvText => {
      const jsonData = csvToJSONflag(csvText);
      populateflagTable(jsonData);
    })
    .catch(error => {
      console.error("Error loading CSV:", error);
    });
});
 
function csvToJSONflag(csv) {
  const lines = csv
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0);
 
  if (lines.length === 0) return [];
 
  const headers = lines[0].split(",").map(h => h.trim());
 
  const result = lines.slice(1).map(line => {
    const values = line.split(",").map(v => v.trim());
    let obj = {};
    headers.forEach((h, i) => {
      obj[h] = values[i] ?? "";
    });
    return obj;
  });
 
  return result;
}
 
function populateflagTable(json) {
  const tableHead = document.querySelector("#Flag-Table thead");
  const tableBody = document.querySelector("#Flag-Table tbody");
 
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";
 
  if (!json || json.length === 0) {
    return;
  }
 
  const headerRow = document.createElement("tr");
  Object.keys(json[0]).forEach(key => {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);
 
  json.forEach(row => {
    const tr = document.createElement("tr");
    Object.values(row).forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
}