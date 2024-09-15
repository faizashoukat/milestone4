var form = document.getElementById('resume-form');
var resumedisplayelement = document.getElementById('resume-display');
//Handle Form Submissiom
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect Input Data
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var email = document.getElementById('email').value;
    var phoneNo = document.getElementById('phoneNo').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Generate Resume Dynamically
    var resumeHTML = "\n<h1>Editable Resume</h1>\n<h2>Personal Information</h2>\n<p><b>Name :</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Father Name :</b><span contenteditable=\"true\">").concat(fathername, "</span></p>\n<p><b>Email :</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone No :</b><span contenteditable=\"true\">").concat(phoneNo, "</span></p><br>\n<h2>Education</h2>\n<p contenteditable=\"true\">").concat(education, "</p><br>\n<h2>Skills</h2>\n<h4 contenteditable=\"true\">").concat(skills, "</h4><br>\n<h2>Work Experience</h2>\n<p contenteditable=\"true\">").concat(experience, "</p>");
    // Display Generated Resume
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error('Something Went Wrong');
    }
});
