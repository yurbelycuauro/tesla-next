import { ProductGrid, Title } from "@/components";

import { initialData } from "@/seed/seed";

export default function Home() {
  const products = initialData.products ;
  return (
    <>
      <Title
        title="Tienda"
        subtitle="todos los productos"
        className="pb-2"
      />
      <ProductGrid products={products}/>
    </>
    
  );
}
