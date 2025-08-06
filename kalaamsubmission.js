document.getElementById('kalamForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    whatsapp: form.whatsapp.value.trim(),
    city: form.city.value.trim(),
    country: form.country.value.trim(),
    poet_name: form.poet_name.value.trim(),
    poet_book: form.poet_book.value.trim() || null,
    poet_intro: form.poet_intro.value.trim() || null,
    kalam_title: form.kalam_title.value.trim(),
    genre: form.genre.value,
    language: form.language.value,
    kalam_bahr: form.kalam_bahr.value.trim() || null,
    kalam: form.kalam.value.trim()
  };

  try {
    const res = await fetch('https://updated-naatacademy.onrender.com/api/kalamsub', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      const result = await res.json();
      alert('کلام کامیابی کے ساتھ جمع ہو گیا۔ شکریہ!');
      form.reset();
    } else {
      // Try to parse error message from server
      let errorMsg = 'براہ کرم دوبارہ کوشش کریں';
      try {
        const errorData = await res.json();
        errorMsg = errorData.error || errorMsg;
      } catch {
        // fallback if response is not JSON
        errorMsg = await res.text() || errorMsg;
      }
      alert('خرابی ہوئی: ' + errorMsg);
    }
  } catch (error) {
    alert('سرور سے رابطہ میں مسئلہ: ' + error.message);
  }
});



// 
document.getElementById('mazmoonForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const f = e.target;

  const data = {
    name: f.name.value.trim(),
    email: f.email.value.trim(),
    whatsapp: f.whatsapp.value.trim(),
    city: f.city.value.trim(),
    country: f.country.value.trim(),
    mazmoon_title: f.mazmoon_title.value.trim(),
    mazmoon_category: f.mazmoon_category.value,
    mazmoon_content: f.mazmoon_content.value.trim()
  };

  try {
    const res = await fetch('https://updated-naatacademy.onrender.com/api/mazmoon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      const result = await res.json();
      alert(result.message);
      f.reset();
    } else {
      let errorMsg = 'براہ کرم دوبارہ کوشش کریں';
      try {
        const errData = await res.json();
        errorMsg = errData.error || errorMsg;
      } catch {
        errorMsg = await res.text() || errorMsg;
      }
      alert('خرابی ہوئی: ' + errorMsg);
    }
  } catch (error) {
    alert('سرور سے رابطہ میں مسئلہ: ' + error.message);
  }
});






// Kalaam and Mazmoon Listing 

async function fetchStats() {
    try {
        // Fetch Kalam Stats
        const kalamCountRes = await fetch('https://updated-naatacademy.onrender.com/api/kalamsub/count');
        const kalamCountData = await kalamCountRes.json();

        const kalamRecentRes = await fetch('https://updated-naatacademy.onrender.com/api/kalamsub/limit?count=5');
        const kalamRecentData = await kalamRecentRes.json();

        // Update Kalam Stats in HTML
        document.querySelector('#kalam-stats .total-count').innerText = kalamCountData.total.toLocaleString();
        const recentKalamList = document.getElementById('recentKalam');
        recentKalamList.innerHTML = ''; // Clear existing list
        kalamRecentData.forEach(sub => {
            const li = document.createElement('li');
            li.className = 'flex items-center space-x-2';
            const iconClass = 'bi-music-note'; // You can customize this icon if needed
            li.innerHTML = `
                <i class="bi ${iconClass} text-teal-500 ml-3"></i>
                <span class="font-semibold text-slate-700">${sub.poet_name}</span>
                <span class="text-slate-500 mx-2">-</span>
                <span class="text-slate-600 truncate">${sub.kalam_title}</span>
                <span class="text-slate-400 mr-auto text-xs">(${sub.city})</span>
            `;
            recentKalamList.appendChild(li);
        });

        // Fetch Mazmoon Stats
        const mazmoonCountRes = await fetch('https://updated-naatacademy.onrender.com/api/mazmoonsub/count');
        const mazmoonCountData = await mazmoonCountRes.json();

        const mazmoonRecentRes = await fetch('https://updated-naatacademy.onrender.com/api/mazmoonsub/limit?count=5');
        const mazmoonRecentData = await mazmoonRecentRes.json();

        // Update Mazmoon Stats in HTML
        document.querySelector('#mazmoon-stats .total-count').innerText = mazmoonCountData.total.toLocaleString();
        const recentMazmoonList = document.getElementById('recentMazmoon');
        recentMazmoonList.innerHTML = ''; // Clear existing list
        mazmoonRecentData.forEach(sub => {
            const li = document.createElement('li');
            li.className = 'flex items-center space-x-2';
            const iconClass = 'bi-file-text'; // You can customize this icon if needed
            li.innerHTML = `
                <i class="bi ${iconClass} text-teal-500 ml-3"></i>
                <span class="font-semibold text-slate-700">${sub.name}</span>
                <span class="text-slate-500 mx-2">-</span>
                <span class="text-slate-600 truncate">${sub.mazmoon_title}</span>
                <span class="text-slate-400 mr-auto text-xs">(${sub.city})</span>
            `;
            recentMazmoonList.appendChild(li);
        });

    } catch (error) {
        console.error('Failed to fetch stats:', error);
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', fetchStats);

