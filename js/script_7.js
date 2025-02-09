document.querySelector("#fileInput").addEventListener("change", handleFileSelect);

    function handleFileSelect(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          parseXML(e.target.result);
        };
        reader.readAsText(file);
      }
    }

    function parseXML(xmlString) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");
      const services = xmlDoc.getElementsByTagName("service");

      if (services.length === 0) {
        alert("XML-файл не містить даних про послуги.");
        return;
      }

      const tbody = document.querySelector("#xmlTable tbody");
      tbody.innerHTML = "";

      Array.from(services).forEach(service => {
        const type = service.getElementsByTagName("type")[0]?.textContent || "Невідомо";
        const cost = service.getElementsByTagName("cost")[0]?.textContent || "Невідомо";
        
        const instructorName = service.getElementsByTagName("instructor")[0]?.getElementsByTagName("name")[0]?.textContent || "Невідомо";
        const instructorSurname = service.getElementsByTagName("instructor")[0]?.getElementsByTagName("surname")[0]?.textContent || "Невідомо";
        const instructorPatronymic = service.getElementsByTagName("instructor")[0]?.getElementsByTagName("patronymic")[0]?.textContent || "Невідомо";
        const education = service.getElementsByTagName("instructor")[0]?.getElementsByTagName("education")[0]?.textContent || "Невідомо";
        
        const schedule = Array.from(service.getElementsByTagName("schedule")).map(sch => {
          const day = sch.getElementsByTagName("day")[0]?.textContent || "Невідомо";
          const time = sch.getElementsByTagName("time")[0]?.textContent || "Невідомо";
          return `${day}: ${time}`;
        }).join(", ");

        const row = document.createElement("tr");
        row.innerHTML = `
          <td class="border px-4 py-2">${type}</td>
          <td class="border px-4 py-2">${cost}</td>
          <td class="border px-4 py-2">${instructorSurname} ${instructorName} ${instructorPatronymic}</td>
          <td class="border px-4 py-2">${education}</td>
          <td class="border px-4 py-2">${schedule}</td>
        `;
        tbody.appendChild(row);
      });
    }