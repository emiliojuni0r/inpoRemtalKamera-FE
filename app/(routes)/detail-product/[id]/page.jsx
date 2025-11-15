import { use } from "react"

export default function DetailProductPage({ params }) {
    const { id } = use(params)
    return (
        <>
            {id}
        </>
    )
}