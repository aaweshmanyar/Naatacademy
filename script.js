function slugify(text) {
    return text
        .toString()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\p{L}\p{N}\-]/gu, '') // Remove everything except letters, numbers, hyphens
        .replace(/\-+/g, '-') // Replace multiple hyphens with single hyphen
        .toLowerCase(); // Optional: Lowercase English letters only
}


// async function loadAndMergeCategoriesWithCount() {
//   const container = document.querySelector('.header-category-buttons-wrap');
//   if (!container) return;

//   // Map static categories by name for lookup
//   const staticCategories = Array.from(container.querySelectorAll('a[data-category]'));
//   const staticMap = {};
//   staticCategories.forEach(a => {
//     const name = a.dataset.category.trim();
//     staticMap[name] = a;
//   });

//   try {
//     const response = await fetch('https://updated-naatacademy.onrender.com/api/categories');
//     if (!response.ok) throw new Error('Failed to fetch categories');

//     const data = await response.json();
//     // Adjust if data structure varies
//     const categories = Array.isArray(data) ? data : (data.categories || []);

//     const updatedNames = new Set();

//     categories.forEach(cat => {
//       const name = cat.Name.trim();
//       const slug = cat.Slug || name.toLowerCase().replace(/\s+/g, '-');
//       const bgColor = cat.Color || '';
//       const postCount = 100; // Change according to API field or set default 0

//       if (staticMap[name]) {
//         // Existing static category — update bg color, class, text, and add post count
//         const a = staticMap[name];

//         a.style.backgroundColor = bgColor;
//         a.className = `category-tag urdu-text-xs category-${slug} header-category-tag`;

//         // Update name span
//         let spanName = a.querySelector('.category-name');
//         if (!spanName) {
//           spanName = document.createElement('span');
//           spanName.className = 'category-name';
//           a.appendChild(spanName);
//         }
//         spanName.textContent = name;

//         // Update or create post count span
//         let spanCount = a.querySelector('.category-post-count');
//         if (!spanCount) {
//           spanCount = document.createElement('span');
//           spanCount.className = 'category-post-count';
//           a.appendChild(spanCount);
//         }
//         // Show count if > 0, else empty string
//         spanCount.textContent = 100;

//         updatedNames.add(name);
//       } else {
//         // New category from API — create anchor with bg color and count
//         const a = document.createElement('a');
//         a.href = '#';
//         a.dataset.category = name;
//         a.className = `category-tag urdu-text-xs category-${slug} header-category-tag`;
//         a.style.backgroundColor = bgColor;

//         const spanName = document.createElement('span');
//         spanName.className = 'category-name';
//         spanName.textContent = name;
//         a.appendChild(spanName);

//         const spanCount = document.createElement('span');
//         spanCount.className = 'category-post-count';
//         spanCount.textContent = postCount > 0 ? ` (${postCount})` : '';
//         a.appendChild(spanCount);

//         container.appendChild(a);
//       }
//     });

//     // Optional: keeping static categories not in API as-is
//     // (If you want to add post count or other updates to those as well, that info must be available)

//   } catch (error) {
//     console.error('Error loading categories:', error);
//   }
// }

// // Call this on page load or DOM ready
// loadAndMergeCategoriesWithCount();





