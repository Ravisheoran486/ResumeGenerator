function formValidation(details) {
    if (nameV(details["name"])) {
        if (gitV(details["github"])) {
            if (gitV(details["linkedin"])) {
                if (mobileV(details["MobileNumber"])) {
                    if (acaV(Academic)) {

                        if (acaV(projects)) {
                            if (acaV(skills)) {
                                if (acaV(achievements)) {
                                    return true;
                                }
                            }
                        }


                    }
                }
            }
        }




    }
    return false;
}
function nameV(X) {
    var len =X.value.length
    if (len== 0  ) {
        alert("Invalid Name");
        X.focus();

        return false;
    }
    else {
        return true;
    }
}
function gitV(X) {
    var urlformat=/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    if(X.value.match(urlformat))
    return true;

    else{
        alert("invalid url for github or fb");
        X.focus();
        return false;
    }
}
function mobileV(X) {
    var numbers = /^[0-9]+$/;
    var len= X.value.length;
    if(len!=10){
        alert("mobile number too short")
        X.focus();
        return false;
    }
    if (X.value.match(numbers)) {
        return true;
    }
    else {
        alert('Mobile Number Incorrect');
        X.focus();
        return false;
    }
}

function acaV(X) {
   var len= X.getData().length
    if (len == 0) {
        alert('Give Info about you ');
        X.focus();
        return false;
    }
    return true;

}


const details = document.querySelector('.Details')
const Template1 = document.querySelector('.Template1')
const Template2 = document.querySelector('.Template2')



async function TextEditor(element) {
    const newEditor = await ClassicEditor
        .create(element, {
            toolbar: ['heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote'],
        })
    return newEditor

}

let skills;
TextEditor(details["skills"]).then(nEditor => {
    skills = nEditor;
})
let projects;
TextEditor(details["projects"]).then(nEditor => {
    projects = nEditor
})
let achievements;
TextEditor(details["achievements"]).then(nEditor => {
    achievements = nEditor
})
let Academic;
TextEditor(details["academics"]).then(nEditor => {
    Academic = nEditor
})
var bool = true;
var bool1 = true;


function B() {


    if (bool1) {
        Template1.style.display = "none";
        bool1 = false;
        Template2.innerHTML = `
            
               <div class="ravi">
                <h1>${details["name"].value}</h1>
                
               </div>
               <div class="main">
               <div class="row">
               
                   
                   <div class="column">
                     <h2>Personal Links</h2>
                     <p>
                     <a href="${details["github"].value}">GitHub</a> 
                     <a href="${details["linkedin"].value}">LinkedIn</a> 
                     <br>
                     <span>+91</span>${details["MobileNumber"].value}
                     </p>
                     <br>
                     <h2>ACHIEVEMENTS</h2>
                     <p>${achievements.getData()}</p>
                    </div>
                    <div class="column" >
                    <h2>SKILLS</h2>
                     <p>${skills.getData()}</p>
                     <h2>Acadamics & Education</h2>
                     <p>${Academic.getData()}</p>
                    
    
                    <h2>PROJECTS</h2>
                    <p>${projects.getData()}</p>
    
                     
    
                     
    
                    </div>
                    
                    </div>
                   </div>
                   <br>
    
                   <button onclick="B()">view template1 and 2</button>
                   <div class="btn">
                   <button onclick="print()">Print Resume</button>
             </div>
               `


    }
    else {
        Template1.style.display = "block";
        bool1 = true;
        Template2.innerHTML = "";
    }
}


function A() {
    if (formValidation(details)) {
        if (bool) {
            details.style.display = "none";
            bool = false;
            Template1.innerHTML = `
        
           <div class="ravi">
            <h1>${details["name"].value}</h1>
            
           </div>
           <div class="main">
           <div class="row">
           
               
               <div class="column">
                 <h2>Personal Links</h2>
                 <p>
                 <a href="${details["github"].value}">GitHub</a> 
                 <a href="${details["linkedin"].value}">LinkedIn</a> 
                 <br>
                 <span>+91</span>${details["MobileNumber"].value}
                 </p>
                 <br>
                 <h2>SKILLS</h2>
                 <p>${skills.getData()}</p>
                </div>
                <div class="column" >
                 <h2>Acadamics & Education</h2>
                 <p>${Academic.getData()}</p>
                

                <h2>PROJECTS</h2>
                <p>${projects.getData()}</p>

                 

                 <h2>ACHIEVEMENTS</h2>
                 <p>${achievements.getData()}</p>

                </div>
                
                
               </div>

               </div>
               <button onclick="B()">view template1 and 2</button>
               <div class="btn">
               <button onclick="print()">Print Resume</button>
         </div>
           `


        } else {
            details.style.display = "block"
            bool = true
            Template1.innerHTML = ""
        }
    }
    
}