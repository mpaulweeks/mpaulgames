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
`;

const AsideCSS = `
flex flex-col justify-center items-center
text-white text-xl py-4 px-8
w-full h-full md:w-[400px] md:mx-[150px]

bg-[#000000c0]
md:-skew-x-[10deg]
`

export function Feature(props: ProjectInfo) {
  return (
    <main className="group relative w-full overflow-hidden tran" style={{
      height: '600px',
    }}>
      <Background img={props.img} />
      <section className={OverlayCSS}>
        <aside className={AsideCSS}>
          <div className="md:skew-x-[10deg] p-">
            <ProjectBlurb {...props} />
          </div>
        </aside>
      </section>
    </main>
  )
}
