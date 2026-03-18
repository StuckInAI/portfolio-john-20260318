import { NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { Project } from '@/entities/Project';
import { Skill } from '@/entities/Skill';

export async function GET() {
  try {
    const ds = await getDataSource();
    const projectRepo = ds.getRepository(Project);
    const skillRepo = ds.getRepository(Skill);

    const existingProjects = await projectRepo.count();
    const existingSkills = await skillRepo.count();

    if (existingProjects === 0) {
      const projects: Partial<Project>[] = [
        {
          title: 'E-Commerce Platform',
          description:
            'A full-stack e-commerce platform with product listings, cart functionality, payment integration, and admin dashboard. Built with modern web technologies and optimized for performance.',
          techStack: JSON.stringify(['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS']),
          thumbnailUrl: '',
          liveDemoUrl: 'https://example.com',
          githubUrl: 'https://github.com/example/ecommerce',
          featured: true,
          sortOrder: 1,
        },
        {
          title: 'Task Management App',
          description:
            'A collaborative task management application with real-time updates, drag-and-drop kanban boards, team collaboration features, and comprehensive reporting dashboard.',
          techStack: JSON.stringify(['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express']),
          thumbnailUrl: '',
          liveDemoUrl: 'https://example.com',
          githubUrl: 'https://github.com/example/taskmanager',
          featured: true,
          sortOrder: 2,
        },
        {
          title: 'AI Chat Assistant',
          description:
            'An intelligent chat assistant powered by OpenAI GPT, featuring conversation history, custom personas, markdown rendering, and seamless API integration with rate limiting.',
          techStack: JSON.stringify(['Python', 'FastAPI', 'OpenAI API', 'React', 'Redis']),
          thumbnailUrl: '',
          liveDemoUrl: 'https://example.com',
          githubUrl: 'https://github.com/example/ai-chat',
          featured: true,
          sortOrder: 3,
        },
        {
          title: 'Weather Dashboard',
          description:
            'A beautiful weather dashboard with location-based forecasts, interactive maps, historical data visualization, and customizable widgets with dark/light theme support.',
          techStack: JSON.stringify(['Vue.js', 'TypeScript', 'D3.js', 'Weather API', 'Vite']),
          thumbnailUrl: '',
          liveDemoUrl: 'https://example.com',
          githubUrl: 'https://github.com/example/weather',
          featured: false,
          sortOrder: 4,
        },
        {
          title: 'DevOps Pipeline Tool',
          description:
            'An automated CI/CD pipeline management tool with Docker container orchestration, automated testing, deployment strategies, and real-time monitoring dashboards.',
          techStack: JSON.stringify(['Go', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana']),
          thumbnailUrl: '',
          liveDemoUrl: '',
          githubUrl: 'https://github.com/example/devops-tool',
          featured: false,
          sortOrder: 5,
        },
      ];

      for (const p of projects) {
        const project = projectRepo.create(p);
        await projectRepo.save(project);
      }
    }

    if (existingSkills === 0) {
      const skills: Partial<Skill>[] = [
        // Frontend
        { name: 'React', category: 'Frontend', proficiencyLevel: 95, sortOrder: 1 },
        { name: 'Next.js', category: 'Frontend', proficiencyLevel: 90, sortOrder: 2 },
        { name: 'TypeScript', category: 'Frontend', proficiencyLevel: 88, sortOrder: 3 },
        { name: 'Tailwind CSS', category: 'Frontend', proficiencyLevel: 92, sortOrder: 4 },
        { name: 'Vue.js', category: 'Frontend', proficiencyLevel: 75, sortOrder: 5 },
        // Backend
        { name: 'Node.js', category: 'Backend', proficiencyLevel: 90, sortOrder: 1 },
        { name: 'Python', category: 'Backend', proficiencyLevel: 85, sortOrder: 2 },
        { name: 'PostgreSQL', category: 'Backend', proficiencyLevel: 82, sortOrder: 3 },
        { name: 'REST APIs', category: 'Backend', proficiencyLevel: 93, sortOrder: 4 },
        { name: 'GraphQL', category: 'Backend', proficiencyLevel: 78, sortOrder: 5 },
        // Tools
        { name: 'Docker', category: 'Tools', proficiencyLevel: 85, sortOrder: 1 },
        { name: 'Git & GitHub', category: 'Tools', proficiencyLevel: 95, sortOrder: 2 },
        { name: 'AWS', category: 'Tools', proficiencyLevel: 72, sortOrder: 3 },
        { name: 'Linux', category: 'Tools', proficiencyLevel: 80, sortOrder: 4 },
        { name: 'Figma', category: 'Tools', proficiencyLevel: 70, sortOrder: 5 },
      ];

      for (const s of skills) {
        const skill = skillRepo.create(s);
        await skillRepo.save(skill);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully!',
      seeded: {
        projects: existingProjects === 0 ? 5 : 0,
        skills: existingSkills === 0 ? 15 : 0,
      },
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    return NextResponse.json(
      { error: 'Failed to seed database', details: String(error) },
      { status: 500 }
    );
  }
}
