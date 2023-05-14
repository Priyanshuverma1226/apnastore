import Script from 'next/script';
import ProductList from "../components/ProductList";
import Contact from "../components/Contact";
import Head from "next/head";
import {IProduct} from "../components/Product";
import iphone from "../public/iphone.png";
import airpod from "../public/airpods.png";
import macbook from "../public/macbook.png";
import halfmoonBettaPicture from "../public/halfmoon.jpg";
import dragonScaleBettaPicture from "../public/dragonscale.jpg";
import crowntailBettaPicture from "../public/crowntail.jpeg";
import veiltailBettaPicture from "../public/veiltail.jpg";
import {GetStaticProps} from "next";
import Jumbotron from "../components/Jumbotron";

interface IProductListProps {
    products: IProduct[]
}

export default function Home({products}: IProductListProps) {
    return (
        <>
            <Head>
                <title>My awesome store</title>
                <link rel="preconnect" href="https://app.snipcart.com"/>
                <link rel="preconnect" href="https://cdn.snipcart.com"/>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
                <link rel="shortcut icon" href="../public/favicon.ico" />
            </Head>
            <main className="main">
                <Jumbotron />
                <ProductList products={products}/>
                <Contact/>
            </main>
            <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
            <div hidden id="snipcart" data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx
"></div>
        </>
    )
}

export const products: IProduct[] = [
    {
        id: "iphone14",
        name: "iphone 14",
        price: 100000,
        image: iphone,
        description: "Longest battery life ever. A new Main camera and improved image processing let you capture even more sensational shots in all kinds of light ",
        url: '/api/products/halfmoon'
    },

    {
        id: "AirPods",
        name: "AirPods",
        price: 25000,
        image: airpod,
        description: "Apple wins again with its AirPods Pro, a set of in-ear Bluetooth headphones that features Apple's new H2 chip. This model has 2x more Active Noise Cancellation to keep out pesky sounds that can interfere with your listening. ",
        url: '/api/products/halfmoon'
    },
    {
        id: "Macbook",
        name: "Macbook",
        price: 125000,
        image: macbook,
        description: "Apple uses customized parts with specialized processes in most of their machines. This drives the price up, requiring someone to eat the additional cost so that Apple can retain its margins when selling. Demand for parts, and the cost of producing them, leads to a more expensive product",
        url: '/api/products/halfmoon'
    },
   
]

export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
            products
        }
    }
}
