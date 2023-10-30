import Article from "@/app/components/Article"
import OrderDetails from "@/app/components/OrderDetails"
import useArticle from "@/app/hooks/article"
import Link from "next/link"

export default async function Menu() {
    const { getData } = useArticle()
    const res = await getData()
    return <div>
        <nav>
            <ul>
                <li>
                    <Link href="/dashboard/articulos/agregar">Agregar</Link>
                </li>
                <li>
                    <Link href="/dashboard/articulos/editar">editar</Link>
                </li>
            </ul>
        </nav>
        <div className="flex flex-wrap gap-5 mx-3">
        {res.map((item, index) => <Article data={item} key={index} />)}
        </div>
        <OrderDetails/>
    </div>
}