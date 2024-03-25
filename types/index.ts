
export interface SportCardProps{
    key?: number;
    title: string;
    totalEvents?: string;
    sportName?: string;
    imgSrc: string;
    isAd: boolean;
    description?: string;
}

export interface SpotlightCardProps{
    key: string;
    imgSrc: string;
    title: string;
    date: string;
    shortDescription: string;
    collectionType: string;
}