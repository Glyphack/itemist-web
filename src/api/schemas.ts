export declare namespace Schemas {
  type User = {
    name: string
    steamId: string
    avatar: string
    profileUrl: string
    tradeUrl: string
    wallet: { balance: number }
  }

  type SellOrder = {
    seller: User
    price: number
    appId: string
    contextId: string
    assetId: string
    tradeOffer: TradeOffer
    success: boolean
  }

  type TradeOffer = {
    user: User
    offerId: string
    tradeStatus?: 'Not sent' | 'Pending' | 'Successful' | 'Failed'
  }

  type Product = {
    _id: string
    seller: User
    price: number
    becomeTradable: Date
    steamItem: SteamItem
  }

  type SteamItem = {
    appId: string
    classId: string
    instanceId: string
    assetId: string
    contextId: string
    iconUrl: string
    iconUrlLarge: string
    name: string
    marketHashName: string
    marketName: string
    nameColor: string
    backgroundColor: string
    type: string
    marketable: string
    commodity: string
    marketTradableRestriction: string
    marketMarketableRestriction: string
    descriptions: Description[]
    tags: Tag[]
  }

  type Description = {
    type: string
    value: string
    _id: string
  }

  type Tag = {
    name: string
    category: string
    color: string
    categoryName: string
    _id: string
  }

  type Cart = {
    user: User
    products?: Product[]
  }

  type Transaction = {
    user: User
    products: Product[]
    authority: string
    status: string
    amount: number
    refId: string
  }
}
