import {Seeder, SeederFactoryManager} from 'typeorm-extension'
import {DataSource} from 'typeorm'
import {Video} from '../../../video/video.entity'
import {User} from '../../../user/user.entity'
import * as bcrypt from 'bcrypt'

export default class VideosSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        console.log('> 03 Seeding Videos')

        const salt = bcrypt.genSaltSync(Number(10))
        const hashedPassword = bcrypt.hashSync('12345', salt)

        const videoRepository = dataSource.getRepository<Video>(Video)
        const userRepository = dataSource.getRepository<User>(User)

        // const roles = await rolesRepository.createQueryBuilder('roles')
        //                 .select(['roles'])
        //                 .getMany()

        const teacherLeanne = await userRepository.findOneBy({
            email: 'leanne@april.biz',
        })
        const teacherErvin = await userRepository.findOneBy({
            email: 'ervin@melissa.tv',
        })
        const studentClementine = await userRepository.findOneBy({
            email: 'clementine@yesenia.net',
        })
        const studentByron = await userRepository.findOneBy({
            email: 'byron.lebsack@kory.org',
        })
        const studentHelsey = await userRepository.findOneBy({
            email: 'helsey_dietrich@annie.ca',
        })

        const users: User[] = [
            teacherLeanne,
            teacherErvin,
            studentClementine,
            studentByron,
            studentHelsey,
        ]

        await videoRepository.insert([
            {
                title: '#11 Adding floetrol to 4 different house paints to get the best pillow for the bloom technique! aria-label=#11 Adding floetrol to 4 different house paints to get the best pillow for the bloom technique! by Lisa Marvin Art 2 years ago 28 minutes 19,606 views A6OagMPxojg',
                videourl: 'https://www.youtube.com/watch?v=-9S0r27ylKc',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '#25 How to mix pigments, flow, and tube paints to the perfect consistency for the bloom technique! aria-label=#25 How to mix pigments, flow, and tube paints to the perfect consistency for the bloom technique! by Lisa Marvin Art 1 year ago 13 minutes, 59 seconds 13,564 views zpjmhX9swSY',
                videourl: 'https://www.youtube.com/watch?v=0HVz04QplRU',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '#art #paint #paintingtutorial #paintingart aria-label=#art #paint #paintingtutorial #paintingart by Artbynikitachawda 3 days ago 29 seconds 2,547 views - play Short _rH50J-WFb0',
                videourl: 'https://www.youtube.com/watch?v=0TxzItefGUs',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '#art #paint #paintingtutorial #paintingart aria-label=#art #paint #paintingtutorial #paintingart by Artbynikitachawda 3 days ago 29 seconds 2,547 views - play Short _rH50J-WFb0',
                videourl: 'https://www.youtube.com/watch?v=0USJBJEj3bo',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '#unboxing new #neon and #Metallic #watercolor #paints #shorts #art #painting #satisfying ￼ aria-label=#unboxing new #neon and #Metallic #watercolor #paints #shorts #art #painting #satisfying ￼ by Hack Reynolds 5 days ago 11 seconds 10,077 views - play Short 4EQDlsO5sUE',
                videourl: 'https://www.youtube.com/watch?v=0evJ82qDWNA',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Cozy ambience (Village life) Acrylic painting. Artist - Viktor Yushkevich. #93 photos 2021. aria-label=Cozy ambience (Village life) Acrylic painting. Artist - Viktor Yushkevich. #93 photos 2021. by U.V.N Art 3 months ago 53 minutes 973,237 views QngPGg4plVM',
                videourl: 'https://www.youtube.com/watch?v=11tEGHevPJI',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Painting is such an individual thing... aria-label=Painting is such an individual thing... by Bob Ross 2 days ago 28 seconds 22,024 views - play Short w2haokwGsds',
                videourl: 'https://www.youtube.com/watch?v=18YyWkEiHz4',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Summer Wonders The best summer landscape. Composer: Viktor Yushkevich. aria-label=Summer Wonders The best summer landscape. Composer: Viktor Yushkevich. by U.V.N Art 2 years ago 32 minutes 6,064,157 views ACcFYF7N1dw',
                videourl: 'https://www.youtube.com/watch?v=18YyWkEiHz4',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '(1186) Modified Bloom with All Deco Art Paints~Acrylic Paint Pouring aria-label=(1186) Modified Bloom with All Deco Art Paints~Acrylic Paint Pouring by Caroles Art Room 1 month ago 21 minutes 941 views utuCdGGEHN8',
                videourl: 'https://www.youtube.com/watch?v=3c7HuWCxdiE',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '(962) Split Cup Acrylic Pouring ~ Pearl Acrylic Paints ~ Abstract Painting ~ Fluid Art Tutorial aria-label=(962) Split Cup Acrylic Pouring ~ Pearl Acrylic Paints ~ Abstract Painting ~ Fluid Art Tutorial by Fiona Art 2 days ago 9 minutes, 4 seconds 5,697 views jgRZgw9OIcA',
                videourl: 'https://www.youtube.com/watch?v=4ZKUKCnkZ6E',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '10 Cool illusions - Hand Art Makeup [Compilation] aria-label=10 Cool illusions - Hand Art Makeup [Compilation] by TutoDraw 5 years ago 3 minutes, 31 seconds 100,254,199 views qOz9vHDV-C0',
                videourl: 'https://www.youtube.com/watch?v=5rA-ebz3dFA',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '10 Great Mysteries Hidden in Famous Paintings aria-label=10 Great Mysteries Hidden in Famous Paintings by BRIGHT SIDE 4 years ago 10 minutes, 1 second 7,365,013 views F-5ZPqUMgfM',
                videourl: 'https://www.youtube.com/watch?v=5rA-ebz3dFA',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '10 Nail Art Designs Using HOUSEHOLD ITEMS! | The Ultimate Guide #5 aria-label=10 Nail Art Designs Using HOUSEHOLD ITEMS! | The Ultimate Guide #5 by cutepolish 4 years ago 6 minutes, 25 seconds 4,248,820 views ZBwB9OKyJQM',
                videourl: 'https://www.youtube.com/watch?v=6NvtYdBFnR4',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '10 Nail Art Designs Using HOUSEHOLD ITEMS! | The Ultimate Guide #5 aria-label=10 Nail Art Designs Using HOUSEHOLD ITEMS! | The Ultimate Guide #5 by cutepolish 4 years ago 6 minutes, 25 seconds 4,248,820 views ZBwB9OKyJQM',
                videourl: 'https://www.youtube.com/watch?v=6NvtYdBFnR4',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '10 Super Easy Painting Ideas For Beginners - Moonlight Cherry Blossom Painting Ideas aria-label=10 Super Easy Painting Ideas For Beginners - Moonlight Cherry Blossom Painting Ideas by Amazing arts 2 years ago 18 minutes 17,359,256 views MRfIkTwUxIw',
                videourl: 'https://www.youtube.com/watch?v=6YSAMo6TmkE',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '10 mistakes beginners make in Acrylic Painting  -  Painting Tips w/ Lachri aria-label=10 mistakes beginners make in Acrylic Painting  -  Painting Tips w/ Lachri by Lachri Fine Art 5 years ago 21 minutes 1,378,828 views _jWTSQhG-TU',
                videourl: 'https://www.youtube.com/watch?v=6yoOXsxKV88',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '18 GENIUS IDEAS TO DECORATE BORING WALLS aria-label=18 GENIUS IDEAS TO DECORATE BORING WALLS by 5-MINUTE REPAIR 3 years ago 8 minutes, 18 seconds 47,646,172 views dCMG3r4kZeY',
                videourl: 'https://www.youtube.com/watch?v=6yoOXsxKV88',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '21 MUST-KNOW PAINTING HACKS FOR BEGINNERS aria-label=21 MUST-KNOW PAINTING HACKS FOR BEGINNERS by 5-Minute Crafts 4 years ago 15 minutes 27,066,313 views udZU4Q84oPk',
                videourl: 'https://www.youtube.com/watch?v=76jpCIZTq2E',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '23 UNPREDICTABLE PAINTING TECHNIQUES aria-label=23 UNPREDICTABLE PAINTING TECHNIQUES by 5-Minute Crafts FAMILY 2 years ago 16 minutes 21,221,928 views h-Z5ZeVWnQg',
                videourl: 'https://www.youtube.com/watch?v=7BMlX3QOq_Q',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '23 UNPREDICTABLE PAINTING TECHNIQUES aria-label=23 UNPREDICTABLE PAINTING TECHNIQUES by 5-Minute Crafts FAMILY 2 years ago 16 minutes 21,221,928 views h-Z5ZeVWnQg',
                videourl: 'https://www.youtube.com/watch?v=8GvSrVgeoCc',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '30 Artists Taking Pottery To The Next Level aria-label=30 Artists Taking Pottery To The Next Level by Insider 3 years ago 9 minutes, 9 seconds 14,014,578 views z2APU5ob9Og',
                videourl: 'https://www.youtube.com/watch?v=8WBUsjaLJuo',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '30 SIMPLE DRAWING TECHNIQUES aria-label=30 SIMPLE DRAWING TECHNIQUES by 5-Minute Crafts TEENS 3 years ago 8 minutes, 44 seconds 30,294,985 views z1XQHmR8Z28',
                videourl: 'https://www.youtube.com/watch?v=9Ui1ocILFkE',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '30 Simple Art Techniques Everyone Can Do aria-label=30 Simple Art Techniques Everyone Can Do by 5-Minute Crafts PLAY 1 year ago 15 minutes 4,314,058 views M7eCgNYUvxc',
                videourl: 'https://www.youtube.com/watch?v=A3esbhyGDbA',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '32 AWESOME PAINTING IDEAS THAT ARE ACTUALLY COOL aria-label=32 AWESOME PAINTING IDEAS THAT ARE ACTUALLY COOL by 5-Minute Crafts FAMILY 2 years ago 13 minutes, 40 seconds 4,095,397 views qmc29qZ-Zwc',
                videourl: 'https://www.youtube.com/watch?v=A6OagMPxojg',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: '8 Wall Paintings in Vastu Shastra that can change your Life | 8 चित्र जो आपकी किस्मत पलट सकते हैं aria-label=8 Wall Paintings in Vastu Shastra that can change your Life | 8 चित्र जो आपकी किस्मत पलट सकते हैं by Vastu Abhishek 2 years ago 5 minutes, 28 seconds 1,106,691 views uuJczkqPtqg',
                videourl: 'https://www.youtube.com/watch?v=ACcFYF7N1dw',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'A Hidden Art Form You’ll Flip For aria-label=A Hidden Art Form You’ll Flip For by Great Big Story 4 years ago 3 minutes, 13 seconds 317,761 views E4_2xGZy6Jk',
                videourl: 'https://www.youtube.com/watch?v=AHWKr9l_Mrw',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'ART HACKS AND PAINTING TECHNIQUES FOR BEGINNERS aria-label=ART HACKS AND PAINTING TECHNIQUES FOR BEGINNERS by 5-Minute Crafts 4 months ago 16 minutes 1,024,176 views RqaydH8rWgQ',
                videourl: 'https://www.youtube.com/watch?v=Bf6wLUEq-0k',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'ART SUPPLIES | Tips + Demos | All Mediums! aria-label=ART SUPPLIES | Tips + Demos | All Mediums! by Jess Karp 2 years ago 21 minutes 462,712 views 0evJ82qDWNA',
                videourl: 'https://www.youtube.com/watch?v=Bf6wLUEq-0k',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Acrylic Painting Lesson - Easy Northern Lights aria-label=Acrylic Painting Lesson - Easy Northern Lights by Lachri Fine Art 1 year ago 11 minutes, 4 seconds 65,425 views ymEb9mEoWtw',
                videourl: 'https://www.youtube.com/watch?v=C1aGqGaF1OM',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Acrylic Painting Lesson - Easy Northern Lights aria-label=Acrylic Painting Lesson - Easy Northern Lights by Lachri Fine Art 1 year ago 11 minutes, 4 seconds 65,425 views ymEb9mEoWtw',
                videourl: 'https://www.youtube.com/watch?v=CglxVw0lQ7o',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Aesthetic Art Work using Acrylic Paints | Painting Short Video | #Shorts | aria-label=Aesthetic Art Work using Acrylic Paints | Painting Short Video | #Shorts | by ArtShop 9 months ago 19 seconds 1,136 views - play Short OB7d2duS6-A',
                videourl: 'https://www.youtube.com/watch?v=Dauo_TOGFEY',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Amazing Art color aria-label=Amazing Art color by ArtMix 3 days ago 1 minute 1,773,798 views 7BMlX3QOq_Q',
                videourl: 'https://www.youtube.com/watch?v=E4_2xGZy6Jk',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Amazing DecoArt Enchanted Paints  Pour Painting, Flow Art, Acrylic Fluid Painting aria-label=Amazing DecoArt Enchanted Paints  Pour Painting, Flow Art, Acrylic Fluid Painting by COZ Creations Art 5 days ago 15 minutes 2,038 views 9Ui1ocILFkE',
                videourl: 'https://www.youtube.com/watch?v=EG16dFYK0gw',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Amazing Painting Art Video By Most Talented Artist. Painting Art Video. #shorts aria-label=Amazing Painting Art Video By Most Talented Artist. Painting Art Video. #shorts by Chandans Art 1 year ago 43 seconds 100,098,802 views - play Short J6mAsU_9P3w',
                videourl: 'https://www.youtube.com/watch?v=Ey7t81K5Ei4',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Amazing Street Artist From Suriname aria-label=Amazing Street Artist From Suriname by Zero To One Million 3 years ago 2 minutes, 51 seconds 25,754,980 views A3esbhyGDbA',
                videourl: 'https://www.youtube.com/watch?v=F-5ZPqUMgfM',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Amazing satisfying video #satisfying #color #art #viral #drawing #painting #shorts(5) aria-label=Amazing satisfying video #satisfying #color #art #viral #drawing #painting #shorts(5) by DIY crafts store 3 hours ago 5 seconds 683 views - play Short BO1wMQELVys',
                videourl: 'https://www.youtube.com/watch?v=FycLW60ztRY',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Art Screensaver for Your TV | 80 Famous Paintings | 4 Hour Classic Art Slideshow aria-label=Art Screensaver for Your TV | 80 Famous Paintings | 4 Hour Classic Art Slideshow by Art Deco 1 year ago 4 hours 319,862 views RAnGpqrsSyc',
                videourl: 'https://www.youtube.com/watch?v=GYBbcNt-ylQ',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Art Supplies &amp; Tips : How to Use Acrylic Paints aria-label=Art Supplies &amp; Tips : How to Use Acrylic Paints by eHowArtsAndCrafts 12 years ago 3 minutes, 41 seconds 483,111 views bmvP3Tvg7fo',
                videourl: 'https://www.youtube.com/watch?v=HDGC4A8jsh4',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Art TikToks that Make this World a Better Place 🎨✨ aria-label=Art TikToks that Make this World a Better Place 🎨✨ by PinkRamen 8 months ago 21 minutes 3,005,568 views hwR1i0ZZ6ac',
                videourl: 'https://www.youtube.com/watch?v=Hf__HjlaaCo',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Art Tips for Non-Artists: Blending Colors with Acrylic Paints aria-label=Art Tips for Non-Artists: Blending Colors with Acrylic Paints by Pinots Palette 5 years ago 47 seconds 6,712,972 views - play Short s4pjGaLb9cI',
                videourl: 'https://www.youtube.com/watch?v=J8wM9jKHg1M',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Art in progress #acrylicpainting #shorts #youtubeshorts #trendingshorts #painting #explore aria-label=Art in progress #acrylicpainting #shorts #youtubeshorts #trendingshorts #painting #explore by UnoVno Arts 10 hours ago 18 seconds 828 views - play Short pWuL4qTa1YM',
                videourl: 'https://www.youtube.com/watch?v=KD8cDJTQ79k',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Art painting #art #paint #drawings #paitings #nature #view #short #watercolor aria-label=Art painting #art #paint #drawings #paitings #nature #view #short #watercolor by Winan0420 1 hour ago 9 seconds 20 views - play Short 5Ga7bk2_XgA',
                videourl: 'https://www.youtube.com/watch?v=KDr68OjO1uc',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Artist David Salle – Good Painting Has Immediate Impact | TateShots aria-label=Artist David Salle – Good Painting Has Immediate Impact | TateShots by Tate 10 years ago 4 minutes, 34 seconds 536,155 views Uc5ufcPDXkI',
                videourl: 'https://www.youtube.com/watch?v=Kirj758zXtQ',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Artist Paints FROZEN 2 Elsa aria-label=Artist Paints FROZEN 2 Elsa by BananaJamana 3 years ago 5 minutes, 23 seconds 898,912 views 0TxzItefGUs',
                videourl: 'https://www.youtube.com/watch?v=LmE4aWkRKGU',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Artist Paints Incredible Dragons In One Stroke aria-label=Artist Paints Incredible Dragons In One Stroke by Caters Clips 4 years ago 2 minutes, 28 seconds 66,953 views Ey7t81K5Ei4',
                videourl: 'https://www.youtube.com/watch?v=M7eCgNYUvxc',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Artist SHOCKS Judges After Pressing Red Buzzers! | Got Talent Global aria-label=Artist SHOCKS Judges After Pressing Red Buzzers! | Got Talent Global by Got Talent Global 4 years ago 2 minutes, 49 seconds 6,940,902 views hFewdHqb_z4',
                videourl: 'https://www.youtube.com/watch?v=MRfIkTwUxIw',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Awesome art painting at Yato Art class aria-label=Awesome art painting at Yato Art class by JOHN YATO 9 hours ago 20 seconds 497 views - play Short OskOGE4e55Q',
                videourl: 'https://www.youtube.com/watch?v=Nxes8pyHkJc',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'BEST ART HACKS and DRAWING TECHNIQUES FOR BEGINNERS aria-label=BEST ART HACKS and DRAWING TECHNIQUES FOR BEGINNERS by 5-Minute Crafts 6 months ago 15 minutes 1,230,178 views Tq24WXGybFc',
                videourl: 'https://www.youtube.com/watch?v=O1ncQ9pnBdg',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'BEST ART HACKS and DRAWING TECHNIQUES FOR BEGINNERS aria-label=BEST ART HACKS and DRAWING TECHNIQUES FOR BEGINNERS by 5-Minute Crafts 6 months ago 15 minutes 1,230,178 views Tq24WXGybFc',
                videourl: 'https://www.youtube.com/watch?v=OQEiXr3zisY',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Beauty of Sunflower / Acrylic Painting / Correa Art aria-label=Beauty of Sunflower / Acrylic Painting / Correa Art by Correa Art 6 days ago 16 minutes 149,154 views wLnoycxG5yI',
                videourl: 'https://www.youtube.com/watch?v=OTtoFLYb5xY',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Beauty of Sunflower / Acrylic Painting / Correa Art aria-label=Beauty of Sunflower / Acrylic Painting / Correa Art by Correa Art 6 days ago 16 minutes 149,154 views wLnoycxG5yI',
                videourl: 'https://www.youtube.com/watch?v=PY2yKN_CTis',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Best ART HACKS and PAINTING TECHNIQUES For Beginners aria-label=Best ART HACKS and PAINTING TECHNIQUES For Beginners by 5-Minute Crafts 6 months ago 16 minutes 7,177,746 views PgcBWv44c8U',
                videourl: 'https://www.youtube.com/watch?v=PY2yKN_CTis',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Best ART HACKS and PAINTING TECHNIQUES For Beginners aria-label=Best ART HACKS and PAINTING TECHNIQUES For Beginners by 5-Minute Crafts 6 months ago 16 minutes 7,177,815 views PgcBWv44c8U',
                videourl: 'https://www.youtube.com/watch?v=PgcBWv44c8U',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Best Acrylic Paint Reviews 2021 | Top 11 Coolest Acrylic Paints For Students &amp; Professional Artists aria-label=Best Acrylic Paint Reviews 2021 | Top 11 Coolest Acrylic Paints For Students &amp; Professional Artists by Craft Studio 1 year ago 10 minutes, 12 seconds 43,964 views 0USJBJEj3bo',
                videourl: 'https://www.youtube.com/watch?v=PgcBWv44c8U',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Best Affordable Gel Paints = One Color + Nail Art! Camo Nail Design | Saviland aria-label=Best Affordable Gel Paints = One Color + Nail Art! Camo Nail Design | Saviland by Nailcou 10 months ago 12 minutes, 44 seconds 28,356 views 0HVz04QplRU',
                videourl: 'https://www.youtube.com/watch?v=PvHayKjwKbs',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Blippi Creates Spin Art &amp; Paints! | Learns Rainbow Colors For Kids | Educational Videos For Toddlers aria-label=Blippi Creates Spin Art &amp; Paints! | Learns Rainbow Colors For Kids | Educational Videos For Toddlers by Blippi Wonders - Educational Cartoons for Kids 1 year ago 15 minutes 1,790,520 views 8WBUsjaLJuo',
                videourl: 'https://www.youtube.com/watch?v=Q2rbtd3-kvE',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Bob Ross - Island in the Wilderness (Season 29 Episode 1) aria-label=Bob Ross - Island in the Wilderness (Season 29 Episode 1) by Bob Ross 5 years ago 25 minutes 40,808,921 views lLWEXRAnQd0',
                videourl: 'https://www.youtube.com/watch?v=QngPGg4plVM',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'COOL PAINTING HACKS AND ART IDEAS FOR BEGINNERS aria-label=COOL PAINTING HACKS AND ART IDEAS FOR BEGINNERS by 5-Minute Crafts 6 months ago 30 minutes 1,914,975 views cUzOhcLasik',
                videourl: 'https://www.youtube.com/watch?v=RAnGpqrsSyc',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Cabins, Barns and More Structures (Part 1) | The Joy of Painting with Bob Ross aria-label=Cabins, Barns and More Structures (Part 1) | The Joy of Painting with Bob Ross by Bob Ross 1 month ago 25 minutes 205,939 views 11tEGHevPJI',
                videourl: 'https://www.youtube.com/watch?v=RqaydH8rWgQ',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Chris Brown does spray paint art at HOT 97 studios? aria-label=Chris Brown does spray paint art at HOT 97 studios? by HOT 97 7 years ago 7 minutes, 10 seconds 239,373 views 5rA-ebz3dFA',
                videourl: 'https://www.youtube.com/watch?v=S2MHi_oC3Lg',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Chris Brown does spray paint art at HOT 97 studios? aria-label=Chris Brown does spray paint art at HOT 97 studios? by HOT 97 7 years ago 7 minutes, 10 seconds 239,373 views 5rA-ebz3dFA',
                videourl: 'https://www.youtube.com/watch?v=TQCWR8gz9wU',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Claude Monet: A collection of 1540 paintings (HD) aria-label=Claude Monet: A collection of 1540 paintings (HD) by LearnFromMasters 5 years ago 2 hours, 8 minutes 2,706,801 views nCVYEqc_Hw4',
                videourl: 'https://www.youtube.com/watch?v=Tq24WXGybFc',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Colours are the smiles of nature | Painting for beginners  | Paints and brushes | MAC aria-label=Colours are the smiles of nature | Painting for beginners  | Paints and brushes | MAC by Mitali Art and Craft (MAC) 6 months ago 26 seconds 938 views - play Short f1dV7dDGyq4',
                videourl: 'https://www.youtube.com/watch?v=Tq24WXGybFc',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Craft Idea! DIY Painted Squiggle Mirror | Crockd Acrylic Pastel Paints + Paint Pens 〰️ aria-label=Craft Idea! DIY Painted Squiggle Mirror | Crockd Acrylic Pastel Paints + Paint Pens 〰️ by Crockd 3 months ago 15 seconds 24,207,851 views - play Short B5GBlbWv-ck',
                videourl: 'https://www.youtube.com/watch?v=Uc5ufcPDXkI',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Daily Challenge #34 / Easy Art  /  Power lines at sunset painting aria-label=Daily Challenge #34 / Easy Art  /  Power lines at sunset painting by Wow Art 2 years ago 9 minutes, 2 seconds 31,021,064 views 76jpCIZTq2E',
                videourl: 'https://www.youtube.com/watch?v=UvJ2UPypxQo',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Daily challenge #329 / Then, Now and Forever / Acrylic Painting aria-label=Daily challenge #329 / Then, Now and Forever / Acrylic Painting by Wow Art 3 months ago 11 minutes, 30 seconds 12,064,746 views OTtoFLYb5xY',
                videourl: 'https://www.youtube.com/watch?v=WScph4zcS1E',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Different types of paints for beginners | Fatemas Art Show aria-label=Different types of paints for beginners | Fatemas Art Show by Fatemas Art Show 8 years ago 9 minutes, 5 seconds 238,925 views OQEiXr3zisY',
                videourl: 'https://www.youtube.com/watch?v=WqgrK8OYi34',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Easy Abstract Painting/Just Playing around with Paints/Relaxing demo/Project 365 days/Day#0148 aria-label=Easy Abstract Painting/Just Playing around with Paints/Relaxing demo/Project 365 days/Day#0148 by SurajFineArts - Abstract ART 3 years ago 4 minutes, 53 seconds 12,615,676 views LmE4aWkRKGU',
                videourl: 'https://www.youtube.com/watch?v=XcUWUtHmFzA',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Easy Art Tricks You Should Try || How to Paint With Household Items aria-label=Easy Art Tricks You Should Try || How to Paint With Household Items by 5-Minute DECOR 3 months ago 12 minutes, 40 seconds 64,769 views fcYYi6oqgbk',
                videourl: 'https://www.youtube.com/watch?v=XxIRxuBtJpg',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Easy Golden Sunset Poster Color Painting for Beginners | Step-by-step Tutorial aria-label=Easy Golden Sunset Poster Color Painting for Beginners | Step-by-step Tutorial by Earls Art 1 year ago 4 minutes, 25 seconds 4,388,308 views sMJH58Ql1Ik',
                videourl: 'https://www.youtube.com/watch?v=YooFwA7xj18',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Easy Poster Color Night Sky Painting for Beginners! • Step-by-step Tutorial aria-label=Easy Poster Color Night Sky Painting for Beginners! • Step-by-step Tutorial by Earls Art 1 year ago 7 minutes, 6 seconds 4,021,981 views TQCWR8gz9wU',
                videourl: 'https://www.youtube.com/watch?v=Yx3rDESqdAk',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Easy oil pastel drawing || oil pastel drawing tutorials #art #painting #artist #shorts aria-label=Easy oil pastel drawing || oil pastel drawing tutorials #art #painting #artist #shorts by Reshma Art Work 3 hours ago 1 minute 228 views - play Short ZP9sIleRyTw',
                videourl: 'https://www.youtube.com/watch?v=ZAyaSkpsNKM',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Exploded on canvas! #shorts #art #painting aria-label=Exploded on canvas! #shorts #art #painting by Bartosz Beda 1 day ago 5 seconds 889 views - play Short MQcIRAkEjl4',
                videourl: 'https://www.youtube.com/watch?v=ZBwB9OKyJQM',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Exploring Tommy Art Paints - Part I aria-label=Exploring Tommy Art Paints - Part I by Copic in the Craft Room 5 years ago 7 minutes, 11 seconds 1,067 views WScph4zcS1E',
                videourl: 'https://www.youtube.com/watch?v=ZBwB9OKyJQM',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'FAMOUS PAINTINGS in the World - 100 Great Paintings of All Time aria-label=FAMOUS PAINTINGS in the World - 100 Great Paintings of All Time by Kiddopedia 3 years ago 18 minutes 3,729,949 views 6YSAMo6TmkE',
                videourl: 'https://www.youtube.com/watch?v=ZKsx9GriGTA',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Flower String Pull Quickie and a swipe with rest amount of paints aria-label=Flower String Pull Quickie and a swipe with rest amount of paints by MKL GRM Fine Art 3 years ago 7 minutes, 12 seconds 52,049 views ZKsx9GriGTA',
                videourl: 'https://www.youtube.com/watch?v=Zu7MfPI3mKE',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Great Art😱 | Rose One Stroke Painting | Floral Art   #shorts #AShortADay #trending #viral #art aria-label=Great Art😱 | Rose One Stroke Painting | Floral Art   #shorts #AShortADay #trending #viral #art by Shay Art 2 days ago 29 seconds 11,261 views - play Short rVC508cpnow',
                videourl: 'https://www.youtube.com/watch?v=_-jYXTSzhn4',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'HOW TO PAINT A DRESS #SHORTS aria-label=HOW TO PAINT A DRESS #SHORTS by 5-Minute DECOR 10 months ago 43 seconds 47,953,006 views - play Short Xt2kv9rGaoU',
                videourl: 'https://www.youtube.com/watch?v=_-jYXTSzhn4',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'HOW TO PAINT A MASTERPIECE AT HOME aria-label=HOW TO PAINT A MASTERPIECE AT HOME by 5-Minute Crafts Tech 2 years ago 22 minutes 3,377,466 views CglxVw0lQ7o',
                videourl: 'https://www.youtube.com/watch?v=_jWTSQhG-TU',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Hieronymus Bosch, The Garden of Earthly Delights (Full Length): Great Art Explained aria-label=Hieronymus Bosch, The Garden of Earthly Delights (Full Length): Great Art Explained by Great Art Explained 1 year ago 50 minutes 1,773,238 views vBG621XEegk',
                videourl: 'https://www.youtube.com/watch?v=a0bT7gX5nV4',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Homemade 3D outliners with only 3 ingredients/Diy puffy paints/3D paints/CreativeCat/Art and craft aria-label=Homemade 3D outliners with only 3 ingredients/Diy puffy paints/3D paints/CreativeCat/Art and craft by Creative Cat 1 year ago 5 minutes, 54 seconds 890,797 views piaAlqSzRjQ',
                videourl: 'https://www.youtube.com/watch?v=bFYWNDCAQdY',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How This Woman Paints Hyperrealistic Nail Art | Obsessed | WIRED aria-label=How This Woman Paints Hyperrealistic Nail Art | Obsessed | WIRED by WIRED 2 weeks ago 10 minutes, 57 seconds 40,070 views FycLW60ztRY',
                videourl: 'https://www.youtube.com/watch?v=bUddOI75Wg8',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How To Airbrush Artist Acrylic Tube Paints For Plastic Models &amp; Gunpla - Plus Room Update aria-label=How To Airbrush Artist Acrylic Tube Paints For Plastic Models &amp; Gunpla - Plus Room Update by Barbatos Rex 1 year ago 36 minutes 52,730 views PY2yKN_CTis',
                videourl: 'https://www.youtube.com/watch?v=bmvP3Tvg7fo',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How To Airbrush Artist Acrylic Tube Paints For Plastic Models &amp; Gunpla - Plus Room Update aria-label=How To Airbrush Artist Acrylic Tube Paints For Plastic Models &amp; Gunpla - Plus Room Update by Barbatos Rex 1 year ago 36 minutes 52,730 views PY2yKN_CTis',
                videourl: 'https://www.youtube.com/watch?v=btP_qt73KVk',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How To Blend With Acrylics #shorts #art #acrylicpainting #painting #artist aria-label=How To Blend With Acrylics #shorts #art #acrylicpainting #painting #artist by ColorByFeliks 10 months ago 47 seconds 2,827,208 views - play Short RIC2sn1aUd0',
                videourl: 'https://www.youtube.com/watch?v=cIjUwedQAZo',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How To Paint A Ladybug aria-label=How To Paint A Ladybug by Art for Kids Hub 7 years ago 6 minutes, 36 seconds 3,053,428 views hV2ZJKyFigI',
                videourl: 'https://www.youtube.com/watch?v=cUhpq_dPU2M',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How To Paint A Watermelon (for super young artists) aria-label=How To Paint A Watermelon (for super young artists) by Art for Kids Hub 8 years ago 6 minutes, 15 seconds 1,708,014 views a0bT7gX5nV4',
                videourl: 'https://www.youtube.com/watch?v=cUzOhcLasik',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How To Paint An Easter Bunny aria-label=How To Paint An Easter Bunny by Art for Kids Hub 5 years ago 6 minutes, 19 seconds 3,983,374 views Yx3rDESqdAk',
                videourl: 'https://www.youtube.com/watch?v=dCMG3r4kZeY',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How To Paint Blossoms aria-label=How To Paint Blossoms by Art for Kids Hub 7 years ago 8 minutes, 14 seconds 288,579 views cIjUwedQAZo',
                videourl: 'https://www.youtube.com/watch?v=dNZeZTGYIoE',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How To Paint Tree Deatails With Acrylic paints | Time Lapse | #48 aria-label=How To Paint Tree Deatails With Acrylic paints | Time Lapse | #48 by Nuwan Darshana 9 months ago 18 minutes 3,365,777 views XxIRxuBtJpg',
                videourl: 'https://www.youtube.com/watch?v=fcYYi6oqgbk',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How a Professional Artist ACTUALLY makes Paintings aria-label=How a Professional Artist ACTUALLY makes Paintings by Alpay Efe 9 months ago 9 minutes, 7 seconds 1,554,269 views 4ZKUKCnkZ6E',
                videourl: 'https://www.youtube.com/watch?v=h-Z5ZeVWnQg',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How a street artist paints MASSIVE murals! (feat. RONE) aria-label=How a street artist paints MASSIVE murals! (feat. RONE) by Kendall Monk 1 year ago 6 minutes, 44 seconds 11,054 views pPYdgevws98',
                videourl: 'https://www.youtube.com/watch?v=h-Z5ZeVWnQg',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How to Create an AMAZING PENDULUM PAINTING by CHELC PAINTS / MESMERIZING ARTIST aria-label=How to Create an AMAZING PENDULUM PAINTING by CHELC PAINTS / MESMERIZING ARTIST by ChelC Paints 2 years ago 5 minutes, 27 seconds 583,892 views Dauo_TOGFEY',
                videourl: 'https://www.youtube.com/watch?v=hFewdHqb_z4',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How to Mix Acrylic Paints for Fluid Art aria-label=How to Mix Acrylic Paints for Fluid Art by Sandi Paints Herrera 3 years ago 28 minutes 37,475 views khNr6DE9pXs',
                videourl: 'https://www.youtube.com/watch?v=hV2ZJKyFigI',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How to Mix Acrylic Paints for Fluid Art aria-label=How to Mix Acrylic Paints for Fluid Art by Sandi Paints Herrera 3 years ago 28 minutes 37,475 views khNr6DE9pXs',
                videourl: 'https://www.youtube.com/watch?v=hwR1i0ZZ6ac',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'How to use acrylic paints for your nail art aria-label=How to use acrylic paints for your nail art by cutenails 9 years ago 3 minutes, 38 seconds 319,143 views S2MHi_oC3Lg',
                videourl: 'https://www.youtube.com/watch?v=iib_imkZ5fk',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'I Tested Amazons LOWEST RATED Art Supplies...big YIKES! aria-label=I Tested Amazons LOWEST RATED Art Supplies...big YIKES! by SuperRaeDizzle 1 year ago 16 minutes 1,523,476 views 3c7HuWCxdiE',
                videourl: 'https://www.youtube.com/watch?v=jgRZgw9OIcA',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'I Tested The RAREST Paints In History..(colors that no longer exist, the final episode) aria-label=I Tested The RAREST Paints In History..(colors that no longer exist, the final episode) by SuperRaeDizzle 1 year ago 17 minutes 1,343,454 views GYBbcNt-ylQ',
                videourl: 'https://www.youtube.com/watch?v=kWdtA3eDxNg',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'I Tried OIL PAINTING For the First Time! aria-label=I Tried OIL PAINTING For the First Time! by Sarah Renae Clark 4 days ago 16 minutes 22,309 views wB3_9sk4Gx4',
                videourl: 'https://www.youtube.com/watch?v=kWdtA3eDxNg',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'I can’t believe how long this took! - Pencil Drawing Process aria-label=I can’t believe how long this took! - Pencil Drawing Process by Jono Dry 8 months ago 4 minutes, 19 seconds 11,885,553 views bFYWNDCAQdY',
                videourl: 'https://www.youtube.com/watch?v=khNr6DE9pXs',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'I dont know how did that happen... #shorts #art #painting aria-label=I dont know how did that happen... #shorts #art #painting by Bartosz Beda 1 day ago 6 seconds 1,629 views - play Short W4m5EggqS24',
                videourl: 'https://www.youtube.com/watch?v=khNr6DE9pXs',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'I tested PROFESSIONAL vs. KIDS paints😳 part 2 | DANIA (#Shorts) aria-label=I tested PROFESSIONAL vs. KIDS paints😳 part 2 | DANIA (#Shorts) by DANIA 3 months ago 43 seconds 3,703,877 views - play Short Hv4jQ6TiLCs',
                videourl: 'https://www.youtube.com/watch?v=lLWEXRAnQd0',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Inspirational Music For Creative People — Chillout Mix aria-label=Inspirational Music For Creative People — Chillout Mix by Work Music Lab 2 years ago 1 hour, 9 minutes 2,164,820 views EG16dFYK0gw',
                videourl: 'https://www.youtube.com/watch?v=mQ-ZH9iHEOI',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Jannie Pretend Play Hand Painting with Colorful Colors | Fun Finger Paints Art for Kids aria-label=Jannie Pretend Play Hand Painting with Colorful Colors | Fun Finger Paints Art for Kids by Toys and Colors 1 year ago 3 minutes, 7 seconds 44,072,432 views kWdtA3eDxNg',
                videourl: 'https://www.youtube.com/watch?v=mQ-ZH9iHEOI',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Jannie Pretend Play Hand Painting with Colorful Colors | Fun Finger Paints Art for Kids aria-label=Jannie Pretend Play Hand Painting with Colorful Colors | Fun Finger Paints Art for Kids by Toys and Colors 1 year ago 3 minutes, 7 seconds 44,072,432 views kWdtA3eDxNg',
                videourl: 'https://www.youtube.com/watch?v=mVkAvYhgW8c',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Johannes Vermeer, The Art of Painting aria-label=Johannes Vermeer, The Art of Painting by Smarthistory 8 years ago 4 minutes, 56 seconds 108,433 views mVkAvYhgW8c',
                videourl: 'https://www.youtube.com/watch?v=mVkAvYhgW8c',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Johannes Vermeer, The Art of Painting aria-label=Johannes Vermeer, The Art of Painting by Smarthistory 8 years ago 4 minutes, 56 seconds 108,433 views mVkAvYhgW8c',
                videourl: 'https://www.youtube.com/watch?v=nCVYEqc_Hw4',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'July 15, 2022 aria-label=July 15, 2022 by dk chiti yt 3 days ago 16 seconds 36 views - play Short gW3TTYU4zIk',
                videourl: 'https://www.youtube.com/watch?v=nTitQlI84po',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Lascaux Artist Acrylic Paints aria-label=Lascaux Artist Acrylic Paints by Blick Art Materials 11 years ago 2 minutes, 22 seconds 20,867 views nn8Aa0WP1u0',
                videourl: 'https://www.youtube.com/watch?v=nn8Aa0WP1u0',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Light Artist Alex Dowis Paints Inspirational Story In COMPLETE DARKNESS! - Americas Got Talent 2019 aria-label=Light Artist Alex Dowis Paints Inspirational Story In COMPLETE DARKNESS! - Americas Got Talent 2019 by Americas Got Talent 2 years ago 3 minutes, 58 seconds 701,733 views 6NvtYdBFnR4',
                videourl: 'https://www.youtube.com/watch?v=pPYdgevws98',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Light Artist Alex Dowis Paints Inspirational Story In COMPLETE DARKNESS! - Americas Got Talent 2019 aria-label=Light Artist Alex Dowis Paints Inspirational Story In COMPLETE DARKNESS! - Americas Got Talent 2019 by Americas Got Talent 2 years ago 3 minutes, 58 seconds 701,733 views 6NvtYdBFnR4',
                videourl: 'https://www.youtube.com/watch?v=piaAlqSzRjQ',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Meet the 2-year-old artist whose paintings are shaking up the art world l GMA aria-label=Meet the 2-year-old artist whose paintings are shaking up the art world l GMA by Good Morning America 3 years ago 3 minutes, 58 seconds 276,695 views ZAyaSkpsNKM',
                videourl: 'https://www.youtube.com/watch?v=pl-91sWnHOw',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Metallic Painting Techniques - Real Metal Effects - PREVIEW aria-label=Metallic Painting Techniques - Real Metal Effects - PREVIEW by Stan Winston School 9 years ago 1 minute, 32 seconds 238,426 views bUddOI75Wg8',
                videourl: 'https://www.youtube.com/watch?v=pl-91sWnHOw',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Money explosion 💣 in the art studio #shorts #art #painting #artstufio aria-label=Money explosion 💣 in the art studio #shorts #art #painting #artstufio by Bartosz Beda 1 hour ago 8 seconds 73 views - play Short LuPJCBiLrIs',
                videourl: 'https://www.youtube.com/watch?v=qOz9vHDV-C0',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Mr Bean: The Artist | Full Episodes | Classic Mr Bean aria-label=Mr Bean: The Artist | Full Episodes | Classic Mr Bean by Classic Mr Bean 1 year ago 1 hour, 59 minutes 19,700,699 views KDr68OjO1uc',
                videourl: 'https://www.youtube.com/watch?v=qmc29qZ-Zwc',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'My Ultimate Travel Art Supply Kit - how to fly with oil paints aria-label=My Ultimate Travel Art Supply Kit - how to fly with oil paints by Art and Wine with Jaime Byrd 2 years ago 11 minutes, 15 seconds 1,697 views voXk8GX5R-0',
                videourl: 'https://www.youtube.com/watch?v=rKhfFBbVtFg',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Never walk on street art #shorts aria-label=Never walk on street art #shorts by Zach King 1 year ago 15 seconds 130,912,201 views - play Short aWdGWNIye8M',
                videourl: 'https://www.youtube.com/watch?v=rOFy3_XDHBU',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'New Art Supplies from Korea &amp; London ✦ Art Vlog aria-label=New Art Supplies from Korea &amp; London ✦ Art Vlog by PearFleur 1 month ago 13 minutes, 5 seconds 231,168 views HDGC4A8jsh4',
                videourl: 'https://www.youtube.com/watch?v=rcfMSeilPkg',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'One stroke flowers nail art with acrylic paints. aria-label=One stroke flowers nail art with acrylic paints. by Dorota Palicka Nails 2 years ago 28 minutes 167,742 views WqgrK8OYi34',
                videourl: 'https://www.youtube.com/watch?v=sMJH58Ql1Ik',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'PIGS ARTWORK WORLD RECORD £20,000! (Pig Paints &amp; Sells Art For A Living) aria-label=PIGS ARTWORK WORLD RECORD £20,000! (Pig Paints &amp; Sells Art For A Living) by Caters Video 7 months ago 4 minutes, 48 seconds 20,932 views 8GvSrVgeoCc',
                videourl: 'https://www.youtube.com/watch?v=t1gBlkZw2xY',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Paint ANYTHING in just 4 Simple Steps! aria-label=Paint ANYTHING in just 4 Simple Steps! by Alpay Efe 4 months ago 9 minutes, 51 seconds 491,368 views rcfMSeilPkg',
                videourl: 'https://www.youtube.com/watch?v=uZ6hUuDDVBs',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Painting An Epic Bedroom Mural in 10 Hours! aria-label=Painting An Epic Bedroom Mural in 10 Hours! by Kiptoe 1 year ago 6 minutes, 32 seconds 2,405,458 views PvHayKjwKbs',
                videourl: 'https://www.youtube.com/watch?v=udZU4Q84oPk',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Painting Deep Woods / Easy Acrylic Painting Technique / Drawing Forest aria-label=Painting Deep Woods / Easy Acrylic Painting Technique / Drawing Forest by Jay Lee Painting 3 months ago 8 minutes, 1 second 1,338,729 views J8wM9jKHg1M',
                videourl: 'https://www.youtube.com/watch?v=utuCdGGEHN8',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Painting Firefly Forest / Easy Acrylic Painting Technique aria-label=Painting Firefly Forest / Easy Acrylic Painting Technique by Jay Lee Painting 5 months ago 8 minutes 10,361,918 views cUhpq_dPU2M',
                videourl: 'https://www.youtube.com/watch?v=uuJczkqPtqg',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Painting Translucent Artwork With Acrylic Paint And Sand | Art Insider aria-label=Painting Translucent Artwork With Acrylic Paint And Sand | Art Insider by Art Insider 1 day ago 2 minutes, 4 seconds 13,237 views xmVU99Sdh0U',
                videourl: 'https://www.youtube.com/watch?v=vBG621XEegk',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Painting a beautiful 💓💖. #artlover #art#shorts#artofcreation#beautifulartandfashion #beautifulart# aria-label=Painting a beautiful 💓💖. #artlover #art#shorts#artofcreation#beautifulartandfashion #beautifulart# by Art lover 12 hours ago 42 seconds 3 views - play Short -u2U6B4j7fI',
                videourl: 'https://www.youtube.com/watch?v=voXk8GX5R-0',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Painting project ! Elsa and Anna toddlers aria-label=Painting project ! Elsa and Anna toddlers by Come Play With Me 2 years ago 19 minutes 47,308,086 views btP_qt73KVk',
                videourl: 'https://www.youtube.com/watch?v=wB3_9sk4Gx4',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Painting with a Kitchen Sieve and Fluid Acrylics - Fluid art painting from Tiktus aria-label=Painting with a Kitchen Sieve and Fluid Acrylics - Fluid art painting from Tiktus by Tiktus color Art 2 months ago 5 minutes, 40 seconds 487,486 views Kirj758zXtQ',
                videourl: 'https://www.youtube.com/watch?v=wGysgLNR31k',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Piękny motyl z farb 🌈🦋#shorts #art #paint #craft #creative #art #butterfly aria-label=Piękny motyl z farb 🌈🦋#shorts #art #paint #craft #creative #art #butterfly by Magiczny Świat Marzeń  20 hours ago 16 seconds 69 views - play Short rQO7spQp2Wc',
                videourl: 'https://www.youtube.com/watch?v=wGysgLNR31k',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Playing With Extreme Sheen Deco Art Paints aria-label=Playing With Extreme Sheen Deco Art Paints by Ann Hatfield  3 years ago 24 minutes 10,405 views wzMTk62ltnw',
                videourl: 'https://www.youtube.com/watch?v=wLnoycxG5yI',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Pour Painting with Thin Acrylic Paints ~ Abstract Art | Negative Space |Acrylic Pouring aria-label=Pour Painting with Thin Acrylic Paints ~ Abstract Art | Negative Space |Acrylic Pouring by Candice Color Art 3 months ago 5 minutes, 56 seconds 6,502 views UvJ2UPypxQo',
                videourl: 'https://www.youtube.com/watch?v=wLnoycxG5yI',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Professional Artist PAINTS Childrens COLORING BOOK?! aria-label=Professional Artist PAINTS Childrens COLORING BOOK?! by Chloe Rose Art 1 year ago 18 minutes 443,575 views dNZeZTGYIoE',
                videourl: 'https://www.youtube.com/watch?v=wzMTk62ltnw',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Resin Art With Acrylic Paints - Beach Effect (First Layer) by Arijana Lukic #11 aria-label=Resin Art With Acrylic Paints - Beach Effect (First Layer) by Arijana Lukic #11 by Arijana Lukic 4 years ago 5 minutes, 1 second 1,744,172 views xapI-Xep-yI',
                videourl: 'https://www.youtube.com/watch?v=xapI-Xep-yI',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Rolf Harris paints giant picture at Birmingham art gallery aria-label=Rolf Harris paints giant picture at Birmingham art gallery by Express &amp; Star 9 years ago 4 minutes, 54 seconds 71,203 views pl-91sWnHOw',
                videourl: 'https://www.youtube.com/watch?v=xmVU99Sdh0U',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Rolf Harris paints giant picture at Birmingham art gallery aria-label=Rolf Harris paints giant picture at Birmingham art gallery by Express &amp; Star 9 years ago 4 minutes, 54 seconds 71,203 views pl-91sWnHOw',
                videourl: 'https://www.youtube.com/watch?v=xvhqNdZ05Xg',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Ryans DIY Painting Art of himself with Family!!! aria-label=Ryans DIY Painting Art of himself with Family!!! by Ryans World 2 years ago 8 minutes, 38 seconds 14,085,761 views uZ6hUuDDVBs',
                videourl: 'https://www.youtube.com/watch?v=y2lgutQ0HLg',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'SATISFYING CREATIVE ART THAT AT ANOTHER LEVEL PART || ACRYLIC PAINTING || DRAWING ART aria-label=SATISFYING CREATIVE ART THAT AT ANOTHER LEVEL PART || ACRYLIC PAINTING || DRAWING ART by UNIQUE ART 4 days ago 31 seconds 56,919 views - play Short zyude8wPWBw',
                videourl: 'https://www.youtube.com/watch?v=yNaG-xLWaGk',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'SMART PAINTING HACKS AND ART IDEAS YOU WILL LOVE aria-label=SMART PAINTING HACKS AND ART IDEAS YOU WILL LOVE by 5-Minute Crafts 3 weeks ago 16 minutes 238,103 views yNaG-xLWaGk',
                videourl: 'https://www.youtube.com/watch?v=yNaG-xLWaGk',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'SMART PAINTING HACKS AND ART IDEAS YOU WILL LOVE aria-label=SMART PAINTING HACKS AND ART IDEAS YOU WILL LOVE by 5-Minute Crafts 3 weeks ago 16 minutes 238,103 views yNaG-xLWaGk',
                videourl: 'https://www.youtube.com/watch?v=ymEb9mEoWtw',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Sail Boats / Soothing &amp; Relaxing Demo / Abstract Painting / Acrylics / Daily Art Therapy / Day #079 aria-label=Sail Boats / Soothing &amp; Relaxing Demo / Abstract Painting / Acrylics / Daily Art Therapy / Day #079 by SurajFineArts - Abstract ART 3 years ago 9 minutes, 14 seconds 4,896,412 views nTitQlI84po',
                videourl: 'https://www.youtube.com/watch?v=ymEb9mEoWtw',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Satisfying art 🍇🥤Drink painting #srt #shorts #youtubeshorts #setisfying aria-label=Satisfying art 🍇🥤Drink painting #srt #shorts #youtubeshorts #setisfying by Artist Sanju Das 1 hour ago 15 seconds 1,842 views - play Short nj1o3JLsEpU',
                videourl: 'https://www.youtube.com/watch?v=z1XQHmR8Z28',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Sennelier Artists Oil Paints aria-label=Sennelier Artists Oil Paints by Blick Art Materials 11 years ago 2 minutes, 46 seconds 31,234 views Bf6wLUEq-0k',
                videourl: 'https://www.youtube.com/watch?v=z2APU5ob9Og',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Sennelier Artists Oil Paints aria-label=Sennelier Artists Oil Paints by Blick Art Materials 11 years ago 2 minutes, 46 seconds 31,234 views Bf6wLUEq-0k',
                videourl: 'https://www.youtube.com/watch?v=zbh7tAnwLCY',
                user: users[Math.floor(Math.random() * users.length)],
            },
            {
                title: 'Simple Painting Tricks For Beginners And Professionals || Homemade Art Tutorial aria-label=Simple Painting Tricks For Beginners And Professionals || Homemade Art Tutorial by 5-Minute Crafts FAMILY 1 year ago 15 minutes 3,253,681 views 18YyWkEiHz4',
                videourl: 'https://www.youtube.com/watch?v=zpjmhX9swSY',
                user: users[Math.floor(Math.random() * users.length)],
            },
        ])

        // ---------------------------------------------------
    }
}
