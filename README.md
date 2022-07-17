[![The Stanford Daily logo](https://github.com/TheStanfordDaily/stanforddaily-graphic-assets/raw/master/DailyLogo/DailyLogo.png)](https://y.at/cool-face.pine-tree.newspaper.light-bulb)

# The Stanford Daily

This is the Stanford Daily website & mobile app! Visit our web3 Humor site at https://ipfs.io/ipfs/QmQzPPwkBUa8efuPnAotLGaTucPwJLAZsEwKGzd4HmUU4U and our web2 website at https://y.at/😎🌲🗞️💡. Feel free to download our app at https://app.stanforddaily.com/. Contributions welcome! 

## Setup

```bash
# Installation
yarn

# Start
yarn start
```

Open up http://localhost:3000 in your browser.

## Mobile app release

For the production channel:

```bash
yarn expo build:ios --release-channel production
yarn expo build:android --release-channel production

yarn expo publish --release-channel production
```

For the development channel,

```bash
yarn expo build:ios --release-channel development
yarn expo build:android --release-channel development

yarn expo publish --release-channel development
```

## Deployment to AWS

We use [serverless-nextjs-component](https://github.com/danielcondemarin/serverless-next.js/tree/master/packages/serverless-nextjs-component) for deployment. It deploys to a CloudFront distribution.

Setup steps:

1. Create a `.env` file with the AWS access key ID and secret access key (you can copy it from `sample.env`).
1. Run `npm i -g serverless`.

Deploy steps:

```
yarn build
sls
```

## test preview

http://localhost.stanforddaily.com:19006/_preview/1164168/1164213/post/revision/a580830604?_thumbnail_id=1164208
