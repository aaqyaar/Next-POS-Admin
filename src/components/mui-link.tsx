import { Link, LinkProps } from "react-router-dom";

export function MuiLink(props: LinkProps) {
  const style = {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  };

  return <Link style={style} {...props} />;
}
