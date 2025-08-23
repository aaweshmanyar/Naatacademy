// document.addEventListener('DOMContentLoaded', () => {

//     // --- Data Source ---
//     const allKalam = [
//         { id: 1, topicId: 1, lines: "لم یات نظیرک فی نظر مثل تو نہ شد پیدا جانا<br>جگ راج کو تاج تورے سر سو ہے تجھ کو شہ دوسرا جانا", roman_lines: "Lam Yaati Naziruka Fi Nazarin", poet: "امام احمد رضا خان", book: "حدائق بخشش", category: "نعت", views: 2580 },
//         { id: 2, topicId: 1, lines: "وہی رب ہے جس نے تجھ کو ہمہ تن کرم بنایا<br>ہمیں بھیک مانگنے کو ترا آستاں بتایا", poet: "امام احمد رضا خان", book: "حدائق بخشش", category: "نعت", views: 3250 },
//         { id: 3, topicId: 1, lines: "کوئی سلیقہ ہے آرزو کا، نہ بندگی میری بندگی ہے<br>یہ سب تمہارا کرم ہے آقا کہ بات اب تک بنی ہوئی ہے", poet: "مظفر وارثی", book: "باب حرم", category: "نعت", views: 4130 },
//         { id: 4, topicId: 1, lines: "کعبے کے در کے سامنے مانگی ہے یہ دعا فقط<br>ہاتھوں میں حشر تک رہے دامنِ مصطفیٰ فقط", poet: "ادیب رائے پوری", book: "انتخاب", category: "نعت", views: 2980 },
//         { id: 5, topicId: 1, lines: "زہے عز و جلالِ مصطفائی<br>کہ ہے ظلِّ خدا ظلِّ خدائی", poet: "علامہ صائم چشتی", book: "نغماتِ صائم", category: "نعت", views: 1800 },
//         { id: 6, topicId: 1, lines: "یا نبی سلام علیک، یا رسول سلام علیک<br>یا حبیب سلام علیک، صلوات اللہ علیک", roman_lines: "Ya Nabi Salam Alaika", poet: "مشہور سلام", book: "مختلف", category: "سلام", views: 5500 },
//         { id: 7, topicId: 1, lines: "شاہِ مدینہ، یثرب کے والی<br>سارے نبی تیرے در کے سوالی", poet: "صبیح رحمانی", book: "کلیات", category: "نعت", views: 4800 },
//         { id: 8, topicId: 3, lines: "علی کے ساتھ ہے زہرا کی شادی<br>لٹاؤ، دیکھو، گھر زہرا کا بستا ہے", poet: "میر انیس", book: "مراثی", category: "منقبت", views: 2200 },
//         { id: 9, topicId: 1, lines: "تو شاہِ خوباں، تو جانِ جاناں<br>ہے چہرہ ام الکتاب تیرا", poet: "پیر نصیر الدین نصیر", book: "رنگِ نظام", category: "نعت", views: 3900 },
//         { id: 10, topicId: 1, lines: "کرم کے بادل برس رہے ہیں، دلوں کی کھیتی ہری بھری ہے<br>یہ کون آیا کہ جس کی آمد، بہار بن کر سنور گئی ہے", poet: "الیاس قادری", book: "وسائل بخشش", category: "نعت", views: 3100 },
//         { id: 11, topicId: 4, lines: "حق لا الہ الا اللہ، میرے غوث کا فرمان ہے<br>بغداد والے حضرت کی، ہم پر بڑی نظر ہے", poet: "نامعلوم", book: "منقبت", category: "منقبت", views: 4500 },
//         { id: 12, topicId: 2, lines: "اے صبا مصطفیٰ سے کہہ دینا، غم کے مارے سلام کہتے ہیں<br>یاد کرتے ہیں تم کو شام و سحر، دل ہمارے سلام کہتے ہیں", poet: "خالد محمود نقشبندی", book: "ارمغانِ خالد", category: "سلام", views: 4950 },
//         { id: 13, topicId: 5, lines: "ابوبکر سے ہے دین کی شان<br>وہ ہیں صدیق، ایمان کی پہچان", poet: "نامعلوم", book: "فضائل", category: "منقبت", views: 2800 },
//         { id: 14, topicId: 6, lines: "نورِ چشمِ رسول، فاطمہ بتول<br>آپ کی عظمتوں کو سلام", poet: "صبیح رحمانی", book: "کلیات", category: "منقبت", views: 3500 },
//         { id: 15, topicId: 3, lines: "حسین تم نہیں رہے، تمہارا گھر نہیں رہا<br>مگر تمہارے بعد ظالموں کا ڈر نہیں رہا", poet: "حفیظ جالندھری", book: "شاہنامہ اسلام", category: "منقبت", views: 4200 },
//         { id: 16, topicId: 1, lines: "بلغ العلی بکمالہ، کشف الدجی بجمالہ<br>حسنت جمیع خصالہ، صلو علیہ وآلہ", roman_lines: "Balaghal Ula Bi Kamalihi", poet: "شیخ سعدی", book: "گلستان", category: "نعت", views: 6000 }
//     ];
//     const allTopics = [
//         {id: 1, name: "میلاد النبی ﷺ"}, {id: 2, name: "معراج النبی ﷺ"}, {id: 3, name: "واقعہ کربلا"},
//         {id: 4, name: "شانِ اولیاء"}, {id: 5, name: "شانِ صحابہ"}, {id: 6, name: "شانِ اہل بیت"}
//     ];
//     const topicColors = {
//         1: 'topic-badge-1', 2: 'topic-badge-2', 3: 'topic-badge-3',
//         4: 'topic-badge-4', 5: 'topic-badge-5', 6: 'topic-badge-6'
//     };

//     // --- State Variables ---
//     let currentSort = 'views';
//     let currentAlphaFilter = 'all';
//     let currentPoetFilter = 'all';
//     let currentCategoryFilter = 'all';
//     let currentTopicFilter = 'all';
//     let currentFilteredKalam = [];
//     let currentPage = 1;
//     const itemsPerPage = 8;
//     let searchTimeout;

//     // --- DOM Elements ---
//     const container = document.getElementById('kalamListContainer');
//     const searchInput = document.getElementById('searchInput');
//     const noResultsDiv = document.getElementById('noResults');
//     const alphabetNavContainer = document.getElementById('alphabetNavContainer');
//     const topicNavContainer = document.getElementById('topicNavContainer');
//     const alphabetContent = document.getElementById('alphabetContent');
//     const popularContent = document.getElementById('popularContent');
//     const sortAndFilterPanel = document.getElementById('sortAndFilterPanel');
//     const filterTabs = document.getElementById('filterTabs');
//     const mobileToggleFilter = document.getElementById('mobileToggleFilter');
//     const loadMoreBtn = document.getElementById('loadMoreBtn');
//     const loadMoreContainer = document.getElementById('loadMoreContainer');
//     const toast = document.getElementById('toast-notification');

//     // --- Core Functions ---
    
