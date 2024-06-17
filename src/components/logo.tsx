export function Logo(props: { src: string }) {
  return (
    <img
      className="inline-block w-48 rounded-full"
      src={props.src}
      alt="logo"
    />
  );
}
