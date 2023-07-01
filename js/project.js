// array
// let namaSiswa = ["guswandi", "wahyu", "ira"];
// console.log(namaSiswa);
// console.log(namaSiswa[0]);
// console.log(namaSiswa[1])

// let calonSiswa = ["bayu", "agus", "asep"];
// console.log(calonSiswa);
// console.log(calonSiswa[2])

// object
// let personal1 = {
//     name: "Guswandi",
//     alamat: "padang",
//     umur: 19,
// };
// let personal2 = {
//     name: "candra",
//     alamat: "padang",
//     umur: 18,
// }
// console.log(personal1);
// console.log(personal2);
// console.log(personal1.alamat);
// console.log(personal2.umur);

// array of object
// let dataWibu = [
//     {name: "andi", alamat: "padang"},
//     {name: "bagong", alamat: "jambi"}
// ];
// console.log(dataWibu);

let dataProject = []

function addProject(event) {
    event.preventDefault();

    let title = document.getElementById("input-project-title").value;
    let stardate = document.getElementById("input-startdate").value;
    let enddate = document.getElementById("input-enddate").value;
    let description = document.getElementById("input-description").value;
    let cekbox1 = document.getElementById("nodejs").checked;
    let cekbox2 = document.getElementById("reactjs").checked;
    let cekbox3 = document.getElementById("nextjs").checked;
    let cekbox4 = document.getElementById("typescript").checked;
    let image = document.getElementById("input-project-image").files;

    image = URL.createObjectURL(image[0]);
    console.log(image);
    console.log(cekbox1);

    let project = {
        title,
        stardate,
        enddate,
        description,
        cekbox1,
        cekbox2,
        cekbox3,
        cekbox4,
        image,
    }

    dataProject.push(project);
    console.log(project)
    console.log(dataProject)

    renderProject();

}

function renderProject() {
    document.getElementById("contents").innerHTML = "";

    for (let index = 0; index < dataProject.length; index++) {
        document.getElementById("contents").innerHTML += `
        
            <div class="project-items1" id="project-items1">
                <div class="project-items-container">
                    <div class="project-items-image">
                        <img src="${dataProject[index].image}" alt="project-list1"  />
                        <a href="project-detail.html" target="_blank">
                            <button>Detail Project</button>
                        </a>
                        
                        
                    </div>
                    <div class="project-items-judul">
                        <h2>${dataProject[index].title}</h2>
                        
                        <h5 class="project-items-duration">${dataProject[index].stardate}   ${dataProject[index].enddate}</h5>
                    </div>
                    <div class="project-list-paraf">
                        <p>${dataProject[index].description}</p>
                    </div>
                    <div class="project-list-icon">
                        <i class="fa-solid fa-house"></i>
                        <i class="fa-brands fa-tiktok"></i>
                        <i class="fa-solid fa-comment"></i>
                    </div>
                    <div class="button-project" id="button-project">
                        <button class="button-project-edit">
                            <a href="#" >edit</a>
                        </button>
                        <button class="button-project-delete">
                            <a href="#">delete</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}