//     function createAlphabetFilter(order = 'asc') {
//         const urduAlphabet = ['ا', 'ب', 'پ', 'ت', 'ٹ', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ڈ', 'ذ', 'ر', 'ڑ', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ہ', 'ی'];
//         if (order === 'desc') urduAlphabet.reverse();
//         let buttonsHTML = `<button class="alphabet-button active" data-letter="all">کل</button>`;
//         urduAlphabet.forEach(letter => {
//             buttonsHTML += `<button class="alphabet-button" data-letter="${letter}">${letter}</button>`;
//         });
//         alphabetNavContainer.innerHTML = buttonsHTML;
//     }

//     function createTopicButtons() {
//         const totalKalamCount = allKalam.length;
//         let buttonsHTML = `<button class="alphabet-button active" data-topic-id="all">تمام عنوانات <span class="font-sans text-xs opacity-75 mr-1">(${totalKalamCount})</span></button>`;
//         allTopics.forEach(topic => {
//             const count = allKalam.filter(kalam => kalam.topicId === topic.id).length;
//             buttonsHTML += `<button class="alphabet-button" data-topic-id="${topic.id}">${topic.name} <span class="font-sans text-xs opacity-75 mr-1">(${count})</span></button>`;
//         });
//         topicNavContainer.innerHTML = buttonsHTML;
//     }

//     function createSearchableDropdown(elementId, items, placeholder, filterKey) {
//         const dropdownContainer = document.getElementById(elementId);
//         dropdownContainer.innerHTML = `
//             <div class="dropdown-toggle w-full bg-gray-100 border-2 border-gray-200 rounded-full text-right px-4 py-2.5 urdu-text urdu-text-sm cursor-pointer flex items-center justify-between">
//                 <span class="selected-value truncate">${placeholder}</span>
//                 <i class="bi bi-chevron-down text-xs transition-transform duration-300"></i>
//             </div>
//             <div class="dropdown-menu hidden absolute w-full mt-1 bg-white rounded-lg shadow-lg z-10 border">
//                 <div class="p-2">
//                     <input type="text" class="search-input w-full p-2 border rounded-md urdu-text urdu-text-xs" placeholder="تلاش کریں...">
//                 </div>
//                 <div class="dropdown-options"></div>
//             </div>
//         `;
        
//         const toggle = dropdownContainer.querySelector('.dropdown-toggle');
//         const menu = dropdownContainer.querySelector('.dropdown-menu');
//         const searchBox = dropdownContainer.querySelector('.search-input');
//         const optionsContainer = dropdownContainer.querySelector('.dropdown-options');
//         const selectedValueSpan = dropdownContainer.querySelector('.selected-value');

//         const populateOptions = (filter = '') => {
//             optionsContainer.innerHTML = '';
//             const filteredItems = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
//             const allOption = document.createElement('div');
//             allOption.className = 'dropdown-item p-2 urdu-text urdu-text-xs cursor-pointer';
//             allOption.textContent = placeholder;
//             allOption.dataset.value = 'all';
//             if ( (filterKey === 'topic' && currentTopicFilter === 'all') || (filterKey === 'category' && currentCategoryFilter === 'all') || (filterKey === 'poet' && currentPoetFilter === 'all') ) {
//                 allOption.classList.add('active');
//             }
//             optionsContainer.appendChild(allOption);
//             filteredItems.forEach(item => {
//                 const option = document.createElement('div');
//                 option.className = 'dropdown-item p-2 urdu-text urdu-text-xs cursor-pointer';
//                 option.textContent = item;
//                 option.dataset.value = item;
//                 if ( (filterKey === 'topic' && currentTopicFilter === item) || (filterKey === 'category' && currentCategoryFilter === item) || (filterKey === 'poet' && currentPoetFilter === item) ) {
//                     option.classList.add('active');
//                 }
//                 optionsContainer.appendChild(option);
//             });
//         };

//         populateOptions();

//         toggle.addEventListener('click', (e) => {
//             e.stopPropagation();
//             const isHidden = menu.classList.contains('hidden');
//             document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.add('hidden'));
//             document.querySelectorAll('.bi-chevron-down').forEach(i => i.classList.remove('rotate-180'));
//             if (isHidden) {
//                 menu.classList.remove('hidden');
//                 toggle.querySelector('i').classList.add('rotate-180');
//                 searchBox.focus();
//             }
//         });

//         searchBox.addEventListener('input', () => populateOptions(searchBox.value));

//         optionsContainer.addEventListener('click', (e) => {
//             if (e.target.classList.contains('dropdown-item')) {
//                 const value = e.target.dataset.value;
//                 selectedValueSpan.textContent = value === 'all' ? placeholder : value;
//                 if (filterKey === 'topic') currentTopicFilter = value;
//                 if (filterKey === 'category') currentCategoryFilter = value;
//                 if (filterKey === 'poet') currentPoetFilter = value;
//                 applyFiltersAndRender();
//             }
//         });
//     }
    
//     function renderKalamList(kalamArray) {
//         if(kalamArray.length === 0 && currentPage === 1) {
//             noResultsDiv.classList.remove('hidden');
//         } else {
//             noResultsDiv.classList.add('hidden');
//         }

//         kalamArray.forEach(kalam => {
//             const categoryColors = { "نعت": "bg-green-100 text-green-800", "سلام": "bg-blue-100 text-blue-800", "منقبت": "bg-amber-100 text-amber-800", "default": "bg-gray-100 text-gray-800" };
//             const colorClass = categoryColors[kalam.category] || categoryColors.default;
//             const borderClass = `border-cat-${kalam.category.replace(/\s+/g, '')}` || 'border-cat-default';
//             const titleText = kalam.lines.replace(/<br>/g, ' ').substring(0, 50);
//             const topic = allTopics.find(t => t.id === kalam.topicId);
//             const topicColorClass = topic ? (topicColors[kalam.topicId] || '') : '';

//             const card = `
//                 <article class="kalam-item-card ${borderClass}">
//                     <div class="card-top-buttons">
//                         ${kalam.roman_lines ? `<button class="roman-link-btn" title="رومن میں دیکھیں">ROMAN</button>` : ''}
//                         <button class="copy-link-btn" data-id="${kalam.id}" data-title="${titleText}" aria-label="کاپی لنک" title="لنک کاپی کریں">
//                             <i class="bi bi-link-45deg"></i>
//                         </button>
//                     </div>
//                     <h2 class="urdu-text text-gray-800 mb-4 flex-grow">${kalam.lines}</h2>
//                     <div class="border-t border-gray-100 pt-3 mt-auto">
//                         <div class="flex items-center justify-between flex-wrap gap-x-4 gap-y-2 text-gray-600">
//                             <div class="flex items-center gap-3 flex-wrap">
//                                 <span class="urdu-text urdu-text-xs font-semibold py-1 px-3 rounded-full ${colorClass}">${kalam.category}</span>
//                                 <p class="urdu-text urdu-text-xs text-gray-500">
//                                     <i class="bi bi-person-fill text-gray-400 ml-1"></i><span class="font-semibold text-gray-700">${kalam.poet}</span> 
//                                     <span class="text-gray-300 mx-1.5">|</span> 
//                                     <i class="bi bi-book-fill text-gray-400 ml-1"></i>${kalam.book}
//                                 </p>
//                                 ${topic ? `<span class="urdu-text urdu-text-xs font-semibold py-1 px-3 rounded-full ${topicColorClass}">${topic.name}</span>` : ''}
//                             </div>
//                             <div class="flex items-center gap-1.5 text-gray-400">
//                                 <i class="bi bi-eye-fill"></i>
//                                 <span class="font-sans text-xs font-bold">${kalam.views.toLocaleString('en-US')}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </article>
//             `;
//             container.insertAdjacentHTML('beforeend', card);
//         });
//     }
    
