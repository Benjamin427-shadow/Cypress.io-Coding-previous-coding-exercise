class apiResources_monitors{
    constructor(apple, ASUS){
        this.apple = getAppleURL()
        this.ASUS = getASUSURL()
    }
    getAppleURL(){
         apple_monitor_24 = 'https://www.demoblaze.com/prod.html?idp_=10'
    }
    getASUSURL(){
         asus_full_HD = 'https://www.demoblaze.com/prod.html?idp_=14'
    }
}

function apple_monitor(){
    return apiResources_monitors.getAppleURL
}

function asus_monitor(){
    return apiResources_monitors.getASUSURL
}

export function apple_monitor()
export function asus_monitor()

