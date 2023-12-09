export function Hero(props: {
  url?: string;
  img?: string;
  title: string;
  description: string;
  dates: string;
}) {
  return (
    <section className="relative h-96 w-full bg-cover bg-center bg-purple-300" style={{
      backgroundImage: `url(${props.img})`,
    }}>
      <div className="absolute w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center">
        <div className="text-white">
          <a href={props.url ?? ""}>
            <div className="text-lg font-bold">
              {props.title}
            </div>
          </a>
          <div className="">
            {props.description}
          </div>
          <div className="italic">
            {props.dates}
          </div>
        </div>
      </div>
    </section>
  )
}
