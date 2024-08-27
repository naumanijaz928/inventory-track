import Image from "next/image";
import styles from "./page.module.css";
import { ProductProvider } from "./context/ProductContext";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <ProductProvider>
      <main>
        <h1>Inventory Tracking App</h1>
        <ProductList />
        {/* You can add ProductDetails and InventoryManagement components here as needed */}
      </main>
    </ProductProvider>
  );
}
