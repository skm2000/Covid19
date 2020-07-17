export const getCases = (country) => {
    return fetch(`https://covid19.mathdro.id/api/confirmed`)
        .then(res => {
            // console.log(res)
            return res.json()
        })
        .then(jData => {
            // console.log(jData)
            for (var i = 0; i < jData.length; i++) {
                if (jData[i].countryRegion === country) {
                    var data = {
                        "confirmed": jData[i].confirmed,
                        "deaths": jData[i].deaths,
                        "active": jData[i].active,
                        "recovered" : jData[i].recovered,
                    }
                    return data;
                }
            }
            return jData
        })
    .catch(err => console.log(err))
}