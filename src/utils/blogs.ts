export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogCategories = [
  "Research",
  "Career",
  "Writing",
  "Publishing",
] as const;

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Research Tips for Early-Career Scientists",
    excerpt:
      "Essential strategies for publishing your first paper and building a research career.",
    content: [
      "Starting a research career can feel overwhelming — the pressure to publish, the unfamiliar review process, and the steep learning curve of academic writing all arrive at once. The good news is that most of it comes down to a handful of habits you can build early.",
      "Keep a running log of every experiment, dataset, and decision from day one. Reviewers and co-authors will ask questions six months after you've forgotten the details, and a clean lab notebook saves you hours of reconstruction later.",
      "Read broadly inside your field before you write narrowly. Understanding how your target journal's authors structure their arguments will shape how convincingly you can structure your own.",
      "Finally, don't wait for a 'perfect' first draft — share early versions with mentors and colleagues. Feedback loops are what actually compress the timeline from idea to publication.",
    ],
    image: "/images/blog.png",
    author: {
      name: "Dr. Nazrul Islam",
      avatar: "/images/kazi.png",
    },
    date: "Mar 2026",
    readTime: "6 min read",
    category: "Research",
    tags: ["Research Methodology", "Early Career", "Academic Writing"],
  },
  {
    id: 2,
    title: "Designing Reproducible Studies in Veterinary Microbiology",
    excerpt:
      "Practical steps to make your lab protocols and datasets survive peer review — and replication.",
    content: [
      "Reproducibility issues rarely start at the analysis stage — they start when a protocol is written down loosely enough that two technicians can follow it differently.",
      "Version-control your protocols the same way you would code: date every revision, note why it changed, and keep the previous version accessible. This single habit resolves most 'why doesn't this match the original result' conversations.",
      "Whenever possible, pre-register your hypotheses and analysis plan before data collection. It costs an afternoon up front and saves months of reviewer scrutiny later.",
    ],
    image: "/images/blog.png",
    author: {
      name: "Dr. Nazrul Islam",
      avatar: "/images/kazi.png",
    },
    date: "Feb 2026",
    readTime: "8 min read",
    category: "Research",
    tags: ["Reproducibility", "Microbiology", "Lab Protocols"],
  },
  {
    id: 3,
    title: "Career Advice: From Academia to Industry",
    excerpt:
      "How to transition from academic research to applied science and business roles.",
    content: [
      "The skills that make you a good researcher — critical thinking, structured writing, comfort with ambiguity — transfer directly to industry roles, but the framing has to change.",
      "Academic CVs list publications; industry resumes list outcomes. Translate 'authored 12 peer-reviewed papers' into 'delivered 12 validated research outputs used to inform policy and product decisions.'",
      "Network intentionally. Most academia-to-industry moves happen through a referral, not a cold application, so start building those relationships before you need them.",
    ],
    image: "/images/blog.png",
    author: {
      name: "Dr. Nazrul Islam",
      avatar: "/images/kazi.png",
    },
    date: "Jan 2026",
    readTime: "5 min read",
    category: "Career",
    tags: ["Career Development", "Industry", "Consulting"],
  },
  {
    id: 4,
    title: "Building a Consultancy Practice Alongside Research",
    excerpt:
      "Balancing lab work, publishing, and client consultancy without burning out.",
    content: [
      "Running a consultancy practice while staying active in research means protecting your time as deliberately as you protect your data.",
      "Block dedicated hours for client work and treat them like lab time — no context-switching in the middle. Most burnout in dual-track careers comes from constant interruption, not total workload.",
      "Be upfront with clients about your research commitments. Clear expectations up front prevent the scope-creep conversations that eat into both sides of your work.",
    ],
    image: "/images/blog.png",
    author: {
      name: "Dr. Nazrul Islam",
      avatar: "/images/kazi.png",
    },
    date: "Dec 2025",
    readTime: "4 min read",
    category: "Career",
    tags: ["Consultancy", "Work-Life Balance", "Time Management"],
  },
  {
    id: 5,
    title: "Scientific Writing Masterclass",
    excerpt:
      "A comprehensive guide to writing clear, impactful research papers.",
    content: [
      "Clear scientific writing is not about vocabulary — it's about sentence structure. One idea per sentence, and one point per paragraph, will do more for your acceptance rate than any amount of technical polish.",
      "Write your introduction last. It's far easier to justify a study you've already finished writing up than to guess what your results will say while you're still framing the problem.",
      "Cut every sentence that restates something the reader already knows. Reviewers notice padding, and it slows down the sentences that actually matter.",
    ],
    image: "/images/blog.png",
    author: {
      name: "Dr. Nazrul Islam",
      avatar: "/images/kazi.png",
    },
    date: "Nov 2025",
    readTime: "7 min read",
    category: "Writing",
    tags: ["Scientific Writing", "Manuscript", "Editing"],
  },
  {
    id: 6,
    title: "Turning Lab Notes into a Publishable Draft",
    excerpt:
      "A step-by-step workflow for converting raw research notes into a submission-ready manuscript.",
    content: [
      "The gap between 'I have results' and 'I have a manuscript' is almost always a structuring problem, not a writing problem.",
      "Start by outlining your figures — a paper is often just the explanation of a sequence of figures and tables in the right order. Once that order is right, the prose fills in quickly.",
      "Draft the methods section while the work is still fresh. It's the section most likely to be forgotten in detail, and the easiest to get wrong months later.",
    ],
    image: "/images/blog.png",
    author: {
      name: "Dr. Nazrul Islam",
      avatar: "/images/kazi.png",
    },
    date: "Oct 2025",
    readTime: "6 min read",
    category: "Writing",
    tags: ["Manuscript Drafting", "Workflow", "Academic Writing"],
  },
  {
    id: 7,
    title: "Publication Strategy Guide",
    excerpt:
      "How to choose the right journal and navigate the publishing process successfully.",
    content: [
      "Choosing a journal is a strategic decision, not an afterthought. Match your paper's scope and novelty to the journal's stated aims before you consider its impact factor.",
      "Read a handful of recently published papers from your target journal. If your manuscript's structure and tone don't resemble theirs, expect a desk rejection regardless of how strong your results are.",
      "Plan for revision cycles from the start. A realistic publishing timeline includes at least one full round of major revisions — build that into your expectations, not just your calendar.",
    ],
    image: "/images/blog.png",
    author: {
      name: "Dr. Nazrul Islam",
      avatar: "/images/kazi.png",
    },
    date: "Sep 2025",
    readTime: "9 min read",
    category: "Publishing",
    tags: ["Journal Selection", "Peer Review", "Publication Strategy"],
  },
  {
    id: 8,
    title: "Responding to Reviewer Comments Without Losing Your Mind",
    excerpt:
      "A practical framework for handling peer review feedback constructively and efficiently.",
    content: [
      "Every reviewer comment deserves a direct, itemized response — even the ones that feel unfair. A clear rebuttal letter does more to win over an editor than a perfect resubmission with a vague cover letter.",
      "Separate comments into three buckets: quick fixes, comments requiring new analysis, and disagreements. Tackle the quick fixes first to build momentum before the harder revisions.",
      "When you disagree with a reviewer, explain your reasoning with evidence rather than simply restating your original claim. Editors are looking for engagement, not just compliance.",
    ],
    image: "/images/blog.png",
    author: {
      name: "Dr. Nazrul Islam",
      avatar: "/images/kazi.png",
    },
    date: "Aug 2025",
    readTime: "5 min read",
    category: "Publishing",
    tags: ["Peer Review", "Revisions", "Journal Submission"],
  },
];
