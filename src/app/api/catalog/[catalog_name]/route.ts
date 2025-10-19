import { catalog } from "@/data/catalog";
import { IProduct, PageCatalogParams } from "@/types/catalog";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params:  Promise<PageCatalogParams> }) {
    const resParam = await params;
    const catalog_name = resParam?.catalog_name

    if (!catalog_name) {
      return NextResponse.json(catalog)
    } else {
      const filters = catalog.filter((product: IProduct) => product.categories === catalog_name)
      return NextResponse.json(filters)
    }
}