//     function showSkeletonLoaders(count) {
//         container.innerHTML = '';
//         let skeletons = '';
//         for (let i = 0; i < count; i++) {
//             skeletons += `
//                 <div class="skeleton-card space-y-4">
//                     <div class="skeleton h-5 w-full"></div>
//                     <div class="skeleton h-5 w-3/4"></div>
//                     <div class="border-t border-gray-100 pt-3 mt-auto">
//                         <div class="flex justify-between items-center">
//                             <div class="flex items-center gap-3">
//                                 <div class="skeleton h-6 w-16 rounded-full"></div>
//                                 <div class="skeleton h-4 w-48"></div>
//                             </div>
//                             <div class="skeleton h-4 w-12"></div>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         }
//         container.innerHTML = skeletons;
//     }

//     function displayCurrentPage() {
//         const startIndex = (currentPage - 1) * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;
//         const itemsToDisplay = currentFilteredKalam.slice(startIndex, endIndex);
//         renderKalamList(itemsToDisplay);
//         if (endIndex >= currentFilteredKalam.length) {
//             loadMoreContainer.classList.add('hidden');
//         } else {
//             loadMoreContainer.classList.remove('hidden');
//         }
//     }

//     function applyFiltersAndRender() {
//         let filteredKalam = [...allKalam];
//         if (currentTopicFilter !== 'all') {
//             const topicObj = allTopics.find(t => t.name === currentTopicFilter);
//             if(topicObj) filteredKalam = filteredKalam.filter(k => k.topicId === topicObj.id);
//         }
//         if (currentCategoryFilter !== 'all') filteredKalam = filteredKalam.filter(k => k.category === currentCategoryFilter);
//         if (currentPoetFilter !== 'all') filteredKalam = filteredKalam.filter(k => k.poet === currentPoetFilter);
        
//         const searchQuery = searchInput.value.trim().toLowerCase();
//         if (searchQuery) {
//             filteredKalam = filteredKalam.filter(k => 
//                 k.lines.toLowerCase().includes(searchQuery) ||
//                 k.poet.toLowerCase().includes(searchQuery) ||
//                 k.book.toLowerCase().includes(searchQuery)
//             );
//         }
        
//         if (currentAlphaFilter !== 'all' && currentSort !== 'views') {
//             filteredKalam = filteredKalam.filter(k => 
//                 k.lines.replace(/<br>/g, ' ').trim().startsWith(currentAlphaFilter)
//             );
//         }
        
//         if (document.querySelector('#filterTabs .active').dataset.filter === 'popular' && currentTopicFilter !== 'all' && !isNaN(currentTopicFilter)) {
//              filteredKalam = filteredKalam.filter(k => k.topicId == currentTopicFilter);
//         }

//         if (currentSort === 'alpha_asc') {
//             filteredKalam.sort((a, b) => a.lines.localeCompare(b.lines, 'ur'));
//         } else if (currentSort === 'alpha_desc') {
//             filteredKalam.sort((a, b) => b.lines.localeCompare(a.lines, 'ur'));
//         } else {
//             filteredKalam.sort((a, b) => b.views - a.views);
//         }
        
//         currentFilteredKalam = filteredKalam;
//         currentPage = 1;
//         container.innerHTML = '';
//         displayCurrentPage();
//     }
    
//     // --- Event Listeners ---
//     searchInput.addEventListener('input', () => {
//         clearTimeout(searchTimeout);
//         searchTimeout = setTimeout(() => {
//             applyFiltersAndRender();
//         }, 300);
//     });
    
//     filterTabs.addEventListener('click', (e) => {
//         if (e.target.matches('.filter-tab')) {
//             const filterType = e.target.dataset.filter;
//             document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
//             e.target.classList.add('active');

//             // Hide both content panels by default
//             alphabetContent.classList.add('hidden');
//             popularContent.classList.add('hidden');

//             if (filterType === 'popular') {
//                 popularContent.classList.remove('hidden');
//                 currentSort = 'alpha_asc'; // Default sort for topics is alphabetical
//             } else if (filterType === 'top_kalam') {
//                 currentSort = 'views';
//             } else {
//                 alphabetContent.classList.remove('hidden');
//                 if (filterType === 'tahajji') {
//                     if (currentSort !== 'alpha_asc') createAlphabetFilter('asc');
//                     currentSort = 'alpha_asc';
//                 } else if (filterType === 'radif') {
//                     if (currentSort !== 'alpha_desc') createAlphabetFilter('desc');
//                     currentSort = 'alpha_desc';
//                 }
//             }
//             applyFiltersAndRender();
//         }
//     });
    
//     mobileToggleFilter.addEventListener('click', () => {
//         sortAndFilterPanel.classList.toggle('hidden');
//         mobileToggleFilter.classList.toggle('active');
//     });

//     alphabetNavContainer.addEventListener('click', (e) => {
//         const button = e.target.closest('.alphabet-button');
//         if (button) {
//             currentAlphaFilter = button.dataset.letter;
//             document.querySelectorAll('#alphabetNavContainer .alphabet-button').forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');
//             applyFiltersAndRender();
//         }
//     });

//     topicNavContainer.addEventListener('click', (e) => {
//         const button = e.target.closest('.alphabet-button');
//         if (button) {
//             currentTopicFilter = button.dataset.topicId === 'all' ? 'all' : allTopics.find(t => t.id == button.dataset.topicId).name;
//             document.querySelectorAll('#topicNavContainer .alphabet-button').forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');
//             applyFiltersAndRender();
//         }
//     });

//     loadMoreBtn.addEventListener('click', () => {
//         currentPage++;
//         displayCurrentPage();
//     });
    
//     document.addEventListener('click', (e) => {
//         if (!e.target.closest('.searchable-dropdown')) {
//             document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.add('hidden'));
//             document.querySelectorAll('.bi-chevron-down').forEach(i => i.classList.remove('rotate-180'));
//         }
//     });
    
//     container.addEventListener('click', (e) => {
//         const copyBtn = e.target.closest('.copy-link-btn');
//         if (copyBtn) {
//             const id = copyBtn.dataset.id;
//             const title = copyBtn.dataset.title;
//             const url = `https://www.naatacademy.com/kalam?id=${id}`;
//             const textToCopy = `${title}...\n${url}`;
//             const textarea = document.createElement('textarea');
//             textarea.value = textToCopy;
//             document.body.appendChild(textarea);
//             textarea.select();
//             document.execCommand('copy');
//             document.body.removeChild(textarea);
//             toast.classList.add('show');
//             setTimeout(() => {
//                 toast.classList.remove('show');
//             }, 2000);
//         }
//     });

