import * as React from 'react';
import {View as Todos} from './todos';
import {View as Filter} from './filter';

export default function TodoApp(){
    return <div>
        <Todos/>
        <Filter/>
    </div>
}