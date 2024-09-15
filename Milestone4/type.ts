

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumedisplayelement = document.getElementById('resume-display') as HTMLDivElement;

//Handle Form Submissiom

form.addEventListener('submit', (event:Event) => {
    event.preventDefault();

// Collect Input Data
    const name = (document.getElementById('name') as HTMLInputElement).value
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phoneNo = (document.getElementById('phoneNo') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value

    // Generate Resume Dynamically
const resumeHTML=`
<h1>Editable Resume</h1>
<h2>Personal Information</h2>
<p><b>Name :</b><span contenteditable="true">${name}</span></p>
<p><b>Father Name :</b><span contenteditable="true">${fathername}</span></p>
<p><b>Email :</b><span contenteditable="true">${email}</span></p>
<p><b>Phone No :</b><span contenteditable="true">${phoneNo}</span></p><br>
<h2>Education</h2>
<p contenteditable="true">${education}</p><br>
<h2>Skills</h2>
<h4 contenteditable="true">${skills}</h4><br>
<h2>Work Experience</h2>
<p contenteditable="true">${experience}</p>`;

// Display Generated Resume
if(resumedisplayelement){
    resumedisplayelement.innerHTML = resumeHTML;
}
else
{
    console.error('Something Went Wrong');
}
});
