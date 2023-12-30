export const CommentsList = [
    {
        title: '💰 Motivating factors for purchase',
        lists: [
            { name: 'price', process: 2, id: 555 },
            { name: 'comfort', process: 8, id: 556 },
            { name: 'quality', process: 18, id: 557 },
            { name: 'resell value', process: 10, id: 558 },
            { name: 'availability', process: 22, id: 559 },
            { name: 'brand recognition', process: 12, id: 560 },
            { name: 'collaboration', process: 28, id: 561 },
        ]
    },
    {
        title: '🔧  Use cases',
        lists: [
            { name: 'Gaming ', process: 1, id: 562 },
            { name: 'Production ', process: 22, id: 563 },
            { name: 'Listening to music', process: 28, id: 564 },
            { name: 'Travel ', process: 28, id: 565 },
            { name: 'Sports ', process: 33, id: 566 },
            { name: 'brand recognition', process: 21, id: 567 },
            { name: 'collaboration ', process: 12, id: 568 },
        ]
    },
    {
        title: '👍  Features liked',
        lists: [
            { name: 'price   ', process: 1, id: 569 },
            { name: 'comfort  ', process: 22, id: 570 },
            { name: 'quality ', process: 28, id: 571 },
            { name: 'resell value  ', process: 28, id: 572 },
            { name: 'availability  ', process: 33, id: 573 },
            { name: 'brand recognition', process: 21, id: 574 },
            { name: 'collaboration  ', process: 12, id: 575 },
        ]
    },
    {
        title: '👎  Drawbacks',
        lists: [
            { name: 'price ', process: 1, id: 576 },
            { name: 'comfort  ', process: 22, id: 577 },
            { name: 'quality ', process: 28, id: 578 },
            { name: 'resell value  ', process: 28, id: 579 },
            { name: 'availability  ', process: 33, id: 580 },
            { name: 'brand recognition', process: 21, id: 581 },
            { name: 'collaboration  ', process: 12, id: 582 },
        ]
    }
]

export type CommentsListType = {
    title: string;
    lists: {
        name: string;
        process: number;
        id: number;
    }[];
}
export type CommentsListDetailsType = {
    id: number;
    Avatar: string;
    name: string;
    min: string;
    content: string;
}[]
export const CommentsListDetails = [
    {
        id: 555, Avatar: 'U', name: '@youtuber261', min: '10 months ago', content: `
        I'm personally hoping that the chunky / dad style sneakers begin to fade away. They've been around for years now and itsmeant that getting more minimalist, clean looking sneakers, in regular stores, is more of a challenge.\n
        They may no longer be considered "cool" but l still love my common projects Achilles low. I iust cant justify the insaneprice most of the time.\n
        Vans Suede. Slip-On Pro's also used to be a great option, being low profile and simple. These davs however thecolourswavs tend to be way too garish and i'd feel like a teenager trying to rock them` },
    {
        id: 556, Avatar: 'Y', name: '@jasper2231', min: '5 months ago', content: `
         hate the 'Dad Shoe' trend since believe it's more an industry forced trend to make all the shoes we thought were uglyand didn't buy over the past 15 vears suddenly be resellable at high prices.` },
    { id: 557, Avatar: 'U', name: '@youtuber261', min: '10 months ago', content: `31223123321` },
    { id: 558, Avatar: 'A', name: '@blibli261', min: '10 months ago', content: `1111111111111` },
    { id: 559, Avatar: 'B211', name: '@blibli221321361', min: '10 months ago', content: `3333333333333333333` },
    { id: 560, Avatar: 'V21', name: '@blibli2wqewqqw61', min: '10 months ago', content: `3333333333333333333` },
    { id: 561, Avatar: 'C', name: '@cf261', min: '10 months ago', content: `12321` },

]


export const tableLists = [
    { product: 'product A', num: 11, id: 1111 },
    { product: 'product B', num: 9, id: 1112 },
    { product: 'product C', num: 6, id: 1113 },
    { product: 'product D', num: 3, id: 1114 },
    { product: 'product E', num: 1, id: 1115 },
    { product: 'product F', num: 1, id: 1116 },
    { product: 'product G', num: 1, id: 1117 },
    { product: 'product H', num: 1, id: 1118 },
]