//Display kalaam properly 

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.kalam-tab-button');
  const tabContents = document.querySelectorAll('.kalam-tab-content');

  // Mapping from button data-tab or button text to API category name - adjust if needed
  // Assuming button's data-tab is like "kalam-naat", "kalam-kalam" etc.
  // And API expects category names in Urdu like "نعت", "کلام", etc.
  const categoryMap = {
    'kalam-naat': 'naat',
    'kalam-kalam': 'kalaam',
    'kalam-manqabat': 'mankabat',
    'kalam-tazmeen': 'tazmeen',
    'kalam-intikhab': 'intikhab'  // example if your API supports it; else remove or add mapping
  };

  // Function to clear and hide all tab contents
  function clearTabs() {
    tabContents.forEach(tc => {
      tc.classList.add('hidden');
    });
    buttons.forEach(btn => {
      btn.classList.remove('active-tab');
    });
  }

  // Function to load Kalaam for a given category and container
  function loadKalaam(categoryUrdu, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Show loading or clear previous content
    container.innerHTML = '<p class="urdu-text text-center text-gray-500">لوڈ ہو رہا ہے...</p>';

    // Fetch Kalaams from API - update URL to your real API endpoint
    fetch(`https://updated-naatacademy.onrender.com/api/kalaam/category/${encodeURIComponent(categoryUrdu)}?limit=4&offset=5`)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        const kalams = data.data || data;

        // Clear container
        container.innerHTML = '';

        if (!kalams || kalams.length === 0) {
          container.innerHTML = '<p class="urdu-text text-center text-gray-500">کوئی کلام دستیاب نہیں ہے۔</p>';
          return;
        }

        kalams.forEach(kalam => {
          // Create HTML structure same as your sample
          const a = document.createElement('a');
          // a.href = `./Pages/lyrics.html?id=${kalam.KalaamID}`;
          a.href = `./lyrics/lyrics.html?id=${kalam.KalaamID}&slug=${slugify(kalam.Title)}`;
          a.className = 'block';

          const article = document.createElement('article');
          article.className = 'card p-4 h-full kalam-card';

          const pText = document.createElement('p');
          pText.className = 'urdu-text urdu-text-md mb-3 text-center';
          pText.style.lineHeight = '1.8';
          let displayText = kalam.ContentUrdu || kalam.Title || 'نص نہیں ہے';
          const firstTwoLines = displayText.split('\n').slice(0, 2).join('<br>');
          pText.innerHTML = firstTwoLines;

          article.appendChild(pText);

          const divBottom = document.createElement('div');
          divBottom.className = 'mt-auto';

          const divInfo = document.createElement('div');
          divInfo.className = 'pt-2 border-t border-gray-100';

          const pWriter = document.createElement('p');
          pWriter.className = 'urdu-text urdu-text-sm font-semibold text-gray-700';
          pWriter.style.lineHeight = '1.5';
          pWriter.textContent = `شاعر: ${kalam.WriterName || 'نامعلوم'}`;

          const pBook = document.createElement('p');
          pBook.className = 'urdu-text urdu-text-xs text-gray-500';
          pBook.style.lineHeight = '1.5';
          pBook.textContent = `کتاب: ${kalam.Bookname || 'نامعلوم'}`;

          divInfo.appendChild(pWriter);
          divInfo.appendChild(pBook);

          divBottom.appendChild(divInfo);

          // Optional stats-bar, like/view/share as in your design
          // Add if you have those data fields

          article.appendChild(divBottom);
          a.appendChild(article);
          container.appendChild(a);
        });
      })
      .catch(error => {
        console.error('Error fetching kalaams:', error);
        container.innerHTML = '<p class="urdu-text text-center text-red-500">کلام لوڈ کرنے میں مسئلہ ہے۔</p>';
      });
  }

  // Initial load: trigger click on first active tab button or "kalam-naat"
  const initialBtn = document.querySelector('.kalam-tab-button.active-tab') || buttons[0];
  if (initialBtn) initialBtn.click();

  // Attach click listeners to buttons
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      clearTabs();
      button.classList.add('active-tab');

      const tabName = button.getAttribute('data-tab');
      const categoryUrdu = categoryMap[tabName];
      const containerId = tabName; // This should match your tab-content div id like kalam-naat

      if (!categoryUrdu) {
        console.warn('Category mapping missing for tab:', tabName);
        return;
      }

      // Show the corresponding tab content container
      const tabContent = document.getElementById(containerId);
      if (tabContent) {
        tabContent.classList.remove('hidden');
        // Load data dynamically
        loadKalaam(categoryUrdu, containerId);
      }
    });
  });
});




