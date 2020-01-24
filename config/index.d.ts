declare interface ProjectConfig{
    mode:'production'|'release',
    production:{
        baseUrl:string,
        host:string
        port:number,
    }
    release:{
        name:string,
        dir:string
    }
}
declare var config:ProjectConfig
export default config