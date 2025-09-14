export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  publishedDate: string;
  readTime: string;
}

export const featuredArticle: NewsArticle = {
  id: "1",
  title: "Global Climate Summit Reaches Historic Agreement on Renewable Energy Transition",
  summary: "World leaders unite in unprecedented commitment to accelerate clean energy adoption and reduce carbon emissions by 50% before 2030.",
  content: `
    <p>In a landmark decision that could reshape the global energy landscape, representatives from 195 countries have reached a comprehensive agreement at the Global Climate Summit held in Geneva this week.</p>
    
    <p>The agreement, dubbed the "Geneva Accord," establishes binding commitments for nations to transition to renewable energy sources and implement stringent carbon reduction measures. Under the new framework, developed nations will provide $200 billion annually to support developing countries in their clean energy transitions.</p>
    
    <p>"This is a defining moment for our planet," said UN Secretary-General António Guterres during the closing ceremony. "The Geneva Accord represents the most ambitious climate action plan in human history."</p>
    
    <p>Key provisions of the agreement include:</p>
    <ul>
      <li>Mandatory 50% reduction in carbon emissions by 2030</li>
      <li>Phase-out of coal-fired power plants by 2035</li>
      <li>$500 billion global investment in renewable energy infrastructure</li>
      <li>Establishment of international carbon pricing mechanisms</li>
    </ul>
    
    <p>The accord has received widespread support from environmental groups, though some critics argue that the timeline may be too ambitious for practical implementation. Markets responded positively, with renewable energy stocks surging globally.</p>
    
    <p>Implementation begins immediately, with the first progress reports due within six months. The agreement will be reviewed and potentially strengthened every five years, ensuring continuous progress toward global climate objectives.</p>
  `,
  imageUrl: "https://images.unsplash.com/photo-1613441588514-e90d25492e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMG5ld3MlMjBoZWFkbGluZXxlbnwxfHx8fDE3NTc4MTE0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  category: "World",
  author: "Sarah Chen",
  publishedDate: "2025-01-14",
  readTime: "4 min read"
};

