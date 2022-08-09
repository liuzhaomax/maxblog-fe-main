import configJson from "../config/config.json"

const config = {
    domain: configJson.release.fe.domain,
    beBaseUrl: configJson.run_mode === "release" ?
        `${configJson.release.be.protocol}://${configJson.release.be.domain}` :
        `${configJson.debug.be.protocol}://${configJson.debug.be.host}:${configJson.debug.be.port}`
}
export default config