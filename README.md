# Is there Uber In?

[![Build Status](https://travis-ci.org/SaraVieira/uber-cities.svg)](https://travis-ci.org/SaraVieira/uber-cities)

https://isthereuber.in

Check if there is an uber in the city/country you input

Also checks for a lot more providers. Full list [here](./data/single/)

## Run Locally

```sh
yarn # npm install
yarn dev # npm run dev
```

## FAQ

### Why?

As someone who travels a lot this is something I kept googling when going to a city.

### Why is my city here when it doesn't have uber?

I'm sorry I broke your heart but I get all of this data from the uber website here: https://www.uber.com/en-GB/cities/ because they don't have an API for this so the website is know to be out of date. If this happens please don't yell. You can remove the city [here](./data/single/uber.js) or create an issue but be nice about it.

### I want to add a provider

Dope! If you don't have experience with programming please create an issue with either the link to a place I can get all the cities or just a list of all the cities and I will add it :)

If you have some experience there is a file [here](./data/newProvider.js) you can fill in that will create a new file with all that data so I can merge and push to algolia. There is also a file with the [appStore links](./src/utils/appStores.js) that would be great if you could add too as well. If there is no apps don't worry it will default to no link.

To run the node file go to the terminal and type:

```sh
node data/newProvider.js
```

### I tried to run it and it breaks on my machine

There are some problems with the module osmosis in some versions of node so if you don't plan on going to scrape the web please remove it from the dependencies and try again. I will try to change the module for scrapping to avoid this.

### Can I use your data?

Sure! But unfortunately this is on a free algolia thingy so I can't promise any uptime :( You can also use my files if you want.

Here is the info:

```plain
app: UEHWANDHH2
read only key: e930d02e3899db88f80b01a000521d56
index-name: cities
```

---

## Built With

- React
- Gatsby
- Emotion
- react-confetti
- Algolia

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/1051509?v=4" width="100px;"/><br /><sub><b>Sara Vieira</b></sub>](http://iamsaravieira.com)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=SaraVieira "Code") [🤔](#ideas-SaraVieira "Ideas, Planning, & Feedback") | [<img src="https://avatars2.githubusercontent.com/u/304450?v=4" width="100px;"/><br /><sub><b>Mehdi Achour</b></sub>](https://twitter.com/mac_hour)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=machour "Code") | [<img src="https://avatars0.githubusercontent.com/u/843454?v=4" width="100px;"/><br /><sub><b>João Alves</b></sub>](http://joaoqalves.net)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=joaoqalves "Code") | [<img src="https://avatars3.githubusercontent.com/u/5058640?v=4" width="100px;"/><br /><sub><b>Stratos Iordanidis</b></sub>](http://iamstratos.com)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=iamstratos "Code") | [<img src="https://avatars3.githubusercontent.com/u/5701162?v=4" width="100px;"/><br /><sub><b>Alex Jover</b></sub>](https://github.com/alexjoverm)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=alexjoverm "Code") | [<img src="https://avatars1.githubusercontent.com/u/5629478?v=4" width="100px;"/><br /><sub><b>Bruno Ukita</b></sub>](https://github.com/ukita)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=ukita "Code") | [<img src="https://avatars0.githubusercontent.com/u/1227748?v=4" width="100px;"/><br /><sub><b>Donovan</b></sub>](https://donovanisherwood.com/)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=donovantc "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars3.githubusercontent.com/u/3196685?v=4" width="100px;"/><br /><sub><b>Eduardo</b></sub>](https://eduarmreyes-portfolio.herokuapp.com/)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=eduarmreyes "Code") | [<img src="https://avatars2.githubusercontent.com/u/5872126?v=4" width="100px;"/><br /><sub><b>Eli Schutze</b></sub>](http://twitter.com/elibelly)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=elischutze "Code") | [<img src="https://avatars3.githubusercontent.com/u/2957624?v=4" width="100px;"/><br /><sub><b>Erdi Köse</b></sub>](https://erdkse.com)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=erdkse "Code") | [<img src="https://avatars3.githubusercontent.com/u/499898?v=4" width="100px;"/><br /><sub><b>Eunjae Lee</b></sub>](https://twitter.com/eunjae_lee)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=eunjae-lee "Code") | [<img src="https://avatars3.githubusercontent.com/u/1402241?v=4" width="100px;"/><br /><sub><b>Federico Brigante</b></sub>](https://twitter.com/bfred_it)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=bfred-it "Code") | [<img src="https://avatars1.githubusercontent.com/u/4780756?v=4" width="100px;"/><br /><sub><b>Luke Bonaccorsi</b></sub>](https://lukeb.co.uk)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=lukeb-uk "Code") | [<img src="https://avatars3.githubusercontent.com/u/1500628?v=4" width="100px;"/><br /><sub><b>Nick Barry</b></sub>](https://itsnickbarry.github.io/hyperbolic-canvas)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=ItsNickBarry "Code") |
| [<img src="https://avatars1.githubusercontent.com/u/2587348?v=4" width="100px;"/><br /><sub><b>Nicolas Goutay</b></sub>](https://phacks.github.io)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=phacks "Code") | [<img src="https://avatars2.githubusercontent.com/u/3277185?v=4" width="100px;"/><br /><sub><b>Renato Ribeiro</b></sub>](http://twitter.com/renatorib_)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=renatorib "Code") | [<img src="https://avatars1.githubusercontent.com/u/5370675?v=4" width="100px;"/><br /><sub><b>Sarah Dayan</b></sub>](http://frontstuff.io)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=sarahdayan "Code") | [<img src="https://avatars2.githubusercontent.com/u/2750668?v=4" width="100px;"/><br /><sub><b>Elizabet Oliveira</b></sub>](http://www.miukimiu.com)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=miukimiu "Code") [🎨](#design-miukimiu "Design") [🤔](#ideas-miukimiu "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/10873367?v=4" width="100px;"/><br /><sub><b>JuanJo Martínez</b></sub>](https://github.com/juanjo7g)<br />[💻](https://github.com/SaraVieira/uber-cities/commits?author=juanjo7g "Code") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

License: [MIT](License.md)
