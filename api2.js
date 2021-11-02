
const API_REPOS = "https://api.github.com/users/Open-Bootcamp/repos";
const sec = document.getElementById("sec1");

fetch(API_REPOS)
    .then( response => response.json())
    .then( data => makeLists(data));

const makeLists = data =>{
    data.forEach(element => {  
        let repo = document.createElement("ul");
        repo.setAttribute("id", element.name)
        sec.appendChild(repo);
        repo.innerHTML=`<h2>${element.name}</h2>`;
        fillLists(element.name);
        
    });
}


const fillLists = repo => {
    let table = document.getElementById(repo);
    let commit_url= `https://api.github.com/repos/Open-Bootcamp/${repo}/commits`;
    fetch(commit_url)
    .then(response => response.json())
    .then(commits => {
        if (commits.length > 0){
            commits.forEach(element => {
                let commit = document.createElement("li");
                table.appendChild(commit);
                commit.innerHTML= `<b>Message:</b> ${element.commit.message}`;
        })}else{
            let commit = document.createElement("li");
            table.appendChild(commit);
            commit.innerHTML= `<b>No hay commits</b>`;
    }

});

}
