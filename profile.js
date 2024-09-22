
const profileData = {
    personalInfo: {
        name: "Saliha Haider",
        age: 20,
        email: "salihahaider713@gmail.com",
        phone: "03338923054",
        introduction: "My name is Saliha Haider, a 20-year-old passionate learner with a drive for continuous growth and development. I am currently focused on honing my skills in data, Web development, and various programming languages, while also pursuing personal interests in calligraphy, sketching, and reading books. I have a strong aptitude for mathematics and enjoy teaching the subject.",
        image:{src:"id.jpg", description:"My pic"},
        quote: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
        translation: "(O Allah!) Guide us to the straight path."
    },
    skills: {
        softSkills: ["Team Work", "Communication", "Problem-solving"],
        hardSkills: ["Database Management", "Data Analysis", "C++, Python, JavaScript"]
    },
    projects: [
        "Chess game in C++",
        "Snake game in C++",
        "Paint app in python",
        "Arranged a bake sale"
    ],
    awardsAndCertifications: [
        "Awarded for A+ grade in matric, Queen Mary College, Lahore",
        "Awarded merit-based scholarship, Punjab College, Lahore",
        "Awarded merit-based scholarship for two semesters, IT university, Lahore"
    ],
    education: [
        "Matric in Computer Science from Queen Mary College, Lahore (Completed: 2020)",
        "Intermediate in Computer Science from Punjab College, Lahore (Completed: 2022)",
        "Doing Bachelors in Computer Science from IT university, Lahore"
    ],
    videos: [
        { src: "snake.mp4", description: "Snake Game" },
        { src: "paint.mp4", description: "Paint App" }
    ],
    socialMedia: {
        linkedIn: "https://www.linkedin.com/in/saliha-haider-a34387267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
};

// Function to populate sections
function populateSection() {
    // Set the image source
    const imageElement = document.getElementById("mypic");
    imageElement.src = profileData.personalInfo.image.src;
    imageElement.alt = profileData.personalInfo.image.description;

    document.getElementById("myself").textContent = profileData.personalInfo.introduction;
    document.getElementById("quote-section").innerHTML = `<p>${profileData.personalInfo.quote}</p><p class="translation">${profileData.personalInfo.translation}</p>`;
    populateList(profileData.skills.softSkills, "soft-skills");
    populateList(profileData.skills.hardSkills, "hard-skills");
    populateList(profileData.projects, "projects-list");
    populateList(profileData.awardsAndCertifications, "awards-list");
    populateList(profileData.education, "education-list");

    // Populate videos
    const videosContainer = document.getElementById("videos");
    profileData.videos.forEach(video => {
        let videoElement = document.createElement("video");
        videoElement.src = video.src;
        videoElement.controls = true;
        videoElement.width = 320;
        videosContainer.appendChild(videoElement);
    });

    // Populate social media
    const socialMediaContainer = document.getElementById("social-media");
    const linkedInLink = document.createElement("a");
    linkedInLink.href = profileData.socialMedia.linkedIn;
    linkedInLink.textContent = "My LinkedIn Profile";
    linkedInLink.target = "_blank";
    socialMediaContainer.appendChild(linkedInLink);

    // Populate contact info
    const contactInfo = document.getElementById("contact-info");
    contactInfo.innerHTML = `<p>Email: ${profileData.personalInfo.email}</p><p>Phone: ${profileData.personalInfo.phone}</p>`;
}

// Helper function to populate list elements
function populateList(items, elementId) {
    const list = document.getElementById(elementId);
    items.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

// Initialize profile population
document.addEventListener("DOMContentLoaded", populateSection);