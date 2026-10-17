/*
	Traducciones al inglés. El español vive en el HTML (idioma por defecto);
	main.js captura los textos originales del DOM y los usa como diccionario "es".
	Cada clave corresponde a un atributo data-i18n en index.html.
*/

window.I18N_EN = {
	'meta.title': 'Pedro Molina · Backend Developer',
	'meta.description': 'Portfolio of Pedro Alejandro Molina Ortiz, Systems Engineer and backend developer based in Cúcuta, Colombia. Web development with Django and Spring Boot, databases and APIs.',

	'nav.skip': 'Skip to content',
	'nav.about': 'About',
	'nav.stack': 'Stack',
	'nav.experience': 'Experience',
	'nav.projects': 'Projects',
	'nav.education': 'Education',
	'nav.contact': 'Contact',
	'nav.cv': 'Resume',

	'hero.eyebrow': 'Cúcuta, Colombia · Available for remote work',
	'hero.title': 'Systems Engineer · Backend Developer',
	'hero.lead': 'Web development with Django and Spring Boot. I build functional, user-focused digital solutions with an emphasis on backend, data and APIs.',
	'hero.cta1': 'View projects',
	'hero.cta2': 'Get in touch',

	'about.h2': 'About me',
	'about.p1': 'I am a web developer focused on building modern, functional digital solutions oriented to user needs. I have experience in frontend, backend, databases and technology integration to build efficient, scalable applications.',
	'about.p2': 'I am passionate about technology, continuous learning and solving real problems through software. I am currently studying Systems Engineering and work remotely, open to employment and freelance projects, especially with micro and small businesses that need a solid digital presence.',
	'about.f1': 'years of experience',
	'about.f2': 'Location',
	'about.f3v': 'Native Spanish · English B1',
	'about.f3': 'Languages',
	'about.f4v': 'Remote · Employment or freelance',
	'about.f4': 'Work mode',

	'stack.h2': 'Tech stack',
	'stack.p': 'Tools I work with, grouped by how much I use them.',
	'stack.g1': 'Core',
	'stack.g2': 'Experienced',
	'stack.g3': 'Familiar',
	'stack.g4': 'AI tools',

	'exp.h2': 'Professional experience',
	'exp.1.date': 'Mar 2024 — Present',
	'exp.1.mode': 'Remote · Internship',
	'exp.1.sub': 'Python code review',
	'exp.1.b1': 'Provide technical support to programming students.',
	'exp.1.b2': 'Review Python and SQL code, identifying errors and proposing solutions.',
	'exp.1.b3': 'Guide each student through their learning process so they understand and overcome technical blockers.',
	'exp.1.b4': 'Handle reports related to the operation of the learning platform.',
	'exp.2.date': 'Aug 2026 — Present',
	'exp.2.mode': 'Professional internship',
	'exp.2.role': 'Data & Web Presence Developer',
	'exp.2.b1': 'Unified three Excel templates for RFID tag registration into a single consolidated format, with automated validation and import into the cloud database.',
	'exp.2.b2': 'Built an API to register sold tags via barcode and update the information in real time.',
	'exp.2.b3': 'Reviewed and optimized the traceability database structure and the reconciliation process so the client could run it on their own.',
	'exp.2.b4': 'Improved the corporate website with content on RFID and Industry 4.0, an FAQ section, on-page SEO, sitemap and tracking with Google Search Console and Analytics.',

	'proj.h2': 'Featured projects',
	'proj.p': 'Real work combining web development, backend, data and APIs.',
	'proj.role': 'My role',
	'proj.highlights': 'Highlights',
	'proj.view': 'View project',
	'proj.4.cat': 'Own venture · Brand and product · In production',
	'proj.4.sub': 'Technology for small businesses — pevlyn.com',
	'proj.4.desc': 'My own brand, from which I build websites, systems and automations for micro and small businesses. The site presents the offering as a four-layer ecosystem — digital presence, client and appointment management, automation and custom software — so a business can start with the layer it needs today without throwing away what it built when the next step arrives.',
	'proj.4.role': 'Founder and developer: brand identity, corporate site and delivery of client projects',
	'proj.4.hl': 'Site built with React and Vite, with sections for the problem, layered solutions, working method, detailed services and FAQ. Lead capture form with validation and a direct WhatsApp channel. The first piece of the ecosystem, PEVLYN Agenda, is already in production.',
	'proj.5.cat': 'Own product · Multi-tenant SaaS · In production',
	'proj.5.sub': 'Appointment and booking management — agenda.pevlyn.com',
	'proj.5.desc': 'B2B SaaS platform where each business manages its services, its team and its schedule, and its clients book on their own from a public link. Decoupled architecture between a Django REST Framework API and a Next.js 15 frontend, with strict per-tenant data isolation and Row Level Security.',
	'proj.5.role': 'Full-stack developer: architecture, API, data model and interface',
	'proj.5.hl': 'Availability and booking conflict engine built on GiST exclusion constraints (btree_gist) in PostgreSQL, removing race conditions and guaranteeing zero overlaps at the database level. Layered architecture with a Service-Selector pattern separating business logic from HTTP controllers, backed by more than 150 automated tests across unit, integration and isolation suites. Interface with Server and Client Components, interactive onboarding, public booking through cryptographically signed links and transactional email via Resend.',
	'proj.1.cat': 'Full-stack · Clinical system · In production',
	'proj.1.sub': 'Physiotherapy, aesthetics and wellness — Cúcuta',
	'proj.1.desc': 'Public website and integrated management system for the clinic. Patients browse the services and book an appointment online with no sign-up, while the team signs in to a backend that manages patients, services, appointments and medical records, keeping each patient history in one place instead of scattered across chats and paper.',
	'proj.1.role': 'Full-stack developer: public interface, API and medical records module, delivered through PEVLYN',
	'proj.1.hl': 'REST API on Django REST Framework with JWT authentication and token refresh, plus modules for patients, services, medical records and public booking. Vanilla JavaScript frontend consuming the API, with CSS variables, Grid and clamp(), technical SEO with JSON-LD and Open Graph, and accessibility with ARIA and prefers-reduced-motion.',
	'proj.2.cat': 'Backend · Data · Web · Professional project',
	'proj.2.name': 'Unified import and web optimization',
	'proj.2.desc': 'Each batch of RFID tags had to be registered with three separate Excel files — a slow, ambiguous and error-prone process. I designed a consolidated template and an automated validation and import module into the cloud database, plus an API to register sales by barcode in real time. In parallel, I improved the corporate website, its content and its SEO positioning.',
	'proj.2.role': 'Data and web presence developer during the professional internship',
	'proj.2.hl': 'Validation of required fields, formats and duplicates; traceability database optimization; client-runnable reconciliation; FAQ, sitemap, metadata and metrics with Search Console and Analytics.',

	'edu.h2': 'Education',
	'edu.1.title': 'Systems Engineering',
	'edu.1.status': 'In progress · Cúcuta, Colombia',

	'contact.h2': 'Contact',
	'contact.p': 'Have a project or a job opening? Write to me and let’s talk.',
	'contact.cv': 'Download resume (PDF)',

	'footer.credit': 'Design based on'
};