//     // --- Initial Load ---
//     function initialize() {
//         showSkeletonLoaders(itemsPerPage);
//         setTimeout(() => {
//             createAlphabetFilter('asc');
//             createTopicButtons();
//             createSearchableDropdown('topicFilterDropdown', allTopics.map(t => t.name), 'تمام عنوانات', 'topic');
//             createSearchableDropdown('categoryFilterDropdown', [...new Set(allKalam.map(k => k.category))], 'تمام اصناف', 'category');
//             createSearchableDropdown('poetFilterDropdown', [...new Set(allKalam.map(k => k.poet))], 'تمام شعراء', 'poet');
//             applyFiltersAndRender();
//             document.getElementById('currentYear').textContent = new Date().getFullYear();
//         }, 500);
//     }

//     initialize();
// });





// document.addEventListener("DOMContentLoaded", () => {
//     const apiUrl = "http://localhost:5000/api/kalaam";
//     let allKalam = [];
//     let allTopics = [];
//     let currentSort = "views";
//     let currentAlphaFilter = "all";
//     let currentPoetFilter = "all";
//     let currentCategoryFilter = "all";
//     let currentTopicFilter = "all";
//     let currentFilteredKalam = [];
//     let currentPage = 1;
//     const itemsPerPage = 8;
//     let searchTimeout;
//     const container = document.getElementById("kalamListContainer");
//     const searchInput = document.getElementById("searchInput");
//     const noResultsDiv = document.getElementById("noResults");
//     const alphabetNavContainer = document.getElementById("alphabetNavContainer");
//     const topicNavContainer = document.getElementById("topicNavContainer");
//     const alphabetContent = document.getElementById("alphabetContent");
//     const popularContent = document.getElementById("popularContent");
//     const sortAndFilterPanel = document.getElementById("sortAndFilterPanel");
//     const filterTabs = document.getElementById("filterTabs");
//     const mobileToggleFilter = document.getElementById("mobileToggleFilter");
//     const loadMoreBtn = document.getElementById("loadMoreBtn");
//     const loadMoreContainer = document.getElementById("loadMoreContainer");
//     const toast = document.getElementById("toast-notification");

//     function slugify(text) {
//         return text
//             .toString()
//             .trim()
//             .replace(/\s+/g, '-') // spaces to hyphen
//             .replace(/[^\p{L}\p{N}\-]/gu, '') // only letters, numbers, hyphens
//             .replace(/\-+/g, '-')
//             .toLowerCase();
//     }

//     async function fetchKalaam() {
//         try {
//             const response = await fetch(apiUrl);
//             if (!response.ok) throw new Error("Network response was not ok");
//             const data = await response.json();

//             // Map API data to kalam format
//             allKalam = data.map((item) => {
//                 const linesArray = item.ContentUrdu
//                     ? item.ContentUrdu.split("\n").filter((l) => l.trim() !== "")
//                     : [];
//                 const firstTwoLines = linesArray.slice(0, 2).join("<br>");
//                 return {
//                     id: item.KalaamID,
//                     topicId: item.TopicID || null,
//                     lines: firstTwoLines,
//                     poet: item.WriterName || "نامعلوم",
//                     book: item.Bookname || item.GroupName || "مختلف",
//                     category: item.CategoryName || "مختلف",
//                     views: item.Views || 0,
//                 };
//             });

//             // Extract all topics from api data (if present)
//             allTopics = [];
//             data.forEach(item => {
//                 if (item.TopicID && item.TopicName) {
//                     if (!allTopics.find(t => t.id === item.TopicID)) {
//                         allTopics.push({ id: item.TopicID, name: item.TopicName });
//                     }
//                 }
//             });

//             createAlphabetFilter('asc');
//             createTopicButtons();
//             createSearchableDropdown('topicFilterDropdown', allTopics.map(t => t.name), 'تمام عنوانات', 'topic');
//             createSearchableDropdown('categoryFilterDropdown', [...new Set(allKalam.map(k => k.category))], 'تمام اصناف', 'category');
//             createSearchableDropdown('poetFilterDropdown', [...new Set(allKalam.map(k => k.poet))], 'تمام شعراء', 'poet');
//             applyFiltersAndRender();
//             const yearElement = document.getElementById('currentYear');
//             if (yearElement) yearElement.textContent = new Date().getFullYear();
//         } catch (error) {
//             console.error("Failed to fetch Kalaam:", error);
//             container.innerHTML = `<p class="urdu-text text-center text-red-600 py-10">کلام کی فہرست حاصل کرنے میں مسئلہ پیش آیا۔ دوبارہ کوشش کریں۔</p>`;
//         }
//     }

//     function createAlphabetFilter(order = "asc") {
//         const urduAlphabet = [
//             "ا", "ب", "پ", "ت", "ٹ", "ث", "ج", "چ", "ح", "خ", "د", "ڈ", "ذ", "ر", "ڑ",
//             "ز", "ژ", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ک", "گ", "ل",
//             "م", "ن", "و", "ہ", "ی"
//         ];
//         if (order === "desc") urduAlphabet.reverse();
//         let buttonsHTML = `<button class="alphabet-button active" data-letter="all">کل</button>`;
//         urduAlphabet.forEach((letter) => {
//             buttonsHTML += `<button class="alphabet-button" data-letter="${letter}">${letter}</button>`;
//         });
//         alphabetNavContainer.innerHTML = buttonsHTML;
//     }

//     function createTopicButtons() {
//         const totalKalamCount = allKalam.length;
//         let buttonsHTML = `<button class="alphabet-button active" data-topic-id="all">تمام عنوانات <span class="font-sans text-xs opacity-75 mr-1">(${totalKalamCount})</span></button>`;
//         allTopics.forEach(topic => {
//             const count = allKalam.filter(kalam => kalam.topicId === topic.id).length;
//             buttonsHTML += `<button class="alphabet-button" data-topic-id="${topic.id}">${topic.name} <span class="font-sans text-xs opacity-75 mr-1">(${count})</span></button>`;
//         });
//         topicNavContainer.innerHTML = buttonsHTML;
//     }

