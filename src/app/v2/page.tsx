import { projects } from '@/components/data';
import { Feature } from '@/components/feature';

export default function HomeV2() {
  return (
    <main className="flex flex-col justify-center items-center text-center">
      {projects.map(p => (
        <Feature {...p} key={['feature', p.title].join('-')} />
      ))}
    </main>
  );
}
