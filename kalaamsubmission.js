document.getElementById('kalamForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Create FormData object from the form
    const form = event.target;
    const formData = new FormData(form);

    // Convert FormData to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    try {
        const response = await fetch('http://localhost:5000/api/kalam', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error response:', errorData);
            alert('کلام جمع نہ ہو سکا، دوبارہ کوشش کریں');
            return;
        }

        const result = await response.json();
        alert('کلام کامیابی سے جمع ہو گیا!');
        form.reset(); // Clear the form
    } catch (error) {
        console.error('Error:', error);
        alert('سرور سے رابطہ نہیں ہو سکا');
    }
});