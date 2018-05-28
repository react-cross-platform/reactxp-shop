/* tslint:disable */

export interface Query {
  flatpage?: FlatpageType | null;
  flatpages?: (FlatpageType | null)[] | null;
  flatPage?: FlatpageType | null;
  flatPages?: (FlatPageType | null)[] | null;
  cart?: CartType | null;
  allCarts?: AllCartsType | null;
  subProduct?: SubProductType | null;
  subProducts?: (SubProductType | null)[] | null;
  productImages?: (ProductImageType | null)[] | null;
  product?: ProductType | null;
  allProducts?: AllProductsType | null;
  brands?: (BrandType | null)[] | null;
  category?: CategoryType | null;
  categories?: (CategoryType | null)[] | null;
  __debug?: DjangoDebug | null;
}

export interface FlatpageType {
  id: string;
  name: string;
  content: string;
  html?: string | null;
}

export interface FlatPageType {
  id: string;
  name: string;
  content: string;
  html?: string | null;
}

export interface CartType {
  id: string;
  totalPrice: number;
  email?: string | null;
  phone: string;
  comment: string;
  city: string;
  address: string;
  items?: (CartItemType | null)[] | null;
  amount?: number | null;
  firstName?: string | null;
  lastName?: string | null;
}

export interface CartItemType {
  id?: number | null;
  amount: number;
  price: number;
  subProduct?: SubProductType | null;
  attributeValues?: (AttributeValueType | null)[] | null;
  cart?: CartType | null;
}

export interface SubProductType {
  id: string;
  product: ProductType;
  article: string;
  price: number;
  oldPrice?: number | null;
  discount?: number | null;
  attributes?: (AttributeType | null)[] | null;
}

export interface ProductType {
  name: string;
  shortDescription: string;
  description: string;
  isNew: boolean;
  pk?: number | null;
  id?: string | null;
  brand?: BrandType | null;
  category?: CategoryType | null;
  images?: (ImageType | null)[] | null;
  imagesWithColor?: (ImageWithColorType | null)[] | null;
  subProducts: (SubProductType | null)[];
  attributes?: (AttributeType | null)[] | null;
}

export interface BrandType {
  id: string;
  name: string;
  alias: string;
  description: string;
}

export interface CategoryType {
  id: string;
  name: string;
  description: string;
  alias: string;
  image?: CategoryImageType | null;
  parent?: CategoryType | null;
}

export interface CategoryImageType {
  id?: string | null;
  src?: string | null;
  height?: number | null;
  width?: number | null;
  isTitle?: boolean | null;
  colorName?: string | null;
  colorValue?: string | null;
}

export interface ImageType {
  id?: string | null;
  src?: string | null;
  productId?: number | null;
  height?: number | null;
  width?: number | null;
  isTitle?: boolean | null;
  colorName?: string | null;
  colorValue?: string | null;
  attributeValue?: AttributeValueType | null;
}

export interface AttributeValueType {
  id?: number | null;
  name?: string | null;
  value?: string | null;
  description?: string | null;
}

export interface ImageWithColorType {
  id?: string | null;
  productId?: number | null;
  src?: string | null;
  height?: number | null;
  width?: number | null;
  isTitle?: boolean | null;
  colorName?: string | null;
  colorValue?: string | null;
}

export interface AttributeType {
  id?: number | null;
  name?: string | null;
  description?: string | null;
  type?: string | null;
  values?: (AttributeValueType | null)[] | null;
}

export interface AllCartsType {
  carts?: (CartType | null)[] | null;
  total?: number | null;
}

export interface ProductImageType {
  id: string;
  name: string;
  product: ProductType;
  image?: string | null;
  order: number;
  isTitle: boolean;
  withWhitePadding: boolean;
  withWatermark: boolean;
  supplierColor?: string | null;
  titleImage?: (ProductType | null)[] | null;
}

export interface AllProductsType {
  filters?: (FilterType | null)[] | null;
  sorting?: (SortType | null)[] | null;
  products?: (ProductType | null)[] | null;
  found?: number | null;
  total?: number | null;
}