//Books Listing 

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".kutub-tab-button");
  const tabContents = document.querySelectorAll(".kutub-tab-content");

  // Function to fetch books from API
  async function fetchBooks() {
    try {
      const response = await fetch("https://updated-naatacademy.onrender.com/api/books");
      if (!response.ok) throw new Error("Failed to fetch books");

      const books = await response.json();
      return books;
    } catch (error) {
      console.error("Error fetching books:", error);
      return [];
    }
  }

  // Function to generate book cards HTML dynamically from an array of book objects
  //  <a href="./Pages/Bookwriter.html?id=${book.AuthorID}" class="block">
  function generateBookCardsHTML(books) {
    return books
      .map(
        (book) => `
      <a href="../Books/Bookwriter.html?id=${book.AuthorID}&bookname=${slugify(book.Title)}" class="block">
        <article class="card p-4 h-full book-card">
          <div class="book-cover">
            <i class="bi bi-book-half"></i>
            <!-- If you have CoverImageURL and want to show image instead, uncomment below and comment the icon -->
            <!-- <img src="${book.CoverImageURL}" alt="${book.Title}" class="w-full h-auto" /> -->
          </div>
          <h5 class="urdu-text urdu-text-md font-semibold text-gray-800 text-center" style="line-height: 1.6;">
            ${book.Title}
          </h5>
          <p class="urdu-text urdu-text-xs text-gray-600 text-center" style="line-height: 1.6;">
            ${book.AuthorName}
          </p>
        </article>
      </a>
    `
      )
      .join("");
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      // Remove active class from all buttons, hide all content divs
      tabButtons.forEach((btn) => btn.classList.remove("active-tab"));
      tabContents.forEach((content) => content.classList.add("hidden"));

      // Add active class to clicked button
      button.classList.add("active-tab");

      const selectedTab = button.getAttribute("data-tab");
      const selectedContent = document.getElementById(selectedTab);

      // Show selected content div
      selectedContent.classList.remove("hidden");

      if (selectedTab === "kutub-naatia") {
        // Fetch books from API
        const allBooks = await fetchBooks();

        // Filter books to category "نعت" or CategoryID=1 (adjust according to your API/category logic)
        const naatiaBooks = allBooks.filter(
          (book) =>
            book.CategoryName === "نعت" || book.CategoryID === 1
        );

        // Generate and inject book cards HTML
        selectedContent.innerHTML = generateBookCardsHTML(naatiaBooks.slice(0, 4)); // Limit to 4 books
      } else {
        // Placeholder for other tabs if needed
        selectedContent.innerHTML = `اس ٹیب کے لیے مواد دستیاب نہیں ہے۔`;
      }
    });
  });

  // Trigger click on default active tab to load its content on page load
  const defaultTab = document.querySelector(".kutub-tab-button.active-tab");
  if (defaultTab) defaultTab.click();
});


//Display Writers




