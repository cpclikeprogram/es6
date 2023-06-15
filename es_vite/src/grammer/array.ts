let a:[number, number, number] = new Array(1,2,3) as [number, number, number];

// Number.prototype[Symbol.iterator] = function*(){
//     let i = 0;
//     let num = this.valueOf();
//     while(i<num){
//         yield i++;
//     }
// }


export namespace Grammer {

    type Int = number;
    
    export namespace Array {
        export function push(items:Int[],...rest:[]):[Int,Int]{
            items.push(...rest);
            return items as [Int,Int];
        }
    
        export function add(x:Int,y:Int){
            return x+y;
        }

        export function f(v:Int,w:Int,x:Int,y:Int,z:Int){
            return v+w+x+y+z;
        }
        export function f5(x:Int,y:Int,z:Int){
            return x+y+z;
        }
        export function f6(x:Int,y:Int,z:Int){
            return x+y+z;
        }

        export const ES5_VALUE = f5.apply(null,a);
        export const ES6_VALUE = f6(...a);
        export const REST_VALUE = f(12,2,3,4,5);

        
        
        



    }
}