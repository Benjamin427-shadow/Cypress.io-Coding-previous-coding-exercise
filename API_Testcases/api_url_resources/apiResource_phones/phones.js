class apiResources_phone{
    constructor(samsung1, samsumg2, nokia, nexus, iphone, htc_one_m9, sony){
        this.samsung = getSamsungGalaxy_s6URL()
        this.samsumg2 = getSamsungGalaxy_s7URL()
        this.nokia = getNokiaURL()
        this.nexus = getNexusURL()
        this.iphone = getIPhoneURL()
        this.htc_one_m9 = getHTC_One_m9URL()
        this.sony = getSonyURL()
    }
    getSamsungGalaxy_s6URL(){
         samsung_galaxy_s6 = 'https://www.demoblaze.com/prod.html?idp_=1'
    }
    getSamsungGalaxy_s7URL(){
        samsumg_galaxy_s7 = 'https://www.demoblaze.com/prod.html?idp_=4'
    }
    getNokiaURL(){
         nokia_lumia_1520 = 'https://www.demoblaze.com/prod.html?idp_=2'
    }
    getNexusURL(){
         nexus_6 = 'https://www.demoblaze.com/prod.html?idp_=3'
    }
    getIPhoneURL(){
         iphone_6_32gb = 'https://www.demoblaze.com/prod.html?idp_=5'
    }
    getHTC_One_m9URL(){
         htc_one_m9 = 'https://www.demoblaze.com/prod.html?idp_=7'
    }
    getSonyURL(){
         sony_xperia_z5 = 'https://www.demoblaze.com/prod.html?idp_=6'
    }

}
function samsung_phone_galaxy_s6(){
    return apiResources_phone.getSamsungGalaxy_s6URL
}

function samsung_phone_galaxy_s7(){
    return apiResources_phone.getSamsungGalaxy_s7UR
}

function nokia_phone(){
    return apiResources_phone.getNokiaURL
}

function apple_phone_iphone(){
    return apiResources_phone.getAppleURL
}

function HTC_One_phone(){
    return apiResources_phone.getHTC_One_m9URL
}

function sony_phone(){
    return apiResources_phone.getSonyURL
}

export function samsung_phone_galaxy_s6()
export function samsung_phone_galaxy_s7()
export function nokia_phone()
export function apple_phone_iphone()
export function HTC_One_phone()
export function sony_phone()


