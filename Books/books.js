function slugify(text) {
    return text
        .toString()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\p{L}\p{N}\-]/gu, '') // Remove everything except letters, numbers, hyphens
        .replace(/\-+/g, '-') // Replace multiple hyphens with single hyphen
        .toLowerCase(); // Optional: Lowercase English letters only
} 
 
 
 document.addEventListener('DOMContentLoaded', function() {
        // Set current year in footer
        const currentYearEl = document.getElementById('currentYear');
        if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

        // DOM elements
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.querySelector('.search-button');
        const categoryFilter = document.getElementById('categoryFilter');
        const bookGrid = document.getElementById('bookGrid');
        const noResultsMessage = document.getElementById('noResultsMessage');
        const thumbnailViewBtn = document.getElementById('thumbnailViewBtn');
        const listViewBtn = document.getElementById('listViewBtn');

        let booksData = [];

        function categoryFromName(name) {
            if (!name) return "نامعلوم";
            if (name.includes("نعت")) return "نعتیہ شاعری";
            if (name.includes("سیرت")) return "سیرت";
            if (name.includes("کلیات")) return "کلیات";
            if (name.includes("تصوف")) return "تصوف";
            return name;
        }

        function makeBookSlug(book) {
            if (!book.BookID || !book.Title) return "#";
            return `${book.BookID}-${encodeURIComponent(book.Title.replace(/\s+/g, "-"))}`;
        }

        function renderBooks(books) {
            bookGrid.innerHTML = "";
            if (!books || !Array.isArray(books) || books.length === 0) {
                noResultsMessage.classList.remove('hidden');
                return;
            }
            noResultsMessage.classList.add('hidden');

            books.forEach(book => {
                // Defensive checks to avoid "نامعلوم کتاب" bug if book is empty object
                if (!book || (!book.Title && !book.BookID)) return;
                const title = book.Title || "نامعلوم کتاب";
                const author = book.AuthorName || "نامعلوم مصنف";
                const desc = book.Description || "کوئی تفصیل دستیاب نہیں۔";
                const category = categoryFromName(book.CategoryName);
                const categoryDataAttr = category ? `data-category="${category}"` : '';
                const year = book.PublicationYear || "";
                const slug = makeBookSlug(book);
                const views = (book.views || Math.floor(Math.random()*2000)+500).toLocaleString('ur-PK');
                const imageUrl = book.CoverImageURL 
                    ? (book.CoverImageURL.startsWith('http') 
                        ? book.CoverImageURL 
                        : `/uploads/${book.CoverImageURL}`)
                    : 'https://placehold.co/400x600/8e44ad/ffffff?text=' + encodeURIComponent(title);

                bookGrid.innerHTML += `
                    <article class="card p-4 book-item flex flex-col" ${categoryDataAttr}>
                        <a href="./Bookwriter.html?id=${book.BookID}&bookname=${slugify(book.Title)}" class="book-card-image-link">
                            <img src="${imageUrl}" alt="${title}" 
                                class="book-card-image mb-4 shadow-md"
                                onerror="this.onerror=null;this.src='https://placehold.co/400x600/8e44ad/ffffff?text=${encodeURIComponent(title)}';">
                        </a>
                        <div class="flex flex-col flex-grow">
                            <h5 class="book-title urdu-text urdu-text-md font-semibold text-gray-800 mb-1 text-right">${title}</h5>
                            <p class="book-author urdu-text urdu-text-sm text-gray-600 mb-2 text-right">${author}</p>
                            <p class="urdu-text urdu-text-xxs text-gray-500 mb-3 text-right line-clamp-2">${desc}</p>
                            <div class="stats-bar mt-auto flex items-center gap-2">
                                <span class="flex items-center urdu-text urdu-text-xs text-gray-500" title="کتابی صنف">
                                    <i class="bi bi-tag"></i> ${category}
                                </span>
                                ${year ? `<span class="flex items-center urdu-text urdu-text-xs text-gray-500" title="سال اشاعت"><i class="bi bi-calendar"></i> ${year}</span>` : ""}
                                <span class="flex items-center urdu-text urdu-text-xs text-gray-500" title="دیکھے گئے">
                                    <i class="bi bi-eye-fill"></i> ${views}
                                </span>
                                <a href="/books/${slug}" class="read-button urdu-text urdu-text-xs ml-auto">پڑھیں</a>
                            </div>
                        </div>
                    </article>
                `;
            });
        }

        // Fetch all books or search results
        async function fetchBooks({searchTerm = '', category = 'all'} = {}) {
            let url;
            if (searchTerm) {
                url = `https://updated-naatacademy.onrender.com/api/books/search?term=${encodeURIComponent(searchTerm)}`;
            } else {
                url = `https://updated-naatacademy.onrender.com/api/books`;
            }
            try {
                const res = await fetch(url);
                let json = await res.json();

                let result = [];
                // Accept only arrays, bail on everything else
                if (Array.isArray(json)) {
                    result = json;
                } else if (json && Array.isArray(json.data)) {
                    result = json.data;
                } else if (json && typeof json === "object" && json.BookID) {
                    // Only treat as book object if it has BookID AND Title
                    if(json.Title) result = [json];
                } else {
                    result = [];
                }

                // Filter for category if not 'all'
                if (category && category !== 'all') {
                    result = result.filter(book => 
                        categoryFromName(book.CategoryName).toLowerCase() === category.toLowerCase()
                    );
                }
                booksData = result;
                renderBooks(booksData);
            } catch (err) {
                bookGrid.innerHTML = '<div class="text-red-500 urdu-text urdu-text-lg p-10 text-center">کتب حاصل کرنے میں مسئلہ ہے۔ براہ کرم دوبارہ کوشش کریں۔</div>';
            }
        }

        // On page load, fetch all books
        fetchBooks();

        // Event Handlers
        function handleSearch() {
            const searchTerm = searchInput.value.trim();
            const selectedCategory = categoryFilter.value;
            fetchBooks({searchTerm, category: selectedCategory});
        }

        function handleCategory() {
            handleSearch();
        }

        if (searchInput) {
            searchInput.addEventListener('keyup', function(e){
                if (e.key === "Enter" || !searchInput.value) handleSearch();
            });
        }
        if (searchButton) searchButton.addEventListener('click', handleSearch);
        if (categoryFilter) categoryFilter.addEventListener('change', handleCategory);

        // View toggle
        if (thumbnailViewBtn && listViewBtn) {
            thumbnailViewBtn.addEventListener('click', () => {
                bookGrid.classList.remove('list-view');
                thumbnailViewBtn.classList.add('active');
                listViewBtn.classList.remove('active');
            });
            listViewBtn.addEventListener('click', () => {
                bookGrid.classList.add('list-view');
                listViewBtn.classList.add('active');
                thumbnailViewBtn.classList.remove('active');
            });
        }
    });


