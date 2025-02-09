const xmlFileUrl = "/data.xml";

const costWords = {
  500: "п’ятсот",
  250: "двісті п’ятдесят",
  300: "триста",
  200: "двісті",
  150: "сто п’ятдесят",
  350: "триста п’ятдесят",
  450: "чотириста п’ятдесят",
  220: "двісті двадцять",
  270: "двісті сімдесят"
};

fetch(xmlFileUrl)
  .then(response => response.text())
  .then(xmlString =>
  {
    xmlDisplay.textContent = xmlString;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");

    const services = xmlDoc.getElementsByTagName("service");
    const tableBody = document.getElementById("servicesTable").getElementsByTagName("tbody")[0];

    for (let service of services)
    {
      const type = service.getElementsByTagName("type")[0].textContent;
      const cost = service.getElementsByTagName("cost")[0].textContent;
      const instructor = service.getElementsByTagName("instructor")[0];
      const instructorName = instructor.getElementsByTagName("name")[0].textContent + " " +
        instructor.getElementsByTagName("surname")[0].textContent;
      const schedule = service.getElementsByTagName("schedule")[0];
      const days = schedule.getElementsByTagName("day");
      const times = schedule.getElementsByTagName("time");

      let scheduleStr = "";
      for (let j = 0; j < days.length; j++)
      {
        scheduleStr += `${days[j].textContent}: ${times[j].textContent}<br>`;
      }

      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${type}</td>
              <td>${costWords[cost] || cost}</td>
              <td>${instructorName}</td>
              <td>${scheduleStr}</td>
          `;
      tableBody.appendChild(row);
    }

  })
  .catch(error => console.error("Помилка завантаження XML:", error));