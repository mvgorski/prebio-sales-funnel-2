 <!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Prebiothrive Qualifier</title>
  <!--Bootstrap-->
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
	<style>
		@font-face {
		  	font-family: 'proximanova-reg';
		  	src:    url('fonts/proximanova-reg-webfont.woff') format('woff'),
		          	url('fonts/proximanova-reg-webfont.ttf') format('truetype');
		}
		@font-face {
		  	font-family: 'proximanova-sbold';
		  	src:    url('fonts/proximanova-sbold-webfont.woff') format('woff'),
		          	url('fonts/proximanova-sbold-webfont.ttf') format('truetype');
		}
		html, body {
			color: #1D2667;
			font-family: 'proximanova-reg', Helvetica, Arial, sans-serif;
		}
		header {
			box-shadow: 0 2px 4px 0 rgba(0,0,0,0.15);
			padding-top: 1rem;
			padding-bottom: 1rem;
			margin-bottom: 2rem;
		}
		.cta {
			background: linear-gradient(180deg, #FAD961 0%, #FF8038 100%);
			border-radius: 5px;
			color: #fff;
			font-size: 1.7rem;
			line-height: 1.3;
			font-family: 'proximanova-sbold', Helvetica, Arial, sans-serif;
			font-weight: 700;
			padding: 12px;
			text-align: center;
			text-transform: uppercase;
			letter-spacing: 2px;
	        box-shadow: 0 12px 24px 0 rgba(0,0,0,0.15);
	        border: 0;
	        margin-bottom: 1.5rem;
		}
		.cta:hover, .cta:focus {
		    background: linear-gradient(180deg, #FDC702 0%, #FF5C00 100%);
		    color: #fff;
		    text-decoration: none;
		}
		input {
			margin-right: 1rem;
			cursor: pointer;
		}
		ol>li {
			font-size: 1.5rem;
			margin-bottom: 1.5rem;
		}
		ol>li>span {
			font-family: 'proximanova-sbold', Helvetica, Arial, sans-serif;
		}
		label {
			font-size: 1rem;
			font-family: 'proximanova-reg', Helvetica, Arial, sans-serif;
			cursor: pointer;
		}
	</style>

</head>
<body>

	<header>
		<div class="container text-center">
			<img src="img/logo_color.svg" alt="Gundry MD" title="Gundry MD">
		</div>
	</header>

	<main>
		<div class="container">
			<div class="col">
				<form id='survey' action='secure-order.php' method='post'>
					<ol>
						<li><span>Are you a...</span>
							<br>
							<input type='radio' name='sexM' value='M' id="sexM" /><label for="sexM">Man</label><br>
							<input type='radio' name='sexW' value='W' id="sexW" /><label for="sexW">Woman</label>
						</li>
						<li><span>How old are you?</span>
							<br>
							<input type='radio' name='age' value='under 30' id="age29" /><label for="age29">under 30</label><br>
							<input type='radio' name='age' value='30-39' id="age30" /><label for="age30">30 - 39</label><br>
							<input type='radio' name='age' value='40-49' id="age40" /><label for="age40">40 - 49</label><br>
							<input type='radio' name='age' value='50-59' id="age50" /><label for="age50">50 - 59</label><br>
							<input type='radio' name='age' value='over 59' id="age59" /><label for="age59">over 59</label>
						</li>
						<li><span>Why do you want PrebioThrive?</span>
							<br>
							<div class="row">
								<div class="col-12 col-lg-4">
									<input type='checkbox' name='problems1' value='Brain Fog' id="brain" /><label for="brain"> I want more energy</label><br>
									<input type='checkbox' name='problems2' value='Dizziness' id="dizz" /><label for="dizz"> I want better digestion</label><br>
									<input type='checkbox' name='problems3' value='Weight Gain' id="weight" /><label for="weight"> I want better sleep</label><br>
									<input type='checkbox' name='problems4' value='Stress' id="stress" /><label for="stress"> I want the antioxidant benefits</label>
								</div>
								<div class="col-12 col-lg-4">
									<input type='checkbox' name='problems5' value='Poor Sleep' id="sleep" /><label for="sleep"> I have high cholesterol</label><br>
									<input type='checkbox' name='problems6' value='Soreness' id="sore" /><label for="sore"> I have high blood pressure</label><br>
									<input type='checkbox' name='problems7' value='Bad Circulation' id="circ" /><label for="circ"> I have joint pain</label><br>
									<input type='checkbox' name='problems8' value='Feeling Older' id="older" /><label for="older"> I want to feel younger</label>
								</div>
							</div>
						</li>
						<input type='submit' id='surveySubmit' class="cta" value='Next Step'></input>
						<p><a href="secure-order.php">Skip this step</a></p>
					</ol>
				</form>
			</div>
		</div>
	</main>

<!--
	<div class='wrapper'>
		<section class="main" id='surveyMain'>
			<div id='surveyContainer' class="container">
				<form id='survey' action='prebiothrive/order.php' method='post'>
					<ol>
						<li><h2>Are you a...</h2>
							<input type='radio' name='sex' value='M' id="sexM" /><label for="sexM">Man</label> or 
							<input type='radio' name='sex' value='W' id="sexW" /><label for="sexW">Woman</label>
						</li>
						<li><h2>How old are you?</h2>
							<input type='radio' name='age' value='under 30' id="age30" /><label for="age29">under 30</label><br>
							<input type='radio' name='age' value='30-39' id="age30" /><label for="age30">30 - 39</label><br>
							<input type='radio' name='age' value='40-49' id="age40" /><label for="age40">40 - 49</label><br>
							<input type='radio' name='age' value='50-59' id="age50" /><label for="age50">50 - 59</label><br>
							<input type='radio' name='age' value='over 59' id="age59" /><label for="age59">over 59</label>
						</li>
						<li><h2>Why do you want PrebioThrive?<h2>
							<input type='checkbox' name='problems1' value='Brain Fog' id="brain" /><label for="brain"> I want more energy</label><br>
							<input type='checkbox' name='problems2' value='Dizziness' id="dizz" /><label for="dizz"> I want better digestion</label><br>
							<input type='checkbox' name='problems3' value='Weight Gain' id="weight" /><label for="weight"> I want better sleep</label><br>
							<input type='checkbox' name='problems4' value='Stress' id="stress" /><label for="stress"> I want the antioxidant benefits</label><br>
							<input type='checkbox' name='problems5' value='Poor Sleep' id="sleep" /><label for="sleep"> I have high cholesterol</label><br>
							<input type='checkbox' name='problems6' value='Soreness' id="sore" /><label for="sore"> I have high blood pressure</label><br>
							<input type='checkbox' name='problems7' value='Bad Circulation' id="circ" /><label for="circ"> I have joint pain</label><br>
							<input type='checkbox' name='problems8' value='Feeling Older' id="older" /><label for="older"> I want to feel younger</label><br>
						</li>
						<input type='submit' id='surveySubmit' value='Next Step'></input>
						<p><a href="prebiothrive/order.php">Skip this step</a></p>
					</ol>
				</form>
			</div>
		</section>
	</div>
-->
</body>
</html>	