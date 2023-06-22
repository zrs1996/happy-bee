
const ButtonTypes = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'] as const;
export type ButtonType = typeof ButtonTypes[number];

export interface BaseButtonProps {
  type?: ButtonType;
  // icon?: React.ReactNode;
  // shape?: ButtonShape;
  // size?: SizeType;
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
  [key: `data-${string}`]: string;
  classNames?: { icon: string };
  styles?: { icon: React.CSSProperties };
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export type ButtonProps = Partial<BaseButtonProps>;

const InternalButton = (props: BaseButtonProps) => {

  const {
    type = 'default',
    className,
    children,
  } = props;

  const classes = className;

  const kids = children;

  const buttonNode = (
    <button
      className={classes}
    >
      {kids}
    </button>
  )
  return buttonNode
};

const Button = InternalButton;

export default Button;