class apiResources_laptops{
    constructor(sony1, sony2, macbook1, macbook2, dell1, dell2){
        this.sony1 = getSonyVaio_i5URL()
        this.sony2 = getSonyVaio_i7URL()
        this.macbook1 = getMacbookAirURL()
        this.macbook2 = getMacbookProURL()
        this.dell1 = getDell_i7_8gbURL()
        this.dell2 = getDell_15_6_inch_2017URL()
    }
    getSonyVaio_i5URL(){
         sony_vaio_i5 = 'https://www.demoblaze.com/prod.html?idp_=8'
       
    }
    getSonyVaio_i7URL(){
        sony_vaio_i7 = 'https://www.demoblaze.com/prod.html?idp_=9'
    }
    getMacbookAirURL(){
         macbook_air = 'https://www.demoblaze.com/prod.html?idp_=11'
         
    }
    getMacbookProURL(){
        macbook_pro = 'https://www.demoblaze.com/prod.html?idp_=15'
    }
    getDell_i7_8gbURL(){
         dell_i7_8gb = 'https://www.demoblaze.com/prod.html?idp_=12'
         
    }
    getDell_15_6_inch_2017URL(){
        dell_15_6_inch_2017 = 'https://www.demoblaze.com/prod.html?idp_=13'
    }
}

function sony_viao_i5_laptop(){
    return apiResources_laptops.getSonyVaio_i5URL
}

function sony_viao_i7_laptop(){
    return apiResources_laptops.getSonyVaio_i7URL
}

function macbook_air_laptop(){
    return apiResources_laptops.getMacbookAirURL
}

function macbook_pro_laptop(){
    return apiResources_laptops.getMacbookProURL
}

function dell_i7_8gb_laptop(){
    return apiResources_laptops.getDell_i7_8gbURL
}

function dell_15_6_inch_2017_laptop(){
    return apiResources_laptops.getDell_15_6_inch_2017URL
}

export function sony_viao_i5_laptop()
export function sony_viao_i7_laptop()
export function macbook_air_laptop()
export function macbook_pro_laptop()
export function dell_i7_8gb_laptop()
export function dell_15_6_inch_2017_laptop()

