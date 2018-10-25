

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500,700,700i" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossorigin="anonymous">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/motion-css-master/motion.min.css">
</head>
<body>
    <header>
        
    
        <div class="container">
                <nav id="nav1" class="animation fade-in-down">
                    <div id="logo">
                        <img src="../PICS/188730809.svg" alt="">
                    </div>
                    <div id="navigation">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="engagement.html">Engagement</a></li>
                        </ul>
                    </div>
                </nav>

            <nav class="navbar navbar-expand-lg navbar-light " id="nav2">
                <a class="navbar-brand" href="#"> <div id="logo">
                        <img src="../PICS/188730809.svg" alt="">
                    </div>
                </a>
                <button id="navButton" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="engagement.html">Engagement <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="mailto:office@rokada.io">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

    
    <h2 id="contactH2">Send Message</h2>
    <hr>
    <form method="post" name="myemailform" action="" id="contactForm">
            
        	<label for="name">
                <input type="text" name="name" id="name" placeholder="Your Name">
            </label>
            <br>
        	<label for="email">
                <input type="text" name="email" id="email" placeholder="Email" require>
            </label>
            <br>
            
        	<label for="message">
                <p>Message:</p>
                <textarea name="msg" id="message" rows="6"></textarea>
            </label>
            <br>
            <input type="submit" name='submit' value="Send Form" id="submit">
    </form>

    <?php
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$msg=$_POST['msg'];

		$to='urosmijatovic87@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
		$message="Name :".$name."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h4 id="successH4">Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h4>";
		}
		else{
			echo "<h4 id="wrongH4">Something went wrong!</h4>";
		}
	}
?>
    
    

    <footer id="contactFooter">
            <div class="container">
                <div class="footerDiv">
                    <div class="adrressLocation">
                        <img src="../PICS/LogoOnDark (1).svg" alt="">
                        <!-- <p>office@rokada.io</p>
                        <p>+381 60 4400 308</p>
                        <p>13 Svetozara Corovica</p>
                        <p>Serbia, Belgrade 11000</p> -->
                    </div>
    
                    <div class="footerCards">
                        <p>office@rokada.io</p>
                        <p>+381 60 4400 308</p>
                        <!-- <h5>ABOUT</h5>
                        <p>TEAM</p>
                        <p>OUR WORK</p>
                        <p><a href="mailto:office@rokada.io" class="contactA">CONTACT</a></p> -->
                    </div>
    
                    <div class="footerCards">
                        <p>13 Svetozara Corovica</p>
                        <p>Serbia, Belgrade 11000</p>
                        <!-- <h5>PRODUCTS</h5>
                        <p>CONSULTING</p>
                        <p>UX INTERVENTION</p>
                        <p>UX/UI OVERHAUL</p>
                        <p>ENTERPRISE</p> -->
                    </div>
    
                    <!-- <div class="footerCards">
                        <h5>PRESS</h5>
                        <p>BROCHURES</p>
                        <p>PRESS KIT</p>
                    </div> -->
    
                    <div class="socialNetworkIcons">
                        <a href="#"><img src="../PICS/Group 20.svg" alt=""></a>
                        <a href="#"><img src="../PICS/Group 21.svg" alt=""></a>
                        <a href="#"><img src="../PICS/Group 22.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </footer>
</body>
</html>