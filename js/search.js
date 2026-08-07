document.addEventListener("DOMContentLoaded", () => {
    initSearchFilter();
});

function initSearchFilter() {
    const searchInput = document.getElementById("searchBusNumber");
    const sourceSelect = document.getElementById("searchSource");
    const destSelect = document.getElementById("searchDestination");
    const searchBtn = document.getElementById("searchBtn");

    const searchResultsContainer = document.getElementById("searchResultsContainer"); || document = getElementById("liveBusStatusContainer");
    const searchResultCount = document.getElementById("searchResultCount");

    populateDropdownOptions("sourceSelect, destSelect");
      if(searchInput) searchInput.addEventListener("input", filterBuses);
      if(sourceSelect) sourceSelect.addEventListener("change", filterBuses);
      if(searchBtn) {
        searchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            filterBuses();
        });
      }
      function populateDropdownOptions(sourceSelect, destSelect) {
        if(!sourceSelect || !destSelect) return;
        const sources = [...new Set{busData.map(b => b.source)}]();
        const destinations = [...new Set{}] 
      }
    }
}