export interface FilterType {
  id?: number | null;
  type?: string | null;
  name?: string | null;
  hasChecked?: boolean | null;
  icon?: string | null;
  iconColor?: string | null;
  isColor?: boolean | null;
  help?: string | null;
  position?: number | null;
  resetUrl?: string | null;
  values?: (FilterValueType | null)[] | null;
}

export interface FilterValueType {
  id?: number | null;
  name?: string | null;
  isChecked?: boolean | null;
  filterValue?: string | null;
  help?: string | null;
  count?: number | null;
  position?: number | null;
  url?: string | null;
  value?: string | null;
}

export interface SortType {
  icon?: string | null;
  name?: string | null;
  value?: string | null;
  isSelected?: boolean | null;
}

export interface DjangoDebug {
  sql?: (DjangoDebugSQL | null)[] | null;
}

export interface DjangoDebugSQL {
  vendor?: string | null;
  alias?: string | null;
  sql?: string | null;
  duration?: number | null;
  rawSql?: string | null;
  params?: string | null;
  startTime?: number | null;
  stopTime?: number | null;
  isSlow?: boolean | null;
  isSelect?: boolean | null;
  transId?: string | null;
  transStatus?: string | null;
  isoLevel?: string | null;
  encoding?: string | null;
}

export interface Mutations {
  updateCart?: UpdateCart | null;
  addCartItem?: AddCartItem | null;
  removeCartItem?: RemoveCartItem | null;
  updateCartItem?: UpdateCartItem | null;
}

export interface UpdateCart {
  cart?: CartType | null;
}

export interface AddCartItem {
  cartItem?: CartItemType | null;
}

export interface RemoveCartItem {
  totalPrice?: number | null;
}

export interface UpdateCartItem {
  cartItem?: CartItemType | null;
}
export interface FlatpageQueryArgs {
  id?: number | null;
  name?: string | null;
}
export interface FlatpagesQueryArgs {
  name?: string | null;
}
export interface FlatPageQueryArgs {
  id?: number | null;
  name?: string | null;
}
export interface FlatPagesQueryArgs {
  name?: string | null;
}
export interface CartQueryArgs {
  token?: string | null;
}
export interface AllCartsQueryArgs {
  offset?: number | null;
  first?: number | null;
  token?: string | null;
}
export interface SubProductQueryArgs {
  id?: number | null;
}
export interface SubProductsQueryArgs {
  id?: number | null;
}
export interface ProductImagesQueryArgs {
  id?: number | null;
}
export interface ProductQueryArgs {
  id?: number | null;
}
export interface AllProductsQueryArgs {
  categoryId?: number | null;
  withDiscountOnly?: boolean | null;
  filters?: string | null;
  sorting?: string | null;
  offset?: number | null;
  first?: number | null;
  total?: number | null;
  ids?: (number | null)[] | null;
}
export interface BrandsQueryArgs {
  id?: number | null;
  alias?: string | null;
}
export interface CategoryQueryArgs {
  id?: number | null;
}
export interface CategoriesQueryArgs {
  id?: number | null;
  alias?: string | null;
}
export interface ImagesProductTypeArgs {
  first?: number | null;
  withColorOnly?: boolean | null;
  size?: ImageSizeEnum | null;
}
export interface UpdateCartMutationsArgs {
  comment?: string | null;
  city?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  finish?: boolean | null;
  address?: string | null;
  email?: string | null;
}
export interface AddCartItemMutationsArgs {
  price?: number | null;
  attributeValueIds?: (number | null)[] | null;
  subProductId?: number | null;
  amount?: number | null;
  colorId?: number | null;
}
export interface RemoveCartItemMutationsArgs {
  id?: number | null;
}
export interface UpdateCartItemMutationsArgs {
  amount?: number | null;
  id?: number | null;
}

export enum ImageSizeEnum {
  SM = "SM",
  MD = "MD",
  LG = "LG"
}