// document.addEventListener('DOMContentLoaded', function() {
//     // Set current year in footer
//     const currentYearEl = document.getElementById('currentYear');
//     if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

//     // DOM elements
//     const searchInput = document.getElementById('searchInput');
//     const searchButton = document.querySelector('.search-button');
//     const categoryFilter = document.getElementById('categoryFilter');
//     const bookGrid = document.getElementById('bookGrid');
//     const noResultsMessage = document.getElementById('noResultsMessage');
//     const thumbnailViewBtn = document.getElementById('thumbnailViewBtn');
//     const listViewBtn = document.getElementById('listViewBtn');

//     let booksData = [];

//     function categoryFromName(name) {
//         if (!name) return "نامعلوم";
//         if (name.includes("نعت")) return "نعت";
//         if (name.includes("سیرت")) return "سیرت";
//         if (name.includes("کلیات")) return "کلیات";
//         if (name.includes("تصوف")) return "تصوف";
//         return name;
//     }

//     function makeBookSlug(book) {
//         if (!book.BookID || !book.Title) return "#";
//         return `${book.BookID}-${encodeURIComponent(book.Title.replace(/\s+/g, "-"))}`;
//     }

//     function renderBooks(books) {
//         bookGrid.innerHTML = "";
//         if (!books || books.length === 0) {
//             noResultsMessage.classList.remove('hidden');
//             return;
//         }
//         noResultsMessage.classList.add('hidden');

//         books.forEach(book => {
//             const title = book.Title || "نامعلوم کتاب";
//             const author = book.AuthorName || "نامعلوم مصنف";
//             const desc = book.Description || "کوئی تفصیل دستیاب نہیں۔";
//             const category = categoryFromName(book.CategoryName);
//             const categoryDataAttr = category ? `data-category="${category}"` : '';
//             const year = book.PublicationYear || "";
//             const slug = makeBookSlug(book);
//             const views = (book.views || Math.floor(Math.random()*2000)+500).toLocaleString('ur-PK');

//             const imageUrl = book.CoverImageURL 
//                 ? (book.CoverImageURL.startsWith('http') 
//                     ? book.CoverImageURL 
//                     : `/uploads/${book.CoverImageURL}`)
//                 : 'https://placehold.co/400x600/8e44ad/ffffff?text=' + encodeURIComponent(title);

