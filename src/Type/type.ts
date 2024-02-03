export interface Userinfo{
    email: string,
    firstname:string,
    lastname: string,
    mobile:string,
    dob:string,
    address:string,
    create_time:string
}

export interface Apitype{
    url:string,
    method:string,
    payload?:any
}
// export interface ApiResponse<T = unknown> {
//     success: boolean;
//     message?: string;
//     data: T;
//   }
export interface Response{
    data:any,
    status:number,
    statusText:string,
    config:any,
    request:any,
    header:any
}