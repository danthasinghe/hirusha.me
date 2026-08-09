export type Project = {
    number: string;
    name: string;
    description: string;
    details: string;
    technologies: string[];
    href: string;
    year: string;
};

export const projects: Project[] = [
    {
        number: "01",
        name: "DatavPS",
        description: "VPS management platform",
        details:
            "A platform for managing and monitoring VPS infrastructure, with a focus on automation, server visibility, and a simple management experience.",
        technologies: ["Next.js", "PostgreSQL", "Docker", "Nginx"],
        href: "#",
        year: "2026",
    },
    {
        number: "02",
        name: "Minecraft Server Manager",
        description: "Server management and monitoring",
        details:
            "A web-based interface for managing Minecraft servers, monitoring activity, and interacting with containerized server infrastructure.",
        technologies: ["Node.js", "Docker", "Linux", "WebSockets"],
        href: "#",
        year: "2026",
    },
    {
        number: "03",
        name: "Robotics Controller",
        description: "Line following robot",
        details:
            "A robotics project built around autonomous line following, sensor processing, motor control, and navigation.",
        technologies: ["C++", "Arduino", "Webots", "PID"],
        href: "#",
        year: "2025",
    },
];