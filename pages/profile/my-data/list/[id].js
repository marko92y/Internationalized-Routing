import { useRouter } from "next/router";
import { useIntl } from "react-intl";


export default function About() {
    const { formatMessage: f } = useIntl();
    const router = useRouter()
    const { id } = router.query

    return (
        <div className="div">
            {id}
        </div>
    )
}