//             bookGrid.innerHTML += `
//                 <article class="card p-4 book-item flex flex-col"
//                     ${categoryDataAttr}>
//                     <a href="/books/${slug}" class="book-card-image-link">
//                         <img src="${imageUrl}" alt="${title}" 
//                             class="book-card-image mb-4 shadow-md"
//                             onerror="this.onerror=null;this.src='https://placehold.co/400x600/8e44ad/ffffff?text=${encodeURIComponent(title)}';">
//                     </a>
//                     <div class="flex flex-col flex-grow">
//                         <h5 class="book-title urdu-text urdu-text-md font-semibold text-gray-800 mb-1 text-right">
//                             ${title}
//                         </h5>
//                         <p class="book-author urdu-text urdu-text-sm text-gray-600 mb-2 text-right">
//                             ${author}
//                         </p>
//                         <p class="urdu-text urdu-text-xxs text-gray-500 mb-3 text-right line-clamp-2">
//                             ${desc}
//                         </p>
//                         <div class="stats-bar mt-auto flex items-center gap-2">
//                             <span class="flex items-center urdu-text urdu-text-xs text-gray-500" title="کتابی صنف">
//                                 <i class="bi bi-tag"></i> ${category}
//                             </span>
//                             ${year ? `<span class="flex items-center urdu-text urdu-text-xs text-gray-500" title="سال اشاعت"><i class="bi bi-calendar"></i> ${year}</span>` : ""}
//                             <span class="flex items-center urdu-text urdu-text-xs text-gray-500" title="دیکھے گئے">
//                                 <i class="bi bi-eye-fill"></i> ${views}
//                             </span>
//                             <a href="/books/${slug}" class="read-button urdu-text urdu-text-xs ml-auto">پڑھیں</a>
//                         </div>
//                     </div>
//                 </article>
//             `;
//         });
//     }

//     // Fetch all books or search results
//     function fetchBooks({searchTerm = '', category = 'all'} = {}) {
//         let url;
//         if (searchTerm) {
//             url = `https://updated-naatacademy.onrender.com/api/books/search?term=${encodeURIComponent(searchTerm)}`;
//         } else {
//             url = `https://updated-naatacademy.onrender.com/api/books`;
//         }
//         fetch(url)
//             .then(res => res.json())
//             .then(json => {
//                 // Accept either array, {data: []}, or single object
//                 let result;
//                 if (Array.isArray(json)) {
//                     result = json;
//                 } else if (json && json.data && Array.isArray(json.data)) {
//                     result = json.data;
//                 } else if (json && typeof json === "object") {
//                     result = [json];
//                 } else {
//                     result = [];
//                 }

//                 // Filter for category if not 'all'
//                 if (category && category !== 'all') {
//                     result = result.filter(book => 
//                         categoryFromName(book.CategoryName).toLowerCase() === category.toLowerCase()
//                     );
//                 }
//                 booksData = result;
//                 renderBooks(booksData);
//             })
//             .catch(err => {
//                 bookGrid.innerHTML = '<div class="text-red-500 urdu-text urdu-text-lg p-10 text-center">کتب حاصل کرنے میں مسئلہ ہے۔ براہ کرم دوبارہ کوشش کریں۔</div>';
//             });
//     }

//     // On page load, fetch all books
//     fetchBooks();

//     // Event Handlers
//     function handleSearch() {
//         const searchTerm = searchInput.value.trim();
//         const selectedCategory = categoryFilter.value;
//         fetchBooks({searchTerm, category: selectedCategory});
//     }

//     function handleCategory() {
//         handleSearch();
//     }

//     // Live search as you type
//     if (searchInput) searchInput.addEventListener('keyup', function(e){
//         // Only fetch on Enter or when input is empty
//         if (e.key === "Enter" || !searchInput.value) handleSearch();
//     });

//     // Search on search button click
//     if (searchButton) searchButton.addEventListener('click', handleSearch);

//     // Search when category changes
//     if (categoryFilter) categoryFilter.addEventListener('change', handleCategory);

//     // View Toggle
//     if (thumbnailViewBtn && listViewBtn) {
//         thumbnailViewBtn.addEventListener('click', () => {
//             bookGrid.classList.remove('list-view');
//             thumbnailViewBtn.classList.add('active');
//             listViewBtn.classList.remove('active');
//         });
//         listViewBtn.addEventListener('click', () => {
//             bookGrid.classList.add('list-view');
//             listViewBtn.classList.add('active');
//             thumbnailViewBtn.classList.remove('active');
//         });
//     }
// });
