import { ProjectInfo } from "@/types";
import { ProjectBlurb } from "./projectBlurb";

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

export function Feature(props: ProjectInfo) {
  return (
    <section className="group relative w-full overflow-hidden" style={{
      height: '600px',
    }}>
      <Background img={props.img} />
      <aside className="absolute top-0 w-full h-full bg-gradient-to-r from-black to-transparent bg-opacity-30 flex flex-row justify-start items-center group-even:justify-end group-even:bg-gradient-to-l">
        <div className="text-white text-xl py-4 px-1/3 px-60">
          <ProjectBlurb {...props} />
        </div>
      </aside>
    </section>
  )
}
