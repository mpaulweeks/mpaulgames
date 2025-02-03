import { ProjectInfo } from '@/types';

type DateInfo = {
  label: string;
  date: string;
};

export function ProjectBlurb(props: ProjectInfo) {
  const dates = (
    [
      { label: 'Released', date: props.dateReleased },
      { label: 'Estimated Launch', date: props.dateHopefulLaunch },
      { label: 'Early Access', date: props.dateEarlyAccess },
      { label: 'Closed Alpha', date: props.dateClosedAlpha },
    ] satisfies Partial<DateInfo>[]
  )
    .map(d => (d.date ? (d as DateInfo) : undefined))
    .flatMap(e => (e ? [e] : []));
  return (
    <>
      <div className="text-2xl font-bold text-center">
        {props.logoSrc ? (
          <img src={props.logoSrc} alt={props.title} className="h-[8em]" />
        ) : (
          props.title
        )}
      </div>
      <div className="italic">{props.description}</div>
      <br />
      {dates.map(di => (
        <div key={[props.title, di.label].join('-')}>
          {di.label} | {di.date}
        </div>
      ))}
      <br />
      <div className="flex flex-col items-center">
        <div className="text-left">
          {(props.links ?? []).map(li => (
            <div key={[props.title, li.url].join('-')}>
              &gt;{' '}
              <a href={li.url} className="text-blue-300 font-semibold">
                {li.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
