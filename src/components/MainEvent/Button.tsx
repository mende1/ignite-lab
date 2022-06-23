interface ButtonProps {
  url: string;
  variant: "primary" | "secondary";
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <a
      href={props.url}
      className={`p-4 text-sm uppercase flex items-center rounded font-bold gap-2 transition-colors 
    ${
      props.variant === "primary"
        ? "bg-green-500 hover:bg-green-700"
        : "border text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-gray-900"
    }`}
    >
      {props.children}
    </a>
  );
}
