import { catalog } from "@/data/catalog";
import { PageCatalogParams } from "@/types/catalog";
import { IProduct, PageProductParams } from "@/types/product";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params:  Promise<PageProductParams> }) {
    const resParam = await params;
    const catalog_name = resParam?.product_name

    const product = catalog.find((product: IProduct) => product.slug === catalog_name)
    return NextResponse.json(product)
}