//     // Searchable Dropdown Logic
//     function createSearchableDropdown(elementId, items, placeholder, filterKey) {
//         const dropdownContainer = document.getElementById(elementId);
//         dropdownContainer.innerHTML = `
//             <div class="dropdown-toggle w-full bg-gray-100 border-2 border-gray-200 rounded-full text-right px-4 py-2.5 urdu-text urdu-text-sm cursor-pointer flex items-center justify-between">
//                 <span class="selected-value truncate">${placeholder}</span>
//                 <i class="bi bi-chevron-down text-xs transition-transform duration-300"></i>
//             </div>
//             <div class="dropdown-menu hidden absolute w-full mt-1 bg-white rounded-lg shadow-lg z-10 border">
//                 <div class="p-2">
//                     <input type="text" class="search-input w-full p-2 border rounded-md urdu-text urdu-text-xs" placeholder="تلاش کریں...">
//                 </div>
//                 <div class="dropdown-options"></div>
//             </div>
//         `;
//         const toggle = dropdownContainer.querySelector('.dropdown-toggle');
//         const menu = dropdownContainer.querySelector('.dropdown-menu');
//         const searchBox = dropdownContainer.querySelector('.search-input');
//         const optionsContainer = dropdownContainer.querySelector('.dropdown-options');
//         const selectedValueSpan = dropdownContainer.querySelector('.selected-value');
//         const getCurrentFilter = () => {
//             if (filterKey === 'topic') return currentTopicFilter;
//             if (filterKey === 'category') return currentCategoryFilter;
//             if (filterKey === 'poet') return currentPoetFilter;
//             return 'all';
//         };
//         const setCurrentFilter = v => {
//             if (filterKey === 'topic') currentTopicFilter = v;
//             if (filterKey === 'category') currentCategoryFilter = v;
//             if (filterKey === 'poet') currentPoetFilter = v;
//         };
//         const populateOptions = (filter = '') => {
//             optionsContainer.innerHTML = '';
//             let filteredItems = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
//             const allOption = document.createElement('div');
//             allOption.className = 'dropdown-item p-2 urdu-text urdu-text-xs cursor-pointer';
//             allOption.textContent = placeholder;
//             allOption.dataset.value = 'all';
//             if (getCurrentFilter() === 'all') allOption.classList.add('active');
//             optionsContainer.appendChild(allOption);
//             filteredItems.forEach(item => {
//                 const option = document.createElement('div');
//                 option.className = 'dropdown-item p-2 urdu-text urdu-text-xs cursor-pointer';
//                 option.textContent = item;
//                 option.dataset.value = item;
//                 if (getCurrentFilter() === item) option.classList.add('active');
//                 optionsContainer.appendChild(option);
//             });
//         };
//         populateOptions();
//         toggle.addEventListener('click', (e) => {
//             e.stopPropagation();
//             const isHidden = menu.classList.contains('hidden');
//             document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.add('hidden'));
//             document.querySelectorAll('.bi-chevron-down').forEach(i => i.classList.remove('rotate-180'));
//             if (isHidden) {
//                 menu.classList.remove('hidden');
//                 toggle.querySelector('i').classList.add('rotate-180');
//                 searchBox.focus();
//             }
//         });
//         searchBox.addEventListener('input', () => populateOptions(searchBox.value));
//         optionsContainer.addEventListener('click', (e) => {
//             if (e.target.classList.contains('dropdown-item')) {
//                 const value = e.target.dataset.value;
//                 selectedValueSpan.textContent = value === 'all' ? placeholder : value;
//                 setCurrentFilter(value);
//                 applyFiltersAndRender();
//             }
//         });
//     }

//     function renderKalamList(kalamArray) {
//         if (kalamArray.length === 0 && currentPage === 1) {
//             noResultsDiv.classList.remove("hidden");
//         } else {
//             noResultsDiv.classList.add("hidden");
//         }
//         kalamArray.forEach(kalam => {
//             const categoryColors = { "نعت": "bg-green-100 text-green-800", "سلام": "bg-blue-100 text-blue-800", "منقبت": "bg-amber-100 text-amber-800", "default": "bg-gray-100 text-gray-800" };
//             const borderColors = { "نعت": "border-r-green-500", "سلام": "border-r-blue-500", "منقبت": "border-r-amber-500", "default": "border-r-gray-300" };
//             const colorClass = categoryColors[kalam.category] || categoryColors.default;
//             const borderColorClass = borderColors[kalam.category] || borderColors.default;
//             const titleText = kalam.lines.replace(/<br>/g, " ").substring(0, 50);
//             const topic = allTopics.find(t => t.id === kalam.topicId);
//             const card = `
//                 <div class="kalam-item-card ${borderColorClass}" style="cursor: pointer;" data-id="${kalam.id}" data-title="${kalam.lines}">
//                   <p class="urdu-text text-gray-800 mb-2 flex-grow">${kalam.lines}</p>
//                   <div class="border-t border-gray-100 pt-2 mt-auto">
//                     <div class="flex items-center justify-between flex-wrap gap-x-2 gap-y-1 text-gray-600">
//                         <div class="flex items-center gap-2">
//                             <span class="urdu-text urdu-text-xs py-0.5 px-2 rounded-full ${colorClass}">${kalam.category}</span>
//                             <p class="urdu-text urdu-text-xs text-gray-600">
//                                 <i class="bi bi-person-fill text-gray-400 ml-1"></i>
//                                 <span class="font-semibold">${kalam.poet}</span>
//                                 <span class="text-gray-400 mx-1">|</span>
//                                 <i class="bi bi-book-fill text-gray-400 ml-1"></i>${kalam.book}
//                             </p>
//                             ${topic ? `<span class="urdu-text urdu-text-xs font-semibold py-1 px-3 rounded-full">${topic.name}</span>` : ""}
//                         </div>
//                         <div class="flex items-center gap-1 text-gray-400">
//                             <i class="bi bi-eye-fill"></i>
//                             <span class="font-sans text-[10px] font-bold">${kalam.views.toLocaleString("en-US")}</span>
//                         </div>
//                     </div>
//                   </div>
//                 </div>
//             `;
//             container.innerHTML += card;
//         });
//         // Attach click events for redirect
//         container.querySelectorAll('.kalam-item-card').forEach(card => {
//             card.addEventListener('click', () => {
//                 const id = card.dataset.id;
//                 const title = card.dataset.title;
//                 if (id) {
//                     window.location.href = `../lyrics/lyrics.html?id=${encodeURIComponent(id)}&slug=${slugify(title)}`;
//                 }
//             });
//         });
//     }

//     function showSkeletonLoaders(count) {
//         container.innerHTML = '';
//         let skeletons = '';
//         for (let i = 0; i < count; i++) {
//             skeletons += `
//                 <div class="skeleton-card space-y-4">
//                     <div class="skeleton h-5 w-full"></div>
//                     <div class="skeleton h-5 w-3/4"></div>
//                     <div class="border-t border-gray-100 pt-3 mt-auto">
//                         <div class="flex justify-between items-center">
//                             <div class="flex items-center gap-3">
//                                 <div class="skeleton h-6 w-16 rounded-full"></div>
//                                 <div class="skeleton h-4 w-48"></div>
//                             </div>
//                             <div class="skeleton h-4 w-12"></div>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         }
//         container.innerHTML = skeletons;
//     }

//     function displayCurrentPage() {
//         const startIndex = (currentPage - 1) * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;
//         const itemsToDisplay = currentFilteredKalam.slice(startIndex, endIndex);
//         renderKalamList(itemsToDisplay);
//         if (endIndex >= currentFilteredKalam.length) {
//             loadMoreContainer.classList.add("hidden");
//         } else {
//             loadMoreContainer.classList.remove("hidden");
//         }
//     }

