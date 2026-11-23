const profile = 'https://github.com/Omarmohammed99';

export const projects = [
  {
    slug: 'sentinel-ai',
    number: '01',
    title: 'Sentinel AI',
    eyebrow: 'Graduation project · Flagship',
    short: 'Traffic accidents, understood in sequence and turned into a structured incident report.',
    tags: ['Computer Vision', 'Fine-Tuning', 'Generative AI'],
    overview: 'Sentinel AI brings together video sequence analysis and vision-language reasoning to detect traffic accidents and prepare an incident report. It was developed as a graduation project at Future University in Egypt.',
    problem: 'A traffic clip contains change over time, not just a single frame. Sentinel combines sequential detection with a language model layer to make the output easier to review.',
    role: 'Developed as a graduation project. The available CV describes the detection pipeline and Gemini integration; individual ownership boundaries are not specified.',
    architecture: [
      ['Video sequence', 'Traffic footage is the system input.'],
      ['MobileNet + LSTM', 'Sequential model analyzes video for accident events.'],
      ['Gemini Flash', 'Generates a structured collision report after an accident is verified.'],
      ['Incident report', 'A readable summary is returned for review.']
    ],
    decisions: 'The CV describes a Python vision pipeline containerized with Docker and deployed to Hugging Face Spaces, with REST endpoints for a client interface. No model evaluation figures or latency benchmarks were provided.',
    stack: [['MobileNet + LSTM', 'Video sequence detection'], ['Gemini Flash', 'Structured incident reporting'], ['Python', 'Core vision pipeline'], ['Docker', 'Containerized deployment'], ['Hugging Face Spaces', 'Hosted API deployment']],
    demo: 'https://omarrmohammed-sentinel-ai-core.hf.space/',
    source: 'https://github.com/Omarmohammed99/Sentinel-AI',
    visual: 'SEQUENCE / INCIDENT / REPORT',
    next: 'opspilot',
    previous: 'smart-mask-detection'
  },
  {
    slug: 'opspilot',
    number: '02',
    title: 'OpsPilot',
    eyebrow: 'Agentic AI · Human approval',
    short: 'An incident-investigation agent that gathers evidence, resumes work, and asks before it writes.',
    tags: ['LangGraph', 'Agentic AI', 'Human-in-the-Loop'],
    overview: 'OpsPilot investigates operational incidents through multi-step reasoning and dynamic tool calling, then produces evidence-grounded reports. Its workflows include persistent state and explicit human approval before transactional database actions.',
    problem: 'Incident workflows can lose context between steps, and a helpful recommendation should not silently become a system change. OpsPilot connects investigation, persistence, and human decisions in one resumable process.',
    role: 'The updated CV describes implementation across the agent workflow, persistence and retrieval, approval controls, and end-to-end validation.',
    architecture: [
      ['Incident', 'An operational issue begins an investigation.'],
      ['LangGraph agent', 'Multi-step reasoning and dynamic tool calls gather evidence.'],
      ['PostgreSQL + ChromaDB', 'Incident retrieval, RAG troubleshooting, and persistent checkpoints.'],
      ['Human approval', 'A person approves or rejects the proposed database action.'],
      ['Transactional write', 'Approved actions use idempotency and audit logging.']
    ],
    decisions: 'The CV describes resumable LangGraph checkpoints, approval and rejection controls, idempotent database execution, and audit logs. It reports 39 automated tests, including real LLM calls; no independent test report is present in this portfolio repository.',
    stack: [['LangGraph', 'Adaptive, resumable agent workflow'], ['Groq LLMs', 'Reasoning and report generation'], ['FastAPI', 'Python service API'], ['PostgreSQL', 'Incident records and transactional actions'], ['ChromaDB', 'Vector retrieval for troubleshooting']],
    demo: 'https://opspilot-c469qmwll-omar-4b2c.vercel.app/',
    source: 'https://github.com/Omarmohammed99/OpsPilot',
    visual: 'INVESTIGATE / REVIEW / APPROVE',
    next: 'traffic-law-rag',
    previous: 'sentinel-ai'
  },
  {
    slug: 'traffic-law-rag',
    number: '03',
    title: 'Bilingual Traffic Law RAG',
    eyebrow: 'Generative AI · Arabic / English',
    short: 'A bilingual way to ask questions about Egyptian traffic law, grounded in retrieved documents.',
    tags: ['RAG Architecture', 'LangChain', 'ChromaDB'],
    overview: 'This bilingual retrieval-augmented generation application helps people query Egyptian traffic-law documentation and explore accident-liability questions. It mirrors the user’s language and uses guardrails for out-of-scope prompts.',
    problem: 'Legal documents are difficult to search conversationally, especially across Arabic and English. The system retrieves relevant context before generating a response and aims to keep answers within the traffic-law domain.',
    role: 'The updated CV describes system architecture, prompt and guardrail design, and deployment of the backend and interactive frontend.',
    architecture: [
      ['Arabic or English question', 'The user asks about Egyptian traffic-law documentation.'],
      ['LangChain + ChromaDB', 'Relevant document context is retrieved.'],
      ['Groq LLM', 'A response is generated in the same language as the question.'],
      ['Guardrails', 'Out-of-context requests are rejected; answers are not represented as legal advice.']
    ],
    decisions: 'The CV names Flask, LangChain, ChromaDB, and Groq LLMs. It describes strict language mirroring and out-of-context rejection. The portfolio repository does not include the application source or an evaluation report.',
    stack: [['Flask', 'Python backend'], ['LangChain', 'RAG orchestration'], ['ChromaDB', 'Document retrieval'], ['Groq LLMs', 'Language-model responses']],
    demo: 'https://traffic-accident-rag-chatbot.vercel.app/',
    source: 'https://github.com/Omarmohammed99/Traffic-Accident-RAG-Chatbot',
    visual: 'AR / EN / RETRIEVE',
    next: 'smart-mask-detection',
    previous: 'opspilot'
  },
  {
    slug: 'smart-mask-detection',
    number: '04',
    title: 'Smart Mask Detection',
    eyebrow: 'Computer vision · IoT',
    short: 'Real-time face-mask detection linking a vision model with a physical robotic-arm setup.',
    tags: ['Real-Time Detection', 'Computer Vision', 'IoT Integration'],
    overview: 'A computer-vision project that uses OpenCV and a fine-tuned MobileNetV2 model to detect face-mask use, with an IoT and robotic-arm integration described in the original portfolio.',
    problem: 'The project explores how a lightweight vision model can connect an image-based detection task to a physical system response.',
    role: 'Project authorship and implementation details are not documented in the updated CV. The original portfolio lists the project and its source repository.',
    architecture: [
      ['Camera image', 'A frame is captured for analysis.'],
      ['OpenCV + MobileNetV2', 'The image is processed by the fine-tuned mask detector.'],
      ['IoT integration', 'The original portfolio describes a robotic-arm connection.']
    ],
    decisions: 'The original portfolio mentions less than 50 ms latency but gives no measurement setup, hardware, or evaluation source. That figure is omitted. No public demo is listed.',
    stack: [['MobileNetV2', 'Fine-tuned image classifier'], ['OpenCV', 'Image capture and processing'], ['IoT / robotic arm', 'Physical integration described by the original portfolio']],
    demo: null,
    source: 'https://github.com/Omarmohammed99/Face-and-Mask-Detector',
    visual: 'CAMERA / DETECT / RESPOND',
    next: 'sentinel-ai',
    previous: 'traffic-law-rag'
  }
];

export const getProject = slug => projects.find(project => project.slug === slug);
export { profile };