//Display Article 
async function fetchAndRenderArticles() {
  const container = document.getElementById('articles-list');
  if (!container) return;

  // Adjust API URL as per your server (example: /api/articles?limit=8)
  const res = await fetch('https://updated-naatacademy.onrender.com/api/articles/paginated?limit=4&offset=0'); 
  if (!res.ok) {
    container.innerHTML = '<div>Failed to load articles.</div>';
    return;
  }

  const json = await res.json();
  const articles = json.data || json; // If your API returns {data: [...]}, otherwise just json

  // Dummy likes and views object (customize as needed)
  const dummyStats = [
    { likes: '1.9k', views: '2.6k' },
    { likes: '2.1k', views: '2.9k' },
    { likes: '2.8k', views: '3.1k' },
    { likes: '1.5k', views: '1.8k' }
  ];

  // Helper: escape for rendering, fallback for null/undefined
  function safe(val) { return val ? val : ''; }
  
  // Loop over and build cards
  const html = articles.map((article, idx) => {
    // You can convert ContentUrdu from HTML to plain text preview
    function urduPreview(htmlContent) {
      const el = document.createElement("div");
      el.innerHTML = htmlContent || '';
      // Basic: first 120 characters, you can customize
      return (el.innerText || el.textContent || '').replace(/\n/g, ' ').slice(0, 120) + "...";
    }

    // Assign dummy stats safely (loop if more articles than dummy stats)
    const stats = dummyStats[idx % dummyStats.length];
   //  <a href="../Pages/article.html?id=${article.ArticleID}" class="block">

   function slugify(text) {
    return text
        .toString()
        .normalize('NFKD') // Handle Urdu/Arabic normalization
        .replace(/[\u0300-\u036F]/g, '') // Remove diacritics
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-ء-ي]/g, '') // Remove all non-word chars except Arabic/Urdu
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .toLowerCase();
}

// Example Usage:
// const slug = slugify(article.Title);
// URL will look like: /Article/article.html?id=123&slug=akhlaq-nabuwwat

    return `
 
      <a href="../Article/article.html?id=${article.ArticleID}&slug=${slugify(article.Title)}" class="block">
        <article class="card p-4 relative article-card h-full">
          <h4 class="urdu-text urdu-text-md sm:urdu-text-lg font-semibold text-teal-700 mb-2 text-right article-title">
            ${safe(article.Title)}
          </h4>
          <p class="urdu-text urdu-text-xs sm:urdu-text-sm text-gray-700 leading-snug mb-4 text-right article-preview-text">
            ${urduPreview(article.ContentUrdu)}
          </p>
          <div class="mt-auto pt-3 border-t border-gray-100">
            <p class="urdu-text urdu-text-xxs text-gray-500 text-right mb-1" style="line-height: 1.5;">${safe(article.WriterName ? 'از: ' + article.WriterName : '')}</p>
            <div class="flex justify-between items-center">
                <span class="article-category-tag bg-teal-100 text-teal-600 urdu-text urdu-text-xs font-medium">${safe(article.CategoryName)}</span>
                <div class="stats-bar article-stats-bar">
                  <span>
                    <i class="bi bi-heart text-gray-500"></i> <span class="like-count urdu-text-xxs">${stats.likes}</span>
                  </span>
                  <span>
                    <i class="bi bi-eye-fill text-blue-500"></i> <span class="view-count urdu-text-xxs">${stats.views}</span>
                  </span>
                  <button class="share-icon-button"><i class="bi bi-box-arrow-up"></i></button>
                </div>
            </div>
          </div>
        </article>
      </a>
    `;
  }).join('\n');
  
  container.innerHTML = html;
}


// Call this function on page load
fetchAndRenderArticles();




// Groups Name

async function fetchAndRenderTopics() {
  const container = document.getElementById('topics-list');
  if (!container) return;

  // The fixed counts you want next to each group, in order!
  const fixedCounts = [123, 88, 75, 150, 140, 200];

  try {
    const res = await fetch('https://updated-naatacademy.onrender.com/api/groups');
    if (!res.ok) throw new Error('Could not fetch groups');
    const data = await res.json();

    // If API returns an array
    const groups = Array.isArray(data) ? data : (data.data || []); // Adapt if necessary

    // Limit to six groups if you want only six cards, or use all if you like
    const html = groups.slice(0, 6).map((group, i) => `
      <a href="./Collection/Majmua-e-Kalam.html" class="topic-card topic-card-${i+1}">
        <span class="topic-name">${group.GroupName}</span>
        <span class="topic-count">${fixedCounts[i] || 0}</span>
      </a>
    `).join('\n');

    container.innerHTML = html;

  } catch (err) {
    // In case of error, display nothing or fallback
    container.innerHTML = '<div class="col-span-full text-center text-red-500">عنوانات لوڈ نہیں ہو سکے</div>';
    console.error(err);
  }
}

