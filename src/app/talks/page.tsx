
type TalkData = {
  date: Date;
  title: string;
  event: string;
  eventUrl?: string;
  slidesUrl?: string;
}

const talkDatas: TalkData[] = [{
  date: new Date('2024-03-29 16:00 PDT'),
  title: 'How to Design a Fighting Game',
  event: 'Sakuracon',
  eventUrl: 'https://sakuracon.org/programming/panels/',
}, {
  date: new Date('2023-04-14 15:00 EDT'),
  title: `Designing Fighting Games & How to Balance Post Launch`,
  event: 'WaffleGames 6.0',
  eventUrl: `https://www.egdcollective.org/wafflegames2023`,
}];

function TalkDisplay({ data }: {
  data: TalkData;
}) {
  return (
    <div>
      <div className="text-2xl">{data.title}</div>
      <div className="underline">
        {data.eventUrl ? (
          <a className='text-blue-600' href={data.eventUrl}>{data.event}</a>
        ) : (
          <span>{data.event}</span>
        )}
      </div>
      <div>
        {data.date.toLocaleString()}
      </div>
    </div>
  );
}

export default function Talks() {
  const sortedTalks = talkDatas
    .concat()
    .sort((a,b) => a.date.getTime() < b.date.getTime() ? -1 : 1)
    .reverse();
  return (
    <main className="flex flex-col justify-center items-center text-center gap-4 p-8">
      <div className="text-4xl">
        Talks
      </div>
      <p>
        Public talks relating to one of our games or game development in general
      </p>
      <div className="text-left flex flex-col gap-4">
        {sortedTalks.map(td => <TalkDisplay key={td.date.getTime()} data={td} />)}
      </div>
    </main>
  )
}
