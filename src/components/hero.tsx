import { ProjectInfo } from "@/types";

export function Hero(props: ProjectInfo) {
  return (
    <section className="hero relative h-96 w-full bg-cover bg-center odd:bg-red-200 even:bg-blue-200" style={{
      backgroundImage: `url(${props.img})`,
    }}>
      <div className="absolute w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center">
        <div className="text-white text-xl">
          <a href={props.url ?? ""}>
            <div className="text-2xl font-bold">
              {props.title}
            </div>
          </a>
          <div className="italic">
            {props.description}
          </div>
          <div className="">
            {props.dates}
          </div>
        </div>
      </div>
    </section>
  )
}
