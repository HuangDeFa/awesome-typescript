// https://ts.xcatliu.com/
// reference 如何编写一个d.ts文件 https://segmentfault.com/a/1190000009247663

declare const AppVersion:number;

/**
 *  A test function to console a greeting
 * @param {string} name the user name
 */
declare function SayHi(name:string):void;

/**
 * A test function to console a greeting
 * @param name 
 * @param callback 
 */
declare function SayHi(name:string,callback?:()=>void):void

declare interface Get{
    (id:string):string
    (name:string,age:number):string
}

declare var get:Get

declare class Person{
    static maxAge:number
    constructor(name:string,age:number)
    sayHi():void
}

declare namespace Demo{
    namespace Viewer{
        var imageViewId:string|number
        function getViewer(id:string|number):View
        class View{
            constructor(id:string|number);
            invalidate():void;
        }
    }
}