//     function applyFiltersAndRender() {
//         let filteredKalam = [...allKalam];
//         // Topic filter (by name)
//         if (currentTopicFilter !== 'all') {
//             const topicObj = allTopics.find(t => t.name === currentTopicFilter);
//             if (topicObj) filteredKalam = filteredKalam.filter(k => k.topicId === topicObj.id);
//         }
//         // Category filter
//         if (currentCategoryFilter !== 'all')
//             filteredKalam = filteredKalam.filter(k => k.category === currentCategoryFilter);
//         // Poet filter
//         if (currentPoetFilter !== 'all')
//             filteredKalam = filteredKalam.filter(k => k.poet === currentPoetFilter);
//         // Search
//         const searchQuery = searchInput.value.trim().toLowerCase();
//         if (searchQuery) {
//             filteredKalam = filteredKalam.filter(k => 
//                 k.lines.toLowerCase().includes(searchQuery) ||
//                 k.poet.toLowerCase().includes(searchQuery) ||
//                 k.book.toLowerCase().includes(searchQuery)
//             );
//         }
//         // Alphabet filter
//         if (currentAlphaFilter !== "all" && currentSort !== "views") {
//             filteredKalam = filteredKalam.filter(k =>
//                 k.lines.replace(/<br>/g, " ").trim().startsWith(currentAlphaFilter)
//             );
//         }
//         if (document.querySelector('#filterTabs .active').dataset.filter === 'popular' && currentTopicFilter !== 'all' && !isNaN(currentTopicFilter)) {
//             filteredKalam = filteredKalam.filter(k => k.topicId == currentTopicFilter);
//         }
//         // Sort
//         if (currentSort === "alpha_asc") {
//             filteredKalam.sort((a, b) => a.lines.localeCompare(b.lines, "ur"));
//         } else if (currentSort === "alpha_desc") {
//             filteredKalam.sort((a, b) => b.lines.localeCompare(a.lines, "ur"));
//         } else {
//             filteredKalam.sort((a, b) => b.views - a.views);
//         }
//         currentFilteredKalam = filteredKalam;
//         currentPage = 1;
//         container.innerHTML = "";
//         displayCurrentPage();
//     }

//     // --- Event Listeners ---
//     searchInput.addEventListener("input", () => {
//         clearTimeout(searchTimeout);
//         searchTimeout = setTimeout(() => {
//             applyFiltersAndRender();
//         }, 300);
//     });

//     filterTabs.addEventListener('click', (e) => {
//         if (e.target.matches('.filter-tab')) {
//             const filterType = e.target.dataset.filter;
//             document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
//             e.target.classList.add('active');
//             alphabetContent.classList.add('hidden');
//             popularContent.classList.add('hidden');
//             if (filterType === 'popular') {
//                 popularContent.classList.remove('hidden');
//                 currentSort = 'alpha_asc';
//             } else if (filterType === 'top_kalam') {
//                 currentSort = 'views';
//             } else {
//                 alphabetContent.classList.remove('hidden');
//                 if (filterType === 'tahajji') {
//                     if (currentSort !== 'alpha_asc') createAlphabetFilter('asc');
//                     currentSort = 'alpha_asc';
//                 } else if (filterType === 'radif') {
//                     if (currentSort !== 'alpha_desc') createAlphabetFilter('desc');
//                     currentSort = 'alpha_desc';
//                 }
//             }
//             applyFiltersAndRender();
//         }
//     });

//     mobileToggleFilter.addEventListener("click", () => {
//         sortAndFilterPanel.classList.toggle("hidden");
//         mobileToggleFilter.classList.toggle("active");
//     });

//     alphabetNavContainer.addEventListener("click", (e) => {
//         const button = e.target.closest('.alphabet-button');
//         if (button) {
//             currentAlphaFilter = button.dataset.letter;
//             document.querySelectorAll('#alphabetNavContainer .alphabet-button').forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');
//             applyFiltersAndRender();
//         }
//     });

//     topicNavContainer.addEventListener("click", (e) => {
//         const button = e.target.closest('.alphabet-button');
//         if (button) {
//             currentTopicFilter = button.dataset.topicId === 'all' ? 'all' : allTopics.find(t => t.id == button.dataset.topicId).name;
//             document.querySelectorAll('#topicNavContainer .alphabet-button').forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');
//             applyFiltersAndRender();
//         }
//     });

//     loadMoreBtn.addEventListener("click", () => {
//         currentPage++;
//         displayCurrentPage();
//     });

//     document.addEventListener('click', (e) => {
//         if (!e.target.closest('.searchable-dropdown')) {
//             document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.add('hidden'));
//             document.querySelectorAll('.bi-chevron-down').forEach(i => i.classList.remove('rotate-180'));
//         }
//     });

//     container.addEventListener('click', (e) => {
//         const copyBtn = e.target.closest('.copy-link-btn');
//         if (copyBtn) {
//             const id = copyBtn.dataset.id;
//             const title = copyBtn.dataset.title;
//             const url = `http://localhost:5000/kalam?id=${id}`;
//             const textToCopy = `${title}...\n${url}`;
//             const textarea = document.createElement('textarea');
//             textarea.value = textToCopy;
//             document.body.appendChild(textarea);
//             textarea.select();
//             document.execCommand('copy');
//             document.body.removeChild(textarea);
//             toast.classList.add('show');
//             setTimeout(() => {
//                 toast.classList.remove('show');
//             }, 2000);
//         }
//     });

//     // --- Initial Load ---
//     function initialize() {
//         showSkeletonLoaders(itemsPerPage);
//         setTimeout(fetchKalaam, 500);
//     }
//     initialize();
// });







