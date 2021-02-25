/*
const linksInternos = document.querySelectorAll('a[href^="#'); // pega todo elemento interno que inicia com href #  
function handleLink(event){
  event.preventDefault(); //previne evento padrao não executando envento padrao
  linksInternos.forEach((link)=>{
    link.classList.remove('ativo');  //remove a classe ativo do elemento
  });
  event.currentTarget.classList.add('ativo');  //depois add a class ativo ao elemento clicado
}

linksInternos.forEach((link)=>{
  link.addEventListener('click', handleLink);  //add evento de click e chama a função criada acima
})
*/

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length){
  tabContent[0].classList.add('ativo');


  function activeTab(index){
    tabContent.forEach((section) =>{
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  } 

  tabMenu.forEach((itemMenu,index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    })
  });

}
