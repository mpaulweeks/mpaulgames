import { ProjectInfo } from "@/types";
import { OptionalAnchor } from "./optionalAnchor";

function Background({ img }: {
  img: string | undefined;
}) {
  return (
    <div
      className="w-full h-full bg-cover bg-center odd:bg-red-200 even:bg-blue-200 transition-all group-hover:scale-105"
      style={{
        backgroundImage: img ? `url(${img})` : undefined,
      }}
    ></div>
  );
}

export function Hero(props: ProjectInfo) {
  return (
    <section className="group relative w-full h-96 overflow-hidden">
      <Background img={props.img} />
      <OptionalAnchor href={props.url}>
        <div className="absolute top-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center transition-all group-hover:bg-opacity-0">
          <div className="text-white text-xl p-4 rounded-md bg-black bg-opacity-0 transition-all group-hover:bg-opacity-60">
            <div className="text-2xl font-bold">
              {props.title}
            </div>
            <div className="italic">
              {props.description}
            </div>
            <div className="font-semibold">
              {props.dates}
            </div>
          </div>
        </div>
      </OptionalAnchor>
    </section>
  )
}
