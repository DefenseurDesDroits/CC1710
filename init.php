<?php

  if(isset($_GET['l'])){
    $landingPage = $_GET['l'];
  }else{
    $landingPage = 'GEN';
  }

  if(isset($_GET['d'])){
    $dept = $_GET['d'];
  }

  if(isset($_GET['c'])){
    $crea = $_GET['c'];
  }

$ogjson = '{"default":{"url":"https://information.defenseurdesdroits.fr/CC1710/","type":"website","locale":"fr_FR","title":"Défenseur des droits","description":"Institution indépendante chargée de défendre les libertés et droits. Le Défenseur des droits est compétent en matière de services publics, de droits de l&#39;enfant, de lutte contre les discriminations et en matière de déontologie de la sécurité.","image":"https://information.defenseurdesdroits.fr/CC1710/img/ms_GEN","card":"summary_large_image","twitter":"Defenseurdroits"},"DEL":{"url":"https://information.defenseurdesdroits.fr/CC1710/?l=DEL","type":"website","locale":"fr_FR","title":"Contactez un·e délégué·e","description":"Plus de 450 délégué·e·s du Défenseur des droits, dans 680 points d&#39;accueil en métropole et outre-mer accueillent, écoutent et orientent celles et ceux qui pensent que leurs droits n&#39;ont pas été respectés.","image":"https://information.defenseurdesdroits.fr/CC1710/img/ms_GEN","card":"summary_large_image","twitter":"Defenseurdroits"},"MLD":{"url":"https://information.defenseurdesdroits.fr/CC1710/?l=MLD","type":"website","locale":"fr_FR","title":"Défendre les personnes victimes de discrimination","description":"Le Défenseur des droits peut intervenir dès lors qu&#39;une personne a été confrontée à une discrimination.","image":"https://information.defenseurdesdroits.fr/CC1710/img/ms_MLD","card":"summary_large_image","twitter":"Defenseurdroits"},"MDE":{"url":"https://information.defenseurdesdroits.fr/CC1710/?l=MDE","type":"website","locale":"fr_FR","title":"Défendre les droits de l&#39;enfant","description":"Le Défenseur des droits, intervient lorsqu&#39;il est saisi de situations où les droits d&#39;un enfant ne semblent pas respectés.","image":"https://information.defenseurdesdroits.fr/CC1710/img/ms_MDE","card":"summary_large_image","twitter":"Defenseurdroits"},"MDS":{"url":"https://information.defenseurdesdroits.fr/CC1710/?l=MDS","type":"website","locale":"fr_FR","title":"Déontologie de la sécurité","description":"Le Défenseur des droits peut intervenir lorsqu&#39;une personne a été victime ou témoin d&#39;un non-respect de la déontologie par des forces de sécurité.","image":"https://information.defenseurdesdroits.fr/CC1710/img/ms_GEN","card":"summary_large_image","twitter":"Defenseurdroits"},"MSP":{"url":"https://information.defenseurdesdroits.fr/CC1710/?l=MSP","type":"website","locale":"fr_FR","title":"Défendre les droits des usagers des services publics","description":"Le Défenseur des droits intervient pour défendre les droits des usagers des services publics.","image":"https://information.defenseurdesdroits.fr/CC1710/img/ms_MSP","card":"summary_large_image","twitter":"Defenseurdroits"}}';

$opengraph = json_decode($ogjson, true);

function addOG($mission, $crea, $opengraph){

  switch($mission) {
    case 'DEL':
      $ogm = $opengraph["DEL"];
      break;
    case 'MLD':
      $ogm = $opengraph["MLD"];
      break;
    case 'MDE':
      $ogm = $opengraph["MDE"];
      break;
    case 'MDS':
      $ogm = $opengraph["MDS"];
      break;
    case 'MSP':
      $ogm = $opengraph["MSP"];
      break;
    default:
      $ogm = $opengraph["default"];
  }

  $opengraphtags = "<!-- OPEN GRAPHS -->\n";
  $opengraphtags .= "\t<meta property='og:url' content='".$ogm['url'];
  if(isset($crea)){$opengraphtags .= "&c=".$crea;}
  $opengraphtags .= "' />\n";
  $opengraphtags .= "\t<meta property='og:type' content='".$ogm['type']."' />\n";
  $opengraphtags .= "\t<meta property='og:locale' content='".$ogm['locale']."' />\n";
  $opengraphtags .= "\t<meta property='og:title' content='".$ogm['title']."' />\n";
  $opengraphtags .= "\t<meta property='og:description' content='".$ogm['description']."' />\n";
  $opengraphtags .= "\t<meta property='og:image' content='".$ogm['image'];
  if(isset($crea)){$opengraphtags .= "_".$crea;}
  $opengraphtags .= ".jpg' />\n";
  $opengraphtags .= "\t<meta property='twitter:card' content='".$ogm['card']."' />\n";
  $opengraphtags .= "\t<meta property='twitter:site' content='".$ogm['twitter']."' />";

  return $opengraphtags;
} // end addOG

switch($landingPage) {
  case 'DEL':
    $title = 'Les délégués du Défenseur des droits';
    $opengraphtags = addOG('DEL', null, $opengraph);
    break;
  case 'MLD':
    $title = 'La lutte contre les discriminations et pour l&#39;égalité - Défenseur des droits';
    $opengraphtags = addOG('MLD', $crea, $opengraph);
    break;
  case 'MDE':
    $title = 'Les droits des enfants - Défenseur des droits';
    $opengraphtags = addOG('MDE', null, $opengraph);
    break;
  case 'MDS':
    $title = 'La déontologie de la sécurité - Défenseur des droits';
    $opengraphtags = addOG('MDS', null, $opengraph);
    break;
  case 'MSP':
    $title = 'La relation avec les services publics - Défenseur des droits';
    $opengraphtags = addOG('MSP', null, $opengraph);
    break;
  default:
    $title = 'Défenseur des droits';
    $opengraphtags = addOG('GEN', null, $opengraph);
}

?>