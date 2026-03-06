export const navConfig = {
    en: {
        main: [
            {
                title: "Product",
                key: "solutions",
                type: "dropdown",
                groups: [
                    {
                        title: "Core Engine",
                        items: [
                            { title: "Text Translation", href: "/product/text", desc: "Context-aware, segment-level translation.", icon: "FileText" },
                            { title: "Document Translation", href: "/product/documents", desc: "Layout fidelity. Format preserved.", icon: "Layers" },
                            { title: "Context Awareness", href: "/product/context", desc: "Seven layers. One precise output.", icon: "Cpu" },
                        ]
                    },
                    {
                        title: "Features",
                        items: [
                            { title: "Client Management", href: "/features/client-management", desc: "Organize memories by client.", icon: "Briefcase" },
                            { title: "Project Management", href: "/features/project-management", desc: "Track translation progress.", icon: "CheckSquare" },
                            { title: "Translation Memory", href: "/features/translation-memory", desc: "Inject matches as holistic context.", icon: "Database" },
                            { title: "Brand Voice", href: "/features/brand-voice", desc: "Enforce tone and style.", icon: "Mic" },
                            { title: "Team Collaboration", href: "/features/team-collaboration", desc: "Work together seamlessly.", icon: "Users" },
                            { title: "Quick Translations", href: "/features/quick-translations", desc: "Instant text translation.", icon: "Zap" }
                        ]
                    }
                ]
            },
            {
                title: "Use Cases",
                key: "solutions_bofu",
                type: "dropdown",
                items: [
                    { title: "SaaS Localization", href: "/use-cases/saas-localization", desc: "Ship your product in 50+ languages.", icon: "Code" },
                    { title: "Document Translation", href: "/use-cases/document-translation", desc: "PDFs that look native.", icon: "FileText" },
                    { title: "Marketing Translation", href: "/use-cases/marketing-translation", desc: "Brand Voice across every language.", icon: "Megaphone" },
                ]
            },
            {
                title: "Who it's for",
                key: "whofor",
                type: "dropdown",
                groups: [
                    {
                        title: "Roles",
                        items: [
                            { title: "Freelancers", href: "/for/freelancers", desc: "Terminology, tone, and client memory.", icon: "User" },
                            { title: "Agencies", href: "/for/agencies", desc: "Shared TM and brand voice for teams.", icon: "Users" },
                            { title: "Localization Managers", href: "/roles/localization-manager", desc: "Your workflow, simplified.", icon: "Settings" },
                            { title: "Content Marketers", href: "/roles/content-marketer", desc: "Brand voice consistency.", icon: "PenTool" }
                        ]
                    },
                    {
                        title: "Industries",
                        items: [
                            { title: "SaaS Teams", href: "/for/saas-teams", desc: "API, RBAC, and precision TM.", icon: "Code" },
                            { title: "E-Commerce", href: "/industries/ecommerce", desc: "Product catalogs in 50+ languages.", icon: "ShoppingCart" },
                            { title: "Legal & Compliance", href: "/industries/legal", desc: "Format preservation and strict accuracy.", icon: "FileText" },
                            { title: "Global Marketing", href: "/for/global-marketing", desc: "Brand Voice across all channels.", icon: "Megaphone" }
                        ]
                    }
                ]
            },
            {
                title: "Resources",
                key: "resources",
                type: "dropdown",
                items: [
                    { title: "The Journal", href: "/notes", desc: "Thoughts on AI & translation craft.", icon: "BookOpen" },
                    { title: "Topic Library", href: "/topic", desc: "Concepts explained.", icon: "Library" },
                    { title: "Glossary", href: "/topic/glossary", desc: "Translation & localization terms.", icon: "Library" },
                    { title: "Compare Tools", href: "/compare", desc: "Market analysis 2026.", icon: "BarChart2" },
                    { title: "API Documentation", href: "/docs", desc: "For developers.", icon: "Code" }
                ]
            },
            { title: "Method", href: "/method", type: "link" },
            { title: "Pricing", href: "/pricing", type: "link" }
        ],
        footer: {
            solutions: [
                { title: "Text Translation", href: "/product/text" },
                { title: "Document Translation", href: "/product/documents" },
                { title: "Context Awareness", href: "/product/context" },
                { title: "SaaS Localization", href: "/use-cases/saas-localization" },
            ],
            resources: [
                { title: "Journal (Notes)", href: "/notes" },
                { title: "Topic Library", href: "/topic" },
                { title: "Glossary", href: "/topic/glossary" },
                { title: "Compare Tools", href: "/compare" },
                { title: "API Docs", href: "/docs" },
                { title: "Roadmap", href: "/roadmap" }
            ],
            company: [
                { title: "Manifesto", href: "/about" },
                { title: "Contact", href: "/contact" },
                { title: "Legal", href: "/legal" },
            ]
        }
    },
    de: {
        main: [
            {
                title: "Produkt",
                key: "solutions",
                type: "dropdown",
                groups: [
                    {
                        title: "Core Engine",
                        items: [
                            { title: "Text-Übersetzung", href: "/de/product/text", desc: "Kontextsensitiv. Segment für Segment.", icon: "FileText" },
                            { title: "Dokumenten-Übersetzung", href: "/de/product/documents", desc: "Layout bleibt erhalten.", icon: "Layers" },
                            { title: "Kontext-Intelligenz", href: "/de/product/context", desc: "Sieben Schichten. Eine präzise Ausgabe.", icon: "Cpu" },
                        ]
                    },
                    {
                        title: "Features",
                        items: [
                            { title: "Client Management", href: "/de/features/client-management", desc: "TMs nach Kunden ordnen.", icon: "Briefcase" },
                            { title: "Project Management", href: "/de/features/project-management", desc: "Fortschritt & Aufgaben.", icon: "CheckSquare" },
                            { title: "Translation Memory", href: "/de/features/translation-memory", desc: "Matches als ganzheitlichen Kontext nutzen.", icon: "Database" },
                            { title: "Brand Voice", href: "/de/features/brand-voice", desc: "Tonalität strict einhalten.", icon: "Mic" },
                            { title: "Team Collaboration", href: "/de/features/team-collaboration", desc: "Nahtlose Zusammenarbeit.", icon: "Users" },
                            { title: "Quick Translations", href: "/de/features/quick-translations", desc: "Einfach Text übersetzen.", icon: "Zap" }
                        ]
                    }
                ]
            },
            {
                title: "Use Cases",
                key: "solutions_bofu",
                type: "dropdown",
                items: [
                    { title: "SaaS-Lokalisierung", href: "/de/use-cases/saas-localization", desc: "Dein Produkt in 50+ Sprachen.", icon: "Code" },
                    { title: "Dokumenten-Übersetzung", href: "/de/use-cases/document-translation", desc: "PDFs die nativ wirken.", icon: "FileText" },
                    { title: "Marketing-Übersetzung", href: "/de/use-cases/marketing-translation", desc: "Brand Voice in jeder Sprache.", icon: "Megaphone" },
                ]
            },
            {
                title: "Für wen",
                key: "whofor",
                type: "dropdown",
                groups: [
                    {
                        title: "Rollen",
                        items: [
                            { title: "Freelancer", href: "/de/for/freelancers", desc: "Terminologie, Tonalität, Klientengedächtnis.", icon: "User" },
                            { title: "Agenturen", href: "/de/for/agencies", desc: "Geteiltes TM und Brand Voice für Teams.", icon: "Users" },
                            { title: "Localization Manager", href: "/de/roles/localization-manager", desc: "Dein Workflow, vereinfacht.", icon: "Settings" },
                            { title: "Content Marketer", href: "/de/roles/content-marketer", desc: "Brand Voice Konsistenz.", icon: "PenTool" }
                        ]
                    },
                    {
                        title: "Branchen",
                        items: [
                            { title: "SaaS Teams", href: "/de/for/saas-teams", desc: "API, RBAC und Precision TM.", icon: "Code" },
                            { title: "E-Commerce", href: "/de/industries/ecommerce", desc: "Produktkataloge in 50+ Sprachen.", icon: "ShoppingCart" },
                            { title: "Recht & Compliance", href: "/de/industries/legal", desc: "Formaterhalt und strikte Genauigkeit.", icon: "FileText" },
                            { title: "Global Marketing", href: "/de/for/global-marketing", desc: "Brand Voice über alle Kanäle.", icon: "Megaphone" }
                        ]
                    }
                ]
            },
            {
                title: "Ressourcen",
                key: "resources",
                type: "dropdown",
                items: [
                    { title: "Das Journal", href: "/de/notes", desc: "Gedanken zu KI & Kultur.", icon: "BookOpen" },
                    { title: "Themenbibliothek", href: "/de/topic", desc: "Konzepte erklärt.", icon: "Library" },
                    { title: "Glossar", href: "/de/topic/glossary", desc: "Übersetzungs- & Lokalisierungsbegriffe.", icon: "Library" },
                    { title: "Vergleiche", href: "/de/compare", desc: "Marktanalyse 2026.", icon: "BarChart2" },
                    { title: "API Dokumentation", href: "/de/docs", desc: "Für Entwickler.", icon: "Code" }
                ]
            },
            { title: "Methode", href: "/de/method", type: "link" },
            { title: "Preise", href: "/de/pricing", type: "link" }
        ],
        footer: {
            solutions: [
                { title: "Text-Übersetzung", href: "/de/product/text" },
                { title: "Dokumenten-Übersetzung", href: "/de/product/documents" },
                { title: "Kontext-Intelligenz", href: "/de/product/context" },
                { title: "SaaS-Lokalisierung", href: "/de/use-cases/saas-localization" },
            ],
            resources: [
                { title: "Journal (Notizen)", href: "/de/notes" },
                { title: "Themenbibliothek", href: "/de/topic" },
                { title: "Glossar", href: "/de/topic/glossary" },
                { title: "Vergleiche", href: "/de/compare" },
                { title: "API Doku", href: "/de/docs" },
                { title: "Roadmap", href: "/de/roadmap" }
            ],
            company: [
                { title: "Manifest", href: "/de/about" },
                { title: "Kontakt", href: "/de/contact" },
                { title: "Rechtliches", href: "/de/legal" },
            ]
        }
    }
};


