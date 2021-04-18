import React from 'react'
import TestComponentFunc from './TestComponentFunc';
import TestComponentClass from './TestComponentClass';

export const Func = () => {

    const benchmark = (n) => {
        let start = Date.now();
        for (let i=0; i<n; i++){
            <TestComponentFunc />
        }
        console.log((Date.now()-start) / n)
    }

    const test = () =>{
        let start = Date.now();
        let end = start + 60 * 1000;
        let numberOfExecutions = 0;
        while(Date.now() < end){
          <TestComponentFunc />;
           numberOfExecutions++;
        }
        console.log(numberOfExecutions/(60 * 100));
      }
    return (
        <div>
           {(() => test())()}
        </div>
    )
}
