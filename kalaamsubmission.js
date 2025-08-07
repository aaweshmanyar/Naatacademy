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
    const res = await fetch('http://localhost:5000/api/kalamsub', {
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
    const res = await fetch('http://localhost:5000/api/mazmoon', {
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
