
headerElement = document.querySelectorAll(".header")[0]

headerElement.innerHTML = `<aside class='aside-web'><div class='textos'><ul class='ul' id='ul'><li id='asideli'><a href='index.html' onclick='abrpsg("index")'>Dados Pessoais</a><img src='seta.png' alt='' id='seta'></li><li id='asideli'><a href='projetos.html' onclick='abrpsg("projetos")'>Projetos</a><img src='seta.png' alt='' id='seta'></li><li id='asideli'><a href='liecr.html' onclick='abrpsg("liecr")'>Licenças e Créditos</a><img src='seta.png' alt='' id='seta'></li></ul></div></aside><aside class='aside-mobile'><img src='menu.png' alt='' class='menu' onclick='hamburguer();'><div class='textos'><ul class='ul-mobile' id='ul'><li id='asideli'><a href='index.html' onclick='abrpsg("index")'>Dados Pessoais</a><img src='seta.png' alt='' id='seta'></li><li id='asideli'><a href='projetos.html' onclick='abrpsg("projetos")'>Projetos</a><img src='seta.png' alt='' id='seta'></li><li id='asideli'><a href='liecr.html' onclick='abrpsg("liecr")'>Licenças e Créditos</a><img src='seta.png' alt='' id='seta'></li></ul></div></aside>`

// <aside class="aside-web">
//     <div class="textos">
//         <ul class="ul" id="ul">
//                 <li id="asideli"><a href="index.html" onclick="abrpsg('index')">Dados Pessoais</a><img src="seta.png" alt="" id="seta"></li>
//                 <li id="asideli"><a href="projetos.html"onclick="abrpsg('projetos')">Projetos</a><img src="seta.png" alt="" id="seta"></li>
//                 <li id="asideli"><a href="liecr.html"onclick="abrpsg('liecr')">Licenças e Créditos</a><img src="seta.png" alt="" id="seta"></li>
//         </ul>
//     </div>
// </aside>

// <aside class="aside-mobile">
//     <img src="menu.png" alt="" class="menu" onclick="hamburguer();">
//     <div class="textos">
//         <ul class="ul-mobile" id="ul">
//                 <li id="asideli"><a href="index.html" onclick="abrpsg('index')">Dados Pessoais</a><img src="seta.png" alt="" id="seta"></li>
//                 <li id="asideli"><a href="projetos.html"onclick="abrpsg('projetos')">Projetos</a><img src="seta.png" alt="" id="seta"></li>
//                 <li id="asideli"><a href="liecr.html"onclick="abrpsg('liecr')">Licenças e Créditos</a><img src="seta.png" alt="" id="seta"></li>
//         </ul>
//     </div>
// </aside>