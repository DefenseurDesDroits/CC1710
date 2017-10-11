// main.js all the js function of the landing pages

var content = {
  default:{
    title:"Le Défenseur des droits,\nune institution pour faire respecter gratuitement vos droits",
    content:"Le Défenseur des droits, institution publique indépendante, est chargé de défendre les droits et libertés de toutes et tous. Compétent en matière de services publics, de droits de l'enfant, de lutte contre les discriminations, de déontologie des forces de sécurité ou encore d'orientation et de protection des lanceurs d'alerte, le Défenseur des droits est concrètement au service de toute personne estimant que ses droits n'ont pas été respectés."
  },
  DEL:{
    title:"Délégués",
    content:"Le Défenseur des droits s'appuie sur un réseau de près 500 délégués présents dans plus de 750 points d'accueil repartis sur l'ensemble du territoire français. Ils accueillent, écoutent et orientent celles et ceux qui pensent que leurs droits n'ont pas été respectés."
  },
  MSP:{
    title:"Services publics",
    intro:"Défendre les droits des usagers des services publics",
    content:"Le Défenseur des droits intervient pour défendre les droits des usagers des services publics, lorsque les démarches qu'ils ont préalablement engagées pour faire valoir leurs droits ou contester une décision n'ont pas abouti. L'accès aux droits peut en effet se trouver entravé par différents obstacles ; charge de travail, pratiques des services publics, règles de droit parfois inadaptées ou encore opacité de dispositifs parfois peu compréhensibles par les usagers.\nVous pouvez saisir le Défenseur des droits si vous rencontrez des difficultés avec une administration ou un service public. Le Défenseur des droits vous aidera à mieux faire valoir vos droits et pourra vous orienter dans vos démarches."
  },
  MDE:{
    title:"Enfance",
    intro:"Défendre les droits des enfants",
    content:"Chaque enfant âgé de moins de 18 ans s'est vu reconnaitre des droits fondamentaux par la Convention internationale des droits de l'enfant (CIDE) en matière de soins, d'éducation, de justice, de protection sociale, de participation... En France, le Défenseur des droits est l'institution de recours en cas de violation des droits d'un enfant.\nLe Défenseur des droits et la Défenseure des enfants, son adjointe, peuvent intervenir dans de nombreux domaines (santé, justice pénale, handicap, adoption, scolarisation, etc.) pour protéger les enfants et garantir leurs droits à l'éducation, à la santé, aux loisirs, à l'égalité et à la non-discrimination, etc…\nTout enfant ou jeune de moins de 18 ans, pensant que ses droits n'ont pas été respectés, peut saisir le Défenseur des droits et la Défenseure des enfants ainsi que tout adulte témoin d'un manquement au droit d'un enfant."
  },
  MLD:{
    title:"Discrimination",
    intro:"Défendre les personnes victimes de discrimination",
    content:"Une discrimination est une inégalité de traitement survenue dans une situation visée par la loi (accès à un emploi, un service, un logement, etc.) et fondée sur un critère interdit par la loi (origine, handicap, sexe, âge, état de santé, etc.)\nLes principaux critères de discrimination sont l'origine, le sexe, la grossesse, l'apparence physique, le patronyme, l'état de santé, le handicap, l'orientation sexuelle, l'âge, les opinions politiques, les croyances, les activités syndicales, l'appartenance ou la non appartenance, vraie ou supposée, à une ethnie, une nation, une race ou une religion déterminée, l'identité de genre, le lieu de résidence, la domiciliation bancaire, la perte d'autonomie, la vulnérabilité résultant de la situation économique. Défavoriser une personne en raison d'un ou de plusieurs de ces critères est interdit par la loi.\nAinsi, si vous pensez avoir été traité défavorablement du fait d'un ou de plusieurs de ces critères lors d'une recherche d'emploi, de logement, etc. - autrement dit, si vous pensez avoir été victime de discrimination - vous pouvez saisir le Défenseur des droits."
  },
  MDS:{
    title:"Déontologie",
    intro:"Veiller au respect de la déontologie par les professionnels de la sécurité",
    content:"Le Défenseur des droits peut intervenir lorsqu'une personne a été victime ou témoin d'un non-respect de la déontologie par une personne exerçant une activité de sécurité (policier, gendarme, personnel pénitentiaire, agent de sécurité, agent de surveillance des transports en commun...). Il s'agit par exemple d'un usage disproportionné de la force, d'un comportement indigne de la fonction (gestes ou propos déplacés, insultes, menaces, tutoiement...), d'une fouille corporelle abusive, d'un contrôle d'identité intervenu dans des conditions anormales, de difficultés pour déposer une plainte, d'une mesure contestable de contrainte ou de privation de liberté (interpellation, perquisition, retenue, garde à vue, rétention…).\nVous pouvez saisir le Défenseur des droits si vous estimez avoir été victime d'un comportement abusif de la part d'une personne exerçant une activité de sécurité sur le territoire français ou si vous êtes témoin de faits constitutifs d'un tel abus."
  },
  MLA:{
    title:"Lanceurs d'alerte",
    intro:"Orienter et protéger les lanceurs d'alerte",
    content:"Le Défenseur des droits est chargé d'orienter vers les autorités compétentes toute personne signalant une alerte dans les conditions fixées par la loi et de veiller au respect de ses droits et libertés. Ainsi, le Défenseur des droits a pour mission d'orienter et de protéger de toutes mesures de représailles.\nPour bénéficier de l'appui du Défenseur des droits, ce dernier ne peut être saisi que par écrit et sous double enveloppe. Tout lanceur d'alerte insèrera dans une première enveloppe fermée les éléments aussi détaillés que possibles de l'alerte ; cette première enveloppe étant elle-même insérée dans une seconde enveloppe adressée au Défenseur des droits, Libre réponse 71120, 75342 Paris Cedex 07."
  }
};

