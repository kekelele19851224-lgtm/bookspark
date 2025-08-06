interface Guide {
  title: string
  excerpt: string
  slug: string
  category: string
  readTime: string
  tags: string[]
  content: string
  relatedGuides?: string[]
}

const guides: Guide[] = [
  {
    title: "How to Develop Compelling Characters",
    excerpt: "Learn the secrets to creating memorable characters that readers will love. From backstory to character arcs, master the art of character development.",
    slug: "develop-compelling-characters",
    category: "Character Development",
    readTime: "8 min read",
    tags: ["characters", "development", "backstory", "motivation"],
    content: `
      <h2>The Foundation of Great Storytelling</h2>
      <p>Characters are the heart and soul of any great story. They're what readers connect with, root for, and remember long after they've finished your book. Creating compelling characters isn't just about giving them interesting traits—it's about building complex, relatable human beings that feel real and authentic.</p>

      <h2>1. Start with the Internal World</h2>
      <p>Before you think about what your character looks like or what they do for a living, dive deep into their internal world:</p>
      <ul>
        <li><strong>Core beliefs:</strong> What fundamental truths does your character hold about life, love, success, or morality?</li>
        <li><strong>Deepest fears:</strong> What keeps them awake at night? What would devastate them?</li>
        <li><strong>Secret desires:</strong> What do they want more than anything, even if they won't admit it?</li>
        <li><strong>Internal conflicts:</strong> Where do their beliefs clash with their desires or circumstances?</li>
      </ul>

      <h2>2. The Power of Contradiction</h2>
      <p>Real people are contradictory, and so should your characters be. A character who is brave in physical danger might be terrified of emotional vulnerability. A successful businesswoman might be completely helpless when it comes to personal relationships. These contradictions make characters feel human and unpredictable.</p>

      <blockquote>
        <p>"The best characters are the ones who surprise us—including their creators."</p>
      </blockquote>

      <h2>3. Backstory That Matters</h2>
      <p>Not every detail of your character's past needs to make it into your story, but understanding their history is crucial for authentic character development:</p>
      <ul>
        <li><strong>Formative experiences:</strong> What moments shaped who they are today?</li>
        <li><strong>Relationships:</strong> How do they connect with family, friends, and lovers?</li>
        <li><strong>Failures and successes:</strong> What have they learned from their mistakes and victories?</li>
        <li><strong>Secrets:</strong> What are they hiding, and why?</li>
      </ul>

      <h2>4. Character Voice and Dialogue</h2>
      <p>Each character should have a distinct voice that reflects their background, education, personality, and emotional state:</p>
      <ul>
        <li><strong>Vocabulary:</strong> Do they use simple or complex words? Formal or casual language?</li>
        <li><strong>Speech patterns:</strong> Do they interrupt, trail off, speak in questions?</li>
        <li><strong>Subtext:</strong> What are they really saying beneath their words?</li>
        <li><strong>Emotional state:</strong> How does their mood affect their speaking style?</li>
      </ul>

      <h2>5. Character Arcs: The Journey of Change</h2>
      <p>A compelling character arc shows meaningful change over the course of your story:</p>
      <ul>
        <li><strong>Starting point:</strong> Who is your character at the beginning?</li>
        <li><strong>Catalyst:</strong> What event forces them to change?</li>
        <li><strong>Resistance:</strong> How do they fight against change?</li>
        <li><strong>Growth:</strong> What do they learn or overcome?</li>
        <li><strong>Resolution:</strong> Who have they become by the end?</li>
      </ul>

      <h2>6. Show Character Through Action</h2>
      <p>Rather than telling readers about your character's traits, show them through behavior:</p>
      <ul>
        <li><strong>Habits and quirks:</strong> Small, consistent behaviors that reveal personality</li>
        <li><strong>Reactions under pressure:</strong> How they handle stress reveals true character</li>
        <li><strong>Choices:</strong> Every decision your character makes should feel authentic to who they are</li>
        <li><strong>Body language:</strong> Physical gestures and posture communicate volumes</li>
      </ul>

      <h2>7. Flaws Make Characters Lovable</h2>
      <p>Perfect characters are boring. Give your protagonists meaningful flaws that:</p>
      <ul>
        <li>Create internal conflict</li>
        <li>Drive plot complications</li>
        <li>Make them relatable to readers</li>
        <li>Provide opportunities for growth</li>
      </ul>

      <h2>Practical Exercise</h2>
      <p>Take your main character and write a scene where they're waiting for someone important who is late. Show their personality, background, and current emotional state entirely through their actions, thoughts, and reactions—without using any exposition or backstory dumps.</p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Start with internal motivation before external details</li>
        <li>Embrace contradictions to create complex characters</li>
        <li>Use backstory strategically to inform present behavior</li>
        <li>Give each character a unique voice and speaking style</li>
        <li>Show character through action, not exposition</li>
        <li>Meaningful flaws make characters more lovable</li>
        <li>Plan character arcs that show real growth and change</li>
      </ul>
    `,
    relatedGuides: ["writing-natural-dialogue", "show-dont-tell-techniques"]
  },
  
  {
    title: "Master Plot Structure: The Three-Act Formula",
    excerpt: "Understand the fundamentals of story structure that keep readers engaged from beginning to end. Learn setup, confrontation, and resolution.",
    slug: "master-plot-structure",
    category: "Plot & Structure",
    readTime: "12 min read",
    tags: ["plot", "structure", "pacing", "story-arc"],
    content: `
      <h2>Why Structure Matters</h2>
      <p>Plot structure is the backbone of compelling storytelling. It's not a rigid formula that restricts creativity—it's a proven framework that helps you deliver a satisfying story experience. Understanding the three-act structure will help you pace your narrative, build tension effectively, and deliver payoffs that feel earned.</p>

      <h2>Act I: The Setup (25% of your story)</h2>
      <p>The first act establishes everything your reader needs to know to understand and care about your story.</p>

      <h3>Opening Hook (First 5-10%)</h3>
      <ul>
        <li><strong>Immediate engagement:</strong> Start with action, dialogue, or an intriguing situation</li>
        <li><strong>Establish voice:</strong> Let readers hear your narrator or main character</li>
        <li><strong>Promise of the story:</strong> Hint at the genre and type of journey ahead</li>
      </ul>

      <h3>Ordinary World (10-15%)</h3>
      <ul>
        <li><strong>Character introduction:</strong> Show who your protagonist is in their normal life</li>
        <li><strong>Setting establishment:</strong> Ground readers in time and place</li>
        <li><strong>Status quo:</strong> Establish the normal before everything changes</li>
      </ul>

      <h3>Inciting Incident (15-20%)</h3>
      <p>The event that disrupts the ordinary world and sets the main story in motion:</p>
      <ul>
        <li>Must be significant enough to justify the entire story</li>
        <li>Creates the main conflict or problem</li>
        <li>Forces the protagonist to make a choice</li>
        <li>Cannot be ignored or easily resolved</li>
      </ul>

      <h3>Plot Point 1 (20-25%)</h3>
      <p>The moment your protagonist commits to the journey and crosses into Act II:</p>
      <ul>
        <li>A point of no return</li>
        <li>Often reluctant, but committed</li>
        <li>Launches the main storyline</li>
        <li>Raises the central story question</li>
      </ul>

      <h2>Act II: The Confrontation (50% of your story)</h2>
      <p>The longest and most challenging act, where your protagonist faces obstacles while pursuing their goal.</p>

      <h3>First Half of Act II (25-50%)</h3>
      <ul>
        <li><strong>Learning phase:</strong> Protagonist adapts to the new world/situation</li>
        <li><strong>Rising action:</strong> Obstacles become progressively more difficult</li>
        <li><strong>Character development:</strong> Relationships form and evolve</li>
        <li><strong>Subplots:</strong> Secondary storylines develop alongside the main plot</li>
      </ul>

      <h3>Midpoint (50%)</h3>
      <p>A major revelation or event that shifts the story's direction:</p>
      <ul>
        <li>Changes the protagonist's understanding</li>
        <li>Raises the stakes significantly</li>
        <li>Often a false victory or devastating defeat</li>
        <li>Propels the story toward the climax</li>
      </ul>

      <h3>Second Half of Act II (50-75%)</h3>
      <ul>
        <li><strong>Complications multiply:</strong> Everything gets harder</li>
        <li><strong>Stakes rise:</strong> More is at risk than ever before</li>
        <li><strong>Character pressure:</strong> Internal and external conflicts intensify</li>
        <li><strong>Plot point 2 approach:</strong> Building toward the crisis</li>
      </ul>

      <h3>Plot Point 2 (75%)</h3>
      <p>The dark moment before the climax:</p>
      <ul>
        <li>Protagonist's lowest point</li>
        <li>Seems like all is lost</li>
        <li>Forces final character growth</li>
        <li>Sets up the climactic confrontation</li>
      </ul>

      <h2>Act III: The Resolution (25% of your story)</h2>
      <p>The shortest act where all conflicts reach their resolution.</p>

      <h3>Climax (75-90%)</h3>
      <p>The ultimate confrontation where the main conflict is resolved:</p>
      <ul>
        <li><strong>Highest stakes:</strong> Everything the protagonist cares about is at risk</li>
        <li><strong>Character growth payoff:</strong> They use what they've learned</li>
        <li><strong>Active protagonist:</strong> The hero must drive the resolution</li>
        <li><strong>Emotional peak:</strong> The most intense moment of the story</li>
      </ul>

      <h3>Falling Action (90-95%)</h3>
      <ul>
        <li>Immediate aftermath of the climax</li>
        <li>Loose ends begin to tie up</li>
        <li>Characters react to the resolution</li>
        <li>Consequences become clear</li>
      </ul>

      <h3>Resolution/Denouement (95-100%)</h3>
      <ul>
        <li><strong>New normal:</strong> Show how the world has changed</li>
        <li><strong>Character reflection:</strong> What has been learned</li>
        <li><strong>Emotional satisfaction:</strong> Payoff for the reader's investment</li>
        <li><strong>Final image:</strong> A lasting impression to close the story</li>
      </ul>

      <h2>Pacing Within Structure</h2>
      <blockquote>
        <p>"Structure gives you permission to be creative. It's not a straightjacket—it's a foundation."</p>
      </blockquote>

      <h3>Scene and Sequel</h3>
      <p>Each scene should follow its own mini-structure:</p>
      <ul>
        <li><strong>Goal:</strong> What does the character want in this scene?</li>
        <li><strong>Conflict:</strong> What prevents them from getting it?</li>
        <li><strong>Disaster:</strong> How does it go wrong?</li>
        <li><strong>Reaction:</strong> How do they respond emotionally?</li>
        <li><strong>Dilemma:</strong> What are their options now?</li>
        <li><strong>Decision:</strong> What do they choose to do next?</li>
      </ul>

      <h2>Common Structure Mistakes</h2>
      <ul>
        <li><strong>Rushing the setup:</strong> Not establishing enough before the inciting incident</li>
        <li><strong>Saggy middle:</strong> Act II lacks sufficient conflict and progression</li>
        <li><strong>Weak midpoint:</strong> Failing to shift the story's direction halfway through</li>
        <li><strong>Passive protagonist:</strong> Things happen to them instead of them driving action</li>
        <li><strong>Unearned climax:</strong> The final confrontation feels arbitrary or easy</li>
        <li><strong>Rushed resolution:</strong> Not enough time to process the story's conclusion</li>
      </ul>

      <h2>Adapting Structure to Your Genre</h2>
      <p>While the three-act structure is universal, different genres emphasize different elements:</p>
      <ul>
        <li><strong>Romance:</strong> Focus on relationship development and emotional turning points</li>
        <li><strong>Mystery:</strong> Structure around clues, red herrings, and revelation</li>
        <li><strong>Thriller:</strong> Maintain constant tension with escalating stakes</li>
        <li><strong>Fantasy:</strong> Allow time for world-building within the structure</li>
        <li><strong>Literary:</strong> Emphasize character development and internal change</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Structure serves story, not the other way around</li>
        <li>Each act has specific purposes and pacing requirements</li>
        <li>Plot points are doorways, not just events</li>
        <li>The midpoint is crucial for maintaining momentum</li>
        <li>Every scene should advance the plot or develop character</li>
        <li>Climax must be earned through proper setup and character growth</li>
        <li>Resolution should satisfy both plot and emotional arcs</li>
      </ul>
    `,
    relatedGuides: ["building-suspense-tension", "develop-compelling-characters"]
  },

  {
    title: "World Building for Fantasy and Sci-Fi",
    excerpt: "Create immersive worlds that feel authentic and lived-in. From magic systems to alien cultures, build believable fictional universes.",
    slug: "world-building-guide", 
    category: "World Building",
    readTime: "15 min read",
    tags: ["worldbuilding", "fantasy", "sci-fi", "magic-systems"],
    content: `
      <h2>The Foundation of Immersive Fiction</h2>
      <p>World-building is the art of creating believable, consistent fictional universes that serve your story while captivating readers. Whether you're crafting a magical realm or a distant planet, the key is creating a world that feels lived-in and authentic, with its own rules, cultures, and history.</p>

      <h2>Start with Purpose</h2>
      <p>Before diving into detailed maps and languages, ask yourself:</p>
      <ul>
        <li><strong>What story are you telling?</strong> Your world should serve your narrative, not overshadow it</li>
        <li><strong>What themes are you exploring?</strong> Let your world reflect and amplify your story's themes</li>
        <li><strong>What emotions do you want to evoke?</strong> Wonder, fear, nostalgia, hope?</li>
        <li><strong>How much detail does your story need?</strong> Epic fantasy requires more than a short story</li>
      </ul>

      <h2>Physical World Design</h2>
      <h3>Geography and Climate</h3>
      <ul>
        <li><strong>Terrain:</strong> Mountains, oceans, deserts, forests—how do they shape culture?</li>
        <li><strong>Climate patterns:</strong> Weather affects everything from agriculture to architecture</li>
        <li><strong>Natural resources:</strong> What's abundant? What's scarce? This drives conflict and trade</li>
        <li><strong>Natural disasters:</strong> Earthquakes, storms, or magical catastrophes shape society</li>
      </ul>

      <h3>Cities and Settlements</h3>
      <ul>
        <li><strong>Location logic:</strong> Why did people settle here? Rivers, harbors, crossroads?</li>
        <li><strong>Architecture:</strong> What materials are available? What's the climate like?</li>
        <li><strong>Layout:</strong> Planned cities vs. organic growth, rich vs. poor districts</li>
        <li><strong>Infrastructure:</strong> How do people get around? Water, waste, communication?</li>
      </ul>

      <h2>Magic and Technology Systems</h2>
      <h3>Creating Magic Systems</h3>
      <p>The best magic systems have clear rules and limitations:</p>
      <ul>
        <li><strong>Source:</strong> Where does magical power come from?</li>
        <li><strong>Cost:</strong> What does using magic require or risk?</li>
        <li><strong>Limitations:</strong> What can't magic do? Who can't use it?</li>
        <li><strong>Detection:</strong> Can others sense when magic is being used?</li>
        <li><strong>Learning:</strong> How does one acquire magical ability?</li>
      </ul>

      <blockquote>
        <p>"Magic must cost something, or it becomes a solution to every problem."</p>
      </blockquote>

      <h3>Technology Considerations</h3>
      <ul>
        <li><strong>Consistency:</strong> Don't mix medieval weapons with modern medicine without explanation</li>
        <li><strong>Impact:</strong> How does technology affect daily life, warfare, communication?</li>
        <li><strong>Accessibility:</strong> Who has access to advanced technology?</li>
        <li><strong>Development:</strong> What drove technological advancement in your world?</li>
      </ul>

      <h2>Cultural Development</h2>
      <h3>Society and Government</h3>
      <ul>
        <li><strong>Political structure:</strong> Monarchy, democracy, theocracy, tribal councils?</li>
        <li><strong>Social hierarchy:</strong> How is status determined? Birth, wealth, magic, merit?</li>
        <li><strong>Laws and justice:</strong> What's illegal? How are crimes punished?</li>
        <li><strong>Military:</strong> How do they fight wars? Who serves? Professional or conscript?</li>
      </ul>

      <h3>Religion and Philosophy</h3>
      <ul>
        <li><strong>Belief systems:</strong> Monotheistic, polytheistic, atheistic, or something unique?</li>
        <li><strong>Creation myths:</strong> How do people explain their world's origins?</li>
        <li><strong>Afterlife concepts:</strong> What happens when you die?</li>
        <li><strong>Moral codes:</strong> What's considered right and wrong?</li>
        <li><strong>Religious practices:</strong> Rituals, holidays, pilgrimage sites</li>
      </ul>

      <h3>Economics and Trade</h3>
      <ul>
        <li><strong>Currency:</strong> Coins, barter, credit, magical energy?</li>
        <li><strong>Major industries:</strong> What drives the economy?</li>
        <li><strong>Trade routes:</strong> How do goods move between regions?</li>
        <li><strong>Wealth distribution:</strong> Who's rich? Who's poor? Why?</li>
      </ul>

      <h2>History and Timeline</h2>
      <h3>Major Historical Events</h3>
      <ul>
        <li><strong>Wars and conflicts:</strong> Who fought whom? Why? What were the consequences?</li>
        <li><strong>Natural disasters:</strong> Plagues, famines, magical catastrophes</li>
        <li><strong>Discovery and invention:</strong> What changed society?</li>
        <li><strong>Rise and fall of empires:</strong> Political changes over time</li>
      </ul>

      <h3>Living History</h3>
      <ul>
        <li><strong>Ruins and artifacts:</strong> Physical reminders of the past</li>
        <li><strong>Oral traditions:</strong> Stories passed down through generations</li>
        <li><strong>Cultural memory:</strong> How do current events relate to history?</li>
        <li><strong>Ongoing consequences:</strong> How does history affect the present?</li>
      </ul>

      <h2>Language and Communication</h2>
      <h3>Linguistic Considerations</h3>
      <ul>
        <li><strong>Common tongue:</strong> How do different peoples communicate?</li>
        <li><strong>Regional dialects:</strong> Vocabulary and accent differences</li>
        <li><strong>Sacred languages:</strong> Ancient tongues for magic or religion</li>
        <li><strong>Written systems:</strong> Alphabets, pictographs, magical scripts</li>
      </ul>

      <h2>Daily Life Details</h2>
      <h3>The Little Things That Matter</h3>
      <ul>
        <li><strong>Food and drink:</strong> What do people eat? What's a luxury?</li>
        <li><strong>Clothing and fashion:</strong> Practical wear vs. status symbols</li>
        <li><strong>Entertainment:</strong> Sports, games, festivals, art forms</li>
        <li><strong>Education:</strong> Who learns to read? What subjects are taught?</li>
        <li><strong>Family structure:</strong> Nuclear families, extended clans, chosen families?</li>
      </ul>

      <h2>Conflict and Tension</h2>
      <p>Great worlds have built-in conflicts that generate story possibilities:</p>
      <ul>
        <li><strong>Resource scarcity:</strong> Competition for water, food, magical materials</li>
        <li><strong>Cultural clashes:</strong> Different peoples with incompatible values</li>
        <li><strong>Political instability:</strong> Succession crises, rebellions, invasions</li>
        <li><strong>Environmental threats:</strong> Climate change, natural disasters, magical pollution</li>
        <li><strong>Social inequality:</strong> Class tensions, oppression, revolution</li>
      </ul>

      <h2>Avoiding Common Pitfalls</h2>
      <ul>
        <li><strong>Monocultures:</strong> Don't make entire races/planets identical</li>
        <li><strong>Earth analogies:</strong> Avoid "this culture but with magic/aliens"</li>
        <li><strong>Convenient geography:</strong> Don't place everything near each other for plot convenience</li>
        <li><strong>Static worlds:</strong> Societies should change and evolve</li>
        <li><strong>Info-dumping:</strong> Reveal world details through action and dialogue</li>
        <li><strong>Inconsistency:</strong> Keep detailed notes and maintain internal logic</li>
      </ul>

      <h2>Research and Inspiration</h2>
      <ul>
        <li><strong>Real-world cultures:</strong> Study history, anthropology, geography</li>
        <li><strong>Multiple sources:</strong> Combine elements from different cultures</li>
        <li><strong>Scientific principles:</strong> Understand basic physics, biology, sociology</li>
        <li><strong>Other fiction:</strong> Learn from masters, but don't copy</li>
      </ul>

      <h2>Practical World-Building Exercise</h2>
      <p>Create a small settlement with:</p>
      <ul>
        <li>A geographic feature that explains its location</li>
        <li>A main industry or reason for existence</li>
        <li>One unique cultural practice</li>
        <li>A current problem or conflict</li>
        <li>A piece of history that affects the present</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li>World-building serves story, not the reverse</li>
        <li>Create consistent rules and stick to them</li>
        <li>Think about cause and effect in your world's development</li>
        <li>Focus on details that matter to your narrative</li>
        <li>Build in conflicts and tensions for story potential</li>
        <li>Reveal your world through character experience, not exposition</li>
        <li>Keep detailed notes for consistency</li>
      </ul>
    `,
    relatedGuides: ["develop-compelling-characters", "master-plot-structure"]
  },

  {
    title: "Writing Natural Dialogue That Flows",
    excerpt: "Master the art of dialogue that sounds natural while advancing your plot and revealing character. Avoid common dialogue mistakes.",
    slug: "writing-natural-dialogue",
    category: "Dialogue",
    readTime: "10 min read",
    tags: ["dialogue", "conversation", "voice", "character-voice"],
    content: `
      <h2>The Art of Conversation on Paper</h2>
      <p>Good dialogue does three things simultaneously: reveals character, advances plot, and sounds natural. It's one of the most challenging aspects of writing because real speech and fictional dialogue serve different purposes.</p>

      <h2>1. Listen to Real Conversations</h2>
      <p>Spend time listening to how people actually talk:</p>
      <ul>
        <li><strong>Interruptions:</strong> People cut each other off</li>
        <li><strong>Incomplete thoughts:</strong> We don't always finish sentences</li>
        <li><strong>Subtext:</strong> We rarely say exactly what we mean</li>
        <li><strong>Repetition:</strong> We repeat words and phrases</li>
        <li><strong>Filler words:</strong> "Um," "well," "you know"</li>
      </ul>

      <h2>2. Each Character Needs a Unique Voice</h2>
      <ul>
        <li><strong>Vocabulary:</strong> Education, background, and profession affect word choice</li>
        <li><strong>Sentence length:</strong> Some speak in short bursts, others in long speeches</li>
        <li><strong>Formality level:</strong> Casual vs. formal speech patterns</li>
        <li><strong>Cultural background:</strong> Regional expressions and speech patterns</li>
        <li><strong>Age and generation:</strong> Different generations use different slang</li>
      </ul>

      <h2>3. Dialogue Tags and Action</h2>
      <p>Use tags and actions to enhance, not overwhelm:</p>
      <ul>
        <li><strong>"Said" is invisible:</strong> Don't avoid it for fancy alternatives</li>
        <li><strong>Action beats:</strong> Show what characters do while speaking</li>
        <li><strong>Emotional context:</strong> Let dialogue show emotion, not tags</li>
        <li><strong>Pacing:</strong> Use pauses and actions to control rhythm</li>
      </ul>

      <h2>4. Subtext: What's Really Being Said</h2>
      <p>The best dialogue operates on multiple levels:</p>
      <ul>
        <li><strong>Surface meaning:</strong> What the words literally say</li>
        <li><strong>Emotional subtext:</strong> What the speaker feels</li>
        <li><strong>Hidden agenda:</strong> What they're trying to accomplish</li>
        <li><strong>Reader understanding:</strong> What the audience picks up</li>
      </ul>

      <h2>Common Dialogue Mistakes</h2>
      <ul>
        <li><strong>Info-dumping:</strong> Characters explaining things they already know</li>
        <li><strong>Too formal:</strong> Everyone sounds like they're giving speeches</li>
        <li><strong>No conflict:</strong> Conversations without tension are boring</li>
        <li><strong>Identical voices:</strong> All characters sound the same</li>
        <li><strong>Overwriting:</strong> Too many adverbs and fancy dialogue tags</li>
      </ul>
    `,
    relatedGuides: ["develop-compelling-characters", "show-dont-tell-techniques"]
  },

  {
    title: "Show Don't Tell: Advanced Techniques",
    excerpt: "Go beyond basic writing advice and learn sophisticated techniques for showing emotion, action, and information through scene and subtext.",
    slug: "show-dont-tell-techniques",
    category: "Writing Craft",
    readTime: "11 min read", 
    tags: ["show-dont-tell", "subtext", "scenes", "emotion"],
    content: `
      <h2>Beyond the Basics</h2>
      <p>Every writer has heard "show don't tell," but few understand how to apply it effectively. This isn't about avoiding all telling—it's about choosing when to show for maximum impact and how to make your showing techniques more sophisticated.</p>

      <h2>1. Emotional Showing</h2>
      <p>Instead of telling us a character is angry, show it through:</p>
      <ul>
        <li><strong>Physical reactions:</strong> Clenched fists, tight jaw, rapid breathing</li>
        <li><strong>Dialogue changes:</strong> Shorter sentences, sharper tone, word choice</li>
        <li><strong>Actions:</strong> Slamming doors, aggressive movements</li>
        <li><strong>Internal sensations:</strong> Heat rising, vision narrowing</li>
        <li><strong>Thought patterns:</strong> Fragmented, repetitive, or racing thoughts</li>
      </ul>

      <h2>2. Character Traits Through Action</h2>
      <ul>
        <li><strong>Generosity:</strong> Character tips well, shares food, offers help</li>
        <li><strong>Nervousness:</strong> Fidgeting, checking phone, avoiding eye contact</li>
        <li><strong>Intelligence:</strong> Quick problem-solving, asking insightful questions</li>
        <li><strong>Arrogance:</strong> Interrupting others, name-dropping, dismissive gestures</li>
      </ul>

      <h2>3. Setting as Character</h2>
      <p>Use environment to show rather than tell:</p>
      <ul>
        <li><strong>Wealth:</strong> Details about furnishings, materials, maintenance</li>
        <li><strong>Personality:</strong> Organized vs. cluttered spaces</li>
        <li><strong>History:</strong> Wear patterns, repairs, accumulated objects</li>
        <li><strong>Mood:</strong> Lighting, weather, seasonal elements</li>
      </ul>

      <h2>When to Tell</h2>
      <p>Sometimes telling is more effective than showing:</p>
      <ul>
        <li><strong>Transitions:</strong> Moving between important scenes</li>
        <li><strong>Background information:</strong> When context is needed quickly</li>
        <li><strong>Pacing:</strong> To speed up or slow down narrative rhythm</li>
        <li><strong>Emphasis:</strong> When direct statement has more impact</li>
      </ul>
    `,
    relatedGuides: ["writing-natural-dialogue", "develop-compelling-characters"]
  },

  // Adding remaining guides to complete the collection
  {
    title: "Creating Believable Romantic Tension",
    excerpt: "Build chemistry between characters that feels genuine and compelling. Learn pacing, conflict, and emotional development in romance.",
    slug: "romantic-tension-guide",
    category: "Romance Writing",
    readTime: "9 min read",
    tags: ["romance", "tension", "chemistry", "relationships"],
    content: `
      <h2>The Chemistry of Great Romance</h2>
      <p>Romantic tension is the emotional electricity between characters that keeps readers turning pages. It's not just about attraction—it's about the push and pull of desire, fear, and emotional vulnerability that creates compelling relationship dynamics.</p>

      <h2>Building Attraction</h2>
      <ul>
        <li><strong>Unique connections:</strong> What draws these specific characters together?</li>
        <li><strong>Complementary traits:</strong> How do they complete or challenge each other?</li>
        <li><strong>Emotional resonance:</strong> What deeper needs do they fulfill in each other?</li>
        <li><strong>Physical awareness:</strong> Subtle reactions to proximity and touch</li>
      </ul>

      <h2>Conflict and Obstacles</h2>
      <ul>
        <li><strong>Internal barriers:</strong> Past trauma, fear of commitment, self-doubt</li>
        <li><strong>External obstacles:</strong> Social class, family opposition, career demands</li>
        <li><strong>Timing issues:</strong> Wrong place, wrong time scenarios</li>
        <li><strong>Misunderstandings:</strong> Communication failures that feel realistic</li>
      </ul>

      <h2>Pacing the Relationship</h2>
      <ul>
        <li><strong>Slow burn:</strong> Gradual development of feelings</li>
        <li><strong>Emotional milestones:</strong> Key moments of connection and vulnerability</li>
        <li><strong>Push and pull:</strong> Moments of closeness followed by distance</li>
        <li><strong>Resolution timing:</strong> When and how conflicts are resolved</li>
      </ul>
    `,
    relatedGuides: ["develop-compelling-characters", "writing-natural-dialogue"]
  },

  {
    title: "Mystery Writing: Clues, Red Herrings & Fair Play",
    excerpt: "Learn to craft intricate mysteries that challenge readers while playing fair. Master the art of misdirection and revelation.",
    slug: "mystery-writing-guide",
    category: "Genre Writing",
    readTime: "13 min read",
    tags: ["mystery", "clues", "red-herrings", "plot-twists"],
    content: `
      <h2>The Art of Fair Play</h2>
      <p>Great mystery writing follows an unspoken contract with readers: give them all the information they need to solve the puzzle, but make it challenging enough to keep them guessing. This balance of revelation and misdirection is what makes mysteries addictive.</p>

      <h2>Planting Clues</h2>
      <ul>
        <li><strong>Multiple interpretations:</strong> Clues that can be read different ways</li>
        <li><strong>Hidden in plain sight:</strong> Information that seems unimportant initially</li>
        <li><strong>Progressive revelation:</strong> Clues that build on each other</li>
        <li><strong>False importance:</strong> Making red herrings seem significant</li>
      </ul>

      <h2>Red Herrings That Work</h2>
      <ul>
        <li><strong>Believable suspects:</strong> Characters with motive and opportunity</li>
        <li><strong>Circumstantial evidence:</strong> Things that look suspicious but aren't conclusive</li>
        <li><strong>Misdirection timing:</strong> When to introduce false leads</li>
        <li><strong>Resolution:</strong> Explaining why red herrings existed</li>
      </ul>
    `,
    relatedGuides: ["building-suspense-tension", "master-plot-structure"]
  },

  {
    title: "Building Suspense and Tension",
    excerpt: "Keep readers on the edge of their seats with proven techniques for creating and maintaining suspense throughout your story.",
    slug: "building-suspense-tension",
    category: "Writing Craft",
    readTime: "7 min read",
    tags: ["suspense", "tension", "pacing", "conflict"],
    content: `
      <h2>The Mechanics of Suspense</h2>
      <p>Suspense is the emotional state of anxious uncertainty about outcomes. It's created when readers care about characters and fear for their safety, success, or happiness. Master suspense by controlling information, pacing, and emotional investment.</p>

      <h2>Types of Tension</h2>
      <ul>
        <li><strong>Mystery tension:</strong> Withholding information readers want</li>
        <li><strong>Anticipation tension:</strong> Readers know something characters don't</li>
        <li><strong>Relationship tension:</strong> Emotional conflicts between characters</li>
        <li><strong>Moral tension:</strong> Difficult choices with no clear right answer</li>
      </ul>

      <h2>Pacing for Suspense</h2>
      <ul>
        <li><strong>Vary rhythm:</strong> Alternate between fast and slow scenes</li>
        <li><strong>Escalation:</strong> Each crisis should be bigger than the last</li>
        <li><strong>Breathing room:</strong> Brief respites make tension more effective</li>
        <li><strong>Cliffhangers:</strong> End chapters at moments of high tension</li>
      </ul>
    `,
    relatedGuides: ["master-plot-structure", "mystery-writing-guide"]
  },

  {
    title: "Self-Publishing vs Traditional Publishing",
    excerpt: "Compare publishing paths to find what works for your goals. Understand the pros, cons, and requirements of each approach.",
    slug: "publishing-paths-comparison",
    category: "Publishing",
    readTime: "14 min read",
    tags: ["publishing", "self-publishing", "traditional", "author-career"],
    content: `
      <h2>Two Paths to Publication</h2>
      <p>The publishing landscape has never offered more opportunities for authors. Understanding the differences between traditional and self-publishing will help you choose the path that aligns with your goals, timeline, and career aspirations.</p>

      <h2>Traditional Publishing</h2>
      <h3>Advantages:</h3>
      <ul>
        <li><strong>Professional support:</strong> Editors, designers, marketers work on your book</li>
        <li><strong>Distribution reach:</strong> Access to bookstores and libraries</li>
        <li><strong>Credibility:</strong> Industry validation and recognition</li>
        <li><strong>Advance payments:</strong> Money upfront (sometimes)</li>
        <li><strong>No upfront costs:</strong> Publisher handles all expenses</li>
      </ul>

      <h3>Disadvantages:</h3>
      <ul>
        <li><strong>Long timeline:</strong> 1-2+ years from acceptance to publication</li>
        <li><strong>Limited control:</strong> Publishers make final decisions</li>
        <li><strong>Lower royalties:</strong> 8-15% typically</li>
        <li><strong>Competitive:</strong> Difficult to get accepted</li>
        <li><strong>Marketing expectations:</strong> Authors still do much of their own promotion</li>
      </ul>

      <h2>Self-Publishing</h2>
      <h3>Advantages:</h3>
      <ul>
        <li><strong>Creative control:</strong> You make all decisions</li>
        <li><strong>Higher royalties:</strong> 35-70% depending on platform</li>
        <li><strong>Speed to market:</strong> Publish when you're ready</li>
        <li><strong>Keep rights:</strong> You own your work completely</li>
        <li><strong>Direct reader connection:</strong> Build your own audience</li>
      </ul>

      <h3>Disadvantages:</h3>
      <ul>
        <li><strong>Upfront costs:</strong> Editing, design, marketing expenses</li>
        <li><strong>Time investment:</strong> You handle all business aspects</li>
        <li><strong>Limited distribution:</strong> Mainly online platforms</li>
        <li><strong>Marketing responsibility:</strong> All promotion falls on you</li>
        <li><strong>Quality concerns:</strong> No gatekeepers to ensure standards</li>
      </ul>

      <h2>Making Your Decision</h2>
      <p>Consider these factors:</p>
      <ul>
        <li><strong>Goals:</strong> Recognition vs. income vs. creative freedom</li>
        <li><strong>Timeline:</strong> How quickly do you want to publish?</li>
        <li><strong>Resources:</strong> Do you have budget for professional services?</li>
        <li><strong>Genre:</strong> Some genres perform better in different markets</li>
        <li><strong>Experience:</strong> First book vs. established author considerations</li>
      </ul>
    `,
    relatedGuides: ["research-techniques-fiction", "develop-compelling-characters"]
  },

  {
    title: "Research Techniques for Fiction Writers",
    excerpt: "Conduct effective research that enhances your fiction without overwhelming your story. Find reliable sources and fact-check your work.",
    slug: "research-techniques-fiction",
    category: "Writing Process",
    readTime: "10 min read",
    tags: ["research", "accuracy", "sources", "fact-checking"],
    content: `
      <h2>Research That Serves Story</h2>
      <p>Good research in fiction creates authenticity without overwhelming the narrative. Whether you're writing historical fiction, contemporary stories, or speculative fiction, research helps create believable worlds and characters that resonate with readers.</p>

      <h2>When to Research</h2>
      <ul>
        <li><strong>Before writing:</strong> Basic facts about setting, time period, professions</li>
        <li><strong>During writing:</strong> Specific details as they come up in scenes</li>
        <li><strong>After drafting:</strong> Fact-checking and filling in gaps</li>
        <li><strong>Ongoing:</strong> Building expertise in your areas of interest</li>
      </ul>

      <h2>Research Sources</h2>
      <h3>Primary Sources:</h3>
      <ul>
        <li><strong>Interviews:</strong> Talk to experts and people with lived experience</li>
        <li><strong>First-hand accounts:</strong> Diaries, letters, memoirs</li>
        <li><strong>Site visits:</strong> Experience locations in person when possible</li>
        <li><strong>Documents:</strong> Historical records, legal documents, newspapers</li>
      </ul>

      <h3>Secondary Sources:</h3>
      <ul>
        <li><strong>Academic books:</strong> Scholarly research and analysis</li>
        <li><strong>Documentaries:</strong> Visual and audio information</li>
        <li><strong>Professional publications:</strong> Industry magazines and journals</li>
        <li><strong>Online databases:</strong> Academic and professional resources</li>
      </ul>

      <h2>Research Organization</h2>
      <ul>
        <li><strong>Note-taking system:</strong> Organize information by topic or chapter</li>
        <li><strong>Source tracking:</strong> Always record where information came from</li>
        <li><strong>Visual references:</strong> Photos, maps, diagrams</li>
        <li><strong>Expert contacts:</strong> Build relationships with knowledgeable people</li>
      </ul>

      <h2>Avoiding Research Rabbit Holes</h2>
      <ul>
        <li><strong>Set research goals:</strong> Know what you need to find</li>
        <li><strong>Time limits:</strong> Don't let research replace writing</li>
        <li><strong>Story focus:</strong> Research what serves your narrative</li>
        <li><strong>Placeholder method:</strong> Mark spots to research later</li>
      </ul>
    `,
    relatedGuides: ["world-building-guide", "publishing-paths-comparison"]
  }
]

export function getAllGuides(): Guide[] {
  return guides
}

export function getGuideBySlug(slug: string): Guide | null {
  return guides.find(guide => guide.slug === slug) || null
}

export function getGuidesByCategory(category: string): Guide[] {
  return guides.filter(guide => guide.category === category)
}

export function getRelatedGuides(currentSlug: string, limit: number = 2): Guide[] {
  const currentGuide = getGuideBySlug(currentSlug)
  if (!currentGuide) return []
  
  return guides
    .filter(guide => guide.slug !== currentSlug)
    .filter(guide => 
      guide.category === currentGuide.category ||
      guide.tags.some(tag => currentGuide.tags.includes(tag))
    )
    .slice(0, limit)
}