

// menu hamburguer



function clickMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === "block") {
      menu.style.display = "none";  // Oculta o menu

  } else {
      menu.style.display = "block"; // Exibe o menu
      menu.style.position = "relative";
  }
}


function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

  // menu hamburguer



  (function() {

    const target = document.querySelector(".target");
    const links = document.querySelectorAll(".mynav a");
    const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];
  
    function mouseenterFunc() {
      if (!this.parentNode.classList.contains("active")) {
        for (let i = 0; i < links.length; i++) {
          if (links[i].parentNode.classList.contains("active")) {
            links[i].parentNode.classList.remove("active");
          }
          links[i].style.opacity = "0.25";
        }
  
        this.parentNode.classList.add("active");
        this.style.opacity = "1";
  
        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left;
        const top = this.getBoundingClientRect().top;
        const color = colors[Math.floor(Math.random() * colors.length)];
  
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        target.style.borderColor = color;
        target.style.transform = "none";
      }
    }
  
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", (e) => e.preventDefault());
      links[i].addEventListener("mouseenter", mouseenterFunc);
    }
    
  })();

  function cadastroOnClick(){
    alert('Cadastro efetuado com sucesso!');
  }