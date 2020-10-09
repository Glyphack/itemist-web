export declare namespace Schemas {
  type User = {
    id: number
    name: string
    avatar: string
    tradeUrl: string
    wallet: Wallet
  }

  type SellOrder = {
    seller: User
    price: number
    appId: string
    contextId: string
    assetId: string
    tradeStatus?: TradeOffer
  }

  type Wallet = {
    amount: number
  }

  type TradeOffer = {
    offerId: string
    tradeStatus: string
  }

  type Error = {
    code: number
    message: string
  }

  type InventoryItem = {
    appid: string
    cotextid?: string
    assetid: string
    classid: string
    instanceid: string
    amount: string
    pos: number
    background_color: string
    icon_url: string
    icon_url_large: string
    descriptions: ItemDescription
    name: string
    name_color: string
    type: string
    tags?: ItemTag
  }

  type ItemDescription = {
    type: string
    value: string
    color?: string
  }

  type ItemTag = {
    internal_name?: string
    name?: string
    category?: string
    color?: string
    category_name?: string
  }
}
