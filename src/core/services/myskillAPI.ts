const BACKEND_URL = "http://127.0.0.1:5000";

// Example Summoner type - adjust according to actual data structure
// {
//     "accountId":"shJYFWDwdlF1xuDnMmxqH-N1Pz04yDG5nf26zGW95TejHPsyNdWOhed8",
//     "id":"5yNG0UrSuRfJ1OWUqcgt9QOFP9QpddCIGc_qhXNhq24b1TEI8ulEfxFmRA",
//     "name":"BruceJohnny",
//     "profileIconId":6522,
//     "puuid":"WW__5C9IBjnA5xCoI0cWqhPi73wHCQglKIctVus2K4U6noBH9B62ilw_ib7__6Hr7emOd_Dst_5How",
//     "revisionDate":1710265929000,
//     "summonerLevel":46
// }
export default interface Summoner {
    accountId: string;
    id: string;
    name: string;
    profileIconId: number;
    puuid: string;
    revisionDate: number;
    summonerLevel: number;
}
// Specify the parameter types and return type
export async function get_summoner(region: string, name: string): Promise<Summoner | false> {

    let _name = name.includes("#") ? name.replace("#", "-") : name
    console.log(`${BACKEND_URL}/summoner/${region}/${_name}`)
    const response = await fetch(`${BACKEND_URL}/summoner/${region}/${_name}`);
    console.log(response.status)
    if (response.status === 200) {
        const data: Summoner = await response.json();
        return data;
    } else {
        return false;
    }
}

// get_match_history fro an array of ids
//end point int falsk => @app.route("/summoner/<string:region>/<string:puuid>/allmatches", methods=["GET"])
export async function get_match_history(region: string, puuid:string, ids: string): Promise<any> {
    const response = await fetch(`${BACKEND_URL}/summoner/matches/${region}/${puuid}/${ids}`);
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        return false;
    }
}

//summoner/insight/<string:region>/<string:puuid>
export async function get_summoner_insight(region: string, puuid:string): Promise<any> {
    const response = await fetch(`${BACKEND_URL}/summoner/insight/${region}/${puuid}`);
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        return false;
    }
}