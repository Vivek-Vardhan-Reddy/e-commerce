import React,{Component} from 'react';
import Items from './Items';

export default class collection  extends Component{
    articles=[
            
            {
            "source": {
            "id": "the-irish-times",
            "name": "The Irish Times"
            },
            "author": "Proinsias O'Mahony",
            "title": "Nvidia’s earnings: another wild ride ahead",
            "description": "A trillion lost, $750 billion gained: if you’re a trader looking for volatility, Nvidia is usually the place to be",
            "url": "https://www.irishtimes.com/your-money/2024/08/26/nvidias-earnings-another-wild-ride-ahead/",
            "urlToImage": "https://www.irishtimes.com/resizer/v2/V2PMJHLWLZ3HAX5ISJTTPY637E.jpg?smart=true&auth=5808e0c5d2f284e4613020eb7c85634756d7b69cd83dc94565b6f636a81781fc&width=1200&height=630",
            "publishedAt": "2024-08-26T04:45:00Z",
            "content": "Nvidia reports earnings on Wednesday. How investors will react to whats likely to be another blockbuster quarter is anyones guess, but dont be surprised if we see some volatility.\r\nIf youre a trader … [+1304 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Livemint"
            },
            "author": "Jocelyn Fernandes",
            "title": "Telegram responds to arrest of CEO Pavel Durov, ‘Abide by EU laws, have nothing to hide, absurd to claim abuse…’",
            "description": "Telegram responded on social media site X to CEO Pavel Durov's arrest in France, stating it abides by EU laws and calling it absurd to hold the platform accountable for user abuse.",
            "url": "https://www.livemint.com/companies/news/telegram-responds-arrest-of-ceo-pavel-durov-abide-by-eu-laws-have-nothing-to-hide-absurd-to-claim-abuse-of-platform-user-11724645595684.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/08/26/1600x900/FILES-RUSSIA-FRANCE-ARREST-TELEGRAM-0_1724557924995_1724646681498.jpg",
            "publishedAt": "2024-08-26T04:31:34Z",
            "content": "The messaging platform Telegram on the social media site X (formerly known as Twitter) responded to the arrest of CEO Pavel Durov in France.\r\nIn a post on August 26, Telegram Messenger said it abides… [+3058 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Business Standard"
            },
            "author": "ANI",
            "title": "US elections: Will keep Musk in cabinet if elected as president, says Trump",
            "description": "Trump said that Musk can consult with the country and produce ideas, especially on AI",
            "url": "https://www.business-standard.com/world-news/will-keep-elon-musk-in-cabinet-if-elected-as-president-says-trump-124082600078_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/26/thumb/fitandfill/400X400/1724646602-549.jpg",
            "publishedAt": "2024-08-26T04:31:22Z",
            "content": "Trump said that Musk can consult with the country and produce ideas, especially on AI\r\nTrump said Musk was a genius and we must cherish him. Image: Shutterstock\r\nANIUS\r\nFormer US President Donald Tru… [+2780 chars]"
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "Shubhangi Goel",
            "title": "A Chinese EV maker was slapped with a 36% tariff. The company said it didn't understand EU documentation.",
            "description": "A Chinese EV maker faces an especially harsh tariff because it failed to cooperate with EU authorities and did not provide necessary documentation.",
            "url": "https://www.businessinsider.com/european-union-chinese-ev-maker-saic-revised-tariff-overproduction-documentation-2024-8",
            "urlToImage": "https://i.insider.com/66cbf419c72ebc54a40ea9c6?width=1200&format=jpeg",
            "publishedAt": "2024-08-26T04:17:02Z",
            "content": "SAIC faces a 36% tariff from the EU for non-cooperation and unfair subsidization.Thomson Reuters\r\n<ul><li>SAIC Motors faces a 36.3% tariff from the EU for non-cooperation and unfair subsidization.</l… [+2945 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "Christopher Arcus",
            "title": "Battery Swapping Is Not Just About Speed, It’s About Power From The Grid — Part 2",
            "description": "Continuing on from Part 1 of this series on electric car & truck charging, here is Part 2. More Power Required for Heavy-Duty Electric Truck Charging than for Cars Fast charging heavy electric trucks is a much different proposition than fast charging electric…",
            "url": "https://cleantechnica.com/2024/08/26/battery-swapping-is-not-just-about-speed-its-about-power-from-the-grid-part-2/",
            "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/08/Mitsu-FUSO-eCanter-electric-truck-battery-swap.jpeg",
            "publishedAt": "2024-08-26T04:10:41Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nContinuing on from Part 1 of this series on electric car &amp; truck charging, here is Part 2.\r\nMore Power Re… [+16471 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Apple Explores Robotics in Search of Life Beyond the iPhone - Bloomberg",
            "description": "Apple Explores Robotics in Search of Life Beyond the iPhoneBloomberg An Apple/Tesla Robot War? Gurman Says Cupertino Is Making A Big Push Into RoboticsBenzinga Grabbing iPad from the room is too much of a chore? Apple's robotic iPad will be for youPhoneArena …",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=174836320",
            "urlToImage": null,
            "publishedAt": "2024-08-26T03:52:33Z",
            "content": "\"Remember, extremism in the nondefense of moderation is not a virtue.\"\r\n-- Peter Neumann, about usenet"
            },
            {
            "source": {
            "id": null,
            "name": "Livemint"
            },
            "author": "Shivangini",
            "title": "Telegram CEO arrested: Elon Musk, Edward Snowden, other tech titans raise alarm over free speech in France, Europe",
            "description": "Pavel Durov, the man behind the encrypted messaging app Telegram, was arrested on Sunday. A shockwave rippled through the tech world garnering outburst from Elon Musk, Edward Snowden and more",
            "url": "https://www.livemint.com/companies/people/telegram-ceo-arrested-pavel-durov-elon-musk-edward-snowden-over-free-speech-in-france-europe-11724639817078.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/08/26/1600x900/Pavel_Durov_1722334521860_1724641155924.jpg",
            "publishedAt": "2024-08-26T03:42:09Z",
            "content": "Pavel Durov, the 39-year-old founder of the popular messaging app Telegram, was arrested at Le Bourget Airport in France on Sunday, August 25. The arrest, based on a warrant related to alleged offenc… [+2859 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Twit.tv"
            },
            "author": "TWiT",
            "title": "TWiT 994: Time Moves On, but I Don't - Pavel Durov Arrested, Hacking Bikes, Apple Event Rumors",
            "description": "Pavel Durov Arrested, Hacking Bikes, Apple Event Rumors<ul> \n<li>Martin Shkreli must surrender his Wu-Tang album copies </li> \n<li>Telegram messaging app CEO Durov arrested in France </li> \n<li>Elon Musk to the Rescue </li> \n<li>Tesla purging old blog posts c…",
            "url": "https://twit.tv/shows/this-week-in-tech/episodes/994",
            "urlToImage": "https://elroy.twit.tv/sites/default/files/images/episodes/2024/08/853032/hero/TWIT0994_thumb.jpg",
            "publishedAt": "2024-08-26T03:27:18Z",
            "content": "Pavel Durov Arrested, Hacking Bikes, Apple Event Rumors\r\n<ul><li>Martin Shkreli must surrender his Wu-Tang album copies </li><li>Telegram messaging app CEO Durov arrested in France </li><li>Elon Musk… [+812 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Paul Tan's Automotive News"
            },
            "author": "Mick Chan",
            "title": "Tesla Model S, Model Y suspension failures – US NHTSA recommends expanding service bulletin",
            "description": "Following a four-year investigation into suspension failures involving a number of Tesla vehicles, the National Highway Traffic Safety Administration (NHTSA) has recommended that the EV maker widens its service bulletin to cover any vehicle equipped […]\nThe p…",
            "url": "https://paultan.org/2024/08/26/tesla-model-s-model-y-suspension-failures-us-nhtsa-recommends-expanding-service-bulletin/",
            "urlToImage": "https://paultan.org/image/2016/04/2016-Tesla-Model-S-facelift-1-1200x641.jpg",
            "publishedAt": "2024-08-26T02:42:08Z",
            "content": "Following a four-year investigation into suspension failures involving a number of Tesla vehicles, the National Highway Traffic Safety Administration (NHTSA) has recommended that the EV maker widens … [+2308 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Digitimes"
            },
            "author": "Joseph(C) Chen",
            "title": "Humanoid robot viability assessed by supply chain players",
            "description": "Tesla CEO Elon Musk has announced plans to begin limited production of humanoid robots by 2025. Meanwhile, Chinese company Unitree Robotics has already listed its humanoid robots on JD.com, sparking widespread debate about the commercialization of humanoid ro…",
            "url": "https://www.digitimes.com/news/a20240822PD221/tesla-elon-musk-ceo-robotics-fanuc.html",
            "urlToImage": "https://img.digitimes.com/newsshow/20240822pd221_files/2_b.jpg",
            "publishedAt": "2024-08-26T02:07:31Z",
            "content": "Save my User ID and Password\r\nSome subscribers prefer to save their log-in information so they do not have to enter their User ID and Password each time they visit the site. To activate this function… [+307 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "cnbc.com",
            "title": "Tesla’s Optimus faces stiff humanoid competition at Beijing robot conference",
            "description": "While Chinese companies last week showed off humanlike robots playing the zither or grabbing sodas, Tesla displayed its Optimus humanoid inside a clear box, next to its cars.\n- The World Robot Conference that began Wednesday in Beijing claimed it revealed 27 …",
            "url": "https://biztoc.com/x/a632b27e77c18b97",
            "urlToImage": "https://biztoc.com/cdn/a632b27e77c18b97_s.webp",
            "publishedAt": "2024-08-26T01:48:04Z",
            "content": "While Chinese companies last week showed off humanlike robots playing the zither or grabbing sodas, Tesla displayed its Optimus humanoid inside a clear box, next to its cars.- The World Robot Confere… [+129 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": null,
            "title": "Tesla’s Optimus faces stiff humanoid competition at Beijing robot conference",
            "description": "While Chinese companies last week showed off human-like robots playing the zither or grabbing sodas, Tesla displayed its Optimus humanoid inside a clear box.",
            "url": "https://www.cnbc.com/2024/08/26/teslas-optimus-faces-humanoid-competition-at-beijing-robot-conference.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/108024744-1724401868887-IMG_2645.jpg?v=1724401979&w=1920&h=1080",
            "publishedAt": "2024-08-26T01:35:00Z",
            "content": "BEIJING While Chinese companies last week showed off humanlike robots playing the zither or grabbing sodas, Tesla displayed its Optimus humanoid inside a clear box, motionless next to its cars.\r\nElon… [+5401 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Memeorandum.com"
            },
            "author": null,
            "title": "Trump says Musk wouldn't have time to be in his White House cabinet, but could 'consult' (Rebecca Picciotto/CNBC)",
            "description": "Rebecca Picciotto / CNBC:\nTrump says Musk wouldn't have time to be in his White House cabinet, but could ‘consult’ … Former President Donald Trump said that Tesla and SpaceX CEO Elon Musk likely couldn't serve in his hypothetical White House cabinet due to th…",
            "url": "https://www.memeorandum.com/240825/p34",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/108017063-1722969747515-Elon_Trump.jpg?v=1722973051&w=1920&h=1080",
            "publishedAt": "2024-08-26T01:30:10Z",
            "content": "memeorandum is an auto-generated summary of the stories that US political commentators are discussing online right now.\r\nUnlike sister sites Techmeme and Mediagazer, it is not a human-edited news out… [+72 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Funniest/Most Insightful Comments Of The Week At Techdirt",
            "description": "This week, our first place winner on the insightful side is That Anonymous Coward with a comment about the obvious connection between Tesla and ExTwitter that raises some questions about the judge in the Media Matters laswsuit: What stock was it Elmo was goin…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=174834836",
            "urlToImage": null,
            "publishedAt": "2024-08-25T23:14:00Z",
            "content": "Check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your GitHub releases to SourceForge quickly a… [+228 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Motley Fool Australia"
            },
            "author": "Tristan Harrison",
            "title": "3 reasons why the Vanguard MSCI Index International Shares ETF (VGS) is a top buy",
            "description": "This is one of my favourite exchange-traded funds for a few different reasons. \nThe post 3 reasons why the Vanguard MSCI Index International Shares ETF (VGS) is a top buy appeared first on The Motley Fool Australia.",
            "url": "https://www.fool.com.au/2024/08/26/3-reasons-why-the-vanguard-msci-index-international-shares-etf-vgs-is-a-top-buy/",
            "urlToImage": "https://www.fool.com.au/wp-content/uploads/2024/01/three-discuss-finance-1200x675.jpg",
            "publishedAt": "2024-08-25T22:38:10Z",
            "content": "The Vanguard MSCI Index International Shares ETF (ASX: VGS) is one of the top exchange-traded funds (ETFs), in my opinion. \r\nThis ETF provides exposure to many of the world's largest companies listed… [+3107 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": null,
            "title": "Trump says Musk wouldn't have time to be in his White House cabinet, but could 'consult'",
            "description": "Elon Musk and Donald Trump have formed an unlikely alliance ahead of the 2024 election against Kamala Harris.",
            "url": "https://www.cnbc.com/2024/08/25/trump-elon-musk-white-house-cabinet-election-republicans.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/108017063-1722969747515-Elon_Trump.jpg?v=1722973051&w=1920&h=1080",
            "publishedAt": "2024-08-25T22:38:01Z",
            "content": "Former President Donald Trump said that Tesla and SpaceX CEO Elon Musk likely couldn't serve in his hypothetical White House cabinet due to the demanding schedule of running his various companies.\r\n\"… [+1901 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Bitcoinist"
            },
            "author": "Reza Ali",
            "title": "Telegram CEO Pavel Durov Arrested By French Police – Will It Impact The TON Ecosystem?",
            "description": "Pavel Durov, the founder and CEO of Telegram, has been detained by authorities in France. The detention is connected to a search warrant alleging violations of the encrypted messaging platform. French media, including Le Monde, reported that Durov was arreste…",
            "url": "https://bitcoinist.com/telegram-ceo-pavel-durov-arrested-by-french-police-will-it-impact-the-ton-ecosystem/",
            "urlToImage": "https://bitcoinist.com/wp-content/uploads/2024/08/DALL·E-2024-08-25-17.30.33-Create-a-detailed-image-depicting-the-headline-Telegram-CEO-Pavel-Durov-Arrested-by-France-Police-Will-It-Impact-the-TON-Ecosystem_.-The-image-shou.webp",
            "publishedAt": "2024-08-25T22:00:11Z",
            "content": "Pavel Durov, the founder and CEO of Telegram, has been detained by authorities in France. The detention is connected to a search warrant alleging violations of the encrypted messaging platform.\r\nFren… [+3960 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Drive.com.au"
            },
            "author": "Ben Zachariah",
            "title": "Tesla overtaken by BMW electric models in European sales race – report",
            "description": "Electric car sales in Europe have slowed down, but its BMW who have taken the monthly sales crown in the segment.",
            "url": "https://www.drive.com.au/news/tesla-overtaken-by-bmw-electric-models-in-european-sales-race/",
            "urlToImage": "https://media.drive.com.au/obj/tx_q:70,rs:auto:1920:1080:1/driveau/upload/cms/uploads/z8yezaorcnlwl7j4yurj",
            "publishedAt": "2024-08-25T22:00:00Z",
            "content": "However, BMW took out the sixth and seventh positions with the iX1 (4305) and i4 (4198) respectively, while other models like the iX2, iX3, iX, i5, and i7 contributed to the brand's surging EV sales."
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "Carolyn Fortuna",
            "title": "Musk’s Influence On The November US Presidential Election Is Growing",
            "description": "Elon Musk, the innovator of space exploration, electric vehicles, and renewable energy, has become quite the provocateur. He has increasingly used his enormous social media platform, X, to express his worldviews and to boost certain politicians, including Don…",
            "url": "https://cleantechnica.com/2024/08/25/musks-influence-on-the-november-us-presidential-election-is-growing/",
            "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/08/Elon-Musk-looking-to-space-1.jpg",
            "publishedAt": "2024-08-25T21:23:43Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nElon Musk, the innovator of space exploration, electric vehicles, and renewable energy, has become quite the … [+8418 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Digital Journal"
            },
            "author": "Dr. Tim Sandle",
            "title": "Crash: Electric vehicles involved in the most accidents revealed",
            "description": "The Tesla Model 3 had the highest number of total fatal accidents, with 147 in the past 5 years. \nThe post Crash: Electric vehicles involved in the most accidents revealed appeared first on Digital Journal.",
            "url": "https://www.digitaljournal.com/world/crash-electric-vehicles-involved-in-the-most-accidents-revealed/article",
            "urlToImage": "https://www.digitaljournal.com/wp-content/uploads/2024/04/Tesla-electric-cars-©AFP-1K-01-1024x576.jpg",
            "publishedAt": "2024-08-25T21:08:12Z",
            "content": "Electric vehicles are becoming more common as the push for cleaner motoring takes place. A new study has researched the most popular electric vehicles (EVs) in the U.S. in order to identify which are… [+3005 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "NDTV News"
            },
            "author": null,
            "title": "France Extends Detention Of Telegram Chief Pavel Durov",
            "description": "French judicial authorities on Sunday extended the detention of the Russian-born founder and chief of Telegram Pavel Durov after his arrest at a Paris airport over alleged offences related to the popular but controversial messaging app.",
            "url": "https://www.ndtv.com/world-news/france-extends-detention-of-telegram-chief-pavel-durov-6417625",
            "urlToImage": "https://c.ndtvimg.com/2024-08/2j54hml8_pavel-durov_625x300_25_August_24.jpeg",
            "publishedAt": "2024-08-25T20:57:10Z",
            "content": "Mr Durov holds a French passport in addition to other nationalities. (File)\r\nFrench judicial authorities on Sunday extended the detention of the Russian-born founder and chief of Telegram Pavel Durov… [+5077 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "247wallst.com",
            "title": "The Race for Self-Driving Dominance: Alphabet’s Waymo vs. Tesla",
            "description": "Key Points:\nWaymo logged 100,000 trips in a week, showing strong progress in self-driving technology.\nTesla and Chinese companies lead in data collection, but Waymo’s tech-focused approach is competitive.\nSuccessful commercialization of Waymo could significan…",
            "url": "https://biztoc.com/x/0e368f4c613be9b6",
            "urlToImage": "https://biztoc.com/cdn/0e368f4c613be9b6_s.webp",
            "publishedAt": "2024-08-25T20:49:02Z",
            "content": "Key Points:Waymo logged 100,000 trips in a week, showing strong progress in self-driving technology.Tesla and Chinese companies lead in data collection, but Waymos tech-focused approach is competitiv… [+132 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
            },
            {
            "source": {
            "id": null,
            "name": "Ibtimes.com.au"
            },
            "author": "Sylvie Maligorne, Julia Pavesi, Jurgen Hecker and Stuart Williams",
            "title": "Telegram Chief Durov In French Custody After Airport Arrest",
            "description": "The Russian-born founder and chief of Telegram Pavel Durov was in French police custody Sunday, awaiting a court hearing after his arrest at a Paris airport over alleged offences related to the popular but controversial messaging app.",
            "url": "https://www.ibtimes.com.au/telegram-chief-durov-french-custody-after-airport-arrest-1850893",
            "urlToImage": "https://d.ibtimes.com.au/en/full/1857736/pavel-durov-co-founder-encrypted-messaging-app-telegram-was-arrested-airport-near-paris.jpg",
            "publishedAt": "2024-08-25T19:45:14Z",
            "content": "The Russian-born founder and chief of Telegram Pavel Durov was in French police custody Sunday, awaiting a court hearing after his arrest at a Paris airport over alleged offences related to the popul… [+4815 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CarScoops"
            },
            "author": "Chris Chilton",
            "title": "Utah Is Using Laser Beams To Make Salt Lake City Intersections Safer | Carscoops",
            "description": "The tech tracks red-light runners and near misses, but it can also extend green-light time for pedestrians if it senses they need extra seconds to cross",
            "url": "https://www.carscoops.com/2024/08/utah-is-using-lidar-to-make-salt-lake-intersections-safer/",
            "urlToImage": "https://www.carscoops.com/wp-content/uploads/2024/08/Lazer-eyes.jpg",
            "publishedAt": "2024-08-25T19:34:58Z",
            "content": "The tech tracks red-light runners and near misses, but it can also extend green-light time for pedestrians if it senses they need extra seconds to cross \r\n<ul><li>Utah’s DOT uses LiDAR at intersectio… [+2321 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "Steve Hanley",
            "title": "EV Revolution News — BMW Outsells Tesla, Canadians Want Chinese Electric Cars, Mercedes PHEV",
            "description": "Those celebrating the news that sales of electric cars are slowing somewhat might want to take a step back and see the big picture. An apt analogy might be the flat screen TV phenomenon. The first of them were big, bulky, and OMG expensive — upwards of $10,00…",
            "url": "https://cleantechnica.com/2024/08/25/ev-revolution-news-bmw-outsells-tesla-canadians-want-chinese-electric-cars-mercedes-phev/",
            "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/08/BMW-i4-eDrive-35-M-Sport.png",
            "publishedAt": "2024-08-25T19:22:06Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nThose celebrating the news that sales of electric cars are slowing somewhat might want to take a step back an… [+9783 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "International Business Times"
            },
            "author": "Thibault Marchand and Stuart Williams",
            "title": "Durov: Mysterious And Controversial Telegram Founder",
            "description": "Russian-born tech entrepreneur Pavel Durov has founded wildly popular social networks as well as a cryptocurrency, amassed a multi-billion-dollar fortune and locked horns with authorities not just in Russia but around the world.",
            "url": "https://www.ibtimes.com/durov-mysterious-controversial-telegram-founder-3740738",
            "urlToImage": "https://d.ibtimes.com/en/full/4543514/durov-cultivates-near-mystical-image.jpg",
            "publishedAt": "2024-08-25T19:15:22Z",
            "content": "Russian-born tech entrepreneur Pavel Durov has founded wildly popular social networks as well as a cryptocurrency, amassed a multi-billion-dollar fortune and locked horns with authorities not just in… [+5152 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ibtimes.com.au"
            },
            "author": "Thibault Marchand and Stuart Williams",
            "title": "Durov: Mysterious And Controversial Telegram Founder",
            "description": "Russian-born tech entrepreneur Pavel Durov has founded wildly popular social networks as well as a cryptocurrency, amassed a multi-billion-dollar fortune and locked horns with authorities not just in Russia but around the world.",
            "url": "https://www.ibtimes.com.au/durov-mysterious-controversial-telegram-founder-1850892",
            "urlToImage": "https://d.ibtimes.com.au/en/full/1857729/durov-cultivates-near-mystical-image.jpg",
            "publishedAt": "2024-08-25T19:15:16Z",
            "content": "Russian-born tech entrepreneur Pavel Durov has founded wildly popular social networks as well as a cryptocurrency, amassed a multi-billion-dollar fortune and locked horns with authorities not just in… [+5152 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Digital Journal"
            },
            "author": "AFP",
            "title": "Durov: Mysterious and controversial Telegram founder",
            "description": "Russian-born tech entrepreneur Pavel Durov has founded wildly popular social networks as well as a cryptocurrency, amassed a multi-billion-dollar fortune and locked horns with authorities not just in Russia but around the world. Still a few months shy of his …",
            "url": "https://www.digitaljournal.com/world/durov-mysterious-and-controversial-telegram-founder/article",
            "urlToImage": "https://www.digitaljournal.com/wp-content/uploads/2024/08/e58d8e8a76284d37521ad73148bfa2c800bc6593-1.jpg",
            "publishedAt": "2024-08-25T19:15:11Z",
            "content": "Durov cultivates a near mystical image - Copyright AFP/File DALE DE LA REY\r\nRussian-born tech entrepreneur Pavel Durov has founded wildly popular social networks as well as a cryptocurrency, amassed … [+5285 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Techdirt"
            },
            "author": "Leigh Beadon",
            "title": "Funniest/Most Insightful Comments Of The Week At Techdirt",
            "description": "This week, our first place winner on the insightful side is That Anonymous Coward with a comment about the obvious connection between Tesla and ExTwitter that raises some questions about the judge in the Media Matters laswsuit: What stock was it Elmo was goin…",
            "url": "https://www.techdirt.com/2024/08/25/funniest-most-insightful-comments-of-the-week-at-techdirt-124/",
            "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
            "publishedAt": "2024-08-25T19:00:00Z",
            "content": "from the so-you-say dept\r\nThis week, our first place winner on the insightful side is That Anonymous Coward with a comment about the obvious connection between Tesla and ExTwitter that raises some qu… [+2419 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "247wallst.com",
            "title": "Google (Nasdaq: GOOG) Wants To Steal Elon’s Business",
            "description": "Key Points:\nWaymo logged 100,000 trips in a week, showing strong progress in self-driving technology.\nTesla and Chinese companies lead in data collection, but Waymo’s tech-focused approach is competitive.\nSuccessful commercialization of Waymo could significan…",
            "url": "https://biztoc.com/x/ee476073c47d2648",
            "urlToImage": "https://biztoc.com/cdn/800/og.png",
            "publishedAt": "2024-08-25T18:14:27Z",
            "content": "Key Points:Waymo logged 100,000 trips in a week, showing strong progress in self-driving technology.Tesla and Chinese companies lead in data collection, but Waymos tech-focused approach is competitiv… [+132 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "VOA News"
            },
            "author": "webdesk@voanews.com (Reuters)",
            "title": "Wall Street Week Ahead — 'Super Bowl' Nvidia earnings stand to test searing AI trade",
            "description": "New York — The rally in U.S. stocks faces an important test [...]  with earnings from chipmaking giant Nvidia NVDA.O, whose blistering run has powered markets throughout 2024.  \n\n\nThe S&P 500 .SPX has pared a sharp drop it suffered after U.S. economic worries…",
            "url": "https://www.voanews.com/a/wall-st-week-ahead-super-bowl-nvidia-earnings-stand-to-test-searing-ai-trade-/7756351.html",
            "urlToImage": "https://gdb.voanews.com/43FE6C6A-2A94-4528-80D3-46BD2BE63811.jpg",
            "publishedAt": "2024-08-25T18:09:59Z",
            "content": "New York  The rally in U.S. stocks faces an important test [...] with earnings from chipmaking giant Nvidia NVDA.O, whose blistering run has powered markets throughout 2024. \r\nThe S&amp;P 500 .SPX ha… [+3999 chars]"
            },
            {
            "source": {
            "id": "fox-news",
            "name": "Fox News"
            },
            "author": "Emma Colton",
            "title": "Harris' push for electric vehicles suffers another blow after automaker backtracks: 'Unwanted and unworkable'",
            "description": "Ford is backing away from rolling out electric vehicles in favor of hybrid options, indicating more defeats to Harris-backed electric vehicle initiatives.",
            "url": "https://www.foxnews.com/politics/biden-harris-push-electric-vehicles-suffers-blow-after-ford-backtracks-ev-plan-unwanted-unworkable",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/08/Vice-President-Kamala-Harris-price-fixing09.jpg",
            "publishedAt": "2024-08-25T17:52:40Z",
            "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nBy entering your email and pushing continue, you are ag… [+10319 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "Chris Boylan",
            "title": "Save $1,000 on a New Tesla Car with Revived Referral Program",
            "description": "When Tesla discontinued the referral program earlier this year, Elon said it would be back. Yesterday the company made good on that promise, and now Tesla car buyers can save $1,000 on a new Tesla car purchase when they use a referral code or referral link. T…",
            "url": "https://cleantechnica.com/2024/08/25/save-1000-on-a-new-tesla-car-with-revived-referral-program/",
            "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/08/tesla-referral-program-model-3-featured.jpg",
            "publishedAt": "2024-08-25T17:40:31Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nWhen Tesla discontinued the referral program earlier this year, Elon said it would be back. Yesterday the com… [+4645 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "David Waterworth",
            "title": "Glamping with the Kia EV9",
            "description": "Can you travel around Australia (a distance of about 10,000 miles) in an electric vehicle, towing a 2-ton caravan without stinting on any of the luxuries? Despite many naysayers (including our illustrious ex-prime minister Scott Morrison), you can! It will to…",
            "url": "https://cleantechnica.com/2024/08/25/glamping-with-the-kia-ev9/",
            "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/08/EV-camping-set-up-in-Cairns.jpg",
            "publishedAt": "2024-08-25T17:14:56Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nCan you travel around Australia (a distance of about 10,000 miles) in an electric vehicle, towing a 2-ton car… [+10324 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "InsideEVs "
            },
            "author": "Suvrat Kothari",
            "title": "LFP Battery Health Degrades At Full Charge, Study Finds",
            "description": "Tesla and Ford advice charging EVs equipped with LFP batteries to a 100% frequently. A new study's findings contradict that.",
            "url": "https://insideevs.com/news/731210/lfp-battery-health-degrades-full-charge-study-finds/",
            "urlToImage": "https://cdn.motor1.com/images/mgl/mM27VA/s1/lfp-battery-can-degrade-at-high-soc.jpg",
            "publishedAt": "2024-08-25T16:02:29Z",
            "content": "<ul><li>Lithium iron phosphate (LFP) batteries are cheaper to produce and more stable than traditional nickel-based chemistries.</li><li>A new study from a Tesla-funded lab found that LFP batteries d… [+4971 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Typepad.com"
            },
            "author": "Paul Caron",
            "title": "WSJ: Elon Musk’s Walk With Jesus",
            "description": "Wall Street Journal, Elon Musk’s Walk With Jesus: Elon Musk is publicly offering his own interpretation of Jesus’ teachings with an Old Testament twist. “Christianity has become toothless,” the billionaire posted recently on his X social-media platform. “Unle…",
            "url": "https://taxprof.typepad.com/taxprof_blog/2024/08/elon-musk-jesus.html",
            "urlToImage": "https://taxprof.typepad.com/.a/6a00d8341c4eab53ef02c8d3b9c5f0200c-220si",
            "publishedAt": "2024-08-25T16:01:00Z",
            "content": "Wall Street Journal, Elon Musks Walk With Jesus:\r\nElon Musk is publicly offering his own interpretation of Jesus teachings with an Old Testament twist.\r\nChristianity has become toothless, the billion… [+3264 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "PCMag.com"
            },
            "author": "Emily Price",
            "title": "Elon Musk to X Employees: Tell Me Why You Deserve Your Stock Options",
            "description": "Musk did something similar at Tesla—right before he laid off 10% of the staff.\nIf you're an X employee and want your stock options, you better be a good writer.Elon Musk sent an email to X staff this week that says stock options will be granted \"based on the …",
            "url": "https://uk.pcmag.com/social-media/154054/elon-musk-to-x-employees-tell-me-why-you-deserve-your-stock-options",
            "urlToImage": "https://sm.pcmag.com/t/pcmag_uk/news/e/elon-musk-/elon-musk-to-x-employees-tell-me-why-you-deserve-your-stock_625w.1200.jpg",
            "publishedAt": "2024-08-25T15:52:33Z",
            "content": "If you're an X employee and want your stock options, you better be a good writer.\r\nElon Musk sent an email to X staff this week that says stock options will be granted \"based on the anticipated impac… [+1250 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "PCMag.com"
            },
            "author": "Emily Price",
            "title": "Elon Musk to X Employees: Tell Me Why You Deserve Your Stock Options",
            "description": "Musk did something similar at Tesla—right before he laid off 10% of the staff.\nIf you're an X employee and want your stock options, you better be a good writer.Elon Musk sent an email to X staff this week that says stock options will be granted \"based on the …",
            "url": "https://me.pcmag.com/en/social-media-1/25490/elon-musk-to-x-employees-tell-me-why-you-deserve-your-stock-options",
            "urlToImage": "https://sm.pcmag.com/t/pcmag_me/news/e/elon-musk-/elon-musk-to-x-employees-tell-me-why-you-deserve-your-stock_t6y9.1200.jpg",
            "publishedAt": "2024-08-25T15:52:33Z",
            "content": "If you're an X employee and want your stock options, you better be a good writer.\r\nElon Musk sent an email to X staff this week that says stock options will be granted \"based on the anticipated impac… [+1250 chars]"
            },
            {
            "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
            },
            "author": "ET Online",
            "title": "Edward Snowden, Elon Musk, and other tech giants condemn Telegram founder Pavel Durov’s arrest",
            "description": "Tech leaders, including Edward Snowden and Elon Musk, criticized the arrest of Telegram founder Pavel Durov in France. Durov, facing charges that could lead to 20 years in prison, was detained over offenses related to Telegram's encryption. Critics argue the …",
            "url": "https://economictimes.indiatimes.com/news/international/world-news/edward-snowden-elon-musk-and-other-tech-giants-condemn-telegram-founder-pavel-durovs-arrest/articleshow/112785132.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-112785172,width-1200,height-630,imgsize-231789,overlay-economictimes/photo.jpg",
            "publishedAt": "2024-08-25T15:31:40Z",
            "content": "Prominent figures in the tech industry, including Edward Snowden and Elon Musk, have voiced their opposition to the arrest of Telegram founder Pavel Durov. Durov, who was apprehended on August 25 aft… [+3486 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Forbes"
            },
            "author": "Alison Durkee, Forbes Staff, \n Alison Durkee, Forbes Staff\n https://www.forbes.com/sites/alisondurkee/",
            "title": "Trump Vs. Harris Fundraising Race: Harris Raises $540 Million Since Biden Dropped Out, Campaign Says",
            "description": "The Biden—now Harris—campaign raised nearly four times as much as Trump in July.",
            "url": "https://www.forbes.com/sites/alisondurkee/2024/08/25/trump-vs-harris-fundraising-race-harris-raises-540-million-since-biden-dropped-out-campaign-says/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66c5eaed000d1c6e3d690d75/0x0.jpg?format=jpg&crop=1942,1093,x0,y12,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-08-25T14:43:33Z",
            "content": "Vice President Kamala Harris entrance into the presidential election last month has blown up her fundraising race with former President Donald Trump, with the combined Biden and Harris campaigns rais… [+8349 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yahoo Entertainment"
            },
            "author": "Josh Schafer",
            "title": "Nvidia earnings highlight a busy end of August: What to know this week",
            "description": "A highly anticipated earnings release from Nvidia is expected to have implications for investor sentiment across the broader market in the week ahead.",
            "url": "https://finance.yahoo.com/news/nvidia-earnings-highlight-a-busy-end-of-august-what-to-know-this-week-144305612.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/6AxQME397Pp0PIdwzV1tsA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/5d3e1230-238b-11ef-9eef-fcfaa59b88b9",
            "publishedAt": "2024-08-25T14:43:05Z",
            "content": "Federal Reserve Chair Jerome Powell told investors on Friday \"time has come for policy to adjust.\"\r\nIn response, stocks finished the week near record highs. The S&amp;P 500 (^GSPC), the Nasdaq Compos… [+8952 chars]"
            }
        
    ]
    

    constructor(){
        super();
        this.state={
            article:this.articles
        }
        // article:this.articles
    const componentDidMount =async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7`
        // console.log(fetch(url));
    }
    }
    render(){
        // let {title,description}=this.props;
        return(
            <div className='container'>
                <h1>This is Collection</h1>
                <div className='row m-3'>
                    {this.state.article.map((e)=>{
                        // console.log(e)
                        return(
                        <div className='col-md-4 m-auto'>
                            <Items title={e.title}description={e.description}urlToImage={e.urlToImage}url={e.url}/>
                        </div>)
                    })}
                </div>
                
            </div>

                // {/* <div className='row m-4'>
                //     <div className='col-md-3 m-auto'>
                //         <Items title="Tittle1"description="Details1"/>
                //     </div>
                // </div> */}
               
          
        )
    }
        }
