import React from 'react'
import './Cooking.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from '../Footer/Footer';

const Cooking = () => {
  return (
    <>
       <div className='cookingback'>
              
       <CardGroup className='cardcook_group'>
      <Card style={{border: 'none'}}>
        
        <Card.Body >
          
             <Card.Text className='text_cook'> 
            <p >
            There's a lot of knowledge and content everywhere, but it's really hard to find quality stuff that interests you. I thought I'd maintain an eclectic set of content that I read and watch regularly or have been immensely moved or educated by. The list is a constant work in progress.</p>
             </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>

    <hr className='hr_class' />

    <br />

    <div className='contents'>

        
         <a href="#reads">Reads</a> 
         <a href="" target="blank">Humour</a> 
         <a href="" target="blank">News</a>
         <a href="" target="blank">Books</a>
         <a href="" target="blank">Videos</a>
             <br /> <br />
         <a href="" target="blank">Funny videos</a>
         <a href="" target="blank">Documentaries</a>
         <a href="" target="blank">Academia</a>
         <a href="" target="blank">TV Serial</a>
         <a href="" target="blank">Podcasts</a>
             
   </div>
    
     <br />

   <hr className='hr_class' />
          
          <br />


       <div className='reads' id='reads' style={{textAlign: 'center'}}>
         <h2>Stimulating Reads</h2>
         <h6>Aggregations of interesting and informative pieces of writing.</h6>
              
              <br />

           <a href="https://www.reddit.com/" target="blank"><h4>Reddit</h4></a>   
           <p>I'd imagine most people reading this know what Reddit is. I'm asking you to use it. I've personally started using Reddit lately, and it's a rabbit-hole of very good content, very interesting data, and extremely helpful spam-free advice. I'm still a Reddit noob, but some of my favorite subreddits are r/fitness, r/science, r/tifu, r/dataisbeautiful, r/books and r/todayilearned.</p>
           <br />
           <a href="https://www.sanjaycomedy.com/blog/" target="blank"><h4>Sanjay Manaktala</h4></a>   
           <p>

Sanjay's writings have this incredible ability to strike a chord with readers, no matter where they come from. It's like a universal language of laughter and wisdom.

And he doesn't shy away from addressing the realities of life – his writings often touch on the human experience, relationships, and personal growth. It's like a dose of humor with a sprinkle of life lessons.</p>
           <br />
           <a href="https://slatestarcodex.com/" target="blank"><h4>SlateStarCodex</h4></a>   
           <p>A blog by Scott Alexander, a psychiatrist practicing in the US Midwest about science, medicine, philosophy, politics, and futurism.</p>
           <br />
           <a href="https://chomsky.info/articles/" target="blank"><h4>Noam Chomsky's Articles</h4></a>   
           <p>Words from possibly the world's leading intellectual. His thoughts on media, government, policy, economy, and linguistics are a formative influence.</p>
           <br />
           <a href="https://www.valueplays.net/wp-content/uploads/The-Best-of-Charlie-Munger-1994-2011.pdf" target="blank"><h4>Essays and Speeches by Charlie Munger</h4></a>   
           <p>The long time friend and advisor to Warren Buffet speaks and writes of economics, finance, psychology, and overall worldly wisdom.
</p>
           <br />
           <a href="https://www.paulgraham.com/articles" target="blank"><h4>Paul Graham's Essays</h4></a>   
           <p>Venture capitalist and founder of Y Combinator writes the simplest yet most captivating essays about how to live life, startups, knowledge, and technology.</p>
           <br />
           <a href="https://fs.blog/" target="blank"><h4>Farnam Street</h4></a>   
           <p>A blog that helps you go to bed smarter than you woke up. It speaks of philosophy, wisdom, happiness, knowledge and meaning.</p>
           <br />
           <a href="https://link.springer.com/article/10.1007/s00355-021-01321-2#:~:text=Parfit%20(1984)%20originally%20formulated%20the,according%20to%20some%20social%20ordering." target="blank"><h4>Repugnant Conclusions</h4></a>   
           <p>A blog by a Harvard Divinity School students on reasoning about the ethics and morality of things, instead or arbitrarily accepting and rejecting them based on social norms. He deals with issues like bestiality, abortion, necrophilia, pedophilia, and more.</p>
           <br />
           <a href="https://krebsonsecurity.com/" target="blank"><h4>Krebs on Security</h4></a>   
           <p>Brian Krebs is a former Washington Post reporter and a long term veteran reporting on computer security who writes non-technically about current major security issues, exploits and hacks.</p>
           <br />
           <a href="https://blog.samaltman.com/" target="blank"><h4>Sam Altman's Blog</h4></a>   
           <p>Venture capitalist and lecturer of the Stanford course on "How To Start a Startup" speaks about startups, technology and entrepreneurship.
</p>
           <br />
       </div>

        <br />
       <hr className='hr_class' />
         
       <br />
       <br />

       <div className='reads' id='reads' style={{textAlign: 'center'}}>
         <h2>Comics and Humour</h2>
         <h6>One stop source for humor when you can't watch a video.</h6>
              
              <br />

           <a href="https://xkcd.com/" target="blank"><h4>xkcd</h4></a>   
           <p>Randall Munroe's comic strip about technology, science, mathematics and relationships. Possibly read by every technologist, scientist, mathematician, and more.</p>
           <br />
           <a href="https://www.smbc-comics.com/" target="blank"><h4>SMBC</h4></a>   
           <p>Saturday Morning Breakfast Cereal (SMBC) is a comic strip that features atheism, romance, science, research and the meaning of life.</p>
           <br />
           <a href="https://9gag.com/" target="blank"><h4>9gag</h4></a>   
           <p>From memes to stories, funny pictures to cute things, GIFs to NSFW stuff, and even videos, 9gag has all sorts of miscellaneous humour.</p>
           <br />
           <a href="https://theoatmeal.com/" target="blank"><h4>The Oatmeal</h4></a>   
           <p>Home to famous Nikola Tesla and Mantis Shrimp comics, The Oatmeal, created in 2009 by Matthew Inman, covers an eclectic range of topics. Inman says it typically takes 7-8 hours of research to produce one comic.</p>
           <br />
           <a href="https://www.cheezburger.com/" target="blank"><h4>Cheezburger</h4></a>   
           <p>The purrfect internet hub of cat memes and humor! A place where feline charm meets hilarious captions, creating an endless feast of laughter. It's a must-visit for cat lovers and meme enthusiasts seeking a daily dose of cuteness and giggles. Meow-velous fun awaits! </p>
           <br />
           <a href="https://www.youtube.com/collegehumor" target="blank"><h4>CollegeHumor</h4></a>   
           <p>This is a playground of comedic content, covering everything from relatable college life to pop culture parodies. With a blend of funny videos, articles, and memes, it's a virtual hangout for those seeking humor with a dash of academic flair.</p>
           <br />
           <a href="https://www.evilmilk.com/" target="blank"><h4>Evil Milk</h4></a>   
           <p>The diabolically funny meme haven! A collection of wickedly entertaining content, guaranteed to make you snicker and smile. Prepare for a devilishly good time!</p>
           <br />
          
       </div>
       <br />
       <hr className='hr_class' />
         
       <br />
       <br />

       <div className='reads' id='reads' style={{textAlign: 'center'}}>
         <h2>News and Magazines</h2>
         <h6>There's too much bad media everywhere, and it's hard to get the "real story" in well-phrased readable form. These guys do a good job. I personally use Longform to consume news from multiple sources, and highly recommend it.
         </h6>
              
              <br />

           <a href="https://www.wsj.com/" target="blank"><h4>The Wall Street Journal</h4></a>   
           <p>The top of the line source for business and economic news.</p>
           <br />
           <a href="" target="blank"><h4>Quartz</h4></a>   
           <p>Quartz is a web-native news publication that is the first infinite-scroll news provider. The quality density is high, and the scroll format keeps you hooked.</p>
           <br />
           <a href="https://www.firstpost.com/" target="blank"><h4>Firstpost</h4></a>   
           <p>A trailblazing web-native news platform that keeps you endlessly informed. As one of the pioneers of the infinite-scroll format, it's a seamless and captivating news provider. With a high density of top-notch journalism, you'll stay hooked and up-to-date on all the latest happenings. </p>
           <br />
           <a href="https://www.thejaipurdialogues.com/" target="blank"><h4>Jaipur Dialogues </h4></a>   
           <p>An intellectual rendezvous curated by author Sanjay Dixit. A platform where insightful discussions flow endlessly, stimulating your mind with diverse perspectives. With profound ideas and engaging dialogues, you'll find yourself immersed in a world of knowledge.</p>
           <br />
           <a href="https://asianatimes.com/" target="blank"><h4>Asiana Times</h4></a>   
           <p>A dynamic online news media that bridges cultures. Stay informed with captivating stories and events from across the World. Immerse yourself in high-quality journalism and diverse perspectives, all in an easily accessible digital format. Explore the world of Asiana Times and unlock the essence of World's unfolding narratives!</p>
           <br />
           <a href="https://lagatar24.com/" target="blank"><h4>Lagatar English</h4></a>   
           <p>Jharkhand's local paper connecting communities. Discover the latest news and stories from the region with this reliable source of information. Stay updated and engaged with the heart of Jharkhand through Lagatar English! </p>
           <br />
           <a href="https://www.autocarindia.com/" target="blank"><h4>Autocar India</h4></a>   
           <p>he ultimate ride for car enthusiasts! Unleash your passion with the latest auto reviews, news, and road adventures. Buckle up for a thrilling automotive journey with this one!</p>
           <br />
           <a href="https://www.topgearmag.in/" target="blank"><h4>Top Gear</h4></a>   
           <p>Your high-octane ticket to car enthusiasts' paradise! Packed with thrilling reviews, epic journeys, and all things automotive. Buckle up for an adrenaline-pumping read! </p>
           <br />
           <a href="https://www.carsauce.com/" target="blank"><h4>CarSauce</h4></a>   
           <p> The ultimate destination for car aficionados! Fuel your passion with in-depth reviews, jaw-dropping car features, and adrenaline-pumping adventures. Get ready to dive into the sauce of automotive excitement! </p>
           <br />
           <a href="https://motoroctane.com/" target="blank"><h4>MotorOctane</h4></a>   
           <p>The pulse of India's automotive passion on YouTube! Fueling your love for cars with in-depth reviews, thrilling test drives, and cutting-edge tech updates. </p>
           <br />
       </div>
       <br />
       <hr className='hr_class' />
         
       <br />
       <br />

       <div className='reads' id='reads' style={{textAlign: 'center'}}>
         <h2>Books</h2>
      
              
              <br />

           <a href="https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow" target="blank"><h4>Thinking Fast and Slow </h4></a>   
           <p>Daniel Kahneman and Amos Tversky were Israeli psychologists who's work on irrationality of decision making and behavioral economics went on to win the Nobel Prize in Economics in 2002. The book covers the research he did in all three parts of his career - on cognitive biases, on prospect theory and on happiness.</p>
           <br />
           <a href="https://www.amazon.in/Unplugged-Alpha-Bullsh-Guide-Winning-ebook/dp/B08P3WBV2L" target="blank"><h4>The Unplugged Alpha</h4></a>   
           <p>Entrepreneurship is about managing risk. In the Unplugged Alpha, Rich Cooper brings his years of experience managing risk to the world of dating and relationships. Rather than checking out of the sexual market like men going their own way (MGTOW), Rich gives solid advice on how to be a man in the modern sexual marketplace.</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/Zero_to_One" target="blank"><h4>Zero to One</h4></a>   
           <p>This thin book seemed both small and abnormally huge at the same time. It vacillated between talking about building a startup company that could dominate a small market segment and discussing innovation as the salvation of the world.</p>
           <br />
           <a href="https://fs.blog/the-hard-thing-about-hard-things/" target="blank"><h4>The Hard Things About Hard Things</h4></a>   
           <p>Dives into the psychology of being a CEO and also full of practical business advice for managing a company during challenging times. This is the kind of book I put on my "to re-read" shelf while I'm reading it. </p>
           <br />
           <a href="https://www.jack-donovan.com/sowilo/books/the-way-of-men/" target="blank"><h4>The Way of Men</h4></a>   
           <p>This book should take its place between the gun rack and self-defense books. While I will not give a full review, as I feel it should be read to full grasp this important piece, I will say that Mr. Donovan has once again hit many nails on the head with all the precision of a Bostitch pneumatic nail-gun. In this world of "politically correct" language and redundant male guilt, Jack not only slashes through the pervasive pantywastism, he gives a clear view in the difference between being a good man and being good AT being a man for starters. One of my favorites thus far is asking what is the Parameter. This book gives a solid and unencumbered view into a subject that would get a many-fold answer if the question was given to men on what it means to be a Man.</p>
           <br />
           <a href="https://ia802200.us.archive.org/19/items/pdfy-TIGwEuUmNnQVm7x7/The%20Way%20Of%20The%20Superior%20Man.pdf" target="blank"><h4>The way of a Superior Man</h4></a>   
           <p>This is one of these books written in a very philosophical way. The way that opens your mind, and you start to perceive things differently. I never understood what it takes to be a superior man. What’s the mindset. I was always the “good guy”. I understood that being the man is having the purpose more important than the relationship. It’s about the understanding of masculine, and feminine energy, and knowing how to deal with them.</p>
           <br />
           <a href="https://penguin.co.in/book/doglapan/" target="blank"><h4>Doglapan</h4></a>   
           <p>After hearing a lot of hype about the book, I read it & totally worth it. The book is written straight from heart with brevity. It is captivating right from beginning till end. With every para, one can now correlate behind the scenes of startup news article.</p>
           <br />
           <a href="https://penguin.co.in/book/energize-your-mind/" target="blank"><h4>Energize your Mind</h4></a>   
           <p>If I am asked about a self-help book  which would cover all the elements of human life - emotions, thoughts, beliefs, just everything, I will now always recommend this book. It's a complete package in itself.</p>
           <br />
           <a href="https://penguin.co.in/book/build-dont-talk/" target="blank"><h4>Build Dont Talk</h4></a>   
           <p>I have been following Raj Shamani from the pandemic his work inspires me more than anything, every day I look for the content so that's the reason I bought this book
             Firstly let me this is completely page Turner as if your scrolling the reels cut to the points easy simple hacks which everyone should learn how to make money, how to grow, how to be successful just simply amazed with the thought that has been put into. Would recommend everyone to read this if you don't know what to do how to start something. I guess this is your book</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/Bhagavad_Gita" target="blank"><h4>Bhagavad Gita</h4></a>   
           <p>I can read this book over and over and still gain so much from it. It contains such timeless truths, especially in light of today, such as,
<i>
"They alone see truly who see the Lord the same in every creature, who see the deathless in the hearts of all that die. Seeing the same Lord everywhere, they do not harm themselves or others. Thus they attain the supreme goal."</i></p>
           <br />
       </div>
       <br />
       <hr className='hr_class' />
         
       <br />
       <br />

       <div className='reads' id='reads' style={{textAlign: 'center'}}>
         <h2>Stirring Videos</h2>
         <h6>A list of stuff that's inspiring, informative, and exceptionally helpful in moulding your worldview.</h6>
              
              <br />

           <a href="https://ed.ted.com/" target="blank"><h4>TED-Ed</h4></a>   
           <p>The best part? They cover a bazillion topics! From history to science, from philosophy to pop culture – they've got it all! It's like a buffet of brainy stuff, and you can just pick whatever you're curious about..</p>
           <br />
           <a href="https://www.youtube.com/@Vsauce" target="blank"><h4>VSauce </h4></a>   
           <p>Alright, so Vsauce is basically a brain-tickling YouTube channel that'll make you go "Whoa, dude!" It's hosted by this awesome dude named Michael, and he's like the guru of mind-bending questions.</p>
           <br />
           <a href="https://www.3blue1brown.com/" target="blank"><h4>3Blue1Brown</h4></a>   
           <p>An up and coming YouTube channel that is one of the few channels to go deep into collegiate-level Math, from Topology to Complex Analysis and more, with exquisite visuals and lucid explanations.</p>
           <br />
           <a href="https://www.youtube.com/@LastWeekTonight" target="blank"><h4>John Oliver's Last Week Tonight</h4></a>   
           <p>The very best of video entertainment ever. John Oliver is my favorite source of news and political satire. He raises and crushes controversial issues.</p>
           <br />
           <a href="https://www.zee5.com/tv-shows/details/jeena-isi-ka-naam-hai-s1/0-6-321/episodes" target="blank"><h4>Jeena Isi ka naam hai</h4></a>   
           <p>The show captures their struggles, achievements, and the moments that shaped them into who they are today. You'll be awestruck by the way Farooq effortlessly brings out the essence of their journeys.

But it's not all about the glitz and glamour – it's about the real stuff, the human stuff. You'll witness laughter, tears, and heartwarming connections that'll tug at your heartstrings</p>
           <br />
           <a href="https://www.ted.com/talks" target="blank"><h4>TED Talks</h4></a>   
           <p>Under twenty minute talks about 'Ideas worth Spreading' ranging in dozens of topics. Features innovation and inspiration.</p>
           <br />
           <a href="https://www.gatewayhouse.in/outsider-debates/" target="blank"><h4>The Outsider Debates</h4></a>   
           <p>A series of debates moderated by prominent journalist Tim Sebastian featuring influential personalities about major issues plaguing India.</p>
           <br />
           <a href="https://inktalks.com/" target="blank"><h4>INK Talks</h4></a>   
           <p>An India-focused extension of TED that brings together from very inspirational talks from the likes of Varun Agarwal, Nikesh Arora, Sheena Iyengar and more.</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/The_Anupam_Kher_Show_%E2%80%93_Kucch_Bhi_Ho_Sakta_Hai" target="blank"><h4>The Anupam Khair Show</h4></a>   
           <p>Picture this: You've got this charming host who's been in the film industry for ages, and he's chatting with all these amazing celebrities and inspiring personalities. It's like a virtual hangout with the coolest people in town!

And guess what? Anupam Kher is the perfect host! He's warm, witty, and knows how to get the juiciest stories out of his guests. Plus, he's got this infectious energy that'll make you feel like you're part of the conversation too.

</p>
           <br />
           <a href="https://www.youtube.com/@nikhil.kamath" target="blank"><h4>Nikhil Kamath</h4></a>   
           <p>Dude, you gotta check out Nikhil Kamath's YouTube channel, it's legit awesome!  He's got all these cool CEOs and like-minded people dropping by for some real talk. They spill the beans on success, business stuff, and even personal growth. If you're into learning from the pros and getting pumped up, this channel is totally the way to go!</p>
           <br />
       </div>
       <br />
       <hr className='hr_class' />
         
       <br />
       <br />

       <div className='reads' id='reads' style={{textAlign: 'center'}}>
         <h2>Entertaining Video Series</h2>
         <h6>Also known as: how to kill time on Youtube.</h6>
              
              <br />

           <a href="https://www.youtube.com/playlist?list=PLJ7SyYToP5wbK0S70CFqE96Wxov_xQ3cm" target="blank"><h4>Pretentious Movie Reviews</h4></a>   
           <p>Hosted by new-age Indians Kanan Gill and Biswa Kalyan Rath, Pretentious Movie Reviews reviews extremely funny old Bollywood movies.</p>
           <br />
           <a href="https://www.youtube.com/@afv" target="blank"><h4>Epic Fails</h4></a>   
           <p>A bunch of random videos of people falling, running into walls, trying to do stunts, and any other physically painful mishap you can imagine that provides an unprecedented amount of sadistic pleasure.</p>
           <br />
           <a href="https://www.youtube.com/channel/UCNJcSUSzUeFm8W9P7UUlSeQ" target="blank"><h4>The Viral Fever</h4></a>   
           <p>TVF is one of the new age comedy acts that do short skits, videos, and satirical takes on various aspects of Indian pop culture.</p>
           <br />
           <a href="https://www.youtube.com/user/allindiabakchod" target="blank"><h4>All India Bakchod</h4></a>   
           <p>AIB is TVF's counterpart. They also do humourous skits and satire on the overarching theme of India.</p>
           <br />
           <a href="https://www.youtube.com/user/jimmykimmellive" target="blank"><h4>Jimmy Kimmel</h4></a>   
           <p>Jimmy Kimmel is a talk show host. His funniest shows involve asking strange questions to the public or asking the audience to record videos of themselves doing his open challenges.</p>
           <br />
           <a href="https://www.youtube.com/channel/UCAov2BBv1ZJav0c_yHEciAw" target="blank"><h4>Samay Rainia</h4></a>   
           <p>Oh, my goodness, Samay Raina is an absolute riot! His comedy and vlogs are like the perfect recipe for a good time add a dash of humor, sprinkle some quirkiness, and boom! You've got yourself a laugh-till-your-stomach-hurts</p>
           <br />
           <a href="https://www.youtube.com/c/Harshgujral" target="blank"><h4>Harsh Gujral</h4></a>   
           <p>6000 ki Russian" is not just a tagline; it's a whole mood that'll make you forget your worries and embrace the laughter.  Dive into Harsh Gujral's world of comedy. </p>
           <br />
           <a href="https://www.youtube.com/@randomchikibumofficial" target="blank"><h4>Rahul Subramanian</h4></a>   
           <p>From relatable everyday observations to the quirks of Indian culture, Rahul's jokes are like bullseyes that hit right in the funny spot! He's a master at finding humor in the simplest things, and you'll find yourself laughing at stuff you never thought could be funny!</p>
           <br />
           <a href="https://www.youtube.com/c/AnubhavSinghBassi" target="blank"><h4>Anubhav Singh Bassi</h4></a>   
           <p>Bassi, the comedy maestro with a twist of mischief! This dude's humor is like a perfect blend of wit and naughtiness that'll leave you in splits!

When Bassi takes the stage, get ready for some rib-tickling banter that'll have you laughing so hard, you'll forget about the world. He's like that mischievous friend who always has the best comebacks and keeps everyone on their toes..</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/The_Kapil_Sharma_Show" target="blank"><h4>The Kapil Sharma Show</h4></a>   
           <p>Kapil's charm and warmth make the show even more special. He's got this incredible ability to connect with his guests and the audience, making everyone feel like one big happy family.

And speaking of guests, "The Kapil Sharma Show" attracts some of the biggest names from the entertainment industry. It's like a star-studded party with hilarious interactions and memorable moments.</p>
           <br />
       </div>
       <br />
       <hr className='hr_class' />
         
       <br />
       <br />

       <div className='reads' id='reads' style={{textAlign: 'center'}}>
         <h2>Non-fictional and Semi-fictional Movies</h2>
         <h6>It wouldn't be feasible to list all movies I've watched and enjoyed. I'm particularly fond of semi-fictional/non-fictional movies and I watch a ton of documentaries, so here are some that I found particularly moving.</h6>
              
              <br />

           <a href="https://en.wikipedia.org/wiki/Chef%27s_Table" target="blank"><h4>Chef's Table</h4></a>   
           <p>Bingeworthy, especially for a foodie. Tells stories of chefs, places, inspiration and food in some of the world's best restaurants. With a touch of magic from the jaw-dropping filmography of David Gelb, this show is stunning on the eyes, and relaxing on the wind. I'm no classical music snob, but the violin of the intro soundtrack sends you into a trance.</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/Narcos" target="blank"><h4>Narcos </h4></a>   
           <p>A Netflix series which tells the story of Columbian cocaine kingpin and leader of the Medellin Cartel, Pablo Escobar. Pablo, at the height of his career, supplied 80% of the cocaine smuggled into the US and had a modern day net worth of $55 billion.</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/Power_and_Terror:_Noam_Chomsky_in_Our_Times" target="blank"><h4>Power and Terror: Noam Chomsky in Our Times</h4></a>   
           <p>A series of clips from Noam Chomsky's talks that counter the populist opinion on 9/11 and expose the propaganda model of the US media.
</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/Rush_(2013_film)" target="blank"><h4>Rush</h4></a>   
           <p>Rush is a movie about racing, rivalry and friendship with no clear antagonist and protagonist that follows the epic competition between F1 racers Niki Lauda and James Hunt.</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/The_World_Before_Her" target="blank"><h4>The World Before Her</h4></a>   
           <p>This documentary follows the lives of two Indian women - one an aspiring model, and the other a Hindu nationalist member of the RSS - and shows us the cultural dichotomy India finds itself in.</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/Mindhunter_(TV_series)" target="blank"><h4>Mindhunters</h4></a>   
           <p>Oh, man, "Mindhunter" is the ultimate thriller series that'll keep you at the edge of your seat! And when they dive into the infamous Charles Manson case, things get even more chilling and captivating.

The show follows this elite team of FBI agents who venture into the minds of serial killers to understand their twisted psychology. It's like a deep dive into the darkest corners of the human psyche creepy yet utterly fascinating!</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/Enron:_The_Smartest_Guys_in_the_Room" target="blank"><h4>Enron: The Smartest Guys in the Room</h4></a>   
           <p>The Enron Scandal was one of the biggest business scandals in history. This documentary shows how it all happened.
</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/TPB_AFK" target="blank"><h4>The Pirate Bay: Away From Keyboard</h4></a>   
           <p>The story of yet another very real effort to promote democracy that meets at odds with pre-existing law. We see the details of a battle between big film and music corporates and 3 computer guys who run a torrent website, each bringing their arsenal of legal and political vs technological weapons.</p>
           <br />
           <a href="https://topdocumentaryfilms.com/inside-dark-web/" target="blank"><h4>Inside the Dark Web</h4></a>   
           <p>A documentary about the internet, surveillance, privacy, anonymity, Tor, Silk Road, bitcoin, and the deep web.</p>
           <br />
           <a href="https://www.bridgewater.com/research-and-insights/how-the-economic-machine-works#:~:text=How%20does%20the%20economy%20really,interest%20rates%2C%20leveraging%20and%20deleveraging." target="blank"><h4>How the Economic Machine Works - Ray Dalio</h4></a>   
           <p>Ray Dalio, the founder of the world's largest hedge fund, Bridgewater Associates, created this animated 30 minute video explaining how the economy functions in a very simply way. A must watch for everybody who uses money.</p>
           <br />
       </div>
       <br />
       <hr className='hr_class' />
         
       <br />
       <br />

       <div className='reads' id='reads' style={{textAlign: 'center'}}>
         <h2>Television Serials</h2>
         <h6>My favourite TV serials. Would definitely recommend.</h6>
              
              <br />

           <a href="https://en.wikipedia.org/wiki/Westworld" target="blank"><h4>Westworld</h4></a>   
           <p>Directed by Chris Nolan's (the Inception and Dark Knight one) brother Jonathan Nolan, and based on Michael Crichton's 1973 film WestWorld. Westworld is a science fiction masterpiece, delving into artificial intelligence and androids, but with a flawless plot as well.</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/Black_Mirror" target="blank"><h4>Black Mirror</h4></a>   
           <p>A dystopian science fiction British TV series akin to The Twilight Zone (1959) and Orwell's novel 1984. None of the episodes share a plot or cast. It dwells largely on the implications of very possible consequences of technology in the near future. Stephen King likes it.</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/Mr._Robot" target="blank"><h4>Mr. Robot</h4></a>   
           <p>When looking for a Game of Thrones rebound, Mr. Robot was the perfect new show. Rated 98% on RottenTomatoes and featuring hackers, hacktivism and New York City, this show is about everything I like.</p>
           <br />
           <a href="" target="blank"><h4>Breaking Bad</h4></a>   
           <p>Breaking Bad is about a high school Chemistry teacher that starts making meth to support his family and his cancer treatment. The character development is heart wrenching.</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/Breaking_Bad" target="blank"><h4>Suits</h4></a>   
           <p>Suits" is the legal drama that knocks it out of the park! From the very first episode, it hooks you with its smart storytelling and sharp wit.

The characters are the heart and soul of the show. Harvey Specter is the epitome of suave and charisma, while Mike Ross is the lovable underdog with a genius mind. Their chemistry is electric, and you can't help but root for this dynamic duo.</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/Californication_(TV_series)" target="blank"><h4>Californication</h4></a>   
           <p>First things first, Hank Moody, the show's protagonist, is an absolute legend! He's the witty, charming, and oh-so-flawed writer who navigates life with equal parts sarcasm and soul-searching.

The show's setting in sunny California adds a whole new dimension of excitement and adventure. It's like a love letter to the vibrant city of Los Angeles, filled with glitz, glamour, and endless possibilities.</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/House_of_Cards_(1993_film)" target="blank"><h4>House of Cards</h4></a>   
           <p>House of Cards is a political drama that follows Kevin Spacey as the protagonist and shows just how dirty politics can get.</p>
           <br />
           <a href="" target="blank"><h4>Sherlock</h4></a>   
           <p>This modern take of the classical detective story features Benedict Cumberbatch. The three-long-episodes-a-season format makes for a quick awesome watch.
</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/Entourage_(American_TV_series)" target="blank"><h4>Entourage</h4></a>   
           <p>Entourage, based on Mark Wahlberg's life, follows an actor and his crew and celebrates the highs and lows of male friendship.</p>
           <br />
           <a href="https://en.wikipedia.org/wiki/Generation_Iron" target="blank"><h4>Generation Iron</h4></a>   
           <p>It's a bodybuilding documentary on what's behind the stage and also the rivalries between the top bodybuilding. It's inspiring and sad at the same time.. Pretty much a good one.</p>
           <br />
       </div>
       <br />
       <hr className='hr_class' />
         
       <br />
       <br />

       <div className='reads' id='reads' style={{textAlign: 'center'}}>
         <h2>Podcasts</h2>
         <h6>I didn't get the concept of podcasts at first, but they eventually grew to be a significant part of my life. When you get to the point where you've heard and overheard all the songs you possess again and again, replacing music with stimulating audio is very refreshing. It lets me run errands, commute and work out effortlessly while learning something. I'd highly recommend you try them if you haven't already.</h6>
              
              <br />

           <a href="https://www.youtube.com/@PGRadio" target="blank"><h4>PG Radio</h4></a>   
           <p>Yo, PG Radio is like a shot of inspiration straight to the heart! Prakhar Gupta's talks are a perfect blend of wisdom and motivation. It's like getting life advice from your coolest friend, and you'll come out feeling ready to conquer the world!  So if you need some serious positivity and a dose of real talk, tune in to PG Radio and get your mind blown!</p>
           <br />
           <a href="https://www.youtube.com/@RanveerAllahbadia" target="blank"><h4>The Ranveer Show</h4></a>   
           <p>Alright, let's talk about The Ranveer Show – the ultimate dose of inspiration!  Ranveer's energy is contagious, and his interviews are like a rollercoaster of emotions. From celebs to entrepreneurs, he gets the most amazing guests and has the coolest conversations. It's like fuel for your dreams and a big thumbs up for your motivation! </p>
           <br />
           <a href="https://www.youtube.com/@ChetanBhagat1" target="blank"><h4>Deep talk with Chetan Bhagat</h4></a>   
           <p>Get ready to dive deep into the minds of some epic personalities with Deep Talk! Chetan Bhagat's show is all about those meaningful conversations that leave you pondering life's big questions. It's like having a cup of coffee with brilliant minds and discovering new perspectives. If you crave some intellectual stimulation and a touch of introspection, this show is your jam!</p>
           <br />
           <a href="https://www.youtube.com/@KennySebastian" target="blank"><h4>Simple Kenny</h4></a>   
           <p>Kenny Sebastian's Simple Kenny is the comedy potion you need for an instant mood lift! His humor is like a breath of fresh air, and his quirky observations are spot-on. It's like hanging out with the funniest buddy you've ever had! So, if you're up for a good laugh and some feel-good vibes, Simple Kenny is the way to go!</p>
           <br />
           <a href="https://www.youtube.com/@rajshamani" target="blank"><h4>Raj Shamani</h4></a>   
           <p>Raj Shammi's got that charm that'll make you feel like you're listening to your favorite uncle's stories! His talks are a perfect mix of entertainment and wisdom. It's like getting life lessons from someone who's been there, done that, and rocked it! So, if you're into positive vibes and insightful discussions, Raj Shammi's channel is the one for you!</p>
           <br />
           <a href="https://www.youtube.com/@VALUETAINMENT" target="blank"><h4>Valuetainment</h4></a>   
           <p>Get ready to level up your business game with Valuetainment! This channel is like an entrepreneur's dream come true. Patrick Bet-David's insights and interviews with successful business moguls are pure gold! It's like a crash course in business smarts and a journey to success. So if you're hungry for knowledge and ready to hustle, Valuetainment is your secret weapon!</p>
           <br />
           <a href="https://www.youtube.com/@joerogan" target="blank"><h4>PowerfulJRE</h4></a>   
           <p>oe Rogan's PowerfulJRE is the ultimate podcast that covers everything under the sun! From comedy to science, from MMA to mind-blowing conversations, this show has it all. It's like getting the juiciest scoops from the coolest people. So, if you want an adventure in knowledge and a good time, you better subscribe right now!</p>
           <br />
           <a href="https://www.youtube.com/@HotboxinwithMikeTyson" target="blank"><h4>Hotboxin With Mike Tyson</h4></a>   
           <p>Step into the ring of Hotboxin with Mike Tyson! This podcast is like a knockout punch of entertainment and intrigue. Mike Tyson's guests are diverse, and the conversations are fascinating. It's like exploring different worlds and getting insights you never thought possible. So, if you're a fan of Tyson and crave some mind-expanding talks, this show is the heavyweight champ of podcasts!</p>
           <br />
           <a href="https://www.youtube.com/@REALRAWTALK" target="blank"><h4>Bradly Martyn's Raw Talk</h4></a>   
           <p>IAlright, let's get real with Bradly Martyn's Raw Talk! This show is all about fitness, motivation, and crushing life's challenges. It's like hanging out with a badass gym buddy who'll pump you up and keep you going! So, if you're into fitness, self-improvement, and a bit of raw honesty, Raw Talk is the perfect workout for your mind and soul!</p>
           <br />
           <a href="https://www.youtube.com/@hubermanlab" target="blank"><h4>Andrew Huberman</h4></a>   
           <p>Mind-expanding discussions and fascinating insights – that's what Andrew Huberman's all about! His podcast is like a treasure trove of knowledge, exploring the science of human performance and well-being. It's like tapping into the secrets of your brain and discovering its true potential. If you're curious about the wonders of neuroscience and want to optimize your life, Andrew Huberman is your brain coach extraordinaire!</p>
           <br />
       </div>

    <hr className='hr_class' />

       <CardGroup className='cardcook_group'>
      <Card style={{border: 'none'}}>
        
        <Card.Body >
          
             <Card.Text className='text_cook'> 
            <p >
            Think I'm missing something? Do you have something you think I should know about? Shoot me an email atshekharmaybe [at] gmail [dot] com or get in touch with me on any other form of social media. I'd love to see it!</p>
             </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>

    

    <br /> <br />

    <Footer />

       </div>
    </>
  )
}

export default Cooking