import { talkDatas } from '@/components/data';
import { TalkData } from '@/types';

function TalkDisplay({ data }: { data: TalkData }) {
  return (
    <div>
      <div className="text-2xl">{data.title}</div>
      <div className="underline text-xl">
        {data.eventUrl ? (
          <a className="text-blue-300" href={data.eventUrl}>
            {data.event}
          </a>
        ) : (
          <span>{data.event}</span>
        )}
      </div>
      <div>{data.date.toLocaleString()}</div>
      {data.resources && data.resources.length > 0 && (
        <ul className="list-disc text-lg ml-8">
          {data.resources.map(res => (
            <li key={res.url}>
              <a className="text-blue-300" href={res.url}>
                {res.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      {data.references && data.references.length > 0 && (
        <>
          <div>References</div>
          <ul className="list-disc text-lg ml-8">
            {data.references.map(res => (
              <li key={res.url}>
                <a className="text-blue-300" href={res.url}>
                  {res.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default function Talks() {
  const sortedTalks = talkDatas
    .concat()
    .sort((a, b) => (a.date.getTime() < b.date.getTime() ? -1 : 1))
    .reverse();
  return (
    <main className="flex flex-col justify-center items-center text-center gap-4 p-8">
      <div className="text-4xl">Talks</div>
      <p>
        Public talks relating to one of our games or game development in general
      </p>
      <div className="text-left flex flex-col gap-4">
        {sortedTalks.map(td => (
          <TalkDisplay key={td.date.getTime()} data={td} />
        ))}
      </div>
    </main>
  );
}
