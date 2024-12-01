/*
Melhor pro pior
*/

/*
---------------------Passar isso para-------------------------------
<img src="imgs/IMAGEM.png" class="project-img">
<span class = "project-info">
	<a class = "project-name" href="LINK">NOME</a><br>
	<p class = "project-desc">DESCRIÇÃO</p>
</span>
---------------------------Isso-------------------------------------
<img src="imgs/IMAGEM.png" class="project-img"> <span class = "project-info"> <a class = "project-name" href="LINK">NOME</a><br> <p class = "project-desc">DESCRIÇÃO</p> </span>
-----------------------Possiveis tags-------------------------------
- Python
- Js
- C
- Game
- Backend
- Godot
- Frontend
- Ruby
- Html
- Css
- Cyberseg
- Infra
- DevOps
- Pentest
- Malware
- Financeiro
- BD
- SQL
- MongoDB
- Php
- Cript
- Quantum
--------------------------Template---------------------------------
Número da Prioridade
v
0: {tags: [], div_content: `<img src="imgs/IMAGEM.png" class="project-img"> <span class = "project-info"> <a class = "project-name" href="LINK">NOME</a><br> <p class = "project-desc">DESCRIÇÃO</p> </span>`},
*/
var proj_list = {
    0: {tags: ["Financeiro", "Frontend", "Backend", "SQL", "BD", "Html", "Css", "Js", "Php"], div_content: `<img src="imgs/finsocial.svg" class="project-img"> <span class = "project-info"> <a class = "project-name" href="https://finsocial.top/">Finsocial</a><br> <p class = "project-desc">Site feito como projeto acadêmico para ajudar com que as pessoas possuam um controle financeiro maior</p> </span>`},
    
}

function gen_list(tag) {

    var lista_projects = [];
    var trash_projects = [];
    var i = 0;

    for (var key in proj_list) {

        if (i == 6) {
            break;
        }

        if (proj_list.hasOwnProperty(key)) {

            var project = proj_list[key];
            console.log(project);

            if (project.tags.includes(tag)) {

                console.log("Possui: ", tag);
                lista_projects.push(project.div_content)

                i++;

            } else {

                console.log("Não possui: ", tag);
                trash_projects.push(project.div_content)

            }

        }
    }

    if (i < 6) {
        var qnt = 6 - i
        for (var item in trash_projects) {

            console.log(trash_projects[item]);

            if (i == 6) {
                break;
            }

            console.log("Adicionado: ", trash_projects[item]);
            lista_projects.push(trash_projects[item])

            i++;
        }
    }

    console.log("Projetos prioritários: ", lista_projects);
    return lista_projects;
}

function get_work(var_get) {

    //Definindo variaveis
    var result = null,
        tmp = [];
  
    //Loop para pegar o que está no link através do método GET
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === var_get) result = decodeURIComponent(tmp[1]);
        });
    gen_list(result)
    document.getElementById("projects").innerHTML = "New text!"
    return result;
  }