const initialState = [
{
id: 181,
author: "Orson Scott Card",
author_id: "589",
title: "Ender's Game (Ender's Saga, #1)",
book_id: "2422333375802589",
publication_year: "1985",
average_rating: "4.29",
image_url: "https://images.gr-assets.com/books/1408303130m/375802.jpg",
small_image_url: "https://images.gr-assets.com/books/1408303130s/375802.jpg",
created_at: "2017-06-17T18:31:45.655Z",
updated_at: "2017-06-17T18:31:45.655Z"
},
{
id: 182,
author: "David Eddings",
author_id: "8732",
title: "Enchanters' End Game (The Belgariad, #5)",
book_id: "938064446878732",
publication_year: "1984",
average_rating: "4.17",
image_url: "https://images.gr-assets.com/books/1217735909m/44687.jpg",
small_image_url: "https://images.gr-assets.com/books/1217735909s/44687.jpg",
created_at: "2017-06-17T18:31:45.657Z",
updated_at: "2017-06-17T18:31:45.657Z"
},
{
id: 183,
author: "Kate McCarthy",
author_id: "6876994",
title: "The End Game",
book_id: "42437887228741506876994",
publication_year: "2015",
average_rating: "4.10",
image_url: "https://images.gr-assets.com/books/1423089153m/22874150.jpg",
small_image_url: "https://images.gr-assets.com/books/1423089153s/22874150.jpg",
created_at: "2017-06-17T18:31:45.658Z",
updated_at: "2017-06-17T18:31:45.658Z"
},
{
id: 184,
author: "Frederic P. Miller",
author_id: "2940867",
title: "Ender's Game",
book_id: "1157157787825972940867",
publication_year: "2010",
average_rating: "4.14",
image_url: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
small_image_url: "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
created_at: "2017-06-17T18:31:45.660Z",
updated_at: "2017-06-17T18:31:45.660Z"
},
{
id: 185,
author: "Christopher Yost",
author_id: "38491",
title: "Ender's Game, Volume 1: Battle School (Ender's Saga)",
book_id: "6581562639308238491",
publication_year: "2009",
average_rating: "4.37",
image_url: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
small_image_url: "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
created_at: "2017-06-17T18:31:45.662Z",
updated_at: "2017-06-17T18:31:45.662Z"
},
{
id: 186,
author: "Orson Scott Card",
author_id: "589",
title: "Ender's Game Boxed Set: Ender's Game, Ender's Shadow, Shadow of the Hegemon",
book_id: "125309735589",
publication_year: "2002",
average_rating: "4.48",
image_url: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
small_image_url: "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
created_at: "2017-06-17T18:31:45.663Z",
updated_at: "2017-06-17T18:31:45.663Z"
},
{
id: 187,
author: "Catherine Coulter",
author_id: "1239",
title: "The End Game (A Brit in the FBI, #3)",
book_id: "44223038246119281239",
publication_year: "2015",
average_rating: "4.23",
image_url: "https://images.gr-assets.com/books/1425319746m/24611928.jpg",
small_image_url: "https://images.gr-assets.com/books/1425319746s/24611928.jpg",
created_at: "2017-06-17T18:31:45.665Z",
updated_at: "2017-06-17T18:31:45.665Z"
},
{
id: 188,
author: "Christopher Yost",
author_id: "38491",
title: "Ender's Game, Volume 2: Command School",
book_id: "7272274702508638491",
publication_year: "2010",
average_rating: "4.60",
image_url: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
small_image_url: "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
created_at: "2017-06-17T18:31:45.667Z",
updated_at: "2017-06-17T18:31:45.667Z"
},
{
id: 189,
author: "Raymond Khoury",
author_id: "26011",
title: "The End Game (Templar, #5)",
book_id: "456658162580983426011",
publication_year: "2014",
average_rating: "3.92",
image_url: "https://images.gr-assets.com/books/1451140269m/25809834.jpg",
small_image_url: "https://images.gr-assets.com/books/1451140269s/25809834.jpg",
created_at: "2017-06-17T18:31:45.668Z",
updated_at: "2017-06-17T18:31:45.668Z"
},
{
id: 190,
author: "Christopher Yost",
author_id: "38491",
title: "Ender's Game Ultimate Collection",
book_id: "170506951208268838491",
publication_year: "2010",
average_rating: "4.32",
image_url: "https://images.gr-assets.com/books/1372911791m/12082688.jpg",
small_image_url: "https://images.gr-assets.com/books/1372911791s/12082688.jpg",
created_at: "2017-06-17T18:31:45.671Z",
updated_at: "2017-06-17T18:31:45.671Z"
},
{
id: 191,
author: "David Baldacci",
author_id: "9291",
title: "End Game (Will Robie, #5)",
book_id: "55447683343681139291",
publication_year: "2017",
average_rating: "4.31",
image_url: "https://images.gr-assets.com/books/1495976812m/34368113.jpg",
small_image_url: "https://images.gr-assets.com/books/1495976812s/34368113.jpg",
created_at: "2017-06-17T18:31:45.674Z",
updated_at: "2017-06-17T18:31:45.674Z"
},
{
id: 192,
author: "Jake Black",
author_id: "236462",
title: "Ender's Game: War of Gifts",
book_id: "105231047734468236462",
publication_year: "2009",
average_rating: "3.96",
image_url: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
small_image_url: "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
created_at: "2017-06-17T18:31:45.676Z",
updated_at: "2017-06-17T18:31:45.676Z"
},
{
id: 193,
author: "Tabatha Wenzel",
author_id: "8081215",
title: "End Game",
book_id: "40880256215458258081215",
publication_year: "2014",
average_rating: "3.67",
image_url: "https://images.gr-assets.com/books/1395703564m/21545825.jpg",
small_image_url: "https://images.gr-assets.com/books/1395703564s/21545825.jpg",
created_at: "2017-06-17T18:31:45.703Z",
updated_at: "2017-06-17T18:31:45.703Z"
},
{
id: 194,
author: "R.B. Hilliard",
author_id: "7857834",
title: "His End Game (MMG #1)",
book_id: "40179821208290887857834",
publication_year: "2014",
average_rating: "4.17",
image_url: "https://images.gr-assets.com/books/1393774525m/20829088.jpg",
small_image_url: "https://images.gr-assets.com/books/1393774525s/20829088.jpg",
created_at: "2017-06-17T18:31:45.705Z",
updated_at: "2017-06-17T18:31:45.705Z"
},
{
id: 195,
author: "B.J. Harvey",
author_id: "6886702",
title: "Game Ender (Game #4)",
book_id: "52043806313604376886702",
publication_year: "",
average_rating: "4.51",
image_url: "https://images.gr-assets.com/books/1490783857m/31360437.jpg",
small_image_url: "https://images.gr-assets.com/books/1490783857s/31360437.jpg",
created_at: "2017-06-17T18:31:45.707Z",
updated_at: "2017-06-17T18:31:45.707Z"
},
{
id: 196,
author: "Lindsay Buroker",
author_id: "4512224",
title: "End Game (Fallen Empire, #8)",
book_id: "53830455331445724512224",
publication_year: "2016",
average_rating: "4.44",
image_url: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
small_image_url: "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
created_at: "2017-06-17T18:31:45.708Z",
updated_at: "2017-06-17T18:31:45.708Z"
},
{
id: 197,
author: "Matthew Glass",
author_id: "512936",
title: "End Game",
book_id: "1497025710073669512936",
publication_year: "2010",
average_rating: "3.69",
image_url: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
small_image_url: "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
created_at: "2017-06-17T18:31:45.710Z",
updated_at: "2017-06-17T18:31:45.710Z"
},
{
id: 198,
author: "John Gilstrap",
author_id: "181831",
title: "End Game (Jonathan Grave #6)",
book_id: "2634318418596481181831",
publication_year: "2014",
average_rating: "4.16",
image_url: "https://images.gr-assets.com/books/1389598387m/18596481.jpg",
small_image_url: "https://images.gr-assets.com/books/1389598387s/18596481.jpg",
created_at: "2017-06-17T18:31:45.711Z",
updated_at: "2017-06-17T18:31:45.711Z"
},
{
id: 199,
author: "Lisa Marie Davis",
author_id: "2726790",
title: "The End Game",
book_id: "18279699131066052726790",
publication_year: "2011",
average_rating: "3.51",
image_url: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
small_image_url: "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
created_at: "2017-06-17T18:31:45.713Z",
updated_at: "2017-06-17T18:31:45.713Z"
},
{
id: 200,
author: "Dale Brown",
author_id: "2989",
title: "End Game (Dreamland, #8)",
book_id: "799643262989",
publication_year: "2006",
average_rating: "3.95",
image_url: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
small_image_url: "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
created_at: "2017-06-17T18:31:45.715Z",
updated_at: "2017-06-17T18:31:45.715Z"
}
]
//import 'isomorphic-fetch' from 'fetch';

const searchResultsReducer = (state=initialState, action) => {
    switch(action.type){
        case 'START_SEARCH':
            console.log("getting search results...")
            return state;
        case 'GET_SEARCH_RESULTS':
            return action.payload;
        default:
            return state;
    }
}

export default searchResultsReducer;