document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "http://localhost:5000/api/kalaam"; // Change to your real endpoint if needed

    let allKalam = [];
    let allGroups = [];
    let allTopics = [];
    let currentSort = "views";
    let currentAlphaFilter = "all";
    let currentPoetFilter = "all";
    let currentCategoryFilter = "all";
    let currentTopicFilter = "all";
    let currentGroupFilter = "all"; // ----------- NEW STATE VARIABLE
    let currentFilteredKalam = [];
    let currentPage = 1;
    const itemsPerPage = 8;
    let searchTimeout;

    // --- DOM Elements ---
    const container = document.getElementById("kalamListContainer");
    const searchInput = document.getElementById("searchInput");
    const noResultsDiv = document.getElementById("noResults");
    const alphabetNavContainer = document.getElementById("alphabetNavContainer");
    const topicNavContainer = document.getElementById("topicNavContainer");
    const alphabetContent = document.getElementById("alphabetContent");
    const popularContent = document.getElementById("popularContent");
    const sortAndFilterPanel = document.getElementById("sortAndFilterPanel");
    const filterTabs = document.getElementById("filterTabs");
    const mobileToggleFilter = document.getElementById("mobileToggleFilter");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const loadMoreContainer = document.getElementById("loadMoreContainer");
    const toast = document.getElementById("toast-notification");

    function slugify(text) {
        return text
            .toString()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\p{L}\p{N}\-]/gu, "")
            .replace(/\-+/g, "-")
            .toLowerCase();
    }

    async function fetchKalaam() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();

            allKalam = data.map((item) => {
                const linesArray = item.ContentUrdu
                    ? item.ContentUrdu.split("\n").filter((l) => l.trim() !== "")
                    : [];
                const firstTwoLines = linesArray.slice(0, 2).join("<br>");
                return {
                    id: item.KalaamID,
                    topicId: item.TopicID || null,
                    group: item.GroupName || "نامعلوم",
                    lines: firstTwoLines,
                    poet: item.WriterName || "نامعلوم",
                    book: item.Bookname || item.GroupName || "مختلف",
                    category: item.CategoryName || "مختلف",
                    views: item.Views || 0,
                };
            });

            // Get all unique group names (Unwanat)
            allGroups = [];
            data.forEach(item => {
                if (item.GroupName && !allGroups.includes(item.GroupName)) {
                    allGroups.push(item.GroupName);
                }
            });

            // Extract all topics (optional: if using topics elsewhere)
            allTopics = [];
            data.forEach(item => {
                if (item.TopicID && item.TopicName) {
                    if (!allTopics.find(t => t.id === item.TopicID)) {
                        allTopics.push({ id: item.TopicID, name: item.TopicName });
                    }
                }
            });

            createAlphabetFilter("asc");
            createUnwanButtons(); // --------- NEW
            createSearchableDropdown('topicFilterDropdown', allTopics.map(t => t.name), 'تمام عنوانات', 'topic');
            createSearchableDropdown('categoryFilterDropdown', [...new Set(allKalam.map(k => k.category))], 'تمام اصناف', 'category');
            createSearchableDropdown('poetFilterDropdown', [...new Set(allKalam.map(k => k.poet))], 'تمام شعراء', 'poet');
            applyFiltersAndRender();

            const yearElement = document.getElementById('currentYear');
            if (yearElement) yearElement.textContent = new Date().getFullYear();
        } catch (error) {
            console.error("Failed to fetch Kalaam:", error);
            container.innerHTML = `<p class="urdu-text text-center text-red-600 py-10">کلام کی فہرست حاصل کرنے میں مسئلہ پیش آیا۔ دوبارہ کوشش کریں۔</p>`;
        }
    }

    function createAlphabetFilter(order = "asc") {
        const urduAlphabet = [
            "ا", "ب", "پ", "ت", "ٹ", "ث", "ج", "چ", "ح", "خ", "د", "ڈ", "ذ", "ر", "ڑ",
            "ز", "ژ", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ک", "گ", "ل",
            "م", "ن", "و", "ہ", "ی"
        ];
        if (order === "desc") urduAlphabet.reverse();
        let buttonsHTML = `<button class="alphabet-button active" data-letter="all">کل</button>`;
        urduAlphabet.forEach((letter) => {
            buttonsHTML += `<button class="alphabet-button" data-letter="${letter}">${letter}</button>`;
        });
        alphabetNavContainer.innerHTML = buttonsHTML;
    }

    function createUnwanButtons() {
        // Shown in "popularContent" as "عنوانات"
        const totalKalamCount = allKalam.length;
        let buttonsHTML = `<button class="alphabet-button active" data-group="all">تمام عنوانات <span class="font-sans text-xs opacity-75 mr-1">(${totalKalamCount})</span></button>`;
        allGroups.forEach(group => {
            const count = allKalam.filter(kalam => kalam.group === group).length;
            buttonsHTML += `<button class="alphabet-button" data-group="${encodeURIComponent(group)}">${group} <span class="font-sans text-xs opacity-75 mr-1">(${count})</span></button>`;
        });
        topicNavContainer.innerHTML = buttonsHTML;
    }

    function createSearchableDropdown(elementId, items, placeholder, filterKey) {
        const dropdownContainer = document.getElementById(elementId);
        dropdownContainer.innerHTML = `
            <div class="dropdown-toggle w-full bg-gray-100 border-2 border-gray-200 rounded-full text-right px-4 py-2.5 urdu-text urdu-text-sm cursor-pointer flex items-center justify-between">
                <span class="selected-value truncate">${placeholder}</span>
                <i class="bi bi-chevron-down text-xs transition-transform duration-300"></i>
            </div>
            <div class="dropdown-menu hidden absolute w-full mt-1 bg-white rounded-lg shadow-lg z-10 border">
                <div class="p-2">
                    <input type="text" class="search-input w-full p-2 border rounded-md urdu-text urdu-text-xs" placeholder="تلاش کریں...">
                </div>
                <div class="dropdown-options"></div>
            </div>
        `;
        const toggle = dropdownContainer.querySelector('.dropdown-toggle');
        const menu = dropdownContainer.querySelector('.dropdown-menu');
        const searchBox = dropdownContainer.querySelector('.search-input');
        const optionsContainer = dropdownContainer.querySelector('.dropdown-options');
        const selectedValueSpan = dropdownContainer.querySelector('.selected-value');
        const getCurrentFilter = () => {
            if (filterKey === 'topic') return currentTopicFilter;
            if (filterKey === 'category') return currentCategoryFilter;
            if (filterKey === 'poet') return currentPoetFilter;
            return 'all';
        };
        const setCurrentFilter = v => {
            if (filterKey === 'topic') currentTopicFilter = v;
            if (filterKey === 'category') currentCategoryFilter = v;
            if (filterKey === 'poet') currentPoetFilter = v;
        };
        const populateOptions = (filter = '') => {
            optionsContainer.innerHTML = '';
            let filteredItems = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
            const allOption = document.createElement('div');
            allOption.className = 'dropdown-item p-2 urdu-text urdu-text-xs cursor-pointer';
            allOption.textContent = placeholder;
            allOption.dataset.value = 'all';
            if (getCurrentFilter() === 'all') allOption.classList.add('active');
            optionsContainer.appendChild(allOption);
            filteredItems.forEach(item => {
                const option = document.createElement('div');
                option.className = 'dropdown-item p-2 urdu-text urdu-text-xs cursor-pointer';
                option.textContent = item;
                option.dataset.value = item;
                if (getCurrentFilter() === item) option.classList.add('active');
                optionsContainer.appendChild(option);
            });
        };
        populateOptions();
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = menu.classList.contains('hidden');
            document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.add('hidden'));
            document.querySelectorAll('.bi-chevron-down').forEach(i => i.classList.remove('rotate-180'));
            if (isHidden) {
                menu.classList.remove('hidden');
                toggle.querySelector('i').classList.add('rotate-180');
                searchBox.focus();
            }
        });
        searchBox.addEventListener('input', () => populateOptions(searchBox.value));
        optionsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('dropdown-item')) {
                const value = e.target.dataset.value;
                selectedValueSpan.textContent = value === 'all' ? placeholder : value;
                setCurrentFilter(value);
                applyFiltersAndRender();
            }
        });
    }

    function renderKalamList(kalamArray) {
        if (kalamArray.length === 0 && currentPage === 1) {
            noResultsDiv.classList.remove("hidden");
        } else {
            noResultsDiv.classList.add("hidden");
        }
        container.innerHTML = "";
        kalamArray.forEach(kalam => {
            const categoryColors = { "نعت": "bg-green-100 text-green-800", "سلام": "bg-blue-100 text-blue-800", "منقبت": "bg-amber-100 text-amber-800", "default": "bg-gray-100 text-gray-800" };
            const borderColors = { "نعت": "border-r-green-500", "سلام": "border-r-blue-500", "منقبت": "border-r-amber-500", "default": "border-r-gray-300" };
            const colorClass = categoryColors[kalam.category] || categoryColors.default;
            const borderColorClass = borderColors[kalam.category] || borderColors.default;
            const titleText = kalam.lines.replace(/<br>/g, " ").substring(0, 50);
            const topic = allTopics.find(t => t.id === kalam.topicId);
            const card = `
                <div class="kalam-item-card ${borderColorClass}" style="cursor: pointer;" data-id="${kalam.id}" data-title="${kalam.lines}">
                  <p class="urdu-text text-gray-800 mb-2 flex-grow">${kalam.lines}</p>
                  <div class="border-t border-gray-100 pt-2 mt-auto">
                    <div class="flex items-center justify-between flex-wrap gap-x-2 gap-y-1 text-gray-600">
                        <div class="flex items-center gap-2">
                            <span class="urdu-text urdu-text-xs py-0.5 px-2 rounded-full ${colorClass}">${kalam.category}</span>
                            <p class="urdu-text urdu-text-xs text-gray-600">
                                <i class="bi bi-person-fill text-gray-400 ml-1"></i>
                                <span class="font-semibold">${kalam.poet}</span>
                                <span class="text-gray-400 mx-1">|</span>
                                <i class="bi bi-book-fill text-gray-400 ml-1"></i>${kalam.book}
                            </p>
                            ${topic ? `<span class="urdu-text urdu-text-xs font-semibold py-1 px-3 rounded-full">${topic.name}</span>` : ""}
                            ${kalam.group 
                                ? `<span class="urdu-text urdu-text-xs px-2 rounded-full bg-gray-100 text-gray-700 ml-1">${kalam.group}</span>` 
                                : ""
                            }
                        </div>
                        <div class="flex items-center gap-1 text-gray-400">
                            <i class="bi bi-eye-fill"></i>
                            <span class="font-sans text-[10px] font-bold">${kalam.views.toLocaleString("en-US")}</span>
                        </div>
                    </div>
                  </div>
                </div>
            `;
            container.innerHTML += card;
        });

        // Kalam card click for navigation
        container.querySelectorAll('.kalam-item-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.dataset.id;
                const title = card.dataset.title;
                if (id) {
                    window.location.href = `../lyrics/lyrics.html?id=${encodeURIComponent(id)}&slug=${slugify(title)}`;
                }
            });
        });
    }

    function showSkeletonLoaders(count) {
        container.innerHTML = '';
        let skeletons = '';
        for (let i = 0; i < count; i++) {
            skeletons += `
                <div class="skeleton-card space-y-4">
                    <div class="skeleton h-5 w-full"></div>
                    <div class="skeleton h-5 w-3/4"></div>
                    <div class="border-t border-gray-100 pt-3 mt-auto">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <div class="skeleton h-6 w-16 rounded-full"></div>
                                <div class="skeleton h-4 w-48"></div>
                            </div>
                            <div class="skeleton h-4 w-12"></div>
                        </div>
                    </div>
                </div>
            `;
        }
        container.innerHTML = skeletons;
    }

    function displayCurrentPage() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToDisplay = currentFilteredKalam.slice(startIndex, endIndex);
        renderKalamList(itemsToDisplay);
        if (endIndex >= currentFilteredKalam.length) {
            loadMoreContainer.classList.add("hidden");
        } else {
            loadMoreContainer.classList.remove("hidden");
        }
    }

    function applyFiltersAndRender() {
        let filteredKalam = [...allKalam];

        // Group (Unwan) filter: Only activate when on "popular"/unwanat tab.
        if (document.querySelector('#filterTabs .active').dataset.filter === "popular" && currentGroupFilter !== "all") {
            filteredKalam = filteredKalam.filter(k => k.group === decodeURIComponent(currentGroupFilter));
        }

        // Topic filter (dropdown)
        if (currentTopicFilter !== "all") {
            const topicObj = allTopics.find(t => t.name === currentTopicFilter);
            if (topicObj) filteredKalam = filteredKalam.filter(k => k.topicId === topicObj.id);
        }

        if (currentCategoryFilter !== "all")
            filteredKalam = filteredKalam.filter(k => k.category === currentCategoryFilter);

        if (currentPoetFilter !== "all")
            filteredKalam = filteredKalam.filter(k => k.poet === currentPoetFilter);

        const searchQuery = searchInput.value.trim().toLowerCase();
        if (searchQuery) {
            filteredKalam = filteredKalam.filter(k =>
                k.lines.toLowerCase().includes(searchQuery) ||
                k.poet.toLowerCase().includes(searchQuery) ||
                k.book.toLowerCase().includes(searchQuery)
            );
        }

        if (currentAlphaFilter !== "all" && currentSort !== "views") {
            filteredKalam = filteredKalam.filter(k =>
                k.lines.replace(/<br>/g, " ").trim().startsWith(currentAlphaFilter)
            );
        }

        // Sort
        if (currentSort === "alpha_asc") {
            filteredKalam.sort((a, b) => a.lines.localeCompare(b.lines, "ur"));
        } else if (currentSort === "alpha_desc") {
            filteredKalam.sort((a, b) => b.lines.localeCompare(a.lines, "ur"));
        } else {
            filteredKalam.sort((a, b) => b.views - a.views);
        }

        currentFilteredKalam = filteredKalam;
        currentPage = 1;
        displayCurrentPage();
    }

    // --- Event Listeners ---
    searchInput.addEventListener("input", () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            applyFiltersAndRender();
        }, 300);
    });

    filterTabs.addEventListener('click', (e) => {
        if (e.target.matches('.filter-tab')) {
            const filterType = e.target.dataset.filter;
            document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
            e.target.classList.add('active');
            alphabetContent.classList.add('hidden');
            popularContent.classList.add('hidden');
            if (filterType === 'popular') {
                popularContent.classList.remove('hidden');
                currentSort = 'alpha_asc';
                currentGroupFilter = "all";
            } else if (filterType === 'top_kalam') {
                currentSort = 'views';
            } else {
                alphabetContent.classList.remove('hidden');
                if (filterType === 'tahajji') {
                    if (currentSort !== 'alpha_asc') createAlphabetFilter('asc');
                    currentSort = 'alpha_asc';
                } else if (filterType === 'radif') {
                    if (currentSort !== 'alpha_desc') createAlphabetFilter('desc');
                    currentSort = 'alpha_desc';
                }
            }
            applyFiltersAndRender();
        }
    });

    mobileToggleFilter.addEventListener("click", () => {
        sortAndFilterPanel.classList.toggle("hidden");
        mobileToggleFilter.classList.toggle("active");
    });

    alphabetNavContainer.addEventListener("click", (e) => {
        const button = e.target.closest('.alphabet-button');
        if (button) {
            currentAlphaFilter = button.dataset.letter;
            document.querySelectorAll('#alphabetNavContainer .alphabet-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            applyFiltersAndRender();
        }
    });

    // UNWANAT/GROUP FILTER: Show only kalam for clicked group
    topicNavContainer.addEventListener("click", (e) => {
        const button = e.target.closest('.alphabet-button');
        if (button) {
            // Only runs when you're in "popular" tab
            currentGroupFilter = button.dataset.group;
            document.querySelectorAll('#topicNavContainer .alphabet-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            applyFiltersAndRender();
        }
    });

    loadMoreBtn.addEventListener("click", () => {
        currentPage++;
        displayCurrentPage();
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.searchable-dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.add('hidden'));
            document.querySelectorAll('.bi-chevron-down').forEach(i => i.classList.remove('rotate-180'));
        }
    });

    container.addEventListener('click', (e) => {
        const copyBtn = e.target.closest('.copy-link-btn');
        if (copyBtn) {
            const id = copyBtn.dataset.id;
            const title = copyBtn.dataset.title;
            const url = `http://localhost:5000/kalam?id=${id}`;
            const textToCopy = `${title}...\n${url}`;
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
        }
    });

    function initialize() {
        showSkeletonLoaders(itemsPerPage);
        setTimeout(fetchKalaam, 500);
    }

    initialize();
});