// Call function on page load
fetchAndRenderTopics();


//Writers 

async function fetchAndRenderPoets() {
  const container = document.getElementById('poets-list');
  if (!container) return;

  try {
    const res = await fetch('https://updated-naatacademy.onrender.com/api/writers/limited?limit=4&offset=0');
    if (!res.ok) throw new Error('Failed to load writers');
    const data = await res.json();
    const writers = Array.isArray(data) ? data : (data.data || []);

    const fallbackImg = 'https://res.cloudinary.com/awescreative/image/upload/v1749156252/Awes/writer.svg';

    // Dummy likes and views object (you can customize values)
    const dummyStats = [
      { likes: '2.7k', views: '3.0k' },
      { likes: '3.0k', views: '3.2k' },
      { likes: '1.5k', views: '1.9k' },
      { likes: '2.2k', views: '2.5k' }
    ];

    const html = writers.map((writer, idx) => {
      // Clean, one-line bio
      let bio = writer.Bio || '';
      bio = bio.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
      let oneLineBio = '';
      if (bio.includes('۔')) {
        oneLineBio = bio.split('۔')[0].trim() + '۔';
      } else {
        oneLineBio = bio.length > 60 ? bio.slice(0, 60) + '...' : bio;
      }

      // Wiladat & Wisal
      let lifespan = 'ولادت: ' + (writer.wiladat || '[سال]');
      if (writer.Wisal) lifespan += ` - وفات: ${writer.Wisal}`;

      // Assign dummy stats safely (loop if more writers than stats)
      const stats = dummyStats[idx % dummyStats.length];
      // onclick="window.location.href='./Pages/poet.html?id=${writer.WriterID}'"

    return `
  <article 
    class="card p-5 poet-card transform transition-all hover:scale-105 bg-gray-50 h-full flex flex-col justify-between"
    style="cursor: pointer;"
    onclick="window.location.href='../Poets/poet.html?id=${writer.WriterID}&name=${slugify(writer.Name)}'"
  >
    <div>
      <div class="poet-icon-container poet-icon-gradient-${(idx % 4) + 1} flex justify-center">
        <img src="${writer.ProfileImageURL || fallbackImg}" alt="Poet Icon" class="poet-icon-image mx-auto">
      </div>
      <h5 class="urdu-text urdu-text-base sm:urdu-text-md font-semibold text-gray-800 poet-name mt-4">${writer.Name}</h5>
      <p class="urdu-text urdu-text-xs text-gray-600 mb-1 poet-lifespan">${lifespan}</p>
      <p class="urdu-text urdu-text-xs text-gray-700 leading-snug poet-description line-clamp-2 mb-3">${oneLineBio}</p>
    </div>
    <div>
      <div class="stats-bar poet-stats-bar mb-2">
        <div class="flex items-center justify-center gap-4">
          <span><i class="bi bi-heart text-gray-500"></i> <span class="like-count urdu-text-xxs">${stats.likes}</span></span>
          <span><i class="bi bi-eye-fill text-blue-500"></i> <span class="view-count urdu-text-xxs">${stats.views}</span></span>
        </div>
      </div>
      <button 
        class="share-icon-button"
        style="cursor: pointer;"
        onclick="event.stopPropagation(); window.location.href='./Pages/poet.html?id=${writer.WriterID}'"
        aria-label="Share poet details"
      >
        <i class="bi bi-box-arrow-up"></i>
      </button>
    </div>
  </article>
`;
    }).join('');

    container.innerHTML = html;
  } catch (e) {
    container.innerHTML = `<div class="col-span-full text-center text-red-500">شعراء لوڈ نہیں ہو سکے</div>`;
    console.error(e);
  }
}

// Call the function
fetchAndRenderPoets();



