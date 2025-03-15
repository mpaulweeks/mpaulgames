import { projects } from '@/components/data';
import { Feature } from '@/components/feature';

export default function ProjectsPage() {
  return (
    <main className="flex flex-col justify-center items-center text-center bg-white gap-0">
      {projects.map(p => (
        <Feature {...p} key={['feature', p.title].join('-')} />
      ))}
    </main>
  );
}