Array.prototype.sortOn = function(key){
  this.sort(function(a, b){
    if(a[key] < b[key]){
      return -1;
    }else if(a[key] > b[key]){
      return 1;
    }
    return 0;
  });
}

function renderPage(major, minors){

  var majorcontent;
  switch(major) {
    case 'DEL':
      majorcontent = content.DEL;
      break;
    case 'MLD':
      majorcontent = content.MLD;
      break;
    case 'MDE':
      majorcontent = content.MDE;
      break;
    case 'MDS':
      majorcontent = content.MDS;
      break;
    case 'MSP':
      majorcontent = content.MSP;
      break;
    case 'MLA':
      majorcontent = content.MLA;
      break;
    default:
      majorcontent = content.default;
  }

  var majornode = "<article id='MAJ-"+major+"' class='majeur'>";
  majornode += "<h2><span>"+majorcontent.title.replace(/\n/g, '<br />')+"</span></h2>"
  if(majorcontent.intro){majornode += "<h3 class='intro'>"+majorcontent.intro+"</h3>"}
  majornode += "<p class='content'>"+majorcontent.content.replace(/\n/g, '<br />')+"</p>";
  majornode += "</article>\n";
  document.getElementById('majeure').innerHTML = majornode;
  if(major == 'MDE' || major == 'MLD' || major == 'MDS' || major == 'MSP' || major == 'MLA'){
    document.querySelector('header article.majeur').classList.toggle('domaine');
  }

  if(minors !== null && minors !== undefined){
    var minorsnodes = "";
    minors.map(function(minor){
      var minorcontent;
      switch(minor) {
        case 'MLD':
          minorcontent = content.MLD;
          break;
        case 'MDE':
          minorcontent = content.MDE;
          break;
        case 'MDS':
          minorcontent = content.MDS;
          break;
        case 'MSP':
          minorcontent = content.MSP;
          break;
        case 'MLA':
          minorcontent = content.MLA;
          break;
      }
      minorsnodes += "<article id='"+minor+"' class='domaine'>";
      minorsnodes += "<div class='domain-illus'>";
      minorsnodes += "<h3>"+minorcontent.title+"</h3>";
      minorsnodes += "<button class='morebtn "+minor+"' onclick='readMore(\""+minor+"\")'>En savoir plus</button>";
      minorsnodes += "</div>";
      minorsnodes += "<div class='more'>";
      minorsnodes += "<p class='intro'>"+minorcontent.intro+"</p>";
      minorsnodes += "<p class='content'>"+minorcontent.content.replace(/\n/g, '<br />')+"</p>";
      minorsnodes += "</div>";
      minorsnodes += "</article>\n";
    });
    document.getElementById('mineures').innerHTML = minorsnodes;
  }

  if(major == 'GEN' || major == 'DEL' || major == 'MDS' || major == 'MLA'){
    var videowrp = document.createElement('div');
    videowrp.id = 'vbg-container';
    var video = document.createElement('video');
    video.id = 'vbg';
    video.src = 'video.mp4';
    video.preload = 'auto';
    video.loop = true;
    video.muted = true;
    video.autoplay = true;

    videowrp.appendChild(video);
    var videooverlay = document.createElement('div');
    videooverlay.id = 'vbg-overlay';
    videowrp.appendChild(videooverlay);
    document.querySelector('header').appendChild(videowrp);

    adaptVideoOffset();

    document.getElementById('vbg').play();
  }else{
    var videowrp = document.createElement('div');
    videowrp.id = 'vbg-container';
    var videooverlay = document.createElement('div');
    videooverlay.id = 'vbg-overlay';
    videowrp.appendChild(videooverlay);
    document.querySelector('header').appendChild(videowrp);
    if(major == 'MLD'){
      if(crea){
        document.getElementById('vbg-container').classList.toggle(major+crea);
      }else{
        var creas = ['e','l'];
        var crearand = creas[Math.floor(Math.random()*creas.length)];
        document.getElementById('vbg-container').classList.toggle(major+crearand);        
      }
    }else{
      document.getElementById('vbg-container').classList.toggle(major);
    }
  }

   if(major == 'GEN'){
     document.querySelector('#CTA-container h3').innerHTML = '<span>Nous avons la réponse</span>';
   }

  if(major == 'DEL'){
     document.querySelector('#mineures-container h2').innerHTML = '';
    if(dept){
      loadJSON('dept.json',function(listdept){
        listdept.filter(function(deptitem){
          if(dept == '97'){
            document.querySelector('#mineures-container h2').innerHTML = '<span>Outre-mer</span>';
          }else if(dept == deptitem.code){
            document.querySelector('#mineures-container h2').innerHTML = '<span>'+deptitem.name+'</span>';
          }
        });
      });
    }else{
      document.querySelector('#mineures-container h2').innerHTML = '<span>Tous les délégués</span>';
    }
  }

} // end renderPage()

