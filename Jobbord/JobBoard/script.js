// Sample Job Data (replace with data from a server or database)
const jobs = [
    { id: 1, title: "Software Engineer", category: "IT", location: "Pune", description: "Develop web applications." },
    { id: 2, title: "Marketing Manager", category: "Marketing", location: "Mumbai", description: "Manage marketing campaigns." },
    { id: 3, title: "Sales Representative", category: "Sales", location: "Delhi", description: "Sell products to clients." },
];

const jobListingsDiv = document.getElementById("job-listings");
const searchQueryInput = document.getElementById("search-query");
const categoryFilterSelect = document.getElementById("category-filter");
const locationFilterSelect = document.getElementById("location-filter");
const applyFiltersButton = document.getElementById("apply-filters");
const applicationFormDiv = document.getElementById("application-form");
const applyForm = document.getElementById("apply-form");

function renderJobs(filteredJobs = jobs) {
    jobListingsDiv.innerHTML = "";
    filteredJobs.forEach(job => {
        const jobDiv = document.createElement("div");
        jobDiv.classList.add("job-listing");
        jobDiv.innerHTML = `
            <h2>${job.title}</h2>
            <p><strong>Category:</strong> ${job.category}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
            <button class="apply-button" data-job-id="${job.id}">Apply</button>
        `;
        jobListingsDiv.appendChild(jobDiv);
    });

    // Add event listeners to "Apply" buttons
    document.querySelectorAll(".apply-button").forEach(button => {
        button.addEventListener("click", (event) => {
            const jobId = event.target.dataset.jobId;
            document.getElementById("job-id").value = jobId;
            applicationFormDiv.style.display = "block";
        });
    });
}

function filterJobs() {
    const searchQuery = searchQueryInput.value.toLowerCase();
    const categoryFilter = categoryFilterSelect.value;
    const locationFilter = locationFilterSelect.value;

    let filteredJobs = jobs;

    if (searchQuery) {
        filteredJobs = filteredJobs.filter(job => job.title.toLowerCase().includes(searchQuery));
    }

    if (categoryFilter) {
        filteredJobs = filteredJobs.filter(job => job.category === categoryFilter);
    }

    if (locationFilter) {
        filteredJobs = filteredJobs.filter(job => job.location === locationFilter);
    }

    renderJobs(filteredJobs);
}

applyFiltersButton.addEventListener("click", filterJobs);
applyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to server)
    applicationFormDiv.style.display = "none";
});

renderJobs(); // Initial rendering of jobs