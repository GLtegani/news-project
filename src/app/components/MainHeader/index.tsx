import Link from "next/link";
import { Header, Logo } from "./styles";

export default function MainHeader() {
  return (
    <Header>
      <Logo>
        <Link href='/'>NextNews</Link>
      </Logo>
      <nav>
        <ul>
          <li>
            <Link href='/news'>News</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