function adaptVideoOffset(){
  if(landingPage == 'GEN' || landingPage == 'DEL'){
    var vidh = (document.getElementById('vbg').clientHeight - document.querySelector('header').clientHeight) / 2;
    var vidw = document.getElementById('vbg').clientWidth;
    var contw = document.getElementById('vbg-container').clientWidth;
    document.getElementById('vbg').style.top = (-vidh) + 'px';
    document.getElementById('vbg').style.left = (contw - vidw) / 2 + 'px';
  }
}

window.onresize = adaptVideoOffset;

function readMore(domaine){
  document.getElementById(domaine).getElementsByClassName('more')[0].classList.toggle('read');
}

function initDel(){

  var delsearchnode = document.createElement('form');
  delsearchnode.method = 'GET';
  var dellandingpage = document.createElement('input');
  dellandingpage.type = 'hidden';
  dellandingpage.value = 'DEL';
  dellandingpage.id = 'l';
  dellandingpage.name = 'l';
  delsearchnode.appendChild(dellandingpage);
  var delinputsearch = document.createElement('input');
  delinputsearch.type = 'search';
  delinputsearch.setAttribute('list', 'departement');
  delinputsearch.placeholder = 'Entrez votre numéro de département';
  if(dept){delinputsearch.value = dept;}
  delinputsearch.id = 'd';
  delinputsearch.name = 'd';
  delinputsearch.required = true;
  delsearchnode.appendChild(delinputsearch);
  var deldatalist = document.createElement('datalist');
  deldatalist.id = 'departement';
  delsearchnode.appendChild(deldatalist);
  var delsubmit = document.createElement('input');
  delsubmit.type = 'submit';
  delsubmit.value = 'Rechercher vos délégué·e·s';
  delsearchnode.appendChild(delsubmit);  

  document.querySelector('#CTA-container h3').innerHTML = '<span>Recherchez les délégués de votre département :</span>';
  document.querySelector('#CTA').innerHTML = '<p id="howtodel">Trouvez les délégués de votre département en entrant les deux premiers numéros de votre code postal (ou trois premiers pour l\'outre-mer) dans le champ ci-dessous. Si vous ne résidez pas en France, entrez 99.</p>';
  document.querySelector('#CTA').appendChild(delsearchnode);

  loadJSON('dept.json',function(listdept){

    listdept.map(function(deptitem){
      var option = document.createElement('option');
      option.value = deptitem.code;
      document.getElementById('departement').appendChild(option);
    });
  });

  loadJSON('delegates.json',function(listdel){
    if(dept){
      var delegates = listdel.filter(function(delegate){
        if(dept == delegate.zipcode.substring(0,dept.length)){return true;}else{return false;}
      });
      renderDel(delegates);
    }else{
      var delegates = listdel;
      renderDel(delegates);
    }
  });
} // end initDel

