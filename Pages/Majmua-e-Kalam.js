document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://updated-naatacademy.onrender.com/api/kalaam';

    let allKalam = [];
    let currentSort = 'alpha_asc';
    let currentAlphaFilter = 'all';
    let currentPoetFilter = 'all';
    let currentCategoryFilter = 'all';
    let currentFilteredKalam = [];
    let currentPage = 1;
    const itemsPerPage = 8;

    // --- DOM Elements ---
    const container = document.getElementById('kalamListContainer');
    const searchInput = document.getElementById('searchInput');
    const noResultsDiv = document.getElementById('noResults');
    const alphabetNavContainer = document.getElementById('alphabetNavContainer');
    const alphabetContent = document.getElementById('alphabetContent');
    const sortAndFilterPanel = document.getElementById('sortAndFilterPanel');
    const filterTabs = document.getElementById('filterTabs');
    const poetFilterDropdown = document.getElementById('poetFilterDropdown');
    const categoryFilterDropdown = document.getElementById('categoryFilterDropdown');
    const mobileToggleFilter = document.getElementById('mobileToggleFilter');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadMoreContainer = document.getElementById('loadMoreContainer');

    // Fetch kalam data from API
    async function fetchKalaam() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            
            // Process API response into our kalam format similar to static data
            allKalam = data.map(item => {
                const linesArray = item.ContentUrdu ? item.ContentUrdu.split('\n').filter(l => l.trim() !== '') : [];
                
                // Pick first 2 non-empty lines, join with <br>
                const firstTwoLines = linesArray.slice(0, 2).join('<br>');
                console.log("First two lines here", firstTwoLines)

                return {
                    id: item.KalaamID,
                    lines: firstTwoLines,
                    poet: item.WriterName || "نامعلوم",
                    book: item.Bookname || item.GroupName || "مختلف",
                    category: item.CategoryName || "مختلف",
                    views: item.Views || 0 // if views available in api, else 0
                };
            });

            // After fetching data, initialize filters and render
            createPoetFilter();
            createCategoryFilter();
            createAlphabetFilter('asc');
            applyFiltersAndRender();

        } catch (error) {
            console.error('Failed to fetch Kalaam:', error);
            container.innerHTML = `<p class="urdu-text text-center text-red-600 py-10">کلام کی فہرست حاصل کرنے میں مسئلہ پیش آیا۔ دوبارہ کوشش کریں۔</p>`;
        }
    }

    // --- Core Functions ---

    function createAlphabetFilter(order = 'asc') {
        const urduAlphabet = ['ا', 'ب', 'پ', 'ت', 'ٹ', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ڈ', 'ذ', 'ر', 'ڑ', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ہ', 'ی'];
        if (order === 'desc') {
            urduAlphabet.reverse();
        }
        let buttonsHTML = `<button class="alphabet-button active" data-letter="all">کل</button>`;
        urduAlphabet.forEach(letter => {
            buttonsHTML += `<button class="alphabet-button" data-letter="${letter}">${letter}</button>`;
        });
        alphabetNavContainer.innerHTML = buttonsHTML;
    }

    function createPoetFilter() {
        const poets = [...new Set(allKalam.map(k => k.poet))];
        poets.sort((a, b) => a.localeCompare(b, 'ur'));
        let optionsHTML = `<option value="all">تمام شعراء</option>`;
        poets.forEach(poet => {
            optionsHTML += `<option value="${poet}">${poet}</option>`;
        });
        poetFilterDropdown.innerHTML = optionsHTML;
    }

    function createCategoryFilter() {
        const categories = [...new Set(allKalam.map(k => k.category))];
        categories.sort((a, b) => a.localeCompare(b, 'ur'));
        let optionsHTML = `<option value="all">تمام اصناف</option>`;
        categories.forEach(cat => {
            optionsHTML += `<option value="${cat}">${cat}</option>`;
        });
        categoryFilterDropdown.innerHTML = optionsHTML;
    }

    function renderKalamList(kalamArray) {
        if(kalamArray.length === 0 && currentPage === 1) {
            noResultsDiv.classList.remove('hidden');
        } else {
            noResultsDiv.classList.add('hidden');
        }

        kalamArray.forEach(kalam => {
            const categoryColors = {
                "نعت": "bg-green-100 text-green-800",
                "سلام": "bg-blue-100 text-blue-800",
                "منقبت": "bg-amber-100 text-amber-800",
                "default": "bg-gray-100 text-gray-800"
            };
            const borderColors = {
                "نعت": "border-r-green-500",
                "سلام": "border-r-blue-500",
                "منقبت": "border-r-amber-500",
                "default": "border-r-gray-300"
            };
            const colorClass = categoryColors[kalam.category] || categoryColors.default;
            const borderColorClass = borderColors[kalam.category] || borderColors.default;

            const card = `
                <div class="kalam-item-card ${borderColorClass}">
                    <p class="urdu-text text-gray-800 mb-2 flex-grow">${kalam.lines}</p>
                    <div class="border-t border-gray-100 pt-2 mt-auto">
                        <div class="flex items-center justify-between flex-wrap gap-x-2 gap-y-1 text-gray-600">
                            <div class="flex items-center gap-2">
                                <span class="urdu-text urdu-text-xs py-0.5 px-2 rounded-full ${colorClass}">${kalam.category}</span>
                                <p class="urdu-text urdu-text-xs text-gray-600">
                                    <i class="bi bi-person-fill text-gray-400 ml-1"></i><span class="font-semibold">${kalam.poet}</span> 
                                    <span class="text-gray-400 mx-1">|</span> 
                                    <i class="bi bi-book-fill text-gray-400 ml-1"></i>${kalam.book}
                                </p>
                            </div>
                            <div class="flex items-center gap-1 text-gray-400">
                                <i class="bi bi-eye-fill"></i>
                                <span class="font-sans text-[10px] font-bold">${kalam.views.toLocaleString('en-US')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    }

    function displayCurrentPage() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToDisplay = currentFilteredKalam.slice(startIndex, endIndex);
        
        renderKalamList(itemsToDisplay);

        if (endIndex >= currentFilteredKalam.length) {
            loadMoreContainer.classList.add('hidden');
        } else {
            loadMoreContainer.classList.remove('hidden');
        }
    }

    function applyFiltersAndRender() {
        let filteredKalam = [...allKalam];
        if (currentCategoryFilter !== 'all') filteredKalam = filteredKalam.filter(k => k.category === currentCategoryFilter);
        if (currentPoetFilter !== 'all') filteredKalam = filteredKalam.filter(k => k.poet === currentPoetFilter);
        
        const searchQuery = searchInput.value.toLowerCase();
        if (searchQuery) {
            filteredKalam = filteredKalam.filter(k => 
                k.lines.toLowerCase().includes(searchQuery) ||
                k.poet.toLowerCase().includes(searchQuery) ||
                k.book.toLowerCase().includes(searchQuery)
            );
        }
        if (currentAlphaFilter !== 'all') {
            filteredKalam = filteredKalam.filter(k => 
                // Check if first letter of combined lines starts with the filter letter
                k.lines.replace(/<br>/g, ' ').trim().startsWith(currentAlphaFilter)
            );
        }

        if (currentSort === 'alpha_asc') {
            filteredKalam.sort((a, b) => a.lines.localeCompare(b.lines, 'ur'));
        } else if (currentSort === 'alpha_desc') {
            filteredKalam.sort((a, b) => b.lines.localeCompare(a.lines, 'ur'));
        }
        else { 
            filteredKalam.sort((a, b) => b.views - a.views);
        }
        
        currentFilteredKalam = filteredKalam;
        currentPage = 1;
        container.innerHTML = '';
        displayCurrentPage();
    }
    
    function resetOtherFilters(changedFilter) {
        if (changedFilter !== 'search') searchInput.value = '';
        if (changedFilter !== 'poet') poetFilterDropdown.value = 'all';
        if (changedFilter !== 'category') categoryFilterDropdown.value = 'all';
        if (changedFilter !== 'alpha') {
            currentAlphaFilter = 'all';
            document.querySelectorAll('.alphabet-button').forEach(btn => btn.classList.remove('active'));
            const allButton = alphabetNavContainer.querySelector('.alphabet-button[data-letter="all"]');
            if(allButton) allButton.classList.add('active');
        }
    }

    // --- Event Listeners ---
    searchInput.addEventListener('input', () => {
        resetOtherFilters('search');
        currentPoetFilter = 'all';
        currentCategoryFilter = 'all';
        applyFiltersAndRender();
    });

    poetFilterDropdown.addEventListener('change', (e) => {
        currentPoetFilter = e.target.value;
        resetOtherFilters('poet');
        currentCategoryFilter = categoryFilterDropdown.value;
        applyFiltersAndRender();
    });
    
    categoryFilterDropdown.addEventListener('change', (e) => {
        currentCategoryFilter = e.target.value;
        resetOtherFilters('category');
        currentPoetFilter = poetFilterDropdown.value;
        applyFiltersAndRender();
    });
    
    filterTabs.addEventListener('click', (e) => {
        if (e.target.matches('.filter-tab')) {
            const filterType = e.target.dataset.filter;
            document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
            e.target.classList.add('active');

            if (filterType === 'tahajji') {
                alphabetContent.classList.remove('hidden');
                createAlphabetFilter('asc');
                currentSort = 'alpha_asc';
            } else if (filterType === 'radif') {
                alphabetContent.classList.remove('hidden');
                createAlphabetFilter('desc');
                currentSort = 'alpha_desc';
            } else if (filterType === 'popular') {
                alphabetContent.classList.add('hidden');
                currentSort = 'views';
            }
            resetOtherFilters('sort');
            applyFiltersAndRender();
        }
    });
    
    mobileToggleFilter.addEventListener('click', () => {
        sortAndFilterPanel.classList.toggle('hidden');
        mobileToggleFilter.classList.toggle('active');
    });

    alphabetNavContainer.addEventListener('click', (e) => {
        if (e.target.matches('.alphabet-button')) {
            currentAlphaFilter = e.target.dataset.letter;
            resetOtherFilters('alpha');
            document.querySelectorAll('.alphabet-button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            applyFiltersAndRender();
        }
    });

    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        displayCurrentPage();
    });

    // --- Initial Load ---
    const currentYearEl = document.getElementById('currentYear');
    if(currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    fetchKalaam();
});
