// Utility function to scroll smoothly to a section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Show modal and overlay
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  const overlay = document.getElementById("modal-overlay");
  if (modal && overlay) {
    modal.style.display = "block";
    overlay.style.display = "block";
  }
}

// Close modal and overlay
function closeModal() {
  const modals = document.querySelectorAll(".modal");
  const overlay = document.getElementById("modal-overlay");
  modals.forEach((modal) => (modal.style.display = "none"));
  if (overlay) overlay.style.display = "none";
}

// Handle form submissions with basic validation
document.addEventListener("DOMContentLoaded", () => {
  // Student Profile Form
  const studentForm = document.getElementById("student-profile-form");
  if (studentForm) {
    studentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Student profile saved successfully!");
      closeModal();
      studentForm.reset();
    });
  }

  // Post Job Form
  const postJobForm = document.getElementById("post-job-form");
  if (postJobForm) {
    postJobForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Job posted successfully!");
      closeModal();
      postJobForm.reset();
    });
  }

  // Company Profile Form
  const companyForm = document.getElementById("company-profile-form");
  if (companyForm) {
    companyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Company profile updated successfully!");
      closeModal();
      companyForm.reset();
    });
  }

  // Announcements Form
  const announcementsForm = document.getElementById("announcements-form");
  if (announcementsForm) {
    announcementsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Announcement published successfully!");
      closeModal();
      announcementsForm.reset();
    });
  }

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});

// Example function to dynamically update dashboard stats (can be extended with real data)
function updateDashboardStats(students, jobs, placed) {
  document.getElementById("total-students").textContent = students;
  document.getElementById("total-jobs").textContent = jobs;
  document.getElementById("placed-students").textContent = placed;
}

// Example usage:
// updateDashboardStats(1500, 60, 1200);
