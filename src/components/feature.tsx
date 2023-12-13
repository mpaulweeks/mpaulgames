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

const OverlayCSS = `
absolute top-0 w-full h-full flex flex-row
justify-center items-center
md:group-odd:justify-start md:group-even:justify-end
`
// from-[#000000c0]
// from-[33%]
// to-[34%]
// md:group-odd:bg-gradient-to-r md:group-even:bg-gradient-to-l

export function Feature(props: ProjectInfo) {
  return (
    <main className="group relative w-full overflow-hidden" style={{
      height: '600px',
    }}>
      <Background img={props.img} />
      <section className={OverlayCSS}>
        <aside className="text-white text-xl p-4 w-full h-full md:w-1/3 bg-[#000000c0] flex flex-col justify-center items-center">
          <ProjectBlurb {...props} />
        </aside>
      </section>
    </main>
  )
}