function renderDel(delegates){
  if(delegates.length == 0){
    document.querySelector('#mineures').innerHTML = '<div id="noresult">Navré, nous n\'avons pas de points d\'accueil à afficher pour ce numéro de département.</div>';
  }else{
    if(dept){delegates.sortOn('city');}else{delegates.sortOn('zipcode');}

    var liststructures = document.createElement('div');
    liststructures.id = 'structures';
    document.getElementById('mineures').appendChild(liststructures);

    delegates.map(function(delegate){
      var structurenode = document.createElement('div');
      structurenode.className = 'structure';
      var structurename = document.createElement('h4');
      var structurenametxt = document.createTextNode(delegate.name + ' - ');
      structurename.appendChild(structurenametxt);
      var structurenamecity = document.createElement('span');
      var structurenamecitytxt = document.createTextNode(delegate.city.replace(/CEDEX ?\d?\d?/i,''));
      structurenamecity.appendChild(structurenamecitytxt);
      structurename.appendChild(structurenamecity);
      structurenode.appendChild(structurename);
      var structureinfos = document.createElement('p');
      structureinfos.className = 'strucinfos';
      var strucinfostxt = document.createTextNode(delegate.address+' '+delegate.zipcode+' '+delegate.city.replace(/CEDEX ?\d?\d?/i,''));
      structureinfos.appendChild(strucinfostxt);
      structurenode.appendChild(structureinfos);

      delegate.del.sortOn('lastname');
      var dellist = document.createElement('ul');
      dellist.className = 'delegs';

      delegate.del.map(function(delitem){
        var delinfowrp = document.createElement('li');
        delinfowrp.className = 'deleg';
        var delinfo = document.createTextNode(delitem.firstname + ' ' + delitem.lastname);
        delinfowrp.appendChild(delinfo);
        var delpermlist = document.createElement('ul');
        delpermlist.className = 'perms';
  
        delitem.permanences.sortOn('day');
        delitem.permanences.map(function(delperm){
          var delpermitem = document.createElement('li');
          delpermitem.className = 'perm';
          var delpermitemtxt = document.createTextNode(delperm.day+' : '+delperm.time);
          delpermitem.appendChild(delpermitemtxt);
          delpermlist.appendChild(delpermitem);
        });
        delinfowrp.appendChild(delpermlist);

        var delcontact = document.createElement('a');
        delcontact.className = 'delcontact';
        delcontact.target = '_blank';
        delcontact.title = 'Contacter '+delitem.firstname+' '+delitem.lastname+' par courriel';
        delcontact.href = 'mailto:'+delitem.email+'?subject=Prise%20de%20contact&body=NOM%20:%20%0D%0APrénom%20:%20%0D%0ATéléphone%20:%20%0D%0A---------------------------------%0D%0AMessage%20:%20%0D%0A%0D%0AEcrivez%20votre%20message%20ici...';
        var delcontacttxt = document.createTextNode('Contacter');
        delcontact.appendChild(delcontacttxt);
        delinfowrp.appendChild(delcontact);

        dellist.appendChild(delinfowrp);
      });
      structurenode.appendChild(dellist);

      document.getElementById('structures').appendChild(structurenode);
    });
  }
  document.querySelector('header').style.minHeight = '450px';
} // end renderDEL

function loadJSON(file,callback) {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(this.responseText));
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
} // end load JSON

switch(landingPage){
  case 'DEL':
    renderPage('DEL');
    initDel();
    break;
  case 'MLD':
    renderPage('MLD',['MSP','MDE','MLD','MDS','MLA']);
    break;
  case 'MDE':
    renderPage('MDE',['MSP','MDE','MLD','MDS','MLA']);
    break;
  case 'MDS':
    renderPage('MDS',['MSP','MDE','MLD','MDS','MLA']);
    break;
  case 'MSP':
    renderPage('MSP',['MSP','MDE','MLD','MDS','MLA']);
    break;
  case 'MLA':
    renderPage('MLA',['MSP','MDE','MLD','MDS','MLA']);
    break;
  default:
    renderPage('GEN',['MSP','MDE','MLD','MDS','MLA']);
} // end switch landingPage