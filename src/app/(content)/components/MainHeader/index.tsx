import Link from "next/link";
import { Header, Logo } from "./style";
import NavLink from "./NavLink";

export default function MainHeader() {
  return (
    <Header>
      <Logo>
        <Link href='/'>NextNews</Link>
      </Logo>
      <nav>
        <ul>
          <li>
            <NavLink link='/news'>News</NavLink>
          </li>
          <li>
            <NavLink link='/archive'>Archive</NavLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
