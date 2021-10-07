import { useRouter } from "next/router";
import Link from "next/link";
import { useIntl } from "react-intl";

export default function About() {
  const { locales } = useRouter();
  const { formatMessage: f } = useIntl();

  return (
    <div>
      <ul>
        {locales.map(loc => (
          <li key={loc} >
            <Link href="/" locale={loc}>
              <a>{loc}</a>
            </Link>
          </li>))}
      </ul>

      <div className="div">
        <Link href={f({ id: "link1" })} >
          <a>{f({ id: "data" })}</a>
        </Link>

        <Link href={f({ id: "link2" })} >
          <a>{f({ id: "step" })}</a>
        </Link>

      </div>
    </div>
  )
}
