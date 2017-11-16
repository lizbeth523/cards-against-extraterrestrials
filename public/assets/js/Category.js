var Category = function() {
	this.options = ["_____? There's an app for that.", "Why can't I sleep at night?", "What's that smell?", "I got 99 problems, but _____ ain't one.", "Maybe she's born with it. Maybe it's _____.", "What's the next Happy Meal toy?",
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
		"That's right, I killed Kenny. How you ask? _____.", "What's my anti-drug?", "What never fails to liven up the party?", "What's the new fad diet?", "Major League Baseball has banned _____ for giving players an unfair advantage."];

	this.index = Math.floor(Math.random() * this.options.length);
	this.text = this.options[this.index];
};

module.exports = Category;