export const newsArticles: NewsArticle[] = [
  {
    id: "2",
    title: "Tech Giants Report Record Quarterly Earnings Despite Market Volatility",
    summary: "Major technology companies exceed analyst expectations with strong performance in AI and cloud computing sectors.",
    content: `
      <p>Major technology companies have reported exceptional quarterly earnings, defying market volatility and economic uncertainty that has impacted other sectors.</p>
      
      <p>Leading the charge, several tech giants posted double-digit growth figures, primarily driven by robust demand for artificial intelligence services and cloud computing solutions. The sector's resilience has surprised analysts who had predicted more conservative growth patterns.</p>
      
      <p>"The AI revolution is driving unprecedented demand for our services," said a spokesperson from one of the leading companies. "Enterprise clients are accelerating their digital transformation initiatives, creating sustained growth opportunities."</p>
      
      <p>Key highlights from the earnings reports include:</p>
      <ul>
        <li>Cloud computing revenue up 28% year-over-year</li>
        <li>AI services showing 150% growth in enterprise adoption</li>
        <li>Strong international expansion in emerging markets</li>
        <li>Increased investment in sustainable technology initiatives</li>
      </ul>
      
      <p>Despite the positive results, companies remain cautious about future quarters, citing potential regulatory challenges and geopolitical tensions that could impact global operations.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBvZmZpY2V8ZW58MXx8fHwxNzU3ODM3MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Business",
    author: "Michael Torres",
    publishedDate: "2025-01-14",
    readTime: "3 min read"
  },
  {
    id: "3",
    title: "Diplomatic Breakthrough: Historic Peace Talks Show Promise",
    summary: "International mediators report significant progress in ongoing peace negotiations between conflicting parties.",
    content: `
      <p>International diplomatic efforts have achieved a significant breakthrough in long-standing peace negotiations, raising hopes for a lasting resolution to regional conflicts.</p>
      
      <p>Senior diplomats from multiple nations convened for intensive talks over the past week, resulting in preliminary agreements on several contentious issues that have hindered progress for months.</p>
      
      <p>The breakthrough comes after months of careful diplomatic engagement and trust-building measures facilitated by international mediators. All parties have expressed cautious optimism about the path forward.</p>
      
      <p>"We've made more progress in the past week than in the previous six months combined," stated the lead mediator. "There's a genuine commitment from all sides to find peaceful solutions."</p>
      
      <p>Key developments include:</p>
      <ul>
        <li>Agreement on humanitarian corridor establishment</li>
        <li>Preliminary ceasefire frameworks</li>
        <li>Refugee resettlement program outline</li>
        <li>Economic cooperation initiatives</li>
      </ul>
      
      <p>The next phase of negotiations is scheduled to begin next month, with international observers expressing measured optimism about achieving a comprehensive peace agreement.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1742996111692-2d924f12a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMHBvbGl0aWNzJTIwbWVldGluZ3xlbnwxfHx8fDE3NTc4MzcwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "World",
    author: "Elena Petrov",
    publishedDate: "2025-01-13",
    readTime: "5 min read"
  },
  {
    id: "4",
    title: "Championship Finals Draw Record Television Viewership",
    summary: "Sports broadcasting hits new milestones as global audiences tune in for the season's most anticipated matches.",
    content: `
      <p>The championship finals have shattered television viewership records, with global audiences reaching unprecedented numbers across multiple broadcasting platforms.</p>
      
      <p>Preliminary data suggests that viewership exceeded previous records by more than 30%, driven by compelling storylines, exceptional athletic performances, and expanded international broadcast partnerships.</p>
      
      <p>The surge in viewership reflects the growing global appetite for high-quality sports entertainment and the success of innovative broadcasting technologies that have enhanced the viewing experience.</p>
      
      <p>"These numbers demonstrate the universal appeal of championship-level competition," said a broadcasting executive. "Fans around the world are more connected to the sport than ever before."</p>
      
      <p>Viewership highlights include:</p>
      <ul>
        <li>Peak concurrent viewership of 85 million globally</li>
        <li>50% increase in streaming platform engagement</li>
        <li>Record social media interaction during broadcasts</li>
        <li>Expanded reach in emerging markets</li>
      </ul>
      
      <p>The success has prompted discussions about expanding coverage and investing in additional sports broadcasting initiatives to meet growing global demand.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1631746410377-b0e23f61d083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwY3Jvd2R8ZW58MXx8fHwxNzU3NzEwMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sports",
    author: "James Rodriguez",
    publishedDate: "2025-01-13",
    readTime: "3 min read"
  },
  {
    id: "5",
    title: "Film Industry Embraces Revolutionary Digital Technology",
    summary: "Major studios announce adoption of groundbreaking production techniques that promise to transform moviemaking.",
    content: `
      <p>The entertainment industry is undergoing a technological revolution as major film studios announce the widespread adoption of cutting-edge digital production techniques.</p>
      
      <p>These innovations promise to dramatically reduce production costs while expanding creative possibilities for filmmakers worldwide. The technology represents the most significant advancement in movie production since the transition to digital cameras.</p>
      
      <p>Industry leaders predict that these developments will democratize high-quality film production and enable smaller studios to compete with major productions on a global scale.</p>
      
      <p>"We're witnessing the biggest transformation in filmmaking since the advent of sound," commented a prominent director. "These tools will unleash unprecedented creative potential."</p>
      
      <p>Key technological advances include:</p>
      <ul>
        <li>AI-assisted visual effects production</li>
        <li>Real-time rendering capabilities</li>
        <li>Enhanced virtual production environments</li>
        <li>Automated post-production workflows</li>
      </ul>
      
      <p>The first films utilizing these technologies are expected to reach theaters within the next 18 months, marking a new era in cinematic storytelling.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1515100398104-f7221da41f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwbW92aWUlMjB0aGVhdGVyfGVufDF8fHx8MTc1NzgzNzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Entertainment",
    author: "Rachel Kim",
    publishedDate: "2025-01-12",
    readTime: "4 min read"
  },
  {
    id: "6",
    title: "Cultural Festival Celebrates Rich Heritage and Modern Innovation",
    summary: "Annual celebration showcases traditional arts alongside contemporary cultural expressions in vibrant display.",
    content: `
      <p>The annual cultural festival has concluded with record attendance, successfully celebrating both traditional heritage and contemporary cultural innovation in a spectacular showcase of diversity.</p>
      
      <p>Spanning five days, the festival featured hundreds of performances, exhibitions, and interactive experiences that highlighted the rich tapestry of cultural traditions while embracing modern artistic expressions.</p>
      
      <p>Visitors experienced everything from classical dance performances and traditional craft demonstrations to cutting-edge digital art installations and fusion music concerts.</p>
      
      <p>"This festival represents the perfect blend of honoring our past while embracing our future," said the festival director. "Culture is living and breathing, constantly evolving while maintaining its roots."</p>
      
      <p>Festival highlights included:</p>
      <ul>
        <li>Over 200 cultural performances from 50 countries</li>
        <li>Interactive workshops on traditional crafts</li>
        <li>Contemporary art installations</li>
        <li>Culinary experiences featuring authentic regional cuisines</li>
      </ul>
      
      <p>The success of this year's festival has prompted organizers to expand the program for next year, with plans to include additional cultural exchanges and educational initiatives.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1679284409957-51a4f4a2539a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMGN1bHR1cmUlMjBzdHJlZXR8ZW58MXx8fHwxNzU3ODM3MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "India",
    author: "Priya Sharma",
    publishedDate: "2025-01-12",
    readTime: "3 min read"
  },
  {
    id: "7",
    title: "Revolutionary Wellness Approach Shows Promising Results",
    summary: "New holistic health methodology demonstrates significant improvements in patient well-being and recovery rates.",
    content: `
      <p>A groundbreaking approach to wellness and health recovery is showing remarkable results in clinical trials, offering new hope for patients seeking alternative treatment methods.</p>
      
      <p>The innovative methodology combines traditional wellness practices with modern medical science, creating a comprehensive treatment framework that addresses both physical and mental health aspects.</p>
      
      <p>Early results from pilot programs indicate significant improvements in patient outcomes, including faster recovery times and enhanced overall well-being metrics.</p>
      
      <p>"We're seeing unprecedented results that challenge conventional treatment approaches," explained the lead researcher. "This holistic method addresses the whole person, not just symptoms."</p>
      
      <p>Key program components include:</p>
      <ul>
        <li>Personalized nutrition and fitness plans</li>
        <li>Mindfulness and stress reduction techniques</li>
        <li>Community support networks</li>
        <li>Integration with conventional medical care</li>
      </ul>
      
      <p>The program is being expanded to additional locations, with researchers optimistic about its potential to revolutionize healthcare approaches globally.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1678724357812-74f239cd1620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBoZWFsdGglMjBmaXRuZXNzfGVufDF8fHx8MTc1NzgzNzA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Lifestyle",
    author: "Dr. Amanda Foster",
    publishedDate: "2025-01-11",
    readTime: "5 min read"
  },
  {
    id: "8",
    title: "Breakthrough Innovation Revolutionizes Computing Performance",
    summary: "Scientists achieve quantum computing milestone that could transform data processing capabilities across industries.",
    content: `
      <p>Researchers have achieved a significant breakthrough in quantum computing technology, successfully demonstrating computational capabilities that far exceed traditional processing methods.</p>
      
      <p>The advancement represents years of scientific research culminating in a practical application that could revolutionize how complex problems are solved across multiple industries.</p>
      
      <p>Initial testing shows that the new system can process certain types of calculations thousands of times faster than conventional computers, opening possibilities for applications in drug discovery, climate modeling, and financial analysis.</p>
      
      <p>"This is a pivotal moment in computing history," stated the project's lead scientist. "We're moving from theoretical possibilities to practical applications that will benefit society."</p>
      
      <p>Breakthrough achievements include:</p>
      <ul>
        <li>1000x improvement in processing speed for specific tasks</li>
        <li>Stable quantum state maintenance for extended periods</li>
        <li>Error correction mechanisms for reliable operation</li>
        <li>Scalable architecture for future expansion</li>
      </ul>
      
      <p>Commercial applications are expected to emerge within the next five years, with several technology companies already expressing interest in licensing the technology.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1696431284301-b09a8715edaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGNvbXB1dGVyfGVufDF8fHx8MTc1Nzc4MTE5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Technology",
    author: "Dr. Lisa Chen",
    publishedDate: "2025-01-11",
    readTime: "4 min read"
  }
];

export const categories = [
  "Top Stories",
  "World", 
  "India",
  "Business",
  "Technology", 
  "Entertainment", 
  "Sports",
  "Lifestyle"
];

export const trendingStories = [
  { id: "1", title: "Global Climate Summit Reaches Historic Agreement", category: "World" },
  { id: "2", title: "Tech Giants Report Record Quarterly Earnings", category: "Business" },
  { id: "3", title: "Championship Finals Draw Record Viewership", category: "Sports" },
  { id: "4", title: "Revolutionary Wellness Approach Shows Results", category: "Lifestyle" },
  { id: "5", title: "Quantum Computing Breakthrough Achieved", category: "Technology" }
];

export const mostReadStories = [
  { id: "2", title: "Tech Giants Report Record Quarterly Earnings", category: "Business" },
  { id: "1", title: "Global Climate Summit Reaches Historic Agreement", category: "World" },
  { id: "8", title: "Breakthrough Innovation Revolutionizes Computing", category: "Technology" },
  { id: "6", title: "Cultural Festival Celebrates Rich Heritage", category: "India" },
  { id: "4", title: "Championship Finals Draw Record Viewership", category: "Sports" }
];