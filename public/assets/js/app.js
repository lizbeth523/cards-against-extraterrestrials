$(document).ready(function() {
	var Category = function() {
	this.options = ["_____? There's an app for that."/*, "Why can't I sleep at night?", "What's that smell?", "I got 99 problems, but _____ ain't one.", "Maybe she's born with it. Maybe it's _____.", "What's the next Happy Meal toy?",
		"Anthropologists have recently discovered a primitive tribe that worships _____.", "It's a pity that kids these days are all getting involved with _____", "During Picasso's often-overlooked Brown Period, he produced hundreds of paintings of _____.",
		"Alternative medicine is now embracing the curative powers of _____.", "What's that sound?", "What ended my last relationship?", "MTV's new reality show features eight washed-up celebrities living with _____.", "I drink to forget _____.",
		"I'm sorry, Professor, but I couldn't complete my homework because of _____.", "What is Batman's guilty pleasure?", "This is the way the world ends, not with a bang but with _____.", "What's a girl's best friend?",
		"TSA guidelines prohibit _____ on airplanes.", "_____. That's how I want to die.", "For my next trick, I will pull a rabbit out of _____.", "In the new Disney Channel Original Movie, Hannah Montana struggles with _____ for the first time.",
		"Drinking is a slippery slope that leads to _____.", "What does Dick Cheney prefer?", "Dear Abby, I'm having some trouble with _____ and would like your advice.", "Instead of coal, Santa now gives the bad children _____.", "Who's the most emo?",
		"In 1,000 years, when paper is but a distant memory, _____ will be our currency.", "What's the next superhero/sidekick duo?", "In M. Night Shyamalan's new movie, Bruce Willis discovers that he had really been _____ all along.",
		"A romantic candlelit dinner would be incomplete without _____.", "_____. Betcha can't have just one!", "White people like _____.", "_____. High five, bro.", "Next from J.K. Rowling: Harry Potter and the Chamber of _____.", 
		"BILLY MAYS HERE FOR _____.", "In a world ravaged by war, our only solace is _____.", "War! What is it good for?", "Black people like _____", "During sex, I like to think about _____.", "What are my parents hiding from me?",
		"What will always get you laid?", "In L.A. County Jail, word is you can trade 200 cigarettes for _____.", "What did I bring back from Mexico?", "What don't you want to find in your Chinese food?", "What will I bring back in time to convince people that I am a powerful wizard?",
		"How am I maintaining my relationship status?", "_____. It's a trap!", "Coming to Broadway this season, _____: The Musical.", "While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on _____.",
		"After the earthquake, Sean Penn brought _____ to the people of Haiti.", "Next on ESPN2, the World Series of _____.", "Step 1: _____. Step 2: Profit.", "Rumor has it that Vladimimr Putin's favorite dish is stuffed _____.", "But before I kill you, Mr. Bond, I must show you _____.",
		"What gives me uncontrollable gas?", "What do old people smell like?", "The class field trip was completely ruined by _____.", "When Pharaoh remained unmoved, Moses called down a Plague of _____.", "What's my secret power?", "What's there a ton of in heaven?",
		"What would grandma find disturbing, yet oddly charming?", "What did the U.S. airdrop to the children of Afghanistan?", "What helps Obama unwind?", "What did Vin Diesel eat for dinner?", "_____: good to the last drop.", "Why am I sticky?", "What gets better with age?",
		"_____: kid-tested, mother-approved.", "What's the crustiest?", "What's Teach for America using to inspire inner city students to succeed?", "Studies show that lab rats navigate mazes 50% faster after being exposed to _____.",
		"Life for American Indians was forever changed when the White Man introduced them to _____.", "I do not know with what weapons World War III will be fought, but World War IV will be fought with _____.", "Why do I hurt all over?",
		"What am I giving up for Lent?", "In Michael Jackson's final moments, he thought about _____.", "In an attempt to reach a wider audience, the Smithsonian Museum of Natural History has opened an interactive exhibit on _____.", 
		"When I am President of the United States, I will create the Department of _____.", "Lifetime presents _____, the story of my life.", "When I am a billionaire, I shall erect a 50-foot status to commemorate _____.", "When I was tripping on acid, I saw _____.",
		"That's right, I killed Kenny. How you ask? _____.", "What's my anti-drug?", "What never fails to liven up the party?", "What's the new fad diet?", "Major League Baseball has banned _____ for giving players an unfair advantage.",
		"Because of my investment in Bitcoin, soon I'll be able to afford _____.", "Thanks to the sharing economy, I can now make money renting out my _____.", "What's my startup disrupting?", "The inspiration for my startup"*/];

		this.index = Math.floor(Math.random() * this.options.length);
		this.text = this.options[this.index];
	};

	var Response = function() {
		this.options = ["Flying sex snakes", "Michelle Obama's arms", "German dungeon porn", "White people", "Getting so angry that you pop a boner", "Tasteful sideboob", "Praying the gay away", "Two midgets shitting into a bucket",
			"MechaHitler", "Being a motherfucking sorcerer", "A disappointing birthday party", "Puppies!", "A windmill full of corpses", "Guys who don't call", "Racially-biased SAT questions", "Dying", "Steven Hawking talking dirty",
			"Being on fire", "A lifetime of sadness", "An erection that lasts longer than four hours", "AIDS", "Same-sex ice dancing", "Glenn Beck catching his scrotum on a curtain hook", "The Rapture", "Pterpdactyl eggs",
			"Crippling debt", "Eugenics", "Exchanging pleasantries", "Dying of dysentery", "Roofies", "Getting naked and watching Nickelodeon", "The forbidden fruit", "Republicans", "Democrats", "The Big Bang", "Anal beads",
			"Amputees", "Men", "Surprise sex!", "Kim Jong-un", "Concealing a boner", "Agriculture", "Glenn Beck being harried by a swarm of buzzards", "Making a pouty face", "A salty surprise", "The Jews", "Charisma", "YOU MUST CONSTRUCT ADDITIONAL PYLONS",
			"Panda sex", "Taking off your shirt", "A drive-by shooting", "Ronald Reagan", "Morgan Freeman's voice", "Breaking out into song and dance", "Jewish fraternities", "Dead babies", "Masturbation", "Hormone injections",
			"All-you-can-eat shrimp for $4.99", "Incest", "Scalping", "Soup that is too hot", "The Übermensch", "Nazis", "Tom Cruise", "Stifling a giggle at the mention of Hutus and Tutsis", "Edible underpants", "The Hustle", "A Super Soaker full of cat pee",
			"Figgy pudding", "Object permanence", "Consultants", "Intelligent design", "Nocturnal emissions", "Uppercuts", "Being marginalized", "The profoundly handicapped", "Obesity", "Chutzpah", "Unfathomable stupidity", "Repression",
			"Attitude", "Passable transvestites", "Party poopers", "The American Dream", "Child Beauty Pageants", "Puberty", "Testicular torsion", "The folly of man", "Nickelback", "Swooping", "Goats eating cans", "The KKK", "The Black Panthers",
			"Kamikaze pilots", "Horrifying laser hair removal accidents", "Adderall", "A look-see", "Doing the right thing", "The taint; the grundle; the fleshy fun-bridge", "The invisible hand", "Lactation", "Pabst Blue Ribbon", "Powerful thighs",
			"Saxophone solos", "The gays", "A middle-aged man on roller skates", "A foul mouth", "That thing that electrocutes your abs", "Heteronormativity", "Cuddling", "Coat hanger abortions", "A big hoopla about nothing", "Boogers",
			"A hot mess", "Raptor attacks", "My collection of high-tech sex toys", "Fear itself", "Bees?", "Getting drunk on mouthwash", "Sniffing glue", "Oversized lollipops", "An icepick lobotomy", "Being rich", "Friends with benefits",
			"Teaching a robot to love", "Women's suffrage", "Me time", "The heart of a child", "Smallpox blankets", "The clitoris", "John Wilkes Booth", "The glass ceiling", "Sarah Palin", "Sexy pillow fights", "Yeast", "Full frontal nudity",
			"Parting the Red Sea", "A Bop It", "Michael Jackson", "Team-building exercises", "Harry Potter erotica", "Authentic Mexican cuisine", "Frolicking", "Sexting", "Grandma", "Not giving a shit about the Third World",
			"Licking things to claim them as your own", "Genghis Khan", "The hardworking Mexican", "RoboCop", "My relationship status", "Scrubbing under the folds", "Porn stars", "Horse meat", "Sunshine and rainbows",
			"Expecting a burp and vomiting on the floor", "Barack Obama", "Spontaneous human combustion", "Natural selection", "Mouth herpes", "Flash flooding", "Goblins", "A monkey smoking a cigar", "Spectacular abs", "A good sniff",
			"Wiping her butt", "The Three-Fifths compromise", "Pedophiles", "Doin' it in the butt", "Being fabulous", "Mathletes", "Wearing underwear inside-out to avoid doing laundry", "Nipple blades", "An M. Night Shyamalan plot twist",
			"A bag of magic beans", "Vigorous jazz hands", "A defective condom", "Skeletor", "Vikings", "Leaving an awkward voicemail", "Teenage pregnancy", "Dead parents", "Hot cheese", "My sex life", "A mopey zoo lion", "Assless chaps",
			"Riding off into the sunset", "Lance Armstrong's missing testicle", "Sweet, sweet vengeance", "Genital piercings", "Keg stands", "Darth Vader", "Viagra", "Necrophilia", "A really cool hat", "Toni Morrison's vagina",
			"An Oedipus complex", "The Tempur-Pedic Swedish Sleep System", "Preteens", "Dick fingers", "A cooler full of organs", "Shapeshifters", "The Care Bear Stare", "Erectile dysfunction", "Keanu Reeves", "The Virginia Tech Massacre",
			"The Underground Railroad", "The chronic", "Queefing", "Heartwarming orphans", "A thermonuclear detonation", "Cheating in the Special Olympics", "Tangled Slinkys", "A moment of silence", "Civilian casualties", "Catapults",
			"Sharing needles", "Ethnic cleansing", "Emotions", "Children on leashes", "Balls", "Homeless people", "Eating all of the cookies before the AIDS bake-sale", "Old-people smell", "Farting and walking away", "The inevitable heat death of the universe",
			"My humps", "The violation of our most basic human rights", "Fingering", "The placenta", "The Rev. Dr. Martin Luther King, Jr.", "Leprosy", "Sperm whales", "Multiple stab wounds", "Flightless birds", "Grave robbing",
			"Home video of Oprah sobbing into a Lean Cuisine", "Oompa-Loompas", "A murder most foul", "Tentacle porn", "Daddy issues", "Bill Nye the Science Guy", "Peeing a little bit", "The miracle of childbirth", '"Tweeting"', 
			"Another goddamn vampire movie", "Britney Spears at 55", "New Age music", "The Make-A-Wish Foundation", "Firing a rifle into the air while balls deep in a squealing hog", "Active listening", "Nicolas Cage", "72 virgins", "Stranger danger",
			"Hope", "A gassy antelope", "BATMAN!!!", "Chivalry", "Passing a kidney stone", "Black people", "Natalie Portman", "A mime having a stroke", "Classist undertones", "Sean Penn", "A mating display", "The Holy Bible", "Hot Pockets", "A sad handjob",
			"Pulling out", "Serfdom", "Pixelated bukkake", "Dropping a chandelier on your enemies and riding the rope up", "Jew-fros", "Waiting 'til marriage", "Euphoria by Calvin Klein", "The World of Warcraft", "Lunchables", "The Kool-Aid Man",
			"The Trail of Tears", "Self-loathing", "A falcon with a cap on its head", "Historically black colleges", "Not reciprocating oral sex", "Global warming", "Ghosts", "World peace", "A can of whoop-ass", "The Dance of the Sugar Plum Fairy",
			"A zesty breakfast burrito", "Switching to Geico", "Aaron Burr", "Picking up girls at the abortion clinic", "Land mines", "Former President George W. Bush", "Geese", "Mutually-assured destruction", "College", "Date Rape", "Bling",
			"A gentle caress of the inner thigh", "A time travel paradox", "Seppuku", "Poor life choices", "Waking up half-naked in a Denny's parking lot", "Italians", "GoGurt", "Finger painting", "Robert Downey, Jr.", "My soul", "Smegma",
			"Embryonic stem cells", "The South", "Christopher Walken", "Gloryholes", "Pretending to care", "Public ridicule", "A tiny horse", "Arnold Schwarzenegger", "A stray pube", "Jerking off into a pool of children's tears", "Child abuse",
			"Glenn Beck convulsively vomiting as a brood of crab spiders hatches in his brain and erupts from his tear ducts", "Menstruation", "A sassy black woman", "Re-gifting", "Penis envy", "A sausage festival", "Getting really high", "Drinking alone",
			"Too much hair gel", "Hulk Hogan", "Overcompensation", "Foreskin", "Free samples", "Shaquille O'Neal's acting career", "Five-Dollar Footlongs", "Whipping it out", "A snapping turtle biting the tip of your penis",
			"Muhammad (Praise Be Unto Him)", "Half-assed foreplay", "Dental dams", "Being a dick to children", "Famine", "Chainsaws for hands", "A Gypsy curse", "AXE Body Spray", "The Force", "Explosions", "Cybernetic enhancements",
			"Customer service representatives", "White privilege", "Gandhi", "Road head", "God", "Poorly-timed Holocaust jokes", "8 oz. of sweet Mexican black-tar heroin", "Judge Judy", "The Little Engine That Could", "Altar boys", "Mr. Clean, right behind you",
			"Vehicular manslaughter", "Dwarf tossing", "Friction", "Lady Gaga", "Scientology", "Justin Bieber", "A death ray", "Vigilante justice", "The Pope", "A sea of troubles", "Alcoholism", "Poor people", "A fetus", "Women in yogurt commercials",
			"Exactly what you'd expect", "Flesh-eating bacteria", "My genitals", "A balanced breakfast", "Dick Cheney", "Lockjaw", "Natural male enhancement", "Take-backsies", "Winking at old people", "Opposable thumbs", "Passive-aggressive Post-it notes",
			"Inappropriate yodeling", "Golden showers", "Racism", "Copping a feel", "Auschwitz", "Elderly Japanese men", "Raping and pillaging", "Kids with ass cancer", "Pictures of boobs", "The homosexual agenda", "A homoerotic volleyball montage", 
			"Sexual tension", "Hurricane Katrina", "Fiery poops", "Science", "Dry heaving", "Cards Against Humanity", "Fancy Feast", "A bleached asshole", "Lumberjack fantasies", "American Gladiators", "Autocannibalism", "Sean Connery", "William Shatner",
			"Domino's Oreo Dessert Pizza", "An asymmetric boob job", "Centaurs", "A micropenis", "Asians who aren't good at math", "The milk man", "Waterboarding", "Wifely duties", "Loose lips", "The Blood of Christ", "Actually taking candy from a baby",
			"The token minority", "Jibber-jabber", "A brain tumor", "Bingeing and purging", "A clandestine butt scratch", "The Chinese gymnastics team", "Prancing", "The Hamburglar", "Police brutality", "Man meat", "Forgetting the Alamo",
			"Eating the last known bison", "Crystal meth", "Booby-trapping the house to foil burglars", "My inner demons", "Third base", "Soiling oneself", "Laying an egg", "Giving 110%", "Hot people", "Friendly fire", "Count Chocula",
			"Pac-Man uncontrollably guzzling cum", "Estrogen", "My vagina", "Kanye West", "A robust mongoloid", "The Donald Trump Seal of Approval", "The true meaning of Christmas", "Her Royal Highness, Queen Elizabeth II", "An honest cop with nothing left to lose",
			"Feeding Rosie O'Donnel", "The Amish", "The terrorists", "When you fart and a little bit comes out", "Pooping back and forth. Forever.", "Friends who eat all the snacks", "Cockfights", "Bitches", "Seduction"];

		this.index = Math.floor(Math.random() * this.options.length);
		this.text = this.options[this.index];
	};

	var setupGame = function() {
		var category = new Category();
		var numResponseOptions = 6;
		var responses = getResponses(numResponseOptions);

		// Send the category to the server
		//$.ajax("/api/update/category", {
//			type: "POST",
//			data: category.text
//		}).then ( function() {
//			console.log(category.text + " was sent to the server");
//			// Reload the page to get the updated list
//			location.reload();
//		});
		$("#category").text(category.text);
		placeResponseCards(responses, numResponseOptions);
		
	};

	var getResponses = function(num) {
		var responses = [];
		var response;

		for (var i = 0; i < num; i++) {
			response = new Response();
			responses[i] = response.text;
		}

		return responses;
	};

	var placeResponseCards = function(responses, numResponses) {
		$("#0").text(responses[0]);
		$("#1").text(responses[1]);
		$("#2").text(responses[2]);
		$("#3").text(responses[3]);
		$("#4").text(responses[4]);
		$("#5").text(responses[5]);
		// $("#6").text(responses[6]);
		// $("#7").text(responses[7]);
		// $("#8").text(responses[8]);
		// $("#9").text(responses[9]);
	}; 
	
	// Start game
	setupGame();

	$(".response-card").click(function () {
		var cardText = $(this).text();

		var responseText = cardText.split("1");
		var response = responseText[0].trim();

		var newCard = {
			card_text: response
		}

		$.ajax("/api/data", {
    		type: "POST",
    		data: newCard
    	}).then(
      		function() {
        		console.log("created new card");
        		// Reload the page to get the updated list
        		location.reload();
      		});
	});
});

