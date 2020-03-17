![Screenshot 2019-08-06 at 11 04 16](https://user-images.githubusercontent.com/15769980/62527747-0a305900-b83c-11e9-9b04-2369eb19d874.png)

# Cookiebar WebApp
A simple WebApp with four config fields: text, link text, link target and button text.

## Prerequisites
* A SiteVision website
* [A valid certifcate](https://developer.sitevision.se/docs/webapps/deployment/certificates-and-signing)
* The REST-API activated on the site
## Setup
```bash
git clone https://github.com/Rosmos/raz-cookiebar.git
```
* `cd webapp-boilerplate`
* `npm install`
* `npm run setup` make sure that domain and site name conforms to the site where the WebApp is going to be used
## Building
* `npm run create-addon` create an addon with the name configured in the setup task
* `npm run zip` compress `/src` into `/dist`
* `npm run deploy` compress `/src` into `/dist` and upload to the addon configured in the setup task
* `npm run force-deploy` compress `/src` into `/dist` and upload to the addon configured in the setup task. This will overwrite the current WebApp if it has the same version and id defined in manifest.json
* `npm run sign` compress `/src` into `/dist` and invoke the signing endpoint of the SiteVision developer REST API. A signed version of the WebApp will be created in the `/dist` folder
* `npm run prod-deploy` deploy the signed WebApp to a production environment

[Visit developer.sitevision.se for more information](https://developer.sitevision.se)
