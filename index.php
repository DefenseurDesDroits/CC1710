<?php require_once('init.php'); ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title><?php echo $title; ?></title>
		<?php echo $opengraphtags; ?>

			<!-- Google Tag Manager -->
			<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-5BB347');</script>
			<!-- End Google Tag Manager -->
		<link rel="stylesheet" href="css/main.css" />

		<!-- NO INDEX -->
		<meta name="robots" content="noindex" />

		<!-- VIEWPORT -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.1/cookieconsent.min.css" />
	</head>
	<body>
		<?php include('./'.$landingPage.'-tag.php'); ?>

	<main>

		<header>
			<div class='flow'>
				<h1><a href='https://www.defenseurdesdroits.fr/' title='Se rendre sur le site du Défenseur des droits'><img src='img/logo.svg' alt='Logo' />Défenseur des droits</a></h1>
				<div id="majeure"></div><!-- end #majeure -->
			</div><!-- end .flow -->
		</header>

		<section id='CTA-container'>
			<div class='flow'>
				<h3><span>Vous pensez que vos droits n'ont pas été respectés ?</span><br /><span>Nous avons la réponse</span></h3>

				<div id="CTA">
					<article id='saisine'>
						<a href='https://formulaire.defenseurdesdroits.fr/' id='saisir-img' class='icone saisir' target='_blank'><img src='img/formulaire.svg' alt='Icône formulaire' /></a>
						<p class='methode'>Par formulaire en ligne</p>
						<p class='action'><a href='https://formulaire.defenseurdesdroits.fr/' class='saisir' id='saisir' target='_blank'>Saisir</a></p>
					</article><!-- end #saisine -->

					<article id='deleg'>
						<a href='./?l=DEL' id='saisir-img' class='icone godeleg'><img src='img/deleg.svg' alt='Icône délégués' /></a>
						<p class='methode'>En rencontrant un délégué</p>
						<p class='action'><a href='./?l=DEL' class='godeleg' id='godeleg'>Contacter</a></p>
					</article><!-- end #saisine -->

					<article id='tel'>
						<a href='tel:0969390000' id='telephoner-img' class='icone telephoner' target="_blank"><img src='img/telephone.svg' alt='Icône téléphone' /></a>
						<p class='methode'>Par téléphone</p>
						<p class='action'><a href='tel:0969390000' class='telephoner' id='telephoner' target="_blank">09 69 39 00 00</a></p>		
					</article><!-- end #tel -->

					<article id='courrier'>
						<div class='icone'><img src='img/courrier.svg' alt='Icône enveloppe' /></div>
						<p class='methode'>Par courrier gratuit, <br />sans affranchissement</p>
						<p class='action'>Défenseur des droits<br />
						Libre réponse 71120<br />
						75342 Paris CEDEX 07</p>					
					</article><!-- end #courrier -->
					<hr class='clear' />
				</div><!-- end #CTA -->
				
			</div><!-- end .flow -->
		</section><!-- end #CTA-container -->


		<section id='mineures-container'>
			<div class='flow'>
				<h2><span>Nos domaines</span></h2>
				<div id="mineures"></div><!-- end #mineures -->
			</div><!-- end .flow -->
		</section><!-- end #mineures-container -->

		<footer>
			<div class="flow">
				<nav>
					<ul>
						<li id="twit"><a href="https://twitter.com/Defenseurdroits" target="_blank" title="Se rendre sur la page Twitter du Défenseur des droits"><img src="img/twit.png">@Defenseurdroits</a></li>
						<li id="fab"><a href="https://facebook.com/DefenseurdesDroits" target="_blank" title="Se rendre sur la page Facebook du Défenseur des droits"><img src="img/fab.png">facebook.com/defenseurdesdroits</a></li>
						<li><a href="https://www.defenseurdesdroits.fr" target="_blank" title="Se rendre sur le site du Défenseur des droits">defenseurdesdroits.fr</a></li>
						<li id="presscontain"><a target="_blank" href="https://www.defenseurdesdroits.fr/presse/">Presse</a></li>
						<li id="legalcontain"><a target="_blank" href="https://www.defenseurdesdroits.fr/mentions-légales">Mentions légales</a></li>
					</ul>
				</nav>
				&nbsp;
			</div>
		</footer>

	</main>
	<script>
				var landingPage = '<?php echo $landingPage; ?>';
			<?php echo (isset($dept)) ? "var dept = '".$dept."';" : "var dept = null;"; ?>
			<?php echo (isset($crea)) ? "var crea = '".$crea."';" : "var crea = null;"; ?>
	</script>
	<script src="js/main.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.1/cookieconsent.min.js"></script>
	<script>window.cookieconsent.initialise({"palette":{"popup":{"background":"#ffffff","text":"#000000"},"button":{"background":"#0080c9","text":"#ffffff"}},"theme":"edgeless","position":"top","static":true,"content":{"message":"Ce site utilise des cookies à des fins statistiques.","dismiss":"OK","link":"En savoir plus","href":"https://www.defenseurdesdroits.fr/mentions-l%C3%A9gales"}});</script>
	</body>
</html>