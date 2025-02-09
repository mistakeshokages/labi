const labList = document.getElementById("lab-list");

for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.textContent = `Лабораторна №${i}`;
    button.id = `lab${i}Button`; 
    button.className = "px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md " + 
                        "hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95";
    button.onclick = () => openLab(i); 

    li.appendChild(button);
    labList.appendChild(li);
}

let currentLabNumber = 1;

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 10; i++) {
    const button = document.getElementById(`lab${i}Button`);
    if (button) {
      button.addEventListener("click", () => openLab(i));
    }
  }
});

function openLab(labNumber) {
  currentLabNumber = labNumber;
  for (let i = 1; i <= 10; i++) {
    const button = document.getElementById(`lab${i}Button`);
    if (button) {
      button.classList.remove("active");
    }
  }
  document.getElementById(`lab${labNumber}Button`).classList.add("active");
  displayContent("task");
}

async function displayContent(contentType) {
    const contentContainer = document.getElementById("contentContainer");
  
    const contentMap = {
        task: `<iframe src="tasks/Лабораторна робота ${currentLabNumber}.pdf" width="100%" height="600px"></iframe>`,
        result: generateResultLink(),
        code: await loadCodeFiles()
    };
  
    contentContainer.innerHTML = contentMap[contentType] || "";
  }

function generateResultLink() {
  const resultLinks = {
    1: `<a href="">Результат виконання лабораторної роботи №1</a>`,
    2: `<a class="text-blue-400" href="pages/lab2/lab2_1.html" target="_blank">Завдання 1 (варіант 4)</a><br>
        <a class="text-blue-400 "href="pages/lab2/lab2_2.html" target="_blank">Завдання 2 (варіант 4)</a>`,

  };
  return resultLinks[currentLabNumber] || 
  `<a class="text-blue-400" href="Pages/Lab${currentLabNumber}/Lab${currentLabNumber}.html" target="_blank">
  Результат виконання лабораторної роботи №${currentLabNumber}</a>`;
}

async function loadCodeFiles() {
    const filesToLoad = [`js/script_${currentLabNumber}.js`];
  
    try {
      const codeContents = await Promise.all(filesToLoad.map(file =>
        fetch(file)
          .then(res => res.text())
          .catch(err => {
            console.error(`Помилка завантаження файлу ${file}:`, err);
            return '';
          })
      ));
  
      const codeHtml = codeContents.map(code => {
        return `<pre><code>${escapeHtml(code)}</code></pre>`;
    }).join('');
  
      return codeHtml;
  
    } catch (error) {
      console.error("Помилка при завантаженні файлів:", error);
      return '';
    }
  }

function escapeHtml(str) {
    return str.replace(/[&<>"'`=/]/g, (match) => {
        const escape = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '`': '&#x60;',
            '=': '&#x3d;',
            '/': '&#x2f;'
        };
        return escape[match] || match;
});
}