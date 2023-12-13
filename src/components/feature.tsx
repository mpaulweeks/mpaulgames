import { ProjectInfo } from "@/types";
import { OptionalAnchor } from "./optionalAnchor";

function Background({ img }: {
  img: string | undefined;
}) {
  return (
    <div
      className="w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: img ? `url(${img})` : undefined,
      }}
    ></div>
  );
}

type DateInfo = {
  label: string;
  date: string;
}

export function Feature(props: ProjectInfo) {
  const dates = ([
    { label: 'Release', date: props.dateRelease },
    { label: 'Open Beta', date: props.dateOpenBeta },
    { label: 'Closed Alpha', date: props.dateClosedAlpha },
  ] satisfies Partial<DateInfo>[])
    .map(d => d.date ? d as DateInfo : undefined)
    .flatMap(e => e ? [e] : []);
  return (
    <section className="group relative w-full overflow-hidden" style={{
      height: '600px',
    }}>
      <Background img={props.img} />
      <OptionalAnchor href={props.url}>
        <aside className="absolute top-0 w-full h-full bg-gradient-to-r from-black to-transparent bg-opacity-30 flex flex-row justify-start items-center group-even:justify-end group-even:bg-gradient-to-l">
          <div className="text-white text-xl py-4 px-1/3 px-60">
            <div className="text-2xl font-bold">
              {props.title}
            </div>
            <div className="italic">
              {props.description}
            </div>
            {dates.map(di => (
              <div key={[props.title, di.label].join('-')}>
                {di.label} &gt; {di.date}
              </div>
            ))}
            {(props.links ?? []).map(li => (
              <div key={[props.title, li.url].join('-')}>
                <a href={li.url} className="text-blue-300 font-semibold">
                  {li.label}
                </a>
              </div>
            ))}
          </div>
        </aside>
      </OptionalAnchor>
    </section>
  )
}
