const profile = 'https://github.com/Omarmohammed99';

export const projects = [
  {
    slug: 'sentinel-ai',
    number: '01',
    title: 'Sentinel AI',
    eyebrow: 'Computer Vision · Sequence Modeling',
    short: 'Detecting traffic accidents through vision and sequence.',
    tags: ['Computer Vision', 'Fine-Tuning', 'Sequence Modeling'],
    overview: 'Sentinel AI is an accident detection system that analyzes traffic footage using computer vision and temporal sequence modeling to identify accident events across video frames.',
    problem: 'Rather than relying on isolated images, the detection pipeline captures changes over time to better understand how an incident unfolds. The system combines visual feature extraction with sequential analysis to detect accident patterns from traffic video.',
    role: 'My work focused on developing the AI modeling pipeline, including model training, fine-tuning, and sequence-based accident detection. This is the component presented in the live demo.',
    architecture: [
      ['Video sequence', 'Traffic footage is the system input.'],
      ['Visual feature extraction', 'A fine-tuned MobileNet model extracts features from traffic frames.'],
      ['Temporal sequence modeling', 'LSTM analyzes how visual patterns change over time.'],
      ['Accident detection', 'The pipeline identifies accident patterns in the video.']
    ],
    decisions: 'The AI pipeline was built in Python, containerized with Docker, and deployed on Hugging Face Spaces with REST endpoints for integration with the client interface.\n\nThe system analyzes traffic video as a sequence rather than treating frames independently, making temporal context an important part of the detection pipeline. Performance can vary with video quality, scene complexity, camera perspective, and how clearly an accident is captured in the footage.',
    stack: [['MobileNet', 'Fine-tuned visual feature extraction'], ['LSTM', 'Temporal sequence modeling'], ['Python', 'AI modeling pipeline'], ['Docker', 'Containerized deployment'], ['Hugging Face Spaces', 'Hosted REST API']],
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
    overview: 'OpsPilot investigates operational incidents through multi-step reasoning and dynamic tool calling, then produces evidence-grounded reports. Its workflows maintain persistent state and require explicit human approval before transactional database actions.',
    problem: 'Incident investigations can span multiple steps, tools, and decisions, making it important to preserve context throughout the workflow. OpsPilot connects investigation, persistence, retrieval, and human decision-making in one resumable agentic process.',
    role: 'I built the agent workflow around LangGraph, integrating PostgreSQL and ChromaDB for operational data and retrieval, persistent checkpoints for resumable execution, and human-in-the-loop controls for database actions.',
    architecture: [
      ['Incident', 'An operational issue begins an investigation.'],
      ['LangGraph agent', 'Multi-step reasoning and dynamic tool calls gather evidence.'],
      ['PostgreSQL + ChromaDB', 'Incident retrieval, RAG troubleshooting, and persistent checkpoints.'],
      ['Human approval', 'A person approves or rejects the proposed database action.'],
      ['Transactional write', 'Approved actions use idempotency and audit logging.']
    ],
    decisions: 'The workflow uses resumable LangGraph checkpoints, explicit approval and rejection controls, idempotent database execution, and audit logging to keep system-changing actions controlled and traceable.\n\nThe system was validated through 39 automated tests, including workflows using real LLM calls. Database-modifying actions remain intentionally gated behind human approval rather than allowing the agent to execute them autonomously.',
    stack: [['LangGraph', 'Adaptive, resumable agent workflow'], ['LLMs', 'Reasoning and report generation'], ['FastAPI', 'Python service API'], ['PostgreSQL', 'Incident records and transactional actions'], ['ChromaDB', 'Vector retrieval for troubleshooting']],
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
    tags: ['RAG Architecture', 'LangChain', 'Vector DB'],
    overview: 'This bilingual Retrieval-Augmented Generation system enables users to query Egyptian traffic-law documentation and explore accident-liability questions in Arabic or English. It mirrors the user’s language and uses retrieval, prompt design, and guardrails to keep responses grounded within the traffic-law domain.',
    problem: 'Legal documents can be difficult to navigate conversationally, particularly across Arabic and English. The system retrieves relevant context from the document knowledge base before generating a response, helping reduce unsupported answers while keeping the interaction focused on the available traffic-law information.',
    role: 'I built the RAG pipeline and application architecture, including document retrieval with ChromaDB, LangChain orchestration, bilingual prompt and guardrail design, LLM integration, and the Flask backend used by the interactive application.',
    architecture: [
      ['Arabic or English question', 'The user asks about Egyptian traffic-law documentation.'],
      ['LangChain + ChromaDB', 'Relevant document context is retrieved.'],
      ['LLMs', 'A response is generated in the same language as the question.'],
      ['Guardrails', 'Out-of-context requests are rejected; answers are not represented as legal advice.']
    ],
    decisions: 'The application uses Flask, LangChain, ChromaDB, and LLMs to connect retrieval, generation, and the interactive user experience. The prompting layer enforces Arabic/English language mirroring and rejects requests that fall outside the intended traffic-law domain.\n\nResponses depend on the relevance of the retrieved context and the coverage of the underlying document knowledge base. Guardrails and retrieval grounding reduce unsupported responses, but the system is designed as an AI-assisted information tool rather than a substitute for professional legal advice.',
    stack: [['Flask', 'Python backend'], ['LangChain', 'RAG orchestration'], ['ChromaDB', 'Document retrieval'], ['LLMs', 'Language-model responses']],
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
    overview: 'Smart Mask Detection is a real-time computer vision system that uses OpenCV and a fine-tuned MobileNetV2 model to detect whether a person is wearing a face mask.',
    problem: 'The project extends the detection pipeline beyond software by integrating it with an IoT-enabled robotic-arm setup, connecting visual predictions to a physical system response.',
    role: 'The project explores how lightweight computer vision models can bridge real-time image-based inference and physical automation.',
    architecture: [
      ['Camera image', 'A frame is captured for analysis.'],
      ['OpenCV + MobileNetV2', 'The image is processed by the fine-tuned mask detector.'],
      ['IoT integration', 'Detection output connects to a robotic-arm workflow for physical response.']
    ],
    decisions: 'The system uses a fine-tuned MobileNetV2 model with OpenCV for real-time visual inference, with the detection output connected to an IoT and robotic-arm workflow for physical response.\n\nAs a real-time vision system, performance depends on factors such as lighting conditions, camera quality, subject positioning, and available compute resources. The project focuses on practical real-time detection and physical-system integration rather than large-scale production deployment.',
    stack: [['MobileNetV2', 'Fine-tuned image classifier'], ['OpenCV', 'Image capture and processing'], ['IoT / robotic arm', 'Physical system response']],
    demo: null,
    source: 'https://github.com/Omarmohammed99/Face-and-Mask-Detector',
    visual: 'CAMERA / DETECT / RESPOND',
    next: 'sentinel-ai',
    previous: 'traffic-law-rag'
  }
];

export const getProject = slug => projects.find(project => project.slug === slug);
export { profile };
