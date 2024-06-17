import { ConditionalWrapper } from './conditionalWrapper';

export function OptionalAnchor(
  props: React.PropsWithChildren & {
    href?: string;
  },
) {
  return (
    <ConditionalWrapper
      condition={!!props.href}
      wrapper={children => <a href={props.href}>{children}</a>}
    >
      {props.children}
    </ConditionalWrapper>
  );
}
